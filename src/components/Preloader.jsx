import { useEffect, useState } from 'react'
import { SITE } from '../data'

export default function Preloader() {
  const [done, setDone] = useState(false)
  useEffect(() => {
    const id = setTimeout(() => setDone(true), 1500)
    return () => clearTimeout(id)
  }, [])

  return (
    <div className={`preloader${done ? ' done' : ''}`} aria-hidden="true">
      <div className="pre-name">
        {SITE.name.split('').map((ch, i) => (
          <span key={i} style={{ animationDelay: `${i * 45}ms` }}>{ch}</span>
        ))}
        <span className="pre-dot" />
      </div>
    </div>
  )
}
