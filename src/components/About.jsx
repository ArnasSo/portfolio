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
    text: 'An early-career UX generalist looking for junior roles, internships, or student jobs.',
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

const experienceItems = [
  {
    role: 'Assistant Frontend Developer',
    place: 'Bookalista ApS',
    type: 'Internship',
    date: 'Sep 2020 - Oct 2020',
    note: 'React.js frontend work from Figma designs, responsive UI components, and design consistency.',
  },
  {
    role: 'Assistant Developer',
    place: 'CompanYoung',
    type: 'Internship',
    date: 'Aug 2019 - Dec 2019',
    note: 'Frontend support on smaller digital projects, WordPress implementation, bug fixes, and GitHub workflows.',
  },
]

const educationItems = [
  {
    school: 'Business Academy Aarhus',
    program: 'Multimedia Design',
    date: 'Aug 2025 - May 2027',
    note: 'Current studies focused on UX/UI, research, prototyping, usability testing, and digital product development.',
  },
  {
    school: 'UCN',
    program: 'Top-Up, Web Development',
    date: 'Sep 2017 - May 2019',
    note: 'Web development education with a frontend and digital product foundation.',
  },
  {
    school: 'UCN',
    program: 'AP degree, Computer Science',
    date: '2015 - 2017',
    note: 'Software and programming foundation.',
  },
]

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
          <p className={`${styles.sectionLabel} section-kicker`} aria-hidden="true">About</p>
          <h2 id="about-title">Learning UX through real problems</h2>
        </div>

        <div className={styles.body}>
          <div className={`${styles.timelineIntro} ${styles.currentRole}`}>
            <p className={`${styles.timelineLabel} section-kicker`}>Current position</p>
            <h3>Junior-ready, still early in my UX career</h3>
            <p>
              I am currently looking for a UX internship, student job, or junior UX/UI role.
              My professional experience so far is internship-based, supported by hands-on project work.
            </p>
          </div>
        </div>

        <div className={`${styles.timelineColumns} ${styles.experienceRow}`} aria-label="Experience and education">
          <section className={styles.timelineColumn} aria-labelledby="experience-title">
            <h3 id="experience-title">Experience</h3>
            <div className={styles.timelineList}>
              {experienceItems.map(item => (
                <article key={`${item.place}-${item.role}`} className={styles.timelineItem}>
                  <div>
                    <h4>{item.role}</h4>
                    <p className={styles.timelineMeta}>{item.place} / {item.type}</p>
                  </div>
                  <time>{item.date}</time>
                  <p>{item.note}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.timelineColumn} aria-labelledby="education-title">
            <h3 id="education-title">Education</h3>
            <div className={styles.timelineList}>
              {educationItems.map(item => (
                <article key={`${item.school}-${item.program}`} className={styles.timelineItem}>
                  <div>
                    <h4>{item.school}</h4>
                    <p className={styles.timelineMeta}>{item.program}</p>
                  </div>
                  <time>{item.date}</time>
                  <p>{item.note}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <div className={styles.skillsRow}>
          <div className={styles.skillSection}>
            <div className={styles.skillsHeader}>
              <div>
                <h3 className={styles.softSkillsTitle}>Soft skills</h3>
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

        <div className={styles.profileRow}>
          <div className={`${styles.profileGrid} ${styles.skillSection}`} aria-label="Professional profile">
            {profile.map(item => (
              <article key={item.title} className={styles.skillGroup}>
                <h4>{item.title}</h4>
                <ul className={styles.skillList}>
                  <li>{item.text}</li>
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

