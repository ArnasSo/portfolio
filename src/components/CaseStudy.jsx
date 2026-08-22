import { useEffect, useState } from 'react'
import { projects } from './Work'
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
  const heroImage = project.caseHeroImage || project.secondarySnapshotImage || project.backgroundImage
  const isHeroZoomable = project.caseHeroZoomable !== false

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
      <a className={styles.backLink} href="/#work">Back to work</a>

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
