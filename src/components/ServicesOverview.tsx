import React from 'react'

// Service illustrations based on the provided images
const ResidentialIllustration: React.FC = () => (
  <div className="w-full max-w-xs mx-auto">
    <svg viewBox="0 0 200 200" className="w-full h-auto">
      <rect width="200" height="200" fill="#f8fafc" />
      
      {/* House */}
      <g stroke="#334155" strokeWidth="2.5" fill="#ffffff">
        <rect x="60" y="120" width="80" height="60" />
        <path d="M50 120 L100 80 L150 120 Z" fill="#64748b" />
        
        {/* Door */}
        <rect x="75" y="150" width="20" height="30" fill="#f1f5f9" />
        <circle cx="92" cy="165" r="1.5" fill="#334155" />
        
        {/* Windows */}
        <rect x="105" y="135" width="20" height="20" fill="#bfdbfe" />
        <line x1="115" y1="135" x2="115" y2="155" stroke="#64748b" strokeWidth="1" />
        <line x1="105" y1="145" x2="125" y2="145" stroke="#64748b" strokeWidth="1" />
      </g>
      
      {/* Electric car */}
      <ellipse cx="40" cy="170" rx="25" ry="12" fill="#ffffff" stroke="#334155" strokeWidth="2" />
      <rect x="20" y="162" width="40" height="12" fill="#e2e8f0" rx="4" />
      <circle cx="30" cy="175" r="5" fill="#64748b" />
      <circle cx="50" cy="175" r="5" fill="#64748b" />
      
      {/* Charging cable */}
      <path d="M65 165 Q75 160 85 165" stroke="#10b981" strokeWidth="2" fill="none" />
      
      {/* Solar panels on roof */}
      <g fill="#10b981" stroke="#059669" strokeWidth="1">
        <rect x="80" y="95" width="12" height="8" />
        <rect x="95" y="95" width="12" height="8" />
        <rect x="110" y="95" width="12" height="8" />
      </g>
    </svg>
  </div>
)

const SolarIllustration: React.FC = () => (
  <div className="w-full max-w-xs mx-auto">
    <svg viewBox="0 0 200 200" className="w-full h-auto">
      <rect width="200" height="200" fill="#f8fafc" />
      
      {/* Solar panel grid */}
      <g stroke="#059669" strokeWidth="2" fill="#10b981">
        <rect x="60" y="80" width="80" height="60" rx="4" />
        
        {/* Grid lines */}
        <line x1="80" y1="80" x2="80" y2="140" stroke="#047857" strokeWidth="1" />
        <line x1="100" y1="80" x2="100" y2="140" stroke="#047857" strokeWidth="1" />
        <line x1="120" y1="80" x2="120" y2="140" stroke="#047857" strokeWidth="1" />
        
        <line x1="60" y1="95" x2="140" y2="95" stroke="#047857" strokeWidth="1" />
        <line x1="60" y1="110" x2="140" y2="110" stroke="#047857" strokeWidth="1" />
        <line x1="60" y1="125" x2="140" y2="125" stroke="#047857" strokeWidth="1" />
      </g>
      
      {/* Lightning bolt */}
      <g transform="translate(140, 60)">
        <circle cx="0" cy="0" r="16" fill="#10b981" stroke="#059669" strokeWidth="2" />
        <path d="M-6 -4 L2 -4 L-2 4 L6 4 L2 12 L-6 4 L-2 -4 Z" fill="#ffffff" />
      </g>
      
      {/* Sun rays */}
      <g transform="translate(100, 40)" stroke="#f59e0b" strokeWidth="2">
        <line x1="0" y1="-20" x2="0" y2="-12" />
        <line x1="14" y1="-14" x2="10" y2="-8" />
        <line x1="20" y1="0" x2="12" y2="0" />
        <line x1="14" y1="14" x2="10" y2="8" />
        <line x1="0" y1="20" x2="0" y2="12" />
        <line x1="-14" y1="14" x2="-10" y2="8" />
        <line x1="-20" y1="0" x2="-12" y2="0" />
        <line x1="-14" y1="-14" x2="-10" y2="-8" />
      </g>
    </svg>
  </div>
)

