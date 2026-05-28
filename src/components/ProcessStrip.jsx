import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import styles from './ProcessStrip.module.css'

const steps = [
  {
    num: '01',
    name: 'Discover',
    desc: 'Interviews, observations, desk research - understanding the real problem before solving anything.',
  },
  {
    num: '02',
    name: 'Define',
    desc: 'Affinity mapping, user stories, insight synthesis - finding the right problem to solve.',
  },
  {
    num: '03',
    name: 'Develop',
    desc: 'Sketching, wireframing, prototyping - exploring ideas through iteration, not perfection.',
  },
  {
    num: '04',
    name: 'Deliver',
    desc: 'Refined interfaces grounded in research - and honest reflection on what comes next.',
  },
]

export default function ProcessStrip() {
  const sectionRef = useRef(null)
  useReveal(sectionRef)

  return (
    <div className={styles.strip} ref={sectionRef}>
      {steps.map((step, index) => (
        <div
          key={step.num}
          className={`${styles.step} reveal`}
          style={{ '--reveal-delay': `${index * 70}ms` }}
        >
          <p className={styles.num}>{step.num}</p>
          <p className={styles.name}>{step.name}</p>
          <p className={styles.desc}>{step.desc}</p>
        </div>
      ))}
    </div>
  )
}
