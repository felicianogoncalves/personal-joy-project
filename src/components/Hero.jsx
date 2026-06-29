import { SITE } from '../data'
import heroBg from '../assets/hero-servers.webp'

const DEPLOY_LOG = [
  { t: 'feliciano@prod:~$ uptime', c: 'cmd' },
  { t: ' 14:22:07 up 142 days,  load: 0.08 0.05 0.01', c: 'dim' },
  { t: 'feliciano@prod:~$ docker ps --format "{{.Names}}"', c: 'cmd' },
  { t: 'api  web  postgres  redis  nginx', c: 'dim' },
  { t: 'feliciano@prod:~$ git push origin main', c: 'cmd' },
  { t: 'Enumerating objects: 128, done.', c: 'dim' },
  { t: '> building image  ████████████  100%', c: 'warn' },
  { t: '✓ build succeeded', c: 'ok' },
  { t: 'feliciano@prod:~$ sudo systemctl reload nginx', c: 'cmd' },
  { t: '→ deploying to production', c: 'info' },
  { t: '  server-01.eu   ● online', c: 'ok' },
  { t: '  server-02.us   ● online', c: 'ok' },
  { t: '  edge-node-03   ● online', c: 'ok' },
  { t: '✓ deploy complete in 12.4s', c: 'ok' },
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-racks" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="hero-scrim" />
        <div className="hero-code">
          <div className="hero-code-bar">
            <span /><span /><span />
            <em>feliciano@prod: ~ — bash</em>
          </div>
          <pre className="hero-code-body">
            {DEPLOY_LOG.map((l, i) => (
              <span key={i} className={`cl cl-${l.c}`} style={{ '--i': i }}>{l.t}</span>
            ))}
          </pre>
        </div>
      </div>
      <div className="hero-grid-overlay" aria-hidden="true" />

      <div className="wrap hero-inner">
        <p className="hero-eyebrow reveal"><span className="live" /> Available for new projects</p>
        <h1 className="hero-name reveal-box"><span className="reveal-text">{SITE.name}</span></h1>
        <p className="hero-role reveal">{SITE.role}</p>
        <p className="hero-tagline reveal">{SITE.tagline}</p>
      </div>

      <a href="#projects" className="hero-scroll-cue" aria-label="Scroll para projetos">
        <span>scroll</span>
        <span className="hero-scroll-chev">↓</span>
      </a>
    </section>
  )
}
