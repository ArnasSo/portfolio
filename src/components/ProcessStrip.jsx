import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import styles from './ProcessStrip.module.css'

const steps = [
  {
    name: 'Empathize',
    desc: 'Understand users, context, needs, and the situation around the product.',
  },
  {
    name: 'Define',
    desc: 'Turn findings into a clearer problem, goals, and constraints.',
  },
  {
    name: 'Ideate',
    desc: 'Explore flows, structure, sketches, and possible directions.',
  },
  {
    name: 'Prototype',
    desc: 'Make ideas tangible through wireframes and interactive prototypes.',
  },
  {
    name: 'Test',
    desc: 'Use feedback to learn what works, what confuses users, and what should change.',
  },
]

export default function ProcessStrip() {
  const sectionRef = useRef(null)
  useReveal(sectionRef)

  return (
    <section className={styles.process} ref={sectionRef} aria-labelledby="process-title">
      <div className={`${styles.header} reveal`}>
        <p className="section-kicker">How I work</p>
        <h2 id="process-title">A user-centered process for understanding, shaping, and testing ideas.</h2>
        <p className={styles.intro}>
          I am familiar with design thinking and Double Diamond, and I am open
          to the process a team already uses. I want to keep learning from
          experienced designers while contributing to real product work.
        </p>
      </div>
      <div className={styles.steps}>
        {steps.map((step, index) => (
          <article
            key={step.name}
            className={`${styles.step} reveal`}
            style={{ '--reveal-delay': `${index * 70}ms` }}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{step.name}</h3>
            <p>{step.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
