// Shared form types and interfaces
export interface UTMParams {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
  referrer?: string
  path?: string
}

export interface Step1Data {
  type_raccordement: string
  code_postal: string
  telephone: string
}

export interface Step2Data {
  numero_voie: string
  complement_adresse?: string
  ville: string
  type_bien: 'maison' | 'appartement' | 'local_commercial' | 'terrain_nu' | 'autre'
  projet: 'neuf' | 'renovation' | 'temporaire'
  date_souhaitee?: string
  proprietaire: 'oui' | 'non'
  nom_proprietaire?: string
  telephone_proprietaire?: string
}

export interface Step3Data {
  nom: string
  prenom: string
  email?: string
  vous_etes?: 'particulier' | 'professionnel'
  puissance_demandee: string
  type_phase: 'monophase' | 'triphase'
  distance_reseau?: number
  acces_coffret: 'oui' | 'non'
  travaux_terrassement: 'oui' | 'non'
  telereleve_linky?: 'oui' | 'non' | 'ne_sais_pas'
  pieces_jointes?: FileData[]
}

export interface Step4Data {
  moyen_contact: 'telephone' | 'email' | 'whatsapp'
  creneau_appel?: 'matin' | 'apres_midi' | 'soir' | 'indifferent'
  consent_contact: boolean
  consent_rgpd: boolean
  consent_newsletter?: boolean
}

export interface FileData {
  name: string
  size: number
  type: string
  url: string
}

export interface FormData {
  step1: Step1Data
  step2?: Step2Data
  step3?: Step3Data
  step4?: Step4Data
}

export interface LeadPayload {
  source: 'mini-form' | 'main-form'
  step: number | 'final'
  type_raccordement?: string
  code_postal?: string
  telephone?: string
  nom?: string
  prenom?: string
  email?: string
  vous_etes?: string
  data?: FormData
  utm: UTMParams
  referrer?: string
  path: string
  timestamp?: string
  ip_address?: string
}

export interface ValidationError {
  field: string
  message: string
}

export interface FormErrors {
  [key: string]: string
}

// Form options constants
export const TYPE_RACCORDEMENT_OPTIONS = [
  { value: 'definitif', label: 'Raccordement définitif' },
  { value: 'provisoire', label: 'Raccordement provisoire' },
  { value: 'collectif', label: 'Raccordement collectif' },
  { value: 'viabilisation', label: 'Viabilisation terrain' },
  { value: 'augmentation', label: 'Augmentation puissance' },
  { value: 'photovoltaique', label: 'Raccordement photovoltaïque' }
]

export const PUISSANCE_OPTIONS = [
  { value: '3', label: '3 kVA' },
  { value: '6', label: '6 kVA' },
  { value: '9', label: '9 kVA' },
  { value: '12', label: '12 kVA' },
  { value: '15', label: '15 kVA' },
  { value: '18', label: '18 kVA' },
  { value: '24', label: '24 kVA' },
  { value: '36', label: '36 kVA' }
]

export const TYPE_BIEN_OPTIONS = [
  { value: 'maison', label: 'Maison individuelle' },
  { value: 'appartement', label: 'Appartement' },
  { value: 'local_commercial', label: 'Local commercial' },
  { value: 'terrain_nu', label: 'Terrain nu' },
  { value: 'autre', label: 'Autre' }
]

export const PROJET_OPTIONS = [
  { value: 'neuf', label: 'Neuf' },
  { value: 'renovation', label: 'Rénovation' },
  { value: 'temporaire', label: 'Événement/chantier temporaire' }
]

export const VOUS_ETES_OPTIONS = [
  { value: 'particulier', label: 'Particulier' },
  { value: 'professionnel', label: 'Professionnel' }
]

export const TYPE_PHASE_OPTIONS = [
  { value: 'monophase', label: 'Monophasé' },
  { value: 'triphase', label: 'Triphasé' }
]

export const MOYEN_CONTACT_OPTIONS = [
  { value: 'telephone', label: 'Téléphone' },
  { value: 'email', label: 'Email' },
  { value: 'whatsapp', label: 'WhatsApp' }
]

export const CRENEAU_OPTIONS = [
  { value: 'matin', label: 'Matin' },
  { value: 'apres_midi', label: 'Après-midi' },
  { value: 'soir', label: 'Soir' },
  { value: 'indifferent', label: 'Indifférent' }
]