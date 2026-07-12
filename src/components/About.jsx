import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import styles from './About.module.css'

const capabilities = [
  'UX research and synthesis',
  'User flows and information architecture',
  'Wireframing and interactive prototyping',
  'Usability testing and iteration',
  'Front-end awareness with React',
]

const toolkit = [
  'Figma',
  'Photoshop',
  'Basic video editing',
  'HTML/CSS',
  'React basics',
]

export default function About() {
  const sectionRef = useRef(null)
  useReveal(sectionRef)

  return (
    <section id="about" className={styles.about} ref={sectionRef} aria-labelledby="about-title">
      <div className={`${styles.inner} reveal`}>
        <div>
          <p className="section-kicker">About</p>
          <h2 id="about-title">Learning UX through real problems.</h2>
        </div>

        <div className={styles.body}>
          <p>
            I study Multimedia Design at Business Academy Aarhus and I am
            moving deeper into UX. I am currently completing the Google UX Design
            Certificate and looking for a place to learn from experienced teams.
          </p>
          <p>
            Right now I am a UX generalist: familiar with many parts of the
            process, from research and flows to prototypes and handoff. My goal
            is to become a T-shaped UX designer with stronger specialist depth
            over time.
          </p>
          <div className={styles.groups}>
            <div>
              <h3>UX capabilities</h3>
              <ul className={styles.capabilities}>
                {capabilities.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div>
              <h3>Toolkit</h3>
              <ul className={styles.capabilities}>
                {toolkit.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
