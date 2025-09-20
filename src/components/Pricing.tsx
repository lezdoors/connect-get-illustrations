import React from 'react'
import { 
  CheckIcon, 
  XMarkIcon,
  ClockIcon,
  BoltIcon,
  ShieldCheckIcon,
  StarIcon
} from '@heroicons/react/24/solid'

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Standard',
      subtitle: 'Parfait pour les particuliers',
      price: '129.80',
      originalPrice: '199',
      duration: '5-7 jours',
      popular: false,
      features: [
        'Dossier technique complet',
        'Démarches ENEDIS incluses',
        'Installation par expert certifié',
        'Mise en conformité CONSUEL',
        'Garantie 2 ans',
        'Support téléphonique'
      ],
      notIncluded: [
        'Service express 48h',
        'Suivi SMS temps réel'
      ],
      color: 'border-gray-200',
      buttonStyle: 'btn-secondary'
    },
    {
      name: 'Express',
      subtitle: 'Raccordement en 48h garanti',
      price: '189.80',
      originalPrice: '299',
      duration: '48h max',
      popular: true,
      features: [
        'Tout du plan Standard',
        '⚡ Service express 48h garanti',
        '📱 Suivi SMS temps réel',
        '🎯 Technicien dédié prioritaire',
        '📞 Ligne directe conseiller',
        '💰 Remboursement si dépassement',
        '🏆 Garantie satisfaction 100%'
      ],
      notIncluded: [],
      color: 'border-primary-500 ring-2 ring-primary-500',
      buttonStyle: 'btn-primary'
    },
    {
      name: 'Professionnel',
      subtitle: 'Pour entreprises & promoteurs',
      price: 'Sur devis',
      originalPrice: null,
      duration: '24-48h',
      popular: false,
      features: [
        'Tout du plan Express',
        'Gestion multi-sites',
        'Facturation groupée',
        'Interlocuteur unique dédié',
        'Reporting détaillé',
        'Conditions préférentielles',
        'Formation équipes'
      ],
      notIncluded: [],
      color: 'border-gray-200',
      buttonStyle: 'btn-secondary'
    }
  ]

  return (
    <section id="pricing" className="section bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tarifs transparents
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Pas de surprise, pas de frais cachés. Choisissez l'offre qui correspond à vos besoins.
          </p>
          
          {/* Promo Banner */}
          <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-blue-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
            <StarIcon className="w-4 h-4 mr-2" />
            Promotion de lancement : -35% sur tous les plans
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div key={index} className={`card relative ${plan.color} ${plan.popular ? 'scale-105 shadow-2xl' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    ⭐ Plus populaire
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.subtitle}</p>
                
                <div className="mb-4">
                  {plan.price === 'Sur devis' ? (
                    <div className="text-3xl font-bold text-gray-900">{plan.price}</div>
                  ) : (
                    <div>
                      <div className="flex items-baseline justify-center space-x-2">
                        <span className="text-4xl font-bold text-primary-600">{plan.price}€</span>
                        {plan.originalPrice && (
                          <span className="text-lg text-gray-400 line-through">{plan.originalPrice}€</span>
                        )}
                      </div>
                      <div className="text-sm text-gray-600">TTC, frais de dossier inclus</div>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-center space-x-2 mb-6">
                  <ClockIcon className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">Délai : {plan.duration}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
                
                {plan.notIncluded.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3 opacity-50">
                    <XMarkIcon className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-500 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`${plan.buttonStyle} w-full`}>
                {plan.name === 'Professionnel' ? 'Demander un devis' : 'Choisir ce plan'}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheckIcon className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Garantie satisfaction</h4>
            <p className="text-gray-600 text-sm">Remboursé intégralement si vous n'êtes pas satisfait</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BoltIcon className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Prix tout inclus</h4>
            <p className="text-gray-600 text-sm">Aucun frais caché, tout est inclus dans le tarif affiché</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ClockIcon className="w-6 h-6 text-primary-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Délais garantis</h4>
            <p className="text-gray-600 text-sm">Respect des délais annoncés ou remboursement partiel</p>
          </div>
        </div>

        {/* FAQ Pricing */}
        <div className="mt-16 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Questions fréquentes sur les tarifs</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Que comprend le prix affiché ?</h4>
              <p className="text-gray-600">Dossier technique, démarches administratives, installation, mise en conformité et garantie.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Y a-t-il des frais supplémentaires ?</h4>
              <p className="text-gray-600">Non, tous les frais sont inclus. Seuls les travaux exceptionnels peuvent générer un surcoût (validé avec vous au préalable).</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Comment se déroule le paiement ?</h4>
              <p className="text-gray-600">30% à la commande, 70% après validation de la conformité CONSUEL.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Puis-je annuler ma commande ?</h4>
              <p className="text-gray-600">Oui, annulation gratuite jusqu'à 48h avant l'intervention planifiée.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing