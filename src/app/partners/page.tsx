"use client";
import React from "react";

export default function PartnersPage() {
  return (
    <>
      <section className="bg-background-light dark:bg-background-dark py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-black text-text-main dark:text-white mb-6">
              Partnerships & Memorandums
            </h1>
            <p className="text-xl text-text-muted dark:text-gray-400 leading-relaxed">
              We collaborate with leading international organizations, financial
              institutions, and government bodies to drive sustainable
              development in Samarkand.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-background-dark py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {/* Memorandum Item 1 */}
            <div className="group bg-background-light dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-gray-800 p-8 flex flex-col md:flex-row gap-8 hover:shadow-lg transition-all duration-300">
              <div className="w-full md:w-1/4 flex-shrink-0 flex flex-col items-center justify-center bg-white dark:bg-white/5 rounded-xl p-8 border border-gray-100 dark:border-gray-700 gap-3 group/img">
                <svg viewBox="0 0 100 80" className="h-16 w-auto text-primary dark:text-blue-400 opacity-80 group-hover/img:opacity-100 transition-opacity" fill="currentColor">
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
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wider rounded-full">
                    Active
                  </span>
                  <span className="text-text-muted dark:text-gray-500 text-sm font-medium">
                    Signed: October 12, 2023
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-text-main dark:text-white mb-3">
                  UNESCO World Heritage Centre
                </h3>
                <p className="text-text-muted dark:text-gray-400 text-lg mb-6 leading-relaxed">
                  Memorandum of Understanding on the preservation of historical
                  sites in Samarkand and implementation of sustainable tourism
                  practices compliant with heritage standards.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="flex items-center gap-2 text-primary font-bold hover:underline">
                    <span className="material-symbols-outlined">
                      description
                    </span>{" "}
                    View Document
                  </button>
                  <button className="flex items-center gap-2 text-text-muted dark:text-gray-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">link</span>{" "}
                    Official Website
                  </button>
                </div>
              </div>
            </div>

            {/* Memorandum Item 2 */}
            <div className="group bg-background-light dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-gray-800 p-8 flex flex-col md:flex-row gap-8 hover:shadow-lg transition-all duration-300">
              <div className="w-full md:w-1/4 flex-shrink-0 flex flex-col items-center justify-center bg-white dark:bg-white/5 rounded-xl p-8 border border-gray-100 dark:border-gray-700 gap-2 group/img">
                <div className="flex items-center gap-2">
                  <div className="flex flex-col gap-1">
                    <div className="w-8 h-2 bg-green-600 rounded-sm transform -skew-x-12"></div>
                    <div className="w-10 h-2 bg-blue-600 rounded-sm transform -skew-x-12"></div>
                    <div className="w-6 h-2 bg-yellow-500 rounded-sm transform -skew-x-12"></div>
                  </div>
                  <span className="text-3xl font-black tracking-tight text-[#006633] dark:text-[#00cc66]">EBRD</span>
                </div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-text-muted dark:text-gray-400 text-center max-w-[150px]">European Bank for Reconstruction</span>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wider rounded-full">
                    Active
                  </span>
                  <span className="text-text-muted dark:text-gray-500 text-sm font-medium">
                    Signed: August 28, 2023
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-text-main dark:text-white mb-3">
                  European Bank for Reconstruction and Development
                </h3>
                <p className="text-text-muted dark:text-gray-400 text-lg mb-6 leading-relaxed">
                  Strategic partnership to finance green infrastructure projects
                  in Samarkand, focusing on electric public transport and water
                  management systems.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="flex items-center gap-2 text-primary font-bold hover:underline">
                    <span className="material-symbols-outlined">
                      description
                    </span>{" "}
                    View Document
                  </button>
                  <button className="flex items-center gap-2 text-text-muted dark:text-gray-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">link</span>{" "}
                    Official Website
                  </button>
                </div>
              </div>
            </div>

            {/* Memorandum Item 3 */}
            <div className="group bg-background-light dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-gray-800 p-8 flex flex-col md:flex-row gap-8 hover:shadow-lg transition-all duration-300">
              <div className="w-full md:w-1/4 flex-shrink-0 flex items-center justify-center bg-white dark:bg-white/5 rounded-xl p-8 border border-gray-100 dark:border-gray-700">
                <img
                  src="/images/partners/jica.png"
                  alt="JICA Logo"
                  className="max-h-16 w-auto opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider rounded-full">
                    Pending
                  </span>
                  <span className="text-text-muted dark:text-gray-500 text-sm font-medium">
                    Expected: Dec 2024
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-text-main dark:text-white mb-3">
                  Japan International Cooperation Agency
                </h3>
                <p className="text-text-muted dark:text-gray-400 text-lg mb-6 leading-relaxed">
                  Collaboration on the "Smart Samarkand" digitalization
                  initiative, including traffic management systems and
                  e-governance platforms.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="flex items-center gap-2 text-text-muted dark:text-gray-500 cursor-not-allowed">
                    <span className="material-symbols-outlined">lock</span>{" "}
                    Confidential
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 px-4 md:px-10 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <h2 className="text-white text-3xl font-bold">
            Interested in Partnering?
          </h2>
          <p className="text-white/80 text-lg">
            We are always open to new collaborations that align with our mission
            to develop Samarkand sustainably. Let's discuss how we can work
            together.
          </p>
          <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition-colors shadow-lg mt-2">
            Contact Partnership Dept.
          </button>
        </div>
      </section>
    </>
  );
}
