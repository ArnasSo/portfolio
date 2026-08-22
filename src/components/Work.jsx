/* eslint-disable react-refresh/only-export-components */
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
    caseShapePrimary: 'rgba(61, 126, 186, 0.14)',
    caseShapeSecondary: 'rgba(47, 95, 91, 0.1)',
    backgroundImage: '/bla-sol-background.png',
    caseHeroImage: '/bla-sol-app-hero.png',
    caseHeroZoomable: false,
    snapshot: 'User-centered Digital Solution',
    secondarySnapshot: 'Mobile Festival Experience',
    secondarySnapshotImage: '/bla-sol-app-preview.png',
    problem: 'BLA SOL needed a stronger event-discovery experience inside an existing festival app, helping visitors find relevant activities without forcing them to constantly use their phone during the festival.',
    role: 'Stakeholder research, client interviews, interview and observation guides, synthesis, UX direction, prototype, and testing.',
    process: ['Festival Discovery UX', 'Community Event Visibility', 'Personal Planning', 'Team-based Client Project'],
    outcome: <>A delivered UX/UI concept that worked with the festival's existing visual identity while making smaller activities easier to notice, save, and join.</>,
    caseLead: {
      title: 'From scattered festival information to a playful planning flow',
      text: 'The case is about turning a broad client question into a focused mobile experience: help visitors discover smaller BLA SOL activities before they disappear behind the main music lineup.',
      points: [
        { label: 'Main tension', value: 'Community activities existed, but the app made them feel secondary.' },
        { label: 'UX move', value: 'Use visual discovery, story-like browsing, saving, and reminders.' },
        { label: 'Delivered concept', value: 'A lighter festival app direction that supports spontaneous decisions instead of over-planning.' },
      ],
    },
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
        title: 'A festival app that needed to show more than the lineup',
        text: 'The existing digital experience focused mostly on artists and music. The opportunity was to help visitors discover the smaller social activities that make BLA SOL feel local, spontaneous, and community-driven.',
      },
      {
        title: 'Research turned scattered information into a clearer UX problem',
        text: 'Desk research, a client interview, user interviews, observation, affinity mapping, persona work, VPC, HMW questions, user stories, OOUX, requirements, and user flows helped define what the app needed to make visible.',
      },
      {
        title: 'A focused redesign instead of a full rebrand',
        text: 'The project kept BLA SOL\'s existing visual language and focused on interaction flow: story highlights, a clearer program, event imagery, personal saving, and reminders shortly before events begin.',
      },
      {
        title: 'Testing supported a more visual and flexible experience',
        text: 'Think-aloud usability testing shaped the early wireframes, while preference and 5-second testing supported the hi-fi direction. Participants preferred event pages with imagery because they were easier to scan and recognize quickly.',
      },
    ],
    caseSections: [
      {
        eyebrow: 'Context',
        title: 'The festival identity was bigger than the app made it feel',
        takeaway: 'The app needed to represent the full festival experience, not only the artist lineup.',
        paragraphs: [
          'BLA SOL is a young non-profit music festival in Randers. In its second year, the one-day event had 16 artists across three stages, but the strongest festival experience was not only the lineup.',
          'The synopsis frames BLA SOL as local and community-oriented, with smaller activities like a hobby horsing competition and a music quiz. Those moments gave the festival a more social, spontaneous character.',
        ],
        highlights: ['One-day festival', '16 artists', 'Three stages', 'Community activities'],
        images: [
          {
            src: '/bla-sol-client-discovery.webp',
            label: 'Bla Sol Festival 2025',
            alt: 'Photo from Bla Sol Festival 2025 showing the festival entrance and visitors',
          },
        ],
      },
      {
        eyebrow: 'Problem',
        title: 'Smaller experiences were present, but too easy to miss',
        takeaway: 'The real UX gap was discoverability: useful event information existed, but it was scattered and easy to overlook.',
        paragraphs: [
          'The existing digital experience centered mostly on music. Smaller daytime events, social activities, workshops, and community experiences were either hard to find or not meaningfully integrated into the app.',
          'Information was split across the website, app, and Instagram. Visitors had to actively search to understand the full offer, which weakened the connection between BLA SOL\'s community identity and the app experience.',
        ],
        highlights: ['Fragmented information', 'Low visibility for smaller events', 'Discovery depended on active searching'],
        images: [
          { src: '/bla-sol-existing-app-overview.png', label: 'Before: existing client app screens' },
          { src: '/bla-sol-existing-app-single.png', label: 'Before: artist-focused client app screen' },
          { src: '/bla-sol-research-bridge.png', label: 'Research bridge from findings to problem direction' },
        ],
      },
      {
        eyebrow: 'Research',
        title: 'I used research to narrow a broad festival challenge into a focused flow',
        takeaway: 'Research helped turn a broad community-engagement question into concrete interface priorities.',
        paragraphs: [
          'The project followed the Double Diamond model, with Trello used for tasks and time estimates. Discovery combined desk research, a client interview, user interviews, observation of festival videos, and Randers as local context.',
          'In the define phase, the team used affinity mapping, persona work, a Value Proposition Canvas, How Might We questions, user stories, OOUX, requirements, and user flows. The goal was to turn a broad engagement question into concrete interface priorities.',
        ],
        highlights: ['15 interviews and testing sessions', 'Affinity mapping', 'Persona and VPC', 'User flows and requirements'],
        images: [
          { src: '/bla-sol-persona-final.png', label: 'Final persona built from research patterns' },
          { src: '/bla-sol-vpc-conclusion.png', label: 'Repeated patterns confirmed through VPC' },
        ],
      },
      {
        eyebrow: 'Design Direction',
        title: 'The goal was not to redesign the brand. It was to improve discovery.',
        takeaway: 'The redesign reused BLA SOL\'s energetic identity and focused on clearer flows, lighter planning, and faster recognition.',
        paragraphs: [
          'The scope deliberately kept BLA SOL\'s existing identity, colors, and energetic style. The weak point was not branding; it was discoverability, scattered event information, and the lack of lightweight interaction features.',
          'Design work moved from sketches and Crazy 8s into lo-fi wireframes, then a hi-fi prototype. The interface used familiar mobile patterns, clearer grouping, and reduced cognitive load to make browsing feel faster.',
        ],
        highlights: ['Existing identity reused', 'Lo-fi to hi-fi prototype', 'Familiar mobile patterns', 'Reduced cognitive load'],
        images: [
          { src: '/bla-sol-lo-fi-landing-evolution.png', label: 'Landing page wireframe evolution' },
          { src: '/bla-sol-lo-fi-event-detail-evolution.png', label: 'Event detail overlay wireframe evolution' },
          { src: '/bla-sol-style-tile.png', label: 'Style tile connecting brand identity to UI decisions' },
        ],
      },
      {
        eyebrow: 'Solution',
        title: 'A festival app for browsing, saving, and staying spontaneous',
        takeaway: 'The final concept made smaller activities visible, memorable, and easy to save without forcing visitors into heavy planning.',
        paragraphs: [
          'The delivered direction made smaller activities easier to discover through story highlights and a redesigned program page with event imagery. Instead of scanning a flat list, visitors could recognize activities faster.',
          'Visitors could save activities to a personal plan and get reminders shortly before events began. The point was not heavy planning; it was helping people keep track of interesting moments while staying flexible.',
        ],
        highlights: ['Story highlights', 'Visual program page', 'Save to personal plan', 'Event reminders'],
        images: [
          { src: '/bla-sol-hi-fi-home-transparent.png', label: 'Final home screen with visual discovery highlights' },
          { src: '/bla-sol-hi-fi-program-transparent.png', label: 'Final program screen with event imagery and saving' },
          { src: '/bla-sol-hi-fi-event-detail-transparent.png', label: 'Final event detail overlay for smaller activities' },
          { src: '/bla-sol-hi-fi-plan-transparent.png', label: 'Final personal plan with saved events and reminders' },
        ],
      },
      {
        eyebrow: 'Reflection',
        title: 'Validated direction, next real-world test',
        takeaway: 'The concept showed promise, but the next step is testing it during a real festival day.',
        paragraphs: [
          'Research and testing involved around 10-15 participants through convenience sampling, so the findings are useful but not fully conclusive.',
          'A future iteration should test whether reminders and personal planning still help when visitors are moving, socializing, and making decisions in the moment.',
        ],
        highlights: ['Controlled testing', 'Indicative findings', 'No full backend', 'Future real-event validation'],
      },
    ],
    noteLabel: 'Final takeaway',
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
    caseShapePrimary: 'rgba(101, 124, 63, 0.14)',
    caseShapeSecondary: 'rgba(176, 145, 55, 0.1)',
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
    caseShapePrimary: 'rgba(95, 75, 122, 0.14)',
    caseShapeSecondary: 'rgba(83, 111, 158, 0.1)',
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
    caseShapePrimary: 'rgba(124, 81, 64, 0.14)',
    caseShapeSecondary: 'rgba(207, 105, 70, 0.1)',
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
