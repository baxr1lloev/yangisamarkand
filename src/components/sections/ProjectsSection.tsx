"use client";
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import { buildApiUrl } from '@/lib/api';
import ProjectsMapHero from '@/components/projects/ProjectsMapHero';
import { motion, AnimatePresence } from 'framer-motion';

type ActiveProject = {
  id: number;
  name: string;
  tag: string;
  desc: string;
  category: string;
  status?: string;
  active?: boolean;
  youtubeId?: string;
  youtube_id?: string;
  telegramLink?: string;
};

export default function ProjectsSection() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('uzMade');
  const [activeTab, setActiveTab] = useState<'active' | 'completed'>('active');
  const [lightboxVideo, setLightboxVideo] = useState<string | null>(null);

  const categories = [
    { id: 'uzMade', icon: 'play_circle', label: 'Uz Made' },
    {
      id: 'industry',
      icon: 'factory',
      label: t.sections.projects.categories?.industry || 'Industry Forum',
    },
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

  const [apiProjects, setApiProjects] = React.useState<ActiveProject[]>([]);

  React.useEffect(() => {
    fetch(buildApiUrl('/api/projects/'))
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load projects');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setApiProjects(data);
        }
      })
      .catch(() => {
        setApiProjects([]);
      });
  }, []);

  const normalizedProjects = apiProjects.map((project) => ({
    ...project,
    youtubeId: project.youtubeId || project.youtube_id,
    status: project.status || (project.active === false ? 'completed' : 'active'),
  }));

  const filteredActiveProjects = normalizedProjects.filter(
    (p) => p.category === selectedCategory && p.status === 'active',
  );

  const filteredCompletedProjects = normalizedProjects.filter(
    (p) => p.category === selectedCategory && p.status === 'completed',
  );

  const featuredProject = filteredActiveProjects[0] || filteredCompletedProjects[0];

  const fallbackByCategory: Record<string, string> = {
    uzMade: '/images/projects/projects_cover.png',
    industry: '/images/gallery/construction.png',
    startups: '/images/gallery/education.png',
    social: '/images/gallery/meeting.png',
    scientific: '/images/gallery/culture.png',
  };

  const categoryIcon = categories.find((c) => c.id === selectedCategory)?.icon || 'lightbulb';

  return (
    <div className="w-full">
      <ProjectsMapHero />



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
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-3 text-sm rounded-lg transition-all text-left cursor-pointer ${
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
              {featuredProject && (
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-start">
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-wider">
                      <span className="material-symbols-outlined text-lg">{categoryIcon}</span>
                      {featuredProject.tag || t.sections.projects.innovationHub}
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-main dark:text-white leading-tight">
                      {featuredProject.name}
                    </h2>
                    <div
                      className="text-text-muted dark:text-gray-400 text-lg leading-relaxed line-clamp-4 ckeditor-content"
                      dangerouslySetInnerHTML={{ __html: featuredProject.desc }}
                    />
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <Link href={`/projects/${featuredProject.id}`} className="inline-flex items-center gap-1 text-primary font-bold hover:underline">
                        {t.sections.projects.viewProfile} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </Link>
                      {featuredProject.telegramLink && (
                        <a
                          href={featuredProject.telegramLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0088cc] hover:bg-[#006daa] text-white text-sm font-bold transition-all shadow-sm hover:-translate-y-0.5"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                          Telegram
                        </a>
                      )}
                    </div>
                  </div>
                  
                  {/* YouTube Video or Image */}
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-700">
                    {featuredProject.youtubeId ? (
                      <iframe 
                        width="100%" 
                        height="100%" 
                        src={`https://www.youtube.com/embed/${featuredProject.youtubeId}`} 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                        className="absolute inset-0"
                      ></iframe>
                    ) : (
                      <Image
                        src={fallbackByCategory[selectedCategory] || '/images/projects/projects_cover.png'}
                        alt={featuredProject.name}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                </div>
              )}

              <div className="h-px bg-gray-200 dark:bg-gray-800"></div>

              {/* Tabs: Active / Completed */}
              <div>
                <div className="flex items-center gap-4 mb-8 border-b border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => setActiveTab("active")}
                    className={`pb-3 text-base font-bold transition-all border-b-2 cursor-pointer ${
                      activeTab === "active"
                        ? "border-primary text-primary"
                        : "border-transparent text-text-muted hover:text-text-main dark:hover:text-white"
                    }`}
                  >
                    {t.sections.projects.activeTab || "Active Projects"}
                  </button>
                  <button
                    onClick={() => setActiveTab("completed")}
                    className={`pb-3 text-base font-bold transition-all border-b-2 cursor-pointer ${
                      activeTab === "completed"
                        ? "border-primary text-primary"
                        : "border-transparent text-text-muted hover:text-text-main dark:hover:text-white"
                    }`}
                  >
                    {t.sections.projects.completedTab || "Completed Projects"}
                  </button>
                </div>

                {activeTab === "completed" && (
                  <p className="text-text-muted dark:text-gray-400 mb-8 text-sm leading-relaxed max-w-2xl">
                    {t.sections.projects.completedProjectsDesc || "Completed projects of the Public Consultative Council."}
                  </p>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <AnimatePresence mode="wait">
                    {activeTab === "active"
                      ? filteredActiveProjects.map((project) => (
                          <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="group flex flex-col bg-white dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
                          >
                            {project.youtubeId && (
                              <div
                                className="relative w-full aspect-video cursor-pointer overflow-hidden"
                                onClick={() => setLightboxVideo(project.youtubeId!)}
                              >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={`https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`}
                                  alt={project.name}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                                    <span className="material-symbols-outlined text-white text-3xl">play_arrow</span>
                                  </div>
                                </div>
                                <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
                                  <span className="material-symbols-outlined text-[12px]">smart_display</span>
                                  YouTube
                                </div>
                              </div>
                            )}
                            <div className="p-6 flex-1 flex flex-col">
                              <div className="flex items-center gap-2 mb-3">
                                <span className="size-2 rounded-full bg-green-500"></span>
                                <span className="text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-wider">
                                  {t.sections.projects.active || "Active"}
                                </span>
                              </div>
                              <div className="flex items-center gap-2 mb-2 text-xs font-bold text-accent uppercase tracking-wider">
                                <span>{project.tag}</span>
                              </div>
                              <h4 className="text-xl font-bold text-text-main dark:text-white mb-3">
                                {project.name}
                              </h4>
                              <div 
                                className="text-text-muted dark:text-gray-400 text-sm mb-4 line-clamp-3 flex-1 ckeditor-content"
                                dangerouslySetInnerHTML={{ __html: project.desc }}
                              />
                              <div className="mt-auto flex flex-wrap items-center gap-4">
                                {project.youtubeId && (
                                  <button
                                    onClick={() => setLightboxVideo(project.youtubeId!)}
                                    className="text-red-600 dark:text-red-400 font-bold text-sm hover:underline flex items-center gap-1 cursor-pointer"
                                  >
                                    <span className="material-symbols-outlined text-base">play_circle</span>
                                    {t.sections.projects.watchVideo || "Watch Video"}
                                  </button>
                                )}
                                <Link
                                  href={`/projects/${project.id}`}
                                  className="text-primary font-bold text-sm hover:underline"
                                >
                                  {t.sections.projects.viewProfile || "View Profile"}
                                </Link>
                                {project.telegramLink && (
                                  <a
                                    href={project.telegramLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-[#0088cc] font-bold text-sm hover:underline"
                                  >
                                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                                    Telegram
                                  </a>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        ))
                      : filteredCompletedProjects.map((project) => (
                          <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="group flex flex-col bg-white dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
                          >
                            {project.youtubeId && (
                              <div
                                className="relative w-full aspect-video cursor-pointer overflow-hidden"
                                onClick={() => setLightboxVideo(project.youtubeId!)}
                              >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={`https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`}
                                  alt={project.name}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                                    <span className="material-symbols-outlined text-white text-3xl">play_arrow</span>
                                  </div>
                                </div>
                                <div className="absolute top-2 left-2 bg-gray-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
                                  <span className="material-symbols-outlined text-[12px]">check_circle</span>
                                  {t.sections.projects.completed || "Completed"}
                                </div>
                              </div>
                            )}
                            <div className="p-6 flex-1 flex flex-col">
                              <div className="flex items-center gap-2 mb-3">
                                <span className="size-2 rounded-full bg-gray-500"></span>
                                <span className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                                  {t.sections.projects.completed || "Completed"}
                                </span>
                              </div>
                              <div className="flex items-center gap-2 mb-2 text-xs font-bold text-accent uppercase tracking-wider">
                                <span>{project.tag}</span>
                              </div>
                              <h4 className="text-xl font-bold text-text-main dark:text-white mb-3">
                                {project.name}
                              </h4>
                              <div 
                                className="text-text-muted dark:text-gray-400 text-sm mb-4 line-clamp-3 flex-1 ckeditor-content"
                                dangerouslySetInnerHTML={{ __html: project.desc }}
                              />
                              <div className="mt-auto flex flex-wrap items-center gap-4">
                                {project.youtubeId && (
                                  <button
                                    onClick={() => setLightboxVideo(project.youtubeId!)}
                                    className="text-red-600 dark:text-red-400 font-bold text-sm hover:underline flex items-center gap-1 cursor-pointer"
                                  >
                                    <span className="material-symbols-outlined text-base">play_circle</span>
                                    {t.sections.projects.watchVideo || "Watch Video"}
                                  </button>
                                )}
                                <Link
                                  href={`/projects/${project.id}`}
                                  className="text-primary font-bold text-sm hover:underline"
                                >
                                  {t.sections.projects.viewProfile || "View Profile"}
                                </Link>
                                {project.telegramLink && (
                                  <a
                                    href={project.telegramLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-[#0088cc] font-bold text-sm hover:underline"
                                  >
                                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                                    Telegram
                                  </a>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                  </AnimatePresence>
                </div>

                {/* View All & Back to Home */}
                <div className="mt-8 flex items-center justify-between border-t border-gray-100 dark:border-gray-800 pt-8">
                  <Link
                    href={`/projects?category=${selectedCategory}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary-dark transition-all shadow-sm hover:-translate-y-0.5 cursor-pointer"
                  >
                    {t.sections.projects.viewArchive || 'View All'}
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-text-muted dark:text-gray-400 font-semibold text-sm hover:border-primary hover:text-primary transition-all cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-base">home</span>
                    {t.sections.projects.backToMain || 'Back to Home'}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Lightbox Modal */}
      {lightboxVideo && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${lightboxVideo}?autoplay=1`}
              title="Project Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            />
          </div>
          <button
            onClick={() => setLightboxVideo(null)}
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 backdrop-blur px-4 py-2 rounded-full font-bold transition-all cursor-pointer"
          >
            ✕ Close
          </button>
        </div>
      )}
    </div>
  );
}
