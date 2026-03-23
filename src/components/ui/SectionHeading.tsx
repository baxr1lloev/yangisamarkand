import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  center?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  className = "",
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-8 ${center ? "text-center" : ""} ${className}`}>
      {subtitle && (
        <span className="text-accent font-semibold tracking-wider text-sm uppercase block mb-2">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white">
        {title}
      </h2>
      <div
        className={`mt-3 h-1 w-20 bg-accent rounded-full ${center ? "mx-auto" : ""}`}
      ></div>
    </div>
  );
}
