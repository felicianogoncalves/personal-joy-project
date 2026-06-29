import { useEffect, useState } from 'react'

/** Theme with persistence + system preference fallback. */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  return { theme, toggle }
}

/** Multi-city live clocks. */
export function useClocks(clocks) {
  const [times, setTimes] = useState({})
  useEffect(() => {
    const update = () => {
      const next = {}
      for (const c of clocks) {
        try {
          next[c.city] = new Date().toLocaleTimeString('pt-PT', {
            timeZone: c.tz, hour: '2-digit', minute: '2-digit', hour12: false,
          })
        } catch { next[c.city] = '--:--' }
      }
      setTimes(next)
    }
    update()
    const id = setInterval(update, 15000)
    return () => clearInterval(id)
  }, [clocks])
  return times
}

/** Reveal-on-scroll for any element with class .reveal. */
export function useReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal, .reveal-box').forEach((el) => el.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    const els = document.querySelectorAll('.reveal, .reveal-box')
    els.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i % 4, 3) * 70}ms`
      io.observe(el)
    })
    return () => io.disconnect()
  }, [])
}

/** Adds .scrolled to header after small scroll. */
export function useScrolled(threshold = 10) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return scrolled
}
