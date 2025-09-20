import React, { useState, useEffect } from 'react'
import { 
  ClockIcon, 
  UserGroupIcon, 
  PhoneIcon, 
  ChatBubbleLeftRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const CTA: React.FC = () => {
  const [activeUsers, setActiveUsers] = useState(12)
  const [availableSlots, setAvailableSlots] = useState(3)

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => Math.max(8, Math.min(18, prev + (Math.random() > 0.5 ? 1 : -1))))
      // Occasionally update available slots
      if (Math.random() > 0.9) {
        setAvailableSlots(prev => Math.max(1, Math.min(7, prev + (Math.random() > 0.5 ? 1 : -1))))
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const urgencyFeatures = [
    'Réponse immédiate garantie',
    'Technicien disponible cette semaine',
    'Dossier ENEDIS traité en priorité',
    'Mise en service sous 48h maximum'
  ]

  return (
    <section className="section bg-gradient-to-br from-primary-600 via-primary-700 to-blue-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-200 font-medium">
                🔥 {activeUsers} personnes consultent cette page maintenant
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Votre raccordement électrique en
              <span className="text-yellow-300 block">48h maximum</span>
            </h2>

            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Ne perdez plus de temps avec les démarches complexes. Notre équipe d'experts certifiés s'occupe de tout, 
              de A à Z, pour un raccordement rapide et conforme.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {urgencyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-300 flex-shrink-0" />
                  <span className="text-sm text-blue-100">{feature}</span>
                </div>
              ))}
            </div>

            {/* Social Proof Numbers */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">2,847</div>
                <div className="text-xs text-blue-200">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">48h</div>
                <div className="text-xs text-blue-200">Délai moyen</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">99.2%</div>
                <div className="text-xs text-blue-200">Délais respectés</div>
              </div>
            </div>
          </div>

          {/* Right CTA Card */}
          <div>
            <div className="bg-white rounded-3xl shadow-2xl p-8 text-gray-900">
              {/* Urgency Header */}
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg mb-6">
                <div className="flex items-center">
                  <ClockIcon className="w-6 h-6 text-red-500 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-red-800">
                      Créneaux disponibles cette semaine : {availableSlots}
                    </h3>
                    <p className="text-sm text-red-600">
                      Réservez maintenant pour garantir votre intervention express
                    </p>
                  </div>
                </div>
              </div>

              {/* Main CTA */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Obtenez votre devis instantané
                </h3>
                <p className="text-gray-600 mb-6">
                  3 minutes suffisent pour démarrer votre raccordement
                </p>

                <button className="btn-primary w-full text-lg py-4 mb-4 group">
                  <span className="flex items-center justify-center">
                    Commencer ma demande maintenant
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>

                <div className="text-xs text-gray-500 mb-6">
                  ✅ Sans engagement • ✅ Devis gratuit • ✅ Réponse immédiate
                </div>
              </div>

              {/* Alternative Options */}
              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-600 text-center mb-4">
                  Ou contactez directement nos experts :
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center space-x-2 bg-green-50 hover:bg-green-100 text-green-700 font-medium py-3 px-4 rounded-xl transition-colors">
                    <PhoneIcon className="w-4 h-4" />
                    <span className="text-sm">Appel gratuit</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium py-3 px-4 rounded-xl transition-colors">
                    <ChatBubbleLeftRightIcon className="w-4 h-4" />
                    <span className="text-sm">Chat en ligne</span>
                  </button>
                </div>

                <div className="text-center mt-4">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <UserGroupIcon className="w-4 h-4" />
                    <span>Conseillers disponibles 7j/7 de 8h à 20h</span>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="border-t border-gray-200 pt-6 mt-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mb-2">
                      <CheckCircleIcon className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-xs text-gray-600">Paiement<br/>sécurisé</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-600">Données<br/>protégées</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA