import React from 'react';
import { Download } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { exportDashboardData } from '../../../lib/api/dashboard';

export function ExportButton() {
  const [isExporting, setIsExporting] = React.useState(false);

  const handleExport = async (format: 'csv' | 'pdf') => {
    try {
      setIsExporting(true);
      const blob = await exportDashboardData(format);
      
      // Create download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `dashboard-export-${new Date().toISOString()}.${format}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast.success('Export réussi !');
    } catch (error) {
      toast.error('Erreur lors de l\'export');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => handleExport('csv')}
        disabled={isExporting}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 disabled:opacity-50"
        aria-label="Exporter les données"
      >
        <Download className="w-4 h-4" />
        {isExporting ? 'Export en cours...' : 'Exporter les données'}
      </button>
    </div>
  );
}