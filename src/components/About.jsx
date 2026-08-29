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

export default function About() {
  const sectionRef = useRef(null)
  useReveal(sectionRef)

  return (
    <section id="about" className={styles.about} ref={sectionRef} aria-labelledby="about-title">
      <div className={`${styles.inner} reveal`}>
        <div className={styles.heading}>
          <h2 id="about-title">I came into design through the practical side of building things</h2>
        </div>

        <div className={styles.body}>
          <div className={`${styles.timelineIntro} ${styles.currentRole}`}>
            <h3>Junior UX/UI Designer</h3>
            <p>
              I am currently looking for a UX/UI internship, student job, junior role,
              or frontend position where I can build practical product experience.
            </p>
            <p>
              I know I still have a lot to learn, and that is exactly what makes the
              next step exciting to me: learning from people with more experience,
              seeing how real teams work, and growing through honest feedback.
            </p>
          </div>
        </div>

        <div className={`${styles.timelineColumns} ${styles.experienceRow}`} aria-label="Education and experience">
          <section className={`${styles.timelineColumn} ${styles.educationColumn}`} aria-labelledby="education-title">
            <h3 id="education-title">Education</h3>
            <div className={styles.timelineList}>
              {educationItems.map((item, index) => (
                <article
                  key={`${item.school}-${item.program}`}
                  className={`${styles.timelineItem} ${index > 0 ? styles.compactEducationItem : ''}`}
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

