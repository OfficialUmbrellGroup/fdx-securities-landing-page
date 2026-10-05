import { useCallback, useEffect, useRef, useState } from 'react'
import { navMenus, regions } from '../data'
import { useClickOutside } from '../hooks'
import Icon from './Icon'
import Logo from './Logo'

function Dropdown({ menu, open, onToggle }) {
  return (
    <div className={`nav__item ${open ? 'is-open' : ''}`}>
      <button className="nav__trigger" aria-expanded={open} onClick={onToggle}>
        {menu.label} <Icon name="chevronDown" size={14} />
      </button>
      <div className="nav__panel" role="menu">
        {menu.items.map((item) => (
          <a key={item.title} href={item.href} className="nav__entry" role="menuitem" onClick={onToggle}>
            <span className="nav__entry-title">
              {item.title} <Icon name="arrowUpRight" size={14} />
            </span>
            <span className="nav__entry-text">{item.text}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null)
  const [region, setRegion] = useState(regions[0])
  const [regionOpen, setRegionOpen] = useState(false)
  const [drawer, setDrawer] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)
  const regionRef = useRef(null)

  const closeMenus = useCallback(() => setOpenMenu(null), [])
  const closeRegion = useCallback(() => setRegionOpen(false), [])
  useClickOutside(navRef, closeMenus, openMenu !== null)
  useClickOutside(regionRef, closeRegion, regionOpen)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = drawer ? 'hidden' : ''
  }, [drawer])

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header__inner">
        <a href="#top" aria-label="FDX Securities home">
          <Logo />
        </a>

        <nav className="nav" ref={navRef} aria-label="Primary">
          {navMenus.map((menu) => (
            <Dropdown
              key={menu.label}
              menu={menu}
              open={openMenu === menu.label}
              onToggle={() => setOpenMenu((m) => (m === menu.label ? null : menu.label))}
            />
          ))}
          <a href="#news" className="nav__link">Insights</a>
          <a href="#news" className="nav__link nav__link--event">
            Tokenization Forum <span className="nav__badge mono">Nov</span>
          </a>
        </nav>

        <div className="header__actions">
          <div className={`region ${regionOpen ? 'is-open' : ''}`} ref={regionRef}>
            <button className="region__btn" onClick={() => setRegionOpen((o) => !o)} aria-expanded={regionOpen}>
              <Icon name="globe" size={16} /> {region} <span className="region__lang">· EN</span>
              <Icon name="chevronDown" size={14} />
            </button>
            <ul className="region__menu">
              {regions.map((r) => (
                <li key={r}>
                  <button
                    className={r === region ? 'is-active' : ''}
                    onClick={() => {
                      setRegion(r)
                      setRegionOpen(false)
                    }}
                  >
                    {r} {r === region && <Icon name="check" size={14} />}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <a href="#cta" className="btn btn--ghost btn--sm hide-md">Log in</a>
          <a href="#cta" className="btn btn--ink btn--sm hide-sm">Sign up</a>
          <button className="header__burger" onClick={() => setDrawer(true)} aria-label="Open menu">
            <Icon name="menu" size={22} />
          </button>
        </div>
      </div>

      <div className={`drawer ${drawer ? 'is-open' : ''}`} aria-hidden={!drawer}>
        <div className="drawer__top">
          <Logo />
          <button onClick={() => setDrawer(false)} aria-label="Close menu">
            <Icon name="close" size={22} />
          </button>
        </div>
        <div className="drawer__body">
          {navMenus.map((menu) => (
            <details key={menu.label} className="drawer__group">
              <summary>
                {menu.label} <Icon name="chevronDown" size={16} />
              </summary>
              {menu.items.map((item) => (
                <a key={item.title} href={item.href} onClick={() => setDrawer(false)}>
                  {item.title}
                  <span>{item.text}</span>
                </a>
              ))}
            </details>
          ))}
          <a className="drawer__link" href="#news" onClick={() => setDrawer(false)}>Insights</a>
          <a className="drawer__link" href="#news" onClick={() => setDrawer(false)}>Tokenization Forum</a>
        </div>
        <div className="drawer__cta">
          <a href="#cta" className="btn btn--ghost" onClick={() => setDrawer(false)}>Log in</a>
          <a href="#cta" className="btn btn--ink" onClick={() => setDrawer(false)}>Sign up</a>
        </div>
      </div>
    </header>
  )
}
