import { useState } from 'react'
import { heroManagers, products, chainMeta } from '../data'
import { prefersReducedMotion, useInterval } from '../hooks'
import { Chains, ManagerMark } from './Bits'
import Icon from './Icon'

const deck = products.slice(0, 5)

function TokenDeck() {
  const [order, setOrder] = useState(() => deck.map((_, i) => i))
  const [paused, setPaused] = useState(false)

  useInterval(() => setOrder((o) => [...o.slice(1), o[0]]), paused || prefersReducedMotion() ? null : 3400)

  return (
    <div
      className="deck"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Featured tokenized products"
    >
      <div className="deck__orbit" aria-hidden="true">
        {Object.entries(chainMeta).map(([name, c], i) => (
          <span key={name} className="deck__planet" style={{ '--i': i, '--c': c.color }}>
            <span>{c.short}</span>
          </span>
        ))}
      </div>
      <div className="deck__grid" aria-hidden="true" />
      {deck.map((p, i) => {
        const pos = order.indexOf(i)
        return (
          <article
            key={p.ticker}
            className="deck__card"
            data-pos={pos}
            style={{ '--c': p.color }}
            onClick={() => pos !== 0 && setOrder((o) => [...o.slice(pos), ...o.slice(0, pos)])}
          >
            <div className="deck__head">
              <ManagerMark mono={p.mono} color={p.color} size={36} />
              <span className="deck__class mono">{p.assetClass}</span>
            </div>
            <p className="deck__ticker">{p.ticker}</p>
            <p className="deck__name">{p.name}</p>
            <dl className="deck__stats">
              <div>
                <dt>{p.metricLabel}</dt>
                <dd>{p.metric}</dd>
              </div>
              <div>
                <dt>Min. investment</dt>
                <dd>{p.min}</dd>
              </div>
            </dl>
            <div className="deck__foot">
              <Chains chains={p.chains} />
              <span className="deck__status mono">
                <span className="pulse" /> Subscriptions open
              </span>
            </div>
          </article>
        )
      })}
      <div className="deck__dots" role="tablist" aria-label="Choose product">
        {deck.map((p, i) => (
          <button
            key={p.ticker}
            role="tab"
            aria-selected={order[0] === i}
            aria-label={p.ticker}
            className={order[0] === i ? 'is-active' : ''}
            onClick={() => {
              const pos = order.indexOf(i)
              setOrder((o) => [...o.slice(pos), ...o.slice(0, pos)])
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <div className="hero__copy">
          <p className="kicker hero__kicker">
            <span className="kicker__dot" /> Licensed in Singapore & Hong Kong
          </p>
          <h1>
            Real-world finance, <em>native</em> to the open internet.
          </h1>
          <p className="hero__sub">
            FDX Securities takes regulated funds and securities on-chain — so investors, institutions, and builders can hold,
            move, and use real assets as easily as any other token.
          </p>
          <div className="hero__ctas">
            <a href="#products" className="btn btn--accent">
              Start investing <Icon name="arrow" size={16} />
            </a>
            <a href="#cta" className="btn btn--ghost">
              Book an intro call
            </a>
          </div>
          <div className="hero__trusted">
            <p>
              <strong>Built for on-chain builders.</strong> Backed by regulated institutions.
            </p>
            <ul className="hero__logos">
              {heroManagers.map((m) => (
                <li key={m.name} className={`wm wm--${m.style}`}>
                  {m.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <TokenDeck />
      </div>
    </section>
  )
}
