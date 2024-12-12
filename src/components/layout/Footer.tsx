import React from 'react';
import { Link } from 'react-router-dom';
import { Bike, Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Bike className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold text-white">LoueTon2Roue</span>
            </Link>
            <p className="text-sm">
              La première plateforme de location de deux-roues entre particuliers en France.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">À propos</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-blue-500">Qui sommes-nous</Link></li>
              <li><Link to="/how-it-works" className="hover:text-blue-500">Comment ça marche</Link></li>
              <li><Link to="/blog" className="hover:text-blue-500">Blog</Link></li>
              <li><Link to="/press" className="hover:text-blue-500">Presse</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Aide</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="hover:text-blue-500">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
              <li><Link to="/insurance" className="hover:text-blue-500">Assurance</Link></li>
              <li><Link to="/safety" className="hover:text-blue-500">Sécurité</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="hover:text-blue-500"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="hover:text-blue-500"><Instagram className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex space-x-4">
              <Link to="/terms" className="hover:text-blue-500">Conditions générales</Link>
              <Link to="/privacy" className="hover:text-blue-500">Politique de confidentialité</Link>
              <Link to="/legal" className="hover:text-blue-500">Mentions légales</Link>
            </div>
            <p>© 2024 LoueTon2Roue. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}