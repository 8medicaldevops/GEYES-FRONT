import { createContext, useCallback, useContext, useState } from 'react'
import RegistrationFlow from './RegistrationFlow'

const RegistrationContext = createContext(null)

/** Access the registration flow from anywhere: `const { open } = useRegistration()`. */
export function useRegistration() {
  const ctx = useContext(RegistrationContext)
  if (!ctx) throw new Error('useRegistration must be used within RegistrationProvider')
  return ctx
}

export default function RegistrationProvider({ children }) {
  const [isOpen, setOpen] = useState(false)

  const open = useCallback(() => setOpen(true), [])
  const close = useCallback(() => setOpen(false), [])

  return (
    <RegistrationContext.Provider value={{ open, close }}>
      {children}
      <RegistrationFlow isOpen={isOpen} onClose={close} />
    </RegistrationContext.Provider>
  )
}
