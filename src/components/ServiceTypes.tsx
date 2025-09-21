import React from 'react'

const ServiceTypes: React.FC = () => {
  const serviceTypes = [
    {
      title: 'Raccordement Définitif',
      description: 'Connexion permanente pour votre logement ou local professionnel',
      image: '/illustrations/Raccordement-Definitif.png',
      features: ['Installation permanente', 'Tous types de bâtiments', 'Conformité ENEDIS']
    },
    {
      title: 'Raccordement Provisoire',
      description: 'Solution temporaire pour chantiers et événements',
      image: '/illustrations/Raccordement-Provisoire.png',
      features: ['Installation rapide', 'Chantiers temporaires', 'Événements ponctuels']
    },
    {
      title: 'Raccordement Collectif',
      description: 'Immeubles, copropriétés et bâtiments collectifs',
      image: '/illustrations/Raccordement-Collectif.png',
      features: ['Immeubles résidentiels', 'Copropriétés', 'Bâtiments collectifs']
    },
    {
      title: 'Augmentation Puissance',
      description: 'Augmentez la capacité électrique de votre installation',
      image: '/illustrations/augmentation de puissance.png',
      features: ['Adaptation aux besoins', 'Mise aux normes', 'Optimisation énergétique']
    }
  ]

  const goToForm = () => {
    window.location.href = '/enedis-raccordement'
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Tous vos besoins de raccordement ENEDIS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Du raccordement résidentiel aux installations industrielles, nous gérons tous types de projets électriques
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {serviceTypes.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex flex-col md:flex-row items-center gap-6">
                
                {/* Illustration */}
                <div className="flex-shrink-0">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-24 h-24 md:w-32 md:h-32 object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center md:justify-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Besoin d'aide pour choisir votre type de raccordement ?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Nos experts vous accompagnent pour identifier la solution la plus adaptée à votre projet et vous garantir un raccordement conforme aux normes ENEDIS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={goToForm}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Commencer ma demande
            </button>
            <a 
              href="tel:0912345678"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Appeler un expert
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceTypes