import React, { useEffect } from 'react';
import { useAuthStore } from '../../lib/store/auth.store';
import { LoadingScreen } from '../ui/LoadingScreen';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { getCurrentUser, isLoading } = useAuthStore();

  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return <>{children}</>;
}