import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import styles from './About.module.css'

const profile = [
  {
    title: 'Strengths',
    text: 'Critical thinking, attention to detail, and insights before assumptions.',
  },
  {
    title: 'Motivation',
    text: 'Creating useful digital experiences for the people who actually use them.',
  },
  {
    title: 'Team fit',
    text: 'A young UX generalist who can move between research, structure, prototyping, and simple UI.',
  },
]

const softSkillGroups = [
  {
    title: 'Collaboration',
    items: [
      'Collaborative thinking',
      'Team discussion',
      'Feedback-minded',
      'Open communication',
    ],
  },
  {
    title: 'User mindset',
    items: [
      'Curiosity',
      'Reflection',
      'User empathy',
      'Perspective-taking',
    ],
  },
]

const hardSkillGroups = [
  {
    title: 'UX & research',
    items: [
      { name: 'Interviews and observation', level: 3 },
      { name: 'User research', level: 3 },
      { name: 'Usability testing', level: 3 },
    ],
  },
  {
    title: 'Design & prototyping',
    items: [
      { name: 'Wireframes and prototyping', level: 3 },
      { name: 'Figma', level: 3 },
      { name: 'Adobe tools', level: 1 },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'HTML and CSS', level: 3 },
      { name: 'JavaScript and React', level: 1 },
    ],
  },
  {
    title: 'Production & AI',
    items: [
      { name: 'Content editing', level: 3 },
      { name: 'SEO and GitHub', level: 1 },
    ],
  },
]

const maxSkillLevel = 3

function SkillLevel({ level }) {
  return (
    <span className={styles.stars} aria-label={`${level} out of ${maxSkillLevel}`}>
      {Array.from({ length: maxSkillLevel }, (_, index) => (
        <span
          key={index}
          className={index < level ? styles.starFilled : styles.starEmpty}
          aria-hidden="true"
        >
          {index < level ? '\u2605' : '\u2606'}
        </span>
      ))}
    </span>
  )
}

export default function About() {
  const sectionRef = useRef(null)
  useReveal(sectionRef)

  return (
    <section id="about" className={styles.about} ref={sectionRef} aria-labelledby="about-title">
      <div className={`${styles.inner} reveal`}>
        <div className={styles.heading}>
          <p className={`${styles.sectionLabel} section-kicker`}>About</p>
          <h2 id="about-title">Learning UX through real problems.</h2>
        </div>

        <div className={styles.body}>
          <div className={styles.profileGrid} aria-label="Professional profile">
            {profile.map(item => (
              <article key={item.title} className={styles.profileCard}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.skillsRow}>
          <div className={styles.skillSection}>
            <div className={styles.skillsHeader}>
              <div>
                <h3>Soft skills</h3>
                <p>Collaboration, feedback, and user-centered decision-making.</p>
              </div>
            </div>
            <div className={styles.softGroups} aria-label="Soft skills">
              {softSkillGroups.map(group => (
                <div key={group.title} className={styles.skillGroup}>
                  <h4>{group.title}</h4>
                  <ul className={styles.skillList}>
                    {group.items.map(skill => <li key={skill}>{skill}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.skillSection}>
            <div className={styles.skillsHeader}>
              <div>
                <h3>Hard skills</h3>
                <p>Practical entry-level skills connected to UX case work.</p>
              </div>
            </div>
            <div className={styles.groups} aria-label="Hard skills">
              {hardSkillGroups.map(group => (
                <div key={group.title} className={styles.skillGroup}>
                  <h4>{group.title}</h4>
                  <ul className={styles.skillList}>
                    {group.items.map(item => (
                      <li key={item.name} className={styles.skillTag}>
                        <span>{item.name}</span>
                        <SkillLevel level={item.level} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

