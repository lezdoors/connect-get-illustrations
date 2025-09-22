import React, { useState, useEffect } from 'react'
import { TYPE_RACCORDEMENT_OPTIONS } from '../types/form'
import { formatPhone } from '../utils/validation'
import { getMergedUTMParams, encodeBase64URL, storeUTMParams } from '../utils/utm'

const HeroMiniForm: React.FC = () => {
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

  // Simple validation for the 3 essential fields
  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}
    
    if (!formData.type_raccordement) {
      newErrors.type_raccordement = 'Veuillez sélectionner un type de raccordement'
    }
    
    if (!formData.code_postal) {
      newErrors.code_postal = 'Code postal requis'
    } else if (!/^\d{5}$/.test(formData.code_postal)) {
      newErrors.code_postal = 'Code postal invalide (5 chiffres)'
    }
    
    if (!formData.telephone) {
      newErrors.telephone = 'Numéro de téléphone requis'
    } else if (!/^\d{2}\s\d{2}\s\d{2}\s\d{2}\s\d{2}$/.test(formData.telephone)) {
      newErrors.telephone = 'Numéro de téléphone invalide'
    }
    
    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    const validationErrors = validateForm()
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const utmParams = getMergedUTMParams()
      
      // Prepare data for prefill in the full form
      const prefillData = {
        step1: {
          ...formData,
          source: 'hero-mini-form'
        },
        utm: utmParams
      }
      
      // Redirect to main form with prefilled data
      const prefillParam = encodeBase64URL(prefillData)
      window.location.href = `/enedis-raccordement?prefill=${prefillParam}#step=2`
      
    } catch (error) {
      console.error('Error submitting hero mini form:', error)
      setErrors({ submit: 'Erreur lors de l\'envoi. Veuillez réessayer.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.type_raccordement && 
                     formData.code_postal && 
                     formData.telephone &&
                     Object.keys(errors).length === 0

  return (
    <div className="hero-form bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      {/* Form Header */}
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Devis gratuit et immédiat
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Étape 1 sur 4
        </p>
        
        {/* Progress indicator */}
        <div className="flex justify-center space-x-2 mb-4">
          <div className="w-8 h-2 bg-blue-600 rounded-full"></div>
          <div className="w-8 h-2 bg-gray-200 rounded-full"></div>
          <div className="w-8 h-2 bg-gray-200 rounded-full"></div>
          <div className="w-8 h-2 bg-gray-200 rounded-full"></div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Type de raccordement */}
        <div>
          <label htmlFor="hero-type-raccordement" className="block text-sm font-semibold text-gray-700 mb-2">
            Type de raccordement *
          </label>
          <select
            id="hero-type-raccordement"
            name="type_raccordement"
            required
            value={formData.type_raccordement}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 font-medium min-h-[48px] touch-manipulation text-base"
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
          <label htmlFor="hero-code-postal" className="block text-sm font-semibold text-gray-700 mb-2">
            Code postal *
          </label>
          <input
            type="text"
            id="hero-code-postal"
            name="code_postal"
            required
            maxLength={5}
            value={formData.code_postal}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 font-medium min-h-[48px] touch-manipulation text-base"
            placeholder="75001"
          />
          {errors.code_postal && (
            <p className="mt-1 text-sm text-red-600">{errors.code_postal}</p>
          )}
        </div>

        {/* Téléphone */}
        <div>
          <label htmlFor="hero-telephone" className="block text-sm font-semibold text-gray-700 mb-2">
            Téléphone *
          </label>
          <input
            type="tel"
            id="hero-telephone"
            name="telephone"
            required
            value={formData.telephone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 font-medium min-h-[48px] touch-manipulation text-base"
            placeholder="06 12 34 56 78"
          />
          {errors.telephone && (
            <p className="mt-1 text-sm text-red-600">{errors.telephone}</p>
          )}
        </div>

        {/* Submit button - Mobile-optimized (minimum 44px height) */}
        <button
          type="submit"
          disabled={!isFormValid || isSubmitting}
          className={`cta-button w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 min-h-[48px] touch-manipulation ${
            isFormValid && !isSubmitting
              ? 'bg-green-600 text-white hover:bg-green-700 shadow-lg active:bg-green-800'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Envoi...
            </span>
          ) : (
            'Continuer ma demande'
          )}
        </button>

        {errors.submit && (
          <p className="mt-2 text-sm text-red-600 text-center">{errors.submit}</p>
        )}
        
        {/* Trust element */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-500 font-medium">
            ✓ Gratuit et sans engagement
          </p>
        </div>
      </form>
    </div>
  )
}

export default HeroMiniForm