import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'font-medium rounded-full transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2';

  const variantStyles = {
    primary: 'bg-accent text-white hover:bg-accent-dark focus:ring-offset-background dark:focus:ring-offset-background-dark',
    secondary: 'border border-foreground/20 text-foreground hover:bg-foreground/5 focus:ring-offset-background dark:focus:ring-offset-background-dark',
    ghost: 'text-foreground hover:bg-foreground/5 focus:ring-offset-background dark:focus:ring-offset-background-dark',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
