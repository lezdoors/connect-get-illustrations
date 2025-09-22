import React, { useState, useEffect } from 'react'
import { TYPE_RACCORDEMENT_OPTIONS } from '../types/form'
import { formatPhone } from '../utils/validation'
import { getMergedUTMParams, encodeBase64URL, storeUTMParams } from '../utils/utm'

const MiniForm: React.FC = () => {
  const [formData, setFormData] = useState({
    type_raccordement: '',
    code_postal: '',
    telephone: ''
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
    
    // Validate form - only check the 3 essential fields
    const validationErrors: {[key: string]: string} = {}
    
    if (!formData.type_raccordement) {
      validationErrors.type_raccordement = 'Le type de raccordement est requis'
    }
    
    if (!formData.code_postal) {
      validationErrors.code_postal = 'Le code postal est requis'
    } else if (!/^\d{5}$/.test(formData.code_postal)) {
      validationErrors.code_postal = 'Code postal invalide (5 chiffres)'
    }
    
    if (!formData.telephone) {
      validationErrors.telephone = 'Le téléphone est requis'
    } else if (!/^[\d\s\-\.\+\(\)]+$/.test(formData.telephone.replace(/\s/g, ''))) {
      validationErrors.telephone = 'Numéro de téléphone invalide'
    }
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const utmParams = getMergedUTMParams()
      
      // Store data in sessionStorage for step 2 pre-population
      const prefillData = {
        step1: formData,
        utm: utmParams,
        source: 'hero-form',
        timestamp: Date.now()
      }
      
      sessionStorage.setItem('raccordement_form_data', JSON.stringify(prefillData))
      
      // Redirect to main form step 2 with prefilled data
      const prefillParam = encodeBase64URL(prefillData)
      window.location.href = `/enedis-raccordement?prefill=${prefillParam}#step=2`
      
    } catch (error) {
      console.error('Error submitting mini form:', error)
      setErrors({ submit: 'Une erreur est survenue. Veuillez réessayer.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.type_raccordement && 
                     formData.code_postal && 
                     formData.telephone &&
                     Object.keys(errors).length === 0

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
      
      {/* PROGRESS INDICATOR AT TOP */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-gray-600">Étape 1 sur 4</span>
          <span className="text-sm text-gray-500">2 minutes</span>
        </div>
        
        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '25%' }}></div>
        </div>
      </div>

      {/* FORM HEADER */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Commencez votre demande
        </h3>
        <p className="text-gray-600">
          Renseignez ces 3 informations pour continuer
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Type de raccordement */}
        <div>
          <label htmlFor="type_raccordement" className="block text-sm font-medium text-gray-700 mb-2">
            Type de raccordement *
          </label>
          <select
            id="type_raccordement"
            name="type_raccordement"
            required
            value={formData.type_raccordement}
            onChange={handleInputChange}
            className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white appearance-none"
            style={{ minHeight: '44px' }}
          >
            <option value="">Sélectionnez le type</option>
            {TYPE_RACCORDEMENT_OPTIONS.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.type_raccordement && (
            <p className="mt-2 text-sm text-red-600" role="alert">{errors.type_raccordement}</p>
          )}
        </div>

        {/* Code postal */}
        <div>
          <label htmlFor="code_postal" className="block text-sm font-medium text-gray-700 mb-2">
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
            className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            style={{ minHeight: '44px' }}
            placeholder="75001"
            inputMode="numeric"
          />
          {errors.code_postal && (
            <p className="mt-2 text-sm text-red-600" role="alert">{errors.code_postal}</p>
          )}
        </div>

        {/* Téléphone */}
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
            className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            style={{ minHeight: '44px' }}
            placeholder="06 12 34 56 78"
            inputMode="tel"
          />
          {errors.telephone && (
            <p className="mt-2 text-sm text-red-600" role="alert">{errors.telephone}</p>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={!isFormValid || isSubmitting}
          className={`w-full py-4 px-6 text-lg font-semibold rounded-lg transition-all duration-200 ${
            isFormValid && !isSubmitting
              ? 'bg-emerald-600 text-white hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300 transform hover:scale-[1.02]'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          style={{ minHeight: '44px' }}
          aria-label="Continuer vers l'étape suivante"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Traitement...
            </span>
          ) : (
            'Continuer →'
          )}
        </button>

        {errors.submit && (
          <p className="mt-3 text-sm text-red-600 text-center" role="alert">{errors.submit}</p>
        )}
      </form>

      {/* SECURITY NOTE */}
      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500">
          🔒 Vos données sont sécurisées et ne seront jamais partagées
        </p>
      </div>
    </div>
  )
}

export default MiniForm