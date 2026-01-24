"use client";
import React from 'react';
import Link from 'next/link';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import PartnersSection from '@/components/sections/PartnersSection';
import CouncilSection from '@/components/sections/CouncilSection';
import GallerySection from '@/components/sections/GallerySection';
import ContactSection from '@/components/sections/ContactSection';
import ScrollVideoHero from '@/components/home/ScrollVideoHero';
import AnnouncementsSection from '@/components/sections/AnnouncementsSection';
import MadeInSamarkandSection from '@/components/sections/MadeInSamarkandSection';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="home">
        <ScrollVideoHero />
      </section>

      {/* Quick Links / Stats Strip */}
      <section className="bg-white dark:bg-card-dark border-b border-gray-100 dark:border-gray-800 relative z-20 -mt-8 mx-4 md:mx-10 rounded-xl shadow-lg shadow-gray-200/50 dark:shadow-none max-w-[1280px] xl:mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100 dark:divide-gray-800">
          <Link href="/projects" className="group p-6 flex items-center gap-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors first:rounded-t-xl md:first:rounded-l-xl md:first:rounded-tr-none">
            <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">domain</span>
            </div>
            <div>
              <h3 className="font-bold text-[#0e171b] dark:text-white text-lg">{t.nav.projects}</h3>
              <p className="text-sm text-gray-500">View our portfolio of success</p>
            </div>
            <span className="material-symbols-outlined ml-auto text-gray-300 group-hover:text-[#D49D60]">arrow_forward</span>
          </Link>
          <Link href="/about" className="group p-6 flex items-center gap-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
             <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">storefront</span>
            </div>
            <div>
              <h3 className="font-bold text-[#0e171b] dark:text-white text-lg">{t.nav.about}</h3>
              <p className="text-sm text-gray-500">Support for local businesses</p>
            </div>
            <span className="material-symbols-outlined ml-auto text-gray-300 group-hover:text-[#D49D60]">arrow_forward</span>
          </Link>
          <Link href="/partners" className="group p-6 flex items-center gap-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors last:rounded-b-xl md:last:rounded-r-xl md:last:rounded-bl-none">
            <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">handshake</span>
            </div>
            <div>
              <h3 className="font-bold text-[#0e171b] dark:text-white text-lg">{t.nav.partners}</h3>
              <p className="text-sm text-gray-500">Partner with the fund</p>
            </div>
            <span className="material-symbols-outlined ml-auto text-gray-300 group-hover:text-[#D49D60]">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* Recent News Section */}
      <section id="news" className="max-w-[1280px] mx-auto w-full px-4 md:px-10 py-12 md:py-20 flex flex-col gap-16">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-[#0e171b] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em]">{t.nav.news}</h2>
              <div className="h-1 w-20 bg-[#D49D60] mt-2 rounded-full"></div>
            </div>
            <Link href="/news" className="hidden sm:flex items-center gap-1 text-primary font-bold hover:text-[#0f546b] transition-colors">
              View All News <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/news/1" className="block group">
              <article className="flex flex-col bg-[#EEEEEC] dark:bg-card-dark rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-full aspect-video bg-cover bg-center relative" style={{ backgroundImage: 'url("/images/news/news_1.png")' }}>
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold text-primary shadow-sm">EVENTS</div>
                </div>
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#D49D60]">
                    <span className="material-symbols-outlined text-base">calendar_today</span>
                    <span>15 MAY 2024</span>
                  </div>
                  <h3 className="text-[#0e171b] dark:text-white text-lg font-bold leading-snug group-hover:text-primary transition-colors">International Business Forum 2024 Held in Samarkand</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">Delegates from over 30 countries gathered to discuss investment opportunities...</p>
                  <div className="mt-auto pt-4">
                    <span className="text-primary text-sm font-bold flex items-center gap-1">Read More <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_right_alt</span></span>
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/news/2" className="block group">
              <article className="flex flex-col bg-[#EEEEEC] dark:bg-card-dark rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-full aspect-video bg-cover bg-center relative" style={{ backgroundImage: 'url("/images/news/news_2.png")' }}>
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold text-primary shadow-sm">GRANTS</div>
                </div>
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#D49D60]">
                    <span className="material-symbols-outlined text-base">calendar_today</span>
                    <span>10 MAY 2024</span>
                  </div>
                  <h3 className="text-[#0e171b] dark:text-white text-lg font-bold leading-snug group-hover:text-primary transition-colors">New Grant Program Announced for Local Entrepreneurs</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">Small and medium enterprises can now apply for funding to support export-oriented production...</p>
                  <div className="mt-auto pt-4">
                    <span className="text-primary text-sm font-bold flex items-center gap-1">Read More <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_right_alt</span></span>
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/news/3" className="block group">
              <article className="flex flex-col bg-[#EEEEEC] dark:bg-card-dark rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-full aspect-video bg-cover bg-center relative" style={{ backgroundImage: 'url("/images/news/news_3.png")' }}>
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold text-primary shadow-sm">PARTNERSHIPS</div>
                </div>
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#D49D60]">
                    <span className="material-symbols-outlined text-base">calendar_today</span>
                    <span>05 MAY 2024</span>
                  </div>
                  <h3 className="text-[#0e171b] dark:text-white text-lg font-bold leading-snug group-hover:text-primary transition-colors">Partnership Agreement Signed with Tech Park</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">A strategic alliance to boost the local startup ecosystem through mentorship...</p>
                  <div className="mt-auto pt-4">
                    <span className="text-primary text-sm font-bold flex items-center gap-1">Read More <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_right_alt</span></span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>

      {/* Aggregate Sections */}
      <section id="about" className="scroll-mt-20">
        <AboutSection />
      </section>
      
      <section id="projects" className="scroll-mt-20">
        <ProjectsSection />
      </section>
      
      <MadeInSamarkandSection />

      <section id="announcements" className="scroll-mt-20">
        <AnnouncementsSection />
      </section>

      <section id="partners" className="scroll-mt-20">
        <PartnersSection />
      </section>
      
      <section id="council" className="scroll-mt-20">
        <CouncilSection />
      </section>
      
      <section id="gallery" className="scroll-mt-20">
        <GallerySection />
      </section>
      
      <section id="contact" className="scroll-mt-20">
        <ContactSection />
      </section>
    </div>
  );
}
