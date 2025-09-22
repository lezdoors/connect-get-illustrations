import React from 'react'
import MiniForm from './MiniForm'
import { SITE } from '../config/site'

const Hero: React.FC = () => {

  return (
    <section 
      className="relative py-16 lg:py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)'
      }}
    >
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59,130,246,0.05) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
      ></div>
      
      <div className="relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO HEADLINES - OPTIMIZED SPACING */}
        <div className="text-center mb-8 lg:mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
            Le raccordement Enedis.<br />Simple et rapide !
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-600 mb-6 font-medium">
            Partenaire n°1 en France pour les demandes de raccordements Enedis
          </h2>
          
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            Estimation rapide et gratuite • Experts certifiés • Accompagnement personnalisé
          </p>
        </div>

        {/* MAIN LAYOUT: CLOSER ILLUSTRATIONS → ENHANCED FORM → CLOSER ILLUSTRATIONS */}
        <div className="grid lg:grid-cols-10 gap-4 lg:gap-6 items-center">
          
          {/* LEFT ILLUSTRATION - Closer positioning, larger scale */}
          <div className="lg:col-span-2 hidden lg:flex justify-end">
            <div className="w-full max-w-none transform hover:scale-105 transition-transform duration-300 ease-out">
              <img 
                src="/illustrations/a-left-hero.png" 
                alt="Infrastructure électrique ENEDIS" 
                className="w-full h-auto scale-125 hover:brightness-110 transition-all duration-300"
                loading="eager"
                style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.06))' }}
              />
            </div>
          </div>

          {/* CENTER - ENHANCED MINI FORM */}
          <div className="lg:col-span-6">
            <div className="max-w-2xl mx-auto">
              <MiniForm />
            </div>
          </div>

          {/* RIGHT ILLUSTRATION - Closer positioning, larger scale */}
          <div className="lg:col-span-2 hidden lg:flex justify-start">
            <div className="w-full max-w-none transform hover:scale-105 transition-transform duration-300 ease-out">
              <img 
                src="/illustrations/a-right-hero.png" 
                alt="Maison connectée avec panneaux solaires" 
                className="w-full h-auto scale-125 hover:brightness-110 transition-all duration-300"
                loading="eager"
                style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.06))' }}
              />
            </div>
          </div>

          {/* TABLET LAYOUT - Illustrations above form */}
          <div className="hidden md:flex lg:hidden col-span-full mb-8 justify-center gap-8">
            <div className="flex-1 max-w-xs">
              <img
                src="/illustrations/a-left-hero.png"
                alt="Infrastructure électrique"
                className="w-full h-auto transform hover:scale-105 transition-transform duration-300"
                loading="lazy"
                style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.06))' }}
              />
            </div>
            <div className="flex-1 max-w-xs">
              <img
                src="/illustrations/a-right-hero.png"
                alt="Maison avec panneaux solaires"
                className="w-full h-auto transform hover:scale-105 transition-transform duration-300"
                loading="lazy"
                style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.06))' }}
              />
            </div>
          </div>

          {/* MOBILE ILLUSTRATIONS - Single column, prominently centered */}
          <div className="md:hidden col-span-full mt-6 space-y-4">
            <div className="flex justify-center">
              <div className="w-full max-w-sm">
                <img
                  src="/illustrations/a-left-hero.png"
                  alt="Infrastructure électrique"
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.06))' }}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-sm">
                <img
                  src="/illustrations/a-right-hero.png"
                  alt="Maison avec panneaux solaires"
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.06))' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ENHANCED TRUST INDICATORS */}
        <div className="text-center mt-8 lg:mt-12">
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100">
              <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></div>
              <span className="font-medium">Experts certifiés ENEDIS</span>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              <span className="font-medium">Service dans toute la France</span>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100">
              <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></div>
              <span className="font-medium">Accompagnement complet</span>
            </div>
          </div>
          
          {/* ENHANCED PHONE CTA */}
          <div className="mt-6">
            <a 
              href={SITE.phoneLink}
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-lg px-4 py-2 rounded-lg hover:bg-blue-50 transition-all duration-200 transform hover:scale-105"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'tel_click', {
                    event_category: 'engagement',
                    event_label: 'hero_phone_cta'
                  })
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
      </div>
    </section>
  )
}

export default Hero