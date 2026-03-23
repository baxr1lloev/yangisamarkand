"use client";
import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsMapHero() {
  const { t } = useLanguage();
  const mapState = {
    center: [39.6542, 66.9597],
    zoom: 13,
    controls: [],
  };

  return (
    <section className="relative w-full py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl overflow-hidden relative min-h-[400px] md:min-h-[480px] flex items-center justify-center p-8 md:p-16 shadow-2xl">
          {/* Yandex Map Background */}
          <div className="absolute inset-0 z-0 grayscale-[0.3]">
            <YMaps>
              <div className="w-full h-full">
                <Map
                  defaultState={mapState}
                  width="100%"
                  height="100%"
                  options={{
                    suppressMapOpenBlock: true,
                    autoFitToViewport: "always",
                  }}
                >
                  <Placemark geometry={[39.6542, 66.9597]} />
                </Map>
              </div>
            </YMaps>
          </div>

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 z-10 pointer-events-none"></div>

          {/* Content */}
          <div className="relative z-20 flex flex-col items-center text-center max-w-3xl mx-auto gap-6 pointer-events-none">
            <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-2xl">
              {t.sections.projects.title || "Building Our Future"}
            </h1>
            <p className="text-gray-100 text-lg md:text-xl font-normal leading-relaxed max-w-2xl drop-shadow-md">
              {t.sections.projects.subtitle ||
                "Explore the initiatives driving social, scientific, and economic growth in Samarkand."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 pointer-events-auto">
              <button className="h-12 px-8 rounded-lg bg-primary hover:bg-primary-dark text-white text-base font-bold transition-all shadow-lg hover:translate-y-[-2px]">
                {t.sections.projects.buttons?.all || "View All Projects"}
              </button>
              <button className="h-12 px-8 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-base font-bold transition-all">
                {t.sections.projects.buttons?.submit || "Submit Proposal"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
