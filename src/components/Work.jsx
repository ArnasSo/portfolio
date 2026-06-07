import { useEffect, useRef, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import styles from './Work.module.css'

const projects = [
  {
    id: 'bla-sol',
    title: 'BLÅ SOL',
    subtitle: 'A festival app that gives small moments the main stage.',
    desc: 'We redesigned discovery for a non-profit festival in Randers, helping visitors find smaller activities and build a personal plan.',
    tags: ['UX Research', 'Mobile Product', 'Client Project'],
    year: '2026',
    kind: 'festival',
    previewUrl: 'https://bla-sol.pages.dev/',
  },
  {
    id: 'plant-hunt',
    title: 'PlantHunt',
    subtitle: 'Turning a botanical garden into a playable world.',
    desc: 'A QR-based mobile game that invites children to observe, explore, and learn through bite-sized nature missions.',
    tags: ['Kids UX', 'Gamification', 'Field Research'],
    year: '2026',
    kind: 'plant',
    previewUrl: 'https://plant-hunt.pages.dev/',
  },
  {
    id: 'keybee',
    title: 'KeyBee',
    subtitle: 'Finding lost keys without relying on sound.',
    desc: 'An accessible Bluetooth key finder that translates distance into distinct vibration patterns for deaf and hard-of-hearing users.',
    tags: ['Inclusive Design', 'Concept Product', 'Haptics'],
    year: '2026',
    kind: 'keybee',
    videoUrl: 'https://www.youtube.com/embed/-umZo3GwXbw?autoplay=1&rel=0',
  },
  {
    id: 'cphfw',
    title: 'CPHFW',
    subtitle: 'Fashion-week information with runway confidence.',
    desc: 'A responsive infoscreen system exploring expressive typography, event hierarchy, and high-impact visual direction.',
    tags: ['Visual Design', 'Typography', 'Infoscreen'],
    year: '2025',
    kind: 'fashion',
    previewUrl: 'https://cphfw.pages.dev/',
    previewMode: 'screen',
  },
]

function ProjectVisual({ kind }) {
  if (kind === 'festival') {
    return (
      <div className={`${styles.artboard} ${styles.festival}`}>
        <span className={styles.sun} />
        <p className={styles.festivalLogo}>BLÅ<br />SOL</p>
        <div className={styles.phone}>
          <div className={styles.phoneTop} />
          <p>Today</p>
          <strong>Build your<br />festival plan</strong>
          <div className={styles.event}><i /> 14:30 · Workshop</div>
          <div className={styles.event}><i /> 16:00 · Blue stage</div>
        </div>
        <span className={styles.festivalStamp}>Randers<br />2026</span>
      </div>
    )
  }

  if (kind === 'plant') {
    return (
      <div className={`${styles.artboard} ${styles.plant}`}>
        <div className={styles.leafOne} />
        <div className={styles.leafTwo} />
        <div className={styles.plantPhone}>
          <span className={styles.qr}>▦</span>
          <p>MISSION 03</p>
          <strong>Find a leaf<br />bigger than<br />your hand.</strong>
          <span className={styles.scanClue}>Scan clue</span>
        </div>
        <p className={styles.plantType}>GO<br />FIND<br />GROW</p>
      </div>
    )
  }

  if (kind === 'keybee') {
    return (
      <div className={`${styles.artboard} ${styles.keybee}`}>
        <div className={styles.rings}><i /><i /><i /><i /></div>
        <div className={styles.keyFob}><span>KB</span></div>
        <div className={styles.signalCard}>
          <span>Distance</span>
          <strong>2.4 m</strong>
          <div><i /><i /><i /><i /><i /></div>
          <p>Vibration getting stronger</p>
        </div>
        <p className={styles.keyType}>FEEL<br />THE<br />SIGNAL</p>
      </div>
    )
  }

  return (
    <div className={`${styles.artboard} ${styles.fashion}`}>
      <p className={styles.fashionDate}>JAN<br />27—31</p>
      <p className={styles.fashionLogo}>CPH<br />FW</p>
      <div className={styles.schedule}>
        <span>12:00</span><strong>STINE GOYA</strong>
        <span>14:30</span><strong>GANNI</strong>
        <span>17:00</span><strong>ROTATE</strong>
      </div>
      <span className={styles.vertical}>COPENHAGEN FASHION WEEK</span>
    </div>
  )
}

function ProjectCard({ project, index, onOpen }) {
  const interactive = Boolean(project.videoUrl || project.previewUrl)

  return (
    <article
      className={`${styles.card} ${styles[`card${index + 1}`]} ${interactive ? styles.interactive : ''}`}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      aria-label={`Explore ${project.title}`}
      onClick={interactive ? event => onOpen(project, event.currentTarget) : undefined}
      onKeyDown={interactive ? event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onOpen(project, event.currentTarget)
        }
      } : undefined}
    >
      <ProjectVisual kind={project.kind} />
      <div className={styles.info}>
        <div className={styles.meta}>
          <span>{String(index + 1).padStart(2, '0')} / 04</span>
          <span>{project.year}</span>
        </div>
        <h3>{project.title}</h3>
        <p className={styles.subtitle}>{project.subtitle}</p>
        <p className={styles.desc}>{project.desc}</p>
        <div className={styles.tags}>
          {project.tags.map(tag => <span key={tag}>{tag}</span>)}
        </div>
        <span className={styles.explore}>{project.videoUrl ? 'Watch case film' : 'Explore prototype'} <b>↗</b></span>
      </div>
    </article>
  )
}

export default function Work() {
  const sectionRef = useRef(null)
  const modalRef = useRef(null)
  const triggerRef = useRef(null)
  const [activeProject, setActiveProject] = useState(null)
  useReveal(sectionRef)

  useEffect(() => {
    if (!activeProject) return undefined

    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        setActiveProject(null)
        return
      }

      if (event.key !== 'Tab') return

      const focusable = modalRef.current?.querySelectorAll(
        'button, a[href], iframe, [tabindex]:not([tabindex="-1"])'
      )

      if (!focusable?.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
      triggerRef.current?.focus()
    }
  }, [activeProject])

  const openProject = (project, trigger) => {
    triggerRef.current = trigger
    setActiveProject(project)
  }

  return (
    <section id="work" className={styles.work} ref={sectionRef}>
      <div className={`${styles.header} reveal`}>
        <div>
          <span className="section-number">01</span>
          <p>Selected work / 2025—2026</p>
        </div>
        <h2 className="section-title">Things I&apos;ve<br /><em>made matter.</em></h2>
        <p className={styles.intro}>Four projects. Four different problems. One shared obsession with making technology feel more human.</p>
      </div>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div className="reveal" style={{ '--reveal-delay': `${index * 100}ms` }} key={project.id}>
            <ProjectCard project={project} index={index} onOpen={openProject} />
          </div>
        ))}
      </div>

      {activeProject && (
        <div className={styles.overlay} onMouseDown={() => setActiveProject(null)}>
          <div
            ref={modalRef}
            className={`${styles.modal} ${activeProject.videoUrl ? styles.videoModal : styles.previewModal}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
            onMouseDown={event => event.stopPropagation()}
          >
            <header>
              <div>
                <p>{activeProject.videoUrl ? 'Case film' : 'Live prototype'}</p>
                <h3 id="project-title">{activeProject.title}</h3>
              </div>
              {!activeProject.videoUrl && (
                <a
                  className={styles.openExternal}
                  href={activeProject.previewUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open <span aria-hidden="true">↗</span>
                </a>
              )}
              <button type="button" autoFocus aria-label="Close project" onClick={() => setActiveProject(null)}>×</button>
            </header>
            <div className={`${styles.frameStage} ${activeProject.previewMode === 'screen' ? styles.wide : ''}`}>
              <div className={activeProject.previewMode === 'screen' || activeProject.videoUrl ? styles.screenShell : styles.phoneShell}>
                <iframe
                  src={activeProject.videoUrl || activeProject.previewUrl}
                  title={`${activeProject.title} preview`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
