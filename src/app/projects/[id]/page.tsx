"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useParams } from "next/navigation";
import { buildApiUrl } from "@/lib/api";

export default function ProjectDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const { t, language } = useLanguage();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (id) {
      fetch(buildApiUrl(`/api/projects/${id}/`))
        .then(res => {
          if (!res.ok) throw new Error("Not found");
          return res.json();
        })
        .then(data => {
          setProject(data);
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setError(true);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center text-xl font-bold dark:text-white">Loading Project...</div>;
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-text-main dark:text-white mb-4">
            {t.sections.projects.projectNotFound || "Project Not Found"}
          </h1>
          <Link
            href="/projects"
            className="text-primary font-bold hover:underline"
          >
            &larr; {t.sections.projects.backToProjects || "Back to Projects"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-20">
      {/* Hero */}
      <div className="relative bg-primary py-24 px-4 sm:px-6 lg:px-8">
        {project.youtubeId && (
          <div 
             className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
             style={{ backgroundImage: `url(https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg)` }}
          ></div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/70 to-primary/50" />
        <div className="relative max-w-7xl mx-auto">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            {t.sections.projects.backToProjects || "Back to Projects"}
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-bold uppercase tracking-wider mb-4 ml-4">
            <span className={`size-2 rounded-full ${project.status === 'active' ? 'bg-green-500' : 'bg-gray-400'}`}></span>
            {project.status === 'active' ? (t.sections.projects.active || "Active") : (t.sections.projects.completed || "Completed")}
          </div>
          <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight mb-4">
            {project.name}
          </h1>
          <div 
            className="text-white/80 text-lg mt-4 max-w-2xl ckeditor-content prose-invert prose-p:mb-0" 
            dangerouslySetInnerHTML={{ __html: project.desc }} 
          />
        </div>
      </div>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {project.youtubeId && (
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-700">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${project.youtubeId}`}
                    title={project.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0"
                  ></iframe>
                </div>
              )}

              <div>
                <h2 className="text-2xl font-bold text-text-main dark:text-white mb-6">
                  {t.sections.projects.aboutProject || "About This Project"}
                </h2>
                <div 
                  className="prose dark:prose-invert max-w-none text-text-muted dark:text-gray-400 text-lg leading-relaxed mb-4 ckeditor-content"
                  dangerouslySetInnerHTML={{ __html: project.fullDesc || project.desc }}
                />
              </div>

              {project.expectedResults && (
                <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-6 border border-green-100 dark:border-green-800">
                  <h3 className="text-lg font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    {language === "ru"
                      ? "Ожидаемые результаты"
                      : language === "uz"
                        ? "Kutilayotgan natijalar"
                        : "Expected Results"}
                  </h3>
                  <div 
                    className="text-green-700 dark:text-green-400 leading-relaxed ckeditor-content"
                    dangerouslySetInnerHTML={{ __html: project.expectedResults }}
                  />
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-surface-light dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-gray-800 p-6 sticky top-24 shadow-lg">
                <h3 className="text-lg font-bold text-text-main dark:text-white mb-6">
                  {t.sections.projects.projectDetails || "Project Details"}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700">
                    <span className="text-text-muted dark:text-gray-400">
                      {t.sections.projects.category || "Category"}
                    </span>
                    <span className="text-accent font-bold uppercase text-sm">
                      {project.tag}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700">
                    <span className="text-text-muted dark:text-gray-400">
                      Status
                    </span>
                    <span className={`font-bold flex items-center gap-1 ${project.status === 'active' ? 'text-green-600 dark:text-green-400' : 'text-gray-600 dark:text-gray-400'}`}>
                      <span className={`size-2 rounded-full ${project.status === 'active' ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                      {project.status === 'active' ? (t.sections.projects.active || "Active") : (t.sections.projects.completed || "Completed")}
                    </span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="block w-full mt-6 h-12 rounded-lg bg-primary hover:bg-primary-dark text-white font-bold transition-all shadow-lg hover:translate-y-[-2px] text-center leading-[48px]"
                >
                  {t.sections.projects.contactTeam || "Contact Project Team"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
