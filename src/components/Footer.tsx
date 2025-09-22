import React from 'react'
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'
import { SITE } from '../config/site'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const serviceAreas = [
    'Paris & Île-de-France',
    'Lyon & Auvergne-Rhône-Alpes',
    'Marseille & Provence-Alpes-Côte d\'Azur',
    'Toulouse & Occitanie',
    'Bordeaux & Nouvelle-Aquitaine',
    'Lille & Hauts-de-France',
    'Nantes & Pays de la Loire',
    'Strasbourg & Grand Est'
  ]

  const services = [
    'Raccordement électrique neuf',
    'Modification de raccordement',
    'Augmentation de puissance',
    'Installation compteur Linky',
    'Raccordement triphasé',
    'Mise en conformité CONSUEL',
    'Dépannage électrique',
    'Consultation technique'
  ]

  const legalLinks = [
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'Politique de confidentialité', href: '/confidentialite' },
    { name: 'CGV', href: '/cgv' },
    { name: 'CGU', href: '/cgu' },
    { name: 'Cookies', href: '/cookies' },
    { name: 'Plan du site', href: '/sitemap' }
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container section">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{SITE.name}</h3>
                <p className="text-xs text-gray-400">{SITE.description}</p>
              </div>
            </div>

            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Service expert en raccordement électrique. Interventions partout en France 
              avec la garantie d'un service conforme aux normes ENEDIS et CONSUEL.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-green-800 text-green-200 text-xs px-2 py-1 rounded">CONSUEL</span>
              <span className="bg-blue-800 text-blue-200 text-xs px-2 py-1 rounded">RGE</span>
              <span className="bg-primary-800 text-primary-200 text-xs px-2 py-1 rounded">ENEDIS</span>
              <span className="bg-orange-800 text-orange-200 text-xs px-2 py-1 rounded">QUALIBAT</span>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-5 h-5 text-primary-400" />
                <div>
                  <div className="text-white font-medium">{SITE.phoneDisplay}</div>
                  <div className="text-xs text-gray-400">Appel gratuit</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="w-5 h-5 text-primary-400" />
                <div>
                  <div className="text-white">{SITE.email}</div>
                  <div className="text-xs text-gray-400">Réponse sous 48h ouvrées</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <ClockIcon className="w-5 h-5 text-primary-400" />
                <div>
                  <div className="text-white">Lun-Ven 9h-18h</div>
                  <div className="text-xs text-gray-400">Service client</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Nos services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage Areas */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              <GlobeAltIcon className="w-5 h-5 inline mr-2" />
              Zones d'intervention
            </h4>
            <ul className="space-y-3">
              {serviceAreas.map((area, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                    {area}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="w-5 h-5 text-primary-400 mt-0.5" />
                <div>
                  <div className="text-sm font-medium text-white">Couverture nationale</div>
                  <div className="text-xs text-gray-400 mt-1">
                    Intervention dans toute la France métropolitaine avec nos partenaires locaux certifiés.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Restez informé</h4>
            
            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-sm text-gray-400 mb-4">
                Recevez nos conseils et actualités sur le raccordement électrique
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Votre email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white text-sm focus:outline-none focus:border-primary-500"
                />
                <button className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-r-lg transition-colors">
                  <EnvelopeIcon className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Pas de spam, désinscription en 1 clic
              </p>
            </div>

            {/* Social Links */}
            <div className="mb-6">
              <h5 className="text-sm font-medium text-white mb-3">Suivez-nous</h5>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                  <span className="text-sm font-bold">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                  <span className="text-sm font-bold">in</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                  <span className="text-sm font-bold">yt</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                  <span className="text-sm font-bold">ig</span>
                </a>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-gray-800 rounded-lg p-4">
              <h5 className="text-sm font-medium text-white mb-3">Garanties & Sécurité</h5>
              <div className="space-y-2 text-xs text-gray-400">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Paiement sécurisé SSL</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Garantie satisfaction 100%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Données RGPD protégées</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © {currentYear} {SITE.name} - Tous droits réservés. 
              <span className="ml-2">Service de raccordement électrique</span>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-4">
              {legalLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="text-xs text-gray-400 hover:text-primary-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-4 pt-4 border-t border-gray-800 text-center">
            <p className="text-xs text-gray-500">
              {SITE.name} est un service de raccordement électrique agréé ENEDIS. 
              Nous intervenons sur tout le territoire français en partenariat avec des électriciens certifiés CONSUEL. 
              Prix TTC, frais de déplacement inclus selon zone géographique.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer