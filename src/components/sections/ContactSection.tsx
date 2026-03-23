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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info + Map */}
          <div className="space-y-6">
            <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
              <h3 className="text-lg font-bold text-text-main dark:text-white mb-4">
                {contact.info}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">
                    location_on
                  </span>
                  <div>
                    <p className="font-medium text-text-main dark:text-white">
                      {contact.office}
                    </p>
                    <p className="text-text-muted dark:text-gray-400 text-sm">
                      Samarkand, Uzbekistan
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">
                    phone
                  </span>
                  <div>
                    <p className="font-medium text-text-main dark:text-white">
                      {contact.phone}
                    </p>
                    <p className="text-text-muted dark:text-gray-400 text-sm">
                      +998 66 233 01 01
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">
                    mail
                  </span>
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
              className="rounded-2xl overflow-hidden h-[250px] border border-gray-100 dark:border-gray-800 shadow-lg"
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
            <h3 className="text-xl font-bold text-text-main dark:text-white mb-6">
              {contact.sendMessage}
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-text-main dark:text-gray-300 mb-1">
                  {contact.form.name}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark text-text-main dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-main dark:text-gray-300 mb-1">
                  {contact.form.email}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark text-text-main dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-main dark:text-gray-300 mb-1">
                  {contact.form.subject}
                </label>
                <input
                  type="text"
                  placeholder={contact.form.subjectPlaceholder}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark text-text-main dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-main dark:text-gray-300 mb-1">
                  {contact.form.message}
                </label>
                <textarea
                  rows={4}
                  placeholder={contact.form.messagePlaceholder}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark text-text-main dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full h-12 rounded-lg bg-primary hover:bg-primary-dark text-white font-bold transition-all shadow-lg hover:translate-y-[-2px]"
              >
                {contact.form.submit}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
