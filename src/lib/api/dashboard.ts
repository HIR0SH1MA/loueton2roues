import { axiosInstance } from './axios';

export interface DashboardStats {
  vehiclesCount: number;
  activeBookings: number;
  reviewsCount: number;
  monthlyRevenue: number;
  trends: {
    vehicles: number;
    bookings: number;
    reviews: number;
    revenue: number;
  };
}

export interface RevenueData {
  month: string;
  value: number;
}

export async function getDashboardStats(): Promise<DashboardStats> {
  const response = await axiosInstance.get('/api/dashboard/stats');
  return response.data;
}

export async function getRevenueData(): Promise<RevenueData[]> {
  const response = await axiosInstance.get('/api/dashboard/revenue');
  return response.data;
}

export async function exportDashboardData(format: 'csv' | 'pdf') {
  const response = await axiosInstance.get(`/api/dashboard/export?format=${format}`, {
    responseType: 'blob'
  });
  return response.data;
}