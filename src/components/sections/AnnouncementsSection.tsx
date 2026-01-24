"use client";
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

export default function AnnouncementsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 px-4 bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
           <div>
             <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-2">{t.sections.announcements?.title || "Announcements"}</h2>
             <h3 className="text-3xl font-bold text-slate-900 dark:text-white">{t.sections.announcements?.subtitle || "Latest Updates"}</h3>
           </div>
           <Link href="/announcements" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
             View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
           </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-xl border border-gray-100 dark:border-gray-700 flex flex-col gap-4">
              <span className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-bold w-fit">IMPORTANT</span>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">General Meeting of the Public Council</h4>
              <p className="text-slate-600 dark:text-gray-400">The next general meeting will be held on June 25th in the main conference hall.</p>
              <span className="text-sm text-gray-400 mt-auto">Posted: 2 days ago</span>
           </div>
           <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-xl border border-gray-100 dark:border-gray-700 flex flex-col gap-4">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-bold w-fit">GRANT</span>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">Applications Open for Youth Startups</h4>
              <p className="text-slate-600 dark:text-gray-400">We are now accepting applications for the Q3 funding cycle. Apply before July 1st.</p>
              <span className="text-sm text-gray-400 mt-auto">Posted: 5 days ago</span>
           </div>
        </div>
      </div>
    </section>
  );
}
