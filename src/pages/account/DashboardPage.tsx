import React from 'react';
import { useAuthStore } from '../../lib/store/auth.store';
import { Bike, Calendar, Users, CreditCard } from 'lucide-react';
import { StatsCard } from '../../components/dashboard/StatsCard';
import { RevenueChart } from '../../components/dashboard/RevenueChart';
import { BookingsList } from '../../components/dashboard/BookingsList';
import { ExportButton } from '../../components/dashboard/actions/ExportButton';
import { AddVehicleButton } from '../../components/dashboard/actions/AddVehicleButton';
import { useDashboardStats } from '../../lib/hooks/useDashboardStats';

export function DashboardPage() {
  const { user } = useAuthStore();
  const { data: stats, isLoading, error } = useDashboardStats();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-600">
        Une erreur est survenue lors du chargement des données
      </div>
    );
  }

  const dashboardStats = [
    { 
      title: 'Véhicules disponibles',
      value: stats?.vehiclesCount || 0,
      icon: Bike,
      trend: { value: stats?.trends.vehicles || 0, isPositive: (stats?.trends.vehicles || 0) > 0 }
    },
    { 
      title: 'Réservations en cours',
      value: stats?.activeBookings || 0,
      icon: Calendar,
      trend: { value: stats?.trends.bookings || 0, isPositive: (stats?.trends.bookings || 0) > 0 }
    },
    { 
      title: 'Avis reçus',
      value: stats?.reviewsCount || 0,
      icon: Users,
      trend: { value: stats?.trends.reviews || 0, isPositive: (stats?.trends.reviews || 0) > 0 }
    },
    { 
      title: 'Revenus du mois',
      value: `${stats?.monthlyRevenue || 0} €`,
      icon: CreditCard,
      trend: { value: stats?.trends.revenue || 0, isPositive: (stats?.trends.revenue || 0) > 0 }
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tableau de bord</h1>
          <p className="mt-1 text-sm text-gray-500">
            Bienvenue, {user?.username}
          </p>
        </div>
        <div className="flex gap-4">
          <ExportButton />
          <AddVehicleButton />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {dashboardStats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <RevenueChart />
        <BookingsList />
      </div>
    </div>
  );
}