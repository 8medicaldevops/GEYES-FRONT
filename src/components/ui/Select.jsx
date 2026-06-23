import { useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from './icons'

/**
 * Labelled select with a custom options panel (matches the design's dropdown).
 */
export default function Select({
  label,
  required = false,
  placeholder = 'Select',
  options = [],
  value,
  onChange,
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const onClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [open])

  return (
    <div className="flex w-full flex-col gap-1" ref={ref}>
      <span className="flex items-center gap-1 py-2 text-base font-semibold tracking-tightest text-ink-500">
        {label}
        {required && <span className="text-red-500">*</span>}
      </span>
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex h-12 w-full items-center justify-between gap-2 rounded-lg border border-ink-200 bg-white p-4 transition-colors focus:border-violet-700 focus:outline-none"
        >
          <span
            className={`truncate text-base tracking-tight ${
              value ? 'text-ink-900' : 'text-ink-300'
            }`}
          >
            {value || placeholder}
          </span>
          <ChevronDownIcon
            className={`size-4 shrink-0 text-ink-500 transition-transform ${open ? 'rotate-180' : ''}`}
          />
        </button>

        {open && (
          <ul className="absolute z-10 mt-2 max-h-[280px] w-full overflow-y-auto rounded-xl border border-ink-200 bg-white py-1 shadow-lg">
            {options.map((option) => (
              <li key={option}>
                <button
                  type="button"
                  onClick={() => {
                    onChange?.(option)
                    setOpen(false)
                  }}
                  className={`w-full border-b border-ink-100 px-4 py-3 text-left text-base tracking-tight transition-colors last:border-b-0 hover:bg-violet-50 ${
                    value === option ? 'text-violet-700' : 'text-ink-900'
                  }`}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
