import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import styles from './Contact.module.css'

export default function Contact() {
  const sectionRef = useRef(null)
  useReveal(sectionRef)

  return (
    <section id="contact" className={styles.contact} ref={sectionRef}>
      <div className={`${styles.top} reveal`}>
        <span className="section-number">03</span>
        <p><i /> Available for internships</p>
        <span>Aalborg · Aarhus · Remote</span>
      </div>

      <div className={`${styles.main} reveal`} style={{ '--reveal-delay': '80ms' }}>
        <p className={styles.kicker}>Have a project, internship, or interesting problem?</p>
        <h2>Let&apos;s make<br /><span>something useful.</span></h2>
        <a href="mailto:arnas.sokolovas@gmail.com">Start a conversation <b>↗</b></a>
      </div>

      <div className={styles.bottom}>
        <div className={styles.links}>
          <a href="mailto:arnas.sokolovas@gmail.com">Email ↗</a>
          <a href="https://www.linkedin.com/in/arnassokolovas/">LinkedIn ↗</a>
        </div>
        <p>Arnas Sokolovas<br />UX / UI Designer</p>
        <p>Designed and built with<br />curiosity in Denmark · 2026</p>
      </div>
    </section>
  )
}
