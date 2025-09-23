import React from 'react'
import MiniForm from './MiniForm'

const FormSection: React.FC = () => {
  return (
    <section 
      id="form-section"
      className="py-20"
      style={{ backgroundColor: '#fafafa' }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* CLEAN SECTION TITLE */}
        <div className="text-center mb-16">
          <h2 
            className="text-2xl font-medium mb-4"
            style={{ 
              color: '#1f2937',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
            }}
          >
            Demande d'accompagnement
          </h2>
          <p 
            className="text-base max-w-lg mx-auto"
            style={{ color: '#6b7280' }}
          >
            Renseignez vos informations pour débuter votre projet
          </p>
        </div>
        
        {/* CLEAN FORM CONTAINER */}
        <div className="max-w-md mx-auto">
          <div 
            className="bg-white p-8"
            style={{ 
              border: '1px solid #e5e7eb',
              borderRadius: '8px'
            }}
          >
            <MiniForm />
          </div>
        </div>
        
        {/* MINIMAL TRUST LINE */}
        <div className="mt-8 text-center">
          <p 
            className="text-sm"
            style={{ color: '#9ca3af' }}
          >
            Traitement confidentiel • Réponse sous 24h • Sans engagement
          </p>
        </div>
        
      </div>
    </section>
  )
}

export default FormSection