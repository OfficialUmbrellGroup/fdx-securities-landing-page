import { useState } from 'react'
import { suite } from '../data'
import { SectionHead } from './Bits'
import Icon from './Icon'
import { AdviseIllo, InvestIllo, TokenizeIllo } from './Illos'

const illos = { invest: InvestIllo, tokenize: TokenizeIllo, advise: AdviseIllo }

export default function Suite() {
  const [active, setActive] = useState('invest')

  return (
    <section className="section suite" id="suite">
      <div className="container">
        <SectionHead kicker="FDX Suite" title={<>One platform, <em>three</em> ways in</>} align="center">
          Whether you are allocating capital, issuing a fund, or advising clients, FDX is the regulated rail between
          traditional markets and on-chain finance.
        </SectionHead>

        <div className="suite__panels">
          {suite.map((s, i) => {
            const Illo = illos[s.key]
            const isActive = active === s.key
            return (
              <article
                key={s.key}
                className={`spanel ${isActive ? 'is-active' : ''}`}
                onMouseEnter={() => setActive(s.key)}
                onFocus={() => setActive(s.key)}
              >
                <button className="spanel__tab" onClick={() => setActive(s.key)} aria-expanded={isActive}>
                  <span className="spanel__num mono">0{i + 1}</span>
                  <span className="spanel__title">{s.title}</span>
                  <Icon name="arrowUpRight" size={20} className="spanel__icon" />
                </button>
                <div className="spanel__body">
                  <div className="spanel__illo">
                    <Illo />
                  </div>
                  <p className="spanel__tagline">{s.tagline}</p>
                  <p className="spanel__text">{s.text}</p>
                  <ul className="spanel__points">
                    {s.points.map((pt) => (
                      <li key={pt}>
                        <Icon name="check" size={16} /> {pt}
                      </li>
                    ))}
                  </ul>
                  <a href={s.href} className="btn btn--accent btn--sm">
                    {s.cta} <Icon name="arrow" size={14} />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
