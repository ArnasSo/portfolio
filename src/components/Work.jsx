import { useEffect, useRef } from 'react'
import styles from './Work.module.css'

const projects = [
  {
    id: 'bla-sol',
    title: 'Blå Sol Festival App',
    desc: 'Full Double Diamond process for a real client — from field observations and user interviews through affinity mapping to a redesigned app experience. Focused on improving festival navigation and artist discovery.',
    tags: ['UX Design', 'Client Project'],
    year: '2025',
    visualClass: styles.bgBlaSol,
    visualLabel: 'App redesign\ncase study',
    darkLabel: false,
  },
  {
    id: 'keychain',
    title: 'VibeTag — Haptic Key Finder',
    desc: 'A concept product for deaf and hard-of-hearing users. A Bluetooth keychain that communicates distance through vibration patterns rather than audio — paired with a minimal mobile app.',
    tags: ['Concept', 'Accessibility'],
    year: '2025',
    visualClass: styles.bgKeychain,
    visualLabel: 'Concept project\n+ app design',
    darkLabel: false,
  },
  {
    id: 'next',
    title: 'Next Project',
    desc: 'More work on the way. Currently finishing my 2nd semester at Business Academy Aarhus — new case studies dropping soon.',
    tags: ['Coming Soon'],
    year: '2025',
    visualClass: styles.bgPlaceholder,
    visualLabel: 'In progress',
    darkLabel: true,
  },
]

function ProjectCard({ project }) {
  return (
    <article className={styles.card}>
      <div className={styles.info}>
        <div>
          <div className={styles.tags}>
            {project.tags.map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.desc}>{project.desc}</p>
        </div>
        <div className={styles.footer}>
          <span className={styles.year}>{project.year}</span>
          <span className={styles.arrow}>↗</span>
        </div>
      </div>

      <div className={styles.visual}>
        <div className={`${styles.visualBg} ${project.visualClass}`} />
        <div className={styles.circle} style={{ width: 120, height: 120 }} />
        <div className={styles.circle} style={{ width: 220, height: 220 }} />
        <div className={styles.circle} style={{ width: 340, height: 340 }} />
        <p className={`${styles.visualLabel} ${project.darkLabel ? styles.visualLabelDark : ''}`}>
          {project.visualLabel.split('\n').map((line, i) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}
        </p>
      </div>
    </article>
  )
}

export default function Work() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    const els = sectionRef.current?.querySelectorAll('.reveal')
    els?.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="work" className={styles.work} ref={sectionRef}>
      <div className={`${styles.header} reveal`}>
        <span className="section-number">01</span>
        <h2 className="section-title">Selected Work</h2>
      </div>

      <div className={styles.grid}>
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="reveal"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  )
}