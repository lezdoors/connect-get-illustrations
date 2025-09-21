import React, { useState, useEffect } from 'react'
import { TYPE_RACCORDEMENT_OPTIONS } from '../types/form'
import { validateStep1, hasErrors } from '../utils/validation'
import { formatPhone } from '../utils/validation'
import { getMergedUTMParams, encodeBase64URL, storeUTMParams } from '../utils/utm'

const MiniForm: React.FC = () => {
  const [formData, setFormData] = useState({
    type_raccordement: '',
    code_postal: '',
    telephone: '',
    nom: '',
    prenom: '',
    email: ''
  })
  
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Store UTM params on component mount
  useEffect(() => {
    const utmParams = getMergedUTMParams()
    storeUTMParams(utmParams)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    
    let formattedValue = value
    
    // Format phone number
    if (name === 'telephone') {
      formattedValue = formatPhone(value)
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    const validationErrors = validateStep1(formData)
    
    if (hasErrors(validationErrors)) {
      setErrors(validationErrors)
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const utmParams = getMergedUTMParams()
      
      const payload = {
        source: 'mini-form',
        step: 1,
        ...formData,
        utm: utmParams,
        referrer: document.referrer,
        path: window.location.pathname
      }
      
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })
      
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      
      await response.json()
      
      // Prepare data for prefill
      const prefillData = {
        step1: formData,
        utm: utmParams
      }
      
      // Redirect to main form step 2 with prefilled data
      const prefillParam = encodeBase64URL(prefillData)
      window.location.href = `/enedis-raccordement?prefill=${prefillParam}#step=2`
      
    } catch (error) {
      console.error('Error submitting mini form:', error)
      setErrors({ submit: 'Erreur lors de l\'envoi. Veuillez réessayer.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.type_raccordement && 
                     formData.code_postal && 
                     formData.telephone && 
                     formData.nom && 
                     formData.prenom &&
                     !hasErrors(errors)

  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Devis gratuit et immédiat
        </h3>
        <p className="text-sm text-gray-600 mb-3">
          Votre demande en 4 étapes
        </p>
        
        {/* Progress dots */}
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Type de raccordement */}
        <div>
          <label htmlFor="type_raccordement" className="block text-sm font-medium text-gray-700 mb-1">
            Type de raccordement *
          </label>
          <select
            id="type_raccordement"
            name="type_raccordement"
            required
            value={formData.type_raccordement}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Sélectionnez le type</option>
            {TYPE_RACCORDEMENT_OPTIONS.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.type_raccordement && (
            <p className="mt-1 text-sm text-red-600">{errors.type_raccordement}</p>
          )}
        </div>

        {/* Code postal */}
        <div>
          <label htmlFor="code_postal" className="block text-sm font-medium text-gray-700 mb-1">
            Code postal *
          </label>
          <input
            type="text"
            id="code_postal"
            name="code_postal"
            required
            maxLength={5}
            value={formData.code_postal}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="75001"
          />
          {errors.code_postal && (
            <p className="mt-1 text-sm text-red-600">{errors.code_postal}</p>
          )}
        </div>

        {/* Téléphone */}
        <div>
          <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
            Téléphone *
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            required
            value={formData.telephone}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="06 12 34 56 78"
          />
          {errors.telephone && (
            <p className="mt-1 text-sm text-red-600">{errors.telephone}</p>
          )}
        </div>

        {/* Nom */}
        <div>
          <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
            Nom *
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            required
            value={formData.nom}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Dupont"
          />
          {errors.nom && (
            <p className="mt-1 text-sm text-red-600">{errors.nom}</p>
          )}
        </div>

        {/* Prénom */}
        <div>
          <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-1">
            Prénom *
          </label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            required
            value={formData.prenom}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Jean"
          />
          {errors.prenom && (
            <p className="mt-1 text-sm text-red-600">{errors.prenom}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email (optionnel)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="jean.dupont@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={!isFormValid || isSubmitting}
          className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
            isFormValid && !isSubmitting
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Envoi...
            </span>
          ) : (
            'Suivant →'
          )}
        </button>

        {errors.submit && (
          <p className="mt-2 text-sm text-red-600 text-center">{errors.submit}</p>
        )}
      </form>
    </div>
  )
}

export default MiniForm