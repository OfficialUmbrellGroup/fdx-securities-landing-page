import { useState } from 'react'
import { voices } from '../data'
import { prefersReducedMotion, useInterval } from '../hooks'
import { ManagerMark, SectionHead } from './Bits'
import Icon from './Icon'

export default function Voices() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const go = (d) => setIndex((i) => (i + d + voices.length) % voices.length)

  useInterval(() => go(1), paused || prefersReducedMotion() ? null : 7000)

  const v = voices[index]

  return (
    <section className="section voices" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="container voices__inner">
        <div className="voices__side">
          <SectionHead kicker="Voices" title={<>Heard from the <em>people</em> building with us</>} />
          <div className="arrows arrows--light">
            <button onClick={() => go(-1)} aria-label="Previous testimonial">
              <Icon name="arrowLeft" size={18} />
            </button>
            <span className="voices__count mono">
              {String(index + 1).padStart(2, '0')} / {String(voices.length).padStart(2, '0')}
            </span>
            <button onClick={() => go(1)} aria-label="Next testimonial">
              <Icon name="arrow" size={18} />
            </button>
          </div>
        </div>
        <figure className="voices__card" key={index} aria-live="polite">
          <span className="voices__mark" aria-hidden="true">“</span>
          <blockquote>{v.quote}</blockquote>
          <figcaption>
            <ManagerMark mono={v.mono} color={v.color} size={44} />
            <span>
              <strong>{v.name}</strong>
              <span>{v.role}</span>
            </span>
          </figcaption>
          <div className="voices__progress" aria-hidden="true">
            {voices.map((_, i) => (
              <span key={i} className={i === index ? 'is-active' : ''} />
            ))}
          </div>
        </figure>
      </div>
    </section>
  )
}
