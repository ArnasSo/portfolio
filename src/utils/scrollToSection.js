export function scrollToSection(event, sectionId) {
  event.preventDefault()

  const section = document.querySelector(sectionId)

  if (!section) {
    return
  }

  section.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    block: 'start',
  })
}
