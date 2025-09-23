import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { SITE } from '../config/site'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Services', href: '#services' },
    { name: 'Processus', href: '#process' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* SIMPLE LOGO */}
          <div>
            <h1 
              className="text-xl font-medium"
              style={{ 
                color: '#1f2937',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
              }}
            >
              Raccordement Connect
            </h1>
          </div>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors duration-200 hover:underline"
                style={{ color: '#6b7280' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#1f2937'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#6b7280'
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CLEAN PHONE NUMBER */}
          <div className="hidden md:block">
            <a
              href={SITE.phoneLink}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: '#374151' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#1f2937'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#374151'
              }}
            >
              {SITE.phoneDisplay}
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
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

        {/* MOBILE NAVIGATION */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="py-4 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                  style={{ minHeight: '44px' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 pt-4 border-t border-gray-200">
                <a
                  href={SITE.phoneLink}
                  className="block py-3 text-sm font-medium text-gray-900"
                  style={{ minHeight: '44px' }}
                >
                  {SITE.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header