export default function Logo({ inverted = false }) {
  return (
    <span className={`logo ${inverted ? 'logo--inverted' : ''}`}>
      <svg className="logo__mark" width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
        <rect width="30" height="30" rx="7" className="logo__bg" />
        <rect x="7" y="8" width="16" height="3" rx="1.5" className="logo__bar" />
        <rect x="7" y="13.5" width="11" height="3" rx="1.5" className="logo__bar" />
        <rect x="7" y="19" width="6" height="3" rx="1.5" className="logo__bar" />
        <circle cx="21" cy="20.5" r="2.5" className="logo__dot" />
      </svg>
      <span className="logo__word">
        FDX <em>Securities</em>
      </span>
    </span>
  )
}
