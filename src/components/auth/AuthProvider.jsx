import { createContext, useCallback, useContext, useState } from 'react'
import RegistrationFlow from '../registration/RegistrationFlow'
import SignInFlow from './SignInFlow'

const AuthContext = createContext(null)

/**
 * Access the auth modals from anywhere:
 *   const { openRegister, openSignIn, close } = useAuth()
 */
export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

export default function AuthProvider({ children }) {
  const [mode, setMode] = useState(null) // null | 'register' | 'signin'

  const openRegister = useCallback(() => setMode('register'), [])
  const openSignIn = useCallback(() => setMode('signin'), [])
  const close = useCallback(() => setMode(null), [])

  return (
    <AuthContext.Provider value={{ openRegister, openSignIn, close }}>
      {children}
      <RegistrationFlow
        isOpen={mode === 'register'}
        onClose={close}
        onLogin={openSignIn}
      />
      <SignInFlow
        isOpen={mode === 'signin'}
        onClose={close}
        onSignUp={openRegister}
      />
    </AuthContext.Provider>
  )
}
