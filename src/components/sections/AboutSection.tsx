"use client";
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark/90 via-background-dark/60 to-transparent z-10"></div>
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("/images/hero/about_philosophy.png")' }}></div>
        </div>
        <div className="relative z-20 container mx-auto px-6 lg:px-40 w-full">
          <div className="max-w-[800px]">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-[2px] w-12 bg-accent-gold"></div>
              <span className="text-accent-gold font-bold uppercase tracking-widest text-sm">{t.sections.about.philosophy}</span>
            </div>
            <h1 className="text-white text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6" dangerouslySetInnerHTML={{ __html: t.sections.about.title }} />
            <p className="text-slate-200 text-lg lg:text-xl font-medium max-w-[600px] leading-relaxed">
              {t.sections.about.subtitle}
            </p>
          </div>
        </div>
      </section>



      {/* History Section */}
      <section className="py-20 px-6 lg:px-40 bg-white dark:bg-background-dark">
        <div className="max-w-[1000px] mx-auto text-center">
            <span className="inline-block px-3 py-1 bg-accent-gold/10 text-accent-gold text-xs font-bold uppercase tracking-wide rounded mb-6">{t.sections.about.historyTitle}</span>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              {t.sections.about.historyText}
            </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-6 lg:px-40 bg-background-light dark:bg-background-dark border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Mission Card */}
            <div className="group relative bg-surface-light dark:bg-surface-dark p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 border-primary">
              <div className="absolute top-10 right-10 text-slate-100 dark:text-slate-800 pointer-events-none group-hover:text-primary/10 transition-colors duration-300">
                <span className="material-symbols-outlined text-[120px]">flag</span>
              </div>
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary dark:text-primary-300 text-xs font-bold uppercase tracking-wide rounded mb-6">{t.sections.about.mission}</span>
                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                  {t.sections.about.missionText}
                </p>
              </div>
            </div>
            {/* Vision Card */}
            <div className="group relative bg-surface-light dark:bg-surface-dark p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 border-accent-gold">
              <div className="absolute top-10 right-10 text-slate-100 dark:text-slate-800 pointer-events-none group-hover:text-accent-gold/10 transition-colors duration-300">
                <span className="material-symbols-outlined text-[120px]">visibility</span>
              </div>
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-accent-gold/10 text-accent-gold text-xs font-bold uppercase tracking-wide rounded mb-6">{t.sections.about.vision}</span>
                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                   {t.sections.about.visionText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Membership Section */}
      <section className="py-20 px-6 lg:px-40 bg-primary text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 pointer-events-none"></div>
         <div className="max-w-[1200px] mx-auto relative z-10">
            <div className="flex flex-col md:flex-row gap-12 items-center">
               <div className="md:w-1/3">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.sections.about.membershipTitle}</h2>
                  <div className="w-20 h-1 bg-accent-gold mb-6"></div>
                  <p className="text-white/80 mb-8">
                    Join a prestigious community of leaders shaping the future of Samarkand.
                  </p>
                  <button className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-accent-gold hover:text-white transition-colors">
                    Apply for Membership
                  </button>
               </div>
               <div className="md:w-2/3">
                  <ul className="space-y-4">
                    {(t.sections.about.membershipBenefits || []).map((benefit: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-accent-gold shrink-0 mt-1">check_circle</span>
                        <span className="text-lg">{benefit}</span>
                      </li>
                    ))}
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-white dark:bg-[#152329] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#136986 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-40 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-slate-900 dark:text-white text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight">{t.sections.about.valuesTitle}</h2>
            <div className="w-24 h-1 bg-accent-gold mx-auto mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'verified_user', title: 'Radical Transparency', desc: 'Open financial reporting and clear decision-making processes. We believe trust is earned through visibility.' },
              { icon: 'diversity_3', title: 'Social Responsibility', desc: 'Unwavering commitment to community welfare. Every project must measurably improve the lives of our citizens.' },
              { icon: 'lightbulb', title: 'Innovation Support', desc: 'Investing in modern solutions for urban challenges. We seek smart, tech-driven answers to old problems.' },
              { icon: 'museum', title: 'Heritage Preservation', desc: 'Protecting our cultural legacy. Modernization must never come at the cost of our historical identity.' },
              { icon: 'handshake', title: 'Collaborative Spirit', desc: 'We work alongside government, private sector, and citizens. Unity is our most powerful resource.' },
              { icon: 'eco', title: 'Sustainability', desc: 'Building for the long term. Our environmental impact is considered in every strategic decision.' }
            ].map((value, idx) => (
              <div key={idx} className="flex flex-col p-8 bg-background-light dark:bg-surface-dark rounded-xl border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-colors group">
                <div className="size-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary dark:text-primary-300">
                  <span className="material-symbols-outlined text-3xl">{value.icon}</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{value.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
