import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../lib/store/auth.store';
import { UserMenu } from './UserMenu';

export function AuthButtons() {
  const { isAuthenticated } = useAuthStore();

  if (isAuthenticated) {
    return <UserMenu />;
  }

  return (
    <div className="flex items-center gap-4">
      <Link 
        to="/auth/login" 
        className="text-gray-700 hover:text-blue-600 transition-colors"
      >
        Se connecter
      </Link>
      <Link 
        to="/auth/register" 
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        S'inscrire
      </Link>
    </div>
  );
}