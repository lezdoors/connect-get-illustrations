import React from 'react'
import MiniForm from './MiniForm'

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const goToForm = () => {
    window.location.href = '/enedis-raccordement'
  }

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="lg:pt-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Raccordement Électrique Enedis - Service Expert France
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Partenaire n°1 en France pour toutes demandes de raccordement Enedis
            </p>

            {/* Key Benefits */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-700">Devis gratuit sous 24h</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-700">Experts agréés ENEDIS</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-700">Suivi personnalisé A à Z</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={goToForm}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-8 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-lg"
              >
                Commencer ma demande
              </button>
              <button 
                onClick={scrollToContact}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-4 px-8 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-lg"
              >
                Nous contacter
              </button>
            </div>
          </div>

          {/* Right Mini Form */}
          <div className="lg:sticky lg:top-8">
            <MiniForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero