export const announcement = {
  text: 'Kaito Asset Management and FDX launch fJDIV',
  detail: 'bringing Japanese dividend equities on-chain.',
}

export const navMenus = [
  {
    label: 'Solutions',
    items: [
      { title: 'Invest', text: 'Access institutional-grade tokenized products.', href: '#products' },
      { title: 'Tokenize', text: 'Bring your fund or asset on-chain.', href: '#suite' },
      { title: 'Advise', text: 'Build tokenized portfolios with licensed guidance.', href: '#suite' },
    ],
  },
  {
    label: 'Web3 Solutions',
    items: [
      { title: 'Developer APIs', text: 'Subscriptions, redemptions, and NAV data via API.', href: '#ecosystem' },
      { title: 'DeFi integrations', text: 'Use FDX tokens as collateral and in vaults.', href: '#ecosystem' },
      { title: 'Treasury management', text: 'On-chain reserves for DAOs and protocols.', href: '#ecosystem' },
    ],
  },
  {
    label: 'About',
    items: [
      { title: 'About FDX', text: 'Our mission, licences, and leadership.', href: '#why' },
      { title: 'Media coverage', text: 'FDX in the press.', href: '#news' },
      { title: 'Contact us', text: 'Talk to our team.', href: '#cta' },
    ],
  },
]

export const regions = ['Global', 'Singapore', 'Hong Kong']

export const heroManagers = [
  { name: 'HALDEN', style: 0 },
  { name: 'Meridian', style: 1 },
  { name: 'NORTHBRIDGE', style: 2 },
  { name: 'Solace', style: 3 },
  { name: 'Arden', style: 1 },
  { name: 'KAITO AM', style: 2 },
  { name: 'Calder', style: 3 },
  { name: 'AURUM', style: 0 },
  { name: 'Helix', style: 1 },
  { name: 'STERLING', style: 2 },
]

export const credentials = [
  {
    kicker: 'Licensed & regulated by',
    title: 'Monetary Authority of Singapore',
    lines: ['Capital Markets Services Licence', 'Recognised Market Operator'],
    code: 'SG',
  },
  {
    kicker: 'Licensed & regulated by',
    title: 'Securities & Futures Commission, Hong Kong',
    lines: ['Type 1 — Dealing in Securities', 'Type 4 — Advising on Securities'],
    code: 'HK',
  },
  {
    kicker: 'Assets secured by',
    title: 'Tier-1 qualified custodians',
    lines: ['Bankruptcy-remote, independently held'],
    code: 'C1',
  },
]

export const marquee = [
  'Halden', 'Ethereum', 'Meridian Credit', 'Solana', 'Northbridge', 'Arbitrum',
  'Aurum Vaults', 'Base', 'Kaito AM', 'Polygon', 'Arden Real Assets', 'Avalanche',
]

export const chainMeta = {
  Ethereum: { short: 'E', color: '#627eea' },
  Solana: { short: 'S', color: '#9945ff' },
  Base: { short: 'B', color: '#0052ff' },
  Arbitrum: { short: 'A', color: '#28a0f0' },
  Polygon: { short: 'P', color: '#8247e5' },
  Avalanche: { short: 'Av', color: '#e84142' },
}

export const assetFilters = ['All', 'Cash & treasuries', 'Equity', 'Credit', 'Real assets']

