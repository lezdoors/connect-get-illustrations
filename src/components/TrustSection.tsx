import React from 'react'

const TrustSection: React.FC = () => {
  const trustItems = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Devis Gratuit",
      subtitle: "Sans engagement",
      description: "Estimation précise sous 2h"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Experts Certifiés",
      subtitle: "ENEDIS & CONSUEL",
      description: "Équipe d'électriciens qualifiés"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Toute la France",
      subtitle: "Service national",
      description: "Intervention partout en métropole"
    }
  ]

  return (
    <section 
      className="py-12"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Three-column layout with subtle borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustItems.map((item, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl transition-all duration-200 hover:shadow-lg"
              style={{
                border: '1px solid #e5e7eb',
                backgroundColor: '#fafafa'
              }}
            >
              {/* Icon */}
              <div 
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ 
                  backgroundColor: '#f0fdf4',
                  color: '#059669'
                }}
              >
                {item.icon}
              </div>
              
              {/* Content */}
              <h3 
                className="text-xl font-bold mb-1"
                style={{ color: '#1f2937' }}
              >
                {item.title}
              </h3>
              <p 
                className="text-sm font-medium mb-2"
                style={{ color: '#059669' }}
              >
                {item.subtitle}
              </p>
              <p 
                className="text-sm"
                style={{ color: '#6b7280' }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics row */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16 text-center">
            <div>
              <div 
                className="text-3xl font-bold mb-1"
                style={{ color: '#059669' }}
              >
                50K+
              </div>
              <div 
                className="text-sm font-medium"
                style={{ color: '#4b5563' }}
              >
                Raccordements réalisés
              </div>
            </div>
            <div>
              <div 
                className="text-3xl font-bold mb-1"
                style={{ color: '#059669' }}
              >
                98%
              </div>
              <div 
                className="text-sm font-medium"
                style={{ color: '#4b5563' }}
              >
                Satisfaction client
              </div>
            </div>
            <div>
              <div 
                className="text-3xl font-bold mb-1"
                style={{ color: '#059669' }}
              >
                7j/7
              </div>
              <div 
                className="text-sm font-medium"
                style={{ color: '#4b5563' }}
              >
                Support disponible
              </div>
            </div>
            <div>
              <div 
                className="text-3xl font-bold mb-1"
                style={{ color: '#059669' }}
              >
                2h
              </div>
              <div 
                className="text-sm font-medium"
                style={{ color: '#4b5563' }}
              >
                Délai de réponse moyen
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustSection