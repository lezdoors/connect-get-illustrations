import React, { useState } from 'react'

const HeroMiniForm: React.FC = () => {
  const [formData, setFormData] = useState({
    typeRaccordement: '',
    codePostal: '',
    telephone: '',
    nom: '',
    prenom: '',
    email: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form data:', formData)
    // TODO: Save lead and redirect to /enedis-raccordement step 2
    alert('Formulaire soumis! Redirection vers le processus complet...')
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Démarrez votre demande
        </h3>
        <p className="text-sm text-gray-600">
          Complétez ce formulaire pour une première évaluation
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Type de raccordement */}
        <div>
          <label htmlFor="typeRaccordement" className="block text-sm font-medium text-gray-700 mb-1">
            Type de raccordement
          </label>
          <select
            id="typeRaccordement"
            name="typeRaccordement"
            value={formData.typeRaccordement}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            required
          >
            <option value="">Sélectionnez</option>
            <option value="definitif">Raccordement définitif</option>
            <option value="provisoire">Raccordement provisoire</option>
            <option value="collectif">Raccordement collectif</option>
            <option value="augmentation">Augmentation puissance</option>
            <option value="photovoltaique">Raccordement photovoltaïque</option>
          </select>
        </div>

        {/* Code postal */}
        <div>
          <label htmlFor="codePostal" className="block text-sm font-medium text-gray-700 mb-1">
            Code postal
          </label>
          <input
            type="text"
            id="codePostal"
            name="codePostal"
            value={formData.codePostal}
            onChange={handleChange}
            placeholder="75001"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            pattern="[0-9]{5}"
            maxLength={5}
            required
          />
        </div>

        {/* Téléphone */}
        <div>
          <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
            Téléphone
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            placeholder="06 12 34 56 78"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            required
          />
        </div>

        {/* Nom et Prénom */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
              Nom
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              placeholder="Dupont"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-1">
              Prénom
            </label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              placeholder="Jean"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="jean.dupont@email.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            required
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-primary-600 text-white font-medium py-3 px-4 rounded-md hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          Valider ma demande
        </button>

        <p className="text-xs text-gray-500 text-center mt-3">
          Vos données sont protégées et ne seront jamais partagées
        </p>
      </form>
    </div>
  )
}

export default HeroMiniForm