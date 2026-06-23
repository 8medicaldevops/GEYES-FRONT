import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ChooseService from './components/ChooseService'
import PartnerLogos from './components/PartnerLogos'
import Footer from './components/Footer'
import SearchResults from './components/SearchResults'
import FindBlood from './components/FindBlood'

export default function App() {
  const [view, setView] = useState('home') // 'home' | 'results' | 'blood'
  const [query, setQuery] = useState('')

  const goHome = () => setView('home')

  const handleSearch = (value) => {
    setQuery(value || 'Heart Attack')
    setView('results')
    window.scrollTo({ top: 0 })
  }

  const handleQuickAction = (action) => {
    setView(action === 'blood' ? 'blood' : 'results')
    window.scrollTo({ top: 0 })
  }

  if (view === 'results') {
    return <SearchResults query={query} onBack={goHome} />
  }

  if (view === 'blood') {
    return <FindBlood onBack={goHome} />
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex flex-col">
        <Hero onSearch={handleSearch} onQuickAction={handleQuickAction} />
        <ChooseService />
        <PartnerLogos />
      </main>
      <Footer />
    </div>
  )
}
