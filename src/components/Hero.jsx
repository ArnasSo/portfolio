import { scrollToSection } from '../utils/scrollToSection'
import styles from './Hero.module.css'

const signals = [
  ['Focus', 'UX design, research, interaction'],
  ['Looking for', 'Internship / junior UX role'],
  ['Learning', 'Google UX Design Certificate in progress'],
  ['Location', 'Aalborg, Aarhus, remote'],
]

export default function Hero() {
  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>UX Designer portfolio</p>
          <h1 id="hero-title">Designing clearer product experiences around real user needs.</h1>
          <p className={styles.summary}>
            I am Arnas Sokolovas, a UX-focused designer learning how research,
            prototyping, and clear thinking can make digital services easier to
            use. I am completing the Google UX Design Certificate and looking
            for teams where I can learn by contributing.
          </p>
          <div className={styles.actions}>
            <a href="#work" className="btn-primary" onClick={event => scrollToSection(event, '#work')}>
              View case studies
            </a>
            <a href="#contact" className="btn-secondary" onClick={event => scrollToSection(event, '#contact')}>
              Contact
            </a>
          </div>
        </div>

        <aside className={styles.panel} aria-label="Portfolio summary">
          <p className={styles.panelLabel}>For Recruiters</p>
          <dl>
            {signals.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <div className={styles.note}>
            <strong>What you will see</strong>
            <p>Projects framed around users, problems, process, and what I learned.</p>
          </div>
        </aside>
      </div>
    </section>
  )
}
