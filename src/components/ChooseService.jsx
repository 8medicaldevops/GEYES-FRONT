import { useState } from 'react'
import {
  svcTransport,
  svcStandby,
  svcAfterlife,
  svcUrgent,
  arrowRightWhite,
  arrowLeft,
  arrowRight,
} from '../assets'

const services = [
  {
    id: 'transport',
    tab: 'Ambulance Transport',
    icon: svcTransport,
    label: 'Ambulance Transport',
    heading: 'Emergency and non-emergency ambulance transport you can trust',
    description:
      'Fast, safe, and medically supported ambulance transportation for emergencies, hospital transfers, clinic visits, home care movement, and patient relocation services.',
    cta: 'Book Transport',
  },
  {
    id: 'standby',
    tab: 'Ambulance Standby',
    icon: svcStandby,
    label: 'Ambulance Standby',
    heading: 'Keep medical support on standby for your event',
    description:
      'Ensure rapid emergency response at concerts, conferences, weddings, sporting events, religious gatherings, and corporate functions with our on-site ambulance standby service.',
    cta: 'Book Standby',
  },
  {
    id: 'afterlife',
    tab: 'Afterlife Transport',
    icon: svcAfterlife,
    label: 'Afterlife Transport',
    heading: 'Dignified afterlife transport handled with care and respect',
    description:
      'Compassionate and professional transportation of the deceased, with respectful handling, proper documentation, and timely movement to mortuaries, homes, or burial sites.',
    cta: 'Book Afterlife Transport',
  },
  {
    id: 'urgent',
    tab: 'Urgent Care',
    icon: svcUrgent,
    label: 'Urgent Care',
    heading: 'Immediate urgent care when every minute matters',
    description:
      'Access prompt, expert-led urgent care for non-life-threatening conditions, with quick assessment, treatment, and onward referral whenever specialist attention is required.',
    cta: 'Book Urgent Care',
  },
]

export default function ChooseService() {
  const [active, setActive] = useState('transport')
  const current = services.find((s) => s.id === active)

  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-12 px-6 pb-[120px] pt-20 md:px-16 lg:px-[148px]">
        <div className="flex w-full flex-col items-start gap-6">
          <h2 className="text-center text-3xl font-semibold tracking-tightest text-ink-900 md:text-[36px]">
            Choose a Service
          </h2>

          {/* Tabs */}
          <div
            role="tablist"
            className="flex w-full flex-wrap items-start gap-2 border-b border-martinique-100"
          >
            {services.map((service) => {
              const isActive = service.id === active
              return (
                <button
                  key={service.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(service.id)}
                  className={`-mb-px flex items-center justify-center gap-1 px-3 py-2 transition-colors ${
                    isActive
                      ? 'border-b-2 border-violet-700'
                      : 'border-b-2 border-transparent'
                  }`}
                >
                  <img src={service.icon} alt="" className="size-8" />
                  <span
                    className={`whitespace-nowrap text-xl tracking-tightest ${
                      isActive
                        ? 'font-semibold text-ink-900'
                        : 'font-normal text-ink-500'
                    }`}
                  >
                    {service.tab}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Service detail card */}
        <div className="flex w-full flex-col items-start gap-5 rounded-3xl bg-ink-50 p-8 md:p-12">
          <p className="text-base font-semibold tracking-tightest text-violet-700">
            {current.label}
          </p>

          <div className="flex w-full flex-col items-start gap-12 lg:flex-row lg:gap-[120px]">
            <div className="flex flex-1 flex-col items-start gap-6">
              <p className="text-3xl font-semibold leading-tight tracking-tightest text-ink-900 md:text-[36px]">
                {current.heading}
              </p>
              <button className="flex items-center justify-center gap-1 rounded-lg bg-violet-700 px-5 py-3 text-lg font-bold tracking-tightest text-white transition-colors hover:bg-violet-700/90">
                {current.cta}
                <img src={arrowRightWhite} alt="" className="size-4" />
              </button>
            </div>

            <div className="flex flex-1 flex-col items-start gap-3">
              <p className="text-lg font-light leading-relaxed tracking-tightest text-ink-500">
                {current.description}
              </p>
              <button className="flex items-center justify-center gap-1 rounded-lg py-1">
                <img src={arrowLeft} alt="" className="size-4" />
                <span className="text-base font-semibold tracking-tightest text-violet-700">
                  Learn More
                </span>
                <img src={arrowRight} alt="" className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
