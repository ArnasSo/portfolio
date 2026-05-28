import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import { scrollToSection } from '../utils/scrollToSection'
import styles from './About.module.css'

const sidebar = [
  {
    label: 'Education',
    items: [
      { text: 'Multimedia Design AP', value: '2025-2027' },
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
      { text: 'Danish', value: 'Beginner' },
      { text: 'English', value: 'Fluent' },
      { text: 'Lithuanian', value: 'Native' },
    ],
  },
]

export default function About() {
  const sectionRef = useRef(null)
  useReveal(sectionRef)

  return (
    <section id="about" className={styles.about} ref={sectionRef}>
      <div className={`${styles.header} reveal`}>
        <span className="section-number">02</span>
        <h2 className="section-title">About</h2>
      </div>

      <div className={styles.grid}>
        <div className={`${styles.text} reveal`} style={{ '--reveal-delay': '80ms' }}>
          <p>
            I'm a <strong>Multimedia Design student</strong> at Business Academy
            Aarhus, finishing my 2nd semester. I lean toward UX over visual
            design - I'm most interested in the thinking behind the interface:
            who is it for, what problem does it actually solve, and how do we know?
          </p>
          <p>
            I work best when there's a real process behind the work, but I don't
            treat one framework as the only way to think. I like research,
            synthesis, and the messy middle of a Double Diamond, while also being
            comfortable adapting to agile workflows, scrum rituals, and sprint-based
            collaboration when the project calls for it.
          </p>
          <p>
            Currently looking for <strong>internship opportunities in Aalborg,
            Aarhus, or remote</strong> - open to product design, UX research,
            or interaction design roles.
          </p>
          <div className={styles.cta}>
            <a href="#contact" className="btn-primary" onClick={event => scrollToSection(event, '#contact')}>Let's talk</a>
          </div>
        </div>

        <div className={`${styles.sidebar} reveal`} style={{ '--reveal-delay': '160ms' }}>
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
