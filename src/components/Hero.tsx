import React from 'react'
import { SITE } from '../config/site'

const Hero: React.FC = () => {
  return (
    <section 
      className="relative overflow-hidden"
      style={{ 
        minHeight: '500px',
        backgroundColor: '#ffffff'
      }}
    >
      {/* Subtle gradient overlay - only behind illustration */}
      <div 
        className="absolute top-0 right-0 w-2/5 h-full opacity-60"
        style={{
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)'
        }}
      ></div>

      {/* Diagonal divider for unique visual separation */}
      <div 
        className="absolute top-0 right-0 w-2/5 h-full"
        style={{
          clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)',
          background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
          zIndex: 1
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center min-h-[500px]">
          
          {/* LEFT SIDE - CONTENT AREA (60%) */}
          <div className="w-full lg:w-3/5 py-16 lg:py-20 pr-0 lg:pr-12">
            
            {/* HEADLINE */}
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
              style={{ color: '#1f2937' }}
            >
              Raccordement Électrique
              <span className="block mt-2" style={{ color: '#059669' }}>
                Simple & Rapide
              </span>
            </h1>
            
            {/* SUBTITLE */}
            <p 
              className="text-lg lg:text-xl mb-8 leading-relaxed max-w-lg"
              style={{ color: '#4b5563' }}
            >
              Votre partenaire expert pour tous vos projets de raccordement Enedis. 
              Accompagnement personnalisé de A à Z.
            </p>
            
            {/* TRUST POINTS WITH CUSTOM ICONS */}
            <div className="mb-8 space-y-4">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#059669' }}
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="font-medium" style={{ color: '#1f2937' }}>
                  Experts certifiés ENEDIS & CONSUEL
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#059669' }}
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <span className="font-medium" style={{ color: '#1f2937' }}>
                  +50,000 raccordements réalisés avec succès
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#059669' }}
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="font-medium" style={{ color: '#1f2937' }}>
                  Accompagnement complet jusqu'à la mise en service
                </span>
              </div>
            </div>
            
            {/* CTA BUTTON */}
            <div className="mb-6">
              <a 
                href="#form-section"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-200"
                style={{ backgroundColor: '#059669' }}
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
                Commencer ma demande
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* PHONE CTA */}
            <div className="flex items-center space-x-2 text-gray-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <span>Ou appelez-nous :</span>
              <a 
                href={SITE.phoneLink}
                className="font-semibold hover:underline"
                style={{ color: '#059669' }}
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'tel_click', {
                      event_category: 'engagement',
                      event_label: 'hero_phone_cta'
                    });
                  }
                }}
              >
                {SITE.phoneDisplay}
              </a>
            </div>
          </div>
          
          {/* RIGHT SIDE - ILLUSTRATION AREA (40%) */}
          <div className="hidden lg:block w-2/5 relative z-20">
            <div className="flex justify-center items-center h-full py-16">
              <div 
                className="relative max-w-sm"
                style={{
                  filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.1))'
                }}
              >
                {/* Electrical House Illustration - WebP with PNG fallback */}
                <picture>
                  <source srcSet="/illustrations/a-right-hero.webp" type="image/webp" />
                  <img 
                    src="/illustrations/a-right-hero.png" 
                    alt="Maison connectée avec raccordement électrique" 
                    className="w-full h-auto transform hover:scale-105 transition-transform duration-500 ease-out"
                    loading="eager"
                    style={{ 
                      maxWidth: '320px',
                      height: 'auto'
                    }}
                  />
                </picture>
                
                {/* Animated progress dots (subtle, CSS-only) */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  <div 
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ 
                      backgroundColor: '#059669',
                      animationDelay: '0ms',
                      animationDuration: '2000ms'
                    }}
                  ></div>
                  <div 
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ 
                      backgroundColor: '#059669',
                      animationDelay: '400ms',
                      animationDuration: '2000ms'
                    }}
                  ></div>
                  <div 
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ 
                      backgroundColor: '#059669',
                      animationDelay: '800ms',
                      animationDuration: '2000ms'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* MOBILE ILLUSTRATION - Below content on mobile */}
          <div className="lg:hidden w-full mt-8">
            <div className="flex justify-center">
              <picture>
                <source srcSet="/illustrations/a-right-hero.webp" type="image/webp" />
                <img 
                  src="/illustrations/a-right-hero.png" 
                  alt="Maison connectée avec raccordement électrique" 
                  className="w-64 h-auto"
                  loading="lazy"
                  style={{
                    filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.1))'
                  }}
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero