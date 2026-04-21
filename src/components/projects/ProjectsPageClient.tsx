"use client";
import React, { useState } from "react";
import Link from "next/link";
import ProjectsMapHero from "@/components/projects/ProjectsMapHero";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";

// Completed projects data removed as we use API
export default function ProjectsPageClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { t, language } = useLanguage();

  const allowedCategories = ["uzMade", "startups", "social", "scientific"] as const;
  type CategoryId = (typeof allowedCategories)[number];
  const normalizeCategory = (value: string | null): CategoryId =>
    value && allowedCategories.includes(value as CategoryId)
      ? (value as CategoryId)
      : "uzMade";

  const selectedCategory: CategoryId = normalizeCategory(
    searchParams.get("category"),
  );
  const [activeTab, setActiveTab] = useState<"active" | "completed">("active");
  const [lightboxVideo, setLightboxVideo] = useState<string | null>(null);

  const categories = [
    {
      id: "uzMade" as CategoryId,
      icon: "play_circle",
      label: "Uz Made",
    },
    {
      id: "startups" as CategoryId,
      icon: "rocket_launch",
      label: t.sections.projects.categories?.startups || "Youth Startups",
    },
    {
      id: "social" as CategoryId,
      icon: "diversity_3",
      label: t.sections.projects.categories?.social || "Social Projects",
    },
    {
      id: "scientific" as CategoryId,
      icon: "biotech",
      label: t.sections.projects.categories?.scientific || "Scientific Support",
    },
  ];

  type ProjectData = { id: number; name: string; tag: string; desc: string; category: string; status: string; youtube_id?: string };
  const [allProjects, setAllProjects] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    fetch('http://127.0.0.1:8000/api/projects/')
      .then(res => res.json())
      .then(data => {
        setAllProjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filteredActiveProjects = allProjects.filter(
    (p) => p.category === selectedCategory && p.status === 'active',
  );

  const filteredCompletedProjects = allProjects.filter(
    (p) => p.category === selectedCategory && p.status === 'completed',
  );

  return (
    <>
      <ProjectsMapHero />

      <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Sidebar */}
            <aside className="lg:col-span-3 sticky top-24">
              <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 p-4 shadow-sm">
                <h3 className="text-xs font-extrabold text-text-muted dark:text-gray-500 uppercase tracking-widest mb-4 px-2">
                  {t.sections.projects.categoriesTitle || "Categories"}
                </h3>
                <nav className="space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => {
                        router.push(`/projects?category=${cat.id}`);
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-3 text-sm font-medium rounded-lg transition-all text-left ${
                        selectedCategory === cat.id
                          ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-300 font-bold"
                          : "text-text-main dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary"
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined text-[20px] ${
                          selectedCategory === cat.id
                            ? "text-primary"
                            : "text-gray-400 group-hover:text-primary"
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
                    <span className="material-symbols-outlined text-lg">
                      lightbulb
                    </span>
                    {t.sections.projects.innovationHub || "Innovation Hub"}
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-main dark:text-white leading-tight">
                    {t.sections.projects.empoweringTitle ||
                      "Empowering the Next Generation of Innovators"}
                  </h2>
                  <p className="text-text-muted dark:text-gray-400 text-lg leading-relaxed">
                    {t.sections.projects.empoweringDesc ||
                      "Our startup incubator provides seed funding, mentorship, and workspace for young entrepreneurs in Samarkand."}
                  </p>
                </div>

                {/* YouTube Video - show first uzMade video */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-700">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/SmPNYkjfGbY"
                    title="Uz Made — Episode 1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </div>

              <div className="h-px bg-gray-200 dark:bg-gray-800"></div>

              {/* Tabs: Active / Completed */}
              <div>
                <div className="flex items-center gap-4 mb-8 border-b border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => setActiveTab("active")}
                    className={`pb-3 text-base font-bold transition-all border-b-2 ${
                      activeTab === "active"
                        ? "border-primary text-primary"
                        : "border-transparent text-text-muted hover:text-text-main dark:hover:text-white"
                    }`}
                  >
                    {t.sections.projects.activeTab || "Active Projects"}
                  </button>
                  <button
                    onClick={() => setActiveTab("completed")}
                    className={`pb-3 text-base font-bold transition-all border-b-2 ${
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
                    {t.sections.projects.completedProjectsDesc}
                  </p>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <AnimatePresence mode="wait">
                    {activeTab === "active"
                      ? filteredActiveProjects.map((project: {id: number; name: string; tag: string; desc: string; youtube_id?: string}) => (
                          <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="group flex flex-col bg-white dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
                          >
                            {/* YouTube thumbnail for uzMade projects */}
                            {project.youtube_id && (
                              <div
                                className="relative w-full aspect-video cursor-pointer overflow-hidden"
                                onClick={() => setLightboxVideo(project.youtube_id!)}
                              >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={`https://img.youtube.com/vi/${project.youtube_id}/hqdefault.jpg`}
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
                              {project.youtube_id ? (
                                <button
                                  onClick={() => setLightboxVideo(project.youtube_id!)}
                                  className="mt-auto text-red-600 dark:text-red-400 font-bold text-sm hover:underline flex items-center gap-1"
                                >
                                  <span className="material-symbols-outlined text-base">play_circle</span>
                                  Watch Video
                                </button>
                              ) : (
                                <Link
                                  href={`/projects/${project.id}`}
                                  className="mt-auto text-primary font-bold text-sm hover:underline"
                                >
                                  {t.sections.projects.viewProfile || "View Profile"}
                                </Link>
                              )}
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
                            {/* YouTube thumbnail for completed projects */}
                            {project.youtube_id && (
                              <div
                                className="relative w-full aspect-video cursor-pointer overflow-hidden"
                                onClick={() => setLightboxVideo(project.youtube_id!)}
                              >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={`https://img.youtube.com/vi/${project.youtube_id}/hqdefault.jpg`}
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
                              {project.youtube_id ? (
                                <button
                                  onClick={() => setLightboxVideo(project.youtube_id!)}
                                  className="mt-auto text-red-600 dark:text-red-400 font-bold text-sm hover:underline flex items-center gap-1"
                                >
                                  <span className="material-symbols-outlined text-base">play_circle</span>
                                  Watch Video
                                </button>
                              ) : (
                                <Link
                                  href={`/projects/${project.id}`}
                                  className="mt-auto text-primary font-bold text-sm hover:underline"
                                >
                                  {t.sections.projects.viewProfile || "View Profile"}
                                </Link>
                              )}
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
              title="Uz Made Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            />
          </div>
          <button
            onClick={() => setLightboxVideo(null)}
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 backdrop-blur px-4 py-2 rounded-full font-bold transition-all"
          >
            ✕ Close
          </button>
        </div>
      )}
    </>
  );
}
