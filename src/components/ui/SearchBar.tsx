import React from 'react';
import { Search, MapPin, Calendar, Bike } from 'lucide-react';
import { SearchInput } from './SearchInput';
import { SearchSelect } from './SearchSelect';

const vehicleOptions = [
  { value: '', label: 'Type de véhicule' },
  { value: 'scooter', label: 'Scooter' },
  { value: 'moto', label: 'Moto' },
  { value: 'velo', label: 'Vélo' },
];

export function SearchBar() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-3 sm:p-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
        <SearchInput
          icon={MapPin}
          placeholder="Où voulez-vous louer ?"
          containerClassName="border-b sm:border-b-0 sm:border-r border-gray-200 pb-3 sm:pb-0 sm:pr-4"
        />
        
        <SearchInput
          icon={Calendar}
          placeholder="Dates de location"
          containerClassName="border-b sm:border-b-0 sm:border-r border-gray-200 pb-3 sm:pb-0 sm:pr-4"
        />
        
        <SearchSelect
          icon={Bike}
          options={vehicleOptions}
          containerClassName="pb-3 sm:pb-0"
        />
        
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition-colors font-medium">
          <Search className="w-5 h-5" />
          <span className="hidden sm:inline">Rechercher</span>
        </button>
      </div>
    </div>
  );
}