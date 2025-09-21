import type { FormData } from '../types/form'

const STORAGE_KEY = 'monelec_raccordement_v1'

// Save form data to localStorage
export const saveFormData = (data: Partial<FormData>): void => {
  try {
    const existing = getFormData()
    const merged = { ...existing, ...data }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(merged))
  } catch (error) {
    console.warn('Failed to save form data to localStorage:', error)
  }
}

// Get form data from localStorage
export const getFormData = (): Partial<FormData> => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : {}
  } catch (error) {
    console.warn('Failed to retrieve form data from localStorage:', error)
    return {}
  }
}

// Clear form data from localStorage
export const clearFormData = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch (error) {
    console.warn('Failed to clear form data from localStorage:', error)
  }
}

// Save current step to localStorage
export const saveCurrentStep = (step: number): void => {
  try {
    localStorage.setItem(`${STORAGE_KEY}_current_step`, step.toString())
  } catch (error) {
    console.warn('Failed to save current step to localStorage:', error)
  }
}

// Get current step from localStorage
export const getCurrentStep = (): number => {
  try {
    const stored = localStorage.getItem(`${STORAGE_KEY}_current_step`)
    return stored ? parseInt(stored, 10) : 1
  } catch (error) {
    console.warn('Failed to retrieve current step from localStorage:', error)
    return 1
  }
}