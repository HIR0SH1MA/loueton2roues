import React from 'react';
import { cn } from '../../lib/utils';
import { LucideIcon } from 'lucide-react';

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: LucideIcon;
  containerClassName?: string;
}

export function SearchInput({ icon: Icon, containerClassName, className, ...props }: SearchInputProps) {
  return (
    <div className={cn("flex-1 flex items-center gap-2", containerClassName)}>
      <Icon className="w-5 h-5 text-blue-600 flex-shrink-0" />
      <input
        className={cn(
          "w-full outline-none text-gray-700 bg-transparent placeholder:text-gray-500",
          className
        )}
        {...props}
      />
    </div>
  );
}