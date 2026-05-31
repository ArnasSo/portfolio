import { useEffect } from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import ProcessStrip from './components/ProcessStrip'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  useEffect(() => {
    const hash = window.location.hash

    if (!hash) {
      return
    }

    window.requestAnimationFrame(() => {
      document.querySelector(hash)?.scrollIntoView()
      window.history.replaceState(null, '', window.location.pathname + window.location.search)
    })
  }, [])

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Nav />
      <main id="main-content">
        <Hero />
        <Work />
        <ProcessStrip />
        <About />
        <Contact />
      </main>
    </>
  )
}

export default App
