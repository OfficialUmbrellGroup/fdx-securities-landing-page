const ink = 'var(--ink)'
const paper = 'var(--paper-3)'
const accent = 'var(--accent)'

export function InvestIllo() {
  const stacks = [
    { x: 60, n: 3, label: 'fTBILL' },
    { x: 140, n: 5, label: 'fGOLD' },
    { x: 220, n: 7, label: 'fACRD' },
  ]
  return (
    <svg viewBox="0 0 280 180" className="illo" aria-hidden="true">
      <line x1="16" y1="150" x2="264" y2="150" stroke={ink} strokeWidth="1" />
      <path d="M40 112 C 100 104, 150 80, 250 26" fill="none" stroke={accent} strokeWidth="1.5" strokeDasharray="4 5" />
      {stacks.map((s, i) => (
        <g key={s.label} className="illo__float" style={{ animationDelay: `${i * 0.4}s` }}>
          {Array.from({ length: s.n }, (_, k) => (
            <ellipse
              key={k}
              cx={s.x}
              cy={140 - k * 11}
              rx="28"
              ry="8"
              fill={k === s.n - 1 ? accent : paper}
              stroke={ink}
              strokeWidth="1.5"
            />
          ))}
          <text x={s.x} y="168" textAnchor="middle" className="illo__label">
            {s.label}
          </text>
        </g>
      ))}
      <circle cx="250" cy="26" r="5" fill={accent} />
    </svg>
  )
}

export function TokenizeIllo() {
  return (
    <svg viewBox="0 0 280 180" className="illo" aria-hidden="true">
      <rect x="22" y="30" width="96" height="124" rx="6" fill={paper} stroke={ink} strokeWidth="1.5" />
      <rect x="32" y="40" width="76" height="104" rx="3" fill="none" stroke={ink} strokeWidth="1" strokeDasharray="2 3" />
      <line x1="44" y1="62" x2="96" y2="62" stroke={ink} strokeWidth="2" />
      <line x1="44" y1="76" x2="88" y2="76" stroke={ink} strokeWidth="1" />
      <line x1="44" y1="86" x2="92" y2="86" stroke={ink} strokeWidth="1" />
      <line x1="44" y1="96" x2="80" y2="96" stroke={ink} strokeWidth="1" />
      <circle cx="88" cy="124" r="11" fill="none" stroke={accent} strokeWidth="2" />
      <g className="illo__flow">
        <circle cx="140" cy="92" r="3" fill={accent} />
        <circle cx="156" cy="92" r="3" fill={accent} />
        <circle cx="172" cy="92" r="3" fill={accent} />
      </g>
      <g className="illo__spin" style={{ transformOrigin: '226px 92px' }}>
        <circle cx="226" cy="92" r="42" fill={ink} />
        <circle cx="226" cy="92" r="32" fill="none" stroke={accent} strokeWidth="1.5" strokeDasharray="3 4" />
      </g>
      <text x="226" y="99" textAnchor="middle" className="illo__token">F</text>
    </svg>
  )
}

export function AdviseIllo() {
  const segs = [
    { v: 0.4, c: ink },
    { v: 0.25, c: accent },
    { v: 0.2, c: 'var(--ink-2)' },
    { v: 0.15, c: 'var(--paper-2)' },
  ]
  const r = 52
  const C = 2 * Math.PI * r
  let offset = 0
  return (
    <svg viewBox="0 0 280 180" className="illo" aria-hidden="true">
      <g transform="rotate(-90 90 90)">
        {segs.map((s, i) => {
          const el = (
            <circle
              key={i}
              cx="90"
              cy="90"
              r={r}
              fill="none"
              stroke={s.c}
              strokeWidth="22"
              strokeDasharray={`${s.v * C - 2} ${C}`}
              strokeDashoffset={-offset}
            />
          )
          offset += s.v * C
          return el
        })}
      </g>
      <text x="90" y="88" textAnchor="middle" className="illo__label">Balanced</text>
      <text x="90" y="104" textAnchor="middle" className="illo__small">model</text>
      {['Treasuries 40%', 'Credit 25%', 'Equity 20%', 'Gold 15%'].map((t, i) => (
        <g key={t}>
          <rect x="172" y={46 + i * 26} width="12" height="12" rx="3" fill={segs[i].c} stroke={ink} strokeWidth="1" />
          <text x="192" y={56 + i * 26} className="illo__small">{t}</text>
        </g>
      ))}
    </svg>
  )
}

