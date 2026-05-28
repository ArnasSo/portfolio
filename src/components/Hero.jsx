import { scrollToSection } from '../utils/scrollToSection'
import styles from './Hero.module.css'

const skills = [
  'User Research',
  'User Interviews',
  'Desk Research',
  'Wireframing',
  'Prototyping',
  'Double Diamond',
  'User Flows',
  'Design Systems',
  'Figma',
  'Usability Testing',
  'Preference Testing',
  'Affinity Mapping',
  'Inclusive Design',
  'React',
  'CSS Modules',
  'HTML & CSS',
]

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.left}>
        <p className={styles.tag}>UX Designer - Aalborg · Aarhus · Remote</p>

        <h1 className={styles.name}>
          Designing for<br /><em>people,</em><br />not screens.
        </h1>

        <p className={styles.desc}>
          Multimedia Design student at Business Academy Aarhus,
          focused on user-centered thinking, accessibility,
          and interaction design.
        </p>

        <div className={styles.cta}>
          <a href="#work" className="btn-primary" onClick={event => scrollToSection(event, '#work')}>View Work</a>
          <a href="#contact" className="btn-secondary" onClick={event => scrollToSection(event, '#contact')}>Get in touch</a>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.abstractGraphic} aria-hidden="true">
          <svg viewBox="0 0 520 520" role="presentation">
            <path
              className={styles.fillWash}
              d="M99 330C64 255 97 145 178 101C263 54 367 82 421 158C477 237 453 346 374 404C292 465 143 425 99 330Z"
            />
            <path
              className={styles.orbit}
              d="M99 330C64 255 97 145 178 101C263 54 367 82 421 158C477 237 453 346 374 404C292 465 143 425 99 330Z"
            />
            <path
              className={styles.orbitMuted}
              d="M145 359C98 299 106 205 166 151C230 93 326 101 382 166C438 232 426 330 360 381C295 431 194 421 145 359Z"
            />
            <path
              className={styles.thread}
              d="M82 276C140 238 165 167 234 156C307 145 340 221 409 198C452 184 472 143 488 112"
            />
            <path
              className={styles.threadMuted}
              d="M58 371C128 340 191 354 243 388C304 429 376 425 449 355"
            />
            <circle className={styles.node} cx="176" cy="103" r="5" />
            <circle className={styles.node} cx="409" cy="198" r="5" />
            <circle className={styles.nodeMuted} cx="243" cy="388" r="4" />
          </svg>
        </div>

        <div className={styles.abstractGraphicSecondary} aria-hidden="true">
          <svg viewBox="0 0 420 420" role="presentation">
            <path
              className={styles.fillWashSecondary}
              d="M70 246C49 176 92 97 163 72C242 45 325 88 351 168C378 251 333 334 252 357C171 380 94 326 70 246Z"
            />
            <path
              className={styles.orbitSecondary}
              d="M70 246C49 176 92 97 163 72C242 45 325 88 351 168C378 251 333 334 252 357C171 380 94 326 70 246Z"
            />
            <path
              className={styles.orbitMuted}
              d="M111 270C83 220 96 156 143 121C195 82 267 93 305 144C344 196 335 268 285 307C234 346 144 331 111 270Z"
            />
            <path
              className={styles.threadSecondary}
              d="M32 198C84 214 122 189 154 145C193 91 249 82 305 119C337 140 361 172 389 180"
            />
            <path
              className={styles.threadMuted}
              d="M85 334C125 286 179 278 230 300C279 322 323 304 365 263"
            />
            <circle className={styles.nodeSecondary} cx="154" cy="145" r="4.5" />
            <circle className={styles.nodeMuted} cx="305" cy="119" r="3.8" />
          </svg>
        </div>

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
