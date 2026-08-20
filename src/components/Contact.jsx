import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import styles from './Contact.module.css'

export default function Contact() {
  const sectionRef = useRef(null)
  useReveal(sectionRef)

  return (
    <section id="contact" className={styles.contact} ref={sectionRef} aria-labelledby="contact-title">
      <div className={`${styles.inner} reveal`}>
        <p className={`${styles.sectionLabel} section-kicker`}>Get in touch</p>
        <h2 id="contact-title">Looking for a junior UX/UI opportunity and a team that enjoys honest thinking</h2>
        <div className={styles.links}>
          <a href="mailto:arnas.sokolovas@gmail.com" aria-label="Email Arnas Sokolovas">arnas.sokolovas@gmail.com</a>
          <a
            href="https://www.linkedin.com/in/arnassokolovas/"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Arnas Sokolovas on LinkedIn in a new tab"
          >
            LinkedIn
          </a>
        </div>
        <p className={styles.meta}>Aalborg / Aarhus / remote. Designed and built by Arnas Sokolovas, with only reasonable amounts of overthinking.</p>
      </div>
    </section>
  )
}
