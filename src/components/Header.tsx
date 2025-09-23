import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { SITE } from '../config/site'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Accueil', href: '#' },
    { name: 'Comment ça marche', href: '#process' },
    { name: 'Tarifs', href: '#pricing' },
    { name: 'Témoignages', href: '#testimonials' },
  ]

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Enhanced Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Professional Circular Logo Icon */}
              <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                <div className="w-full h-full bg-white rounded-full shadow-lg border-2 border-gray-100 flex items-center justify-center relative overflow-hidden">
                  {/* Circular electrical connection design */}
                  <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 100 100" fill="none">
                    {/* Outer circular border */}
                    <circle cx="50" cy="50" r="42" stroke="#0ea5e9" strokeWidth="2" fill="none" />
                    
                    {/* Electrical plug connections - inspired by your logo */}
                    <g transform="rotate(0 50 50)">
                      {/* Top connection */}
                      <rect x="46" y="15" width="8" height="12" rx="2" fill="#10b981" />
                      <rect x="48" y="10" width="4" height="8" rx="1" fill="#10b981" />
                    </g>
                    
                    <g transform="rotate(120 50 50)">
                      {/* Right connection */}
                      <rect x="46" y="15" width="8" height="12" rx="2" fill="#f59e0b" />
                      <rect x="48" y="10" width="4" height="8" rx="1" fill="#f59e0b" />
                    </g>
                    
                    <g transform="rotate(240 50 50)">
                      {/* Left connection */}
                      <rect x="46" y="15" width="8" height="12" rx="2" fill="#0ea5e9" />
                      <rect x="48" y="10" width="4" height="8" rx="1" fill="#0ea5e9" />
                    </g>
                    
                    {/* Center hub */}
                    <circle cx="50" cy="50" r="12" fill="#2563eb" />
                    <circle cx="50" cy="50" r="8" fill="white" />
                    <circle cx="50" cy="50" r="4" fill="#2563eb" />
                  </svg>
                </div>
              </div>
              {/* Brand Text */}
              <div className="hidden sm:block">
                <div className="text-sm md:text-base font-semibold text-gray-800 leading-tight">
                  Votre partenaire raccordement
                </div>
                <div className="text-sm md:text-base font-semibold text-blue-600 leading-tight">
                  au réseau d'électricité d'Enedis
                </div>
              </div>
              {/* Mobile-only simplified text */}
              <div className="sm:hidden">
                <div className="text-sm font-bold text-blue-600">
                  Raccordement
                </div>
                <div className="text-xs text-gray-600">
                  Enedis
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={SITE.phoneLink}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              <PhoneIcon className="w-5 h-5" />
              <span>{SITE.phoneDisplay}</span>
            </a>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
              Commencer ma demande
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 -mr-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-all duration-200 touch-manipulation"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ minHeight: '44px', minWidth: '44px' }}
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white shadow-lg">
            <div className="py-4 space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-all duration-200 touch-manipulation"
                  style={{ minHeight: '44px' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 mt-4 border-t border-gray-100 space-y-3 px-4">
                <a
                  href={SITE.phoneLink}
                  className="flex items-center justify-center space-x-2 text-blue-600 font-medium py-3 px-4 border border-blue-200 rounded-lg hover:bg-blue-50 transition-all duration-200 touch-manipulation"
                  style={{ minHeight: '44px' }}
                >
                  <PhoneIcon className="w-5 h-5" />
                  <span>{SITE.phoneDisplay}</span>
                </a>
                <button 
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-lg font-medium transition-colors touch-manipulation"
                  style={{ minHeight: '44px' }}
                >
                  Commencer ma demande
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header