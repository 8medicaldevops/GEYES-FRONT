import { useState } from 'react'
import FormField from '../ui/FormField'
import PasswordField from '../ui/PasswordField'
import { iconGoogle } from '../../assets'

export default function SignInForm({ onSignUp, onForgot, onSubmit, onGoogle }) {
  const [form, setForm] = useState({ email: '', password: '' })
  const update = (key) => (e) => setForm((p) => ({ ...p, [key]: e.target.value }))

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit?.(form)
      }}
      className="flex max-h-[85vh] flex-col gap-9 overflow-y-auto px-6 py-12 md:px-12"
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h2 className="text-2xl font-bold tracking-tightest text-dark md:text-[32px]">
          Sign in with Email
        </h2>
        <p className="text-base font-light tracking-tightest text-ink-400">
          Don&apos;t have an account?{' '}
          <button type="button" onClick={onSignUp} className="font-semibold text-violet-700">
            Sign up
          </button>
        </p>
      </div>

      <button
        type="button"
        onClick={onGoogle}
        className="flex w-full items-center justify-center gap-3 rounded-lg border border-ink-200 bg-ink-50 px-3 py-4 text-lg font-semibold tracking-tightest text-dark transition-colors hover:bg-ink-100"
      >
        <img src={iconGoogle} alt="" className="size-6" />
        Continue with Google
      </button>

      <div className="flex items-center gap-2">
        <span className="h-px flex-1 bg-ink-200" />
        <span className="text-base font-light tracking-tightest text-dark">OR</span>
        <span className="h-px flex-1 bg-ink-200" />
      </div>

      <div className="flex flex-col gap-4">
        <FormField label="Email Address" type="email" placeholder="Enter Email Address" value={form.email} onChange={update('email')} />
        <PasswordField label="Password" placeholder="Enter Password" value={form.password} onChange={update('password')} />
        <button
          type="button"
          onClick={onForgot}
          className="self-end text-base font-medium tracking-tightest text-ink-900 underline"
        >
          Forgot Password
        </button>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-violet-700 px-5 py-3 text-lg font-bold tracking-tightest text-white transition-colors hover:bg-violet-700/90"
      >
        Login
      </button>
    </form>
  )
}
