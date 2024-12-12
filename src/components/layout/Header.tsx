import React from 'react';
import { Link } from 'react-router-dom';
import { Bike } from 'lucide-react';
import { AuthButtons } from '../ui/AuthButtons';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <Bike className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">LoueTon2Roues</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600">
              Accueil
            </Link>
            <Link to="/vehicles" className="text-gray-700 hover:text-blue-600">
              Véhicules
            </Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-blue-600">
              Comment ça marche
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </nav>
          
          <AuthButtons />
        </div>
      </div>
    </header>
  );
}