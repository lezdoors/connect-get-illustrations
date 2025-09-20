import React from 'react'
import { StarIcon, CheckBadgeIcon } from '@heroicons/react/24/solid'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Marie Dubois',
      location: 'Lyon, 69000',
      avatar: 'MD',
      rating: 5,
      date: 'Il y a 2 semaines',
      title: 'Service express exceptionnel !',
      content: 'Raccordement réalisé en exactement 47h comme promis. L\'équipe est très professionnelle et le suivi SMS en temps réel est un vrai plus. Je recommande vivement !',
      project: 'Maison neuve - 9kVA',
      verified: true,
      helpful: 28
    },
    {
      name: 'Pierre Rousseau',
      location: 'Marseille, 13000',
      avatar: 'PR',
      rating: 5,
      date: 'Il y a 1 semaine',
      title: 'Transparent et efficace',
      content: 'Aucune surprise sur le prix, tout était inclus comme annoncé. Le technicien CONSUEL était ponctuel et très explicatif. Mon compteur Linky fonctionne parfaitement.',
      project: 'Rénovation - Augmentation 12kVA',
      verified: true,
      helpful: 22
    },
    {
      name: 'Sophie Martin',
      location: 'Nantes, 44000',
      avatar: 'SM',
      rating: 5,
      date: 'Il y a 3 jours',
      title: 'Parfait pour mon local commercial',
      content: 'J\'avais besoin d\'un raccordement triphasé pour mon restaurant. MonElec.net a géré toutes les démarches ENEDIS et j\'ai pu ouvrir dans les délais. Merci !',
      project: 'Local commercial - Triphasé 18kVA',
      verified: true,
      helpful: 35
    },
    {
      name: 'Jean-Luc Bernard',
      location: 'Toulouse, 31000',
      avatar: 'JB',
      rating: 5,
      date: 'Il y a 5 jours',
      title: 'Service client au top',
      content: 'Un petit problème technique est survenu, mais l\'équipe support a trouvé une solution rapidement. Le conseiller dédié était toujours disponible. Très satisfait !',
      project: 'Maison - Modification compteur',
      verified: true,
      helpful: 19
    },
    {
      name: 'Amélie Leroy',
      location: 'Bordeaux, 33000',
      avatar: 'AL',
      rating: 5,
      date: 'Il y a 1 mois',
      title: 'Processus 100% digitalisé',
      content: 'Formulaire très simple à remplir, suivi en ligne et paiement sécurisé. Tout s\'est fait sans paperasse et sans me déplacer. L\'avenir du raccordement électrique !',
      project: 'Appartement neuf - 6kVA',
      verified: true,
      helpful: 41
    },
    {
      name: 'Christophe Moreau',
      location: 'Lille, 59000',
      avatar: 'CM',
      rating: 5,
      date: 'Il y a 3 semaines',
      title: 'Rapport qualité-prix excellent',
      content: 'J\'ai comparé plusieurs prestataires, MonElec.net offre le meilleur rapport qualité-prix. Installation impeccable et conforme aux normes CONSUEL.',
      project: 'Terrain - Nouveau raccordement 12kVA',
      verified: true,
      helpful: 27
    }
  ]

  return (
    <section id="testimonials" className="section bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Plus de 2,800 raccordements réalisés avec succès. Découvrez les témoignages authentiques de nos clients satisfaits.
          </p>
          
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-4 h-4 text-yellow-400" />
              ))}
              <span className="ml-1 font-medium">4.9/5 sur Google</span>
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <span>1,247 avis vérifiés</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card hover:scale-105 transition-all duration-300">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      {testimonial.verified && (
                        <CheckBadgeIcon className="w-4 h-4 text-blue-500" title="Avis vérifié" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <div className="text-xs text-gray-500">{testimonial.date}</div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-yellow-400" />
                ))}
              </div>

              {/* Title */}
              <h5 className="font-semibold text-gray-900 mb-3">{testimonial.title}</h5>

              {/* Content */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {testimonial.content}
              </p>

              {/* Project Info */}
              <div className="bg-gray-50 rounded-lg p-3 mb-4">
                <div className="text-xs text-gray-500 mb-1">Projet :</div>
                <div className="text-sm font-medium text-gray-700">{testimonial.project}</div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>👍 {testimonial.helpful} personnes trouvent cet avis utile</span>
                <span>Avis vérifié</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">98.5%</div>
              <div className="text-sm text-gray-600">Taux de satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">4.9/5</div>
              <div className="text-sm text-gray-600">Note moyenne Google</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">1,247</div>
              <div className="text-sm text-gray-600">Avis clients vérifiés</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">99.2%</div>
              <div className="text-sm text-gray-600">Délais respectés</div>
            </div>
          </div>
        </div>

        {/* Review Platforms */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Retrouvez-nous aussi sur :</p>
          <div className="flex justify-center items-center space-x-8 text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-500 rounded text-white flex items-center justify-center text-sm font-bold">G</div>
              <span>Google Reviews</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded text-white flex items-center justify-center text-sm font-bold">T</div>
              <span>Trustpilot</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded text-white flex items-center justify-center text-sm font-bold">F</div>
              <span>Facebook</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials