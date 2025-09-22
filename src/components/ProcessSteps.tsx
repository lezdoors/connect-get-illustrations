import React from 'react'

const ProcessSteps: React.FC = () => {
  const steps = [
    {
      number: 1,
      image: '/illustrations/Définir-le-type.png',
      title: 'Définir le type raccordement Enedis correspondant à votre besoin',
      description: 'Bénéficiez de notre outil pour définir la demande de raccordement qui correspond à votre besoin. C\'est facile et rapide.'
    },
    {
      number: 2,
      image: '/illustrations/Completer-Formulaire.png',
      title: 'Compléter un formulaire simple ou demander l\'assistance de nos experts',
      description: 'Suivez les étapes du formulaire et renseignez votre projet de raccordement ou prenez rendez-vous avec un Expert.'
    },
    {
      number: 3,
      image: '/illustrations/Form-submit.png',
      title: 'Nous nous occupons du dépôt du dossier, complet et conforme, chez Enedis',
      description: 'Nous dédions des experts pour étudier votre demande et vous assister à la constitution d\'un dossier complet et conforme afin de le déposer auprès des services compétents chez Enedis'
    },
    {
      number: 4,
      image: '/illustrations/Suivi-Dossier.png',
      title: 'Nous vous accompagnons dans votre raccordement Enedis de A à Z',
      description: 'Nous nous occupons du suivi de votre demande pas à pas tout en accélérant son avancement. Nous demeurons à votre disposition pour tout conseil ou assistance.'
    }
  ]

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Le raccordement Enedis, comment ça fonctionne ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre processus simplifié en 4 étapes pour votre raccordement électrique
          </p>
        </div>

        {/* Steps Grid with Connecting Lines */}
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 to-blue-200 opacity-60"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  {/* Illustration with improved sizing and performance */}
                  <div className="mb-8 flex justify-center relative">
                    <div className="relative">
                      <img 
                        src={step.image} 
                        alt={`Étape ${step.number}: ${step.title}`}
                        className="w-28 h-28 object-contain drop-shadow-lg transition-opacity duration-300"
                        loading={index === 0 ? "eager" : "lazy"}
                        decoding="async"
                        width="112"
                        height="112"
                        style={{ aspectRatio: '1/1' }}
                      />
                      {/* Step number overlay */}
                      <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight min-h-[3rem]">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow connector for desktop (except last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-white rounded-full shadow-md border-2 border-blue-200 flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg border border-gray-100">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-medium">Processus 100% digitalisé et sécurisé</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSteps