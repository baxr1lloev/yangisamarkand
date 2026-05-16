"use client";
import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function AboutPage() {
  const { t } = useLanguage();
  const about = t.sections.about;

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      {/* Hero */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary to-primary-dark text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            {t.nav.about}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {about.subtitle}
          </p>
        </div>
      </section>

      {/* Mission / Vision / Slogan */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: "flag", title: about.mission, text: about.missionText },
            { icon: "visibility", title: about.vision, text: about.visionText },
            { icon: "campaign", title: about.slogan, text: about.sloganText },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-surface-light dark:bg-surface-dark rounded-2xl p-8 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all"
            >
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-text-main dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-text-muted dark:text-gray-400 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* History */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-card-dark">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title={about.historyTitle} center />
          <p className="text-text-muted dark:text-gray-400 text-lg max-w-3xl mx-auto text-center leading-relaxed mt-6">
            {about.historyText}
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title={about.valuesTitle}
            subtitle={about.valuesSubtitle}
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {about.values?.map((value: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all"
              >
                <h4 className="text-lg font-bold text-text-main dark:text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-card-dark">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title={about.membershipTitle} center />
          <p className="text-text-muted dark:text-gray-400 text-lg max-w-2xl mx-auto text-center mb-10">
            {about.membershipDesc}
          </p>
          <div className="max-w-2xl mx-auto space-y-4">
            {about.membershipBenefits?.map((benefit: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 bg-surface-light dark:bg-surface-dark p-4 rounded-lg border border-gray-100 dark:border-gray-800"
              >
                <span className="material-symbols-outlined text-primary mt-0.5">
                  check_circle
                </span>
                <p className="text-text-main dark:text-gray-300 text-sm">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Fees Table */}
      {about.membershipFees && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title={about.membershipFeesTitle} center />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto mt-10"
            >
              <div className="bg-surface-light dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden shadow-sm">
                <table className="w-full">
                  <thead className="bg-primary/5 dark:bg-primary/10">
                    <tr>
                      <th className="text-left p-4 text-xs font-bold uppercase tracking-wide text-text-main dark:text-white">
                        №
                      </th>
                      <th className="text-left p-4 text-xs font-bold uppercase tracking-wide text-text-main dark:text-white">
                        {about.membershipFeesTitle?.split(" ").slice(-1)[0] === "Fees"
                          ? "Category"
                          : about.membershipFeesTitle?.includes("взнос")
                            ? "Категория"
                            : "Toifa"}
                      </th>
                      <th className="text-right p-4 text-xs font-bold uppercase tracking-wide text-text-main dark:text-white">
                        {about.membershipFeesTitle?.split(" ").slice(-1)[0] === "Fees"
                          ? "Annual Fee"
                          : about.membershipFeesTitle?.includes("взнос")
                            ? "Годовой взнос"
                            : "Yillik badal"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {about.membershipFees.map(
                      (fee: { category: string; amount: string }, i: number) => (
                        <tr
                          key={i}
                          className="border-t border-gray-100 dark:border-gray-800 hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors"
                        >
                          <td className="p-4 text-sm font-bold text-primary">
                            {i + 1}
                          </td>
                          <td className="p-4 text-sm text-text-main dark:text-gray-300">
                            {fee.category}
                          </td>
                          <td className="p-4 text-sm font-bold text-text-main dark:text-white text-right whitespace-nowrap">
                            {fee.amount}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
              <p className="text-text-muted dark:text-gray-500 text-sm text-center mt-4 italic">
                {about.membershipFeesNote}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Honorary Membership */}
      {about.honoraryTitle && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-card-dark">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-amber-900/20 dark:to-amber-800/10 rounded-2xl p-8 border border-amber-200 dark:border-amber-800/40">
                <div className="flex items-start gap-4">
                  <div className="size-12 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-amber-600 dark:text-amber-400">
                      military_tech
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-main dark:text-white mb-3">
                      {about.honoraryTitle}
                    </h3>
                    <p className="text-text-muted dark:text-gray-400 leading-relaxed">
                      {about.honoraryDesc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}
