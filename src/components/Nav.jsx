import { useEffect, useState } from 'react'
import { scrollToSection } from '../utils/scrollToSection'
import styles from './Nav.module.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = ['#home', '#work', '#about', '#contact']
      .map(id => document.querySelector(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-20% 0px -65% 0px' }
    )

    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#home" className={styles.logo} onClick={event => scrollToSection(event, '#home')}>
        Arnas Sokolovas
      </a>

      <ul className={styles.links}>
        {[
          { label: 'Work', href: '#work' },
          { label: 'About', href: '#about' },
          { label: 'Contact', href: '#contact' },
        ].map(link => (
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