const TechnicalIllustration: React.FC = () => (
  <div className="w-full max-w-xs mx-auto">
    <svg viewBox="0 0 200 200" className="w-full h-auto">
      <rect width="200" height="200" fill="#f8fafc" />
      
      {/* Wrench */}
      <g transform="translate(100, 100)" stroke="#334155" strokeWidth="3" fill="#64748b">
        <path d="M-40 -8 L40 -8 L45 -3 L45 3 L40 8 L-40 8 L-45 3 L-45 -3 Z" />
        <circle cx="35" cy="0" r="8" fill="#ffffff" stroke="#334155" strokeWidth="2" />
        <path d="M-35 -12 L-25 -12 L-25 12 L-35 12 Z" fill="#475569" />
      </g>
      
      {/* Lightning bolt */}
      <g transform="translate(160, 80)">
        <circle cx="0" cy="0" r="12" fill="#10b981" />
        <path d="M-4 -3 L1 -3 L-1 3 L4 3 L1 9 L-4 3 L-1 -3 Z" fill="#ffffff" />
      </g>
      
      {/* Gear */}
      <g transform="translate(60, 60)">
        <circle cx="0" cy="0" r="15" fill="#64748b" stroke="#475569" strokeWidth="2" />
        <circle cx="0" cy="0" r="8" fill="#ffffff" />
        <rect x="-2" y="-18" width="4" height="6" fill="#64748b" />
        <rect x="-2" y="12" width="4" height="6" fill="#64748b" />
        <rect x="-18" y="-2" width="6" height="4" fill="#64748b" />
        <rect x="12" y="-2" width="6" height="4" fill="#64748b" />
      </g>
      
      {/* Certificate */}
      <g transform="translate(120, 140)">
        <rect x="-15" y="-10" width="30" height="20" fill="#ffffff" stroke="#64748b" strokeWidth="2" rx="2" />
        <circle cx="0" cy="0" r="6" fill="#10b981" />
        <path d="M-3 0 L-1 2 L3 -2" stroke="#ffffff" strokeWidth="2" fill="none" />
      </g>
    </svg>
  </div>
)

const ProfessionalIllustration: React.FC = () => (
  <div className="w-full max-w-xs mx-auto">
    <svg viewBox="0 0 200 200" className="w-full h-auto">
      <rect width="200" height="200" fill="#f8fafc" />
      
      {/* Hard hat */}
      <g transform="translate(100, 100)">
        <path d="M-25 0 Q-25 -15 0 -20 Q25 -15 25 0 L25 5 Q25 10 20 10 L-20 10 Q-25 10 -25 5 Z" 
              fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
        <rect x="-30" y="0" width="60" height="8" fill="#d97706" />
        <circle cx="0" cy="-10" r="3" fill="#ffffff" />
      </g>
      
      {/* Electrical plug */}
      <g transform="translate(140, 120)">
        <rect x="-8" y="-12" width="16" height="24" fill="#334155" rx="4" />
        <circle cx="-3" cy="-6" r="2" fill="#ffffff" />
        <circle cx="3" cy="-6" r="2" fill="#ffffff" />
        <rect x="-6" y="0" width="12" height="8" fill="#10b981" />
        
        {/* Electrical cord */}
        <path d="M0 12 Q-10 18 -20 15 Q-30 12 -35 20" 
              stroke="#334155" strokeWidth="3" fill="none" />
      </g>
      
      {/* Building outline */}
      <g stroke="#64748b" strokeWidth="2" fill="none">
        <rect x="40" y="60" width="60" height="80" />
        <line x1="50" y1="140" x2="90" y2="140" />
        <rect x="55" y="80" width="12" height="12" />
        <rect x="75" y="80" width="12" height="12" />
        <rect x="55" y="100" width="12" height="12" />
        <rect x="75" y="100" width="12" height="12" />
        <rect x="65" y="120" width="10" height="20" />
      </g>
      
      {/* Lightning symbol */}
      <g transform="translate(60, 40)">
        <circle cx="0" cy="0" r="10" fill="#10b981" />
        <path d="M-3 -2 L1 -2 L-1 2 L3 2 L1 6 L-3 2 L-1 -2 Z" fill="#ffffff" />
      </g>
    </svg>
  </div>
)

const ServicesOverview: React.FC = () => {
  const services = [
    {
      title: 'Raccordement Résidentiel',
      description: 'Particuliers - Maisons neuves, extensions, rénovations',
      illustration: ResidentialIllustration
    },
    {
      title: 'Raccordement Photovoltaïque',
      description: 'Installation solaire - Raccordement production d\'énergie',
      illustration: SolarIllustration
    },
    {
      title: 'Services Techniques',
      description: 'Expertise technique - Consuel, conformité, assistance',
      illustration: TechnicalIllustration
    },
    {
      title: 'Raccordement Professionnel',
      description: 'Professionnels - Locaux commerciaux, industriels',
      illustration: ProfessionalIllustration
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Tous types de raccordement Enedis
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              {/* Illustration */}
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.illustration />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview