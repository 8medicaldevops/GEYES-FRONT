import { useEffect, useState } from 'react'
import Modal from '../ui/Modal'
import SignInForm from './SignInForm'
import ForgotPassword from './ForgotPassword'
import EnterOtp from './EnterOtp'
import CreateNewPassword from './CreateNewPassword'

/**
 * Authentication flow:
 *   signin → forgot → otp → newpassword → (done → signin)
 * "Sign up" hands off to the registration flow via `onSignUp`.
 */
export default function SignInFlow({ isOpen, onClose, onSignUp }) {
  const [step, setStep] = useState('signin')

  useEffect(() => {
    if (isOpen) setStep('signin')
  }, [isOpen])

  return (
    <Modal isOpen={isOpen} onClose={onClose} label="Sign in" className="max-w-[700px]">
      {step === 'signin' && (
        <SignInForm
          onSignUp={onSignUp}
          onForgot={() => setStep('forgot')}
          onGoogle={() => {}}
          onSubmit={() => onClose?.()}
        />
      )}

      {step === 'forgot' && (
        <ForgotPassword
          onReset={() => setStep('otp')}
          onBack={() => setStep('signin')}
        />
      )}

      {step === 'otp' && (
        <EnterOtp
          onProceed={() => setStep('newpassword')}
          onBack={() => setStep('forgot')}
          onResend={() => {}}
        />
      )}

      {step === 'newpassword' && (
        <CreateNewPassword onReset={() => setStep('signin')} />
      )}
    </Modal>
  )
}
