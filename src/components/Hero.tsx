import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center min-h-[600px]">
          
          {/* LEFT SIDE - CONTENT */}
          <div className="w-full lg:w-7/12 pr-0 lg:pr-16">
            
            {/* MAIN HEADLINE */}
            <h1 
              className="text-4xl lg:text-5xl font-medium leading-tight mb-8"
              style={{ 
                color: '#1f2937',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                letterSpacing: '-0.025em'
              }}
            >
              Raccordement Électrique Enedis
            </h1>
            
            {/* SUBTITLE */}
            <p 
              className="text-xl font-normal mb-4"
              style={{ 
                color: '#374151',
                lineHeight: '1.6'
              }}
            >
              Service d'accompagnement professionnel
            </p>
            
            {/* DESCRIPTION */}
            <p 
              className="text-lg mb-12 max-w-lg leading-relaxed"
              style={{ 
                color: '#6b7280',
                lineHeight: '1.7'
              }}
            >
              Nous simplifions vos démarches de raccordement électrique auprès d'Enedis.
            </p>
            
            {/* CTA BUTTON */}
            <div className="mb-12">
              <a 
                href="#form-section"
                className="inline-block px-8 py-3 text-base font-medium transition-colors duration-200"
                style={{ 
                  backgroundColor: '#374151',
                  color: '#ffffff',
                  borderRadius: '6px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#1f2937'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#374151'
                }}
                onClick={() => {
                  document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Commencer ma demande
              </a>
            </div>
            
            {/* SUBTLE TRUST ELEMENTS */}
            <div className="space-y-3">
              <div 
                className="text-sm"
                style={{ color: '#9ca3af' }}
              >
                Service établi depuis 2019
              </div>
              <div 
                className="text-sm"
                style={{ color: '#9ca3af' }}
              >
                Processus simplifié en 3 étapes
              </div>
              <div 
                className="text-sm"
                style={{ color: '#9ca3af' }}
              >
                Accompagnement personnalisé
              </div>
            </div>
          </div>
          
          {/* RIGHT SIDE - SUBTLE ILLUSTRATION */}
          <div className="hidden lg:block w-5/12">
            <div className="flex justify-center">
              <div className="max-w-sm opacity-75">
                <picture>
                  <source srcSet="/illustrations/a-right-hero.webp" type="image/webp" />
                  <img 
                    src="/illustrations/a-right-hero.png" 
                    alt="Installation électrique" 
                    className="w-full h-auto"
                    loading="eager"
                    style={{ 
                      filter: 'grayscale(20%) contrast(0.9)',
                      maxWidth: '280px'
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