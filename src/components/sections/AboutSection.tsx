"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
  ShieldCheck,
  Users,
  Lightbulb,
  Landmark,
  Handshake,
  Leaf,
  Award,
  Globe2,
  MessageSquareQuote,
  TrendingUp,
  CalendarCheck2,
  ArrowRight,
} from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";
import MagneticButton from "@/components/ui/MagneticButton";

const coreValueIcons = [
  ShieldCheck,
  Users,
  Lightbulb,
  Landmark,
  Handshake,
  Leaf,
];

export default function AboutSection() {
  const { t } = useLanguage();
  const about = t.sections.about;

  return (
    <div className="w-full">
      {/* Hero Section with Parallax Effect */}
      <section className="relative w-full h-[45vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark/90 via-background-dark/60 to-transparent z-10"></div>
          <motion.div
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url("/images/hero/about_philosophy.png")',
            }}
          />
        </div>
        <div className="relative z-20 container mx-auto px-6 lg:px-40 w-full">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="max-w-[800px]"
          >
            <div className="flex items-center gap-2 mb-4">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="h-[2px] bg-accent-gold"
              />
              {/* <span className="text-accent-gold font-bold uppercase tracking-widest text-sm">
                {about.philosophy}
              </span> */}
            </div>
            <h1
              className="text-white text-5xl lg:text-7xl font-extrabold leading-none tracking-tight mb-2"
              dangerouslySetInnerHTML={{ __html: about.title }}
            />
            <p className="text-slate-200 text-lg lg:text-xl font-medium max-w-[600px] leading-snug">
              {about.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Section with animated reveal */}
      <section className="py-8 px-6 lg:px-40 bg-white dark:bg-background-dark">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-[1000px] mx-auto text-center"
        >
          <span className="inline-block px-3 py-1 bg-accent-gold/10 text-accent-gold text-xs font-bold uppercase tracking-wide rounded mb-6">
            {about.historyTitle}
          </span>
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            {about.historyText}
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision Section with GlowCards */}
      <section className="py-20 px-6 lg:px-40 bg-background-light dark:bg-background-dark border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
            {/* Mission Card */}
            <GlowCard glowColor="rgba(19, 105, 134, 0.3)" className="h-full">
              <div className="group relative p-10 border-l-4 border-primary h-full flex flex-col justify-between">
                <div className="absolute top-10 right-10 text-slate-100 dark:text-slate-800 pointer-events-none group-hover:text-primary/10 transition-colors duration-300">
                  <span className="material-symbols-outlined text-[120px]">
                    flag
                  </span>
                </div>
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary dark:text-primary-300 text-xs font-bold uppercase tracking-wide rounded mb-6">
                    {about.mission}
                  </span>
                  <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                    {about.missionText}
                  </p>
                </div>
              </div>
            </GlowCard>
            {/* Vision Card */}
            <GlowCard glowColor="rgba(212, 157, 96, 0.3)" delay={0.15} className="h-full">
              <div className="group relative p-10 border-l-4 border-accent-gold h-full flex flex-col justify-between">
                <div className="absolute top-10 right-10 text-slate-100 dark:text-slate-800 pointer-events-none group-hover:text-accent-gold/10 transition-colors duration-300">
                  <span className="material-symbols-outlined text-[120px]">
                    visibility
                  </span>
                </div>
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 bg-accent-gold/10 text-accent-gold text-xs font-bold uppercase tracking-wide rounded mb-6">
                    {about.vision}
                  </span>
                  <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                    {about.visionText}
                  </p>
                </div>
              </div>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Membership Section - Minimal Redesign */}
      <section className="py-24 px-6 lg:px-20 relative overflow-hidden bg-slate-50 dark:bg-[#102028]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-accent-gold/10 blur-[110px] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              {about.membershipTitle}
            </h2>
            <p className="mt-6 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              {about.membershipDesc}
            </p>
          </motion.div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {(about.membershipBenefits || []).map((benefit: string, idx: number) => {
              const benefitIcons = [
                Award,
                Globe2,
                MessageSquareQuote,
                TrendingUp,
                CalendarCheck2,
              ];
              const Icon = benefitIcons[idx % benefitIcons.length];
              const isLastOdd =
                idx === (about.membershipBenefits || []).length - 1 &&
                ((about.membershipBenefits || []).length % 2 === 1);

              return (
                <motion.article
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className={`group rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/85 dark:bg-white/[0.03] backdrop-blur-sm p-6 lg:p-7 shadow-[0_8px_30px_rgba(15,23,42,0.05)] dark:shadow-none transition-all duration-300 hover:border-primary/30 hover:-translate-y-0.5 ${isLastOdd ? "sm:col-span-2" : ""}`}
                >
                  <div className="mb-5 flex items-center">
                    <div className="h-10 w-10 rounded-lg border border-primary/20 bg-primary/10 dark:bg-primary/15 text-primary dark:text-primary-300 flex items-center justify-center">
                      <Icon size={18} />
                    </div>
                  </div>

                  <p className="text-slate-800 dark:text-slate-100 text-lg leading-relaxed font-medium">
                    {benefit}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values Section - Minimal Redesign */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-[#152329] dark:to-[#0f1f26] relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />

        <div className="max-w-[1200px] mx-auto px-6 lg:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            
            <h2 className="mt-5 text-slate-900 dark:text-white text-3xl lg:text-4xl font-extrabold tracking-tight">
              {about.valuesTitle}
            </h2>
            <p className="mt-5 text-text-muted dark:text-gray-400 text-base lg:text-lg leading-relaxed">
              {about.valuesSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {(about.values || []).map(
              (value: { title: string; desc: string }, idx: number) => {
                const Icon = coreValueIcons[idx % coreValueIcons.length];

                return (
                  <motion.article
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: idx * 0.06 }}
                    viewport={{ once: true }}
                    className="group relative h-full rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/90 dark:bg-white/[0.02] backdrop-blur-sm p-7 lg:p-8 shadow-[0_8px_30px_rgba(15,23,42,0.04)] dark:shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30"
                  >
                    <div className="mb-6">
                      <div className="h-11 w-11 rounded-xl border border-primary/20 bg-primary/10 dark:bg-primary/15 text-primary dark:text-primary-300 flex items-center justify-center transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                        <Icon size={20} strokeWidth={2} />
                      </div>
                    </div>

                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-snug">
                      {value.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[15px]">
                      {value.desc}
                    </p>

                    <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.article>
                );
              },
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
