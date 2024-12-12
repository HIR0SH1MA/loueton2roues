import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Une erreur est survenue</h2>
          <p className="mt-2 text-gray-600">{error.message}</p>
        </div>
        
        <div className="flex flex-col gap-4">
          <Button onClick={() => {
            resetErrorBoundary();
            navigate('/');
          }}>
            Retour à l'accueil
          </Button>
          
          <Button
            variant="outline"
            onClick={resetErrorBoundary}
          >
            Réessayer
          </Button>
        </div>
      </div>
    </div>
  );
}