import { CLOCKS } from '../data'
import { useClocks, useScrolled } from '../hooks'

export default function Header() {
  const scrolled = useScrolled()
  const times = useClocks(CLOCKS)

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="wrap bar">
        <a href="#top" className="logo">FELICIANOJR</a>

        <div className="head-center">
          <div className="clocks">
            {CLOCKS.map((c, i) => (
              <span className="clk" key={c.city}>
                <span className="c-city">{c.city}</span>
                <span>{times[c.city] || '--:--'}</span>
                {i < CLOCKS.length - 1 && <span className="c-sep">/</span>}
              </span>
            ))}
          </div>
        </div>

        <div className="head-right">
          <a href="#contact" className="status-pill">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="m8 12 3 3 5-6" />
            </svg>
            STATUS
          </a>
          <a href="#projects" className="menu-btn">MENU</a>
        </div>
      </div>
    </header>
  )
}
