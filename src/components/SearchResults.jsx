import Navbar from './Navbar'
import FacilityCard from './FacilityCard'
import AteAiPanel from './AteAiPanel'
import {
  SearchIcon,
  ArrowLeftIcon,
  LocationIcon,
  MoneyIcon,
  SettingsIcon,
  ChevronDownIcon,
} from './ui/icons'

const FACILITIES = [
  { name: 'Vertex', address: '281 Practice Road, Cardiff, ST68 3AB', fee: 'NGN 186,000' },
  { name: 'Meridian Health', address: '14 Awolowo Way, Ikeja, Lagos', fee: 'NGN 210,000' },
  { name: 'St. Andrews Clinic', address: '5 Marina Street, Lagos Island', fee: 'NGN 142,500' },
  { name: 'Crestview Medical', address: '90 Allen Avenue, Ikeja, Lagos', fee: 'NGN 175,000' },
  { name: 'Lakeside Hospital', address: '23 Admiralty Way, Lekki Phase 1', fee: 'NGN 320,000' },
  { name: 'Unity Care Centre', address: '7 Bode Thomas, Surulere, Lagos', fee: 'NGN 98,000' },
]

function FilterDropdown({ label }) {
  return (
    <button className="flex items-center gap-1 text-sm font-light tracking-tightest text-ink-500 transition-colors hover:text-ink-900">
      {label}
      <ChevronDownIcon className="size-4" />
    </button>
  )
}

export default function SearchResults({ query = 'Heart Attack', onBack }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <div className="mx-auto w-full max-w-[1440px] px-6 py-9 md:px-16">
        {/* Go back + search */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-1 text-base font-medium tracking-tightest text-ink-900 transition-colors hover:text-violet-700"
          >
            <ArrowLeftIcon className="size-4" />
            Go Back
          </button>

          <div className="flex w-full items-center gap-3 rounded-lg border border-ink-200 px-3 py-2 md:w-[301px]">
            <SearchIcon className="size-5 shrink-0 text-ink-500" />
            <input
              defaultValue={query}
              className="w-full bg-transparent text-sm tracking-tightest text-ink-900 outline-none"
            />
          </div>
        </div>

        {/* Two columns */}
        <div className="mt-8 flex flex-col gap-8 lg:flex-row">
          {/* Left: results */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold tracking-tightest text-ink-900 md:text-[28px]">
              Suggested Hospitals
            </h1>

            {/* Filters */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <div className="flex items-center gap-1">
                <LocationIcon className="size-5 text-ink-900" />
                <div className="flex items-center gap-3">
                  <FilterDropdown label="State" />
                  <FilterDropdown label="LGA" />
                  <FilterDropdown label="City" />
                </div>
              </div>

              <span className="hidden h-5 w-px bg-ink-200 sm:block" />

              <div className="flex items-center gap-1">
                <MoneyIcon className="size-5 text-ink-900" />
                <div className="flex items-center gap-3">
                  <FilterDropdown label="Min. Price" />
                  <FilterDropdown label="Max. Price" />
                </div>
              </div>

              <button className="flex items-center gap-2 text-sm font-light tracking-tightest text-ink-900 lg:ml-auto">
                <SettingsIcon className="size-4" />
                Advanced Filters
              </button>
            </div>

            {/* Grid */}
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {FACILITIES.map((facility) => (
                <FacilityCard key={facility.name} {...facility} />
              ))}
            </div>
          </div>

          {/* Right: AI panel */}
          <div className="w-full lg:w-[480px] lg:shrink-0">
            <AteAiPanel query={query} />
          </div>
        </div>
      </div>
    </div>
  )
}
