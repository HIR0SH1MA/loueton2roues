import React from 'react';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function AddVehicleButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/vehicles/new')}
      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
      aria-label="Ajouter un véhicule"
    >
      <Plus className="w-4 h-4" />
      Ajouter un véhicule
    </button>
  );
}