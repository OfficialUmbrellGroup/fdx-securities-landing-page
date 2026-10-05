const paths = {
  arrow: 'M5 12h14M13 5l7 7-7 7',
  arrowUpRight: 'M7 17 17 7M8 7h9v9',
  arrowLeft: 'M19 12H5M11 5l-7 7 7 7',
  phone: 'M7 2h10v20H7zM11 18h2',
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0',
  chevronDown: 'm6 9 6 6 6-6',
  menu: 'M3 6h18M3 12h18M3 18h18',
  close: 'M18 6 6 18M6 6l12 12',
  check: 'M20 6 9 17l-5-5',
  diamond: 'M12 3 21 12 12 21 3 12zM4 20h.01',
  globe: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20',
  stack: 'M4 5h16v4H4zM4 11h16v4H4zM4 17h16v3H4z',
  chat: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2zM8 10h.01M12 10h.01M16 10h.01',
  shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4',
  bolt: 'M13 2 3 14h9l-1 8 10-12h-9z',
  chart: 'M3 3v18h18M7 15l4-4 3 3 6-6',
  swap: 'M7 4 3 8l4 4M3 8h14M17 20l4-4-4-4M21 16H7',
  lock: 'M5 11h14v10H5zM8 11V7a4 4 0 0 1 8 0v4',
  link: 'M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7',
  linkedin: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  x: 'M4 4l16 16M20 4 4 20',
  youtube: 'M22 8a4 4 0 0 0-3-3C17 4.5 12 4.5 12 4.5s-5 0-7 .5a4 4 0 0 0-3 3 42 42 0 0 0 0 8 4 4 0 0 0 3 3c2 .5 7 .5 7 .5s5 0 7-.5a4 4 0 0 0 3-3 42 42 0 0 0 0-8zM10 15V9l5 3z',
}

export default function Icon({ name, size = 24, strokeWidth = 1.75, className }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  )
}
