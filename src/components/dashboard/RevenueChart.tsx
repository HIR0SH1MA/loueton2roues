import React from 'react';

const mockData = [
  { month: 'Jan', value: 1200 },
  { month: 'Fév', value: 1800 },
  { month: 'Mar', value: 1400 },
  { month: 'Avr', value: 2200 },
  { month: 'Mai', value: 1900 },
  { month: 'Juin', value: 2800 },
];

export function RevenueChart() {
  const maxValue = Math.max(...mockData.map(d => d.value));
  
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Revenus mensuels</h3>
      <div className="h-64">
        <div className="flex h-full items-end space-x-2">
          {mockData.map((item) => (
            <div key={item.month} className="flex-1 flex flex-col items-center">
              <div 
                className="w-full bg-blue-500 rounded-t"
                style={{ 
                  height: `${(item.value / maxValue) * 100}%`,
                  transition: 'height 0.3s ease-in-out'
                }}
              />
              <div className="mt-2 text-sm text-gray-600">{item.month}</div>
              <div className="text-xs text-gray-500">{item.value}€</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}