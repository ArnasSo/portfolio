import { useEffect, useState } from 'react'
import { scrollToSection } from '../utils/scrollToSection'
import styles from './Nav.module.css'

const navLinks = [
  { label: 'Case Studies', href: '#work' },
  { label: 'Design Process', href: '#process' },
  { label: 'Background', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const observedSections = ['#home', ...navLinks.map(link => link.href)]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = observedSections
      .map(id => document.querySelector(id))
      .filter(Boolean)

    let frameId = null

    const updateActiveSection = () => {
      const scrollTarget = window.scrollY + Math.min(window.innerHeight * 0.3, 220)
      const isAtPageEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4

      if (isAtPageEnd) {
        setActiveSection('#contact')
        return
      }

      const currentSection = sections.reduce((current, section) => {
        return section.offsetTop <= scrollTarget ? `#${section.id}` : current
      }, '#home')

      setActiveSection(currentSection)
    }

    const scheduleActiveUpdate = () => {
      if (frameId) {
        return
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = null
        updateActiveSection()
      })
    }

    scheduleActiveUpdate()
    window.addEventListener('scroll', scheduleActiveUpdate, { passive: true })
    window.addEventListener('resize', scheduleActiveUpdate)

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }

      window.removeEventListener('scroll', scheduleActiveUpdate)
      window.removeEventListener('resize', scheduleActiveUpdate)
    }
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} aria-label="Primary navigation">
      <a href="#home" className={styles.logo} onClick={event => scrollToSection(event, '#home')}>
        Arnas Sokolovas
      </a>

      <ul className={styles.links}>
        {navLinks.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              className={`${styles.link} ${activeSection === link.href ? styles.active : ''}`}
              aria-current={activeSection === link.href ? 'location' : undefined}
              onClick={event => scrollToSection(event, link.href)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
