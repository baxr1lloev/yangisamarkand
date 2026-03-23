"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function CouncilSection() {
  const { t } = useLanguage();

  const members = [
    {
      name:
        t.sections.council.members?.chairman?.name ||
        "Urakov Khaydar Muhammadiyevich",
      designation: t.sections.council.roles.chairman,
      quote:
        t.sections.council.members?.chairman?.title ||
        'Head of "NAVOBOD NASLLI PARRANDA" Farm',
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      name: "Deputy Name 1",
      designation: "Deputy Chairman",
      quote: "Deputy Position",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      name: "Deputy Name 2",
      designation: "Deputy Chairman",
      quote: "Deputy Position",
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3276&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      name: "Deputy Name 3",
      designation: "Deputy Chairman",
      quote: "Deputy Position",
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ];

  return (
    <div className="w-full">
      <section className="bg-background-light dark:bg-background-dark py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-8">
          <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">
            Leadership
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
