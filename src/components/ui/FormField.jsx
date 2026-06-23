/**
 * Labelled text input matching the 8medical form style.
 * `rightSlot` renders inside the input box (e.g. a password eye toggle).
 */
export default function FormField({
  label,
  required = false,
  type = 'text',
  placeholder,
  value,
  onChange,
  rightSlot,
  className = '',
}) {
  return (
    <label className={`flex w-full min-w-0 flex-col gap-1 ${className}`}>
      <span className="flex items-center gap-1 py-2 text-base font-semibold tracking-tightest text-ink-500">
        {label}
        {required && <span className="text-red-500">*</span>}
      </span>
      <div className="flex h-12 w-full items-center gap-2 rounded-lg border border-ink-200 bg-white p-4 transition-colors focus-within:border-violet-700">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="min-w-0 flex-1 bg-transparent text-base tracking-tight text-ink-900 outline-none placeholder:text-ink-300"
        />
        {rightSlot}
      </div>
    </label>
  )
}
