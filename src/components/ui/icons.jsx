/**
 * Lightweight inline icon set used across the search results UI.
 * Each accepts standard SVG props (className, etc.) and inherits `currentColor`
 * so colour is controlled with Tailwind text utilities.
 */
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const SearchIcon = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" />
  </svg>
)

export const ArrowLeftIcon = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
)

export const LocationIcon = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)

export const ClockIcon = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)

export const MoneyIcon = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

export const SettingsIcon = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="M4 6h10M18 6h2M4 12h2M10 12h10M4 18h8M16 18h4" />
    <circle cx="16" cy="6" r="2" />
    <circle cx="8" cy="12" r="2" />
    <circle cx="14" cy="18" r="2" />
  </svg>
)

export const ChevronDownIcon = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="M6 9l6 6 6-6" />
  </svg>
)

export const ChevronLeftIcon = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="M15 18l-6-6 6-6" />
  </svg>
)

export const ChevronRightIcon = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="M9 18l6-6-6-6" />
  </svg>
)

export const HospitalIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M6 3h12a1 1 0 0 1 1 1v17H5V4a1 1 0 0 1 1-1zm5 4v2H9v2h2v2h2v-2h2V9h-2V7h-2z" />
  </svg>
)

export const GlobeIcon = (props) => (
  <svg viewBox="0 0 24 24" {...base} strokeWidth={1.4} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
  </svg>
)

export const SparklesIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2l1.8 4.9L18.7 8.7 13.8 10.5 12 15.4l-1.8-4.9L5.3 8.7l4.9-1.8L12 2zM18 14l.9 2.4 2.4.9-2.4.9L18 21l-.9-2.4-2.4-.9 2.4-.9L18 14z" />
  </svg>
)

export const PhoneIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.6 1 1 0 0 1-.25 1l-2.2 2.2z" />
  </svg>
)
