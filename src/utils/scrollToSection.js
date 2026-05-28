export function scrollToSection(event, sectionId) {
  event.preventDefault()

  const section = document.querySelector(sectionId)

  if (!section) {
    return
  }

  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}
