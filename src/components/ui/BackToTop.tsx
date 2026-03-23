"use client";
import React, { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-8 right-8 z-50 size-12 rounded-full bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center animate-in fade-in duration-300"
    >
      <span className="material-symbols-outlined">keyboard_arrow_up</span>
    </button>
  );
}
