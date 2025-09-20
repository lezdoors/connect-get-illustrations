import React from 'react'
import { CheckCircleIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import HouseIllustration from './HouseIllustration'

const Hero: React.FC = () => {
  const benefits = [
    {
      icon: ClockIcon,
      text: 'Raccordement garanti en 48h'
    },
    {
      icon: ShieldCheckIcon,
      text: 'Experts certifiés CONSUEL'
    },
    {
      icon: CheckCircleIcon,
      text: 'Processus 100% simplifié'
    }
  ]

  return (
    <section className="section bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                🚀 Nouveau: Service accéléré 48h
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Raccordement électrique
              <span className="text-gradient block">simplifié</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Obtenez votre raccordement ENEDIS partout en France en 3 étapes simples. 
              <strong className="text-gray-900"> Transparent • Rapide • Garanti</strong>
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="w-6 h-6 text-primary-600 flex-shrink-0">
                    <benefit.icon />
                  </div>
                  <span className="text-gray-700 font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="btn-primary text-lg">
                Commencer ma demande
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="btn-secondary text-lg">
                Calculer mon devis
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>12 personnes consultent cette page</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircleIcon className="w-4 h-4 text-green-600" />
                <span>2,847 raccordements en 2024</span>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary-100 rounded-full opacity-60 animate-bounce-gentle"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-blue-100 rounded-full opacity-40 animate-bounce-gentle" style={{animationDelay: '1s'}}></div>
              <HouseIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero