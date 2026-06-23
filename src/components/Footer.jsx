import {
  logoLight,
  arrowLeft,
  siren,
  location,
  call,
  clock,
  socialFacebook,
  socialTwitter,
  socialInstagram,
  socialLinkedin,
} from '../assets'
import { useAuth } from './auth/AuthProvider'

const contactDetails = [
  { icon: location, text: '13 Odiyan Street, Ikate, Lagos, Nigeria' },
  { icon: call, text: '08098888763, 07071534107' },
  { icon: clock, text: '24 Hours Everyday' },
]

const footerServices = [
  'Emergency Response',
  'Ambulance Standby',
  'Ambulance Transport',
  'Urgent Care',
]

const socials = [
  { icon: socialFacebook, alt: 'Facebook' },
  { icon: socialTwitter, alt: 'Twitter' },
  { icon: socialInstagram, alt: 'Instagram' },
  { icon: socialLinkedin, alt: 'LinkedIn' },
]

export default function Footer() {
  const { openRegister, openSignIn } = useAuth()
  return (
    <footer className="flex w-full flex-col items-center gap-9 bg-footer py-12">
      <div className="w-full max-w-container px-8">
        <div className="flex flex-col items-center gap-6">
          <img src={logoLight} alt="8medical" className="h-14 w-auto" />

          <div className="flex flex-col items-center gap-6">
            <p className="max-w-full text-center text-lg font-medium tracking-tightest text-white">
              Responsive Emergency Care Where and When Needed
            </p>

            <div className="flex items-center justify-center gap-3">
              <button
                onClick={openSignIn}
                className="flex items-center justify-center gap-1 rounded-lg bg-violet-50 px-4 py-3 text-base font-semibold tracking-tightest text-violet-700 transition-colors hover:bg-white"
              >
                <img src={arrowLeft} alt="" className="size-4" />
                Log In
                <img src={siren} alt="" className="size-4" />
              </button>
              <button
                onClick={openRegister}
                className="flex items-center justify-center gap-1 rounded-lg bg-violet-700 px-4 py-3 text-base font-semibold tracking-tightest text-white transition-colors hover:bg-violet-700/90"
              >
                Create Account
              </button>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-wrap items-start justify-center gap-x-6 gap-y-2">
                {contactDetails.map((detail) => (
                  <div key={detail.text} className="flex items-center gap-1">
                    <img src={detail.icon} alt="" className="size-5" />
                    <span className="whitespace-nowrap text-sm font-light tracking-tightest text-blue-100">
                      {detail.text}
                    </span>
                  </div>
                ))}
                <div className="flex items-center gap-1">
                  <span className="text-sm font-light tracking-tightest text-blue-100">
                    hello@8medical.co
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-start justify-center gap-x-9 gap-y-2">
                {footerServices.map((service) => (
                  <span
                    key={service}
                    className="whitespace-nowrap text-base font-medium tracking-tightest text-white"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full max-w-container flex-col gap-8 px-8">
        <div className="h-px w-full bg-divider" />
        <div className="flex flex-col items-center justify-between gap-6 px-0 md:flex-row md:px-6">
          <p className="whitespace-nowrap text-base font-light tracking-tightest text-blue-100">
            © 2024 8medical. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {socials.map((social) => (
              <a key={social.alt} href="#" aria-label={social.alt}>
                <img src={social.icon} alt={social.alt} className="size-6" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6 text-base text-violet-400">
            <a href="#" className="underline">
              Privacy Policy
            </a>
            <a href="#" className="underline">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
