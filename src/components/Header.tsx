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
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600">{SITE.name}</h1>
                <p className="text-xs text-gray-600 hidden sm:block">Raccordement électrique simplifié</p>
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