import { reasons } from '../data'
import { SectionHead } from './Bits'
import { AssetsIllo, CustodyIllo, RegulatedIllo, TeamIllo } from './Illos'
import Reveal from './Reveal'

const illos = { assets: AssetsIllo, regulated: RegulatedIllo, custody: CustodyIllo, team: TeamIllo }

export default function WhyFdx() {
  return (
    <section className="section why" id="why">
      <div className="container">
        <SectionHead
          kicker="Why FDX"
          title={
            <>
              Compliance first. Institution-ready. <em>Built to scale.</em>
            </>
          }
        />
        <div className="why__grid">
          {reasons.map((r, i) => {
            const Illo = illos[r.key]
            return (
              <Reveal as="article" key={r.key} className="why__card" delay={(i % 2) * 90}>
                <div className="why__illo">
                  <Illo />
                </div>
                <div className="why__copy">
                  <span className="why__num mono">0{i + 1}</span>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
