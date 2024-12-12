import { useQuery } from '@tanstack/react-query';
import { getDashboardStats } from '../api/dashboard';

export function useDashboardStats() {
  return useQuery({
    queryKey: ['dashboardStats'],
    queryFn: getDashboardStats,
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
  });
}