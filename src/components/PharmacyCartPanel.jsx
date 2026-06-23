import { facilityPhoto } from '../assets'
import { LocationIcon, ClockIcon, ChevronDownIcon } from './ui/icons'
import QuantityStepper from './ui/QuantityStepper'

const formatNaira = (amount) => `NGN ${amount.toLocaleString('en-US')}`

function TrashIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6M10 11v6M14 11v6" />
    </svg>
  )
}

export default function PharmacyCartPanel({
  pharmacy = {
    name: 'Vertex Pharmacy',
    address: '281 Practice Road, Cardiff, ST68 3AB',
    hoursStatus: 'Open',
    hoursDetail: '• 12hrs • Closes 8 pm',
    items: '71 items',
  },
  cart = [],
  onIncrement,
  onDecrement,
  onRemove,
  onClear,
  onOrder,
}) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <aside className="flex flex-col gap-5 rounded-2xl border border-ink-100 bg-white p-3">
      {/* Pharmacy header */}
      <div className="flex flex-col gap-4">
        <img
          src={facilityPhoto}
          alt={pharmacy.name}
          className="h-[136px] w-full rounded-xl object-cover"
        />
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold tracking-tightest text-ink-900">
            {pharmacy.name}
          </h2>
          <div className="flex items-center gap-1">
            <LocationIcon className="size-4 shrink-0 text-ink-500" />
            <span className="text-sm font-light tracking-tightest text-ink-500">
              {pharmacy.address}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <ClockIcon className="size-4 shrink-0 text-ink-500" />
            <p className="text-sm tracking-tightest text-ink-500">
              <span className="font-medium text-green-700">
                {pharmacy.hoursStatus}
              </span>{' '}
              <span className="font-light">{pharmacy.hoursDetail}</span>
            </p>
            <ChevronDownIcon className="size-4 text-ink-500" />
          </div>
          <div className="flex items-center gap-2">
            <ClockIcon className="size-4 shrink-0 text-ink-500" />
            <span className="text-sm font-medium tracking-tightest text-ink-500">
              {pharmacy.items}
            </span>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-ink-100" />

      {/* Cart */}
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold tracking-tightest text-violet-950">
            Cart
          </h3>
          {cart.length > 0 && (
            <button
              type="button"
              onClick={onClear}
              className="flex items-center gap-0.5 rounded-[63px] bg-red-50 p-1 text-[10px] font-medium text-red-400"
            >
              <TrashIcon className="size-2.5" />
              Clear Cart
            </button>
          )}
        </div>

        {cart.length === 0 ? (
          <p className="py-6 text-center text-sm font-light text-ink-500">
            Your cart is empty. Add items to get started.
          </p>
        ) : (
          <div className="flex flex-col gap-2">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-1 rounded-lg bg-ink-50 px-3 py-2"
              >
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <p className="truncate text-sm font-semibold tracking-tightest text-ink-900">
                    {item.name}
                  </p>
                  <p className="truncate text-xs font-medium tracking-tightest text-ink-500">
                    {formatNaira(item.price)}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <QuantityStepper
                    value={item.quantity}
                    onIncrement={() => onIncrement(item.id)}
                    onDecrement={() => onDecrement(item.id)}
                  />
                  <button
                    type="button"
                    onClick={() => onRemove(item.id)}
                    className="flex items-center gap-0.5 text-[10px] font-medium text-red-400"
                  >
                    <TrashIcon className="size-2.5" />
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Subtotal */}
        <div className="flex items-center gap-2 rounded-lg border border-violet-100 bg-violet-50 px-3 py-2">
          <span className="flex-1 text-sm font-medium tracking-tightest text-[#232323]">
            Subtotal
          </span>
          <span className="whitespace-nowrap text-lg font-bold tracking-tightest text-violet-700">
            ₦ {subtotal.toLocaleString('en-US')}
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={onOrder}
        disabled={cart.length === 0}
        className="w-full rounded-lg bg-violet-700 px-5 py-3 text-base font-bold tracking-tightest text-white transition-colors hover:bg-violet-700/90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Order Item Now
      </button>
    </aside>
  )
}
