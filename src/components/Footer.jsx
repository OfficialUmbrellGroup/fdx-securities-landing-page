import { useState } from 'react'
import { footerColumns } from '../data'
import Icon from './Icon'
import Logo from './Logo'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo inverted />
            <p>The regulated rail between traditional capital markets and the open internet.</p>
            <form
              className="newsletter"
              onSubmit={(e) => {
                e.preventDefault()
                if (email) setDone(true)
              }}
            >
              <label htmlFor="nl" className="newsletter__label">
                Subscribe to market notes and product launches
              </label>
              {done ? (
                <p className="newsletter__done">
                  <Icon name="check" size={16} /> You&apos;re subscribed. Watch your inbox.
                </p>
              ) : (
                <div className="newsletter__row">
                  <input
                    id="nl"
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit" aria-label="Subscribe">
                    <Icon name="arrow" size={18} />
                  </button>
                </div>
              )}
            </form>
            <div className="footer__social">
              {['linkedin', 'x', 'youtube'].map((s) => (
                <a key={s} href="#top" aria-label={s}>
                  <Icon name={s} size={18} />
                </a>
              ))}
            </div>
          </div>
          <div className="footer__cols">
            {Object.entries(footerColumns).map(([title, links]) => (
              <div key={title}>
                <p className="footer__title mono">{title}</p>
                <ul>
                  {links.map((l) => (
                    <li key={l}>
                      <a href="#top">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__meta">
          <p>
            <span className="mono">Founding member</span> Asia Tokenization Alliance
          </p>
          <p>
            <span className="mono">Office</span> 1 Marina View, #20-01, Singapore 018989
          </p>
          <p>
            <span className="mono">Contact</span> hello@fdx.example
          </p>
        </div>

        <p className="footer__word" aria-hidden="true">
          FDX <em>Securities</em>
        </p>

        <div className="footer__legal">
          <p>
            FDX Securities Pte. Ltd. is licensed by the Monetary Authority of Singapore to conduct regulated activities under
            the Securities and Futures Act. FDX Securities (HK) Limited is licensed by the Securities and Futures Commission
            of Hong Kong. Licence details are available in our Regulatory disclosures.
          </p>
          <p>
            Nothing on this website is an offer or solicitation to buy or sell any security or investment product. Products
            are available only to eligible investors in permitted jurisdictions. Investing in tokenized securities involves
            risk, including possible loss of principal. Past performance and target returns are not guarantees of future
            results. All product names, figures, and testimonials shown are illustrative.
          </p>
          <p className="footer__copy">© 2026 FDX Securities. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
