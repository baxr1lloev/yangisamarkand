"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import ProjectsMapHero from '@/components/projects/ProjectsMapHero';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';


const allProjects = [
  {
    id: 1,
    category: 'startups',
    name: 'AgroSmart Systems',
    tag: 'AgriTech',
    desc: 'Developing AI-driven drone solutions for precision agriculture in the Samarkand region to optimize water usage.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgiTsE_W0bnVyIFeXO6I2c1I-Buj56CLS_BUriGlXHUWPihS0NEXmeiJL0PzyS1uipP1GlxW5TIrAJEFwHI7qKlgKW5ktm2g37_IAf1jw1eHGUon9n2wspjKMq1mFmjF1TNvlug0k0bXUqug8TnnXRp_MPvqFw1yTdySnywQI3qwP45m1UQZkURUdL26UkemDnq_H6m4rZm97A0GNxoo3chvsZ3YxhFkPn6F5hdHA43fZBvZaA3AvyBu3e8Q5WA51s7wr8KurQj9s',
    active: true
  },
  {
    id: 2,
    category: 'startups',
    name: 'SilkRoad Chain',
    tag: 'FinTech',
    desc: 'Blockchain-based logistics platform simplifying cross-border trade for small businesses in Central Asia.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1-ho82VhHlhWjYWdhJdF6kvoJmcu9mYqBb2SBi6xf4tS6ZJyjm7qOrb2mVbkojKeehhr6QiU_8aCwHD8JdvY85UWTQoaA81PmLaQHADhsXKHRsvno_l2JSB4y89m79dxFdCE3CrXx0Gn-FedvKxH54mRdltOVQUEP6JLVHuB4CqOeyjOm8BxDppb67bvHFYP4rQqgy1JTWcP12puY-mZQWxC3EfF41kV2QxDVDK6bu2lBRSSEcGSdxpuArYYQYWO_Bb4oIz-v_kU',
    active: true
  },
  {
    id: 3,
    category: 'social',
    name: 'Community Health Initiative',
    tag: 'Healthcare',
    desc: 'Providing free medical checkups and health education to underserved communities across rural Samarkand.',
    image: '/images/gallery/meeting.png',
    active: true
  },
  {
    id: 4,
    category: 'social',
    name: 'Youth Education Program',
    tag: 'Education',
    desc: 'Free coding and digital literacy workshops for students from low-income families.',
    image: '/images/gallery/education.png',
    active: true
  },
  {
    id: 5,
    category: 'scientific',
    name: 'Silk Road Heritage Study',
    tag: 'Research',
    desc: 'Archaeological research project documenting and preserving ancient trade route artifacts.',
    image: '/images/gallery/culture.png',
    active: true
  },
  {
    id: 6,
    category: 'scientific',
    name: 'Climate Adaptation Research',
    tag: 'Environment',
    desc: 'Studying sustainable farming practices to combat desertification in the region.',
    image: '/images/gallery/meeting.png',
    active: true
  }
];

export default function ProjectsPage() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('startups');

  const categories = [
    { id: 'social', icon: 'diversity_3', label: t.sections.projects.categories?.social || 'Social Projects' },
    { id: 'scientific', icon: 'biotech', label: t.sections.projects.categories?.scientific || 'Scientific Support' },
    { id: 'startups', icon: 'rocket_launch', label: t.sections.projects.categories?.startups || 'Youth Startups' }
  ];

  const filteredProjects = allProjects.filter(p => p.category === selectedCategory);

  return (
    <>
      <ProjectsMapHero />

      <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto">
          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Sidebar */}
            <aside className="lg:col-span-3 sticky top-24">
              <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 p-4 shadow-sm">
                <h3 className="text-xs font-extrabold text-text-muted dark:text-gray-500 uppercase tracking-widest mb-4 px-2">
                  {t.sections.projects.categoriesTitle || 'Categories'}
                </h3>
                <nav className="space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full flex items-center gap-3 px-3 py-3 text-sm font-medium rounded-lg transition-all text-left ${
                        selectedCategory === cat.id
                          ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-300 font-bold'
                          : 'text-text-main dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary'
                      }`}
                    >
                      <span className={`material-symbols-outlined text-[20px] ${
                        selectedCategory === cat.id ? 'text-primary' : 'text-gray-400 group-hover:text-primary'
                      }`}>
                        {cat.icon}
                      </span>
                      {cat.label}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content Area */}
            <div className="lg:col-span-9 space-y-12">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-start">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-wider">
                    <span className="material-symbols-outlined text-lg">lightbulb</span>
                    {t.sections.projects.innovationHub || 'Innovation Hub'}
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-main dark:text-white leading-tight">
                    {t.sections.projects.empoweringTitle || 'Empowering the Next Generation of Innovators'}
                  </h2>
                  <p className="text-text-muted dark:text-gray-400 text-lg leading-relaxed">
                    {t.sections.projects.empoweringDesc || 'Our startup incubator provides seed funding, mentorship, and workspace for young entrepreneurs in Samarkand. Watch the highlights from our 2023 Demo Day.'}
                  </p>
                </div>
                
                {/* YouTube Video */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-700">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/qr3tvR2tcJA?si=-u6hD1BC5k30IVmO" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </div>

              <div className="h-px bg-gray-200 dark:bg-gray-800"></div>

              <div>
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-text-main dark:text-white">
                    {t.sections.projects.activeProjects || 'Active Projects'}
                  </h3>
                  <button className="text-primary font-bold text-sm flex items-center hover:underline">
                    {t.sections.projects.viewArchive || 'View Archive'} <span className="material-symbols-outlined text-lg">chevron_right</span>
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <AnimatePresence mode="wait">
                    {filteredProjects.map((project) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="group flex flex-col bg-white dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
                      >
                        <div className="h-48 overflow-hidden relative">
                          <div className="absolute top-3 left-3 z-10 bg-white/90 dark:bg-black/80 backdrop-blur px-2 py-1 rounded text-xs font-bold text-text-main dark:text-white flex items-center gap-1">
                            <span className="size-2 rounded-full bg-green-500"></span> 
                            {t.sections.projects.active || 'Active'}
                          </div>
                          <img 
                            alt={project.name} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                            src={project.image} 
                          />
                        </div>
                        <div className="p-5 flex-1 flex flex-col">
                          <div className="flex items-center gap-2 mb-2 text-xs font-bold text-accent uppercase tracking-wider">
                            <span>{project.tag}</span>
                          </div>
                          <h4 className="text-xl font-bold text-text-main dark:text-white mb-2">{project.name}</h4>
                          <p className="text-text-muted dark:text-gray-400 text-sm mb-4 line-clamp-3">
                            {project.desc}
                          </p>
                          <Link href={`/projects/${project.id}`} className="mt-auto text-primary font-bold text-sm hover:underline">
                            {t.sections.projects.viewProfile || 'View Profile'}
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
