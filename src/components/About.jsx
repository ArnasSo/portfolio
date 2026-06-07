import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import { scrollToSection } from '../utils/scrollToSection'
import styles from './About.module.css'

const facts = [
  ['Based', 'Aalborg, DK'],
  ['Studying', 'Multimedia Design AP'],
  ['School', 'Business Academy Aarhus'],
  ['Languages', 'LT · EN · learning DK'],
]

export default function About() {
  const sectionRef = useRef(null)
  useReveal(sectionRef)

  return (
    <section id="about" className={styles.about} ref={sectionRef}>
      <div className={`${styles.header} reveal`}>
        <span className="section-number">02</span>
        <p>About the person behind the pixels</p>
      </div>

      <div className={styles.grid}>
        <div className={`${styles.statement} reveal`}>
          <p>I&apos;m not interested in making screens look pretty just for the sake of it.</p>
          <h2>I want to understand <em>why</em> something should exist, then make it feel <span>inevitable.</span></h2>
        </div>

        <div className={`${styles.profile} reveal`} style={{ '--reveal-delay': '100ms' }}>
          <div className={styles.portrait}>
            <svg className={styles.portraitDrawing} viewBox="0 0 520 640" role="img" aria-labelledby="portrait-title">
              <title id="portrait-title">Stylized split-color portrait of Arnas lifting his sunglasses</title>
              <defs>
                <clipPath id="portrait-left"><rect width="260" height="640" /></clipPath>
                <clipPath id="portrait-right"><rect x="260" width="260" height="640" /></clipPath>
              </defs>

              <g clipPath="url(#portrait-left)">
                <path className={styles.shirtColor} d="M98 620C105 496 145 442 219 421L302 421C391 448 421 509 425 640Z" />
                <path className={styles.neckColor} d="M214 354L307 354L312 448C289 474 234 474 208 448Z" />
                <path className={styles.faceColor} d="M170 164C171 91 221 53 282 61C344 69 374 120 365 206L349 326C340 389 299 424 254 419C207 414 177 374 169 311Z" />
                <path className={styles.earColor} d="M170 231C137 214 136 285 174 302M363 224C397 209 392 285 357 301" />
                <path className={styles.hairColor} d="M168 190C163 112 204 53 278 54C334 55 369 92 373 160C343 139 319 125 286 121C240 116 211 138 168 190Z" />
                <path className={styles.armColor} d="M101 620C49 598 27 552 37 485L79 277C86 239 104 213 133 200L178 237C159 266 151 301 151 344L160 477Z" />
                <path className={styles.handColor} d="M128 214C142 182 166 143 191 117C206 101 224 95 244 101L292 112C305 115 312 128 305 139C300 147 291 150 280 148L239 140C230 139 224 143 219 151L206 178L251 180C266 180 274 190 271 201C269 211 260 216 247 215L201 214C182 240 161 254 139 249Z" />
              </g>

              <g clipPath="url(#portrait-right)">
                <path className={styles.shirtMono} d="M98 620C105 496 145 442 219 421L302 421C391 448 421 509 425 640Z" />
                <path className={styles.neckMono} d="M214 354L307 354L312 448C289 474 234 474 208 448Z" />
                <path className={styles.faceMono} d="M170 164C171 91 221 53 282 61C344 69 374 120 365 206L349 326C340 389 299 424 254 419C207 414 177 374 169 311Z" />
                <path className={styles.earMono} d="M170 231C137 214 136 285 174 302M363 224C397 209 392 285 357 301" />
                <path className={styles.hairMono} d="M168 190C163 112 204 53 278 54C334 55 369 92 373 160C343 139 319 125 286 121C240 116 211 138 168 190Z" />
              </g>

              <path className={styles.glasses} d="M175 169C203 156 236 158 260 170L260 218C247 234 218 238 194 224C180 216 176 192 175 169ZM260 170C288 155 327 155 359 170L355 213C343 233 310 238 284 225C269 217 263 195 260 170Z" />
              <path className={styles.glassesArm} d="M174 170L151 164M359 170L378 164" />
              <circle className={styles.glassesShine} cx="335" cy="180" r="8" />
              <path className={styles.nose} d="M264 217L250 276L270 281" />
              <path className={styles.smileLine} d="M218 322C241 346 282 348 309 319" />
              <path className={styles.teeth} d="M224 324C248 333 280 332 303 321C289 351 242 354 224 324Z" />
              <path className={styles.brow} d="M205 152C220 144 240 144 252 150M284 149C304 141 327 144 342 154" />
              <path className={styles.splitLine} d="M260 0V640" />
            </svg>
            <p>See it<br />differently</p>
            <span className={styles.tape}>That&apos;s me →</span>
          </div>
        </div>

        <div className={`${styles.bio} reveal`} style={{ '--reveal-delay': '160ms' }}>
          <p>
            I&apos;m a Multimedia Design student who leans toward UX, interaction, and product thinking.
            The best part of a project is usually the unclear bit: talking to people, finding patterns,
            reframing the problem, and testing whether an idea survives contact with reality.
          </p>
          <p>
            I care about accessibility, honest collaboration, and interfaces with enough character
            to be remembered. I use research to make decisions, then prototype quickly enough to
            learn where I was wrong.
          </p>
          <a href="#contact" className="btn-primary" onClick={event => scrollToSection(event, '#contact')}>
            Work with me →
          </a>
        </div>

        <dl className={`${styles.facts} reveal`} style={{ '--reveal-delay': '220ms' }}>
          {facts.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
