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
        <p className={`${styles.processLabel} section-kicker`}>Design process</p>
        <h2 id="process-title">How I get from a vague brief to something worth testing</h2>
      </div>
      <div className={`${styles.stepsWrap} reveal`}>
        <svg className={`${styles.processLine} ${styles.desktopLine}`} viewBox="0 0 1000 260" aria-hidden="true">
          <path
            className={styles.processPath}
            pathLength="1"
            d="M42 115 C 118 54, 185 46, 244 108 S 362 178, 434 112 S 561 38, 632 105 S 764 188, 831 111 S 920 48, 958 122"
          />
        </svg>
        <svg className={`${styles.processLine} ${styles.tabletLine}`} viewBox="0 0 640 820" aria-hidden="true">
          <path
            className={styles.processPath}
            pathLength="1"
            d="M78 118 C 186 42, 344 44, 560 118 S 424 314, 82 394 S 238 558, 560 392 S 388 730, 84 704"
          />
        </svg>
        <svg className={`${styles.processLine} ${styles.mobileLine}`} viewBox="0 0 320 1100" aria-hidden="true">
          <path
            className={styles.processPath}
            pathLength="1"
            d="M156 34 C 110 118, 220 176, 162 258 S 111 405, 166 494 S 222 640, 158 738 S 102 913, 170 1064"
          />
        </svg>

        <div className={styles.steps}>
          {steps.map((step, index) => (
            <article
              key={step.name}
              className={`${styles.step} reveal`}
              style={{ '--reveal-delay': `${index * 70}ms` }}
            >
              <h3 className={step.style ? styles[`${step.style}Title`] : undefined}>{step.name}</h3>
              <p>{step.desc}</p>
            </article>
          ))}
        </div>
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
