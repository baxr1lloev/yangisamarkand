"use client";
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type ActiveProject = {
  id: number;
  name: string;
  tag: string;
  desc: string;
  category: string;
  youtubeId?: string;
};

export default function ProjectsSection() {
  const { t } = useLanguage();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('uzMade');

  const categories = [
    { id: 'uzMade', icon: 'play_circle', label: 'Uz Made' },
    {
      id: 'startups',
      icon: 'rocket_launch',
      label: t.sections.projects.categories?.startups || 'Youth Startups',
    },
    {
      id: 'social',
      icon: 'diversity_3',
      label: t.sections.projects.categories?.social || 'Social Projects',
    },
    {
      id: 'scientific',
      icon: 'biotech',
      label: t.sections.projects.categories?.scientific || 'Scientific Support',
    },
  ];

  const filteredActiveProjects = (t.activeProjectsData as ActiveProject[])
    .filter((project) => project.category === selectedCategory)
    .slice(0, 2);

  const fallbackByCategory: Record<string, string> = {
    uzMade: '/images/projects/projects_cover.png',
    startups: '/images/gallery/education.png',
    social: '/images/gallery/meeting.png',
    scientific: '/images/gallery/culture.png',
  };

  return (
    <div className="w-full">
      <section className="relative w-full py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-background-light dark:bg-background-dark">
        <div className="max-w-[1280px] mx-auto">
          <div className="rounded-3xl overflow-hidden relative min-h-[400px] md:min-h-[480px] flex items-center justify-center p-8 md:p-16">
            <div className="absolute inset-0 z-0">
               <Image 
                 src="/images/projects/projects_cover.png"
                 alt="Projects Cover"
                 fill
                 className="object-cover"
                 priority
               />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-10"></div>
            <div className="relative z-20 flex flex-col items-center text-center max-w-3xl mx-auto gap-6">
               
              <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
                {t.sections.projects.title}
              </h1>
              <p className="text-gray-100 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
                {t.sections.projects.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link href="/projects">
                  <span className="inline-flex h-12 px-8 items-center justify-center rounded-lg bg-primary hover:bg-primary-dark text-white text-base font-bold transition-all shadow-lg hover:translate-y-[-2px] cursor-pointer">
                    {t.sections.projects.buttons.all}
                  </span>
                </Link>
                <button className="h-12 px-8 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-base font-bold transition-all">
                  {t.sections.projects.buttons.submit}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto">
          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Sidebar */}
            <aside className="lg:col-span-3 lg:sticky lg:top-24 static">
              <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 p-4 shadow-sm">
                <h3 className="text-xs font-extrabold text-text-muted dark:text-gray-500 uppercase tracking-widest mb-4 px-2">
                  {t.sections.projects.categoriesTitle || 'Categories'}
                </h3>
                <nav className="space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        router.push(`/projects?category=${cat.id}`);
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-3 text-sm rounded-lg transition-all text-left ${
                        selectedCategory === cat.id
                          ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-300 font-bold'
                          : 'text-text-main dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary font-medium'
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined text-[20px] ${
                          selectedCategory === cat.id
                            ? 'text-primary'
                            : 'text-gray-400'
                        }`}
                      >
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
                    {t.sections.projects.innovationHub}
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-main dark:text-white leading-tight">
                    {t.sections.projects.empoweringTitle}
                  </h2>
                  <p className="text-text-muted dark:text-gray-400 text-lg leading-relaxed">
                    {t.sections.projects.empoweringDesc}
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
                  <h3 className="text-2xl font-bold text-text-main dark:text-white">{t.sections.projects.activeProjects}</h3>
                  <Link href="/projects" className="text-primary font-bold text-sm flex items-center hover:underline">
                    {t.sections.projects.viewArchive} <span className="material-symbols-outlined text-lg">chevron_right</span>
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredActiveProjects.map((project) => (
                    <div
                      key={project.id}
                      className="group flex flex-col bg-white dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
                    >
                      <div className="h-48 overflow-hidden relative">
                        <div className="absolute top-3 left-3 z-10 bg-white/90 dark:bg-black/80 backdrop-blur px-2 py-1 rounded text-xs font-bold text-text-main dark:text-white flex items-center gap-1">
                          <span className="size-2 rounded-full bg-green-500"></span> {t.sections.projects.active}
                        </div>
                        {project.youtubeId ? (
                          <div className="relative w-full h-full">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={`https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`}
                              alt={project.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                        ) : (
                          <div className="relative w-full h-full">
                            <Image
                              src={fallbackByCategory[project.category] || '/images/projects/projects_cover.png'}
                              alt={project.name}
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>
                        )}
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-2 text-xs font-bold text-accent uppercase tracking-wider">
                          <span>{project.tag}</span>
                        </div>
                        <h4 className="text-xl font-bold text-text-main dark:text-white mb-2">
                          {project.name}
                        </h4>
                        <p className="text-text-muted dark:text-gray-400 text-sm mb-4 line-clamp-3">
                          {project.desc}
                        </p>
                        <Link href={`/projects/${project.id}`} className="mt-auto text-primary font-bold text-sm hover:underline">
                          {t.sections.projects.viewProfile}
                        </Link>
                      </div>
                    </div>
                  ))}

                  {filteredActiveProjects.length === 0 && (
                    <div className="md:col-span-2 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 p-8 text-center text-text-muted dark:text-gray-400">
                      No projects in this category yet.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
