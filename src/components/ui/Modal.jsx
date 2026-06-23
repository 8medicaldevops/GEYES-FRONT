import { useEffect } from 'react'
import { createPortal } from 'react-dom'

// Tracks open modals so that, when stacked, only the topmost responds to
// Escape and body scroll is unlocked only once every modal has closed.
const modalStack = []

/**
 * Reusable modal/dialog.
 *
 * - Renders into a portal on document.body so it escapes any overflow/stacking
 *   contexts of its parent.
 * - Closes on Escape and on backdrop click.
 * - Locks body scroll while open.
 * - Ships a default close (X) button; pass `showClose={false}` to hide it.
 *
 * @param {boolean}   isOpen
 * @param {() => void} onClose
 * @param {React.ReactNode} children
 * @param {string}    [className]   extra classes for the content panel
 * @param {boolean}   [showClose=true]
 * @param {string}    [label]       accessible name for the dialog
 */
export default function Modal({
  isOpen,
  onClose,
  children,
  className = '',
  showClose = true,
  label = 'Dialog',
}) {
  useEffect(() => {
    if (!isOpen) return

    const token = {}
    modalStack.push(token)

    const onKeyDown = (e) => {
      // Only the topmost modal reacts to Escape.
      if (e.key === 'Escape' && modalStack[modalStack.length - 1] === token) {
        onClose?.()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      const i = modalStack.indexOf(token)
      if (i > -1) modalStack.splice(i, 1)
      if (modalStack.length === 0) document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/40 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={label}
        onClick={(e) => e.stopPropagation()}
        className={`relative my-auto w-full rounded-[36px] bg-white shadow-2xl ${className}`}
      >
        {showClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute right-6 top-6 z-10 flex size-8 items-center justify-center rounded-full text-ink-900 transition-colors hover:bg-ink-100"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        )}
        {children}
      </div>
    </div>,
    document.body,
  )
}
