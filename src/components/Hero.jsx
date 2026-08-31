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
  {
    label: 'Certificates',
    value: (
      <>
        <strong>Google UX certificates</strong>
      </>
    ),
    links: [
      {
        label: 'Verify certificate 1',
        href: 'https://www.coursera.org/account/accomplishments/verify/0ZA3ABEZFUSY',
      },
      {
        label: 'Verify certificate 2',
        href: 'https://www.coursera.org/account/accomplishments/verify/7EOW5W4IZCKK',
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
      <div className={styles.heroDrawings} aria-hidden="true">
        <svg className={styles.heroDrawingLeft} viewBox="0 0 360 560" focusable="false">
          <path
            d="M-24 318c67-92 168-144 254-116 72 24 98 94 67 157-33 67-115 94-191 75-53-13-94-48-130-116Z"
            fill="none"
            stroke="rgba(150, 63, 47, 0.16)"
            strokeWidth="34"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M-2 312c59-72 145-110 215-88 56 18 76 73 51 122-26 52-90 73-150 58-44-11-78-38-116-92Z"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.26"
          />
          <path
            d="M34 134c24-15 49-22 75-22M26 170c30-12 61-17 92-13"
            fill="none"
            stroke="rgba(150, 63, 47, 0.28)"
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.45"
          />
        </svg>

        <svg className={styles.heroDrawingRight} viewBox="0 0 420 280" focusable="false">
          <path
            d="M37 82c77-33 146-42 208-27 57 13 98 47 136 95"
            fill="none"
            stroke="rgba(49, 95, 135, 0.16)"
            strokeWidth="62"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M54 100c67-27 129-34 184-21 50 12 85 39 120 82"
            fill="none"
            stroke="rgba(49, 95, 135, 0.3)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="304" cy="58" r="8" fill="var(--accent)" opacity="0.28" />
        </svg>
      </div>
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
