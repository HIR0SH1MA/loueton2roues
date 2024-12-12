import React from 'react';
import { cn } from '../../lib/utils';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string | React.ReactNode;
  error?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, className, ...props }, ref) => {
    const id = React.useId();

    return (
      <div className="space-y-2">
        <label className="flex items-center space-x-2">
          <input
            ref={ref}
            type="checkbox"
            id={id}
            className={cn(
              "w-4 h-4 text-blue-600 rounded border-gray-300",
              "focus:ring-blue-500 focus:ring-2",
              error ? "border-red-300" : "border-gray-300",
              className
            )}
            {...props}
          />
          <span className="text-sm text-gray-700">{label}</span>
        </label>
        {error && (
          <p 
            id={`${id}-error`}
            className="text-sm text-red-600"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);