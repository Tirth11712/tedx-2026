'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!finePointer) return

    const el = cursorRef.current
    if (!el) return

    document.body.classList.add('customCursorActive')

    let tcx = window.innerWidth / 2
    let tcy = window.innerHeight / 2
    let cx = tcx
    let cy = tcy
    let cs = 1
    let targetScale = 1
    let cOp = 0
    let targetOp = 0
    let hot = false
    let frame = 0

    const handleMove = (e: PointerEvent) => {
      tcx = e.clientX
      tcy = e.clientY
      targetOp = 1
      const target = e.target as Element | null
      hot = !!target?.closest?.('a, button, input, label, [data-ui]')
    }

    const handleLeave = () => {
      targetOp = 0
    }

    const handleDown = () => {
      targetScale = 2.1
      window.setTimeout(() => {
        targetScale = 1
      }, 230)
    }

    document.addEventListener('pointermove', handleMove)
    document.documentElement.addEventListener('mouseleave', handleLeave)
    document.addEventListener('pointerdown', handleDown)

    const tick = () => {
      cx += (tcx - cx) * 0.3
      cy += (tcy - cy) * 0.3
      cs += (targetScale - cs) * 0.22
      cOp += (targetOp - cOp) * 0.16
      el.style.transform = `translate(${cx}px,${cy}px) scale(${cs.toFixed(3)})`
      el.style.opacity = cOp.toFixed(3)
      el.classList.toggle('hot', hot)
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('pointermove', handleMove)
      document.documentElement.removeEventListener('mouseleave', handleLeave)
      document.removeEventListener('pointerdown', handleDown)
      document.body.classList.remove('customCursorActive')
    }
  }, [])

  return (
    <div className="customCursor" ref={cursorRef} aria-hidden="true">
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M20 1.5v6.5M20 32v6.5M1.5 20h6.5M32 20h6.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <circle cx="20" cy="20" r="2.3" fill="currentColor" />
      </svg>
    </div>
  )
}
