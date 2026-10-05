import { useState } from 'react'
import { ecosystem } from '../data'
import { SectionHead } from './Bits'
import Icon from './Icon'

const groups = Object.keys(ecosystem)
const initials = (name) =>
  name
    .replace(/[^A-Za-z& ]/g, '')
    .split(' ')
    .filter((w) => w && w !== '&')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')

export default function Ecosystem() {
  const [group, setGroup] = useState(groups[0])
  const [all, setAll] = useState(false)
  const items = ecosystem[group]
  const shown = all ? items : items.slice(0, 8)

  return (
    <section className="section eco" id="ecosystem">
      <div className="container">
        <div className="eco__head">
          <SectionHead kicker="FDX Ecosystem" title={<>Building the future of finance, <em>together</em></>} />
          <p className="eco__count">
            <span className="eco__big">{Object.values(ecosystem).flat().length}+</span>
            <span>partners across asset management, networks, and market infrastructure</span>
          </p>
        </div>

        <div className="eco__tabs" role="tablist">
          {groups.map((g) => (
            <button
              key={g}
              role="tab"
              aria-selected={group === g}
              className={group === g ? 'is-active' : ''}
              onClick={() => {
                setGroup(g)
                setAll(false)
              }}
            >
              {g} <span className="mono">{ecosystem[g].length}</span>
            </button>
          ))}
        </div>

        <ul className="eco__grid" key={group}>
          {shown.map((name, i) => (
            <li key={name} className="eco__tile" style={{ animationDelay: `${i * 30}ms` }}>
              <span className="eco__mono">{initials(name)}</span>
              <span className="eco__name">{name}</span>
            </li>
          ))}
        </ul>

        {items.length > 8 && (
          <button className="eco__more" onClick={() => setAll((a) => !a)}>
            {all ? 'Show fewer' : `Show all ${items.length}`}
            <Icon name="chevronDown" size={16} className={all ? 'flip' : ''} />
          </button>
        )}
      </div>
    </section>
  )
}
