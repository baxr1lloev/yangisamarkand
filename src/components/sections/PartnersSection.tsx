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
              <div className="w-full h-48 flex flex-col items-center justify-center bg-white dark:bg-white/5 rounded-xl p-6 border border-gray-100 dark:border-gray-700 overflow-hidden relative group/img gap-3">
                <svg viewBox="0 0 100 80" className="h-16 w-auto text-primary dark:text-blue-400 opacity-80 group-hover/img:opacity-100 transition-opacity relative z-10" fill="currentColor">
                  <polygon points="50,5 5,25 95,25" />
                  <rect x="10" y="27" width="80" height="4" />
                  <rect x="15" y="33" width="6" height="32" />
                  <rect x="29" y="33" width="6" height="32" />
                  <rect x="43" y="33" width="6" height="32" />
                  <rect x="57" y="33" width="6" height="32" />
                  <rect x="71" y="33" width="6" height="32" />
                  <rect x="85" y="33" width="6" height="32" />
                  <rect x="5" y="67" width="90" height="4" />
                  <rect x="2" y="73" width="96" height="4" />
                </svg>
                <span className="text-sm font-black tracking-[0.2em] text-primary dark:text-blue-400 opacity-80 group-hover/img:opacity-100 transition-opacity">UNESCO</span>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wider rounded-full">
                      Active
                    </span>
                    <span className="text-text-muted dark:text-gray-500 text-xs font-medium">
                      Signed: October 12, 2023
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-text-main dark:text-white mb-3">
                    UNESCO World Heritage Centre
                  </h3>
                  <p className="text-text-muted dark:text-gray-400 text-sm mb-6 leading-relaxed">
                    Memorandum of Understanding on the preservation of historical
                    sites in Samarkand and implementation of sustainable tourism
                    practices compliant with heritage standards.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                  <button className="flex items-center gap-1.5 text-primary text-xs font-bold hover:underline">
                    <span className="material-symbols-outlined text-sm">description</span>
                    View Document
                  </button>
                  <button className="flex items-center gap-1.5 text-text-muted dark:text-gray-400 text-xs hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-sm">link</span>
                    Official Website
                  </button>
                </div>
              </div>
            </div>

            {/* Partner Card 2: EBRD */}
            <div className="group bg-background-light dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-gray-800 p-8 flex flex-col gap-6 hover:shadow-xl transition-all duration-300">
              <div className="w-full h-48 flex flex-col items-center justify-center bg-white dark:bg-white/5 rounded-xl p-6 border border-gray-100 dark:border-gray-700 overflow-hidden relative group/img gap-2">
                <div className="flex items-center gap-2 relative z-10">
                  <div className="flex flex-col gap-1">
                    <div className="w-8 h-2 bg-green-600 rounded-sm transform -skew-x-12"></div>
                    <div className="w-10 h-2 bg-blue-600 rounded-sm transform -skew-x-12"></div>
                    <div className="w-6 h-2 bg-yellow-500 rounded-sm transform -skew-x-12"></div>
                  </div>
                  <span className="text-3xl font-black tracking-tight text-[#006633] dark:text-[#00cc66]">EBRD</span>
                </div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-text-muted dark:text-gray-400 text-center max-w-[150px]">European Bank for Reconstruction</span>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wider rounded-full">
                      Active
                    </span>
                    <span className="text-text-muted dark:text-gray-500 text-xs font-medium">
                      Signed: August 28, 2023
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-text-main dark:text-white mb-3">
                    European Bank for Reconstruction and Development
                  </h3>
                  <p className="text-text-muted dark:text-gray-400 text-sm mb-6 leading-relaxed">
                    Strategic partnership to finance green infrastructure projects
                    in Samarkand, focusing on electric public transport and water
                    management systems.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                  <button className="flex items-center gap-1.5 text-primary text-xs font-bold hover:underline">
                    <span className="material-symbols-outlined text-sm">description</span>
                    View Document
                  </button>
                  <button className="flex items-center gap-1.5 text-text-muted dark:text-gray-400 text-xs hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-sm">link</span>
                    Official Website
                  </button>
                </div>
              </div>
            </div>

            {/* Partner Card 3: JICA */}
            <div className="group bg-background-light dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-gray-800 p-8 flex flex-col gap-6 hover:shadow-xl transition-all duration-300">
              <div className="w-full h-48 flex items-center justify-center bg-white dark:bg-white/5 rounded-xl p-8 border border-gray-100 dark:border-gray-700 overflow-hidden relative group/img">
                <img
                  src="/images/partners/jica.png"
                  alt="JICA Logo"
                  className="max-h-16 w-auto opacity-80 group-hover/img:opacity-100 transition-opacity grayscale group-hover/img:grayscale-0 relative z-10"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider rounded-full">
                      Pending
                    </span>
                    <span className="text-text-muted dark:text-gray-500 text-xs font-medium">
                      Expected: Dec 2024
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-text-main dark:text-white mb-3">
                    Japan International Cooperation Agency
                  </h3>
                  <p className="text-text-muted dark:text-gray-400 text-sm mb-6 leading-relaxed">
                    Collaboration on the "Smart Samarkand" digitalization
                    initiative, including traffic management systems and
                    e-governance platforms.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                  <button className="flex items-center gap-1.5 text-text-muted dark:text-gray-500 text-xs cursor-not-allowed">
                    <span className="material-symbols-outlined text-sm">lock</span>
                    Confidential
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
