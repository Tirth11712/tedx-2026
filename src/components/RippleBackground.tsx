'use client'

import { useEffect, useRef } from 'react'

const VERTEX_SRC = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}'

const FRAGMENT_SRC = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform vec2  uRes;
uniform float uTime;
uniform vec4  uRip[8];        /* x, y, startTime, amplitude */
uniform vec2  uMouse;
uniform float uMouseIn;
uniform float uCalm;

const float PI    = 3.141592653589793;
const float RSPD  = 0.42;
const float RFREQ = 62.0;
const float RSIG  = 0.21;
const float RDEC  = 0.36;
const float DSP   = 0.030;
const float TWIST = 5.2;

float hash(vec2 p){
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float vnoise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p){
  float v = 0.0, a = 0.5;
  for(int i = 0; i < 3; i++){ v += a * vnoise(p); p = p * 2.07 + 19.19; a *= 0.5; }
  return v;
}
vec2 rot2(vec2 p, float a){
  float c = cos(a), s = sin(a);
  return mat2(c, -s, s, c) * p;
}

void ripple(vec2 uv, out vec2 disp, out float glow){
  disp = vec2(0.0); glow = 0.0;
  for(int i = 0; i < 8; i++){
    vec4 rp = uRip[i];
    float age = uTime - rp.z;
    if(rp.w > 0.0 && age > 0.0){
      vec2 dv = uv - rp.xy;
      float d = length(dv) + 1e-5;
      float f = d - RSPD * age;
      float env = exp(-f * f / (RSIG * RSIG)) * exp(-RDEC * age) * rp.w;
      float wv = sin(RFREQ * f);
      disp += (dv / d) * DSP * wv * env;
      glow += env * (0.55 + 0.45 * wv);
    }
  }
}

float dotLayer(vec2 p, float fi, float cell, float t){
  vec2 g = p / cell;
  vec2 id = floor(g), f = fract(g);
  vec2 o = vec2(hash(id + fi * 13.1), hash(id + fi * 7.7)) * 0.72 + 0.14;
  float dd = length(f - o);
  float sz = 0.14 + 0.26 * hash(id + fi * 3.3);
  float b = smoothstep(sz, sz * 0.3, dd);
  b *= b;
  b *= 0.72 + 0.28 * sin(t * (1.0 + 2.0 * hash(id + fi * 5.5)) + hash(id) * 20.0);
  return b;
}

