import { useEffect, useState } from 'react'
import Modal from '../ui/Modal'
import EntityTypeSelect from './EntityTypeSelect'
import BusinessTypeSelect from './BusinessTypeSelect'
import CreateAccountForm from './CreateAccountForm'

/**
 * Account creation flow:
 *   1. Entity type        — Individual or Business
 *   2a. Individual        → straight to the registration form
 *   2b. Business          → pick a business type (Hospital/HMO/Corporate/Diagnostics)
 *   3. Create account form (fields vary by selected type)
 */
export default function RegistrationFlow({ isOpen, onClose, onLogin }) {
  const [step, setStep] = useState('entity') // 'entity' | 'businessType' | 'form'
  const [entity, setEntity] = useState(null) // 'individual' | 'business'
  const [businessType, setBusinessType] = useState(null)

  // Reset to the first step whenever the flow is reopened.
  useEffect(() => {
    if (isOpen) {
      setStep('entity')
      setEntity(null)
      setBusinessType(null)
    }
  }, [isOpen])

  const proceedFromEntity = () => {
    if (entity === 'individual') {
      setBusinessType('individual')
      setStep('form')
    } else if (entity === 'business') {
      setBusinessType(null)
      setStep('businessType')
    }
  }

  const isForm = step === 'form'
  const wide = isForm || step === 'entity'

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      label="Create account"
      className={wide ? 'max-w-[760px]' : 'max-w-[640px]'}
    >
      {step === 'entity' && (
        <EntityTypeSelect
          value={entity}
          onChange={setEntity}
          onProceed={proceedFromEntity}
        />
      )}

      {step === 'businessType' && (
        <BusinessTypeSelect
          value={businessType}
          onChange={setBusinessType}
          onProceed={() => businessType && setStep('form')}
          onBack={() => setStep('entity')}
        />
      )}

      {isForm && (
        <CreateAccountForm
          businessType={businessType}
          onLogin={onLogin}
          onGoogle={() => {}}
          onBack={() => setStep(entity === 'individual' ? 'entity' : 'businessType')}
          onSubmit={() => onClose?.()}
        />
      )}
    </Modal>
  )
}
