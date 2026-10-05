import { useState } from 'react'
import { announcement } from '../data'
import Icon from './Icon'

export default function AnnouncementBar() {
  const [open, setOpen] = useState(true)
  if (!open) return null
  return (
    <div className="announce">
      <a href="#news" className="announce__link">
        <span className="announce__tag mono">New</span>
        <span>
          <strong>{announcement.text}</strong>
          <span className="announce__detail"> — {announcement.detail}</span>
        </span>
        <span className="announce__more">
          Read more <Icon name="arrow" size={14} />
        </span>
      </a>
      <button className="announce__close" onClick={() => setOpen(false)} aria-label="Dismiss announcement">
        <Icon name="close" size={14} />
      </button>
    </div>
  )
}
