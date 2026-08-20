import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import styles from './Skills.module.css'

const skillGroups = [
  {
    title: 'UX research',
    tone: 'green',
    items: ['User interviews', 'Observation', 'User research', 'Usability testing'],
  },
  {
    title: 'UI and prototyping',
    tone: 'coral',
    items: ['Wireframes', 'Figma', 'Interactive prototypes', 'Visual hierarchy'],
  },
  {
    title: 'Frontend',
    tone: 'blue',
    items: ['HTML', 'CSS', 'WordPress', 'React.js basics'],
  },
  {
    title: 'Working style',
    tone: 'yellow',
    items: ['Curiosity', 'Feedback-minded', 'Team discussion', 'Useful sarcasm'],
  },
]

export default function Skills() {
  const sectionRef = useRef(null)
  useReveal(sectionRef)

  return (
    <section id="skills" className={styles.skills} ref={sectionRef} aria-labelledby="skills-title">
      <div className={`${styles.header} reveal`}>
        <p className="section-kicker">Skills</p>
        <h2 id="skills-title">Practical skills, a learning mindset, and enough humor to survive feedback rounds</h2>
      </div>

      <div className={styles.grid}>
        {skillGroups.map((group, index) => (
          <article
            className={`${styles.card} ${styles[group.tone]} reveal`}
            style={{ '--reveal-delay': `${index * 70}ms` }}
            key={group.title}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map(item => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
