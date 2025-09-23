import React from 'react'
import HeroMiniForm from './HeroMiniForm'
import { SITE } from '../config/site'

const Hero: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center min-h-[500px]">
          
          {/* LEFT SIDE - CONTENT */}
          <div className="w-full lg:w-7/12 pr-0 lg:pr-16">
            
            {/* MAIN HEADLINE */}
            <h1 
              className="text-4xl lg:text-5xl font-medium leading-tight mb-8"
              style={{ 
                color: '#1f2937',
                fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                letterSpacing: '-0.025em'
              }}
            >
              Raccordement Électrique Enedis<br />
              <span style={{ color: '#059669' }}>Simple et Professionnel</span>
            </h1>
            
            {/* SUBTITLE */}
            <p 
              className="text-xl font-normal mb-4"
              style={{ 
                color: '#374151',
                lineHeight: '1.6'
              }}
            >
              Votre partenaire expert pour tous vos projets de raccordement électrique. 
              Service complet, accompagnement personnalisé, partout en France.
            </p>
            
            {/* CTA BUTTON */}
            <div className="mb-12">
              <a 
                href="#form-section"
                className="inline-block px-8 py-4 text-lg font-medium transition-all duration-200"
                style={{ 
                  backgroundColor: '#059669',
                  color: '#ffffff',
                  borderRadius: '8px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#047857'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#059669'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
                onClick={() => {
                  document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Obtenir mon accompagnement →
              </a>
            </div>
            
            {/* TRUST INDICATORS */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-sm font-medium" style={{ color: '#4b5563' }}>
                  Experts Certifiés ENEDIS
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-sm font-medium" style={{ color: '#4b5563' }}>
                  Service dans toute la France
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-sm font-medium" style={{ color: '#4b5563' }}>
                  +50,000 raccordements réalisés
                </span>
              </div>
            </div>

            {/* PHONE CTA */}
            <div>
              <p className="text-gray-600 mb-2">Ou appelez-nous :</p>
              <a 
                href={SITE.phoneLink}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors"
                onClick={() => {
                  // Track phone clicks for analytics
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'tel_click', {
                      event_category: 'engagement',
                      event_label: 'hero_phone_cta'
                    })
                  }
                }}
              >
                {SITE.phoneDisplay}
              </a>
            </div>
          </div>
          
          {/* RIGHT SIDE - OPTIMIZED ILLUSTRATION */}
          <div className="hidden lg:block w-5/12">
            <div className="flex justify-center">
              <div className="max-w-sm">
                <picture>
                  <source srcSet="/illustrations/a-right-hero.webp" type="image/webp" />
                  <img 
                    src="/illustrations/a-right-hero.png" 
                    alt="Maison connectée avec panneaux solaires et véhicule électrique" 
                    className="w-full h-auto drop-shadow-lg"
                    loading="eager"
                    fetchPriority="high"
                    width="280"
                    height="350"
                    style={{ 
                      maxWidth: '280px',
                      aspectRatio: '4/5'
                    }}
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero