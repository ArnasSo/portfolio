import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import styles from './Contact.module.css'

const links = [
  {
    label: 'Email',
    text: 'arnas.sokolovas@gmail.com',
    href: 'mailto:arnas.sokolovas@gmail.com',
  },
  {
    label: 'LinkedIn',
    text: 'linkedin.com/in/arnassokolovas',
    href: 'https://www.linkedin.com/in/arnassokolovas/',
  },
  {
    label: 'Location',
    text: 'Aalborg, Denmark',
    href: null,
  },
]

export default function Contact() {
  const sectionRef = useRef(null)
  useReveal(sectionRef)

  return (
    <section id="contact" className={styles.contact} ref={sectionRef}>
      <div className={`${styles.header} reveal`}>
        <span className={styles.sectionNumber}>03</span>
        <h2 className={styles.sectionTitle}>Contact</h2>
      </div>

      <div className={styles.grid}>
        <div className="reveal" style={{ '--reveal-delay': '80ms' }}>
          <p className={styles.available}>
            <span className={styles.dot} />
            Available for internships - Aalborg, Aarhus commute, or remote
          </p>
          <h3 className={styles.headline}>
            Let's make something<br /><em>worth using.</em>
          </h3>
          <p className={styles.sub}>
            Whether you're hiring, collaborating, or just want to talk
            UX - my inbox is open.
          </p>
          <a href="mailto:arnas.sokolovas@gmail.com" className={styles.btnAccent}>
            Say hello →
          </a>
        </div>

        <div className={`${styles.links} reveal`} style={{ '--reveal-delay': '160ms' }}>
          {links.map(link => (
            link.href
              ? <a key={link.label} href={link.href} className={styles.link}>
                  <span className={styles.linkLabel}>{link.label}</span>
                  {link.text}
                </a>
              : <div key={link.label} className={styles.link}>
                  <span className={styles.linkLabel}>{link.label}</span>
                  {link.text}
                </div>
          ))}
        </div>
      </div>

      <div className={styles.footer}>
        <span>© 2026 Arnas Sokolovas</span>
        <span>Designed & built with intention - Aalborg · Aarhus, DK</span>
      </div>
    </section>
  )
}
