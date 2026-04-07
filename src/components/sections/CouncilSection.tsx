"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { boardMembers, boardRoleLabels } from "@/lib/board-members";

export default function CouncilSection() {
  const { t, language } = useLanguage();

  const members = boardMembers.map((member) => ({
    name: member.name[language],
    designation: boardRoleLabels[language][member.role],
    quote: member.workplace[language],
    src: member.image,
  }));

  return (
    <div className="w-full">
      <section className="bg-background-light dark:bg-background-dark py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-8">
          <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">
            {t.sections.council.leadership}
          </h2>
          <h1 className="text-4xl md:text-5xl font-black text-text-main dark:text-white mb-6">
            {t.sections.council.title}
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-text-muted dark:text-gray-400 leading-relaxed">
            {t.sections.council.subtitle}
          </p>
        </div>

        <AnimatedTestimonials testimonials={members} autoplay />
      </section>
    </div>
  );
}
