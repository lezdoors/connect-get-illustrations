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
    <div className="p-0">
      
      {/* CLEAN PROGRESS */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span 
            className="text-sm font-medium"
            style={{ color: '#6b7280' }}
          >
            Étape 1 sur 4
          </span>
          <span 
            className="text-sm"
            style={{ color: '#9ca3af' }}
          >
            2 minutes
          </span>
        </div>
        
        {/* Clean progress bar */}
        <div 
          className="w-full h-1 rounded-full"
          style={{ backgroundColor: '#f3f4f6' }}
        >
          <div 
            className="h-1 rounded-full transition-all duration-300"
            style={{ 
              width: '25%',
              backgroundColor: '#374151'
            }}
          ></div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Type de raccordement */}
        <div className="group">
          <label 
            htmlFor="type_raccordement" 
            className="block text-sm font-medium mb-2"
            style={{ color: '#374151' }}
          >
            Type de raccordement
          </label>
          <select
            id="type_raccordement"
            name="type_raccordement"
            required
            value={formData.type_raccordement}
            onChange={handleInputChange}
            className="w-full px-3 py-3 text-base bg-white appearance-none transition-colors duration-200"
            style={{ 
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              color: '#1f2937'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#374151'
              e.target.style.outline = 'none'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#d1d5db'
            }}
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
          <label 
            htmlFor="code_postal" 
            className="block text-sm font-medium mb-2"
            style={{ color: '#374151' }}
          >
            Code postal
          </label>
          <input
            type="text"
            id="code_postal"
            name="code_postal"
            required
            maxLength={5}
            value={formData.code_postal}
            onChange={handleInputChange}
            className="w-full px-3 py-3 text-base transition-colors duration-200"
            style={{ 
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              color: '#1f2937'
            }}
            placeholder="75001"
            inputMode="numeric"
            onFocus={(e) => {
              e.target.style.borderColor = '#374151'
              e.target.style.outline = 'none'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#d1d5db'
            }}
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
          <label 
            htmlFor="telephone" 
            className="block text-sm font-medium mb-2"
            style={{ color: '#374151' }}
          >
            Téléphone
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            required
            value={formData.telephone}
            onChange={handleInputChange}
            className="w-full px-3 py-3 text-base transition-colors duration-200"
            style={{ 
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              color: '#1f2937'
            }}
            placeholder="06 12 34 56 78"
            inputMode="tel"
            onFocus={(e) => {
              e.target.style.borderColor = '#374151'
              e.target.style.outline = 'none'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#d1d5db'
            }}
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
          className="w-full py-3 px-6 text-base font-medium transition-colors duration-200"
          style={{ 
            backgroundColor: isFormValid && !isSubmitting ? '#374151' : '#e5e7eb',
            color: isFormValid && !isSubmitting ? '#ffffff' : '#9ca3af',
            borderRadius: '6px',
            border: 'none'
          }}
          onMouseEnter={(e) => {
            if (isFormValid && !isSubmitting) {
              e.currentTarget.style.backgroundColor = '#1f2937'
            }
          }}
          onMouseLeave={(e) => {
            if (isFormValid && !isSubmitting) {
              e.currentTarget.style.backgroundColor = '#374151'
            }
          }}
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


    </div>
  )
}

export default MiniForm