import { useState } from 'react'
import PasswordField from '../ui/PasswordField'
import { iconOtp } from '../../assets'

export default function CreateNewPassword({ onReset }) {
  const [form, setForm] = useState({ password: '', confirm: '' })
  const update = (key) => (e) => setForm((p) => ({ ...p, [key]: e.target.value }))

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onReset?.(form)
      }}
      className="flex flex-col gap-9 px-6 py-12 md:px-12"
    >
      <div className="flex flex-col items-center gap-6">
        <img src={iconOtp} alt="" className="size-20" />
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="text-2xl font-bold tracking-tightest text-dark md:text-[32px]">
            Create New Password
          </h2>
          <p className="text-base font-light tracking-tightest text-ink-400">
            Create a new password to access your account
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <PasswordField label="New Password" required placeholder="Enter Password" value={form.password} onChange={update('password')} />
        <PasswordField label="Confirm Password" required placeholder="Confirm Password" value={form.confirm} onChange={update('confirm')} />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-violet-700 px-5 py-3 text-lg font-bold tracking-tightest text-white transition-colors hover:bg-violet-700/90"
      >
        Reset Password
      </button>
    </form>
  )
}
