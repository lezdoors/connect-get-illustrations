import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { TYPE_RACCORDEMENT_OPTIONS } from '../types/form'
import { formatPhone } from '../utils/validation'
import { getMergedUTMParams, encodeBase64URL, storeUTMParams } from '../utils/utm'

const MiniForm: React.FC = () => {
  const navigate = useNavigate()
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
      
      // Use React Router navigation for Vercel compatibility
      const prefillParam = encodeBase64URL(prefillData)
      navigate(`/enedis-raccordement?prefill=${prefillParam}&step=2`)
      
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
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 sm:p-6 lg:p-7 transform hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] relative z-10 mx-2 sm:mx-0"
         style={{ 
           boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.8)',
           backdropFilter: 'blur(8px)'
         }}>
      
      {/* ENHANCED PROGRESS INDICATOR */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full">Étape 1 sur 4</span>
          <span className="text-sm font-medium text-emerald-600 flex items-center space-x-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span>2 minutes</span>
          </span>
        </div>
        
        {/* Enhanced Progress bar */}
        <div className="relative w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
          <div 
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-3 rounded-full shadow-sm transition-all duration-500 ease-out"
            style={{ width: '25%' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 -skew-x-12 animate-pulse"></div>
          </div>
        </div>
        
        {/* Progress labels */}
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          <span className="font-medium text-emerald-600">Informations</span>
          <span>Adresse</span>
          <span>Détails</span>
          <span>Validation</span>
        </div>
      </div>

      {/* FORM HEADER */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Commencez votre demande
        </h3>
        <p className="text-gray-600">
          Renseignez ces 3 informations pour continuer
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Type de raccordement */}
        <div className="group">
          <label htmlFor="type_raccordement" className="block text-sm font-semibold text-gray-700 mb-3 group-focus-within:text-emerald-600 transition-colors">
            Type de raccordement *
          </label>
          <select
            id="type_raccordement"
            name="type_raccordement"
            required
            value={formData.type_raccordement}
            onChange={handleInputChange}
            className="w-full px-4 py-4 text-base border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 bg-white appearance-none hover:border-gray-400 transition-all duration-200 shadow-sm touch-manipulation"
            style={{ minHeight: '52px' }}
          >
            <option value="">Sélectionnez le type</option>
            {TYPE_RACCORDEMENT_OPTIONS.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.type_raccordement && (
            <p className="mt-2 text-sm text-red-600 flex items-center" role="alert">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.type_raccordement}
            </p>
          )}
        </div>

        {/* Code postal */}
        <div className="group">
          <label htmlFor="code_postal" className="block text-sm font-semibold text-gray-700 mb-3 group-focus-within:text-emerald-600 transition-colors">
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
            className="w-full px-4 py-4 text-base border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 hover:border-gray-400 transition-all duration-200 shadow-sm"
            style={{ minHeight: '52px' }}
            placeholder="75001"
            inputMode="numeric"
          />
          {errors.code_postal && (
            <p className="mt-2 text-sm text-red-600 flex items-center" role="alert">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.code_postal}
            </p>
          )}
        </div>

        {/* Téléphone */}
        <div className="group">
          <label htmlFor="telephone" className="block text-sm font-semibold text-gray-700 mb-3 group-focus-within:text-emerald-600 transition-colors">
            Téléphone *
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            required
            value={formData.telephone}
            onChange={handleInputChange}
            className="w-full px-4 py-4 text-base border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 hover:border-gray-400 transition-all duration-200 shadow-sm"
            style={{ minHeight: '52px' }}
            placeholder="06 12 34 56 78"
            inputMode="tel"
          />
          {errors.telephone && (
            <p className="mt-2 text-sm text-red-600 flex items-center" role="alert">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.telephone}
            </p>
          )}
        </div>

        {/* Enhanced Submit button */}
        <button
          type="submit"
          disabled={!isFormValid || isSubmitting}
          className={`w-full py-5 px-8 text-lg font-bold rounded-2xl transition-all duration-300 shadow-lg relative overflow-hidden ${
            isFormValid && !isSubmitting
              ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-200 transform hover:scale-[1.03] hover:shadow-xl active:scale-[0.98]'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          style={{ minHeight: '52px' }}
          aria-label="Continuer vers l'étape suivante"
        >
          {/* Button shine effect */}
          {isFormValid && !isSubmitting && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 -skew-x-12 animate-pulse"></div>
          )}
          
          <span className="relative z-10">
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Traitement en cours...
              </span>
            ) : (
              <span className="flex items-center justify-center space-x-2">
                <span>Continuer</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            )}
          </span>
        </button>

        {errors.submit && (
          <p className="mt-3 text-sm text-red-600 text-center" role="alert">{errors.submit}</p>
        )}
      </form>

      {/* ENHANCED SECURITY NOTE */}
      <div className="mt-6 text-center">
        <div className="flex items-center justify-center space-x-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
          <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          <p className="text-xs font-medium text-gray-600">
            Vos données sont sécurisées et ne seront jamais partagées
          </p>
        </div>
      </div>
    </div>
  )
}

export default MiniForm