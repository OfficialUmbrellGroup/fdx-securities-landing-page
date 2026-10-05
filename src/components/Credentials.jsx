import { credentials, marquee } from '../data'
import Reveal from './Reveal'

function Stamp({ code, index }) {
  const id = `stamp-arc-${index}`
  return (
    <svg className="stamp" viewBox="0 0 80 80" aria-hidden="true">
      <defs>
        <path id={id} d="M40 40 m-29 0 a29 29 0 1 1 58 0 a29 29 0 1 1 -58 0" />
      </defs>
      <g className="stamp__spin">
        <circle cx="40" cy="40" r="37" className="stamp__ring" />
        <text className="stamp__arc">
          <textPath href={`#${id}`} textLength="180" lengthAdjust="spacing">
            FDX · VERIFIED · REGULATED ·
          </textPath>
        </text>
      </g>
      <circle cx="40" cy="40" r="21" className="stamp__ring" />
      <text x="40" y="45" textAnchor="middle" className="stamp__code">
        {code}
      </text>
    </svg>
  )
}

export default function Credentials() {
  return (
    <section className="creds" aria-label="Licences and custody">
      <div className="creds__inner">
        {credentials.map((c, i) => (
          <Reveal key={c.title} className="cred" delay={i * 80}>
            <Stamp code={c.code} index={i} />
            <div>
              <p className="cred__kicker mono">{c.kicker}</p>
              <p className="cred__title">{c.title}</p>
              {c.lines.map((l) => (
                <p key={l} className="cred__line">{l}</p>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
      <div className="marquee" aria-label="Ecosystem">
        <div className="marquee__track">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className="marquee__item" aria-hidden={i >= marquee.length}>
              <span className="marquee__glyph">◆</span> {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
