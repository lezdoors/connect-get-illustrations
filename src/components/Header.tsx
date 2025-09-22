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
      <div className="container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary-600">{SITE.name}</h1>
                <p className="text-xs text-gray-600">Raccordement électrique simplifié</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={SITE.phoneLink}
              className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
            >
              <PhoneIcon className="w-5 h-5" />
              <span>{SITE.phoneDisplay}</span>
            </a>
            <button className="btn-primary">
              Commencer ma demande
            </button>
          </div>

          {/* Mobile menu button - Touch-optimized */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 text-gray-600 hover:text-primary-600 touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Menu navigation"
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Enhanced touch experience */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="py-4 space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-gray-600 hover:text-primary-600 hover:bg-gray-50 font-medium transition-colors touch-manipulation min-h-[44px] flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-100 px-4 space-y-3">
                <a
                  href={SITE.phoneLink}
                  className="flex items-center space-x-2 text-primary-600 font-medium py-2 touch-manipulation min-h-[44px]"
                >
                  <PhoneIcon className="w-5 h-5" />
                  <span>{SITE.phoneDisplay}</span>
                </a>
                <button className="btn-primary w-full py-3 touch-manipulation min-h-[48px]">
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