/**
 * Small +/- quantity control used on medication cards and in the cart.
 */
export default function QuantityStepper({ value, onIncrement, onDecrement }) {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={onDecrement}
        aria-label="Decrease quantity"
        className="flex size-5 items-center justify-center rounded bg-violet-50 text-violet-700 transition-colors hover:bg-violet-100"
      >
        <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <path d="M5 12h14" />
        </svg>
      </button>
      <span className="flex min-w-6 items-center justify-center rounded border border-ink-200 px-2 py-0.5 text-xs font-semibold text-ink-900">
        {value}
      </span>
      <button
        type="button"
        onClick={onIncrement}
        aria-label="Increase quantity"
        className="flex size-5 items-center justify-center rounded bg-violet-700 text-white transition-colors hover:bg-violet-700/90"
      >
        <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>
    </div>
  )
}
