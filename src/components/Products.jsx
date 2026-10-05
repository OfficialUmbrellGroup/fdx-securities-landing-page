import { useEffect, useRef, useState } from 'react'
import { assetFilters, products } from '../data'
import { Chains, ManagerMark, SectionHead } from './Bits'
import Icon from './Icon'

const profiles = [
  { key: 'accredited', label: 'Accredited / institutional' },
  { key: 'retail', label: 'Non-accredited' },
]

function ProductCard({ p, locked }) {
  return (
    <article className={`pcard ${locked ? 'is-locked' : ''}`} style={{ '--c': p.color }}>
      <div className="pcard__top">
        <ManagerMark mono={p.mono} color={p.color} />
        <div>
          <p className="pcard__ticker">{p.ticker}</p>
          <p className="pcard__manager">{p.manager}</p>
        </div>
      </div>
      <h3 className="pcard__name">{p.name}</h3>
      <dl className="pcard__stats">
        <div>
          <dt>{p.metricLabel}</dt>
          <dd>{p.metric}</dd>
        </div>
        <div>
          <dt>Min. investment</dt>
          <dd>{p.min}</dd>
        </div>
      </dl>
      <p className="pcard__text">{p.text}</p>
      <dl className="pcard__meta">
        <div>
          <dt>Asset class</dt>
          <dd>{p.assetClass}</dd>
        </div>
        <div>
          <dt>Blockchain</dt>
          <dd>
            <Chains chains={p.chains} />
          </dd>
        </div>
      </dl>
      <a href="#cta" className="pcard__cta" tabIndex={locked ? -1 : 0}>
        View product <Icon name="arrow" size={16} />
      </a>
      {locked && (
        <div className="pcard__lock">
          <Icon name="lock" size={22} />
          <p>Available to accredited and institutional investors only</p>
        </div>
      )}
    </article>
  )
}

export default function Products() {
  const [profile, setProfile] = useState('accredited')
  const [filter, setFilter] = useState('All')
  const [edges, setEdges] = useState({ start: true, end: false })
  const trackRef = useRef(null)

  const list = products.filter((p) => filter === 'All' || p.filter === filter)

  const updateEdges = () => {
    const el = trackRef.current
    if (!el) return
    setEdges({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 8 })
  }

  useEffect(() => {
    const el = trackRef.current
    if (el) el.scrollTo({ left: 0 })
    updateEdges()
  }, [filter])

  const scroll = (dir) => {
    const el = trackRef.current
    const card = el?.querySelector('.pcard')
    if (!card) return
    el.scrollBy({ left: dir * (card.offsetWidth + 20), behavior: 'smooth' })
  }

  return (
    <section className="section products" id="products">
      <div className="container">
        <div className="products__head">
          <SectionHead kicker="FDX Invest" title={<>Invest in tokenized <em>real-world</em> assets</>}>
            Institutional strategies from regulated managers, issued as tokens you hold in your own wallet.
          </SectionHead>
          <div className="profile" role="radiogroup" aria-label="Investor profile">
            <span className="profile__label mono">Viewing as</span>
            <div className="profile__switch" style={{ '--x': profile === 'accredited' ? 0 : 1 }}>
              <span className="profile__thumb" aria-hidden="true" />
              {profiles.map((pr) => (
                <button
                  key={pr.key}
                  role="radio"
                  aria-checked={profile === pr.key}
                  className={profile === pr.key ? 'is-active' : ''}
                  onClick={() => setProfile(pr.key)}
                >
                  {pr.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="products__bar">
          <div className="chips" role="tablist" aria-label="Filter by asset class">
            {assetFilters.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                className={`chip ${filter === f ? 'is-active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="arrows">
            <button onClick={() => scroll(-1)} disabled={edges.start} aria-label="Previous products">
              <Icon name="arrowLeft" size={18} />
            </button>
            <button onClick={() => scroll(1)} disabled={edges.end} aria-label="Next products">
              <Icon name="arrow" size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="products__track" ref={trackRef} onScroll={updateEdges}>
        {list.map((p) => (
          <ProductCard key={p.ticker} p={p} locked={profile === 'retail' && !p.retail} />
        ))}
      </div>

      <div className="container products__foot">
        <p className="products__note">
          {profile === 'retail'
            ? 'Non-accredited investors can access selected products. Eligibility depends on your jurisdiction.'
            : 'Product availability depends on your jurisdiction and investor classification.'}
        </p>
        <a href="#cta" className="btn btn--ghost">
          View all products <Icon name="arrow" size={16} />
        </a>
      </div>
    </section>
  )
}
