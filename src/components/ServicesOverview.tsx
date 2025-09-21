import React from 'react'

const ServicesOverview: React.FC = () => {
  const services = [
    {
      title: 'Raccordement Résidentiel',
      description: 'Particuliers - Maisons neuves, extensions, rénovations',
      image: '/illustrations/Raccordement-Definitif.png'
    },
    {
      title: 'Raccordement Photovoltaïque',
      description: 'Installation solaire - Raccordement production d\'énergie',
      image: '/illustrations/Photovoltaic.png'
    },
    {
      title: 'Services Techniques',
      description: 'Expertise technique - Consuel, conformité, assistance',
      image: '/illustrations/services-techniques.png'
    },
    {
      title: 'Raccordement Professionnel',
      description: 'Professionnels - Locaux commerciaux, industriels',
      image: '/illustrations/Service-Collectif.png'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Tous types de raccordement Enedis
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              {/* Illustration */}
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                <img 
                  src={service.image} 
                  alt={`Service ${service.title}: ${service.description}`}
                  className="w-32 h-32 object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview