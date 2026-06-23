import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import RegistrationProvider from './components/registration/RegistrationProvider.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RegistrationProvider>
      <App />
    </RegistrationProvider>
  </React.StrictMode>,
)
