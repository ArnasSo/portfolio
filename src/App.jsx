import { useEffect } from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import CaseStudy from './components/CaseStudy'
// import ProcessStrip from './components/ProcessStrip'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { homeMeta, updatePageMeta } from './utils/pageMeta'

function App() {
  const caseMatch = window.location.pathname.match(/^\/case\/([^/]+)\/?$/)

  useEffect(() => {
    if (caseMatch) {
      window.scrollTo(0, 0)
      return
    }

    updatePageMeta(homeMeta)

    const hash = window.location.hash

    if (!hash) {
      return
    }

    window.requestAnimationFrame(() => {
      document.querySelector(hash)?.scrollIntoView()
      window.history.replaceState(null, '', window.location.pathname + window.location.search)
    })
  }, [caseMatch])

  if (caseMatch) {
    return (
      <>
        <a className="skip-link" href="#case-title">Skip to case study</a>
        <CaseStudy slug={caseMatch[1]} />
      </>
    )
  }

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Nav />
      <main id="main-content">
        <Hero />
        <Work />
        {/* <ProcessStrip /> */}
        <About />
        <Skills />
        <Contact />
      </main>
    </>
  )
}

export default App
