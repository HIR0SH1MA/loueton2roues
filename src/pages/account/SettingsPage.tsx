import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { useAuthStore } from '../../lib/store/auth.store';

const settingsSchema = z.object({
  email: z.string().email('Email invalide'),
  currentPassword: z.string().min(1, 'Le mot de passe actuel est requis'),
  newPassword: z.string().min(8, 'Le nouveau mot de passe doit contenir au moins 8 caractères').optional(),
  confirmNewPassword: z.string().optional(),
}).refine((data) => {
  if (data.newPassword && data.newPassword !== data.confirmNewPassword) {
    return false;
  }
  return true;
}, {
  message: 'Les mots de passe ne correspondent pas',
  path: ['confirmNewPassword'],
});

type SettingsFormData = z.infer<typeof settingsSchema>;

export function SettingsPage() {
  const { user } = useAuthStore();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SettingsFormData>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      email: user?.email,
    },
  });

  const onSubmit = async (data: SettingsFormData) => {
    try {
      // TODO: Implement settings update logic
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Paramètres</h1>
      
      <div className="bg-white shadow rounded-lg p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Input
            label="Email"
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />

          <Input
            label="Mot de passe actuel"
            type="password"
            {...register('currentPassword')}
            error={errors.currentPassword?.message}
          />

          <Input
            label="Nouveau mot de passe (optionnel)"
            type="password"
            {...register('newPassword')}
            error={errors.newPassword?.message}
          />

          <Input
            label="Confirmer le nouveau mot de passe"
            type="password"
            {...register('confirmNewPassword')}
            error={errors.confirmNewPassword?.message}
          />

          <Button
            type="submit"
            className="w-full md:w-auto"
            isLoading={isSubmitting}
          >
            Enregistrer les modifications
          </Button>
        </form>
      </div>
    </div>
  );
}