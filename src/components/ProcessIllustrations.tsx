import React from 'react'

// Step 1: Person at desk with checklist (Image 4)
export const StepOneIllustration: React.FC = () => (
  <div className="w-full max-w-xs mx-auto">
    <svg viewBox="0 0 200 200" className="w-full h-auto">
      <rect width="200" height="200" fill="#f8fafc" />
      
      {/* Desk */}
      <rect x="40" y="120" width="120" height="8" fill="#64748b" />
      <rect x="45" y="128" width="110" height="4" fill="#475569" />
      
      {/* Chair */}
      <rect x="80" y="110" width="40" height="45" rx="8" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
      <rect x="85" y="100" width="30" height="15" rx="4" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
      
      {/* Person */}
      <g transform="translate(100, 80)">
        <circle cx="0" cy="0" r="12" fill="#f1f5f9" stroke="#334155" strokeWidth="2" />
        <rect x="-15" y="10" width="30" height="40" rx="6" fill="#3b82f6" stroke="#2563eb" strokeWidth="2" />
        <line x1="-10" y1="25" x2="-25" y2="35" stroke="#334155" strokeWidth="2" />
        <line x1="10" y1="25" x2="25" y2="35" stroke="#334155" strokeWidth="2" />
      </g>
      
      {/* Checklist documents */}
      <g transform="translate(120, 60)">
        <rect x="0" y="0" width="40" height="50" fill="#ffffff" stroke="#64748b" strokeWidth="2" rx="2" />
        <rect x="5" y="8" width="8" height="8" fill="#10b981" stroke="#059669" strokeWidth="1" />
        <line x1="18" y1="12" x2="35" y2="12" stroke="#64748b" strokeWidth="1" />
        <rect x="5" y="20" width="8" height="8" fill="#10b981" stroke="#059669" strokeWidth="1" />
        <line x1="18" y1="24" x2="35" y2="24" stroke="#64748b" strokeWidth="1" />
        <rect x="5" y="32" width="8" height="8" fill="#ffffff" stroke="#64748b" strokeWidth="1" />
        <line x1="18" y1="36" x2="35" y2="36" stroke="#64748b" strokeWidth="1" />
        
        {/* Checkmarks */}
        <path d="M7 12 L10 15 L15 10" stroke="#ffffff" strokeWidth="2" fill="none" />
        <path d="M7 24 L10 27 L15 22" stroke="#ffffff" strokeWidth="2" fill="none" />
      </g>
    </svg>
  </div>
)

// Step 2: Two people with Enedis document (Image 2)
export const StepTwoIllustration: React.FC = () => (
  <div className="w-full max-w-xs mx-auto">
    <svg viewBox="0 0 200 200" className="w-full h-auto">
      <rect width="200" height="200" fill="#f8fafc" />
      
      {/* Person 1 */}
      <g transform="translate(60, 120)">
        <circle cx="0" cy="0" r="12" fill="#f1f5f9" stroke="#334155" strokeWidth="2" />
        <rect x="-15" y="10" width="30" height="50" rx="6" fill="#3b82f6" stroke="#2563eb" strokeWidth="2" />
        <line x1="-10" y1="25" x2="-25" y2="40" stroke="#334155" strokeWidth="2" />
        <line x1="10" y1="25" x2="25" y2="30" stroke="#334155" strokeWidth="2" />
        <line x1="-8" y1="60" x2="-18" y2="80" stroke="#334155" strokeWidth="2" />
        <line x1="8" y1="60" x2="18" y2="80" stroke="#334155" strokeWidth="2" />
      </g>
      
      {/* Person 2 */}
      <g transform="translate(140, 120)">
        <circle cx="0" cy="0" r="12" fill="#f1f5f9" stroke="#334155" strokeWidth="2" />
        <rect x="-15" y="10" width="30" height="50" rx="6" fill="#10b981" stroke="#059669" strokeWidth="2" />
        <line x1="-10" y1="25" x2="-25" y2="30" stroke="#334155" strokeWidth="2" />
        <line x1="10" y1="25" x2="25" y2="40" stroke="#334155" strokeWidth="2" />
        <line x1="-8" y1="60" x2="-18" y2="80" stroke="#334155" strokeWidth="2" />
        <line x1="8" y1="60" x2="18" y2="80" stroke="#334155" strokeWidth="2" />
      </g>
      
      {/* Enedis document */}
      <rect x="85" y="70" width="30" height="40" fill="#ffffff" stroke="#64748b" strokeWidth="2" rx="2" />
      <text x="100" y="85" textAnchor="middle" className="text-xs font-semibold fill-green-600">Enedis</text>
      <line x1="90" y1="90" x2="110" y2="90" stroke="#10b981" strokeWidth="2" />
      <line x1="90" y1="95" x2="110" y2="95" stroke="#64748b" strokeWidth="1" />
      <line x1="90" y1="100" x2="110" y2="100" stroke="#64748b" strokeWidth="1" />
      
      {/* Certification badge */}
      <circle cx="100" cy="50" r="15" fill="#10b981" stroke="#059669" strokeWidth="2" />
      <path d="M95 50 L98 53 L105 46" stroke="#ffffff" strokeWidth="2" fill="none" />
    </svg>
  </div>
)

