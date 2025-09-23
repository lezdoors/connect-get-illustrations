import React, { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { 
  TYPE_RACCORDEMENT_OPTIONS, 
  PUISSANCE_OPTIONS,
  TYPE_BIEN_OPTIONS,
  PROJET_OPTIONS,
  VOUS_ETES_OPTIONS,
  TYPE_PHASE_OPTIONS,
  MOYEN_CONTACT_OPTIONS,
  CRENEAU_OPTIONS
} from '../types/form'
import { 
  validateStep1, 
  validateStep2, 
  validateStep3, 
  validateStep4, 
  hasErrors,
  formatPhone 
} from '../utils/validation'
import { 
  saveFormData, 
  getFormData, 
  saveCurrentStep, 
  getCurrentStep,
  clearFormData 
} from '../utils/storage'
import { decodeBase64URL, getMergedUTMParams } from '../utils/utm'

const RaccordementForm: React.FC = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [leadId, setLeadId] = useState('')

  // Form data state
  const [formData, setFormData] = useState({
    step1: {
      type_raccordement: '',
      code_postal: '',
      telephone: ''
    },
    step2: {
      numero_voie: '',
      complement_adresse: '',
      ville: '',
      type_bien: '' as any,
      projet: '' as any,
      date_souhaitee: '',
      proprietaire: '' as any,
      nom_proprietaire: '',
      telephone_proprietaire: ''
    },
    step3: {
      nom: '',
      prenom: '',
      email: undefined as string | undefined,
      vous_etes: '' as any,
      puissance_demandee: '',
      type_phase: '' as any,
      distance_reseau: '' as any,
      acces_coffret: '' as any,
      travaux_terrassement: '' as any,
      telereleve_linky: '' as any,
      pieces_jointes: [] as any[]
    },
    step4: {
      moyen_contact: '' as any,
      creneau_appel: '' as any,
      consent_contact: false,
      consent_rgpd: false,
      consent_newsletter: false
    }
  })

  // Load form data on component mount
  useEffect(() => {
    // Check if coming from mini form with prefilled data
    const prefillParam = searchParams.get('prefill')
    const stepParam = searchParams.get('step')
    
    if (prefillParam) {
      const prefillData = decodeBase64URL(prefillParam)
      if (prefillData && prefillData.step1) {
        setFormData(prev => ({
          ...prev,
          step1: { ...prev.step1, ...prefillData.step1 } as any
        }))
        
        if (stepParam) {
          const step = parseInt(stepParam)
          if (step >= 1 && step <= 4) {
            setCurrentStep(step)
          }
        }
      }
    } else {
      // Load from localStorage
      const savedData = getFormData()
      if (savedData) {
        setFormData(prev => ({ ...prev, ...savedData } as any))
      }
      
      const savedStep = getCurrentStep()
      setCurrentStep(savedStep)
    }
  }, [searchParams])

  // Save data whenever formData changes
  useEffect(() => {
    saveFormData(formData)
    saveCurrentStep(currentStep)
  }, [formData, currentStep])

  const updateStepData = (step: string, data: any) => {
    setFormData(prev => ({
      ...prev,
      [step]: { ...prev[step as keyof typeof prev], ...data }
    }))
  }

  const handleInputChange = (step: string, name: string, value: any) => {
    let formattedValue = value
    
    // Format phone number
    if (name === 'telephone' || name === 'telephone_proprietaire') {
      formattedValue = formatPhone(value)
    }
    
    updateStepData(step, { [name]: formattedValue })
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateCurrentStep = () => {
    let validationErrors = {}
    
    switch (currentStep) {
      case 1:
        validationErrors = validateStep1(formData.step1)
        break
      case 2:
        validationErrors = validateStep2({
          ...formData.step2
        })
        break
      case 3:
        validationErrors = validateStep3(formData.step3)
        break
      case 4:
        validationErrors = validateStep4(formData.step4)
        break
    }
    
    setErrors(validationErrors)
    return !hasErrors(validationErrors)
  }

  const nextStep = () => {
    if (validateCurrentStep()) {
      if (currentStep < 4) {
        setCurrentStep(currentStep + 1)
      }
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const submitForm = async () => {
    if (!validateCurrentStep()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const utmParams = getMergedUTMParams()
      
      const payload = {
        source: 'main-form',
        step: 'final',
        data: formData,
        utm: utmParams,
        referrer: document.referrer,
        path: '/enedis-raccordement'
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
      
      const result = await response.json()
      
      setLeadId(result.leadId)
      setIsCompleted(true)
      clearFormData()
      
    } catch (error) {
      console.error('Error submitting form:', error)
      setErrors({ submit: 'Erreur lors de l\'envoi. Veuillez réessayer.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Progress dots component
  const ProgressDots = () => (
    <div className="flex justify-center space-x-2 mb-8">
      {[1, 2, 3, 4].map(step => (
        <div
          key={step}
          className={`w-3 h-3 rounded-full ${
            step <= currentStep ? 'bg-blue-600' : 'bg-gray-300'
          }`}
        />
      ))}
    </div>
  )

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Merci, votre demande a bien été envoyée
            </h1>
            
            <p className="text-lg text-gray-600 mb-6">
              Un expert vous contacte sous 2h (6j/7)
            </p>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-600">Référence:</p>
              <p className="text-lg font-mono font-bold text-gray-900">{leadId}</p>
            </div>
            
            <div className="space-y-4">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors">
                Télécharger le récapitulatif
              </button>
              <button 
                onClick={() => navigate('/')}
                className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-6 rounded-lg font-medium transition-colors"
              >
                Retour à l'accueil
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Complétez votre demande
        </h1>
        
        <ProgressDots />
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          {currentStep === 1 && (
            <Step1Form
              data={formData.step1}
              errors={errors}
              onChange={(name, value) => handleInputChange('step1', name, value)}
              isPrefilled={!!searchParams.get('prefill')}
            />
          )}
          
          {currentStep === 2 && (
            <Step2Form
              data={formData.step2}
              codePostal={formData.step1.code_postal}
              errors={errors}
              onChange={(name, value) => handleInputChange('step2', name, value)}
            />
          )}
          
          {currentStep === 3 && (
            <Step3Form
              data={formData.step3}
              errors={errors}
              onChange={(name, value) => handleInputChange('step3', name, value)}
            />
          )}
          
          {currentStep === 4 && (
            <Step4Form
              data={formData.step4}
              errors={errors}
              formSummary={formData}
              onChange={(name, value) => handleInputChange('step4', name, value)}
              onSubmit={submitForm}
              isSubmitting={isSubmitting}
            />
          )}
          
          {/* Navigation buttons */}
          {currentStep < 4 && (
            <div className="flex justify-between mt-8">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`py-3 px-6 rounded-lg font-medium transition-colors ${
                  currentStep === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Retour
              </button>
              
              <button
                onClick={nextStep}
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
              >
                Suivant →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Step 1 Component
const Step1Form: React.FC<{data: any, errors: any, onChange: (name: string, value: any) => void, isPrefilled: boolean}> = ({ data, errors, onChange, isPrefilled }) => (
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-6">
      Informations de base
    </h2>
    
    {isPrefilled && (
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <p className="text-blue-700 text-sm">
          Vos informations ont été préremplies. Vous pouvez les modifier si nécessaire.
        </p>
      </div>
    )}
    
    <div className="grid md:grid-cols-2 gap-6">
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Type de raccordement *
        </label>
        <select
          value={data.type_raccordement}
          onChange={(e) => onChange('type_raccordement', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
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

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Code postal *
        </label>
        <input
          type="text"
          maxLength={5}
          value={data.code_postal}
          onChange={(e) => onChange('code_postal', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="75001"
        />
        {errors.code_postal && (
          <p className="mt-1 text-sm text-red-600">{errors.code_postal}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Téléphone *
        </label>
        <input
          type="tel"
          value={data.telephone}
          onChange={(e) => onChange('telephone', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="06 12 34 56 78"
        />
        {errors.telephone && (
          <p className="mt-1 text-sm text-red-600">{errors.telephone}</p>
        )}
      </div>
    </div>
  </div>
)

// Step 2 Component
const Step2Form: React.FC<{data: any, codePostal: string, errors: any, onChange: (name: string, value: any) => void}> = ({ data, codePostal, errors, onChange }) => (
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-6">
      Adresse & détails du projet
    </h2>
    
    <div className="space-y-6">
      {/* Address */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Adresse complète</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              N° et voie *
            </label>
            <input
              type="text"
              value={data.numero_voie}
              onChange={(e) => onChange('numero_voie', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="123 rue de la République"
            />
            {errors.numero_voie && (
              <p className="mt-1 text-sm text-red-600">{errors.numero_voie}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Complément (optionnel)
            </label>
            <input
              type="text"
              value={data.complement_adresse}
              onChange={(e) => onChange('complement_adresse', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Apt 2, Bât A"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ville *
            </label>
            <input
              type="text"
              value={data.ville}
              onChange={(e) => onChange('ville', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            {errors.ville && (
              <p className="mt-1 text-sm text-red-600">{errors.ville}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Code postal *
            </label>
            <input
              type="text"
              value={codePostal}
              readOnly
              className="w-full px-3 py-2 border border-gray-300 bg-gray-50 rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Project details */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Type de bien *
          </label>
          <select
            value={data.type_bien}
            onChange={(e) => onChange('type_bien', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Sélectionnez</option>
            {TYPE_BIEN_OPTIONS.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.type_bien && (
            <p className="mt-1 text-sm text-red-600">{errors.type_bien}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Projet *
          </label>
          <select
            value={data.projet}
            onChange={(e) => onChange('projet', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Sélectionnez</option>
            {PROJET_OPTIONS.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.projet && (
            <p className="mt-1 text-sm text-red-600">{errors.projet}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Date souhaitée de mise en service (optionnel)
        </label>
        <input
          type="date"
          value={data.date_souhaitee}
          onChange={(e) => onChange('date_souhaitee', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Owner info */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Propriétaire du lieu *
        </label>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="proprietaire"
              value="oui"
              checked={data.proprietaire === 'oui'}
              onChange={(e) => onChange('proprietaire', e.target.value)}
              className="mr-2"
            />
            Oui
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="proprietaire"
              value="non"
              checked={data.proprietaire === 'non'}
              onChange={(e) => onChange('proprietaire', e.target.value)}
              className="mr-2"
            />
            Non
          </label>
        </div>
        {errors.proprietaire && (
          <p className="mt-1 text-sm text-red-600">{errors.proprietaire}</p>
        )}
      </div>

      {data.proprietaire === 'non' && (
        <div className="grid md:grid-cols-2 gap-6 p-4 bg-gray-50 rounded-lg">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom du propriétaire *
            </label>
            <input
              type="text"
              value={data.nom_proprietaire}
              onChange={(e) => onChange('nom_proprietaire', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            {errors.nom_proprietaire && (
              <p className="mt-1 text-sm text-red-600">{errors.nom_proprietaire}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Téléphone du propriétaire *
            </label>
            <input
              type="tel"
              value={data.telephone_proprietaire}
              onChange={(e) => onChange('telephone_proprietaire', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            {errors.telephone_proprietaire && (
              <p className="mt-1 text-sm text-red-600">{errors.telephone_proprietaire}</p>
            )}
          </div>
        </div>
      )}
    </div>
  </div>
)

// Step 3 Component  
const Step3Form: React.FC<{data: any, errors: any, onChange: (name: string, value: any) => void}> = ({ data, errors, onChange }) => (
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-6">
      Informations personnelles & détails techniques
    </h2>
    
    <div className="space-y-6">
      {/* Personal Information Section */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Vos coordonnées</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom *
            </label>
            <input
              type="text"
              value={data.nom}
              onChange={(e) => onChange('nom', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            {errors.nom && (
              <p className="mt-1 text-sm text-red-600">{errors.nom}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Prénom *
            </label>
            <input
              type="text"
              value={data.prenom}
              onChange={(e) => onChange('prenom', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            {errors.prenom && (
              <p className="mt-1 text-sm text-red-600">{errors.prenom}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email (optionnel)
            </label>
            <input
              type="email"
              value={data.email}
              onChange={(e) => onChange('email', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Vous êtes (optionnel)
          </label>
          <select
            value={data.vous_etes}
            onChange={(e) => onChange('vous_etes', e.target.value)}
            className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Sélectionnez</option>
            {VOUS_ETES_OPTIONS.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Technical Details Section */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Détails techniques</h3>
        <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Puissance demandée (kVA) *
          </label>
          <select
            value={data.puissance_demandee}
            onChange={(e) => onChange('puissance_demandee', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Sélectionnez</option>
            {PUISSANCE_OPTIONS.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.puissance_demandee && (
            <p className="mt-1 text-sm text-red-600">{errors.puissance_demandee}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Type de phase *
          </label>
          <select
            value={data.type_phase}
            onChange={(e) => onChange('type_phase', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Sélectionnez</option>
            {TYPE_PHASE_OPTIONS.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.type_phase && (
            <p className="mt-1 text-sm text-red-600">{errors.type_phase}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Distance estimée au réseau (m) - optionnel
        </label>
        <input
          type="number"
          min="0"
          value={data.distance_reseau}
          onChange={(e) => onChange('distance_reseau', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="50"
        />
        {errors.distance_reseau && (
          <p className="mt-1 text-sm text-red-600">{errors.distance_reseau}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Accès au coffret / compteur *
        </label>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="acces_coffret"
              value="oui"
              checked={data.acces_coffret === 'oui'}
              onChange={(e) => onChange('acces_coffret', e.target.value)}
              className="mr-2"
            />
            Oui
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="acces_coffret"
              value="non"
              checked={data.acces_coffret === 'non'}
              onChange={(e) => onChange('acces_coffret', e.target.value)}
              className="mr-2"
            />
            Non
          </label>
        </div>
        {errors.acces_coffret && (
          <p className="mt-1 text-sm text-red-600">{errors.acces_coffret}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Travaux de terrassement nécessaires ? *
        </label>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="travaux_terrassement"
              value="oui"
              checked={data.travaux_terrassement === 'oui'}
              onChange={(e) => onChange('travaux_terrassement', e.target.value)}
              className="mr-2"
            />
            Oui
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="travaux_terrassement"
              value="non"
              checked={data.travaux_terrassement === 'non'}
              onChange={(e) => onChange('travaux_terrassement', e.target.value)}
              className="mr-2"
            />
            Non
          </label>
        </div>
        {errors.travaux_terrassement && (
          <p className="mt-1 text-sm text-red-600">{errors.travaux_terrassement}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Télérelève Linky (optionnel)
        </label>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="telereleve_linky"
              value="oui"
              checked={data.telereleve_linky === 'oui'}
              onChange={(e) => onChange('telereleve_linky', e.target.value)}
              className="mr-2"
            />
            Oui
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="telereleve_linky"
              value="non"
              checked={data.telereleve_linky === 'non'}
              onChange={(e) => onChange('telereleve_linky', e.target.value)}
              className="mr-2"
            />
            Non
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="telereleve_linky"
              value="ne_sais_pas"
              checked={data.telereleve_linky === 'ne_sais_pas'}
              onChange={(e) => onChange('telereleve_linky', e.target.value)}
              className="mr-2"
            />
            Je ne sais pas
          </label>
        </div>
      </div>
      </div>

      {/* File upload placeholder */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Pièces jointes (optionnel)
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <p className="text-gray-500">
            Glissez-déposez vos fichiers ici ou <span className="text-blue-600 cursor-pointer">parcourez</span>
          </p>
          <p className="text-sm text-gray-400 mt-2">
            PDF, JPG, PNG (max 10 Mo par fichier)
          </p>
        </div>
      </div>
    </div>
  </div>
)

// Step 4 Component
const Step4Form: React.FC<{data: any, errors: any, formSummary: any, onChange: (name: string, value: any) => void, onSubmit: () => void, isSubmitting: boolean}> = ({ data, errors, formSummary, onChange, onSubmit, isSubmitting }) => (
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-6">
      Récapitulatif & envoi
    </h2>
    
    <div className="space-y-6">
      {/* Summary */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Récapitulatif de votre demande</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium text-gray-700">Type:</span> 
            <span className="ml-2">{TYPE_RACCORDEMENT_OPTIONS.find(o => o.value === formSummary.step1.type_raccordement)?.label}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700">Nom:</span> 
            <span className="ml-2">{formSummary.step3.prenom} {formSummary.step3.nom}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700">Adresse:</span> 
            <span className="ml-2">{formSummary.step2.numero_voie}, {formSummary.step2.ville} {formSummary.step1.code_postal}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700">Puissance:</span> 
            <span className="ml-2">{formSummary.step3.puissance_demandee} kVA</span>
          </div>
        </div>
      </div>

      {/* Contact preferences */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Moyen de contact préféré *
          </label>
          <select
            value={data.moyen_contact}
            onChange={(e) => onChange('moyen_contact', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Sélectionnez</option>
            {MOYEN_CONTACT_OPTIONS.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.moyen_contact && (
            <p className="mt-1 text-sm text-red-600">{errors.moyen_contact}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Créneau d'appel souhaité (optionnel)
          </label>
          <select
            value={data.creneau_appel}
            onChange={(e) => onChange('creneau_appel', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Sélectionnez</option>
            {CRENEAU_OPTIONS.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Consents */}
      <div className="space-y-4">
        <div className="flex items-start">
          <input
            type="checkbox"
            id="consent_contact"
            checked={data.consent_contact}
            onChange={(e) => onChange('consent_contact', e.target.checked)}
            className="mt-1 mr-3"
          />
          <label htmlFor="consent_contact" className="text-sm text-gray-700">
            J'accepte d'être contacté(e) à propos de ma demande. *
          </label>
        </div>
        {errors.consent_contact && (
          <p className="text-sm text-red-600">{errors.consent_contact}</p>
        )}

        <div className="flex items-start">
          <input
            type="checkbox"
            id="consent_rgpd"
            checked={data.consent_rgpd}
            onChange={(e) => onChange('consent_rgpd', e.target.checked)}
            className="mt-1 mr-3"
          />
          <label htmlFor="consent_rgpd" className="text-sm text-gray-700">
            J'accepte la <a href="/confidentialite" className="text-blue-600 hover:underline">politique de confidentialité</a> (RGPD). *
          </label>
        </div>
        {errors.consent_rgpd && (
          <p className="text-sm text-red-600">{errors.consent_rgpd}</p>
        )}

        <div className="flex items-start">
          <input
            type="checkbox"
            id="consent_newsletter"
            checked={data.consent_newsletter}
            onChange={(e) => onChange('consent_newsletter', e.target.checked)}
            className="mt-1 mr-3"
          />
          <label htmlFor="consent_newsletter" className="text-sm text-gray-700">
            Je souhaite recevoir des informations utiles par email (optionnel).
          </label>
        </div>
      </div>

      {/* Submit button */}
      <div className="flex justify-center pt-6">
        <button
          onClick={onSubmit}
          disabled={isSubmitting}
          className={`px-8 py-4 rounded-lg font-medium text-lg transition-colors ${
            isSubmitting
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-green-600 hover:bg-green-700 text-white'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Envoi en cours...
            </span>
          ) : (
            'Envoyer ma demande'
          )}
        </button>
      </div>

      {errors.submit && (
        <p className="text-sm text-red-600 text-center">{errors.submit}</p>
      )}
    </div>
  </div>
)

export default RaccordementForm