void main(){
  vec2 uv = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  float tm = uTime * uCalm;
  float r0 = length(uv);

  vec2 disp; float glow;
  ripple(uv, disp, glow);

  vec3 col = vec3(0.012, 0.010, 0.014);
  {
    vec2 srot = rot2(uv, tm * 0.006);
    float n = fbm(srot * 1.6 + 3.7);
    col += vec3(0.075, 0.016, 0.013) * n * n;

    vec2 g1 = srot / 0.052; vec2 id1 = floor(g1); vec2 f1 = fract(g1);
    vec2 o1 = vec2(hash(id1), hash(id1 + 4.7)) * 0.8 + 0.1;
    float d1 = length(f1 - o1);
    float h1 = hash(id1 + 9.3);
    float tw = 0.55 + 0.45 * sin(tm * (1.5 + 3.0 * h1) + h1 * 40.0);
    float star = smoothstep(0.10 + 0.08 * h1, 0.0, d1) * step(0.72, h1) * tw;
    vec3 sc = mix(vec3(0.85, 0.86, 0.95), vec3(1.0, 0.45, 0.35), step(0.93, h1));
    col += sc * star * (0.25 + 0.75 * smoothstep(0.12, 0.55, r0));

    vec2 g2 = srot / 0.19; vec2 id2 = floor(g2); vec2 f2 = fract(g2);
    vec2 df = f2 - (vec2(hash(id2 + 2.2), hash(id2 + 6.6)) * 0.7 + 0.15);
    float d2 = length(df);
    float h2 = hash(id2 + 8.8);
    if(h2 > 0.965){
      float flare = exp(-d2 * d2 * 900.0) * 0.9
                  + exp(-abs(df.x) * 60.0) * exp(-d2 * d2 * 160.0) * 0.4
                  + exp(-abs(df.y) * 60.0) * exp(-d2 * d2 * 160.0) * 0.4;
      col += vec3(1.0, 0.9, 0.85) * flare * (0.7 + 0.3 * sin(tm * 2.0 + h2 * 80.0))
           * 0.9 * (0.3 + 0.7 * smoothstep(0.1, 0.6, r0));
    }
  }

  for(int i = 0; i < 7; i++){
    float fi = float(i);
    float hsp = hash(vec2(fi, 1.7));
    float spd = 0.055 + 0.16 * hsp;
    float ang = tm * spd + fi * 2.39996;
    vec2 p = rot2(uv - disp * (0.85 + 0.3 * hsp), ang);
    float r = length(p) + 1e-4;
    float th = atan(p.y, p.x);
    float u = th - TWIST * log(max(r, 0.045));
    float s = fract(u / PI);
    float ad = min(s, 1.0 - s) * PI * r;
    float arm = exp(-(ad * ad) / (0.10 * 0.10));
    float dens = smoothstep(0.90, 0.28, r) * (0.30 + 0.70 * exp(-r * 2.6));
    float cell = 0.011 + 0.0045 * fi + 0.004 * hsp;
    float b = dotLayer(p, fi, cell, tm);
    float lum = b * arm * dens * (1.0 + 1.6 * glow);
    float heat = smoothstep(0.42, 0.05, r);
    vec3 pc = mix(vec3(0.93, 0.21, 0.13), vec3(1.0, 0.98, 0.94),
                  heat * (0.55 + 0.45 * hash(vec2(fi, 4.4))));
    col += pc * lum * (0.62 - 0.05 * fi);
  }

  float core = exp(-r0 * r0 * 55.0);
  col += mix(vec3(0.95, 0.85, 0.80), vec3(0.75, 0.14, 0.10), smoothstep(0.0, 0.20, r0))
       * core * (0.7 + 0.05 * sin(tm * 0.9));
  col += vec3(0.24, 0.06, 0.05) * exp(-r0 * 4.6);

  col += vec3(1.0, 0.42, 0.32) * glow * 0.34;

  if(uMouseIn > 0.003){
    vec2 dm = uv - uMouse;
    col += vec3(0.55, 0.10, 0.06) * uMouseIn * exp(-dot(dm, dm) / 0.016) * 0.5;
  }

  float vig = 1.0 - smoothstep(0.34, 1.30, length(uv * vec2(0.85, 1.05)));
  col *= mix(0.62, 1.05, vig);
  col += (hash(gl_FragCoord.xy + vec2(fract(uTime) * 113.0)) - 0.5) * 0.020;

  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`

interface RippleBackgroundProps {
  className?: string
  /** When false, disables click/cursor ripples, idle auto-ripples, and the
   * on-load wake-in blooms — leaving just the continuously rotating spiral. */
  interactive?: boolean
}

export default function RippleBackground({
  className,
  interactive = true,
}: RippleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const coarse = window.matchMedia('(pointer:coarse)').matches
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    const calm = prefersReducedMotion ? 0 : 1

    const gl = canvas.getContext('webgl', {
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    })
    if (!gl) return // graceful degradation: CSS background color shows instead

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

    const program = gl.createProgram()
    const vs = compile(gl.VERTEX_SHADER, VERTEX_SRC)
    const fs = compile(gl.FRAGMENT_SHADER, FRAGMENT_SRC)
    if (!program || !vs || !fs) return
    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)
    gl.useProgram(program)

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW
    )
    const posLoc = gl.getAttribLocation(program, 'p')
    gl.enableVertexAttribArray(posLoc)
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0)

    const U = {
      uRes: gl.getUniformLocation(program, 'uRes'),
      uTime: gl.getUniformLocation(program, 'uTime'),
      uMouse: gl.getUniformLocation(program, 'uMouse'),
      uMouseIn: gl.getUniformLocation(program, 'uMouseIn'),
      uCalm: gl.getUniformLocation(program, 'uCalm'),
      uRip: gl.getUniformLocation(program, 'uRip[0]'),
    }
    gl.uniform1f(U.uCalm, calm)

    let W = 2
    let H = 2

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(coarse ? 1.75 : 2, window.devicePixelRatio || 1)
      W = Math.max(2, Math.round(rect.width * dpr))
      H = Math.max(2, Math.round(rect.height * dpr))
      canvas.width = W
      canvas.height = H
      gl.viewport(0, 0, W, H)
      gl.uniform2f(U.uRes, W, H)
    }

    // Ripple state: 8 slots of (x, y, startTime, amplitude)
    const RIPN = 8
    const rip = new Float32Array(RIPN * 4)
    let ripI = 0
    const t0 = performance.now()
    const now = () => (performance.now() - t0) / 1000
    let lastAct = now()

    const addRipple = (x: number, y: number, amp: number) => {
      const i = ripI * 4
      rip[i] = x
      rip[i + 1] = y
      rip[i + 2] = now()
      rip[i + 3] = amp
      ripI = (ripI + 1) % RIPN
    }

    const toWorld = (clientX: number, clientY: number): [number, number] => {
      const rect = canvas.getBoundingClientRect()
      const sx = W / rect.width
      const sy = H / rect.height
      return [
        ((clientX - rect.left) * sx - 0.5 * W) / H,
        (0.5 * H - (clientY - rect.top) * sy) / H,
      ]
    }

    let mx = 0,
      my = 0,
      mtx = 0,
      mty = 0,
      mIn = 0,
      mTgt = 0

    const finePointer = window.matchMedia('(hover:hover) and (pointer:fine)').matches

    const handlePointerDown = (e: PointerEvent) => {
      const target = e.target as Element | null
      if (target?.closest?.('a, button, input, textarea, select, label, [data-no-ripple]')) return
      lastAct = now()
      const [wx, wy] = toWorld(e.clientX, e.clientY)
      // A real droplet doesn't stop at one ring: a strong first splash,
      // then smaller trailing rings so the click keeps propagating.
      addRipple(wx, wy, 1.0)
      if (!prefersReducedMotion) {
        window.setTimeout(() => addRipple(wx, wy, 0.62), 260)
        window.setTimeout(() => addRipple(wx, wy, 0.36), 560)
        window.setTimeout(() => addRipple(wx, wy, 0.2), 900)
      }
    }

    let lastTrailX = 0
    let lastTrailY = 0
    let lastTrailTime = 0
    let hasLastTrail = false

    const handlePointerMove = (e: PointerEvent) => {
      if (!finePointer) return
      mTgt = 1
      const [wx, wy] = toWorld(e.clientX, e.clientY)
      mtx = wx
      mty = wy

      // Droplet trail: a small ripple follows the cursor as it moves,
      // throttled by both distance and time so it reads as a trail, not noise
      if (!prefersReducedMotion) {
        const t = now()
        const rect = canvas.getBoundingClientRect()
        const dist = hasLastTrail
          ? Math.hypot(e.clientX - lastTrailX, e.clientY - lastTrailY)
          : Infinity
        if (dist > Math.min(rect.width, rect.height) * 0.035 && t - lastTrailTime > 0.09) {
          lastAct = t
          addRipple(wx, wy, 0.3)
          lastTrailX = e.clientX
          lastTrailY = e.clientY
          lastTrailTime = t
          hasLastTrail = true
        }
      }
    }

    const handlePointerLeave = () => {
      mTgt = 0
    }

    // Ambient auto-ripple when idle, so the vortex keeps breathing
    let idleInterval: ReturnType<typeof setInterval> | null = null
    const startIdleRipples = () => {
      if (!interactive || prefersReducedMotion || idleInterval) return
      idleInterval = setInterval(() => {
        if (now() - lastAct > 8 && document.visibilityState === 'visible') {
          lastAct = now() - 2
          const asp = W / H
          addRipple(
            (Math.random() * 2 - 1) * 0.42 * asp,
            (Math.random() * 2 - 1) * 0.38,
            0.45
          )
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

    const draw = () => {
      const t = now()
      for (let i = 0; i < RIPN; i++) {
        const j = i * 4
        if (rip[j + 3] > 0 && t - rip[j + 2] > 9.5) rip[j + 3] = 0
      }
      mx += (mtx - mx) * 0.12
      my += (mty - my) * 0.12
      mIn += (mTgt - mIn) * 0.08
      gl.uniform1f(U.uTime, t)
      gl.uniform4fv(U.uRip, rip)
      gl.uniform2f(U.uMouse, mx, my)
      gl.uniform1f(U.uMouseIn, mIn)
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

    resize()
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)
    // Listen on window, not the canvas — the canvas sits behind all page
    // content in the DOM, so clicks/moves over real content would never
    // reach a canvas-only listener. window listeners catch them regardless
    // of what was actually clicked.
    if (interactive) {
      window.addEventListener('pointerdown', handlePointerDown)
      window.addEventListener('pointermove', handlePointerMove)
      document.documentElement.addEventListener('mouseleave', handlePointerLeave)
    }

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
    if (interactive) {
      // Two soft blooms as the vortex wakes in
      setTimeout(() => addRipple(0, 0, 0.9), 900)
      setTimeout(() => addRipple(0, 0, 0.55), 1550)
    }

    const handleContextLost = (e: Event) => {
      e.preventDefault()
      stopLoop()
    }
    canvas.addEventListener('webglcontextlost', handleContextLost)

    return () => {
      stopLoop()
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('pointermove', handlePointerMove)
      document.documentElement.removeEventListener('mouseleave', handlePointerLeave)
      canvas.removeEventListener('webglcontextlost', handleContextLost)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [interactive])

  return <canvas ref={canvasRef} className={className} />
}
