import { useEffect, useState } from 'react'
import Modal from './ui/Modal'
import ChangeLocationModal from './ChangeLocationModal'
import { searchIcon, locationPin, arrowDown } from '../assets'

const CONDITIONS = [
  'Sudden collapse',
  'Electric shock',
  'Pregnancy emergency',
  'Difficulty breathing',
  'Slurred speech',
  'Drowning',
  'Poisoning / overdose',
  'Heavy bleeding',
  'Burns / fire injury',
  'I’m not sure',
]

export default function FindCareModal({
  isOpen,
  onClose,
  initialQuery = '',
  onSearch,
  location = 'Iyana-Ipaja, Lagos',
}) {
  const [query, setQuery] = useState(initialQuery)
  const [currentLocation, setCurrentLocation] = useState(location)
  const [isLocationOpen, setLocationOpen] = useState(false)

  // Sync with the value coming from the trigger each time the modal opens.
  useEffect(() => {
    if (isOpen) setQuery(initialQuery)
  }, [isOpen, initialQuery])

  const handleSearch = () => {
    onSearch?.(query)
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      label="Find care"
      className="max-w-[1024px]"
    >
      <div className="flex flex-col items-center gap-12 px-6 pb-16 pt-20 md:gap-20 md:px-[120px] md:pb-[128px]">
        <div className="flex w-full flex-col items-center gap-12">
          <div className="flex w-full flex-col gap-6">
            <h2 className="text-2xl font-bold leading-tight tracking-tightest text-ink-900 md:text-[36px]">
              Enter medical condition or facility name/type
            </h2>

            {/* Large search box */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSearch()
              }}
              className="flex h-[164px] w-full flex-col items-end justify-center gap-2 rounded-xl border border-ink-100 bg-white p-6 shadow-[0px_1px_2px_rgba(0,0,0,0.1)]"
            >
              <div className="flex w-full flex-1 items-start gap-3">
                <img src={searchIcon} alt="" className="size-7 shrink-0" />
                <input
                  type="text"
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search health condition..."
                  className="w-full bg-transparent text-base font-light tracking-tightest text-ink-500 outline-none placeholder:text-ink-500"
                />
              </div>
              <button
                type="submit"
                className="shrink-0 rounded-[120px] bg-violet-700 px-5 py-4 text-base font-semibold tracking-tightest text-white transition-colors hover:bg-violet-700/90"
              >
                Find Care
              </button>
            </form>
          </div>

          {/* Location */}
          <button
            type="button"
            onClick={() => setLocationOpen(true)}
            className="flex items-center gap-2 opacity-80 transition-opacity hover:opacity-100"
          >
            <span className="flex items-center gap-1">
              <img src={locationPin} alt="" className="size-4" />
              <span className="text-base font-normal tracking-tightest text-ink-700">
                Your current location:{' '}
                <span className="font-semibold text-ink-900">
                  {currentLocation}
                </span>
              </span>
            </span>
            <img src={arrowDown} alt="" className="size-4" />
          </button>
        </div>

        {/* Condition chips */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {CONDITIONS.map((condition) => (
            <button
              key={condition}
              type="button"
              onClick={() => setQuery(condition)}
              className="rounded-[41px] bg-ink-100 px-4 py-2 text-base font-semibold tracking-tightest text-ink-500 transition-colors hover:bg-violet-50 hover:text-violet-700"
            >
              {condition}
            </button>
          ))}
        </div>
      </div>

      <ChangeLocationModal
        isOpen={isLocationOpen}
        onClose={() => setLocationOpen(false)}
        initialAddress={currentLocation}
        onChange={(address) => {
          if (address) setCurrentLocation(address)
          setLocationOpen(false)
        }}
      />
    </Modal>
  )
}
