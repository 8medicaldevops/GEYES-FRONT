import { useState } from 'react'
import {
  heroBg,
  shieldTick,
  routing2,
  searchIcon,
  qaCall,
  qaHospital,
  qaBlood,
  qaMeds,
} from '../assets'
import FindCareModal from './FindCareModal'

const quickActions = [
  { icon: qaCall, label: 'Call Emergency Line', highlight: true },
  { icon: qaHospital, label: 'Find Hospital', action: 'hospital' },
  { icon: qaBlood, label: 'Find Blood', action: 'blood' },
  { icon: qaMeds, label: 'Find Emergency Medications', action: 'blood' },
]

export default function Hero({ onSearch, onQuickAction }) {
  const [isFindCareOpen, setFindCareOpen] = useState(false)
  const [query, setQuery] = useState('')

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Background wash */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-white" />
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 size-full object-cover opacity-15"
        />
      </div>

      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center gap-16 px-6 pb-32 pt-20 md:px-16 lg:px-[248px]">
        <div className="flex w-full flex-col items-center gap-12">
          <div className="flex w-full flex-col items-center gap-5">
            {/* Trust badge */}
            <div className="flex items-center gap-4 rounded-[36px] px-4 py-2">
              <span className="flex items-center gap-1.5">
                <img src={shieldTick} alt="" className="size-4" />
                <span className="text-base font-normal tracking-tightest text-ink-700 opacity-80">
                  Verified Care
                </span>
              </span>
              <span className="h-4 w-px bg-ink-200" />
              <span className="flex items-center gap-1.5">
                <img src={routing2} alt="" className="size-4" />
                <span className="text-base font-normal tracking-tightest text-ink-700 opacity-80">
                  Real-time Dispatch
                </span>
              </span>
            </div>

            {/* Headline */}
            <div className="flex w-full flex-col items-center gap-2 text-center">
              <h1 className="text-4xl font-bold leading-tight tracking-tightest text-ink-900 md:text-[48px]">
                Get Emergency Help in Seconds
              </h1>
              <p className="text-lg font-normal leading-snug tracking-tightest text-ink-600 opacity-80 md:text-xl">
                Find the nearest hospital, ambulance, or critical care instantly
              </p>
            </div>
          </div>

          {/* Search bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setFindCareOpen(true)
            }}
            className="flex w-full max-w-[944px] items-center justify-end gap-9 rounded-[48px] border border-ink-100 bg-white py-3 pl-6 pr-3 shadow-sm"
          >
            <div className="flex flex-1 items-center gap-2">
              <img src={searchIcon} alt="" className="size-7 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setFindCareOpen(true)}
                placeholder="Search health condition..."
                className="w-full bg-transparent text-base font-light tracking-tightest text-ink-500 outline-none placeholder:text-ink-500"
              />
            </div>
            <button
              type="submit"
              className="shrink-0 rounded-[120px] bg-violet-700 px-5 py-3 text-lg font-semibold tracking-tightest text-white transition-colors hover:bg-violet-700/90"
            >
              Find Care
            </button>
          </form>
        </div>

        {/* Quick action cards */}
        <div className="grid w-full grid-cols-2 gap-2 lg:grid-cols-4">
          {quickActions.map((action) => (
            <button
              key={action.label}
              onClick={() => action.action && onQuickAction?.(action.action)}
              className={`flex flex-col items-start justify-center gap-2 rounded-xl p-3 text-left transition-transform hover:-translate-y-0.5 ${
                action.highlight
                  ? 'bg-pink-500 text-white'
                  : 'bg-white text-ink-900 shadow-sm'
              }`}
            >
              <img src={action.icon} alt="" className="size-12" />
              <span className="text-sm font-semibold tracking-tightest">
                {action.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <FindCareModal
        isOpen={isFindCareOpen}
        onClose={() => setFindCareOpen(false)}
        initialQuery={query}
        onSearch={(value) => {
          setQuery(value)
          setFindCareOpen(false)
          onSearch?.(value)
        }}
      />
    </section>
  )
}
