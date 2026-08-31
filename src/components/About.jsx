import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import styles from './About.module.css'

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
    program: 'AP degree, Computer Science + Top-Up, Web Development',
    date: '2015 - May 2019',
    note: 'Continuous studies from a software and programming foundation into web development, frontend, and digital product work.',
  },
]

export default function About() {
  const sectionRef = useRef(null)
  useReveal(sectionRef)

  return (
    <section id="about" className={styles.about} ref={sectionRef} aria-labelledby="about-title">
      <div className={`${styles.inner} reveal`}>
        <div className={styles.heading}>
          <h2 id="about-title">I came into design through the practical side of building things</h2>
        </div>

        <div className={`${styles.timelineColumns} ${styles.experienceRow}`} aria-label="Education and experience">
          <section className={`${styles.timelineColumn} ${styles.educationColumn}`} aria-labelledby="education-title">
            <h3 id="education-title">Education</h3>
            <div className={styles.timelineList}>
              {educationItems.map(item => (
                <article
                  key={`${item.school}-${item.program}`}
                  className={styles.timelineItem}
                >
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
        </div>

      </div>
    </section>
  )
}

