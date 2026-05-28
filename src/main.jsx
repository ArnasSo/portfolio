import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

if ('IntersectionObserver' in window && !prefersReducedMotion) {
  document.documentElement.classList.add('reveal-enabled')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
