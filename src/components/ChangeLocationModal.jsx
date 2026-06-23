import { useEffect, useState } from 'react'
import Modal from './ui/Modal'
import { locationIllustration, directUp, gps } from '../assets'

const CURRENT_LOCATION = 'Iyana-Ipaja, Lagos'

export default function ChangeLocationModal({
  isOpen,
  onClose,
  initialAddress = '',
  onChange,
}) {
  const [address, setAddress] = useState(initialAddress)

  useEffect(() => {
    if (isOpen) setAddress(initialAddress)
  }, [isOpen, initialAddress])

  const handleSubmit = (e) => {
    e.preventDefault()
    onChange?.(address.trim())
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      label="Change location"
      className="max-w-[640px]"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-9 p-9"
      >
        {/* Illustration + title */}
        <div className="flex w-full flex-col items-center gap-3 pt-6">
          <img
            src={locationIllustration}
            alt=""
            className="h-[133px] w-[200px] object-contain"
          />
          <div className="flex w-full flex-col items-center gap-1 text-center">
            <h2 className="text-2xl font-semibold tracking-tightest text-ink-900">
              Enter Location Address
            </h2>
            <p className="text-base font-light tracking-tightest text-ink-700">
              Tell us where you want to find emergency care or resources
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-12">
          {/* Address input + current location shortcut */}
          <div className="flex w-full items-center gap-6 rounded-lg border border-ink-200 p-4">
            <div className="flex flex-1 items-center gap-3">
              <img src={directUp} alt="" className="size-5 shrink-0" />
              <input
                type="text"
                autoFocus
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter pickup address"
                className="w-full bg-transparent text-base font-light tracking-tightest text-ink-900 outline-none placeholder:text-[#89868b]"
              />
            </div>
            <button
              type="button"
              onClick={() => setAddress(CURRENT_LOCATION)}
              className="flex shrink-0 items-center gap-1 rounded-[32px]"
            >
              <img src={gps} alt="" className="size-4" />
              <span className="whitespace-nowrap text-sm font-medium tracking-tightest text-ink-900">
                Current location
              </span>
            </button>
          </div>

          <div className="flex w-full flex-col gap-6">
            {/* Privacy note */}
            <div className="rounded-lg border border-ink-200 bg-ink-50 px-5 py-4">
              <p className="text-sm font-light leading-snug tracking-tightest text-ink-700">
                Eight Medical is committed to protecting patient confidentiality
                and will only use personal information to enhance the quality of
                care provided.
              </p>
            </div>

            <button
              type="submit"
              disabled={!address.trim()}
              className="w-full rounded-lg bg-violet-700 px-5 py-3 text-lg font-bold tracking-tightest text-white transition-colors hover:bg-violet-700/90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Change Location
            </button>
          </div>
        </div>
      </form>
    </Modal>
  )
}
