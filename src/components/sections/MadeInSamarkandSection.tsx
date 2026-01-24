"use client";
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function MadeInSamarkandSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.5) 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
      <div className="max-w-[1280px] mx-auto relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-6">Made in Samarkand</h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
          Discover the industrial potential of our region. Browse the electronic catalog of products manufactured in Samarkand.
        </p>
        <a 
          href="https://madeinsamarkand.uz" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-gold hover:text-white transition-all shadow-lg hover:shadow-xl"
        >
          Open Catalog
          <span className="material-symbols-outlined">open_in_new</span>
        </a>
      </div>
    </section>
  );
}
