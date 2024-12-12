import React from 'react';
import { cn } from '../../lib/utils';
import { LucideIcon } from 'lucide-react';

interface SearchSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  icon: LucideIcon;
  options: Array<{ value: string; label: string }>;
  containerClassName?: string;
}

export function SearchSelect({ icon: Icon, options, containerClassName, className, ...props }: SearchSelectProps) {
  return (
    <div className={cn("flex-1 flex items-center gap-2", containerClassName)}>
      <Icon className="w-5 h-5 text-blue-600 flex-shrink-0" />
      <select
        className={cn(
          "w-full outline-none text-gray-700 bg-transparent appearance-none cursor-pointer",
          className
        )}
        {...props}
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}