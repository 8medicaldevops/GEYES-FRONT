import { facilityPhoto, facilityLogo } from '../assets'
import {
  LocationIcon,
  ClockIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  HospitalIcon,
  GlobeIcon,
} from './ui/icons'

export default function FacilityCard({
  name,
  type = 'Hospital',
  ownership = 'Public',
  address,
  hoursStatus = 'Open',
  hoursDetail = '• 12hrs • Closes 8 pm',
  feeLabel = 'Minimum Admission Fee',
  fee,
  ctaLabel = 'Book Ambulance Transport',
  photo = facilityPhoto,
  logo = facilityLogo,
}) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-ink-100 bg-white px-3 pb-5 pt-3">
      {/* Photo header */}
      <div className="relative h-[164px] w-full">
        <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-xl p-3">
          <img
            src={photo}
            alt={name}
            className="pointer-events-none absolute inset-0 size-full rounded-xl object-cover"
          />

          {/* top row: type badge + carousel arrows */}
          <div className="relative flex items-start justify-between">
            <span className="flex items-center gap-1 rounded-[14px] bg-pink-500 py-1 pl-1.5 pr-2 text-xs font-medium text-white backdrop-blur-sm">
              <HospitalIcon className="size-3" />
              {type}
            </span>
            <div className="flex items-center gap-2">
              <button
                aria-label="Previous photo"
                className="flex size-5 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm"
              >
                <ChevronLeftIcon className="size-3" />
              </button>
              <button
                aria-label="Next photo"
                className="flex size-5 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm"
              >
                <ChevronRightIcon className="size-3" />
              </button>
            </div>
          </div>

          {/* ownership pill */}
          <span className="relative flex w-fit items-center gap-1 self-end rounded-[14px] bg-ink-500/50 p-1 text-xs font-medium text-white backdrop-blur-sm">
            <GlobeIcon className="size-3.5" />
            {ownership}
          </span>
        </div>

        {/* overlapping logo */}
        <div className="absolute -bottom-5 left-2 size-12 overflow-hidden rounded-full border-[1.333px] border-white bg-[#b2892b]">
          <img src={logo} alt="" className="size-full object-cover" />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-3 px-2 pt-3">
        <h3 className="text-lg font-bold tracking-tightest text-ink-900">{name}</h3>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <LocationIcon className="size-4 shrink-0 text-ink-500" />
            <span className="text-sm font-light tracking-tightest text-ink-500">
              {address}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <ClockIcon className="size-4 shrink-0 text-ink-500" />
            <p className="text-sm tracking-tightest text-ink-500">
              <span className="font-medium text-green-700">{hoursStatus}</span>{' '}
              <span className="font-light">{hoursDetail}</span>
            </p>
            <ChevronDownIcon className="size-4 text-ink-500" />
          </div>
        </div>

        <div className="h-px w-full bg-ink-100" />

        <div className="flex items-center justify-between gap-9 rounded-xl bg-violet-50 px-3 py-2">
          <span className="text-sm font-medium tracking-tightest text-ink-900">
            {feeLabel}
          </span>
          <span className="whitespace-nowrap text-sm font-bold tracking-tightest text-violet-700">
            {fee}
          </span>
        </div>

        <button className="w-full rounded-xl bg-violet-700 p-3 text-base font-bold tracking-tightest text-white transition-colors hover:bg-violet-700/90">
          {ctaLabel}
        </button>
      </div>
    </div>
  )
}
