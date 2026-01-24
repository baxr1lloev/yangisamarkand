"use client";
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

export default function CouncilSection() {
  const { t } = useLanguage();

  const members = [
    {
      name: t.sections.council.members?.chairman?.name || 'Urakov Khaydar Muhammadiyevich',
      role: t.sections.council.roles.chairman,
      title: t.sections.council.members?.chairman?.title || 'Head of "NAVOBOD NASLLI PARRANDA" Farm',
      image: null // Placeholder
    },
    {
      name: 'Deputy Name 1',
      role: 'Deputy Chairman',
      title: 'Deputy Position',
      image: null
    },
    {
      name: 'Deputy Name 2',
      role: 'Deputy Chairman',
      title: 'Deputy Position',
      image: null
    },
    {
      name: 'Deputy Name 3',
      role: 'Deputy Chairman',
      title: 'Deputy Position',
      image: null
    }
  ];

  return (
    <div className="w-full">
      <section className="bg-background-light dark:bg-background-dark py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto text-center mb-16">
          <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Leadership</h2>
          <h1 className="text-4xl md:text-5xl font-black text-text-main dark:text-white mb-6">{t.sections.council.title}</h1>
          <p className="max-w-2xl mx-auto text-xl text-text-muted dark:text-gray-400 leading-relaxed">
            {t.sections.council.subtitle}
          </p>
        </div>

        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, idx) => (
            <div key={idx} className="group bg-surface-light dark:bg-surface-dark rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:-translate-y-2">
              <div className="aspect-[4/5] bg-gray-200 dark:bg-gray-700 relative overflow-hidden flex items-center justify-center">
                 {member.image ? (
                   <Image 
                     src={member.image} 
                     alt={member.name} 
                     fill
                     className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                   />
                 ) : (
                    <span className="material-symbols-outlined text-6xl text-gray-400">person</span>
                 )}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                 <div className="absolute bottom-6 left-6 text-white z-10">
                   <p className="text-xs font-bold uppercase tracking-wider text-accent mb-1">{member.role}</p>
                   <h3 className="text-xl font-bold leading-tight">{member.name}</h3>
                 </div>
              </div>
              <div className="p-6">
                <p className="text-text-muted dark:text-gray-400 text-sm mb-4 h-16 line-clamp-3">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
