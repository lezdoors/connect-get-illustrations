import React from 'react'
import { useNavigate } from 'react-router-dom'
import MiniForm from './MiniForm'
import { SITE } from '../config/site'

const Hero: React.FC = () => {
  const navigate = useNavigate()
  
  const goToForm = () => {
    navigate('/enedis-raccordement')
  }

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO HEADLINES - CLEAN AND CENTERED */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
            Le raccordement Enedis.<br />Simple et rapide !
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">
            Partenaire n°1 en France pour les demandes de raccordements Enedis
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Estimation rapide et gratuite • Experts certifiés • Accompagnement personnalisé
          </p>
        </div>

        {/* MAIN LAYOUT: ILLUSTRATION → FORM → ILLUSTRATION */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT ILLUSTRATION - Closer to form */}
          <div className="lg:col-span-3 hidden lg:flex justify-end">
            <div className="w-full max-w-sm">
              <img 
                src="/illustrations/a-left-hero.png" 
                alt="Infrastructure électrique ENEDIS" 
                className="w-full h-auto"
                loading="eager"
              />
            </div>
          </div>

          {/* CENTER - MINI FORM */}
          <div className="lg:col-span-6">
            <div className="max-w-lg mx-auto">
              <MiniForm />
            </div>
          </div>

          {/* RIGHT ILLUSTRATION - Closer to form */}
          <div className="lg:col-span-3 hidden lg:flex justify-start">
            <div className="w-full max-w-sm">
              <img 
                src="/illustrations/a-right-hero.png" 
                alt="Maison connectée avec panneaux solaires" 
                className="w-full h-auto"
                loading="eager"
              />
            </div>
          </div>

          {/* MOBILE ILLUSTRATIONS - Stacked below form */}
          <div className="lg:hidden col-span-full mt-8 space-y-6">
            <div className="flex justify-center">
              <img
                src="/illustrations/a-left-hero.png"
                alt="Infrastructure électrique"
                className="w-full h-auto max-w-xs"
                loading="lazy"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/illustrations/a-right-hero.png"
                alt="Maison avec panneaux solaires"
                className="w-full h-auto max-w-xs"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* TRUST INDICATORS - CLEAN, BELOW FORM */}
        <div className="text-center mt-12">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
              <span>Experts certifiés ENEDIS</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span>Service dans toute la France</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
              <span>Accompagnement complet</span>
            </div>
          </div>
          
          {/* PHONE CTA */}
          <div className="mt-6">
            <a 
              href={SITE.phoneLink}
              className="text-blue-600 hover:text-blue-700 font-medium underline decoration-2 underline-offset-4 text-lg"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'tel_click', {
                    event_category: 'engagement',
                    event_label: 'hero_phone_cta'
                  })
                }
              }}
            >
              Ou appelez-nous : {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero