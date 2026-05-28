import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import ProcessStrip from './components/ProcessStrip'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Nav />
      <main>
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