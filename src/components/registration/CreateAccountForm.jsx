import { useState } from 'react'
import FormField from '../ui/FormField'
import PasswordField from '../ui/PasswordField'
import Select from '../ui/Select'
import { ArrowLeftIcon } from '../ui/icons'
import { iconGoogle } from '../../assets'

// Per-business-type field labels/placeholders. The base fields
// (name, email, phone, passwords, referral) are shared.
const TYPE_CONFIG = {
  hospital: {
    name: { label: 'Hospital Name', placeholder: 'Enter Hospital Name' },
    number: { label: 'License Number', placeholder: 'Enter License Number' },
  },
  hmo: {
    name: { label: 'HMO Name', placeholder: 'Enter HMO Name' },
    number: { label: 'Registration Number', placeholder: 'Enter License Number' },
  },
  corporate: {
    name: { label: 'Organisation Name', placeholder: 'Enter Organisation Name' },
    orgType: true,
    number: { label: 'Registration Number', placeholder: 'Enter License Number' },
  },
  diagnostics: {
    name: { label: 'Diagnostics Centers Name', placeholder: 'Enter Hospital Name' },
    number: { label: 'License Number', placeholder: 'Enter License Number' },
  },
}

const ORG_TYPES = [
  'Aerospace',
  'Agriculture',
  'Construction',
  'Education',
  'Energy',
  'Entertainment',
  'Finance',
  'Healthcare',
  'Hospitality',
  'Manufacturing',
  'Telecommunication',
  'Transportation',
  'Others',
]

export default function CreateAccountForm({ businessType, onBack, onSubmit, onLogin, onGoogle }) {
  const isIndividual = businessType === 'individual'
  const config = TYPE_CONFIG[businessType] ?? TYPE_CONFIG.hospital
  const [form, setForm] = useState({})
  const [agreed, setAgreed] = useState(false)

  const update = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit?.({ businessType, ...form, agreed })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-h-[85vh] flex-col gap-9 overflow-y-auto px-6 py-12 md:px-12"
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-2 text-center">
        <h2 className="text-2xl font-bold tracking-tightest text-dark md:text-[32px]">
          Create Account
        </h2>
        <p className="text-base font-light tracking-tightest text-ink-400">
          Already have an account?{' '}
          <button type="button" onClick={onLogin} className="font-semibold text-violet-700">
            Log in
          </button>
        </p>
      </div>

      {/* Google sign-in (individual only) */}
      {isIndividual && (
        <>
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
        </>
      )}

      {/* Fields */}
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <FormField label="First Name" required placeholder="Enter First Name" value={form.firstName || ''} onChange={update('firstName')} />
          <FormField label="Last Name" required placeholder="Enter Last Name" value={form.lastName || ''} onChange={update('lastName')} />
        </div>

        <FormField label="Email Address" required type="email" placeholder="Enter Email Address" value={form.email || ''} onChange={update('email')} />
        <FormField label="Phone Number" required placeholder="Enter Phone Number" value={form.phone || ''} onChange={update('phone')} />

        {!isIndividual && (
          <>
            <FormField label={config.name.label} required placeholder={config.name.placeholder} value={form.orgName || ''} onChange={update('orgName')} />

            {config.orgType && (
              <Select
                label="Organisation Type"
                required
                placeholder="Select Organisation Type"
                options={ORG_TYPES}
                value={form.orgType}
                onChange={(v) => setForm((prev) => ({ ...prev, orgType: v }))}
              />
            )}

            <FormField label={config.number.label} required placeholder={config.number.placeholder} value={form.regNumber || ''} onChange={update('regNumber')} />
          </>
        )}

        <PasswordField label="Create Password" required placeholder="Enter Password" value={form.password || ''} onChange={update('password')} />
        <PasswordField label="Confirm Password" required placeholder="Confirm Password" value={form.confirmPassword || ''} onChange={update('confirmPassword')} />
        <FormField label="Referral Code" required={!isIndividual} placeholder="Enter Referral Code" value={form.referral || ''} onChange={update('referral')} />

        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="size-[18px] shrink-0 cursor-pointer rounded border-2 border-ink-200 accent-violet-700"
          />
          <span className="text-base font-light tracking-tightest text-ink-500">
            I agree with the{' '}
            <span className="font-semibold text-violet-700">Terms &amp; Conditions</span> and{' '}
            <span className="font-semibold text-violet-700">Privacy Policy</span>
          </span>
        </label>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-2">
        <button
          type="submit"
          className="w-full rounded-lg bg-violet-700 px-5 py-3 text-lg font-bold tracking-tightest text-white transition-colors hover:bg-violet-700/90"
        >
          Create Account
        </button>
        <button
          type="button"
          onClick={onBack}
          className="flex w-full items-center justify-center gap-2 rounded-lg px-5 py-4 text-lg font-bold tracking-tightest text-violet-700"
        >
          <ArrowLeftIcon className="size-5" />
          Go Back
        </button>
      </div>
    </form>
  )
}
