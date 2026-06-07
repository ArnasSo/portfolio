import { scrollToSection } from '../utils/scrollToSection'
import styles from './Hero.module.css'

const skills = ['Research', 'UX Strategy', 'Prototyping', 'UI Design', 'Accessibility', 'React']

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.topline}>
        <p>UX / UI designer in progress</p>
        <p>Aalborg · Aarhus · Remote</p>
        <p>Portfolio 2026</p>
      </div>

      <div className={styles.stage}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}><span /> Hello, I&apos;m Arnas</p>
          <h1 className={styles.name}>
            <span className={styles.firstLine}><b>I</b> design</span>
            <span className={styles.offset}>useful things</span>
            <span className={styles.outline}>for real people.</span>
          </h1>
          <div className={styles.bottomCopy}>
            <p className={styles.desc}>
              Multimedia Design student turning research, messy ideas, and human
              needs into interfaces that feel clear, inclusive, and alive.
            </p>
            <div className={styles.cta}>
              <a href="#work" className="btn-primary" onClick={event => scrollToSection(event, '#work')}>
                See selected work ↓
              </a>
              <a href="#contact" className="btn-secondary" onClick={event => scrollToSection(event, '#contact')}>
                Let&apos;s talk
              </a>
            </div>
          </div>
        </div>

        <div className={styles.playground} aria-hidden="true">
          <div className={styles.window}>
            <div className={styles.windowBar}><i /><i /><i /><span>human-centered.fig</span></div>
            <div className={styles.canvas}>
              <div className={styles.cursor}>Arnas</div>
              <div className={styles.face}>
                <span className={styles.eyeLeft} />
                <span className={styles.eyeRight} />
                <span className={styles.smile} />
              </div>
              <p>Design should feel<br />obvious <em>after</em> it&apos;s made.</p>
              <span className={styles.measure}>240 px</span>
            </div>
          </div>
          <div className={styles.note}>Ask why.<br />Then ask again.</div>
          <div className={styles.sticker}>Open to<br />internships</div>
          <svg className={styles.scribble} viewBox="0 0 180 100">
            <path d="M6 73C39 16 92 12 146 39M133 21L148 39L126 46" />
          </svg>
        </div>
      </div>

      <div className={styles.ticker}>
        <div className={styles.tickerTrack}>
          {[0, 1].map(group => (
            <div className={styles.tickerGroup} aria-hidden={group === 1} key={group}>
              {skills.map(skill => (
                <span key={skill}>{skill}<b>✦</b></span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
