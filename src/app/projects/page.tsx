import { Suspense } from "react";
import ProjectsPageClient from "@/components/projects/ProjectsPageClient";

function ProjectsPageFallback() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-text-muted dark:text-gray-400">
        Loading projects...
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={<ProjectsPageFallback />}>
      <ProjectsPageClient />
    </Suspense>
  );
}

