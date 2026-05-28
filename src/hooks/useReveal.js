import { useEffect } from 'react'

export function useReveal(sectionRef) {
  useEffect(() => {
    const revealEls = sectionRef.current?.querySelectorAll('.reveal')

    if (!revealEls?.length) {
      return undefined
    }

    const revealEnabled =
      document.documentElement.classList.contains('reveal-enabled') &&
      'IntersectionObserver' in window

    if (!revealEnabled) {
      revealEls.forEach(el => el.classList.add('visible'))
      return undefined
    }

    const isInViewport = el => {
      const rect = el.getBoundingClientRect()
      return rect.top < window.innerHeight && rect.bottom > 0
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      }
    )

    revealEls.forEach(el => {
      if (isInViewport(el)) {
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            el.classList.add('visible')
          })
        })
        return
      }

      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionRef])
}
