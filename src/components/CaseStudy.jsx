import { useEffect, useState } from 'react'
import { projects } from './Work'
import { updatePageMeta } from '../utils/pageMeta'
import styles from './CaseStudy.module.css'

const defaultProject = projects[0]

const caseStudySections = [
  {
    eyebrow: 'Context',
    title: 'What was the situation?',
    prompt: 'Add a short explanation of the project context, target users, constraints, team setup, and why this problem mattered.',
    imagePrompts: ['Product or service context', 'User journey or current experience'],
  },
  {
    eyebrow: 'Research',
    title: 'What I needed to understand',
    prompt: 'Add the research goal, methods used, who you learned from, and what you were trying to avoid assuming too early.',
    imagePrompts: ['Research notes or observation material', 'Interview guide, survey, or affinity mapping'],
  },
  {
    eyebrow: 'Findings',
    title: 'What shaped the design direction',
    prompt: 'Add 2-4 key insights. This is where recruiters should see how user input turned into design priorities.',
    imagePrompts: ['Insight synthesis', 'Persona, user needs, or problem statement'],
  },
  {
    eyebrow: 'Design',
    title: 'From rough ideas to interface decisions',
    prompt: 'Add sketches, wireframes, flow decisions, and the reasoning behind the screens you chose to design.',
    imagePrompts: ['Sketches or early wireframes', 'Flow, IA, or Figma exploration'],
  },
  {
    eyebrow: 'Testing',
    title: 'What changed after feedback',
    prompt: 'Add usability testing notes, what confused people, what worked, and the specific changes you made after feedback.',
    imagePrompts: ['Testing setup or feedback notes', 'Before and after design change'],
  },
  {
    eyebrow: 'Final design',
    title: 'The finished direction',
    prompt: 'Add final screens, prototype views, and a short explanation of why the final solution fits the users and context.',
    imagePrompts: ['Final screen set', 'Prototype or responsive view'],
  },
]

function ImageSlot({ src, label, onOpen }) {
  if (src) {
    return (
      <button
        type="button"
        className={styles.imageButton}
        onClick={() => onOpen(src, label)}
        aria-label={`Open larger image of ${label}`}
      >
        <img src={src} alt={label} />
      </button>
    )
  }

  return (
    <div className={styles.imagePlaceholder} aria-label={`${label} image placeholder`}>
      <span>Image placeholder</span>
      <strong>{label}</strong>
    </div>
  )
}

export default function CaseStudy({ slug }) {
  const project = projects.find(item => item.slug === slug) || defaultProject
  const otherProjects = projects.filter(item => item.slug !== project.slug)
  const [openImage, setOpenImage] = useState(null)
  const [showFloatingBackLink, setShowFloatingBackLink] = useState(false)
  const heroImage = project.caseHeroImage || project.secondarySnapshotImage || project.backgroundImage
  const isHeroZoomable = project.caseHeroZoomable !== false

  useEffect(() => {
    const title = `${project.title} case study | Arnas Sokolovas`
    const description = `${project.problem} ${project.role}`
    const canonicalUrl = `https://arnas-so.com/case/${project.slug}`

    updatePageMeta({
      title,
      description,
      url: canonicalUrl,
    })
  }, [project])

  useEffect(() => {
    if (!openImage) {
      return undefined
    }

    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        setOpenImage(null)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [openImage])

  useEffect(() => {
    const updateFloatingBackLink = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const viewportHeight = window.innerHeight
      const pageHeight = document.documentElement.scrollHeight
      const distanceFromBottom = pageHeight - (scrollTop + viewportHeight)

      setShowFloatingBackLink(scrollTop > viewportHeight * 0.65 && distanceFromBottom > viewportHeight * 0.75)
    }

    updateFloatingBackLink()
    window.addEventListener('scroll', updateFloatingBackLink, { passive: true })
    window.addEventListener('resize', updateFloatingBackLink)

    return () => {
      window.removeEventListener('scroll', updateFloatingBackLink)
      window.removeEventListener('resize', updateFloatingBackLink)
    }
  }, [])

  const openCaseImage = (src, alt) => {
    setOpenImage({ src, alt })
  }

  return (
    <main
      className={styles.casePage}
      style={{
        '--project-accent': project.accent,
        '--case-shape-primary': project.caseShapePrimary,
        '--case-shape-secondary': project.caseShapeSecondary,
        '--hero-image': `url(${project.backgroundImage})`,
      }}
    >
      <div className={styles.caseDrawings} aria-hidden="true">
        <svg className={styles.caseDrawingTop} viewBox="0 0 360 260" focusable="false">
          <path
            d="M29 142C63 74 127 27 196 31c58 3 103 41 113 92 11 55-22 96-76 101-47 5-88-17-123-40-30-20-61-22-81-42Z"
            fill="none"
            stroke="var(--case-shape-primary, rgba(150, 63, 47, 0.22))"
            strokeWidth="18"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M73 133c27-38 73-66 122-64 39 2 73 26 82 61 8 34-12 63-47 68-33 5-58-11-85-28-22-14-44-21-72-37Z"
            fill="none"
            stroke="var(--project-accent, var(--accent))"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.36"
          />
          <circle cx="278" cy="62" r="11" fill="var(--case-shape-secondary, rgba(49, 95, 135, 0.22))" opacity="0.55" />
          <circle cx="318" cy="96" r="5" fill="var(--project-accent, var(--accent))" opacity="0.35" />
        </svg>

        <svg className={styles.caseDrawingBottom} viewBox="0 0 340 300" focusable="false">
          <path
            d="M287 96c-42-43-112-59-170-31-48 23-76 75-62 123 16 53 74 75 130 58 50-15 75-54 102-92 17-24 24-40 0-58Z"
            fill="none"
            stroke="var(--case-shape-secondary, rgba(49, 95, 135, 0.2))"
            strokeWidth="20"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M259 123c-34-30-86-40-128-19-33 16-53 50-44 82 11 35 49 51 86 39 34-11 52-37 72-64 14-19 21-26 14-38Z"
            fill="none"
            stroke="var(--project-accent, var(--accent))"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.34"
          />
          <path
            d="M46 68c18-12 36-18 55-17M51 94c15-8 31-12 48-11"
            fill="none"
            stroke="var(--case-shape-primary, rgba(150, 63, 47, 0.24))"
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.42"
          />
        </svg>
      </div>
      <a className={styles.backLink} href="/#work">Back to work</a>
      <a
        className={`${styles.floatingBackLink} ${showFloatingBackLink ? styles.floatingBackLinkVisible : ''}`}
        href="/#work"
        aria-hidden={!showFloatingBackLink}
        tabIndex={showFloatingBackLink ? undefined : -1}
      >
        Back to work
      </a>

      <section
        className={`${styles.hero} ${project.caseHeroImage ? styles.imageHero : ''}`}
        aria-labelledby="case-title"
      >
        <div className={styles.heroCopy}>
          <p>{project.type} / {project.year}</p>
          <h1 id="case-title">{project.title}</h1>
          <div className={styles.summaryGrid}>
            <section>
              <h2>Problem</h2>
              <p>{project.problem}</p>
            </section>
            <section>
              <h2>Role</h2>
              <p>{project.role}</p>
            </section>
          </div>
        </div>
        <figure className={`${styles.heroVisual} ${project.caseHeroImage ? styles.transparentHeroVisual : ''}`}>
          {isHeroZoomable ? (
            <button
              type="button"
              className={styles.imageButton}
              onClick={() => openCaseImage(heroImage, `${project.title} preview`)}
              aria-label={`Open larger image of ${project.title} preview`}
            >
              <img src={heroImage} alt={`${project.title} preview`} />
            </button>
          ) : (
            <img className={styles.staticHeroImage} src={heroImage} alt={`${project.title} preview`} />
          )}
        </figure>
      </section>

      <section className={styles.overview} aria-label="Project overview">
        <div>
          <p className="section-kicker">Process focus</p>
          <ul>
            {project.process.map(step => <li key={step}>{step}</li>)}
          </ul>
        </div>
        <div>
          <p className="section-kicker">Outcome</p>
          <p className={styles.overviewText}>{project.outcome}</p>
        </div>
      </section>

      {project.caseLead && (
        <section className={styles.caseLead} aria-label="Case study direction">
          <div>
            <p className="section-kicker">Case direction</p>
            <h2>{project.caseLead.title}</h2>
            <p>{project.caseLead.text}</p>
          </div>
          <dl>
            {project.caseLead.points.map(point => (
              <div key={point.label}>
                <dt>{point.label}</dt>
                <dd>{point.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {project.caseSections && (
        <section className={`${styles.caseNarrative} ${styles.customNarrative}`} aria-label={`${project.title} case study`}>
          {project.caseSections.map((section, sectionIndex) => {
            const images = section.images || []
            const hasVisual = images.length > 0 || section.video

            return (
              <article
                className={`${hasVisual ? styles.caseSection : styles.textOnlyCaseSection} ${styles.customCaseSection} ${!hasVisual ? styles.closingCaseSection : ''} ${hasVisual && sectionIndex % 2 === 1 ? styles.reverseCaseSection : ''}`}
                data-step={String(sectionIndex + 1).padStart(2, '0')}
                data-project={project.slug}
                data-case-section={section.eyebrow.toLowerCase().replace(/\s+/g, '-')}
                key={section.title}
              >
                <div className={styles.sectionCopy}>
                  <div className={styles.caseStepHeader}>
                    <span>{String(sectionIndex + 1).padStart(2, '0')}</span>
                    <span>{section.eyebrow}</span>
                  </div>
                  <h2>{section.title}</h2>
                  {section.takeaway && <p className={styles.takeaway}>{section.takeaway}</p>}
                  {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                  {section.highlights && (
                    <ul className={styles.sectionHighlights}>
                      {section.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}
                    </ul>
                  )}
                </div>

                {hasVisual && (
                  <div className={`${styles.imageGrid} ${images.length === 1 ? styles.singleImageGrid : ''}`}>
                    {images.map(item => (
                      <figure className={styles.evidencePanel} key={item.label}>
                        <ImageSlot
                          src={item.src}
                          label={item.alt || item.label}
                          onOpen={openCaseImage}
                        />
                        <figcaption>{item.label}</figcaption>
                      </figure>
                    ))}
                    {section.video && (
                      <figure className={`${styles.evidencePanel} ${styles.videoPanel}`}>
                        <iframe
                          src={section.video.src}
                          title={section.video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                        <figcaption>{section.video.label}</figcaption>
                      </figure>
                    )}
                  </div>
                )}
              </article>
            )
          })}
        </section>
      )}

      {!project.caseSections && (
      <section className={styles.caseNarrative} aria-label={`${project.title} case study draft structure`}>
        {caseStudySections.map((section, sectionIndex) => {
          const firstImageIndex = sectionIndex * 2
          const imageSources = [
            project.detailVisualImages[firstImageIndex],
            project.detailVisualImages[firstImageIndex + 1],
          ]

          return (
            <article className={styles.caseSection} key={section.title}>
              <div className={styles.sectionCopy}>
                <span>{section.eyebrow}</span>
                <h2>{section.title}</h2>
                <p>{section.prompt}</p>
                <div className={styles.textPlaceholder}>
                  <p>Add final paragraph here tomorrow.</p>
                  <p>Add one concrete decision: “I found X, so I changed Y.”</p>
                </div>
              </div>

              <div className={styles.imageGrid}>
                {section.imagePrompts.map((label, imageIndex) => (
                  <ImageSlot
                    key={label}
                    src={imageSources[imageIndex]}
                    label={imageSources[imageIndex] ? project.detailVisuals[firstImageIndex + imageIndex] : label}
                    onOpen={openCaseImage}
                  />
                ))}
              </div>
            </article>
          )
        })}
      </section>
      )}

      {!project.caseSections && (
      <section className={styles.gallery} aria-label={`${project.title} existing case study notes`}>
        {project.details.map((detail, index) => (
          <article className={styles.storyBlock} key={detail.title}>
            <figure>
              <button
                type="button"
                className={styles.imageButton}
                onClick={() => openCaseImage(project.detailVisualImages[index], project.detailVisuals[index])}
                aria-label={`Open larger image of ${project.detailVisuals[index]}`}
              >
                <img src={project.detailVisualImages[index]} alt={project.detailVisuals[index]} />
              </button>
              <figcaption>{project.detailVisuals[index]}</figcaption>
            </figure>
            <div>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h2>{detail.title}</h2>
              <p>{detail.text}</p>
            </div>
          </article>
        ))}
      </section>
      )}

      <section className={styles.nextStep} aria-label="Project link">
        <div className={styles.nextStepCopy}>
          <span>{project.noteLabel || 'Final takeaway'}</span>
          <p>{project.evidence}</p>
        </div>
        <a href={project.href} target="_blank" rel="noreferrer">
          {project.cta}
        </a>
      </section>

      <section className={styles.moreCases} aria-labelledby="more-cases-title">
        <div className={styles.moreHeader}>
          <div>
            <p className="section-kicker">More case studies</p>
            <h2 id="more-cases-title">View other work</h2>
          </div>
          <a className={styles.bottomBackLink} href="/#work">Back to work</a>
        </div>

        <div className={styles.moreGrid}>
          {otherProjects.map(item => (
            <a
              className={styles.moreCard}
              href={`/case/${item.slug}`}
              style={{ '--project-accent': item.accent }}
              key={item.slug}
            >
              <img src={item.secondarySnapshotImage || item.backgroundImage} alt={`${item.title} preview`} />
              <div>
                <p>{item.type} / {item.year}</p>
                <h3>{item.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      {openImage && (
        <div
          className={styles.imageOverlay}
          role="dialog"
          aria-modal="true"
          aria-label={openImage.alt}
          onClick={() => setOpenImage(null)}
        >
          <div className={styles.imageModal} onClick={event => event.stopPropagation()}>
            <button type="button" onClick={() => setOpenImage(null)} aria-label="Close image">
              Close
            </button>
            <img src={openImage.src} alt={openImage.alt} />
          </div>
        </div>
      )}
    </main>
  )
}
