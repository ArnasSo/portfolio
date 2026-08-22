import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import styles from './Skills.module.css'

function SkillIcon({ name }) {
  switch (name) {
    case 'figma':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <circle cx="20" cy="16" r="5" fill="#1abcfe" />
          <path fill="#0acf83" d="M10 22a5 5 0 0 1 5-5h5v5a5 5 0 1 1-10 0Z" />
          <path fill="#ff7262" d="M10 10a5 5 0 0 1 5-5h5v10h-5a5 5 0 0 1-5-5Z" />
          <path fill="#f24e1e" d="M20 5h2a5 5 0 0 1 0 10h-2V5Z" />
          <path fill="#a259ff" d="M10 16a5 5 0 0 1 5-5h5v10h-5a5 5 0 0 1-5-5Z" />
        </svg>
      )
    case 'html':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path fill="#e44d26" d="M6 3h20l-1.8 21.1L16 29l-8.2-4.9L6 3Z" />
          <path fill="#f16529" d="M16 5.2h8L22.5 22.7 16 26.5V5.2Z" />
          <path fill="#fff" d="M10.1 9.6h11.8l-.2 2.6h-8.8l.2 2.5h8.4l-.7 6.1-4.8 2.7-4.8-2.7-.3-3.7h2.4l.2 2.1 2.5 1.3 2.5-1.3.3-2.2h-8l-.7-7.4Z" />
        </svg>
      )
    case 'css':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path fill="#1572b6" d="M6 3h20l-1.8 21.1L16 29l-8.2-4.9L6 3Z" />
          <path fill="#33a9dc" d="M16 5.2h8L22.5 22.7 16 26.5V5.2Z" />
          <path fill="#fff" d="M10.2 9.6h11.5l-.2 2.6h-8.7l.2 2.3h8.3l-.6 6.3-4.7 2.7-4.8-2.7-.3-3.4h2.4l.2 1.8 2.5 1.3 2.4-1.3.3-2.3h-8l-.2-2.4 8.4-3.5h-8.5l-.2-2.4Z" />
        </svg>
      )
    case 'react':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <circle cx="16" cy="16" r="2.8" fill="#61dafb" />
          <g fill="none" stroke="#61dafb" strokeWidth="1.8">
            <ellipse cx="16" cy="16" rx="12" ry="4.7" />
            <ellipse cx="16" cy="16" rx="12" ry="4.7" transform="rotate(60 16 16)" />
            <ellipse cx="16" cy="16" rx="12" ry="4.7" transform="rotate(120 16 16)" />
          </g>
        </svg>
      )
    case 'wordpress':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <circle cx="16" cy="16" r="13" fill="#21759b" />
          <path fill="#fff" d="M5.8 16a10.2 10.2 0 0 0 5.8 9.2L6.7 11.8A10 10 0 0 0 5.8 16Zm17.1-.5c0-1.2-.4-2-1-2.9-.6-.9-1.2-1.6-1.2-2.5 0-1 .8-2 2-2h.2A10.2 10.2 0 0 0 8.2 10h.8c1.1 0 2.8-.1 2.8-.1.6 0 .7.8.1.9h-1.1l3.8 11.3 2.3-6.9-1.6-4.4h-1c-.6-.1-.5-.9.1-.9 0 0 1.7.1 2.7.1 1.1 0 2.8-.1 2.8-.1.6 0 .7.8.1.9h-1.1l3.8 11.2 1-3.5c.5-1.5.8-2.3.8-3Zm-6.7 1.4-3.1 8.9a10.1 10.1 0 0 0 6.3-.2l-.1-.2-3.1-8.5Zm8.8-5.8c.1.8.1 1.6-.1 2.6-.2 1.2-.7 2.6-1.2 4l-3.2 9.1a10.2 10.2 0 0 0 4.5-15.7Z" />
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
    case 'wireframes':
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <rect x="7" y="8" width="18" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2.2" />
          <path d="M7 13h18M13 13v11" stroke="currentColor" strokeWidth="2.2" />
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
    tone: 'green',
    items: [
      { label: 'User interviews', icon: 'interviews' },
      { label: 'Observation', icon: 'observation' },
      { label: 'User research', icon: 'research' },
      { label: 'Usability testing', icon: 'testing' },
    ],
  },
  {
    title: 'UI and prototyping',
    tone: 'coral',
    items: [
      { label: 'Wireframes', icon: 'wireframes' },
      { label: 'Figma', icon: 'figma' },
      { label: 'Interactive prototypes', icon: 'prototype' },
      { label: 'Visual hierarchy', icon: 'hierarchy' },
    ],
  },
  {
    title: 'Frontend',
    tone: 'blue',
    items: [
      { label: 'HTML', icon: 'html' },
      { label: 'CSS', icon: 'css' },
      { label: 'WordPress', icon: 'wordpress' },
      { label: 'React basics', icon: 'react' },
    ],
  },
  {
    title: 'Working style',
    tone: 'umber',
    items: [
      { label: 'Curiosity', icon: 'curiosity' },
      { label: 'Feedback-minded', icon: 'feedback' },
      { label: 'Team discussion', icon: 'team' },
      { label: 'Useful sarcasm', icon: 'humor' },
    ],
  },
]

export default function Skills() {
  const sectionRef = useRef(null)
  useReveal(sectionRef)

  return (
    <section id="skills" className={styles.skills} ref={sectionRef} aria-labelledby="skills-title">
      <div className={`${styles.header} reveal`}>
        <p className="section-kicker">Skills</p>
        <h2 id="skills-title">Practical skills, a learning mindset, and enough humor to survive feedback rounds</h2>
      </div>

      <div className={styles.grid}>
        {skillGroups.map((group, index) => (
          <article
            className={`${styles.card} ${styles[group.tone]} reveal`}
            style={{ '--reveal-delay': `${index * 70}ms` }}
            key={group.title}
          >
            <h3>{group.title}</h3>
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
