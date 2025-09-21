import React, { useState } from 'react'

// FAQ Support Illustration
const FAQIllustration: React.FC = () => (
  <div className="w-full max-w-sm mx-auto">
    <img 
      src="/illustrations/FAQ.png" 
      alt="Support et assistance FAQ"
      className="w-full h-auto"
      loading="lazy"
    />
  </div>
)

const TrustContact: React.FC = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    typeProjet: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission logic here
  }

  const trustPoints = [
    "Experts agréés Enedis",
    "Suivi personnalisé A à Z",
    "Dossiers conformes garantis",
    "Assistance téléphonique"
  ]

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Trust Section - Left Column */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Pourquoi Mon Raccordement Connect ?
            </h2>
            
            {/* FAQ Support Illustration */}
            <div className="mb-8">
              <FAQIllustration />
            </div>

            {/* Trust Points */}
            <div className="space-y-4">
              {trustPoints.map((point, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form - Right Column */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Contactez nos experts
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  required
                  value={formData.nom}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Votre nom complet"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  required
                  value={formData.telephone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="01 23 45 67 89"
                />
              </div>

              <div>
                <label htmlFor="typeProjet" className="block text-sm font-medium text-gray-700 mb-2">
                  Type de projet *
                </label>
                <select
                  id="typeProjet"
                  name="typeProjet"
                  required
                  value={formData.typeProjet}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Sélectionnez votre projet</option>
                  <option value="residentiel">Raccordement résidentiel</option>
                  <option value="photovoltaique">Installation photovoltaïque</option>
                  <option value="professionnel">Raccordement professionnel</option>
                  <option value="technique">Service technique</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Décrivez votre projet en quelques mots..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                Obtenir mon devis
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustContact