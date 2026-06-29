import { PROJECTS } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-num">01</span>
          <span className="sec-title">Selected Projects</span>
          <span className="sec-line" />
        </div>

        <div className="proj-grid">
          {PROJECTS.map((p, i) => {
            const external = p.href && p.href.startsWith('http')
            const Tag = p.href ? 'a' : 'div'
            return (
              <Tag
                key={p.title}
                className={`proj-card reveal${i === 0 ? ' proj-card--featured' : ''}`}
                href={p.href || undefined}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
              >
                <img className="proj-img" src={p.img} alt={p.title} loading="lazy" />
                <span className="proj-index">{String(i + 1).padStart(2, '0')}</span>
                <div className="proj-info">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  {p.href && <span className="proj-url">{p.href.replace('https://', '')}</span>}
                </div>
              </Tag>
            )
          })}
        </div>
      </div>
    </section>
  )
}
