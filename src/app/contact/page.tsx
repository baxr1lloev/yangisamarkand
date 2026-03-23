"use client";
import React from "react";
import { motion } from "framer-motion";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const contact = t.sections.contact;

  const mapState = {
    center: [39.6542, 66.9597],
    zoom: 15,
    controls: [],
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      {/* Hero */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary to-primary-dark text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            {contact.title}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {contact.haveQuestions}
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info + Map */}
            <div className="space-y-6">
              <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm">
                <h2 className="text-2xl font-bold text-text-main dark:text-white mb-6">
                  {contact.info}
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined">
                        location_on
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-text-main dark:text-white">
                        {contact.office}
                      </p>
                      <p className="text-text-muted dark:text-gray-400 text-sm">
                        Samarkand, Uzbekistan
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined">phone</span>
                    </div>
                    <div>
                      <p className="font-medium text-text-main dark:text-white">
                        {contact.phone}
                      </p>
                      <p className="text-text-muted dark:text-gray-400 text-sm">
                        +998 66 233 01 01
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div>
                      <p className="font-medium text-text-main dark:text-white">
                        Email
                      </p>
                      <p className="text-text-muted dark:text-gray-400 text-sm">
                        info@yangisamarqand.uz
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden h-80 border border-gray-100 dark:border-gray-800 shadow-lg"
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

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-surface-light dark:bg-surface-dark rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-text-main dark:text-white mb-6">
                {contact.sendMessage}
              </h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-text-main dark:text-gray-300 mb-1.5">
                    {contact.form.name}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark text-text-main dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-main dark:text-gray-300 mb-1.5">
                    {contact.form.email}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark text-text-main dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-main dark:text-gray-300 mb-1.5">
                    {contact.form.subject}
                  </label>
                  <input
                    type="text"
                    placeholder={contact.form.subjectPlaceholder}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark text-text-main dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-main dark:text-gray-300 mb-1.5">
                    {contact.form.message}
                  </label>
                  <textarea
                    rows={5}
                    placeholder={contact.form.messagePlaceholder}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark text-text-main dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full h-12 rounded-lg bg-primary hover:bg-primary-dark text-white font-bold transition-all shadow-lg hover:-translate-y-0.5"
                >
                  {contact.form.submit}
                </button>
                <p className="text-text-muted dark:text-gray-500 text-xs text-center">
                  {contact.form.privacyNote} {contact.form.privacyPolicy}.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