export function AssetsIllo() {
  const bars = [44, 62, 78, 96, 118]
  return (
    <svg viewBox="0 0 260 150" className="illo" aria-hidden="true">
      <line x1="16" y1="132" x2="244" y2="132" stroke={ink} strokeWidth="1" />
      {bars.map((h, i) => (
        <g key={i}>
          <rect x={26 + i * 44} y={132 - h} width="30" height={h} rx="4" fill={i === bars.length - 1 ? accent : paper} stroke={ink} strokeWidth="1.5" />
          <circle cx={41 + i * 44} cy={132 - h - 12} r="7" fill={ink} />
        </g>
      ))}
    </svg>
  )
}

export function RegulatedIllo() {
  const steps = ['Issuer', 'Trustee', 'Custodian', 'Investor']
  return (
    <svg viewBox="0 0 260 150" className="illo" aria-hidden="true">
      {steps.map((s, i) => (
        <g key={s}>
          {i > 0 && <line x1={i * 62 - 6} y1="75" x2={i * 62 + 12} y2="75" stroke={ink} strokeWidth="1.5" strokeDasharray="3 3" />}
          <rect x={i * 62 + 12} y="52" width="48" height="46" rx="10" fill={paper} stroke={ink} strokeWidth="1.5" />
          <circle cx={i * 62 + 52} cy="56" r="8" fill={accent} />
          <path d={`M${i * 62 + 48} 56 l3 3 5 -6`} stroke={ink} strokeWidth="1.6" fill="none" />
          <text x={i * 62 + 36} y="118" textAnchor="middle" className="illo__small">{s}</text>
        </g>
      ))}
    </svg>
  )
}

export function CustodyIllo() {
  return (
    <svg viewBox="0 0 260 150" className="illo" aria-hidden="true">
      <rect x="30" y="20" width="110" height="110" rx="14" fill={paper} stroke={ink} strokeWidth="1.5" />
      <g className="illo__spin" style={{ transformOrigin: '85px 75px', animationDuration: '24s' }}>
        <circle cx="85" cy="75" r="34" fill="none" stroke={ink} strokeWidth="1.5" />
        {[0, 60, 120, 180, 240, 300].map((a) => (
          <line key={a} x1="85" y1="41" x2="85" y2="51" stroke={ink} strokeWidth="2" transform={`rotate(${a} 85 75)`} />
        ))}
      </g>
      <circle cx="85" cy="75" r="12" fill={accent} />
      <text x="160" y="58" className="illo__small">Reserves</text>
      <text x="160" y="84" className="illo__big">100.00%</text>
      <rect x="160" y="96" width="76" height="6" rx="3" fill="var(--paper-2)" />
      <rect x="160" y="96" width="76" height="6" rx="3" fill={accent} />
    </svg>
  )
}

export function TeamIllo() {
  const people = ['GS', 'JP', 'HK', 'ET', 'SG']
  return (
    <svg viewBox="0 0 260 150" className="illo" aria-hidden="true">
      {people.map((p, i) => (
        <g key={p}>
          <circle cx={50 + i * 40} cy="62" r="24" fill={i === 2 ? accent : paper} stroke={ink} strokeWidth="1.5" />
          <text x={50 + i * 40} y="67" textAnchor="middle" className="illo__label">{p}</text>
        </g>
      ))}
      <text x="130" y="122" textAnchor="middle" className="illo__small">200+ years combined in markets & engineering</text>
    </svg>
  )
}
