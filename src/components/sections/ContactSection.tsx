"use client";
import React from "react";
import { motion } from "framer-motion";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();
  const contact = t.sections.contact;

  const mapState = {
    center: [39.6542, 66.9597],
    zoom: 15,
    controls: [],
  };

  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-background-dark relative overflow-hidden"
      id="contact"
    >
      {/* Decorative bg */}
      <div className="absolute -top-20 -right-20 size-72 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 size-72 bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-text-main dark:text-white mb-4">
            {contact.title}
          </h2>
          <p className="text-text-muted dark:text-gray-400 text-lg">
            {contact.haveQuestions}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {/* Contact Info */}
          {/* Contact Info */}
          <div className="bg-surface-light dark:bg-surface-dark rounded-3xl p-6 md:p-10 border border-gray-100 dark:border-gray-800 shadow-lg">
            <h3 className="text-2xl font-bold text-text-main dark:text-white mb-8 text-center">
              {contact.info}
            </h3>
            <div className="flex flex-col rounded-2xl border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-white/5 divide-y divide-gray-200 dark:divide-gray-700/50 overflow-hidden shadow-sm">
              <a
                href="mailto:info@yangisamarqand.uz"
                className="flex items-center gap-5 md:gap-6 p-4 md:p-6 hover:bg-gray-50 dark:hover:bg-white/5 transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 bg-gray-100 dark:bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-text-main dark:text-white group-hover:text-primary text-xl md:text-2xl">
                    mail
                  </span>
                </div>
                <div className="text-left flex-1">
                  <p className="font-bold text-text-main dark:text-white text-base md:text-lg group-hover:text-primary transition-colors">
                    info@yangisamarqand.uz
                  </p>
                </div>
              </a>

              <a
                href="https://maps.google.com/?q=39.6542,66.9597"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 md:gap-6 p-4 md:p-6 hover:bg-gray-50 dark:hover:bg-white/5 transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 bg-gray-100 dark:bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-text-main dark:text-white group-hover:text-primary text-xl md:text-2xl">
                    location_on
                  </span>
                </div>
                <div className="text-left flex-1">
                  <p className="font-bold text-text-main dark:text-white text-base md:text-lg leading-snug group-hover:text-primary transition-colors">
                    Samarkand, Uzbekistan
                  </p>
                </div>
              </a>

              <a
                href="tel:+998662330101"
                className="flex items-center gap-5 md:gap-6 p-4 md:p-6 hover:bg-gray-50 dark:hover:bg-white/5 transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 bg-gray-100 dark:bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-text-main dark:text-white group-hover:text-primary text-xl md:text-2xl">
                    phone
                  </span>
                </div>
                <div className="text-left flex-1">
                  <p className="font-bold text-text-main dark:text-white text-base md:text-lg group-hover:text-primary transition-colors">
                    +998 66 233-01-01
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden h-[400px] border border-gray-100 dark:border-gray-800 shadow-xl"
          >
            <YMaps>
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
            </YMaps>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
