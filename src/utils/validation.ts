import type { FormErrors, Step1Data, Step2Data, Step3Data, Step4Data } from '../types/form'

// Phone number validation for French numbers
export const validatePhone = (phone: string): boolean => {
  // Remove spaces and formatting
  const cleaned = phone.replace(/\s/g, '')
  
  // French mobile: 06/07 XX XX XX XX or +33 6/7 XX XX XX XX
  // French landline: 01/02/03/04/05/08/09 XX XX XX XX or +33 1/2/3/4/5/8/9 XX XX XX XX
  const frenchPhoneRegex = /^(?:(?:\+33|0)[1-9](?:[0-9]{8}))$/
  
  return frenchPhoneRegex.test(cleaned)
}

// Format phone number with mask 0X XX XX XX XX
export const formatPhone = (value: string): string => {
  // Remove all non-digits except +
  let cleaned = value.replace(/[^\d+]/g, '')
  
  // Handle +33 prefix
  if (cleaned.startsWith('+33')) {
    cleaned = '0' + cleaned.slice(3)
  }
  
  // Remove any leading zeros beyond the first
  if (cleaned.length > 1 && cleaned.startsWith('00')) {
    cleaned = '0' + cleaned.slice(2)
  }
  
  // Apply mask: 0X XX XX XX XX
  if (cleaned.length > 0) {
    const formatted = cleaned.match(/(\d{1,2})(\d{0,2})(\d{0,2})(\d{0,2})(\d{0,2})/)
    if (formatted) {
      let result = formatted[1]
      if (formatted[2]) result += ' ' + formatted[2]
      if (formatted[3]) result += ' ' + formatted[3]
      if (formatted[4]) result += ' ' + formatted[4]
      if (formatted[5]) result += ' ' + formatted[5]
      return result
    }
  }
  
  return cleaned
}

// Postal code validation (exactly 5 digits)
export const validatePostalCode = (code: string): boolean => {
  return /^\d{5}$/.test(code)
}

// Email validation (RFC compliant)
export const validateEmail = (email: string): boolean => {
  if (!email) return true // Email is optional in most cases
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Name validation (2-60 chars, letters, apostrophes, hyphens only)
export const validateName = (name: string): boolean => {
  if (name.length < 2 || name.length > 60) return false
  const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]+$/
  return nameRegex.test(name)
}

// City validation (min 2 chars)
export const validateCity = (city: string): boolean => {
  return city.length >= 2
}

// Step 1 validation
export const validateStep1 = (data: Partial<Step1Data>): FormErrors => {
  const errors: FormErrors = {}

  if (!data.type_raccordement) {
    errors.type_raccordement = 'Merci de sélectionner un type de raccordement.'
  }

  if (!data.code_postal) {
    errors.code_postal = 'Le code postal est obligatoire.'
  } else if (!validatePostalCode(data.code_postal)) {
    errors.code_postal = 'Merci d\'entrer un code postal à 5 chiffres.'
  }

  if (!data.telephone) {
    errors.telephone = 'Le numéro de téléphone est obligatoire.'
  } else if (!validatePhone(data.telephone)) {
    errors.telephone = 'Merci d\'entrer un numéro de téléphone français valide.'
  }

  return errors
}

// Step 2 validation
export const validateStep2 = (data: Partial<Step2Data>): FormErrors => {
  const errors: FormErrors = {}

  if (!data.numero_voie) {
    errors.numero_voie = 'Le numéro et la voie sont obligatoires.'
  }

  if (!data.ville) {
    errors.ville = 'La ville est obligatoire.'
  } else if (!validateCity(data.ville)) {
    errors.ville = 'La ville doit contenir au moins 2 caractères.'
  }

  if (!data.type_bien) {
    errors.type_bien = 'Merci de sélectionner un type de bien.'
  }

  if (!data.projet) {
    errors.projet = 'Merci de sélectionner un type de projet.'
  }

  if (!data.proprietaire) {
    errors.proprietaire = 'Merci d\'indiquer si vous êtes propriétaire du lieu.'
  }

  if (data.proprietaire === 'non') {
    if (!data.nom_proprietaire) {
      errors.nom_proprietaire = 'Le nom du propriétaire est obligatoire.'
    } else if (!validateName(data.nom_proprietaire)) {
      errors.nom_proprietaire = 'Le nom du propriétaire doit être valide.'
    }

    if (!data.telephone_proprietaire) {
      errors.telephone_proprietaire = 'Le téléphone du propriétaire est obligatoire.'
    } else if (!validatePhone(data.telephone_proprietaire)) {
      errors.telephone_proprietaire = 'Merci d\'entrer un numéro de téléphone français valide pour le propriétaire.'
    }
  }

  return errors
}

// Step 3 validation
export const validateStep3 = (data: Partial<Step3Data>): FormErrors => {
  const errors: FormErrors = {}

  // Personal details validation (now in Step 3)
  if (!data.nom) {
    errors.nom = 'Le nom est obligatoire.'
  } else if (!validateName(data.nom)) {
    errors.nom = 'Le nom doit contenir entre 2 et 60 caractères (lettres, apostrophes et tirets uniquement).'
  }

  if (!data.prenom) {
    errors.prenom = 'Le prénom est obligatoire.'
  } else if (!validateName(data.prenom)) {
    errors.prenom = 'Le prénom doit contenir entre 2 et 60 caractères (lettres, apostrophes et tirets uniquement).'
  }

  if (data.email && !validateEmail(data.email)) {
    errors.email = 'Merci d\'entrer une adresse email valide.'
  }

  // Technical details validation
  if (!data.puissance_demandee) {
    errors.puissance_demandee = 'Merci de sélectionner une puissance demandée.'
  }

  if (!data.type_phase) {
    errors.type_phase = 'Merci de sélectionner un type de phase.'
  }

  if (!data.acces_coffret) {
    errors.acces_coffret = 'Merci d\'indiquer l\'accès au coffret/compteur.'
  }

  if (!data.travaux_terrassement) {
    errors.travaux_terrassement = 'Merci d\'indiquer si des travaux de terrassement sont nécessaires.'
  }

  if (data.distance_reseau !== undefined && data.distance_reseau < 0) {
    errors.distance_reseau = 'La distance ne peut pas être négative.'
  }

  return errors
}

// Step 4 validation
export const validateStep4 = (data: Partial<Step4Data>): FormErrors => {
  const errors: FormErrors = {}

  if (!data.moyen_contact) {
    errors.moyen_contact = 'Merci de sélectionner un moyen de contact préféré.'
  }

  if (!data.consent_contact) {
    errors.consent_contact = 'Vous devez accepter d\'être contacté(e) pour traiter votre demande.'
  }

  if (!data.consent_rgpd) {
    errors.consent_rgpd = 'Vous devez accepter la politique de confidentialité.'
  }

  return errors
}

// Check if object has any errors
export const hasErrors = (errors: FormErrors): boolean => {
  return Object.keys(errors).length > 0
}

// Get first error field for focus management
export const getFirstErrorField = (errors: FormErrors): string | null => {
  const keys = Object.keys(errors)
  return keys.length > 0 ? keys[0] : null
}