import { SITE } from '../data'

const NAV = [
  { label: 'Stack', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="wrap footer-cta reveal">
        <p className="footer-cta-eyebrow">Have a project in mind?</p>
        <a className="footer-cta-link" href={`mailto:${SITE.email}`}>
          Let’s build something<span className="footer-cta-arrow">→</span>
        </a>
        <a className="footer-cta-mail" href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </div>

      <div className="wrap footer-inner">
        <nav className="footer-nav">
          {NAV.map((n) => (
            <a key={n.label} href={n.href}>{n.label}</a>
          ))}
        </nav>
        <div className="footer-social">
          {SITE.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
          ))}
        </div>
      </div>
      <div className="wrap footer-copy">© {new Date().getFullYear()} {SITE.name}</div>
    </footer>
  )
}
