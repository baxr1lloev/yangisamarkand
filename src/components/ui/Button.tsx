import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "px-6 py-2.5 rounded-md font-medium transition-all duration-200 flex items-center justify-center";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-md",
    secondary: "bg-accent text-white hover:bg-accent-gold/90 shadow-md",
    outline:
      "border-2 border-primary text-primary hover:bg-primary/5 dark:text-primary-light dark:border-primary-light",
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
