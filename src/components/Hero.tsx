import React from 'react'
import HeroMiniForm from './HeroMiniForm'
import { SITE } from '../config/site'

const Hero: React.FC = () => {
  return (
    <section className="hero-container bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* NEW CENTERED HERO LAYOUT WITH FORM */}
        <div className="text-center mb-8">
          <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            {SITE.tagline}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto font-medium">
            Estimation rapide et gratuite • Experts certifiés • Accompagnement personnalisé
          </p>
        </div>

        {/* RESPONSIVE LAYOUT: MOBILE-FIRST DESIGN */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* MOBILE: Single illustration above form (shown only on mobile) */}
          <div className="lg:hidden col-span-full flex justify-center mb-6">
            <div className="w-48 h-32">
              <img 
                src="/illustrations/a-right-hero.png" 
                alt="Maison connectée avec panneaux solaires" 
                className="w-full h-full object-contain drop-shadow-lg"
                loading="eager"
                fetchPriority="high"
                width="192"
                height="128"
              />
            </div>
          </div>

          {/* LEFT ILLUSTRATION - Electric Pole (Desktop only) */}
          <div className="lg:col-span-3 hidden lg:flex justify-center">
            <div className="w-full max-w-sm">
              <img 
                src="/illustrations/a-left-hero.png" 
                alt="Infrastructure électrique ENEDIS" 
                className="w-full h-auto drop-shadow-lg"
                loading="eager"
                fetchPriority="high"
                width="300"
                height="400"
              />
            </div>
          </div>

          {/* CENTER - HERO FORM (PRIMARY CONVERSION POINT) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md px-4 lg:px-0">
              <HeroMiniForm />
            </div>
          </div>

          {/* RIGHT ILLUSTRATION - House with Solar & Car (Desktop only) */}
          <div className="lg:col-span-3 hidden lg:flex justify-center">
            <div className="w-full max-w-sm">
              <img 
                src="/illustrations/a-right-hero.png" 
                alt="Maison connectée avec panneaux solaires et véhicule électrique" 
                className="w-full h-auto drop-shadow-lg"
                loading="eager"
                fetchPriority="high"
                width="300"
                height="400"
              />
            </div>
          </div>
        </div>

        {/* SECONDARY TRUST ELEMENTS & CONTACT */}
        <div className="mt-12 text-center">
          {/* TRUST INDICATORS */}
          <div className="flex flex-wrap justify-center gap-8 text-base text-gray-700 mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-600 rounded-full"></div>
              <span className="font-medium">Estimation sous 3 jours ouvrés</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <span className="font-medium">Experts certifiés ENEDIS</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-600 rounded-full"></div>
              <span className="font-medium">Accompagnement personnalisé A à Z</span>
            </div>
          </div>

          {/* SECONDARY CTA */}
          <div>
            <p className="text-gray-600 mb-2">Besoin d'aide ?</p>
            <a 
              href={SITE.phoneLink}
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg underline decoration-2 underline-offset-4 transition-colors"
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
              📞 {SITE.phoneDisplay}
            </a>
            <p className="text-sm text-gray-500 mt-2">Lundi au vendredi • 9h-18h</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero