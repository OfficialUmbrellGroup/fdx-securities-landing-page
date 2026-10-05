import { news } from '../data'
import { SectionHead } from './Bits'
import Icon from './Icon'
import Reveal from './Reveal'

export default function News() {
  return (
    <section className="section news" id="news">
      <div className="container">
        <div className="news__head">
          <SectionHead kicker="What's new" title={<>News & <em>announcements</em></>} />
          <a href="#news" className="btn btn--ghost hide-sm">
            View all <Icon name="arrow" size={16} />
          </a>
        </div>
        <div className="news__grid">
          {news.map((n, i) => (
            <Reveal as="a" href="#news" key={n.title} className="ncard" delay={i * 80}>
              <div className={`ncard__cover ncard__cover--${i}`} aria-hidden="true">
                <span className="ncard__tag mono">{n.tag}</span>
                <span className="ncard__glyph">{['◆', '◐', '●'][i]}</span>
              </div>
              <p className="ncard__date mono">{n.date}</p>
              <h3>{n.title}</h3>
              <p className="ncard__text">{n.text}</p>
              <span className="ncard__more">
                Read more <Icon name="arrow" size={14} />
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
