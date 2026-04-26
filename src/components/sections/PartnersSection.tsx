"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function PartnersSection() {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      <section className="bg-background-light dark:bg-background-dark py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-black text-text-main dark:text-white mb-6">
              {t.sections.partners.title}
            </h1>
            <p className="text-xl text-text-muted dark:text-gray-400 leading-relaxed">
              {t.sections.partners.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* ... Content remains similar, could translate individual partner descriptions if detailed dictionary provided ... */}
      <section className="bg-white dark:bg-background-dark py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Partner Card 1: UNESCO */}
            <div className="group bg-background-light dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-gray-800 p-8 flex flex-col gap-6 hover:shadow-xl transition-all duration-300">
              <div className="w-full h-48 flex items-center justify-center bg-white dark:bg-white/5 rounded-xl p-8 border border-gray-100 dark:border-gray-700 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=400&fit=crop"
                  alt="Partnership Image"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-700"
                />
                <span className="relative z-10 text-4xl font-black text-primary/40 group-hover:text-white transition-colors">
                  UNESCO
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wider rounded-full">
                    Strategic
                  </span>
                  <span className="text-text-muted dark:text-gray-500 text-sm font-medium">
                    Oct 2023
                  </span>
                </div>
                <h3 className="text-xl font-bold text-text-main dark:text-white mb-3">
                  UNESCO Heritage Centre
                </h3>
                <p className="text-text-muted dark:text-gray-400 text-sm mb-6 leading-relaxed">
                  Preservation of historical sites and implementation of
                  sustainable tourism.
                </p>
                <div className="flex items-center gap-4">
                  <button className="text-primary text-sm font-bold hover:underline">
                    View MoU
                  </button>
                  <button className="text-text-muted dark:text-gray-400 text-sm hover:text-primary transition-colors">
                    Website
                  </button>
                </div>
              </div>
            </div>

            <div className="group bg-background-light dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-gray-800 p-8 flex flex-col gap-6 hover:shadow-xl transition-all duration-300">
              <div className="w-full h-48 flex items-center justify-center bg-white dark:bg-white/5 rounded-xl p-8 border border-gray-100 dark:border-gray-700 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=400&fit=crop"
                  alt="Partnership Image"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-700"
                />
                <span className="relative z-10 text-4xl font-black text-primary/40 group-hover:text-white transition-colors">
                  UNDP
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider rounded-full">
                    Development
                  </span>
                  <span className="text-text-muted dark:text-gray-500 text-sm font-medium">
                    Dec 2023
                  </span>
                </div>
                <h3 className="text-xl font-bold text-text-main dark:text-white mb-3">
                  UNDP Uzbekistan
                </h3>
                <p className="text-text-muted dark:text-gray-400 text-sm mb-6 leading-relaxed">
                  Joint initiatives on digital economy and youth startup
                  ecosystems.
                </p>
                <div className="flex items-center gap-4">
                  <button className="text-primary text-sm font-bold hover:underline">
                    View MoU
                  </button>
                  <button className="text-text-muted dark:text-gray-400 text-sm hover:text-primary transition-colors">
                    Website
                  </button>
                </div>
              </div>
            </div>

            {/* Partner Card 3: World Bank */}
            <div className="group bg-background-light dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-gray-800 p-8 flex flex-col gap-6 hover:shadow-xl transition-all duration-300">
              <div className="w-full h-48 flex items-center justify-center bg-white dark:bg-white/5 rounded-xl p-8 border border-gray-100 dark:border-gray-700 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&fit=crop"
                  alt="Partnership Image"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-700"
                />
                <span className="relative z-10 text-4xl font-black text-primary/40 group-hover:text-white transition-colors">
                  WORLD BANK
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs font-bold uppercase tracking-wider rounded-full">
                    Infrastructure
                  </span>
                  <span className="text-text-muted dark:text-gray-500 text-sm font-medium">
                    Jan 2024
                  </span>
                </div>
                <h3 className="text-xl font-bold text-text-main dark:text-white mb-3">
                  The World Bank
                </h3>
                <p className="text-text-muted dark:text-gray-400 text-sm mb-6 leading-relaxed">
                  Financing framework for modern urban infrastructure and
                  transportation.
                </p>
                <div className="flex items-center gap-4">
                  <button className="text-primary text-sm font-bold hover:underline">
                    View MoU
                  </button>
                  <button className="text-text-muted dark:text-gray-400 text-sm hover:text-primary transition-colors">
                    Website
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
