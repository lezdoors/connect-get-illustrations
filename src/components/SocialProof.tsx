import React from 'react'
import { StarIcon, CheckBadgeIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/solid'

const SocialProof: React.FC = () => {
  const certifications = [
    {
      name: 'CONSUEL',
      description: 'Certification officielle',
      verified: true
    },
    {
      name: 'RGE',
      description: 'Reconnu Garant Environnement',
      verified: true
    },
    {
      name: 'ENEDIS',
      description: 'Partenaire agréé',
      verified: true
    },
    {
      name: 'QUALIBAT',
      description: 'Qualification professionnelle',
      verified: true
    }
  ]

  const stats = [
    {
      icon: UserGroupIcon,
      number: '2,847',
      label: 'Raccordements réalisés en 2024',
      color: 'text-green-600'
    },
    {
      icon: ClockIcon,
      number: '48h',
      label: 'Délai moyen de raccordement',
      color: 'text-blue-600'
    },
    {
      icon: StarIcon,
      number: '4.9/5',
      label: 'Note moyenne clients',
      color: 'text-yellow-500'
    },
    {
      icon: CheckBadgeIcon,
      number: '100%',
      label: 'Conformité aux normes',
      color: 'text-primary-600'
    }
  ]

  return (
    <section className="section bg-gray-50 border-t border-gray-200">
      <div className="container">
        {/* Trust Banner */}
        <div className="text-center mb-12">
          <p className="text-gray-600 font-medium mb-4">
            Approuvé par plus de <span className="text-primary-600 font-bold">2,800 clients</span> partout en France
          </p>
          <div className="flex justify-center items-center space-x-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
            ))}
            <span className="ml-2 text-gray-600 font-medium">4.9/5 sur Google Reviews</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-full bg-white shadow-lg ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-center text-lg font-semibold text-gray-900 mb-8">
            Certifications & Agréments officiels
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="card text-center hover:scale-105 transition-transform duration-200">
                <div className="relative mb-4">
                  <div className="w-16 h-16 mx-auto bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-lg">
                    {cert.name.charAt(0)}
                  </div>
                  {cert.verified && (
                    <CheckBadgeIcon className="w-6 h-6 text-green-500 absolute -top-1 -right-1" />
                  )}
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{cert.name}</h4>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators Bar */}
        <div className="mt-12 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <CheckBadgeIcon className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Garantie satisfaction</div>
                <div className="text-sm text-gray-600">Remboursé si non satisfait</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <ClockIcon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Support 7j/7</div>
                <div className="text-sm text-gray-600">Équipe dédiée disponible</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Paiement sécurisé</div>
                <div className="text-sm text-gray-600">SSL & cryptage bancaire</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProof