import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import styles from './Work.module.css'

const projects = [
  {
    title: 'BLA SOL festival app',
    type: 'Mobile UX / client project',
    year: '2026',
    problem: 'Festival visitors needed a simpler way to discover smaller activities and shape a personal schedule instead of only following headline events.',
    role: 'Research, information architecture, flows, wireframes, prototype',
    process: ['Mapped visitor needs', 'Prioritized event discovery', 'Designed mobile planning flow'],
    outcome: <>My first <strong>real-stakeholder collaboration</strong>. I learned <strong>client interviewing</strong>, <strong>target-group validation</strong>, and how research can shape a stronger UX direction.</>,
    noteLabel: 'Testimonial',
    evidence: '"This is placeholder." - Nikolaj, BLA SOL organizer',
    href: 'https://bla-sol.pages.dev/',
    cta: 'Open prototype',
  },
  {
    title: 'PlantHunt',
    type: 'Short group project / learning game',
    year: '2026',
    problem: 'Children visiting a botanical garden needed prompts that encouraged observation without turning learning into a long instruction screen.',
    role: 'Field observation, Double Diamond process, concept, prototype, usability testing',
    process: ['Observed the botanical garden visit', 'Captured notes and opportunities', 'Ran usability testing within project scope'],
    outcome: <>A fast group project that helped me practice <strong>focus</strong>, <strong>time management</strong>, and moving from <strong>observation to iteration</strong>.</>,
    noteLabel: 'Focus',
    evidence: 'Garden observations, concept development, prototype iteration, and usability testing.',
    href: 'https://plant-hunt.pages.dev/',
    cta: 'Open prototype',
  },
  {
    title: 'KeyBee',
    type: 'Inclusive product concept',
    year: '2026',
    problem: 'The brief was to creatively enhance a familiar app concept by exploring interaction beyond the screen, including sound, voice control, and haptics.',
    role: 'Creative concept, interaction ideas, haptic direction, case film',
    process: ['Explored non-visual interaction', 'Developed a concept direction', 'Presented the idea through a case film'],
    outcome: <>This project helped me understand <strong>accessibility</strong> and <strong>equity</strong> in UX by thinking beyond screen-first interaction.</>,
    noteLabel: 'Focus',
    evidence: 'Creative concept project exploring sound, voice control, haptics, and sensory feedback.',
    href: 'https://www.youtube.com/embed/-umZo3GwXbw?autoplay=1&rel=0',
    cta: 'Watch case film',
  },
  {
    title: 'CPHFW infoscreen',
    type: 'Service touchpoint / visual hierarchy',
    year: '2025',
    problem: 'Event information needed to be readable quickly in a busy fashion-week environment while still matching the confidence of the brand context.',
    role: 'Research and UX testing in a cross-functional school team',
    process: ['Supported research and testing', 'Worked with teammates across roles', 'Contributed to UX decisions'],
    outcome: <>My first project using <strong>Double Diamond</strong>, and a <strong>foundation</strong> for understanding structured UX methods in a team setting.</>,
    href: 'https://cphfw.pages.dev/',
    cta: 'Open prototype',
  },
]

export default function Work() {
  const sectionRef = useRef(null)
  useReveal(sectionRef)

  return (
    <section id="work" className={styles.work} ref={sectionRef} aria-labelledby="work-title">
      <div className={`${styles.header} reveal`}>
        <p className="section-kicker">Selected UX work</p>
        <h2 id="work-title">Case studies built for scanning, then depth.</h2>
        <p>
          A short view of the problem, my role, the process, and the current outcome.
        </p>
      </div>

      <div className={styles.list}>
        {projects.map((project, index) => (
          <article className={`${styles.card} reveal`} style={{ '--reveal-delay': `${index * 80}ms` }} key={project.title}>
            <div className={styles.index}>{String(index + 1).padStart(2, '0')}</div>
            <div className={styles.main}>
              <div className={styles.cardHeader}>
                <div>
                  <p>{project.type} / {project.year}</p>
                  <h3>{project.title}</h3>
                </div>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.cta} for ${project.title} in a new tab`}
                >
                  {project.cta}
                </a>
              </div>

              <div className={styles.contentGrid}>
                <section>
                  <h4>Problem</h4>
                  <p>{project.problem}</p>
                </section>
                <section>
                  <h4>My role</h4>
                  <p>{project.role}</p>
                </section>
                <section>
                  <h4>Process</h4>
                  <ul>
                    {project.process.map(step => <li key={step}>{step}</li>)}
                  </ul>
                </section>
                <section>
                  <h4>Outcome</h4>
                  <p>{project.outcome}</p>
                </section>
              </div>

              {project.evidence && (
                <p className={styles.placeholder}>
                  <span>{project.noteLabel || 'Evidence to add'}:</span> {project.evidence}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
