import { STACK } from '../data'

const ICONS = {
  AWS: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 9.5c1 .8 4 2 8 2s7-1.2 8-2" />
      <path d="M3 14.5c2.5 1.7 6 2.5 9 2.5s6.5-.8 9-2.5" />
      <path d="M19.5 13.5c.7-.3 1.4-.2 1.7.1.3.3.2 1-.2 1.8" />
    </svg>
  ),
  Azure: (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M9 4 3.5 18h4.2l1-2.6 4 .9L9.6 18H21L13.6 4h-2.1l3.9 9.4-6 1.1L13 6.6 11.4 4z" />
    </svg>
  ),
  Docker: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
      <rect x="3" y="11" width="3" height="3" /><rect x="6.5" y="11" width="3" height="3" /><rect x="10" y="11" width="3" height="3" />
      <rect x="6.5" y="7.5" width="3" height="3" /><rect x="10" y="7.5" width="3" height="3" /><rect x="13.5" y="11" width="3" height="3" />
      <path d="M3 14h14c2.2 0 3.6-1 4.2-2.3-1.3-.6-2.4-.2-2.8.1-.3-1.4-1.3-2-1.8-2.2-.5 1-.4 2 .1 2.6" strokeLinecap="round" />
      <path d="M3 14c.3 3 2.4 5.5 6 5.5 4.4 0 7.6-2 8.6-5.5" strokeLinecap="round" />
    </svg>
  ),
  Terraform: (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M10 4v5l4.4 2.6V6.6zM4.6 7v5L9 14.6V9.6zM10 10.4v5l4.4 2.6v-5zM15 13.4v5l4.4-2.6v-5z" />
    </svg>
  ),
  Vercel: (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M12 4 21 19H3z" />
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
      <path d="M12 3c-3 0-3.6 1.2-3.6 2.8V8h4v.8H7.4C5.6 8.8 4 9.6 4 13s1.4 4.2 3.4 4.2h1.4v-2.4c0-1.8 1.3-3 3-3h3.4c1.6 0 2.8-1.3 2.8-2.9V5.8C18 4 16.7 3 12 3z" />
      <circle cx="9.4" cy="6" r=".7" fill="currentColor" stroke="none" />
    </svg>
  ),
  'React / TypeScript': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.6" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.6" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.6" transform="rotate(120 12 12)" />
    </svg>
  ),
  'MySQL / Supabase': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" strokeLinecap="round" />
      <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" strokeLinecap="round" />
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 4v9" /><path d="M7 13a4 4 0 0 0 4 4h3" />
      <circle cx="7" cy="4" r="2" fill="currentColor" stroke="none" />
      <circle cx="7" cy="15" r="2" fill="currentColor" stroke="none" />
      <circle cx="16" cy="17" r="2" fill="currentColor" stroke="none" />
    </svg>
  ),
  Stripe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 7.5c-1.2-.7-2.6-1-4-1-2.2 0-3.5 1-3.5 2.3 0 3.2 7.5 1.8 7.5 5.4 0 1.5-1.5 2.6-4 2.6-1.6 0-3.2-.4-4.5-1.2" />
    </svg>
  ),
  'Claude AI': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M12 4v16M4 12h16M6.3 6.3l11.4 11.4M17.7 6.3 6.3 17.7" />
    </svg>
  ),
  'Sophos Firewall': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 5 6v5c0 4 3 6.7 7 8 4-1.3 7-4 7-8V6z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
}

function mono(name) {
  return name.replace(/[^a-z0-9]/gi, '').slice(0, 2).toUpperCase()
}

export default function Stack() {
  return (
    <section id="services" className="stack">
      <div className="wrap stack-inner">
        <div className="stack-head reveal">
          <h2>The Core Stack</h2>
          <p>Technologies driving innovation</p>
        </div>

        <div className="stack-cats">
          {STACK.map((cat) => (
            <div key={cat.title} className="stack-cat reveal">
              <h4 className="stack-cat-title">{cat.title}</h4>
              <div className="stack-cards">
                {cat.items.map((s) => (
                  <div key={s.name} className="stack-card">
                    <span className="stack-icon" aria-hidden="true">
                      {ICONS[s.name] || <span className="stack-mono">{mono(s.name)}</span>}
                    </span>
                    <div className="stack-meta">
                      <h3>{s.name}</h3>
                      <p>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
