import React from 'react'

const ProfessionalHouseIllustration: React.FC = () => {
  return (
    <div className="w-full max-w-lg mx-auto">
      <svg viewBox="0 0 600 400" className="w-full h-auto">
        {/* Background */}
        <rect width="600" height="400" fill="#f8fafc" />
        
        {/* Ground line */}
        <line x1="0" y1="350" x2="600" y2="350" stroke="#e2e8f0" strokeWidth="2" />
        
        {/* Power line pole */}
        <g stroke="#334155" strokeWidth="3" fill="none">
          <line x1="50" y1="350" x2="50" y2="120" />
          <line x1="35" y1="135" x2="65" y2="135" />
          
          {/* Power lines */}
          <path d="M50 150 Q200 170 400 160" strokeWidth="2" stroke="#64748b" strokeDasharray="5,5" />
          <path d="M50 165 Q200 185 400 175" strokeWidth="2" stroke="#64748b" strokeDasharray="5,5" />
        </g>
        
        {/* Bird on wire */}
        <ellipse cx="180" cy="165" rx="8" ry="5" fill="#10b981" />
        <path d="M175 165 Q170 160 165 165" stroke="#10b981" strokeWidth="1.5" fill="none" />
        
        {/* Tree */}
        <g stroke="#334155" strokeWidth="2.5" fill="#e2e8f0">
          <line x1="120" y1="350" x2="120" y2="280" stroke="#8b5cf6" strokeWidth="4" />
          <circle cx="120" cy="270" r="25" fill="#d1d5db" stroke="#64748b" />
        </g>
        
        {/* House structure */}
        <g stroke="#334155" strokeWidth="3" fill="#ffffff">
          {/* Main house body */}
          <rect x="280" y="220" width="200" height="130" />
          
          {/* Roof */}
          <path d="M270 220 L380 160 L490 220 Z" fill="#64748b" />
          
          {/* Solar panels */}
          <g fill="#10b981" stroke="#059669" strokeWidth="1.5">
            <rect x="320" y="180" width="25" height="15" />
            <rect x="350" y="180" width="25" height="15" />
            <rect x="380" y="180" width="25" height="15" />
            <rect x="410" y="180" width="25" height="15" />
          </g>
          
          {/* Door */}
          <rect x="300" y="280" width="40" height="70" fill="#f1f5f9" />
          <circle cx="330" cy="315" r="2" fill="#334155" />
          
          {/* Windows */}
          <rect x="360" y="250" width="35" height="35" fill="#bfdbfe" />
          <line x1="377" y1="250" x2="377" y2="285" stroke="#64748b" strokeWidth="1" />
          <line x1="360" y1="267" x2="395" y2="267" stroke="#64748b" strokeWidth="1" />
          
          <rect x="420" y="250" width="35" height="35" fill="#bfdbfe" />
          <line x1="437" y1="250" x2="437" y2="285" stroke="#64748b" strokeWidth="1" />
          <line x1="420" y1="267" x2="455" y2="267" stroke="#64748b" strokeWidth="1" />
          
          {/* Attic window */}
          <rect x="365" y="190" width="25" height="20" fill="#bfdbfe" />
          <line x1="377" y1="190" x2="377" y2="210" stroke="#64748b" strokeWidth="1" />
        </g>
        
        {/* Electric car */}
        <g stroke="#334155" strokeWidth="2.5" fill="#ffffff">
          {/* Car body */}
          <ellipse cx="200" cy="320" rx="45" ry="20" />
          <rect x="160" y="310" width="80" height="20" rx="8" />
          
          {/* Car details */}
          <rect x="170" y="300" width="60" height="10" fill="#e2e8f0" />
          
          {/* Wheels */}
          <circle cx="175" cy="335" r="8" fill="#64748b" />
          <circle cx="225" cy="335" r="8" fill="#64748b" />
          
          {/* Charging cable */}
          <path d="M240 315 Q260 310 280 320" stroke="#10b981" strokeWidth="3" fill="none" />
          
          {/* Charging port on house */}
          <rect x="275" y="315" width="12" height="8" fill="#10b981" />
          <circle cx="281" cy="319" r="2" fill="#ffffff" />
        </g>
        
        {/* Family figures */}
        <g stroke="#334155" strokeWidth="2" fill="none">
          {/* Adult 1 */}
          <g transform="translate(380, 280)">
            <circle cx="0" cy="0" r="8" fill="#f1f5f9" />
            <line x1="0" y1="8" x2="0" y2="40" />
            <line x1="0" y1="18" x2="-10" y2="28" />
            <line x1="0" y1="18" x2="10" y2="28" />
            <line x1="0" y1="40" x2="-8" y2="55" />
            <line x1="0" y1="40" x2="8" y2="55" />
          </g>
          
          {/* Adult 2 */}
          <g transform="translate(410, 280)">
            <circle cx="0" cy="0" r="8" fill="#f1f5f9" />
            <line x1="0" y1="8" x2="0" y2="40" />
            <line x1="0" y1="18" x2="-10" y2="28" />
            <line x1="0" y1="18" x2="10" y2="28" />
            <line x1="0" y1="40" x2="-8" y2="55" />
            <line x1="0" y1="40" x2="8" y2="55" />
          </g>
          
          {/* Child */}
          <g transform="translate(440, 290)">
            <circle cx="0" cy="0" r="6" fill="#f1f5f9" />
            <line x1="0" y1="6" x2="0" y2="30" />
            <line x1="0" y1="14" x2="-8" y2="22" />
            <line x1="0" y1="14" x2="8" y2="22" />
            <line x1="0" y1="30" x2="-6" y2="45" />
            <line x1="0" y1="30" x2="6" y2="45" />
          </g>
          
          {/* Baby */}
          <g transform="translate(460, 300)">
            <circle cx="0" cy="0" r="4" fill="#f1f5f9" />
            <line x1="0" y1="4" x2="0" y2="20" />
            <line x1="0" y1="8" x2="-5" y2="14" />
            <line x1="0" y1="8" x2="5" y2="14" />
            <line x1="0" y1="20" x2="-4" y2="30" />
            <line x1="0" y1="20" x2="4" y2="30" />
          </g>
        </g>
        
        {/* Electrical meter box */}
        <rect x="490" y="280" width="20" height="25" fill="#10b981" stroke="#059669" strokeWidth="2" rx="2" />
        <rect x="493" y="283" width="14" height="8" fill="#ffffff" />
        <circle cx="497" cy="295" r="1.5" fill="#ffffff" />
        <circle cx="503" cy="295" r="1.5" fill="#ffffff" />
        <line x1="495" y1="300" x2="505" y2="300" stroke="#ffffff" strokeWidth="1" />
        
        {/* Lightning bolt icon on meter */}
        <path d="M500 287 L502 290 L499 290 L501 293 Z" fill="#10b981" />
      </svg>
    </div>
  )
}

export default ProfessionalHouseIllustration