export const products = [
  {
    ticker: 'fTBILL',
    name: 'Halden US Treasury Liquidity Token',
    manager: 'Halden Asset Management',
    mono: 'H',
    color: '#1d3a8a',
    metricLabel: '7-day yield',
    metric: '4.82%',
    min: '$1,000',
    text: 'Tokenized access to a AAA-rated money market fund holding short-dated US Treasury bills and overnight repo, with yield accruing daily.',
    assetClass: 'Money market',
    filter: 'Cash & treasuries',
    chains: ['Ethereum', 'Base', 'Solana'],
    retail: true,
  },
  {
    ticker: 'fGOLD',
    name: 'Aurum Physical Gold Fund Token',
    manager: 'Aurum Vaults',
    mono: 'Au',
    color: '#a87b1c',
    metricLabel: 'Benchmark',
    metric: 'LBMA Gold PM',
    min: '$1,000',
    text: 'Beneficial interest in a fund holding fully allocated, insured physical gold bars vaulted in Singapore and audited quarterly.',
    assetClass: 'Commodity fund',
    filter: 'Real assets',
    chains: ['Ethereum', 'Solana'],
    retail: true,
  },
  {
    ticker: 'fJDIV',
    name: 'Kaito Japan Dividend Equity Token',
    manager: 'Kaito Asset Management',
    mono: 'K',
    color: '#0b6e74',
    metricLabel: 'Tracking',
    metric: 'Kaito Japan Dividend 50',
    min: '$10,000',
    text: 'Regulated on-chain exposure to a value-oriented portfolio of high-dividend Japanese listed equities.',
    assetClass: 'Equity fund',
    filter: 'Equity',
    chains: ['Solana'],
  },
  {
    ticker: 'fEQIN',
    name: 'Northbridge US Equity Income Fund',
    manager: 'Northbridge Investments',
    mono: 'N',
    color: '#5b3cc4',
    metricLabel: 'Target return',
    metric: '9–12%',
    min: '$10,000',
    text: 'An actively managed US equity income strategy focused on dividend growth and long-term capital appreciation.',
    assetClass: 'Equity fund',
    filter: 'Equity',
    chains: ['Ethereum', 'Arbitrum'],
  },
  {
    ticker: 'fACRD',
    name: 'Meridian Asia Credit Fund Token',
    manager: 'Meridian Credit Partners',
    mono: 'M',
    color: '#7a2943',
    metricLabel: 'Target net return',
    metric: '10–12%',
    min: '$1,000,000',
    text: 'Institutional APAC public and private credit, focused on senior secured opportunities across Asian markets.',
    assetClass: 'Private credit',
    filter: 'Credit',
    chains: ['Ethereum'],
  },
  {
    ticker: 'fRINC',
    name: 'Arden Global Income Real Estate',
    manager: 'Arden Real Assets',
    mono: 'A',
    color: '#0f7a4a',
    metricLabel: 'Target return',
    metric: '5–6%',
    min: '$50,000',
    text: 'An income-oriented private real estate portfolio diversified across logistics, residential, and office assets globally.',
    assetClass: 'Real estate',
    filter: 'Real assets',
    chains: ['Ethereum', 'Avalanche'],
  },
  {
    ticker: 'fHYLD',
    name: 'Calder Global High Yield Token',
    manager: 'Calder Fixed Income',
    mono: 'C',
    color: '#c2410c',
    metricLabel: 'Target return',
    metric: '7–8%',
    min: '$25,000',
    text: 'A diversified portfolio of global high-yield corporate bonds, actively managed for income and downside protection.',
    assetClass: 'Fixed income',
    filter: 'Credit',
    chains: ['Polygon', 'Ethereum'],
  },
]

export const suite = [
  {
    key: 'invest',
    title: 'Invest',
    tagline: 'Access best-in-class tokenized products',
    text: 'Subscribe to money market, equity, credit, and real-asset strategies from established managers — with stablecoins or fiat, straight to your own wallet.',
    points: ['From $1,000 minimums', 'Daily NAV & on-chain reporting', 'Instant redemption on eligible funds'],
    cta: 'Explore products',
    href: '#products',
  },
  {
    key: 'tokenize',
    title: 'Tokenize',
    tagline: 'Bring real-world assets on-chain',
    text: 'Structure, mint, and distribute your fund as a permissioned token. We handle listing, compliance rules, transfer agency, and secondary liquidity.',
    points: ['Listing in as little as 6 weeks', 'Multi-chain issuance', 'Built-in distribution to verified investors'],
    cta: 'Partner with us',
    href: '#cta',
  },
  {
    key: 'advise',
    title: 'Advise',
    tagline: 'Build tokenized portfolios with licensed guidance',
    text: 'Our licensed advisers help family offices, treasuries, and wealth platforms construct and rebalance portfolios of tokenized assets.',
    points: ['Model portfolios by risk profile', 'Treasury & reserve strategies', 'White-label for wealth platforms'],
    cta: 'Book a consultation',
    href: '#cta',
  },
]

