import { useEffect, useRef } from 'react'
import styles from './About.module.css'

const sidebar = [
  {
    label: 'Education',
    items: [
      { text: 'Multimedia Design AP', value: '2024–2026' },
      { text: 'Business Academy Aarhus', value: 'Aarhus, DK' },
    ],
  },
  {
    label: 'Interests',
    items: [
      { text: 'Accessibility & inclusive design' },
      { text: 'Interaction design' },
      { text: 'UX research methods' },
      { text: 'Product thinking' },
    ],
  },
  {
    label: 'Languages',
    items: [
      { text: 'Danish', value: 'Native' },
      { text: 'English', value: 'Fluent' },
    ],
  },
]

export default function About() {
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
    <section id="about" className={styles.about} ref={sectionRef}>
      <div className={`${styles.header} reveal`}>
        <span className="section-number">02</span>
        <h2 className="section-title">About</h2>
      </div>

      <div className={styles.grid}>
        <div className={`${styles.text} reveal`}>
          <p>
            I'm a <strong>Multimedia Design student</strong> at Business Academy
            Aarhus, finishing my 2nd semester. I lean toward UX over visual
            design — I'm most interested in the thinking behind the interface:
            who is it for, what problem does it actually solve, and how do we know?
          </p>
          <p>
            I work best when there's a real process behind the work. I like
            research, synthesis, and the messy middle of a Double Diamond — the
            part where you realize you were solving the wrong problem.
          </p>
          <p>
            Currently looking for <strong>internship opportunities in Aarhus
            or remote</strong> — open to product design, UX research, or
            interaction design roles.
          </p>
          <div className={styles.cta}>
            <a href="#contact" className="btn-primary">Let's talk</a>
          </div>
        </div>

        <div className={`${styles.sidebar} reveal`}>
          {sidebar.map(group => (
            <div key={group.label}>
              <p className={styles.listLabel}>{group.label}</p>
              <ul className={styles.list}>
                {group.items.map(item => (
                  <li key={item.text} className={styles.listItem}>
                    {item.text}
                    {item.value && <span>{item.value}</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}