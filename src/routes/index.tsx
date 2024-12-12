import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { ProtectedRoute } from './ProtectedRoute';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/auth/LoginPage';
import { RegisterPage } from '../pages/auth/RegisterPage';
import { ForgotPasswordPage } from '../pages/auth/ForgotPasswordPage';
import { ProfilePage } from '../pages/account/ProfilePage';
import { SettingsPage } from '../pages/account/SettingsPage';
import { DashboardPage } from '../pages/account/DashboardPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Public routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />

        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/account/profile" element={<ProfilePage />} />
          <Route path="/account/settings" element={<SettingsPage />} />
          <Route path="/account/dashboard" element={<DashboardPage />} />
        </Route>
      </Route>
    </Routes>
  );
}