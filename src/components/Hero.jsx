import { scrollToSection } from '../utils/scrollToSection'
import styles from './Hero.module.css'

const signals = [
  { label: 'Focus', value: 'UX research, UI structure, interaction' },
  { label: 'Looking for', value: <strong>Internship / junior UX role</strong> },
  {
    label: 'Studying',
    value: (
      <>
        <strong>Multimedia Design</strong>
        <br />
        Graduating May 2027
      </>
    ),
  },
  { label: 'Location', value: 'Aalborg, Aarhus, remote' },
  {
    label: 'Certificates',
    value: (
      <>
        <strong>Google UX Certificate Program</strong>
        <br />
        1/7 certificates in progress
      </>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'arnassokolovas',
    href: 'https://www.linkedin.com/in/arnassokolovas/',
  },
]

export default function Hero() {
  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h1 id="hero-title">Designing clearer product experiences around real user needs.</h1>
          <p className={styles.summary}>
            I am <strong>Arnas Sokolovas</strong>, a <strong>UX-focused designer</strong> turning
            user insights into practical interfaces and digital solutions. I am
            <strong> ready to bring curiosity, structure, and user-centered thinking to a team solving real problems</strong>.
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

        <div className={styles.recruiterStack}>
          <figure className={styles.portrait}>
            <img src="/arnas-photo.png" alt="Portrait of Arnas Sokolovas" />
          </figure>

          <aside className={styles.panel} aria-label="Portfolio summary">
            <p className={styles.panelLabel}>For Recruiters</p>
            <dl>
              {signals.map(signal => (
                <div key={signal.label}>
                  <dt>{signal.label}</dt>
                  <dd>
                    {signal.href ? (
                      <a href={signal.href} target="_blank" rel="noreferrer">
                        <span>{signal.value}</span>
                        <span className={styles.externalIcon} aria-hidden="true">{'\u2197'}</span>
                      </a>
                    ) : signal.value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  )
}
