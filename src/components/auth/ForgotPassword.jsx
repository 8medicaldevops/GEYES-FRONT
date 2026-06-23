import { useState } from 'react'
import FormField from '../ui/FormField'
import { ArrowLeftIcon } from '../ui/icons'
import { iconForgotLock } from '../../assets'

export default function ForgotPassword({ onReset, onBack }) {
  const [email, setEmail] = useState('')

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onReset?.(email)
      }}
      className="flex flex-col gap-12 px-6 py-12 md:px-12"
    >
      <div className="flex flex-col items-center gap-6">
        <img src={iconForgotLock} alt="" className="size-20" />
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="text-2xl font-bold tracking-tightest text-dark md:text-[32px]">
            Forgot Password
          </h2>
          <p className="text-base font-light tracking-tightest text-ink-400">
            Input your email address below to reset password
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-9">
        <FormField label="Email Address" type="email" placeholder="Enter Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />

        <div className="flex flex-col gap-3">
          <button
            type="submit"
            className="w-full rounded-lg bg-violet-700 px-5 py-3 text-lg font-bold tracking-tightest text-white transition-colors hover:bg-violet-700/90"
          >
            Reset Password
          </button>
          <button
            type="button"
            onClick={onBack}
            className="flex w-full items-center justify-center gap-1 py-3 text-base font-semibold tracking-tightest text-violet-700"
          >
            <ArrowLeftIcon className="size-4" />
            Go Back
          </button>
        </div>
      </div>
    </form>
  )
}
