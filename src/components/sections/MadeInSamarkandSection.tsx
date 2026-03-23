"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function MadeInSamarkandSection() {
  const { t } = useLanguage();
  const mis = t.sections.madeInSamarkand;

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/10 via-primary/5 to-accent/10 dark:from-accent/5 dark:via-primary/5 dark:to-accent/5  border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-6">
          <span className="material-symbols-outlined text-sm">factory</span>
          {mis.title}
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-text-main dark:text-white mb-6">
          {mis.title}
        </h2>
        <p className="text-text-muted dark:text-gray-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          {mis.subtitle}
        </p>
        <a
          href="https://madeinsamarkand.uz"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 h-12 px-8 rounded-lg bg-primary hover:bg-primary-dark text-white text-base font-bold transition-all shadow-lg hover:translate-y-[-2px]"
        >
          {mis.button}{" "}
          <span className="material-symbols-outlined text-lg">open_in_new</span>
        </a>
      </div>
    </section>
  );
}
