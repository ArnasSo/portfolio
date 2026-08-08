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
    style: 'creative',
    desc: 'Explore flows, structure, sketches, and possible directions.',
  },
  {
    name: 'Prototype',
    style: 'robotic',
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
    <section id="process" className={styles.process} ref={sectionRef} aria-labelledby="process-title">
      <div className={`${styles.header} reveal`}>
        <p className={`${styles.processLabel} section-kicker`}>How I work</p>
        <h2 id="process-title">A user-centered process for understanding, shaping, and testing ideas.</h2>
      </div>
      <div className={styles.steps}>
        {steps.map((step, index) => (
          <article
            key={step.name}
            className={`${styles.step} reveal`}
            style={{ '--reveal-delay': `${index * 70}ms` }}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3 className={step.style ? styles[`${step.style}Title`] : undefined}>{step.name}</h3>
            <p>{step.desc}</p>
          </article>
        ))}
      </div>
      <blockquote className={`${styles.quote} reveal`}>
        <p>
          "I use design methods to replace assumptions with sharper questions,
          useful insights, and testable ideas. I am open to the process a team
          already uses, and I want to keep learning from experienced designers
          while contributing to real product work." - Arnas
        </p>
      </blockquote>
    </section>
  )
}
