'use client'

import { useEffect, useRef, useState } from 'react'

const MOBILE_BREAKPOINT = 768
const MAX_DROPS = 20

const VERT_SRC = `#version 300 es
layout(location=0) in vec2 aPos;
out vec2 vUv;
void main(){
  vUv = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}`

// Two-buffer height-field solving the discrete wave equation each substep:
// next = avg(neighbours) - previous, damped. This is what makes ripples
// expand, interfere and echo the way real water does, instead of a canned
// per-ripple decay curve.
const SIM_FRAG = `#version 300 es
precision highp float;
in vec2 vUv;
out vec4 outColor;

uniform highp sampler2D uState;
uniform vec2 uTexel;
uniform float uAspect;
uniform float uDamping;
uniform int uCount;
uniform vec4 uDrops[${MAX_DROPS}];

void main(){
  vec2 s = texture(uState, vUv).rg;

  float around = texture(uState, vUv + vec2(uTexel.x, 0.0)).r
               + texture(uState, vUv - vec2(uTexel.x, 0.0)).r
               + texture(uState, vUv + vec2(0.0, uTexel.y)).r
               + texture(uState, vUv - vec2(0.0, uTexel.y)).r;

  float next = around * 0.5 - s.g;
  next *= uDamping;

  for (int i = 0; i < ${MAX_DROPS}; i++){
    if (i >= uCount) break;
    vec4 d = uDrops[i];
    vec2 p = (vUv - d.xy) * vec2(uAspect, 1.0);
    next += d.w * exp(-dot(p, p) / (d.z * d.z));
  }

  outColor = vec4(clamp(next, -8.0, 8.0), s.r, 0.0, 1.0);
}`

// Refracts the live video frame through the height field. Tint/glint/caustic
// colors are tuned to the site's red-black brand palette instead of a neutral
// look, and coverUV() reproduces CSS object-fit:cover for the video's aspect
// ratio (the sim itself only knows the canvas aspect).
const REN_FRAG = `#version 300 es
precision highp float;
in vec2 vUv;
out vec4 outColor;

uniform highp sampler2D uState;
uniform highp sampler2D uScene;
uniform vec2 uTexel;
uniform vec2 uRes;
uniform vec2 uVideoRes;
uniform float uTime;
uniform float uSlope, uRefract, uChroma, uSpec, uShimmer;
uniform vec3 uTint;

float H(vec2 uv){ return texture(uState, uv).r; }

vec2 coverUV(vec2 uv, float screenAspect, float mediaAspect){
  vec2 result = uv;
  if (screenAspect > mediaAspect){
    result.y = (uv.y - 0.5) * (mediaAspect / screenAspect) + 0.5;
  } else {
    result.x = (uv.x - 0.5) * (screenAspect / mediaAspect) + 0.5;
  }
  return result;
}

void main(){
  float hl = H(vUv - vec2(uTexel.x, 0.0));
  float hr = H(vUv + vec2(uTexel.x, 0.0));
  float hd = H(vUv - vec2(0.0, uTexel.y));
  float hu = H(vUv + vec2(0.0, uTexel.y));
  float h  = H(vUv);

  vec2 amb = vec2(
    sin(vUv.y * 11.0 + uTime * 1.1) + 0.6 * sin(vUv.y * 23.0 - uTime * 1.9),
    sin(vUv.x *  9.0 - uTime * 0.9) + 0.6 * sin(vUv.x * 19.0 + uTime * 1.5)
  ) * 0.004 * uShimmer;

  vec2 grad = vec2(hl - hr, hd - hu) * uSlope + amb;
  vec3 n = normalize(vec3(grad, 1.0));

  vec2 off = n.xy * uRefract;
  vec2 m = smoothstep(vec2(0.0), vec2(0.06), vUv)
         * smoothstep(vec2(0.0), vec2(0.06), 1.0 - vUv);
  off *= m;

  float screenAspect = uRes.x / uRes.y;
  float videoAspect = uVideoRes.x / uVideoRes.y;
  vec2 baseUV = coverUV(vUv, screenAspect, videoAspect);

  vec2 ruv = baseUV + off;
  float spread = uChroma * length(off);
  vec3 col;
  col.r = texture(uScene, clamp(ruv + n.xy * spread, 0.001, 0.999)).r;
  col.g = texture(uScene, clamp(ruv,                 0.001, 0.999)).g;
  col.b = texture(uScene, clamp(ruv - n.xy * spread, 0.001, 0.999)).b;

  // Calm water reads slightly dark/warm against the brand red; agitated
  // water lifts toward the pale rose accent instead of a neutral white.
  float energy = clamp(length(grad) * 2.0, 0.0, 1.0);
  col *= mix(uTint, vec3(0.98, 0.86, 0.82), energy * 0.45);

  vec3 L  = normalize(vec3(-0.42, 0.62, 0.66));
  vec3 Hv = normalize(L + vec3(0.0, 0.0, 1.0));
  float ndh   = max(dot(n, Hv), 0.0);
  float glint = pow(ndh, 150.0);
  float sheen = pow(ndh, 14.0) * smoothstep(0.0, 0.35, energy);
  col += (glint * 1.15 + sheen * 0.10) * uSpec * vec3(1.0, 0.9, 0.86);

  col += smoothstep(0.06, 0.6, h) * 0.05 * vec3(1.0, 0.82, 0.78);

  float dn = fract(sin(dot(vUv * 913.7 + fract(uTime), vec2(12.9898, 78.233))) * 43758.5453);
  col += (dn - 0.5) * (2.0 / 255.0);

  outColor = vec4(col, 1.0);
}`