export const reasons = [
  {
    key: 'assets',
    title: 'Institutional-grade assets only',
    text: 'Every product on FDX is managed by a regulated asset manager and passes our listings committee — from money market funds to private credit.',
  },
  {
    key: 'regulated',
    title: 'Regulated from end to end',
    text: 'Licensed in Singapore and Hong Kong, and working exclusively with regulated managers, trustees, custodians, and administrators across the value chain.',
  },
  {
    key: 'custody',
    title: 'Transparent backing, secure custody',
    text: 'Each token follows published backing and redemption rules. Underlying assets sit with qualified custodians and are independently verified.',
  },
  {
    key: 'team',
    title: 'Run by markets and engineering veterans',
    text: 'Our leadership spans global banks, asset managers, exchanges, and core blockchain teams — capital-markets discipline with product speed.',
  },
]

export const voices = [
  {
    quote: 'FDX gave us a regulated path to distribute our treasury fund on-chain without rebuilding our operations. The investor onboarding and compliance controls were institutional from day one.',
    name: 'Amara Okafor',
    role: 'Head of Digital Assets, Halden Asset Management',
    mono: 'H',
    color: '#1d3a8a',
  },
  {
    quote: 'Being able to post a tokenized money market fund as collateral — and keep earning yield — changes how we manage margin across venues.',
    name: 'Daniel Reyes',
    role: 'Treasurer, Northwind Trading',
    mono: 'N',
    color: '#0b6e74',
  },
  {
    quote: 'The listing process was clear and fast. Six weeks from our first call to a live, multi-chain token with real secondary liquidity.',
    name: 'Hiroshi Tanaka',
    role: 'Managing Director, Kaito Asset Management',
    mono: 'K',
    color: '#7a2943',
  },
  {
    quote: 'Our DAO moved its operating reserves into fTBILL. Our finance committee understood the instrument, and our community could verify it on-chain.',
    name: 'Lena Fischer',
    role: 'Finance Lead, Openfield DAO',
    mono: 'O',
    color: '#5b3cc4',
  },
]

export const ecosystem = {
  'Asset managers': ['Halden Asset Management', 'Meridian Credit Partners', 'Northbridge Investments', 'Solace Capital', 'Arden Real Assets', 'Kaito Asset Management', 'Calder Fixed Income', 'Aurum Vaults', 'Helix Ventures', 'Sterling Private Bank', 'Ostrava Partners', 'Linden Wealth'],
  'Networks & Web3': ['Ethereum', 'Solana', 'Base', 'Arbitrum', 'Polygon', 'Avalanche', 'Openfield DAO', 'Northwind Trading', 'Vaultline', 'Keystone Oracles'],
  'Service providers': ['Ashgrove Trustees', 'Bastion Custody', 'Corvid Audit', 'Elm & Rowe LLP', 'Fairway Fund Admin', 'Granite Compliance', 'Harbor Transfer Agency', 'Ivory Security Labs'],
  Investors: ['Juniper Ventures', 'Kestrel Capital', 'Lumen Digital', 'Marlowe Holdings', 'Nimbus Fund', 'Orchid Partners'],
}

export const news = [
  {
    tag: 'Launch',
    date: '2 Oct 2026',
    title: 'Kaito Asset Management and FDX launch fJDIV on Solana',
    text: 'fJDIV brings a Japanese high-dividend equity strategy on-chain for eligible investors for the first time.',
  },
  {
    tag: 'Insights',
    date: '24 Sep 2026',
    title: 'Why Asia credit is the missing piece of on-chain portfolios',
    text: 'Tokenized credit is still dominated by US exposure. We look at the case for APAC diversification.',
  },
  {
    tag: 'Launch',
    date: '11 Sep 2026',
    title: 'Aurum and FDX launch a tokenized physical gold fund',
    text: 'fGOLD offers regulated on-chain access to allocated gold vaulted in Singapore, on Ethereum and Solana.',
  },
]

export const footerColumns = {
  Solutions: ['Invest', 'Tokenize', 'Advise', 'Developer APIs'],
  About: ['About FDX', 'Media coverage', 'Brand kit', 'Careers', 'Contact us'],
  Insights: ['News & press', 'Academy', 'Market notes', 'Events'],
  Support: ['Help centre', 'Bug bounty', 'Status'],
  Legal: ['Privacy policy', 'Cookie policy', 'Platform terms', 'Regulatory disclosures'],
}
