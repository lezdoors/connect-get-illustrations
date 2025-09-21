import React from 'react'
import ProfessionalHouseIllustration from './ProfessionalHouseIllustration'

const Hero: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Raccordement Électrique Enedis - Service Expert France
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Partenaire n°1 en France pour toutes demandes de raccordement Enedis
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-8 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-lg">
                Commencer ma demande
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-4 px-8 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-lg">
                Nous contacter
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center">
            <ProfessionalHouseIllustration />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero