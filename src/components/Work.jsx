import { useEffect, useRef, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import styles from './Work.module.css'

const keyBeeVideo = 'https://www.youtube.com/embed/-umZo3GwXbw?autoplay=1&rel=0'

const projects = [
  {
    id: 'bla-sol',
    title: 'BLÅ SOL Festival App',
    desc: 'Exam project for a non-profit festival in Randers. We redesigned the digital experience around discoverability, helping visitors find smaller activities, save events to a personal plan, and stay engaged beyond the main music lineup.',
    tags: ['Client Project', 'Festival UX', 'User Research', 'Mobile App'],
    year: '2026',
    visualClass: styles.bgBlaSol,
    visualLabel: 'Discovery\n+ planning',
    darkLabel: false,
    previewUrl: 'https://bla-sol.pages.dev/',
  },
  {
    id: 'plant-hunt',
    title: 'PlantHunt',
    desc: 'A mobile game concept for kids visiting Botanisk Have in Aarhus. The experience uses QR code scanning to guide children through plant-based tasks, helping them explore the garden through observation, play, and small discoveries.',
    tags: ['Mobile Game', 'Kids UX', 'Observation', 'QR Flow'],
    year: '2026',
    visualClass: styles.bgPlantHunt,
    visualLabel: 'QR hunt\n+ nature play',
    darkLabel: true,
    previewUrl: 'https://plant-hunt.pages.dev/',
  },
  {
    id: 'keychain',
    title: 'KeyBee - Haptic Key Finder',
    desc: 'A concept product for deaf and hard-of-hearing users. A Bluetooth keychain that communicates distance through vibration patterns rather than audio - paired with a minimal mobile app.',
    tags: ['Concept', 'Accessibility', 'Video Demo'],
    year: '2026',
    visualClass: styles.bgKeychain,
    visualLabel: 'Watch video\ncase study',
    darkLabel: false,
    videoUrl: keyBeeVideo,
  },
  {
    id: 'cphfw-infoscreen',
    title: 'Copenhagen Fashion Week Infoscreen',
    desc: 'A school group project for a Copenhagen Fashion Week infoscreen, focused on visual direction, typography, color, hierarchy, and clear event information. The process included research, design exploration, and refinement of the screen experience.',
    tags: ['Infoscreen', 'Visual Design', 'Typography', 'Color'],
    year: '2026',
    visualClass: styles.bgCphfw,
    visualLabel: 'Fashion week\ninfoscreen',
    darkLabel: false,
    previewUrl: 'https://cphfw.pages.dev/',
    previewMode: 'screen',
  },
  {
    id: 'next',
    title: 'Case Study Placeholder',
    desc: 'A reserved space for an upcoming case study. Add the project context, problem, process, and final outcome here when the work is ready to publish.',
    tags: ['Coming Soon', 'Case Study'],
    year: '2026',
    visualClass: styles.bgPlaceholder,
    visualLabel: 'Case study\ncoming soon',
    darkLabel: true,
  },
  {
    id: 'placeholder-ux',
    title: 'UX Project Placeholder',
    desc: 'Use this slot for a research-heavy project, school assignment, or client collaboration that shows your process from discovery to prototype.',
    tags: ['Coming Soon', 'UX Process'],
    year: '2026',
    visualClass: styles.bgPlaceholderWarm,
    visualLabel: 'Research\n+ prototype',
    darkLabel: true,
  },
  {
    id: 'placeholder-build',
    title: 'Build Project Placeholder',
    desc: 'Use this slot for a coded prototype, frontend experiment, or interaction-focused project that shows how you bring ideas into a working interface.',
    tags: ['Coming Soon', 'Prototype'],
    year: '2026',
    visualClass: styles.bgPlaceholderSoft,
    visualLabel: 'Interactive\nbuild',
    darkLabel: true,
  },
]

function ProjectCard({ project, onOpenVideo, onOpenPreview }) {
  const isPlayable = Boolean(project.videoUrl)
  const hasPreview = Boolean(project.previewUrl)
  const isInteractive = isPlayable || hasPreview

  const openProject = () => {
    if (isPlayable) {
      onOpenVideo(project)
      return
    }

    if (hasPreview) {
      onOpenPreview(project)
    }
  }

  const handleKeyDown = event => {
    if (!isInteractive || (event.key !== 'Enter' && event.key !== ' ')) {
      return
    }

    event.preventDefault()
    openProject()
  }

  return (
    <article
      className={`${styles.card} ${isInteractive ? styles.cardInteractive : ''} ${isPlayable ? styles.cardPlayable : ''}`}
      role={isInteractive ? 'button' : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      aria-label={isPlayable ? `Open ${project.title} video` : hasPreview ? `Preview ${project.title} mobile app` : undefined}
      onClick={isInteractive ? openProject : undefined}
      onKeyDown={handleKeyDown}
    >
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
          <span className={styles.arrow} aria-hidden="true">
            <svg viewBox="0 0 24 24" className={styles.arrowIcon}>
              {isPlayable ? (
                <path d="M9 6L18 12L9 18Z" />
              ) : (
                <>
                  <path d="M7 17L17 7" />
                  <path d="M9 7H17V15" />
                </>
              )}
            </svg>
          </span>
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
  const [activeVideo, setActiveVideo] = useState(null)
  const [activePreview, setActivePreview] = useState(null)
  useReveal(sectionRef)

  useEffect(() => {
    if (!activeVideo && !activePreview) {
      return undefined
    }

    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        setActiveVideo(null)
        setActivePreview(null)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeVideo, activePreview])

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
            style={{ '--reveal-delay': `${i * 90}ms` }}
          >
            <ProjectCard
              project={project}
              onOpenVideo={setActiveVideo}
              onOpenPreview={setActivePreview}
            />
          </div>
        ))}
      </div>

      {activeVideo && (
        <div
          className={styles.videoOverlay}
          role="presentation"
          onMouseDown={() => setActiveVideo(null)}
        >
          <div
            className={styles.videoModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-title"
            onMouseDown={event => event.stopPropagation()}
          >
            <div className={styles.videoHeader}>
              <div>
                <p className={styles.videoKicker}>Project video</p>
                <h3 id="video-title" className={styles.videoTitle}>{activeVideo.title}</h3>
              </div>
              <button
                type="button"
                className={styles.closeButton}
                aria-label="Close video"
                onClick={() => setActiveVideo(null)}
              >
                <span />
                <span />
              </button>
            </div>

            <div className={styles.videoFrame}>
              <iframe
                src={activeVideo.videoUrl}
                title={`${activeVideo.title} video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {activePreview && (
        <div
          className={`${styles.videoOverlay} ${activePreview.previewMode === 'screen' ? styles.screenOverlay : ''}`}
          role="presentation"
          onMouseDown={() => setActivePreview(null)}
        >
          <div
            className={activePreview.previewMode === 'screen' ? styles.screenModal : styles.phoneModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="preview-title"
            onMouseDown={event => event.stopPropagation()}
          >
            <div className={styles.phoneHeader}>
              <div>
                <p className={styles.videoKicker}>
                  {activePreview.previewMode === 'screen' ? 'Infoscreen preview' : 'Mobile app preview'}
                </p>
                <h3 id="preview-title" className={styles.videoTitle}>{activePreview.title}</h3>
              </div>
              <button
                type="button"
                className={styles.closeButton}
                aria-label="Close preview"
                onClick={() => setActivePreview(null)}
              >
                <span />
                <span />
              </button>
            </div>

            <div className={activePreview.previewMode === 'screen' ? styles.screenStage : styles.phoneStage}>
              {activePreview.previewMode === 'screen' ? (
                <>
                  <div className={styles.screenShell}>
                    <iframe
                      src={activePreview.previewUrl}
                      title={`${activePreview.title} screen preview`}
                      className={styles.screenFrame}
                    />
                  </div>
                  <div className={styles.phoneShell}>
                    <div className={styles.phoneSpeaker} />
                    <iframe
                      src={activePreview.previewUrl}
                      title={`${activePreview.title} phone preview`}
                      className={styles.phoneFrame}
                    />
                  </div>
                </>
              ) : (
                <div className={styles.phoneShell}>
                  <div className={styles.phoneSpeaker} />
                  <iframe
                    src={activePreview.previewUrl}
                    title={`${activePreview.title} mobile preview`}
                    className={styles.phoneFrame}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
