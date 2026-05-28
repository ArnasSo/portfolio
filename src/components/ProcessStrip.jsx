import styles from './ProcessStrip.module.css'

const steps = [
  {
    num: '01',
    name: 'Discover',
    desc: 'Interviews, observations, desk research — understanding the real problem before solving anything.',
  },
  {
    num: '02',
    name: 'Define',
    desc: 'Affinity mapping, user stories, insight synthesis — finding the right problem to solve.',
  },
  {
    num: '03',
    name: 'Develop',
    desc: 'Sketching, wireframing, prototyping — exploring ideas through iteration, not perfection.',
  },
  {
    num: '04',
    name: 'Deliver',
    desc: 'Refined interfaces grounded in research — and honest reflection on what comes next.',
  },
]

export default function ProcessStrip() {
  return (
    <div className={styles.strip}>
      {steps.map(step => (
        <div key={step.num} className={styles.step}>
          <p className={styles.num}>{step.num}</p>
          <p className={styles.name}>{step.name}</p>
          <p className={styles.desc}>{step.desc}</p>
        </div>
      ))}
    </div>
  )
}