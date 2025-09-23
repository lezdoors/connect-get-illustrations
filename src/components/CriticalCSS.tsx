import { useEffect } from 'react'

const CriticalCSS: React.FC = () => {
  useEffect(() => {
    // Preload critical resources after initial render
    const criticalResources = [
      { href: '/illustrations/a-right-hero.png', as: 'image' },
      { href: '/illustrations/a-left-hero.png', as: 'image' },
      { href: '/illustrations/Définir-le-type.png', as: 'image' }
    ]

    // Add preload links dynamically for non-critical resources
    criticalResources.forEach(resource => {
      const existingLink = document.querySelector(`link[href="${resource.href}"]`)
      if (!existingLink) {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = resource.as
        link.href = resource.href
        document.head.appendChild(link)
      }
    })

    // Optimize font loading
    const fontLink = document.querySelector('link[href*="fonts.googleapis.com"]')
    if (fontLink) {
      fontLink.setAttribute('media', 'print')
      fontLink.setAttribute('onload', "this.media='all'")
    }

  }, [])

  return (
    <>
      {/* Critical CSS for above-the-fold content */}
      <style>{`
        /* Inline critical styles for immediate rendering */
        .hero-container {
          background: linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #f0fdf4 100%);
        }
        
        /* Form critical styles */
        .hero-form {
          background: white;
          border-radius: 1rem;
          box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
          border: 1px solid #e5e7eb;
        }
        
        /* Button critical styles */
        .cta-button {
          background: #059669;
          color: white;
          border-radius: 0.75rem;
          font-weight: 700;
          transition: background-color 0.2s ease;
          min-height: 48px;
        }
        
        .cta-button:hover {
          background: #047857;
        }
        
        /* Typography critical styles */
        .hero-title {
          font-size: 2.25rem;
          font-weight: 700;
          color: #111827;
          line-height: 1.2;
        }
        
        @media (min-width: 768px) {
          .hero-title {
            font-size: 3rem;
          }
        }
        
        @media (min-width: 1024px) {
          .hero-title {
            font-size: 3.75rem;
          }
        }
      `}</style>
    </>
  )
}

export default CriticalCSS