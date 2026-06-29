import { useEffect, useRef } from 'react'

const GLYPHS = '01{}<>/;=$()[]+*&|!#'.split('')

export default function Cursor() {
  const canvas = useRef(null)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    if (!fine) return

    const cv = canvas.current
    const ctx = cv.getContext('2d')
    let w, h, dpr
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = cv.width = innerWidth * dpr
      h = cv.height = innerHeight * dpr
      cv.style.width = innerWidth + 'px'
      cv.style.height = innerHeight + 'px'
    }
    resize()
    window.addEventListener('resize', resize)

    const css = getComputedStyle(document.documentElement)
    const green = (css.getPropertyValue('--green') || '#51b75a').trim()
    const accent = (css.getPropertyValue('--accent') || '#ffdd4b').trim()
    const blue = (css.getPropertyValue('--blue') || '#5595ff').trim()
    const palette = [green, green, accent, blue]

    const chars = []
    let px = null, py = null, since = 0

    const spawn = (x, y, color) => {
      chars.push({
        x: x * dpr, y: y * dpr,
        vx: (Math.random() - 0.5) * 0.4 * dpr,
        vy: (0.5 + Math.random() * 0.9) * dpr,
        life: 1, decay: 0.012 + Math.random() * 0.02,
        ch: GLYPHS[(Math.random() * GLYPHS.length) | 0],
        size: (11 + Math.random() * 5) * dpr,
        color,
      })
    }

    const onMove = (e) => {
      const x = e.clientX, y = e.clientY
      if (px != null) {
        since += Math.hypot(x - px, y - py)
        if (since > 18) { since = 0; spawn(x, y, palette[(Math.random() * palette.length) | 0]) }
      }
      px = x; py = y
    }
    const onClick = (e) => {
      for (let i = 0; i < 6; i++) spawn(e.clientX, e.clientY, palette[(Math.random() * palette.length) | 0])
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onClick)

    let raf
    const loop = () => {
      ctx.clearRect(0, 0, w, h)
      ctx.textBaseline = 'middle'
      for (let i = chars.length - 1; i >= 0; i--) {
        const c = chars[i]
        c.x += c.vx; c.y += c.vy; c.vy += 0.02 * dpr
        c.life -= c.decay
        if (c.life <= 0) { chars.splice(i, 1); continue }
        ctx.globalAlpha = Math.min(1, c.life * 1.4)
        ctx.fillStyle = c.color
        ctx.font = `${c.size}px "JetBrains Mono", monospace`
        ctx.fillText(c.ch, c.x, c.y)
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onClick)
    }
  }, [])

  return <canvas ref={canvas} className="cursor-canvas" aria-hidden="true" />
}