interface HeroRippleVideoProps {
  videoClassName?: string
  canvasClassName?: string
  canvasReadyClassName?: string
}

/** Sitewide fixed background: a looping video whose surface is a physically
 * simulated water height-field (click/tap, cursor trail, idle blooms, on-load
 * wake-in) refracting the footage beneath it. The canvas stays invisible
 * (transparent) until it has a real frame to show, so the plain <video>
 * underneath is always a safe fallback — before the first frame is ready, on
 * WebGL2/float-render-target-unsupported browsers, and permanently after a
 * lost WebGL context. Coarse-pointer (touch) devices skip WebGL entirely and
 * just show the plain video, matching how the rest of the effect already
 * scales down for touch input. */
export default function HeroRippleVideo({
  videoClassName,
  canvasClassName,
  canvasReadyClassName,
}: HeroRippleVideoProps) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null)
  const [canvasReady, setCanvasReady] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (!prefersReducedMotion) {
      video.play().catch(() => {})
    }
  }, [isMobile])

  useEffect(() => {
    const canvas = canvasRef.current
    const video = videoRef.current
    if (!canvas || !video) return

    // Reset on every (re)mount, most notably the mobile/desktop breakpoint
    // swap: the video element remounts with a fresh readyState, so the
    // canvas must go invisible again until the new stream proves itself.
    setCanvasReady(false)

    const coarse = window.matchMedia('(pointer:coarse)').matches
    if (coarse) return // plain video only; canvas stays hidden forever on this device

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const gl = canvas.getContext('webgl2', {
      antialias: true,
      alpha: true,
      premultipliedAlpha: true,
      powerPreference: 'high-performance',
    })
    if (!gl) return // graceful degradation: plain video stays visible, canvas stays hidden

    gl.getExtension('EXT_color_buffer_float')
    gl.getExtension('EXT_color_buffer_half_float')

    const pickFormat = (): { ifmt: number; type: number; linear: boolean } | null => {
      const works = (ifmt: number, type: number) => {
        const t = gl.createTexture()
        gl.bindTexture(gl.TEXTURE_2D, t)
        gl.texImage2D(gl.TEXTURE_2D, 0, ifmt, 4, 4, 0, gl.RGBA, type, null)
        const f = gl.createFramebuffer()
        gl.bindFramebuffer(gl.FRAMEBUFFER, f)
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, t, 0)
        const ok = gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE
        gl.bindFramebuffer(gl.FRAMEBUFFER, null)
        gl.deleteFramebuffer(f)
        gl.deleteTexture(t)
        return ok
      }
      if (works(gl.RGBA16F, gl.HALF_FLOAT)) {
        return { ifmt: gl.RGBA16F, type: gl.HALF_FLOAT, linear: true }
      }
      if (works(gl.RGBA32F, gl.FLOAT)) {
        return {
          ifmt: gl.RGBA32F,
          type: gl.FLOAT,
          linear: !!gl.getExtension('OES_texture_float_linear'),
        }
      }
      return null
    }

    const stateFmt = pickFormat()
    if (!stateFmt) return // no floating-point render targets: plain video fallback

    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)

    const compile = (type: number, src: string) => {
      const sh = gl.createShader(type)
      if (!sh) return null
      gl.shaderSource(sh, src)
      gl.compileShader(sh)
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(sh))
      }
      return sh
    }
    const link = (vsSrc: string, fsSrc: string) => {
      const p = gl.createProgram()
      const vs = compile(gl.VERTEX_SHADER, vsSrc)
      const fs = compile(gl.FRAGMENT_SHADER, fsSrc)
      if (!p || !vs || !fs) return null
      gl.attachShader(p, vs)
      gl.attachShader(p, fs)
      gl.linkProgram(p)
      if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
        console.error(gl.getProgramInfoLog(p))
        return null
      }
      return p
    }

    const simProg = link(VERT_SRC, SIM_FRAG)
    const renProg = link(VERT_SRC, REN_FRAG)
    if (!simProg || !renProg) return

    const vao = gl.createVertexArray()
    gl.bindVertexArray(vao)
    const vbo = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
    gl.enableVertexAttribArray(0)
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0)

    gl.useProgram(simProg)
    gl.uniform1i(gl.getUniformLocation(simProg, 'uState'), 0)
    const simU = {
      uTexel: gl.getUniformLocation(simProg, 'uTexel'),
      uAspect: gl.getUniformLocation(simProg, 'uAspect'),
      uDamping: gl.getUniformLocation(simProg, 'uDamping'),
      uCount: gl.getUniformLocation(simProg, 'uCount'),
      uDrops: gl.getUniformLocation(simProg, 'uDrops[0]'),
    }

    gl.useProgram(renProg)
    gl.uniform1i(gl.getUniformLocation(renProg, 'uState'), 0)
    gl.uniform1i(gl.getUniformLocation(renProg, 'uScene'), 1)
    const renU = {
      uTexel: gl.getUniformLocation(renProg, 'uTexel'),
      uRes: gl.getUniformLocation(renProg, 'uRes'),
      uVideoRes: gl.getUniformLocation(renProg, 'uVideoRes'),
      uTime: gl.getUniformLocation(renProg, 'uTime'),
      uSlope: gl.getUniformLocation(renProg, 'uSlope'),
      uRefract: gl.getUniformLocation(renProg, 'uRefract'),
      uChroma: gl.getUniformLocation(renProg, 'uChroma'),
      uSpec: gl.getUniformLocation(renProg, 'uSpec'),
      uShimmer: gl.getUniformLocation(renProg, 'uShimmer'),
      uTint: gl.getUniformLocation(renProg, 'uTint'),
    }
    gl.uniform2f(renU.uVideoRes, 1, 1)

    const sceneTex = gl.createTexture()
    gl.bindTexture(gl.TEXTURE_2D, sceneTex)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
    gl.texImage2D(
      gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE,
      new Uint8Array([0, 0, 0, 255])
    )

    const opts = {
      simScale: 0.5,
      simMax: 1024,
      steps: 3,
      damping: 0.9975,
      slope: 4.5,
      refraction: 0.08,
      chroma: 0.2,
      specular: 1.1,
      shimmer: prefersReducedMotion ? 0 : 1,
      // TEDx brand red/black, tuned as a subtle multiply against the footage.
      tint: [0.97, 0.88, 0.86] as [number, number, number],
    }

    let cw = 0
    let ch = 0
    let sw = 16
    let sh = 16
    let state: { tex: WebGLTexture | null; fbo: WebGLFramebuffer | null }[] = []
    let read = 0

    const makeState = (w: number, h: number) => {
      for (const s of state) {
        gl.deleteFramebuffer(s.fbo)
        gl.deleteTexture(s.tex)
      }
      state = []
      const filt = stateFmt.linear ? gl.LINEAR : gl.NEAREST
      for (let i = 0; i < 2; i++) {
        const tex = gl.createTexture()
        gl.bindTexture(gl.TEXTURE_2D, tex)
        gl.texImage2D(gl.TEXTURE_2D, 0, stateFmt.ifmt, w, h, 0, gl.RGBA, stateFmt.type, null)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filt)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filt)
        const fbo = gl.createFramebuffer()
        gl.bindFramebuffer(gl.FRAMEBUFFER, fbo)
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0)
        state.push({ tex, fbo })
      }
      read = 0
      gl.clearColor(0, 0, 0, 0)
      for (const s of state) {
        gl.bindFramebuffer(gl.FRAMEBUFFER, s.fbo)
        gl.clear(gl.COLOR_BUFFER_BIT)
      }
      gl.bindFramebuffer(gl.FRAMEBUFFER, null)
    }

    // Resizing recreates the sim buffers (their resolution is baked in), so
    // an in-flight ripple pattern is reset on resize/orientation change —
    // an acceptable, momentary side effect of a persistent height field.
    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(1.5, window.devicePixelRatio || 1)
      const nw = Math.max(2, Math.round(rect.width * dpr))
      const nh = Math.max(2, Math.round(rect.height * dpr))
      if (nw === cw && nh === ch) return
      cw = nw
      ch = nh
      canvas.width = cw
      canvas.height = ch
      const k = Math.min(opts.simScale, opts.simMax / Math.max(cw, ch))
      sw = Math.max(16, Math.round(cw * k))
      sh = Math.max(16, Math.round(ch * k))
      makeState(sw, sh)
    }

    resize()

    // ---- queued impulses: one-shot Gaussian bumps the sim carries forward ----
    const dropQueue: { u: number; v: number; r: number; s: number }[] = []
    const dropData = new Float32Array(MAX_DROPS * 4)
    const addDrop = (u: number, v: number, r: number, s: number) => {
      if (dropQueue.length < MAX_DROPS) dropQueue.push({ u, v, r, s })
    }

    const step = (drops: { u: number; v: number; r: number; s: number }[]) => {
      const write = 1 - read
      gl.bindFramebuffer(gl.FRAMEBUFFER, state[write].fbo)
      gl.viewport(0, 0, sw, sh)
      gl.useProgram(simProg)
      gl.activeTexture(gl.TEXTURE0)
      gl.bindTexture(gl.TEXTURE_2D, state[read].tex)
      const n = Math.min(drops.length, MAX_DROPS)
      if (n) {
        dropData.fill(0)
        for (let i = 0; i < n; i++) {
          const d = drops[i]
          const o = i * 4
          dropData[o] = d.u
          dropData[o + 1] = d.v
          dropData[o + 2] = d.r
          dropData[o + 3] = d.s
        }
      }
      gl.uniform2f(simU.uTexel, 1 / sw, 1 / sh)
      gl.uniform1f(simU.uAspect, sw / sh)
      gl.uniform1f(simU.uDamping, opts.damping)
      gl.uniform1i(simU.uCount, n)
      gl.uniform4fv(simU.uDrops, dropData)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
      read = write
    }

    // ---- pointer interaction: mirrors the click/trail/idle rhythm of the previous shader ----
    const toUV = (clientX: number, clientY: number): [number, number] => {
      const rect = canvas.getBoundingClientRect()
      return [(clientX - rect.left) / rect.width, 1 - (clientY - rect.top) / rect.height]
    }

    let lastAct = performance.now()

    const handlePointerDown = (e: PointerEvent) => {
      const target = e.target as Element | null
      if (target?.closest?.('a, button, input, textarea, select, label, [data-no-ripple]')) return
      lastAct = performance.now()
      const [u, v] = toUV(e.clientX, e.clientY)
      addDrop(u, v, 0.05, 0.9)
      if (!prefersReducedMotion) {
        window.setTimeout(() => addDrop(u, v, 0.06, 0.55), 260)
        window.setTimeout(() => addDrop(u, v, 0.07, 0.32), 560)
        window.setTimeout(() => addDrop(u, v, 0.08, 0.18), 900)
      }
    }

    let lastTrailX = 0
    let lastTrailY = 0
    let lastTrailTime = 0
    let hasLastTrail = false
    const finePointer = window.matchMedia('(hover:hover) and (pointer:fine)').matches

    const handlePointerMove = (e: PointerEvent) => {
      if (!finePointer || prefersReducedMotion) return
      const t = performance.now()
      const rect = canvas.getBoundingClientRect()
      const dist = hasLastTrail
        ? Math.hypot(e.clientX - lastTrailX, e.clientY - lastTrailY)
        : Infinity
      if (dist > Math.min(rect.width, rect.height) * 0.035 && t - lastTrailTime > 90) {
        lastAct = t
        const [u, v] = toUV(e.clientX, e.clientY)
        addDrop(u, v, 0.028, 0.16)
        lastTrailX = e.clientX
        lastTrailY = e.clientY
        lastTrailTime = t
        hasLastTrail = true
      }
    }

    // Ambient auto-ripple when idle, so the effect keeps breathing
    let idleInterval: ReturnType<typeof setInterval> | null = null
    const startIdleRipples = () => {
      if (prefersReducedMotion || idleInterval) return
      idleInterval = setInterval(() => {
        const t = performance.now()
        if (t - lastAct > 8000 && document.visibilityState === 'visible') {
          lastAct = t - 2000
          addDrop(0.12 + Math.random() * 0.76, 0.18 + Math.random() * 0.64, 0.045, 0.4)
        }
      }, 2500)
    }
    const stopIdleRipples = () => {
      if (idleInterval) {
        clearInterval(idleInterval)
        idleInterval = null
      }
    }

    let animationFrame = 0
    let running = false
    let hasUploadedFrame = false

    const draw = (tMs: number) => {
      if (video.readyState >= 2) {
        gl.activeTexture(gl.TEXTURE1)
        gl.bindTexture(gl.TEXTURE_2D, sceneTex)
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, video)
        gl.uniform2f(renU.uVideoRes, video.videoWidth, video.videoHeight)
        if (!hasUploadedFrame) {
          hasUploadedFrame = true
          setCanvasReady(true)
        }
      }

      const drops = dropQueue.splice(0, dropQueue.length)
      step(drops)
      for (let i = 1; i < opts.steps; i++) step([])

      gl.bindFramebuffer(gl.FRAMEBUFFER, null)
      gl.viewport(0, 0, cw, ch)
      gl.useProgram(renProg)
      gl.activeTexture(gl.TEXTURE0)
      gl.bindTexture(gl.TEXTURE_2D, state[read].tex)
      gl.activeTexture(gl.TEXTURE1)
      gl.bindTexture(gl.TEXTURE_2D, sceneTex)
      gl.uniform2f(renU.uTexel, 1 / sw, 1 / sh)
      gl.uniform2f(renU.uRes, cw, ch)
      gl.uniform1f(renU.uTime, tMs / 1000)
      gl.uniform1f(renU.uSlope, opts.slope)
      gl.uniform1f(renU.uRefract, opts.refraction)
      gl.uniform1f(renU.uChroma, opts.chroma)
      gl.uniform1f(renU.uSpec, opts.specular)
      gl.uniform1f(renU.uShimmer, opts.shimmer)
      gl.uniform3fv(renU.uTint, opts.tint)
      gl.drawArrays(gl.TRIANGLES, 0, 3)

      animationFrame = requestAnimationFrame(draw)
    }

    const startLoop = () => {
      if (running) return
      running = true
      startIdleRipples()
      animationFrame = requestAnimationFrame(draw)
    }
    const stopLoop = () => {
      if (!running) return
      running = false
      stopIdleRipples()
      cancelAnimationFrame(animationFrame)
    }

    let isIntersecting = true
    let isTabVisible = document.visibilityState !== 'hidden'
    const evaluateRunning = () => {
      if (isIntersecting && isTabVisible) startLoop()
      else stopLoop()
    }

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)
    // Listen on window, not the canvas — the canvas sits behind all page
    // content in the DOM, so clicks/moves over real content would never
    // reach a canvas-only listener. window listeners catch them regardless
    // of what was actually clicked.
    window.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('pointermove', handlePointerMove)

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting
        evaluateRunning()
      },
      { threshold: 0 }
    )
    intersectionObserver.observe(canvas)

    const handleVisibilityChange = () => {
      isTabVisible = document.visibilityState !== 'hidden'
      evaluateRunning()
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)

    startLoop()
    // Two soft blooms as the ripple layer wakes in
    if (!prefersReducedMotion) {
      window.setTimeout(() => addDrop(0.5, 0.5, 0.1, 0.7), 900)
      window.setTimeout(() => addDrop(0.5, 0.5, 0.13, 0.4), 1550)
    }

    const handleContextLost = (e: Event) => {
      e.preventDefault()
      stopLoop()
      // Permanent fallback: context loss is rare and usually terminal, so
      // just drop back to the plain video for the rest of the session
      // rather than trying to rebuild the WebGL state on restore.
      setCanvasReady(false)
    }
    canvas.addEventListener('webglcontextlost', handleContextLost)

    return () => {
      stopLoop()
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('pointermove', handlePointerMove)
      canvas.removeEventListener('webglcontextlost', handleContextLost)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      for (const s of state) {
        gl.deleteFramebuffer(s.fbo)
        gl.deleteTexture(s.tex)
      }
      gl.deleteTexture(sceneTex)
      gl.deleteProgram(simProg)
      gl.deleteProgram(renProg)
      gl.deleteBuffer(vbo)
      gl.deleteVertexArray(vao)
    }
  }, [isMobile])

  if (isMobile === null) return null

  return (
    <>
      <video
        ref={videoRef}
        key={isMobile ? 'mobile' : 'desktop'}
        className={videoClassName}
        src={isMobile ? '/assets/mobile.mp4' : '/assets/desktop.mp4'}
        poster="/assets/fallback.webp"
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        aria-hidden="true"
      />
      <canvas
        ref={canvasRef}
        key={isMobile ? 'mobile-canvas' : 'desktop-canvas'}
        className={
          canvasReady && canvasReadyClassName
            ? `${canvasClassName ?? ''} ${canvasReadyClassName}`.trim()
            : canvasClassName
        }
      />
    </>
  )
}