// Step 3: Two people working with documents (Image 3)
export const StepThreeIllustration: React.FC = () => (
  <div className="w-full max-w-xs mx-auto">
    <svg viewBox="0 0 200 200" className="w-full h-auto">
      <rect width="200" height="200" fill="#f8fafc" />
      
      {/* Desk/table */}
      <rect x="50" y="120" width="100" height="8" fill="#64748b" />
      
      {/* Person 1 (standing) */}
      <g transform="translate(70, 90)">
        <circle cx="0" cy="0" r="10" fill="#f1f5f9" stroke="#334155" strokeWidth="2" />
        <rect x="-12" y="8" width="24" height="35" rx="4" fill="#3b82f6" stroke="#2563eb" strokeWidth="2" />
        <line x1="-8" y1="20" x2="-20" y2="30" stroke="#334155" strokeWidth="2" />
        <line x1="8" y1="20" x2="20" y2="25" stroke="#334155" strokeWidth="2" />
        <line x1="-6" y1="43" x2="-12" y2="60" stroke="#334155" strokeWidth="2" />
        <line x1="6" y1="43" x2="12" y2="60" stroke="#334155" strokeWidth="2" />
      </g>
      
      {/* Person 2 (sitting) */}
      <g transform="translate(130, 100)">
        <circle cx="0" cy="0" r="10" fill="#f1f5f9" stroke="#334155" strokeWidth="2" />
        <rect x="-12" y="8" width="24" height="25" rx="4" fill="#10b981" stroke="#059669" strokeWidth="2" />
        <line x1="-8" y1="18" x2="-20" y2="25" stroke="#334155" strokeWidth="2" />
        <line x1="8" y1="18" x2="25" y2="15" stroke="#334155" strokeWidth="2" />
        <line x1="-8" y1="33" x2="-15" y2="45" stroke="#334155" strokeWidth="2" />
        <line x1="8" y1="33" x2="15" y2="45" stroke="#334155" strokeWidth="2" />
      </g>
      
      {/* Documents scattered */}
      <rect x="80" y="100" width="20" height="25" fill="#ffffff" stroke="#64748b" strokeWidth="1" rx="1" />
      <rect x="105" y="95" width="20" height="25" fill="#ffffff" stroke="#64748b" strokeWidth="1" rx="1" />
      
      {/* Gear icon */}
      <g transform="translate(40, 60)">
        <circle cx="0" cy="0" r="12" fill="#64748b" stroke="#475569" strokeWidth="2" />
        <circle cx="0" cy="0" r="6" fill="#ffffff" />
        <rect x="-2" y="-15" width="4" height="6" fill="#64748b" />
        <rect x="-2" y="9" width="4" height="6" fill="#64748b" />
        <rect x="-15" y="-2" width="6" height="4" fill="#64748b" />
        <rect x="9" y="-2" width="6" height="4" fill="#64748b" />
      </g>
      
      {/* Checklist icon */}
      <g transform="translate(160, 60)">
        <rect x="-10" y="-12" width="20" height="24" fill="#10b981" stroke="#059669" strokeWidth="2" rx="2" />
        <path d="M-5 -5 L-2 -2 L5 -8" stroke="#ffffff" strokeWidth="2" fill="none" />
        <path d="M-5 2 L-2 5 L5 -1" stroke="#ffffff" strokeWidth="2" fill="none" />
      </g>
    </svg>
  </div>
)

