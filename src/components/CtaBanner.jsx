import Icon from './Icon'

const cells = Array.from({ length: 96 }, (_, i) => ({
  level: (i * 37 + (i % 7) * 11) % 5,
  delay: ((i * 53) % 40) / 10,
}))

export default function CtaBanner() {
  return (
    <section className="section cta" id="cta">
      <div className="container">
        <div className="cta__box">
          <div className="cta__copy">
            <p className="kicker kicker--light">
              <span className="kicker__dot" /> Get started
            </p>
            <h2>
              Ready to put capital markets <em>on-chain?</em>
            </h2>
            <p>Open an account in minutes, or talk to our team about issuing your own tokenized product.</p>
            <div className="cta__btns">
              <a href="#products" className="btn btn--accent">
                Explore products <Icon name="arrow" size={16} />
              </a>
              <a href="mailto:partners@fdx.example" className="btn btn--light">
                Partner with us
              </a>
            </div>
          </div>
          <div className="cta__mosaic" aria-hidden="true">
            {cells.map((c, i) => (
              <span key={i} data-l={c.level} style={{ animationDelay: `${c.delay}s` }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
