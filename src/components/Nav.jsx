import { useEffect, useState } from 'react'
import { scrollToSection } from '../utils/scrollToSection'
import styles from './Nav.module.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
            <a href={link.href} className={styles.link} onClick={event => scrollToSection(event, link.href)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