// Step 4: People working with computer screen (Image 6)
export const StepFourIllustration: React.FC = () => (
  <div className="w-full max-w-xs mx-auto">
    <svg viewBox="0 0 200 200" className="w-full h-auto">
      <rect width="200" height="200" fill="#f8fafc" />
      
      {/* Computer screen */}
      <rect x="80" y="60" width="60" height="40" fill="#334155" stroke="#1e293b" strokeWidth="2" rx="4" />
      <rect x="85" y="65" width="50" height="30" fill="#3b82f6" />
      
      {/* Screen content */}
      <rect x="90" y="70" width="15" height="8" fill="#ffffff" rx="1" />
      <line x1="110" y1="72" x2="130" y2="72" stroke="#ffffff" strokeWidth="1" />
      <line x1="110" y1="76" x2="125" y2="76" stroke="#ffffff" strokeWidth="1" />
      <line x1="90" y1="82" x2="130" y2="82" stroke="#ffffff" strokeWidth="1" />
      <line x1="90" y1="86" x2="120" y2="86" stroke="#ffffff" strokeWidth="1" />
      
      {/* Computer base */}
      <rect x="95" y="100" width="30" height="4" fill="#64748b" rx="2" />
      
      {/* Person 1 (sitting left) */}
      <g transform="translate(50, 120)">
        <circle cx="0" cy="0" r="10" fill="#f1f5f9" stroke="#334155" strokeWidth="2" />
        <rect x="-12" y="8" width="24" height="25" rx="4" fill="#3b82f6" stroke="#2563eb" strokeWidth="2" />
        <line x1="-8" y1="18" x2="-5" y2="12" stroke="#334155" strokeWidth="2" />
        <line x1="8" y1="18" x2="20" y2="25" stroke="#334155" strokeWidth="2" />
        <line x1="-8" y1="33" x2="-15" y2="45" stroke="#334155" strokeWidth="2" />
        <line x1="8" y1="33" x2="15" y2="45" stroke="#334155" strokeWidth="2" />
      </g>
      
      {/* Person 2 (standing right) */}
      <g transform="translate(150, 110)">
        <circle cx="0" cy="0" r="10" fill="#f1f5f9" stroke="#334155" strokeWidth="2" />
        <rect x="-12" y="8" width="24" height="35" rx="4" fill="#10b981" stroke="#059669" strokeWidth="2" />
        <line x1="-8" y1="20" x2="-20" y2="30" stroke="#334155" strokeWidth="2" />
        <line x1="8" y1="20" x2="15" y2="15" stroke="#334155" strokeWidth="2" />
        <line x1="-6" y1="43" x2="-12" y2="60" stroke="#334155" strokeWidth="2" />
        <line x1="6" y1="43" x2="12" y2="60" stroke="#334155" strokeWidth="2" />
      </g>
      
      {/* Documents icons */}
      <g transform="translate(30, 40)">
        <rect x="0" y="0" width="12" height="16" fill="#ffffff" stroke="#64748b" strokeWidth="1" rx="1" />
        <circle cx="18" cy="8" r="8" fill="#10b981" stroke="#059669" strokeWidth="1" />
        <path d="M15 8 L17 10 L21 6" stroke="#ffffff" strokeWidth="1.5" fill="none" />
      </g>
      
      <g transform="translate(160, 40)">
        <rect x="0" y="0" width="12" height="16" fill="#ffffff" stroke="#64748b" strokeWidth="1" rx="1" />
        <line x1="2" y1="4" x2="10" y2="4" stroke="#64748b" strokeWidth="1" />
        <line x1="2" y1="7" x2="8" y2="7" stroke="#64748b" strokeWidth="1" />
        <line x1="2" y1="10" x2="10" y2="10" stroke="#64748b" strokeWidth="1" />
      </g>
    </svg>
  </div>
)

export default {
  StepOneIllustration,
  StepTwoIllustration, 
  StepThreeIllustration,
  StepFourIllustration
}