import { scrollToSection } from '../utils/scrollToSection'
import styles from './Hero.module.css'

const signals = [
  { label: 'Frontend', value: 'HTML, CSS, WordPress, React.js basics' },
  { label: 'Looking for', value: <strong>Internship (Spring 2027), UX/UI, or frontend</strong> },
  {
    label: 'Studying',
    value: 'Multimedia Design',
    subtext: 'Graduating May 2027',
  },
  {
    label: 'Experience',
    value: 'Internships + education',
    sectionId: '#about',
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
    links: [
      {
        label: 'Verify certificate 1',
        href: 'https://www.coursera.org/account/accomplishments/verify/0ZA3ABEZFUSY',
      },
    ],
  },
  {
    label: 'LinkedIn',
    value: 'arnassokolovas',
    href: 'https://www.linkedin.com/in/arnassokolovas/',
  },
  {
    label: 'Human note',
    value: 'Friendly, calm, and mildly sarcastic',
    subtext: 'Usually productive sarcasm. Mostly.',
  },
]

export default function Hero() {
  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={`${styles.roleTitle} section-kicker`}>Junior UX/UI Designer</p>
          <h1 id="hero-title">UX/UI designer with a frontend brain and a user-first habit</h1>
          <p className={styles.summary}>
            I am <strong>Arnas Sokolovas</strong>, an early-career designer with a UX mindset,
            UI practice, and some frontend experience in WordPress and React.js. I like useful
            details, honest feedback, and teams where good ideas are allowed to be a little messy first.
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
                <div key={signal.label} className={signal.subtext ? styles.hasSubtext : undefined}>
                  <dt>{signal.label}</dt>
                  <dd>
                    {signal.sectionId ? (
                      <a href={signal.sectionId} onClick={event => scrollToSection(event, signal.sectionId)}>
                        <span>{signal.value}</span>
                      </a>
                    ) : signal.href ? (
                      <a href={signal.href} target="_blank" rel="noreferrer">
                        <span>{signal.value}</span>
                        <span className={styles.externalIcon} aria-hidden="true">{'\u2197'}</span>
                      </a>
                    ) : signal.links ? (
                      <div className={styles.certificateMenu}>
                        <button type="button" aria-haspopup="true">
                          <span>{signal.value}</span>
                        </button>
                        <div className={styles.certificateDropdown}>
                          {signal.links.map(link => (
                            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                              <span>{link.label}</span>
                              <span className={styles.externalIcon} aria-hidden="true">{'\u2197'}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : signal.subtext ? (
                      <>
                        <strong>{signal.value}</strong>
                        <small>{signal.subtext}</small>
                      </>
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
