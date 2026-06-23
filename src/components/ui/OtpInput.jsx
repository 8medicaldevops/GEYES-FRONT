import { useRef } from 'react'

/**
 * Segmented one-time-code input.
 * Renders `length` boxes, auto-advances on entry, supports backspace and paste.
 */
export default function OtpInput({ length = 6, value = '', onChange }) {
  const refs = useRef([])
  const chars = value.split('').slice(0, length)

  const setChar = (index, char) => {
    const next = value.split('')
    next[index] = char
    onChange?.(next.join('').slice(0, length))
  }

  const handleChange = (index, e) => {
    const digit = e.target.value.replace(/\D/g, '').slice(-1)
    if (!digit) return
    setChar(index, digit)
    if (index < length - 1) refs.current[index + 1]?.focus()
  }

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace') {
      if (chars[index]) {
        setChar(index, '')
      } else if (index > 0) {
        refs.current[index - 1]?.focus()
        setChar(index - 1, '')
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      refs.current[index - 1]?.focus()
    } else if (e.key === 'ArrowRight' && index < length - 1) {
      refs.current[index + 1]?.focus()
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length)
    if (pasted) {
      onChange?.(pasted)
      refs.current[Math.min(pasted.length, length - 1)]?.focus()
    }
  }

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3">
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          ref={(el) => (refs.current[i] = el)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={chars[i] || ''}
          onChange={(e) => handleChange(i, e)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          onPaste={handlePaste}
          className={`size-12 rounded-lg border text-center text-2xl font-semibold tracking-tightest text-ink-900 outline-none transition-colors focus:border-violet-700 sm:size-14 ${
            chars[i] ? 'border-ink-900' : 'border-ink-300'
          }`}
        />
      ))}
    </div>
  )
}
