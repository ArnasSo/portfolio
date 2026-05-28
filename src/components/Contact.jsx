import { useEffect, useRef } from 'react'
import styles from './Contact.module.css'

const links = [
  {
    label: 'Email',
    text: 'hello@yourname.dk',
    href: 'mailto:hello@yourname.dk',
  },
  {
    label: 'LinkedIn',
    text: 'linkedin.com/in/yourname',
    href: 'https://linkedin.com/in/yourname',
  },
  {
    label: 'Location',
    text: 'Aarhus, Denmark',
    href: null,
  },
]

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    const els = sectionRef.current?.querySelectorAll('.reveal')
    els?.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className={styles.contact} ref={sectionRef}>
      <div className={styles.header}>
        <span className={styles.sectionNumber}>03</span>
        <h2 className={styles.sectionTitle}>Contact</h2>
      </div>

      <div className={styles.grid}>
        <div className="reveal">
          <p className={styles.available}>
            <span className={styles.dot} />
            Available for internships — Aarhus / Remote
          </p>
          <h3 className={styles.headline}>
            Let's make something<br /><em>worth using.</em>
          </h3>
          <p className={styles.sub}>
            Whether you're hiring, collaborating, or just want to talk
            UX — my inbox is open.
          </p>
          <a href="mailto:hello@yourname.dk" className={styles.btnAccent}>
            Say hello →
          </a>
        </div>

        <div className={`${styles.links} reveal`}>
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
        <span>Designed & built with intention - Aalborg/Aarhus, DK</span>
      </div>
    </section>
  )
}