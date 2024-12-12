import React from 'react';
import { Calendar, User, MapPin } from 'lucide-react';

interface Booking {
  id: string;
  vehicle: string;
  user: string;
  location: string;
  startDate: string;
  endDate: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}

const mockBookings: Booking[] = [
  {
    id: '1',
    vehicle: 'Yamaha MT-07',
    user: 'Jean Dupont',
    location: 'Bordeaux',
    startDate: '2024-04-15',
    endDate: '2024-04-17',
    status: 'confirmed',
  },
  {
    id: '2',
    vehicle: 'Vespa Primavera',
    user: 'Marie Martin',
    location: 'Toulouse',
    startDate: '2024-04-20',
    endDate: '2024-04-22',
    status: 'pending',
  },
];

export function BookingsList() {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Réservations à venir
        </h2>
        <div className="space-y-6">
          {mockBookings.map((booking) => (
            <div 
              key={booking.id}
              className="flex items-start gap-4 p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-medium text-gray-900">{booking.vehicle}</h3>
                  <span className={`
                    px-2 py-1 text-xs rounded-full
                    ${booking.status === 'confirmed' ? 'bg-green-100 text-green-800' : ''}
                    ${booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : ''}
                  `}>
                    {booking.status === 'confirmed' ? 'Confirmé' : 'En attente'}
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <User className="w-4 h-4" />
                    {booking.user}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    {booking.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    Du {new Date(booking.startDate).toLocaleDateString()} au {new Date(booking.endDate).toLocaleDateString()}
                  </div>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Voir les détails
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}