import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export default function Button({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseStyles = "px-6 py-2.5 rounded-md font-medium transition-all duration-200 flex items-center justify-center";
  
  const variants = {
    primary: "bg-blue-900 text-white hover:bg-blue-800 shadow-md",
    secondary: "bg-yellow-600 text-white hover:bg-yellow-500 shadow-md",
    outline: "border-2 border-blue-900 text-blue-900 hover:bg-blue-50"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
