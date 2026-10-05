import { chainMeta } from '../data'

export function ManagerMark({ mono, color, size = 40 }) {
  return (
    <span className="mmark" style={{ '--c': color, width: size, height: size }} aria-hidden="true">
      {mono}
    </span>
  )
}

export function Chains({ chains, labelled = false }) {
  return (
    <span className="chains">
      {chains.map((c) => (
        <span key={c} className="chain" style={{ '--c': chainMeta[c].color }} title={c}>
          <span className="chain__dot">{chainMeta[c].short}</span>
          {labelled ? <span className="chain__name">{c}</span> : <span className="sr-only">{c}</span>}
        </span>
      ))}
    </span>
  )
}

export function SectionHead({ kicker, title, children, align = 'left' }) {
  return (
    <div className={`shead shead--${align}`}>
      <p className="kicker">
        <span className="kicker__dot" /> {kicker}
      </p>
      <h2>{title}</h2>
      {children && <p className="shead__lede">{children}</p>}
    </div>
  )
}
