import React from 'react'
import { 
  DocumentTextIcon, 
  CogIcon, 
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

const ProcessSteps: React.FC = () => {
  const steps = [
    {
      number: 1,
      icon: DocumentTextIcon,
      title: 'Décrivez votre projet',
      description: 'Remplissez notre formulaire en 3 minutes : adresse, type de raccordement, puissance souhaitée.',
      details: [
        'Informations sur votre propriété',
        'Type de raccordement nécessaire',
        'Puissance électrique souhaitée',
        'Délai souhaité pour les travaux'
      ],
      duration: '3 min',
      color: 'bg-blue-500'
    },
    {
      number: 2,
      icon: CogIcon,
      title: 'Nous gérons tout',
      description: 'Notre équipe s\'occupe des démarches ENEDIS, des autorisations et planifie les travaux.',
      details: [
        'Dossier technique complet',
        'Démarches administratives ENEDIS',
        'Obtention des autorisations',
        'Planification des interventions'
      ],
      duration: '24-48h',
      color: 'bg-orange-500'
    },
    {
      number: 3,
      icon: CheckCircleIcon,
      title: 'Raccordement réalisé',
      description: 'Installation par nos techniciens certifiés CONSUEL avec mise en service immédiate.',
      details: [
        'Installation par experts certifiés',
        'Respect des normes CONSUEL',
        'Tests de conformité inclus',
        'Mise en service immédiate'
      ],
      duration: '1-2 jours',
      color: 'bg-green-500'
    }
  ]

  return (
    <section id="process" className="section bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un processus simple et transparent en 3 étapes pour votre raccordement électrique. 
            <strong className="text-primary-600"> De la demande à la mise en service en 48h garanti.</strong>
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Hidden on mobile */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="flex justify-between items-center px-32">
              <ArrowRightIcon className="w-8 h-8 text-gray-300" />
              <ArrowRightIcon className="w-8 h-8 text-gray-300" />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="card group hover:scale-105 transition-all duration-300">
                  {/* Step Number */}
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 text-gray-400 mx-auto mb-4">
                    <step.icon />
                  </div>

                  {/* Content */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {step.description}
                    </p>
                    
                    {/* Duration Badge */}
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${step.color.replace('bg-', 'bg-').replace('-500', '-100')} ${step.color.replace('bg-', 'text-').replace('-500', '-800')}`}>
                      ⏱️ {step.duration}
                    </span>
                  </div>

                  {/* Details List */}
                  <div className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-3">
                        <CheckCircleIcon className={`w-5 h-5 ${step.color.replace('bg-', 'text-')} flex-shrink-0 mt-0.5`} />
                        <span className="text-sm text-gray-600">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Prêt à commencer votre raccordement ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Plus de 2,800 clients nous font confiance. Rejoignez-les et obtenez votre devis personnalisé en quelques clics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                <DocumentTextIcon className="w-5 h-5 mr-2" />
                Commencer maintenant
              </button>
              <button className="btn-secondary">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L6.16 11.37a11.045 11.045 0 005.516 5.516l1.983-1.034a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V20a2 2 0 01-2 2h-1C9.716 22 2 14.284 2 6V5z" />
                </svg>
                Appeler un conseiller
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSteps