import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import styles from './Work.module.css'

export const projects = [
  {
    slug: 'bla-sol-festival-app',
    title: 'BLA SOL festival app',
    type: 'Mobile UX / client project',
    year: '2026',
    accent: '#2f5f5b',
    backgroundImage: '/bla-sol-background.png',
    snapshot: 'User-centered Digital Solution',
    secondarySnapshot: 'Mobile Festival Experience',
    secondarySnapshotImage: '/bla-sol-app-preview.png',
    problem: 'BLA SOL needed a stronger event-discovery experience inside an existing festival app, helping visitors find relevant activities without forcing them to constantly use their phone during the festival.',
    role: 'Stakeholder research, client interviews, interview and observation guides, synthesis, UX direction, prototype, and testing.',
    process: ['User Needs Mapping', 'Event Discovery UX', 'Mobile-first Interface Design', 'Team-based Client Project'],
    outcome: <>A user-centered digital solution that worked with the festival's existing visual identity while adding clearer paths into events, artists, and personal planning.</>,
    detailVisuals: [
      'Client and Discovery',
      'User-centered Research and Synthesis',
      'Figma, Prototyping and UI',
      'Testing and Final Design',
    ],
    detailVisualImages: [
      '/bla-sol-client-discovery.webp',
      '/bla-sol-research-synthesis.png',
      '/bla-sol-figma-ui.png',
      '/bla-sol-testing-final.png',
    ],
    details: [
      {
        title: 'Discovery',
        text: 'Stakeholder input and client interviews established the festival context, business goals, and what the existing app needed to support.',
      },
      {
        title: 'Research setup',
        text: 'Interviews and observations helped clarify user needs, then synthesis shaped a clearer problem direction around spontaneity and discovery of smaller festival events and activities.',
      },
      {
        title: 'Design direction',
        text: 'Rather than recreating the whole app, the solution built on BLA SOL\'s existing visual identity and introduced event-discovery elements into the experience.',
      },
      {
        title: 'Testing',
        text: 'Usability testing was done on the lo-fi prototype, while 5-second and preference tests helped confirm the solution values, festival fit, and final design direction.',
      },
    ],
    noteLabel: 'Project thread',
    evidence: 'From client needs, through user research, to a final digital solution designed for an active festival experience without constant phone use.',
    href: 'https://bla-sol.pages.dev/',
    cta: 'Open prototype',
  },
  {
    slug: 'planthunt',
    title: 'PlantHunt',
    type: 'Flash UX/UI Project / learning game',
    year: '2026',
    accent: '#657c3f',
    backgroundImage: '/planthunt-background.png',
    snapshot: 'Botanical Learning Game',
    secondarySnapshot: 'Observation-led App',
    secondarySnapshotImage: '/planthunt-observation-app.png',
    problem: 'The botanical garden experience needed a playful digital layer that could keep children and families engaged while supporting real-life exploration instead of replacing it.',
    role: 'Project planning, field observation, target-group definition, persona development, interactive prototype, coded QR interaction, and usability testing.',
    process: ['Field Observation and Analysis', 'Persona and Target Group Definition', 'QR Interaction Testing', 'Team-based Flash Project'],
    outcome: <>A structured flash project that translated <strong>research and observation</strong> into an interactive plant game where children could play, scan, and learn through the garden visit.</>,
    detailVisuals: [
      'Project Planning and Garden Context',
      'Persona and Target Group',
      'QR Game Prototype',
      'Usability Testing and Final Design',
    ],
    detailVisualImages: [
      '/planthunt-garden-context.png',
      '/planthunt-persona-target.png',
      '/planthunt-qr-game.png',
      '/planthunt-final-design.png',
    ],
    details: [
      {
        title: 'Project structure',
        text: 'The project was planned as a focused flash UX/UI process with clear steps for research, concept development, prototyping, and testing.',
      },
      {
        title: 'Research direction',
        text: 'Research and observations explored how a digital layer could enhance the real-life botanical garden experience for children and families with children.',
      },
      {
        title: 'Interactive concept',
        text: 'The solution used QR codes and a plant-based game to keep children engaged through play and learning while still moving through the physical garden.',
      },
      {
        title: 'Testing',
        text: 'Usability testing helped identify interaction issues before the final design, especially around clarity, flow, and how easily the game could be understood.',
      },
    ],
    noteLabel: 'Focus',
    evidence: 'From garden observations and target-group definition to an interactive QR prototype designed to keep children engaged while learning in context.',
    href: 'https://plant-hunt.pages.dev/',
    cta: 'Open prototype',
  },
  {
    slug: 'keybee',
    title: 'KeyBee',
    type: 'Inclusive product concept',
    year: '2026',
    accent: '#5f4b7a',
    backgroundImage: '/keybee-background.png',
    backgroundSize: 'min(86%, 760px)',
    snapshot: 'Accessible Interaction Concept',
    secondarySnapshot: 'Inclusive Case Film',
    secondarySnapshotImage: '/keybee-case-film.jpg',
    problem: 'The project explored how a familiar digital interaction could move beyond the screen, with the final concept direction focused on haptic feedback through vibration.',
    role: 'Concept development, haptic interaction exploration, sketching, prototyping, vibration-based interaction direction, and case film presentation.',
    process: ['Inclusive Interaction Research', 'Haptic Feedback Concepting', 'Concept Prototyping and Case Film', 'Individual Concept Project'],
    outcome: <>A digital concept with potential for further user-centered development, especially around <strong>haptic interaction</strong>, accessibility, and vibration-based feedback.</>,
    detailVisuals: [
      'Haptic Interaction Exploration',
      'Sketching and Concept Direction',
      'Prototype Thinking',
      'Future User-centered Potential',
    ],
    detailVisualImages: [
      '/keybee-haptic-exploration.png',
      '/keybee-sketching-concept.png',
      '/keybee-prototype-thinking.png',
      '/keybee-future-potential.jpg',
    ],
    details: [
      {
        title: 'Concept direction',
        text: 'KeyBee was developed as a concept-based project rather than a finished digital product, with the final direction focused on haptic feedback through vibration.',
      },
      {
        title: 'Haptic exploration',
        text: 'The concept explored how vibration patterns could communicate feedback and support interaction beyond traditional screen-based UI.',
      },
      {
        title: 'Prototyping',
        text: 'Sketching and prototyping helped make the concept tangible enough to explain the interaction idea, vibration feedback, and intended experience.',
      },
      {
        title: 'Next potential',
        text: 'The concept has strong potential for further work through user testing, refinement, and a clearer accessibility focus for people who could benefit from vibration-based feedback.',
      },
    ],
    noteLabel: 'Focus',
    evidence: 'A haptic interaction concept with potential to evolve through user testing, accessibility research, and refinement into a more focused vibration-based application.',
    href: 'https://www.youtube.com/embed/-umZo3GwXbw?autoplay=1&rel=0',
    cta: 'Watch case film',
    mediaType: 'video',
  },
  {
    slug: 'cphfw-infoscreen',
    title: 'CPHFW infoscreen',
    type: 'Service touchpoint / visual hierarchy',
    year: '2025',
    accent: '#7c5140',
    backgroundImage: '/cphfw-background.png',
    snapshot: 'Event Information Touchpoint',
    secondarySnapshot: 'Visual Hierarchy System',
    secondarySnapshotImage: '/cphfw-visual-hierarchy.jpg',
    problem: 'CPHFW needed an event-ready information touchpoint that could present, inform, and support learning around sustainable materials in a clear desktop and infoscreen format.',
    role: 'CPHFW research, target-group and persona work, concept direction, prototyping, usability testing, and visual hierarchy testing.',
    process: ['Sustainability Context Research', 'Target Group and Persona Work', 'Usability and Hierarchy Testing', 'Team-based Event Project'],
    outcome: <>An event-ready infoscreen application designed for <strong>desktop and large-screen use</strong>, with mobile left as a future iteration.</>,
    detailVisuals: [
      'CPHFW Research',
      'Target Group and Persona',
      'Infoscreen and Quiz Concept',
      'Visual Hierarchy Testing',
    ],
    detailVisualImages: [
      '/cphfw-research.png',
      '/cphfw-target-persona.png',
      '/cphfw-infoscreen-quiz.jpg',
      '/cphfw-visual-hierarchy-testing.png',
    ],
    details: [
      {
        title: 'Research',
        text: 'Research into Copenhagen Fashion Week helped clarify the brand context, sustainability focus, event setting, and the communication needs around sustainable materials.',
      },
      {
        title: 'Target group',
        text: 'The research direction led to a potential target group and persona, shaping how the infoscreen could present information in a relevant and approachable way.',
      },
      {
        title: 'Concept',
        text: 'Synthesized findings shaped an infoscreen application with an interactive quiz, designed to present, inform, and help visitors learn about sustainable materials.',
      },
      {
        title: 'Testing',
        text: 'Prototype usability testing helped refine the interaction, followed by final design testing focused on visual hierarchy, colors, imagery, and overall readability.',
      },
    ],
    noteLabel: 'Delivery',
    evidence: 'Delivered an event-ready infoscreen application for desktop and large-screen contexts, with a mobile solution left for future iterations.',
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
        <p className="section-kicker">Case studies</p>
        <h2 id="work-title">UX/UI case studies with research, interface work, and prototypes</h2>
      </div>

      <div className={styles.list}>
        {projects.map((project, index) => {
          return (
            <a
              href={`/case/${project.slug}`}
              className={`${styles.card} reveal`}
              style={{
                '--reveal-delay': `${index * 80}ms`,
                '--project-accent': project.accent,
                '--project-bg': project.backgroundImage ? `url(${project.backgroundImage})` : 'none',
                '--project-bg-size': project.backgroundSize,
              }}
              key={project.title}
              aria-label={`Read the ${project.title} case study`}
            >
              <div className={styles.index}>{String(index + 1).padStart(2, '0')}</div>
              <div className={styles.main}>
                <div className={styles.cardHeader}>
                  <div>
                    <p>{project.type} / {project.year}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <span className={styles.readLink}>Read case study <span aria-hidden="true">-&gt;</span></span>
                </div>

                <div
                  className={`${styles.caseSnapshot} ${project.secondarySnapshot ? styles.threePartSnapshot : ''}`}
                  aria-label={`${project.title} preview`}
                >
                  <div className={styles.snapshotVisual}>
                    <strong>{project.snapshot}</strong>
                  </div>
                  {project.secondarySnapshot && (
                    <div
                      className={`${styles.snapshotVisual} ${styles.snapshotImage}`}
                      style={{ '--snapshot-image': `url(${project.secondarySnapshotImage})` }}
                    >
                      <strong>{project.secondarySnapshot}</strong>
                    </div>
                  )}
                  <div className={styles.snapshotMeta}>
                    <p>Process focus</p>
                    <ul>
                      {project.process.map(step => <li key={step}>{step}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}
