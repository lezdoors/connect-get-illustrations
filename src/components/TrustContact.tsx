import React, { useState } from 'react'

// ElectricalGridIllustration component
const ElectricalGridIllustration: React.FC = () => (
  <svg viewBox="0 0 400 300" className="w-full h-auto">
    {/* Power lines and grid infrastructure */}
    <g stroke="#2563eb" strokeWidth="2" fill="none">
      {/* Main power lines */}
      <line x1="50" y1="80" x2="350" y2="80" />
      <line x1="50" y1="120" x2="350" y2="120" />
      
      {/* Power towers */}
      <g>
        <line x1="100" y1="40" x2="100" y2="140" strokeWidth="3" />
        <line x1="90" y1="60" x2="110" y2="60" />
        <line x1="85" y1="80" x2="115" y2="80" />
        <line x1="90" y1="100" x2="110" y2="100" />
      </g>
      
      <g>
        <line x1="200" y1="40" x2="200" y2="140" strokeWidth="3" />
        <line x1="190" y1="60" x2="210" y2="60" />
        <line x1="185" y1="80" x2="215" y2="80" />
        <line x1="190" y1="100" x2="210" y2="100" />
      </g>
      
      <g>
        <line x1="300" y1="40" x2="300" y2="140" strokeWidth="3" />
        <line x1="290" y1="60" x2="310" y2="60" />
        <line x1="285" y1="80" x2="315" y2="80" />
        <line x1="290" y1="100" x2="310" y2="100" />
      </g>
    </g>

    {/* Houses connected to grid */}
    <g fill="#10b981" stroke="#2563eb" strokeWidth="1">
      {/* House 1 */}
      <rect x="60" y="180" width="40" height="30" />
      <polygon points="80,160 60,180 100,180" fill="#2563eb" />
      <line x1="80" y1="120" x2="80" y2="180" stroke="#10b981" strokeWidth="2" />
      
      {/* House 2 */}
      <rect x="160" y="180" width="40" height="30" />
      <polygon points="180,160 160,180 200,180" fill="#2563eb" />
      <line x1="180" y1="120" x2="180" y2="180" stroke="#10b981" strokeWidth="2" />
      
      {/* House 3 */}
      <rect x="260" y="180" width="40" height="30" />
      <polygon points="280,160 260,180 300,180" fill="#2563eb" />
      <line x1="280" y1="120" x2="280" y2="180" stroke="#10b981" strokeWidth="2" />
    </g>

    {/* Family figures near houses */}
    <g fill="#10b981">
      {/* Family 1 */}
      <circle cx="70" cy="230" r="4" />
      <line x1="70" y1="235" x2="70" y2="250" stroke="#10b981" strokeWidth="2" />
      <circle cx="85" cy="230" r="4" />
      <line x1="85" y1="235" x2="85" y2="250" stroke="#10b981" strokeWidth="2" />
      
      {/* Family 2 */}
      <circle cx="170" cy="230" r="4" />
      <line x1="170" y1="235" x2="170" y2="250" stroke="#10b981" strokeWidth="2" />
      <circle cx="185" cy="230" r="4" />
      <line x1="185" y1="235" x2="185" y2="250" stroke="#10b981" strokeWidth="2" />
      
      {/* Family 3 */}
      <circle cx="270" cy="230" r="4" />
      <line x1="270" y1="235" x2="270" y2="250" stroke="#10b981" strokeWidth="2" />
      <circle cx="285" cy="230" r="4" />
      <line x1="285" y1="235" x2="285" y2="250" stroke="#10b981" strokeWidth="2" />
    </g>

    {/* Electrical symbols */}
    <g fill="#2563eb">
      <circle cx="100" cy="80" r="3" />
      <circle cx="200" cy="80" r="3" />
      <circle cx="300" cy="80" r="3" />
    </g>

    {/* Energy flow indicators */}
    <g stroke="#10b981" strokeWidth="1" fill="none">
      <path d="M 120 90 Q 140 85 160 90" markerEnd="url(#arrowhead)" />
      <path d="M 220 90 Q 240 85 260 90" markerEnd="url(#arrowhead)" />
    </g>

    {/* Arrow marker definition */}
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" 
              refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" />
      </marker>
    </defs>
  </svg>
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
            
            {/* Electrical Grid Illustration */}
            <div className="mb-8">
              <ElectricalGridIllustration />
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