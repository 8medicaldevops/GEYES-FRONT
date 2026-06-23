import { arrowRightWhite } from '../../assets'
import { ArrowLeftIcon } from '../ui/icons'

export const BUSINESS_TYPES = [
  { id: 'hospital', label: 'Hospital' },
  { id: 'hmo', label: 'HMO' },
  { id: 'corporate', label: 'Corporate' },
  { id: 'diagnostics', label: 'Diagnostics Centers' },
]

function Radio({ checked }) {
  return (
    <span
      className={`flex size-5 items-center justify-center rounded-full border-2 ${
        checked ? 'border-violet-700' : 'border-ink-200'
      }`}
    >
      {checked && <span className="size-2.5 rounded-full bg-violet-700" />}
    </span>
  )
}

export default function BusinessTypeSelect({ value, onChange, onProceed, onBack }) {
  return (
    <div className="flex flex-col gap-12 p-12">
      <div className="flex flex-col gap-12">
        <h2 className="text-center text-3xl font-bold tracking-tightest text-dark md:text-4xl">
          Select your Business type
        </h2>

        <div className="grid grid-cols-2 gap-3">
          {BUSINESS_TYPES.map((type) => {
            const selected = value === type.id
            return (
              <button
                key={type.id}
                type="button"
                onClick={() => onChange(type.id)}
                className={`flex flex-col items-center justify-center gap-5 rounded-xl border px-6 py-8 transition-colors ${
                  selected
                    ? 'border-violet-700 bg-violet-50'
                    : 'border-ink-200 bg-white hover:border-violet-300'
                }`}
              >
                <Radio checked={selected} />
                <span
                  className={`text-center text-lg font-semibold tracking-tightest ${
                    selected ? 'text-dark' : 'text-ink-500'
                  }`}
                >
                  {type.label}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <button
          type="button"
          disabled={!value}
          onClick={onProceed}
          className={`flex w-full items-center justify-center gap-1 rounded-lg px-5 py-3 text-lg font-bold tracking-tightest text-white transition-colors ${
            value ? 'bg-violet-700 hover:bg-violet-700/90' : 'cursor-not-allowed bg-violet-300'
          }`}
        >
          Proceed
          <img src={arrowRightWhite} alt="" className="size-4" />
        </button>
        <button
          type="button"
          onClick={onBack}
          className="flex w-full items-center justify-center gap-2 rounded-lg px-5 py-4 text-lg font-bold tracking-tightest text-violet-700"
        >
          <ArrowLeftIcon className="size-5" />
          Go Back
        </button>
      </div>
    </div>
  )
}
