import type { UTMParams } from '../types/form'

// Extract UTM parameters from URL
export const extractUTMParams = (): UTMParams => {
  const urlParams = new URLSearchParams(window.location.search)
  
  return {
    utm_source: urlParams.get('utm_source') || undefined,
    utm_medium: urlParams.get('utm_medium') || undefined,
    utm_campaign: urlParams.get('utm_campaign') || undefined,
    utm_term: urlParams.get('utm_term') || undefined,
    utm_content: urlParams.get('utm_content') || undefined,
    referrer: document.referrer || undefined,
    path: window.location.pathname
  }
}

// Build UTM query string
export const buildUTMString = (utm: UTMParams): string => {
  const params = new URLSearchParams()
  
  Object.entries(utm).forEach(([key, value]) => {
    if (value) {
      params.set(key, value)
    }
  })
  
  return params.toString()
}

// Store UTM params in localStorage
export const storeUTMParams = (utm: UTMParams): void => {
  localStorage.setItem('monelec_utm_params', JSON.stringify(utm))
}

// Retrieve UTM params from localStorage
export const getStoredUTMParams = (): UTMParams => {
  try {
    const stored = localStorage.getItem('monelec_utm_params')
    return stored ? JSON.parse(stored) : {}
  } catch {
    return {}
  }
}

// Merge current URL UTM with stored UTM (current takes priority)
export const getMergedUTMParams = (): UTMParams => {
  const storedUTM = getStoredUTMParams()
  const currentUTM = extractUTMParams()
  
  return { ...storedUTM, ...currentUTM }
}

// Base64 URL-safe encoding
export const encodeBase64URL = (data: any): string => {
  return btoa(JSON.stringify(data))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '')
}

// Base64 URL-safe decoding
export const decodeBase64URL = (encoded: string): any => {
  try {
    // Add padding if needed
    let padded = encoded
    while (padded.length % 4) {
      padded += '='
    }
    
    // Replace URL-safe characters
    const base64 = padded.replace(/-/g, '+').replace(/_/g, '/')
    
    return JSON.parse(atob(base64))
  } catch {
    return null
  }
}