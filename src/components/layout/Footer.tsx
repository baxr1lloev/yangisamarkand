"use client";
import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-auto bg-surface-light dark:bg-surface-dark border-t border-[#e8f0f3] dark:border-gray-800">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-3 text-text-main dark:text-white">
              <div className="size-8 text-primary">
                <span className="material-symbols-outlined text-3xl">mosque</span>
              </div>
              <span className="font-bold font-header text-lg uppercase">Yangi Samarqand</span>
            </div>
            <p className="text-text-sub text-sm leading-relaxed">
              {t.footer.desc}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-text-main dark:text-white">{t.footer.quickLinks}</h4>
            <Link href="#about" className="text-text-sub hover:text-primary text-sm transition-colors">{t.nav.about}</Link>
            <Link href="#projects" className="text-text-sub hover:text-primary text-sm transition-colors">{t.nav.projects}</Link>
            <Link href="#news" className="text-text-sub hover:text-primary text-sm transition-colors">{t.nav.news}</Link>
            <Link href="#contact" className="text-text-sub hover:text-primary text-sm transition-colors">{t.nav.contact}</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-text-main dark:text-white">{t.footer.contact}</h4>
            <p className="text-text-sub text-sm">14, Amir Temur Street,<br/>Samarkand, Uzbekistan</p>
            <a href="mailto:info@yangisamarqand.uz" className="text-text-sub hover:text-primary text-sm transition-colors">info@yangisamarqand.uz</a>
            <a href="tel:+998661234567" className="text-text-sub hover:text-primary text-sm transition-colors">+998 (66) 123-45-67</a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-text-main dark:text-white">{t.footer.follow}</h4>
            <div className="flex gap-3">
              <a href="#" className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined text-sm">public</span>
              </a>
              <a href="#" className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined text-sm">chat_bubble</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#e7f1f3] dark:border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-sub">
          <p>© {new Date().getFullYear()} Yangi Samarqand Public Fund. {t.footer.rights}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
