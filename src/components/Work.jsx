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
        title: 'A focused direction ready for festival-day validation',
        takeaway: 'The concept established a clear discovery flow; the next step is testing it in the pace of a real festival day.',
        paragraphs: [
          'Research and testing with around 10-15 participants gave the team a focused direction for discovery, saving, and reminders.',
          'The next validation step is testing the flow during an active festival context, where visitors are moving, socializing, and making decisions in the moment.',
        ],
        highlights: ['Controlled testing', 'Clear direction', 'Prototype scope', 'Real-event validation'],
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
    caseHeroImage: '/planthunt-hero-transparent.png',
    caseHeroZoomable: false,
    snapshot: 'Botanical Learning Game',
    secondarySnapshot: 'Observation-led App',
    secondarySnapshotImage: '/planthunt-observation-app.png',
    problem: 'The botanical garden needed a playful digital layer that could keep children engaged in real exploration without replacing the greenhouse visit.',
    role: 'Desk research, field observation, persona, OOUX content modeling, sketches, UI kit, interactive prototype, and testing in a short Double Diamond process.',
    process: ['Field Research', 'Persona + OOUX', 'QR Game Prototype', 'Flash Project'],
    outcome: <>A short Double Diamond project that translated <strong>research and observation</strong> into a mobile plant-hunting game with QR scanning, mascot guidance, plant facts, and reward feedback.</>,
    caseLead: {
      title: 'Turning a short greenhouse visit into an active plant hunt',
      text: 'PlantHunt was a short Double Diamond project for families visiting the Botanical Garden and Greenhouses in Aarhus. The goal was to keep children engaged with plants through a playful digital layer while the real visit stayed at the center.',
      points: [
        { label: 'Main tension', value: 'Children enjoyed exploring, but attention moved quickly from one plant to the next.' },
        { label: 'UX move', value: 'Use QR scanning, a mascot guide, short plant facts, and reward states.' },
        { label: 'Delivered concept', value: 'A mobile learning game that supports real-world exploration instead of replacing it.' },
      ],
    },
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
    caseSections: [
      {
        eyebrow: 'Context',
        title: 'A botanical visit needed a playful digital layer',
        takeaway: 'The concept had to support the physical greenhouse visit, not turn it into screen time.',
        paragraphs: [
          'PlantHunt was created as a short Double Diamond project around the Botanical Garden and Greenhouses in Aarhus. The brief was not to replace the visit with an app, but to make the real environment easier for children to engage with.',
          'Early desk research helped frame the place as family-friendly, educational, and full of small discovery moments. That made the opportunity clear: guide attention toward the plants while keeping visitors moving through the greenhouse.',
        ],
        highlights: ['Short project', 'Double Diamond', 'Botanical garden', 'Families with children'],
        images: [
          { src: '/planthunt-desk-research.png', label: 'Desk research into venue and visitor context' },
        ],
      },
      {
        eyebrow: 'Problem',
        title: 'Kids explored quickly, but did not stay with one plant for long',
        takeaway: 'The UX challenge was attention: make plant discovery active, short, and rewarding.',
        paragraphs: [
          'Field observations showed that visitors were usually in groups, often families with small children. Children were curious, but their attention moved fast: they often ran from one plant to the next instead of staying with one object for long.',
          'Reviews and desk research also suggested a strong family appeal, but no clear sign that visitors were aware of an existing digital layer. That left room for a lightweight interaction that could make plant discovery feel like a game.',
        ],
        highlights: ['Short attention spans', 'Family groups', 'Plant discovery', 'Low app awareness'],
        images: [
          { src: '/planthunt-observation-notes.jpg', label: 'Observation notes from the greenhouse visit' },
          { src: '/planthunt-observation-insights.png', label: 'Key observation insights' },
          { src: '/planthunt-review-insights.png', label: 'Netnography and review patterns' },
        ],
      },
      {
        eyebrow: 'Research',
        title: 'Research shaped a curious child explorer',
        takeaway: 'The target user needed simple prompts, visual feedback, and a clear reason to keep exploring.',
        paragraphs: [
          'The persona focused the project around Emma, a curious 9-year-old who likes outdoor activities and games, but loses interest when the experience becomes passive or too text-heavy.',
          'OOUX tables helped turn the greenhouse content into something usable in the interface: plant names, climates, short introductions, fun facts, and QR codes. That gave the game a clear content structure instead of only a visual concept.',
        ],
        highlights: ['Persona', 'Needs and behaviours', 'OOUX tables', 'QR content'],
        images: [
          { src: '/planthunt-persona.png', label: 'Persona for the curious child explorer' },
          { src: '/planthunt-ooux-tables.png', label: 'OOUX plant content and QR structure' },
        ],
      },
      {
        eyebrow: 'Design Direction',
        title: 'The interface became a guided hunt, not a passive guidebook',
        takeaway: 'Sketches and UI decisions focused on quick tasks, mascot support, and playful reward feedback.',
        paragraphs: [
          'Early sketches explored a simple loop: welcome the child, explain the hunt, give a plant task, scan a QR code, and respond with success or failure feedback. The flow needed to feel quick enough for a real family visit.',
          'The UI kit moved the project toward a bright, child-friendly visual language. The mascot became a guide for encouragement, mistakes, hints, and celebration, while the interface stayed simple and readable.',
        ],
        highlights: ['Sketches', 'Mascot feedback', 'UI kit', 'Child-friendly tone'],
        images: [
          { src: '/planthunt-sketches-1.png', label: 'Early screen and flow sketches' },
          { src: '/planthunt-sketches-2.jpg', label: 'Hunt flow sketching' },
          { src: '/planthunt-ui-kit.png', label: 'UI kit, mascot states, buttons, icons, and colors' },
        ],
      },
      {
        eyebrow: 'Solution',
        title: 'A QR plant hunt with hints, facts, and rewards',
        takeaway: 'The final prototype gave children a simple loop: start the hunt, find a plant, scan it, learn a fact, and continue.',
        paragraphs: [
          'The final flow introduced the child to PlantHunt, explained how to play, and then asked them to find a specific plant. Each plant card used short copy, a photo, climate information, and hint support.',
          'The QR scanning layer kept the experience tied to physical plants. Wrong scans triggered a try-again state, correct scans unlocked a short fact, and finishing the hunt created a reward moment to make the activity feel complete.',
        ],
        highlights: ['QR scanning', 'Mascot guide', 'Plant facts', 'Reward states'],
        images: [
          { src: '/planthunt-final-prototype.png', label: 'Final prototype flow from landing to plant card' },
          { src: '/planthunt-final-prototype-states.png', label: 'Camera, success, error, and completion states' },
        ],
      },
      {
        eyebrow: 'Reflection',
        title: 'A focused concept built for real-world testing',
        takeaway: 'The concept fits the brief and gives the next test a clear purpose: observe the hunt inside the greenhouse with families.',
        paragraphs: [
          'The short project scope kept the work focused on the strongest observation insight: children needed quick, active prompts to stay engaged with the plants.',
          'The next iteration can test the QR flow in the actual greenhouse, especially whether children understand the scanning task, whether parents can follow along easily, and whether the game helps visitors slow down and notice plants.',
        ],
        highlights: ['Short project', 'Observation-led direction', 'Real-location testing', 'Family usability'],
      },
    ],
    noteLabel: 'Final takeaway',
    evidence: 'PlantHunt turned observation into a playful QR-based prototype that helps children explore plants through movement, hints, facts, and reward feedback.',
    href: 'https://plant-hunt.pages.dev/',
    cta: 'Open prototype',
  },
  {
    slug: 'keybee',
    title: 'KeyBee',
    type: 'Inclusive product concept',
    year: '2026',
    accent: '#8a6a00',
    caseShapePrimary: 'rgba(255, 199, 44, 0.16)',
    caseShapeSecondary: 'rgba(65, 210, 198, 0.12)',
    backgroundImage: '/keybee-background.png',
    backgroundSize: 'min(86%, 760px)',
    caseHeroImage: '/keybee-hero-transparent-v2.png',
    caseHeroZoomable: false,
    snapshot: 'Accessible Interaction Concept',
    secondarySnapshot: 'Inclusive Case Film',
    secondarySnapshotImage: '/keybee-case-film.jpg',
    problem: 'KeyBee explored how a lost-key finder could communicate through vibration instead of relying only on sound or visual attention.',
    role: 'Concept direction, haptic feedback thinking, mobile UI mockups, prototype framing, and case film presentation.',
    process: ['Concept Direction', 'Haptic Feedback', 'Mobile Mockups', 'Case Film'],
    outcome: <>A short concept project that made a simple idea tangible: use <strong>vibration-based feedback</strong> to help people locate keys when sound is not enough.</>,
    caseLead: {
      title: 'A short concept for finding keys through vibration',
      text: 'KeyBee was a compact concept project about making a familiar problem easier to understand through haptic feedback, simple mobile screens, and a case-film presentation.',
      points: [
        { label: 'Main tension', value: 'Most lost-item finders depend on sound, which does not work equally well for everyone.' },
        { label: 'Concept move', value: 'Use vibration strength and proximity states to communicate distance from the key chip.' },
        { label: 'Deliverable', value: 'A mobile concept and case film that explain the interaction direction.' },
      ],
    },
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
    caseSections: [
      {
        eyebrow: 'Context',
        title: 'A compact concept for haptic lost-key feedback',
        takeaway: 'The value of the project was the idea: make a lost-key finder communicate through touch.',
        paragraphs: [
          'KeyBee started from a familiar everyday problem: losing keys and needing fast feedback about where they might be. The project stayed intentionally focused on communicating the interaction idea clearly.',
          'The strongest direction was haptic feedback. Instead of depending only on a ringing sound, the concept imagined a key chip and phone experience where vibration could guide someone closer to the object.',
        ],
        highlights: ['Short concept project', 'Lost-key finder', 'Haptic direction', 'Case film'],
        video: {
          src: 'https://www.youtube.com/embed/-umZo3GwXbw?rel=0',
          title: 'KeyBee case film',
          label: 'Embedded KeyBee case film',
        },
      },
      {
        eyebrow: 'Concept',
        title: 'The interaction moved from sound to proximity feedback',
        takeaway: 'Vibration patterns could communicate whether the user is far away, close, or at the right location.',
        paragraphs: [
          'The core idea was simple: pair with a key chip, open map mode, then use vibration feedback as the person moves. The interface only needed to support that loop clearly.',
          'The concept also established a more inclusive direction. A haptic-first tracker supports moments where sound is unavailable, unsuitable, or less accessible.',
        ],
        highlights: ['Pairing mode', 'Map mode', 'Vibration cues', 'Proximity states'],
        images: [
          { src: '/keybee-haptic-exploration.png', label: 'Early haptic-first concept note' },
          { src: '/keybee-sketching-concept.png', label: 'Mobile screen states for the KeyBee concept' },
        ],
      },
      {
        eyebrow: 'Prototype',
        title: 'A few screens were enough to explain the product idea',
        takeaway: 'The prototype focused on the minimum screens needed to understand the interaction.',
        paragraphs: [
          'The mobile mockups show the main concept flow: start the experience, connect to the chip, switch to map mode, and receive feedback when the chip is close.',
          'The case film then framed the concept in a real-world situation. That mattered for a short project because the concept needed to be understandable quickly, even without a full working product.',
        ],
        highlights: ['Start screen', 'Connect to chip', 'Map mode', 'Case-film framing'],
        images: [
          { src: '/keybee-prototype-thinking.png', label: 'KeyBee mobile concept screens' },
          { src: '/keybee-case-film.jpg', label: 'Case film scene with phone and key chip concept' },
        ],
      },
      {
        eyebrow: 'Reflection',
        title: 'A clear concept direction for haptic testing',
        takeaway: 'The next step is testing vibration patterns with real users so the concept can move from presentation to interaction.',
        paragraphs: [
          'As a short concept project, KeyBee establishes an interaction direction: vibration can become the primary feedback channel instead of a secondary alert.',
          'The most important next step would be prototyping actual vibration patterns and testing whether people can understand distance, urgency, and confirmation through touch alone.',
        ],
        highlights: ['Concept direction', 'Haptic testing', 'Distance feedback', 'Accessibility potential'],
      },
    ],
    noteLabel: 'Final takeaway',
    evidence: 'KeyBee is a short haptic interaction concept that uses mobile screens and a case film to explain how vibration could make lost-key finding less dependent on sound.',
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
    caseHeroImage: '/cphfw-infoscreen-hero-v2.png',
    caseHeroZoomable: false,
    snapshot: 'Event Information Touchpoint',
    secondarySnapshot: 'Visual Hierarchy System',
    secondarySnapshotImage: '/cphfw-visual-hierarchy.jpg',
    problem: 'CPHFW needed an event-ready information touchpoint that could present, inform, and support learning around sustainable materials in a clear desktop and infoscreen format.',
    role: 'CPHFW research, target-group and persona work, concept direction, prototyping, usability testing, and visual hierarchy testing.',
    process: ['Sustainability Context', 'Target Group', 'Infoscreen Prototype', 'Hierarchy Testing'],
    outcome: <>An event-ready infoscreen application designed for <strong>desktop and large-screen use</strong>, focused on the context where the concept works strongest.</>,
    caseLead: {
      title: 'An event touchpoint for sustainable fashion learning',
      text: 'This case focused on a large-screen Copenhagen Fashion Week experience: present sustainable fashion content clearly, make the interaction feel event-ready, and use a quiz to turn passive information into a small learning moment.',
      points: [
        { label: 'Main tension', value: 'Sustainability content can feel dense, especially in a fast-moving event setting.' },
        { label: 'UX move', value: 'Use a visual infoscreen with clear navigation, large type, and an interactive quiz.' },
        { label: 'Delivered concept', value: 'A desktop and large-screen prototype for event visitors, scoped around the strongest event use case.' },
      ],
    },
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
    caseSections: [
      {
        eyebrow: 'Context',
        title: 'The touchpoint had to feel useful in an event space',
        takeaway: 'The screen needed to communicate quickly, visually, and without asking visitors to read too much.',
        paragraphs: [
          'The project explored how Copenhagen Fashion Week could present sustainability-related content through a desktop or large-screen information touchpoint.',
          'Because the context was an event, the interface needed a strong first impression, simple navigation, and content that could be understood at a glance.',
        ],
        highlights: ['Event touchpoint', 'Large-screen context', 'Sustainability theme', 'Quick scanning'],
        images: [
          { src: '/cphfw-research.png', label: 'Early CPHFW concept mapping and screen sketches' },
        ],
      },
      {
        eyebrow: 'Research',
        title: 'The target group cared about style, but needed clearer sustainability entry points',
        takeaway: 'The case needed to connect fashion interest with accessible learning, not lecture visitors.',
        paragraphs: [
          'The target group work focused on young fashion-interested visitors who already follow trends, brands, and outfit inspiration, but may find sustainability content difficult to enter casually.',
          'Survey responses pointed to frustrations around sameness, low quality, high prices, and fast fashion. That helped frame the infoscreen as a way to make sustainable fashion more approachable inside the event experience.',
        ],
        highlights: ['Fashion-interested users', 'Survey input', 'Persona direction', 'Accessible learning'],
        images: [
          { src: '/cphfw-target-persona.png', label: 'Target group, persona, and survey response patterns' },
        ],
      },
      {
        eyebrow: 'Concept',
        title: 'The prototype combined browsing with a sustainability quiz',
        takeaway: 'The quiz gave visitors a reason to interact instead of only reading static information.',
        paragraphs: [
          'The final concept included sections for mission, brands and designers, materials, and a sustainability quiz. The structure made the screen feel like an event information hub rather than a single-purpose quiz page.',
          'The quiz format helped make sustainability content more active. Visitors could answer short questions and learn through interaction while still seeing the CPHFW visual identity across the interface.',
        ],
        highlights: ['Mission section', 'Brands and designers', 'Materials', 'Interactive quiz'],
        images: [
          { src: '/cphfw-visual-hierarchy.jpg', label: 'Final infoscreen landing concept' },
          { src: '/cphfw-infoscreen-quiz.jpg', label: 'Sustainability quiz screen' },
        ],
      },
      {
        eyebrow: 'Testing',
        title: 'Visual hierarchy testing shaped the final screen composition',
        takeaway: 'The project improved through hierarchy, scale, imagery, and clearer event-screen readability.',
        paragraphs: [
          'Testing focused on whether the interface could be understood quickly and whether the hierarchy supported the large-screen format. The strongest improvements came from clarifying scale, visual emphasis, and navigation.',
          'The result was a more event-ready prototype for desktop and infoscreen contexts, with the scope kept focused on the large-screen experience.',
        ],
        highlights: ['Hierarchy testing', 'Large type', 'Image-led layout', 'Focused screen scope'],
        images: [
          { src: '/cphfw-visual-hierarchy-testing.png', label: 'Visual hierarchy testing screens' },
        ],
      },
      {
        eyebrow: 'Reflection',
        title: 'A focused event screen for large-format interaction',
        takeaway: 'The case works best as a large-screen service touchpoint with a clear event role.',
        paragraphs: [
          'The project delivered a clear desktop and infoscreen direction for an event setting. It made the sustainability theme more interactive without overcomplicating the interface.',
          'The next step is testing the prototype in a real event-like environment, especially screen distance, readability, and whether visitors understand the quiz interaction without guidance.',
        ],
        highlights: ['Event-ready direction', 'Readable from distance', 'Quiz interaction', 'Large-screen focus'],
      },
    ],
    noteLabel: 'Final takeaway',
    evidence: 'Delivered an event-ready infoscreen application for desktop and large-screen contexts, focused on quick scanning, visual hierarchy, and interactive sustainability learning.',
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
