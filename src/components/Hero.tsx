import React from 'react'
import { useNavigate } from 'react-router-dom'
import MiniForm from './MiniForm'

const Hero: React.FC = () => {
  const navigate = useNavigate()
  
  const goToForm = () => {
    navigate('/enedis-raccordement')
  }



  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* 3-COLUMN HERO LAYOUT FOR MAXIMUM CONVERSION */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* LEFT ILLUSTRATION - Electric Pole (Hidden on mobile) */}
          <div className="lg:col-span-3 hidden lg:flex justify-center">
            <div className="w-full max-w-xs">
              <img 
                src="/illustrations/a-left-hero.png" 
                alt="Infrastructure électrique ENEDIS" 
                className="w-full h-auto"
                loading="eager"
              />
            </div>
          </div>

          {/* CENTER - CONVERSION-FOCUSED CONTENT */}
          <div className="lg:col-span-6 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Raccordement Électrique Enedis – Simple & Rapide
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Devis gratuit en 24h • Experts agréés ENEDIS • Suivi personnalisé A→Z
            </p>

            {/* MAIN CTA BUTTON - CONVERSION OPTIMIZED */}
            <div className="mb-6">
              <button 
                onClick={goToForm}
                className="bg-green-600 hover:bg-green-700 text-white font-bold text-xl py-4 px-12 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
              >
                Commencer ma demande
              </button>
            </div>

            {/* TRUST INDICATORS */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>Devis gratuit sous 24h</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>Experts agréés ENEDIS</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>Suivi personnalisé A à Z</span>
              </div>
            </div>

            {/* SECONDARY CTA */}
            <div className="mt-6">
              <a 
                href="tel:0912345678"
                className="text-blue-600 hover:text-blue-700 font-medium underline decoration-2 underline-offset-4"
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
                Ou nous contacter directement
              </a>
            </div>
          </div>

          {/* RIGHT ILLUSTRATION - House with Solar & Car */}
          <div className="lg:col-span-3 flex justify-center sm:mt-0 mt-6">
            <div className="w-full max-w-xs">
              <img 
                src="/illustrations/a-right-hero.png" 
                alt="Maison connectée avec panneaux solaires et véhicule électrique" 
                className="w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* MINI FORM SECTION - BELOW HERO FOR MOBILE, SIDE FOR DESKTOP */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            
            {/* FORM BENEFITS */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Obtenez votre devis personnalisé en 2 minutes
              </h2>
              <p className="text-gray-600 mb-6">
                Remplissez notre formulaire simplifié pour recevoir une estimation précise de votre raccordement ENEDIS.
              </p>
              
              {/* PROCESS PREVIEW */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">1</div>
                  <p className="text-xs text-gray-600">Vos informations</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">2</div>
                  <p className="text-xs text-gray-600">Détails du projet</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">3</div>
                  <p className="text-xs text-gray-600">Confirmation</p>
                </div>
              </div>
            </div>

            {/* MINI FORM */}
            <div className="lg:col-span-1">
              <MiniForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero