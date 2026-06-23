import { logoDark, caretDown } from '../assets'
import { useAuth } from './auth/AuthProvider'

const navLinks = [
  { label: 'Home' },
  { label: 'About Us' },
  { label: 'Services', hasCaret: true },
  { label: 'Impact' },
  { label: 'Contact' },
]

export default function Navbar() {
  const { openRegister, openSignIn } = useAuth()
  return (
    <header className="relative z-20 w-full bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.15)]">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-6 pb-4 pt-6 md:px-16">
        <a href="#" aria-label="8medical home" className="shrink-0">
          <img src={logoDark} alt="8medical" className="h-10 w-auto" />
        </a>

        <div className="flex items-center gap-4 md:gap-6">
          <ul className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href="#"
                  className="flex items-center gap-1 px-1 text-sm font-light tracking-tightest text-ink-500 transition-colors hover:text-violet-700"
                >
                  {link.label}
                  {link.hasCaret && (
                    <img src={caretDown} alt="" className="size-2" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <span className="hidden h-5 w-px bg-ink-200 lg:block" />

          <button
            onClick={openSignIn}
            className="hidden text-sm font-light tracking-tightest text-ink-500 transition-colors hover:text-violet-700 lg:block"
          >
            Log in
          </button>

          <button
            onClick={openRegister}
            className="rounded-[61px] bg-violet-700 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-violet-700/90"
          >
            Create Account
          </button>
        </div>
      </nav>
    </header>
  )
}
