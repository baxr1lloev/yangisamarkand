"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  Info,
  Handshake as HandshakeIcon,
  ArrowRight,
} from "lucide-react";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import CouncilSection from "@/components/sections/CouncilSection";
import GallerySection from "@/components/sections/GallerySection";
import ContactSection from "@/components/sections/ContactSection";
import ScrollVideoHero from "@/components/home/ScrollVideoHero";

import GlowCard from "@/components/ui/GlowCard";
import MagneticButton from "@/components/ui/MagneticButton";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  const newsItems = t.newsSection.items || [];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="home">
        <ScrollVideoHero />
      </section>

      {/* Quick Links - Samarkand Themed */}
      <section className="relative z-20 -mt-12 px-4 md:px-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {[
            {
              href: "/projects",
              Icon: Building2,
              label: t.nav.projects,
              desc: t.quickLinks.projectsDesc,
            },
            {
              href: "/about",
              Icon: Info,
              label: t.nav.about,
              desc: t.quickLinks.aboutDesc,
            },
            {
              href: "/partners",
              Icon: HandshakeIcon,
              label: t.nav.partners,
              desc: t.quickLinks.partnersDesc,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
            >
              <Link
                href={item.href}
                className="group relative flex items-center gap-5 p-6 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 bg-white dark:bg-[#0e2a3a] border border-gray-100 dark:border-[#D49D60]/10 shadow-lg shadow-gray-200/50 dark:shadow-black/20 hover:shadow-xl dark:hover:border-[#D49D60]/30"
              >
                {/* Warm hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-r dark:from-[#D49D60]/5 dark:to-transparent from-primary/5 to-transparent" />

                {/* Top gold accent on hover */}
                <div className="absolute top-0 left-[15%] right-[15%] h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-[#D49D60]/60 to-transparent" />

                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 group-hover:bg-primary group-hover:border-primary"
                >
                  <item.Icon
                    size={22}
                    strokeWidth={1.8}
                    className="text-primary dark:text-primary-300 group-hover:text-white transition-colors duration-500"
                  />
                </motion.div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-text-main dark:text-white text-lg leading-tight mb-0.5 group-hover:text-primary dark:group-hover:text-[#D49D60] transition-colors duration-300">
                    {item.label}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-white/40 group-hover:text-gray-700 dark:group-hover:text-white/60 transition-colors duration-500 truncate">
                    {item.desc}
                  </p>
                </div>

                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-white/5 group-hover:bg-primary/10 dark:group-hover:bg-[#D49D60]/10 transition-all duration-500 shrink-0">
                  <ArrowRight
                    size={16}
                    className="text-gray-400 dark:text-white/30 group-hover:text-primary dark:group-hover:text-[#D49D60] group-hover:translate-x-0.5 transition-all duration-500"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Recent News Section with GlowCards */}
      <section
        id="news"
        className="max-w-7xl mx-auto w-full px-4 md:px-10 py-12 md:py-20 flex flex-col gap-16"
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-text-main dark:text-white text-3xl font-bold leading-tight tracking-tight"
              >
                {t.nav.news}
              </motion.h2>
              <div className="h-1 w-20 bg-accent mt-2 rounded-full"></div>
            </div>
            <MagneticButton>
              <Link
                href="/news"
                className="flex items-center gap-1 text-primary font-bold hover:text-primary-dark transition-colors"
              >
                {t.newsSection.viewAll}{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
            </MagneticButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map(
              (
                item: { title: string; desc: string; date: string },
                index: number,
              ) => (
                <GlowCard key={index} delay={index * 0.15}>
                  <Link href={`/news/${index + 1}`} className="block group">
                    <div
                      className="w-full aspect-video bg-cover bg-center relative overflow-hidden"
                      style={{
                        backgroundImage: `url("/images/news/news_${index + 1}.png")`,
                      }}
                    >
                      {/* Zoom on hover */}
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{
                          backgroundImage: `url("/images/news/news_${index + 1}.png")`,
                        }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                      <div className="relative z-20 p-3">
                        <span className="bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold text-primary shadow-sm">
                          {index === 0
                            ? t.newsSection.categories.events
                            : index === 1
                              ? t.newsSection.categories.grants
                              : t.newsSection.categories.partnerships}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col gap-3">
                      <div className="flex items-center gap-2 text-xs font-semibold text-accent">
                        <span className="material-symbols-outlined text-base">
                          calendar_today
                        </span>
                        <span>{item.date}</span>
                      </div>
                      <h3 className="text-text-main dark:text-white text-lg font-bold leading-snug group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                        {item.desc}
                      </p>
                      <div className="mt-auto pt-4">
                        <span className="text-primary text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                          {t.newsSection.readMore}
                          <span className="material-symbols-outlined text-sm">
                            arrow_right_alt
                          </span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </GlowCard>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Partner Logos Marquee */}
      <section className="py-8 border-y border-gray-100 dark:border-gray-800 bg-white dark:bg-card-dark overflow-hidden">
        <InfiniteMarquee speed={25}>
          {[
            { name: "World Bank", logo: "/images/partners/worldbank.png", logoClass: "max-h-4 w-auto max-w-[60px]" },
            { name: "JICA", logo: "/images/partners/jica.png", logoClass: "max-h-5 w-auto max-w-[20px]" },
            { name: "UNDP", logo: "/images/partners/undp.png", logoClass: "max-h-5 w-auto max-w-[20px]" },
            { name: "ADB", logo: "/images/partners/adb.png", logoClass: "max-h-5 w-auto max-w-[20px]" },
            { name: "EU", logo: "/images/partners/eu.png", logoClass: "max-h-[18px] w-auto max-w-[30px]" },
            { name: "USAID", logo: "/images/partners/usaid.png", logoClass: "max-h-5 w-auto max-w-[22px]" },
            { name: "GIZ", logo: "/images/partners/giz.png", logoClass: "max-h-5 w-auto max-w-[24px]" },
            { name: "Swiss Development", logo: "/images/partners/swiss.png", logoClass: "max-h-5 w-auto max-w-[20px]" },
            { name: "Korea Aid", logo: "/images/partners/korea.png", logoClass: "max-h-[18px] w-auto max-w-[28px]" },
            { name: "Turkish TIKA", logo: "/images/partners/turkey.png", logoClass: "max-h-5 w-auto max-w-[30px]" },
          ].map((partner, i) => {
            return (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-gray-50 dark:bg-surface-dark border border-gray-100 dark:border-gray-700 whitespace-nowrap"
              >
                <div className="h-8 w-10 rounded-md flex items-center justify-center shrink-0 bg-white/90 dark:bg-white border border-gray-200 dark:border-gray-300 overflow-hidden p-1">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={64}
                    height={24}
                    className={`object-contain ${partner.logoClass}`}
                  />
                </div>
                <span className="text-text-main dark:text-gray-300 font-medium text-sm">
                  {partner.name}
                </span>
              </div>
            );
          })}
        </InfiniteMarquee>
      </section>


      {/* Aggregate Sections */}
      <section id="about" className="scroll-mt-20">
        <AboutSection />
      </section>

      <section id="projects" className="scroll-mt-20">
        <ProjectsSection />
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
