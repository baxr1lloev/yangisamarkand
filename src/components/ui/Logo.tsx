"use client";
import React from "react";

interface LogoProps {
  className?: string;
  iconSize?: string;
  showText?: boolean;
  textColor?: string;
}

export function LogoIcon({ className = "size-11" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Pointed Arch (Mihrab) in Gold */}
      <path
        d="M30 90V50C30 35 42 22 60 15C78 22 90 35 90 90"
        stroke="#D49D60"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Outer elegant accent outline */}
      <path
        d="M24 95V50C24 30 40 14 60 8C80 14 96 30 96 95"
        stroke="#D49D60"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="4 3"
        opacity="0.6"
      />
      
      {/* Gold Dome silhouette inside */}
      <path
        d="M42 62C42 50 48 45 60 30C72 45 78 50 78 62H42Z"
        fill="#D49D60"
      />
      
      {/* Dome Spire/Finial */}
      <path
        d="M60 30V22M60 22L58 25M60 22L62 25"
        stroke="#D49D60"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Symmetrical Calligraphic Base in Teal/Blue (currentColor) */}
      {/* Center stem */}
      <path
        d="M60 62V90"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      
      {/* Left wing - elegant geometry */}
      <path
        d="M48 68H38V76H48V84H34"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Right wing - elegant geometry */}
      <path
        d="M72 68H82V76H72V84H86"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Diamond accent under the dome */}
      <path
        d="M60 48L53 55L60 62L67 55Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Logo({
  className = "",
  iconSize = "size-11",
  showText = true,
  textColor = "text-primary dark:text-white",
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3.5 group ${className}`}>
      {/* Vector Logo Icon Container */}
      <div className={`relative ${iconSize} flex items-center justify-center text-primary dark:text-[#D49D60] group-hover:scale-105 transition-transform duration-500`}>
        <LogoIcon className="w-full h-full" />
      </div>
      
      {/* Brand Text */}
      {showText && (
        <span
          className={`text-xl font-bold tracking-[0.03em] uppercase transition-colors duration-500 ${textColor}`}
          style={{ fontFamily: "var(--font-display), Playfair Display, serif" }}
        >
          Yangi Samarqand
        </span>
      )}
    </div>
  );
}
