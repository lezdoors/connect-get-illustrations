import React from 'react'

const HouseIllustration: React.FC = () => {
  return (
    <div className="w-full max-w-lg mx-auto">
      <svg viewBox="0 0 800 600" className="w-full h-auto">
        {/* Background Elements */}
        <defs>
          <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f0f9ff" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
        
        {/* Sky Background */}
        <rect width="800" height="600" fill="url(#skyGradient)" />
        
        {/* Ground Line */}
        <line x1="0" y1="520" x2="800" y2="520" stroke="#1e40af" strokeWidth="3" opacity="0.3" />
        
        {/* House Structure */}
        <g stroke="#1e40af" strokeWidth="3" fill="none">
          {/* House Base */}
          <rect x="150" y="320" width="280" height="200" rx="8" />
          
          {/* Roof */}
          <path d="M130 320 L290 220 L450 320 Z" />
          
          {/* Solar Panels on Roof */}
          <g strokeWidth="2">
            <rect x="200" y="240" width="40" height="25" />
            <rect x="245" y="240" width="40" height="25" />
            <rect x="290" y="240" width="40" height="25" />
            <rect x="335" y="240" width="40" height="25" />
            <line x1="200" y1="252" x2="375" y2="252" opacity="0.5" />
            <line x1="220" y1="240" x2="220" y2="265" opacity="0.5" />
            <line x1="265" y1="240" x2="265" y2="265" opacity="0.5" />
            <line x1="310" y1="240" x2="310" y2="265" opacity="0.5" />
            <line x1="355" y1="240" x2="355" y2="265" opacity="0.5" />
          </g>
          
          {/* Main Door */}
          <rect x="180" y="420" width="60" height="100" rx="4" />
          <circle cx="225" cy="470" r="3" fill="#1e40af" />
          
          {/* Windows */}
          <rect x="270" y="360" width="60" height="60" rx="4" />
          <line x1="300" y1="360" x2="300" y2="420" opacity="0.7" />
          <line x1="270" y1="390" x2="330" y2="390" opacity="0.7" />
          
          <rect x="350" y="360" width="60" height="60" rx="4" />
          <line x1="380" y1="360" x2="380" y2="420" opacity="0.7" />
          <line x1="350" y1="390" x2="410" y2="390" opacity="0.7" />
          
          {/* Small Attic Window */}
          <rect x="270" y="280" width="40" height="30" rx="4" />
          <line x1="290" y1="280" x2="290" y2="310" opacity="0.7" />
        </g>
        
        {/* Car */}
        <g stroke="#1e40af" strokeWidth="3" fill="none" transform="translate(50, 450)">
          {/* Car Body */}
          <path d="M0 40 Q0 35 5 35 L45 35 Q55 35 60 25 L80 25 Q90 25 95 15 L130 15 Q140 15 145 25 L160 25 Q165 25 165 30 L165 40 Q165 45 160 45 L155 45 Q150 55 140 55 L135 55 Q125 55 120 45 L45 45 Q35 55 25 55 L20 55 Q10 55 5 45 L0 45 Q0 40 0 40 Z" />
          
          {/* Car Windows */}
          <path d="M15 35 L50 35 Q55 35 60 25 L80 25 Q90 25 95 15 L130 15 Q135 15 140 25 L150 25 L150 35 L15 35" opacity="0.3" />
          
          {/* Wheels */}
          <circle cx="30" cy="55" r="12" strokeWidth="4" />
          <circle cx="30" cy="55" r="6" strokeWidth="2" />
          <circle cx="135" cy="55" r="12" strokeWidth="4" />
          <circle cx="135" cy="55" r="6" strokeWidth="2" />
        </g>
        
        {/* Family */}
        <g stroke="#1e40af" strokeWidth="2.5" fill="none" transform="translate(450, 400)">
          {/* Adult 1 */}
          <circle cx="0" cy="0" r="12" />
          <line x1="0" y1="12" x2="0" y2="60" />
          <line x1="0" y1="25" x2="-15" y2="40" />
          <line x1="0" y1="25" x2="15" y2="40" />
          <line x1="0" y1="60" x2="-12" y2="85" />
          <line x1="0" y1="60" x2="12" y2="85" />
          
          {/* Adult 2 */}
          <circle cx="35" cy="0" r="12" />
          <line x1="35" y1="12" x2="35" y2="60" />
          <line x1="35" y1="25" x2="20" y2="40" />
          <line x1="35" y1="25" x2="50" y2="40" />
          <line x1="35" y1="60" x2="23" y2="85" />
          <line x1="35" y1="60" x2="47" y2="85" />
          
          {/* Child */}
          <circle cx="70" cy="15" r="8" />
          <line x1="70" y1="23" x2="70" y2="55" />
          <line x1="70" y1="30" x2="60" y2="40" />
          <line x1="70" y1="30" x2="80" y2="40" />
          <line x1="70" y1="55" x2="63" y2="75" />
          <line x1="70" y1="55" x2="77" y2="75" />
        </g>
        
        {/* Electrical Connection */}
        <g stroke="#1e40af" strokeWidth="3" fill="none">
          {/* Power Line Pole */}
          <line x1="650" y1="520" x2="650" y2="200" />
          <line x1="630" y1="220" x2="670" y2="220" />
          
          {/* Power Lines */}
          <path d="M650 240 Q580 260 520 250 Q480 245 450 240" strokeDasharray="5,5" opacity="0.8" />
          <path d="M650 260 Q580 280 520 270 Q480 265 450 260" strokeDasharray="5,5" opacity="0.8" />
          
          {/* Bird on Wire */}
          <ellipse cx="580" cy="255" rx="8" ry="5" fill="#1e40af" opacity="0.7" />
          <path d="M575 255 Q570 250 565 255" strokeWidth="1.5" opacity="0.7" />
        </g>
        
        {/* Tree */}
        <g stroke="#1e40af" strokeWidth="3" fill="none" transform="translate(720, 420)">
          {/* Tree Trunk */}
          <line x1="0" y1="100" x2="0" y2="60" strokeWidth="4" />
          
          {/* Tree Crown */}
          <circle cx="0" cy="40" r="25" opacity="0.6" />
          <path d="M-15 55 Q0 30 15 55" opacity="0.8" />
          <path d="M-20 45 Q0 25 20 45" opacity="0.6" />
        </g>
        
        {/* Electrical Meter Box */}
        <g stroke="#1e40af" strokeWidth="2" fill="none" transform="translate(400, 380)">
          <rect x="0" y="0" width="25" height="35" rx="3" />
          <rect x="3" y="3" width="19" height="12" rx="2" opacity="0.5" />
          <circle cx="7" cy="22" r="2" fill="#1e40af" opacity="0.7" />
          <circle cx="18" cy="22" r="2" fill="#1e40af" opacity="0.7" />
          <line x1="5" y1="28" x2="20" y2="28" strokeWidth="1" />
        </g>
      </svg>
    </div>
  )
}

export default HouseIllustration