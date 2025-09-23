import React from 'react'
import MiniForm from './MiniForm'

const FormSection: React.FC = () => {
  return (
    <section 
      id="form-section"
      className="py-16 lg:py-20"
      style={{ backgroundColor: '#f8fafc' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION TITLE */}
        <div className="text-center mb-12">
          <h2 
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ color: '#1f2937' }}
          >
            Commencez votre demande en 3 étapes
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: '#6b7280' }}
          >
            Remplissez notre formulaire simplifié et obtenez votre devis personnalisé en quelques minutes
          </p>
        </div>
        
        {/* FORM CONTAINER */}
        <div className="max-w-2xl mx-auto">
          <div 
            className="bg-white rounded-2xl p-8 lg:p-12"
            style={{ 
              boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
            }}
          >
            <MiniForm />
          </div>
        </div>
        
        {/* TRUST ELEMENTS BELOW FORM */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-8">
            <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white border border-gray-200">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#059669' }}></div>
              <span className="text-sm font-medium" style={{ color: '#1f2937' }}>Devis gratuit et sans engagement</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white border border-gray-200">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#059669' }}></div>
              <span className="text-sm font-medium" style={{ color: '#1f2937' }}>Réponse sous 2h en semaine</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white border border-gray-200">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#059669' }}></div>
              <span className="text-sm font-medium" style={{ color: '#1f2937' }}>Accompagnement jusqu'à la mise en service</span>
            </div>
          </div>
          
          {/* SECURITY & TRUST BADGES */}
          <div className="flex flex-wrap justify-center gap-4 text-sm" style={{ color: '#6b7280' }}>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" style={{ color: '#059669' }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 1L5 4v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V4l-5-3z" clipRule="evenodd"/>
              </svg>
              <span>Données sécurisées SSL</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" style={{ color: '#059669' }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>Conformité RGPD</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" style={{ color: '#059669' }} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>Satisfaction garantie</span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default FormSection