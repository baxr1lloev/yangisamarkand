"use client";
import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { use } from "react";

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const { t, language } = useLanguage();
  const projectId = parseInt(resolvedParams.id);

  const activeProjects = (t as any).activeProjectsData || [];
  const project = activeProjects.find((p: any) => p.id === projectId);

  if (!project) {
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
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Hero */}
      <div className="relative bg-primary py-24 px-4 sm:px-6 lg:px-8">
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
            <span className="size-2 rounded-full bg-green-500"></span>
            {t.sections.projects.active || "Active"}
          </div>
          <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight mb-4">
            {project.name}
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl">{project.desc}</p>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-text-main dark:text-white mb-6">
                  {t.sections.projects.aboutProject || "About This Project"}
                </h2>
                <div className="prose dark:prose-invert max-w-none">
                  {project.fullDesc
                    .split("\n\n")
                    .map((paragraph: string, index: number) => (
                      <p
                        key={index}
                        className="text-text-muted dark:text-gray-400 text-lg leading-relaxed mb-4"
                      >
                        {paragraph}
                      </p>
                    ))}
                </div>
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
                  <p className="text-green-700 dark:text-green-400 leading-relaxed">
                    {project.expectedResults}
                  </p>
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
                    <span className="text-green-600 dark:text-green-400 font-bold flex items-center gap-1">
                      <span className="size-2 rounded-full bg-green-500"></span>
                      {t.sections.projects.active || "Active"}
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
