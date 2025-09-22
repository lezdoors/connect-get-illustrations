import { useEffect } from 'react'

const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Preload critical hero images and first process step
    const criticalImages = [
      '/illustrations/a-left-hero.png',
      '/illustrations/a-right-hero.png',
      '/illustrations/Définir-le-type.png'  // First process step for better LCP
    ]

    criticalImages.forEach(src => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      document.head.appendChild(link)
    })

    // Optimize font loading
    const fontLink = document.createElement('link')
    fontLink.rel = 'preconnect'
    fontLink.href = 'https://fonts.googleapis.com'
    document.head.appendChild(fontLink)

    const fontLink2 = document.createElement('link')
    fontLink2.rel = 'preconnect'
    fontLink2.href = 'https://fonts.gstatic.com'
    fontLink2.crossOrigin = 'anonymous'
    document.head.appendChild(fontLink2)

    // Cleanup function
    return () => {
      criticalImages.forEach(src => {
        const existingLink = document.querySelector(`link[href="${src}"]`)
        if (existingLink) {
          document.head.removeChild(existingLink)
        }
      })
    }
  }, [])

  // Intersection Observer for lazy loading
  useEffect(() => {
    const images = document.querySelectorAll('img[loading="lazy"]')
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          img.src = img.dataset.src || img.src
          img.classList.remove('opacity-0')
          img.classList.add('opacity-100', 'transition-opacity', 'duration-300')
          observer.unobserve(img)
        }
      })
    })

    images.forEach(img => imageObserver.observe(img))

    return () => {
      images.forEach(img => imageObserver.unobserve(img))
    }
  }, [])

  return null // This component doesn't render anything
}

export default PerformanceOptimizer