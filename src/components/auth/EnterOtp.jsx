import { useState } from 'react'
import OtpInput from '../ui/OtpInput'
import { ArrowLeftIcon } from '../ui/icons'
import { iconOtp } from '../../assets'

export default function EnterOtp({ onProceed, onBack, onResend }) {
  const [code, setCode] = useState('')

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onProceed?.(code)
      }}
      className="flex flex-col gap-9 px-6 py-12 md:px-12"
    >
      <div className="flex flex-col items-center gap-6">
        <img src={iconOtp} alt="" className="size-20" />
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="text-2xl font-bold tracking-tightest text-dark md:text-[32px]">
            Enter OTP
          </h2>
          <p className="text-base font-light tracking-tightest text-ink-400">
            A 6-digit code has been sent to your email. Enter code to change password
          </p>
        </div>
      </div>

      <OtpInput value={code} onChange={setCode} />

      <div className="flex flex-col items-center gap-5">
        <p className="text-sm tracking-tightest">
          <span className="font-light text-ink-900">Didn&apos;t receive OTP? </span>
          <button type="button" onClick={onResend} className="font-semibold text-violet-700">
            Resend Code
          </button>
        </p>

        <div className="flex w-full flex-col gap-3">
          <button
            type="submit"
            disabled={code.length < 6}
            className="w-full rounded-lg bg-violet-700 px-5 py-3 text-lg font-bold tracking-tightest text-white transition-colors hover:bg-violet-700/90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Proceed
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
