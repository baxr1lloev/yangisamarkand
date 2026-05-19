"use client";
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import { buildApiUrl } from '@/lib/api';

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

  const sourceProjects = apiProjects;

  const categoryProjects = sourceProjects
    .map((project) => ({
      ...project,
      youtubeId: project.youtubeId || project.youtube_id,
      status:
        project.status ||
        (project.active === false ? 'completed' : 'active'),
    }))
    .filter(
      (project) =>
        project.category === selectedCategory && project.status !== 'completed',
    );
  
  const featuredProject = categoryProjects.length > 0 ? categoryProjects[0] : null;
  const listProjects = categoryProjects.slice(1, 3);

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
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <div className="relative z-20 flex flex-col items-center text-center max-w-3xl mx-auto gap-6 drop-shadow-2xl">
               
              <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
                {t.sections.projects.title}
              </h1>
              <p className="text-gray-100 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                {t.sections.projects.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link href="/projects">
                  <span className="inline-flex h-12 px-8 items-center justify-center rounded-lg bg-primary hover:bg-primary-dark text-white text-base font-bold transition-all shadow-lg hover:translate-y-[-2px] cursor-pointer">
                    {t.sections.projects.buttons.all}
                  </span>
                </Link>
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

              <div>
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-text-main dark:text-white">{t.sections.projects.activeProjects}</h3>
                  <Link href="/projects" className="text-primary font-bold text-sm flex items-center hover:underline">
                    {t.sections.projects.viewArchive} <span className="material-symbols-outlined text-lg">chevron_right</span>
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {listProjects.map((project) => (
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
                        <div
                          className="text-text-muted dark:text-gray-400 text-sm mb-4 line-clamp-3 ckeditor-content"
                          dangerouslySetInnerHTML={{ __html: project.desc }}
                        />
                        <div className="mt-auto flex items-center gap-3">
                          <Link href={`/projects/${project.id}`} className="text-primary font-bold text-sm hover:underline">
                            {t.sections.projects.viewProfile}
                          </Link>
                          {project.telegramLink && (
                            <a
                              href={project.telegramLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-[#0088cc] font-bold text-sm hover:underline"
                            >
                              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                              Telegram
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                  {listProjects.length === 0 && (
                    <div className="md:col-span-2 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 p-8 text-center text-text-muted dark:text-gray-400">
                      No more projects in this category yet.
                    </div>
                  )}
                </div>

                {/* View All button */}
                <div className="mt-8 flex items-center justify-between">
                  <Link
                    href={`/projects?category=${selectedCategory}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary-dark transition-all shadow-sm hover:-translate-y-0.5"
                  >
                    {t.sections.projects.viewArchive || 'View All'}
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-text-muted dark:text-gray-400 font-semibold text-sm hover:border-primary hover:text-primary transition-all"
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
    </div>
  );
}
