import React from 'react'

const ProcessSteps: React.FC = () => {
  const steps = [
    {
      number: 1,
      image: '/illustrations/Définir le type.png',
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
    <section id="process" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Le raccordement Enedis, comment ça fonctionne ?
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              {/* Illustration */}
              <div className="mb-6 flex justify-center">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-24 h-24 object-contain"
                  loading="lazy"
                />
              </div>

              {/* Step Number */}
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">
                  {step.number}
                </div>
                <div className="h-px bg-gray-200 flex-1"></div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-3 leading-tight">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSteps