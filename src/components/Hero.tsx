import React from 'react'
import { SITE } from '../config/site'

const Hero: React.FC = () => {
  return (
    <section 
      className="relative py-20 lg:py-32"
      style={{ backgroundColor: '#1e40af' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CLEAN HERO CONTENT - CENTER ALIGNED */}
        <div className="text-center max-w-4xl mx-auto">
          
          {/* HERO HEADLINE */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Raccordement Électrique Enedis
            <span className="block text-white/90 mt-2">Simple et Professionnel</span>
          </h1>
          
          {/* HERO SUBTITLE */}
          <p className="text-xl lg:text-2xl text-white/80 mb-8 font-normal leading-relaxed max-w-3xl mx-auto">
            Votre partenaire expert pour tous vos projets de raccordement électrique. 
            Service complet, accompagnement personnalisé, partout en France.
          </p>
          
          {/* SINGLE PROMINENT CTA */}
          <div className="mb-12">
            <a 
              href="#form-section"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: '#10b981' }}
              onClick={() => {
                document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'cta_click', {
                    event_category: 'engagement',
                    event_label: 'hero_main_cta'
                  });
                }
              }}
            >
              Obtenir mon accompagnement
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          
          {/* TRUST INDICATORS */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8 text-white/90">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#10b981' }}></div>
              <span className="text-sm font-medium">Experts Certifiés ENEDIS</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#10b981' }}></div>
              <span className="text-sm font-medium">Service dans toute la France</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#10b981' }}></div>
              <span className="text-sm font-medium">+50,000 raccordements réalisés</span>
            </div>
          </div>

          {/* PHONE CTA */}
          <div className="mt-8">
            <a 
              href={SITE.phoneLink}
              className="inline-flex items-center space-x-2 text-white/90 hover:text-white font-medium text-lg px-4 py-2 rounded-lg border border-white/20 hover:border-white/40 transition-all duration-200"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'tel_click', {
                    event_category: 'engagement',
                    event_label: 'hero_phone_cta'
                  });
                }
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <span>Ou appelez-nous : {SITE.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero