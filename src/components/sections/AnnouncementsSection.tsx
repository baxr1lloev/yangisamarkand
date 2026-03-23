"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function AnnouncementsSection() {
  const { t } = useLanguage();
  const announcements = t.sections.announcements;

  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 bg-background-light dark:bg-background-dark"
      id="announcements"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-text-main dark:text-white">
              {announcements.title}
            </h2>
            <p className="text-text-muted dark:text-gray-400 mt-2">
              {announcements.subtitle}
            </p>
          </div>
          <Link
            href="/news"
            className="text-primary font-bold text-sm flex items-center hover:underline"
          >
            {announcements.viewAll}{" "}
            <span className="material-symbols-outlined text-lg ml-1">
              chevron_right
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {announcements.items?.map((item: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${
                    index === 0
                      ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
                      : "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                  }`}
                >
                  {index === 0 ? announcements.important : announcements.grant}
                </span>
                <span className="text-text-muted dark:text-gray-500 text-sm">
                  {item.posted}
                </span>
              </div>
              <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-text-muted dark:text-gray-400 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
