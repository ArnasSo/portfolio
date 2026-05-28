import styles from './Hero.module.css'

const skills = [
  'User Research',
  'Wireframing',
  'Prototyping',
  'Double Diamond',
  'Figma',
  'Usability Testing',
  'Affinity Mapping',
  'Inclusive Design',
  'HTML / CSS',
]

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>

      <div className={styles.left}>
        <p className={styles.tag}>UX Designer — Aarhus, Denmark</p>

        <h1 className={styles.name}>
          Designing for<br /><em>people,</em><br />not screens.
        </h1>

        <p className={styles.desc}>
          Multimedia Design student at Business Academy Aarhus,
          focused on user-centered thinking, accessibility,
          and interaction design.
        </p>

        <div className={styles.cta}>
          <a href="#work" className="btn-primary">View Work ↓</a>
          <a href="#contact" className="btn-secondary">Get in touch</a>
        </div>
      </div>

      <div className={styles.right}>
        <p className={styles.rightLabel}>Skills &amp; tools</p>
        <div className={styles.skills}>
          {skills.map(skill => (
            <span key={skill} className={styles.skillTag}>
              {skill}
            </span>
          ))}
        </div>
      </div>

    </section>
  )
}