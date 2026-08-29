import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import styles from './Skills.module.css'

function SkillIcon({ name }) {
  switch (name) {
    case 'figma':
    case 'wireframes':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <rect x="7" y="8" width="18" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2.2" />
          <path d="M7 13h18M13 13v11" stroke="currentColor" strokeWidth="2.2" />
        </svg>
      )
    case 'html':
    case 'css':
    case 'code':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="m12.5 10-6 6 6 6M19.5 10l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'react':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <circle cx="16" cy="16" r="2.8" fill="currentColor" />
          <g fill="none" stroke="currentColor" strokeWidth="1.8">
            <ellipse cx="16" cy="16" rx="12" ry="4.7" />
            <ellipse cx="16" cy="16" rx="12" ry="4.7" transform="rotate(60 16 16)" />
            <ellipse cx="16" cy="16" rx="12" ry="4.7" transform="rotate(120 16 16)" />
          </g>
        </svg>
      )
    case 'wordpress':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <circle cx="16" cy="16" r="10" fill="none" stroke="currentColor" strokeWidth="2.2" />
          <path d="M10.2 11.8 13.7 22l2.4-7.1L18.8 22l3-8.8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'shopify':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M9 13h14l-1.2 12H10.2L9 13Z" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M12.5 13a3.5 3.5 0 0 1 7 0" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M13 18h6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      )
    case 'video':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <rect x="6" y="9" width="16" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2.2" />
          <path d="m22 14 5-3v10l-5-3M10 13h6M10 18h4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'adobe':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M8 25 16 7l8 18M12.2 20h7.6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'ai':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16 5v5M16 22v5M5 16h5M22 16h5M9.6 9.6l3.2 3.2M19.2 19.2l3.2 3.2M22.4 9.6l-3.2 3.2M12.8 19.2l-3.2 3.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M13 16a3 3 0 0 1 6 0 3 3 0 0 1-6 0Z" fill="none" stroke="currentColor" strokeWidth="2.2" />
        </svg>
      )
    case 'java':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M10 15h12v5a6 6 0 0 1-12 0v-5Z" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M22 16h2.5a2.5 2.5 0 0 1 0 5H22M13 10c2-1.6 2-3.2 0-4.8M18 10c2-1.6 2-3.2 0-4.8M9 26h14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      )
    case 'brand':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M9 6h14v20H9V6Z" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M13 12h6M13 17h6M13 22h3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      )
    case 'interviews':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M8 10h16v9H14l-5 4v-4H8V10Z" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M12 14h8M12 17h5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      )
    case 'observation':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M4.5 16s4.4-7 11.5-7 11.5 7 11.5 7-4.4 7-11.5 7S4.5 16 4.5 16Z" fill="none" stroke="currentColor" strokeWidth="2.2" />
          <circle cx="16" cy="16" r="3.4" fill="currentColor" />
        </svg>
      )
    case 'research':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <circle cx="14" cy="14" r="6.5" fill="none" stroke="currentColor" strokeWidth="2.2" />
          <path d="m19 19 6 6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
          <path d="M11.5 14h5M14 11.5v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
    case 'testing':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M12 6h8M16 6v7l5.7 9.4A2.4 2.4 0 0 1 19.6 26h-7.2a2.4 2.4 0 0 1-2.1-3.6L16 13" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 21h8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      )
    case 'prototype':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M9 6v20l5-5 3.4 6 3.2-1.8-3.5-6H24L9 6Z" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
        </svg>
      )
    case 'hierarchy':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M8 9h16M8 16h11M8 23h7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    case 'curiosity':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16 5v5M16 22v5M5 16h5M22 16h5M8.2 8.2l3.5 3.5M20.3 20.3l3.5 3.5M23.8 8.2l-3.5 3.5M11.7 20.3l-3.5 3.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="16" cy="16" r="3" fill="currentColor" />
        </svg>
      )
    case 'feedback':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M7 9h18v11H15l-5 4v-4H7V9Z" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="m12 15 2.5 2.5L20 12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'team':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <circle cx="16" cy="11" r="4" fill="none" stroke="currentColor" strokeWidth="2.2" />
          <path d="M9 26a7 7 0 0 1 14 0M8 15.5a3 3 0 0 0-3 3M24 15.5a3 3 0 0 1 3 3" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      )
    case 'humor':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <circle cx="16" cy="16" r="10" fill="none" stroke="currentColor" strokeWidth="2.2" />
          <path d="M12 14h.1M20 14h.1M12 20c2 2 6 2 8 0" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M6 17.5 13.5 25 27 8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
  }
}

const skillGroups = [
  {
    title: 'UX research',
    icon: 'interviews',
    items: [
      { label: 'User interviews', icon: 'interviews' },
      { label: 'Observation', icon: 'observation' },
      { label: 'User research', icon: 'research' },
      { label: 'Usability testing', icon: 'testing' },
    ],
  },
  {
    title: 'UI and prototyping',
    icon: 'wireframes',
    items: [
      { label: 'Wireframes', icon: 'wireframes' },
      { label: 'Figma', icon: 'figma' },
      { label: 'Prototypes', icon: 'prototype' },
      { label: 'Visual hierarchy', icon: 'hierarchy' },
    ],
  },
  {
    title: 'Frontend',
    icon: 'code',
    items: [
      { label: 'HTML/CSS', icon: 'code' },
      { label: 'WordPress', icon: 'wordpress' },
      { label: 'React basics', icon: 'react' },
      { label: 'Shopify', icon: 'shopify' },
    ],
  },
  {
    title: 'Working style',
    icon: 'humor',
    items: [
      { label: 'Curiosity', icon: 'curiosity' },
      { label: 'Feedback-minded', icon: 'feedback' },
      { label: 'Team discussion', icon: 'team' },
      { label: 'Useful sarcasm', icon: 'humor' },
    ],
  },
  {
    title: 'Creative toolkit',
    icon: 'brand',
    items: [
      { label: 'Video editing', icon: 'video' },
      { label: 'Adobe tools', icon: 'adobe' },
      { label: 'AI workflows', icon: 'ai' },
      { label: 'Java familiarity', icon: 'java' },
    ],
  },
]

export default function Skills() {
  const sectionRef = useRef(null)
  useReveal(sectionRef)

  return (
    <section id="skills" className={styles.skills} ref={sectionRef} aria-labelledby="skills-title">
      <div className={`${styles.header} reveal`}>
        <h2 id="skills-title">The tools I reach for, and the habits I try to bring with them</h2>
      </div>

      <div className={styles.grid}>
        {skillGroups.map((group, index) => (
          <article
            className={`${styles.card} reveal`}
            style={{ '--reveal-delay': `${index * 70}ms` }}
            key={group.title}
          >
            <h3>
              <span className={styles.titleIcon}><SkillIcon name={group.icon} /></span>
              <span>{group.title}</span>
            </h3>
            <ul>
              {group.items.map(item => (
                <li key={item.label}>
                  <span className={styles.iconWrap}><SkillIcon name={item.icon} /></span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
