const defaultImage = 'https://arnas-so.com/arnas-sokolovas-portfolio-preview-v2.png'

export const homeMeta = {
  title: 'Arnas Sokolovas | UX/UI & Frontend Designer',
  description: 'UX/UI and frontend portfolio with case studies in research, interface design, prototyping, accessibility, and product thinking.',
  url: 'https://arnas-so.com/',
  image: defaultImage,
}

function setMetaTag(selector, attribute, value) {
  const element = document.head.querySelector(selector)

  if (element) {
    element.setAttribute(attribute, value)
  }
}

export function updatePageMeta({ title, description, url, image = defaultImage }) {
  document.title = title
  setMetaTag('meta[name="description"]', 'content', description)
  setMetaTag('link[rel="canonical"]', 'href', url)
  setMetaTag('meta[property="og:url"]', 'content', url)
  setMetaTag('meta[property="og:title"]', 'content', title)
  setMetaTag('meta[property="og:description"]', 'content', description)
  setMetaTag('meta[property="og:image"]', 'content', image)
  setMetaTag('meta[property="og:image:url"]', 'content', image)
  setMetaTag('meta[property="og:image:secure_url"]', 'content', image)
  setMetaTag('meta[name="twitter:title"]', 'content', title)
  setMetaTag('meta[name="twitter:description"]', 'content', description)
  setMetaTag('meta[name="twitter:image"]', 'content', image)
  setMetaTag('meta[name="twitter:image:src"]', 'content', image)
}
