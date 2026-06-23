import { arrowRightWhite, iconProfile, iconBuildings } from '../../assets'

const ENTITIES = [
  { id: 'individual', label: 'Individual', subtitle: 'Private individuals', icon: iconProfile },
  { id: 'business', label: 'Business', subtitle: 'Hospitals, HMOs, Organisations', icon: iconBuildings },
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

export default function EntityTypeSelect({ value, onChange, onProceed }) {
  return (
    <div className="flex flex-col gap-12 p-12">
      <div className="flex flex-col gap-12">
        <h2 className="text-center text-3xl font-bold tracking-tightest text-dark md:text-4xl">
          Select your Entity Type
        </h2>

        <div className="grid grid-cols-2 gap-3">
          {ENTITIES.map((entity) => {
            const selected = value === entity.id
            return (
              <button
                key={entity.id}
                type="button"
                onClick={() => onChange(entity.id)}
                className={`flex flex-col items-center justify-center gap-5 rounded-xl border px-6 py-8 transition-colors ${
                  selected
                    ? 'border-violet-700 bg-violet-50'
                    : 'border-ink-200 bg-white hover:border-violet-300'
                }`}
              >
                <Radio checked={selected} />
                <span className="flex size-16 items-center justify-center rounded-full bg-ink-100">
                  <img src={entity.icon} alt="" className="size-9" />
                </span>
                <span className="flex flex-col items-center gap-1 text-center">
                  <span
                    className={`text-lg font-semibold tracking-tightest ${
                      selected ? 'text-dark' : 'text-ink-500'
                    }`}
                  >
                    {entity.label}
                  </span>
                  <span className="text-sm tracking-tightest text-ink-500">
                    {entity.subtitle}
                  </span>
                </span>
              </button>
            )
          })}
        </div>
      </div>

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
    </div>
  )
}
