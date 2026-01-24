"use client";
import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { use } from 'react';

// Mock project data - same as in projects page
const allProjects = [
  {
    id: 1,
    category: 'startups',
    name: 'AgroSmart Systems',
    tag: 'AgriTech',
    desc: 'Developing AI-driven drone solutions for precision agriculture in the Samarkand region to optimize water usage.',
    fullDesc: 'AgroSmart Systems is revolutionizing agriculture in Uzbekistan through cutting-edge drone technology and artificial intelligence. Our precision farming solutions help farmers optimize water usage, monitor crop health, and increase yields while reducing environmental impact.\n\nThe project has successfully deployed 15 drones across 5,000 hectares of farmland in the Samarkand region, resulting in a 30% reduction in water usage and a 25% increase in crop yields.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgiTsE_W0bnVyIFeXO6I2c1I-Buj56CLS_BUriGlXHUWPihS0NEXmeiJL0PzyS1uipP1GlxW5TIrAJEFwHI7qKlgKW5ktm2g37_IAf1jw1eHGUon9n2wspjKMq1mFmjF1TNvlug0k0bXUqug8TnnXRp_MPvqFw1yTdySnywQI3qwP45m1UQZkURUdL26UkemDnq_H6m4rZm97A0GNxoo3chvsZ3YxhFkPn6F5hdHA43fZBvZaA3AvyBu3e8Q5WA51s7wr8KurQj9s',
    active: true,
    founded: '2023',
    team: '8 members',
    funding: '$150,000'
  },
  {
    id: 2,
    category: 'startups',
    name: 'SilkRoad Chain',
    tag: 'FinTech',
    desc: 'Blockchain-based logistics platform simplifying cross-border trade for small businesses in Central Asia.',
    fullDesc: 'SilkRoad Chain is building the digital infrastructure for trade along the modern Silk Road. Our blockchain-based platform enables seamless cross-border transactions, reduces paperwork, and provides transparency for all stakeholders.\n\nWe have onboarded 200+ small businesses and processed over $5 million in cross-border trade transactions since launch.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1-ho82VhHlhWjYWdhJdF6kvoJmcu9mYqBb2SBi6xf4tS6ZJyjm7qOrb2mVbkojKeehhr6QiU_8aCwHD8JdvY85UWTQoaA81PmLaQHADhsXKHRsvno_l2JSB4y89m79dxFdCE3CrXx0Gn-FedvKxH54mRdltOVQUEP6JLVHuB4CqOeyjOm8BxDppb67bvHFYP4rQqgy1JTWcP12puY-mZQWxC3EfF41kV2QxDVDK6bu2lBRSSEcGSdxpuArYYQYWO_Bb4oIz-v_kU',
    active: true,
    founded: '2022',
    team: '12 members',
    funding: '$300,000'
  },
  {
    id: 3,
    category: 'social',
    name: 'Community Health Initiative',
    tag: 'Healthcare',
    desc: 'Providing free medical checkups and health education to underserved communities across rural Samarkand.',
    fullDesc: 'The Community Health Initiative brings essential healthcare services to rural communities that lack access to medical facilities. Our mobile health units provide free checkups, vaccinations, and health education programs.\n\nSince inception, we have served over 15,000 patients across 50 villages and conducted 200+ health education workshops.',
    image: '/images/gallery/meeting.png',
    active: true,
    founded: '2021',
    team: '25 volunteers',
    funding: '$80,000'
  },
  {
    id: 4,
    category: 'social',
    name: 'Youth Education Program',
    tag: 'Education',
    desc: 'Free coding and digital literacy workshops for students from low-income families.',
    fullDesc: 'The Youth Education Program is bridging the digital divide by providing free technology education to underserved youth. Our curriculum covers coding, digital literacy, and entrepreneurship skills.\n\nWe have graduated 500+ students, with 40% going on to pursue careers in technology or start their own businesses.',
    image: '/images/gallery/education.png',
    active: true,
    founded: '2020',
    team: '15 instructors',
    funding: '$120,000'
  },
  {
    id: 5,
    category: 'scientific',
    name: 'Silk Road Heritage Study',
    tag: 'Research',
    desc: 'Archaeological research project documenting and preserving ancient trade route artifacts.',
    fullDesc: 'The Silk Road Heritage Study is a comprehensive archaeological research project documenting the rich history of the ancient trade routes that passed through Samarkand. Our team works to preserve and catalog artifacts for future generations.\n\nWe have documented over 5,000 artifacts and published 15 peer-reviewed research papers.',
    image: '/images/gallery/culture.png',
    active: true,
    founded: '2019',
    team: '20 researchers',
    funding: '$500,000'
  },
  {
    id: 6,
    category: 'scientific',
    name: 'Climate Adaptation Research',
    tag: 'Environment',
    desc: 'Studying sustainable farming practices to combat desertification in the region.',
    fullDesc: 'The Climate Adaptation Research project studies sustainable farming practices and develops solutions to combat desertification in Central Asia. Our research helps farmers adapt to changing climate conditions.\n\nOur pilot programs have helped 100+ farms implement sustainable practices, reducing water consumption by 35%.',
    image: '/images/gallery/meeting.png',
    active: true,
    founded: '2021',
    team: '10 scientists',
    funding: '$250,000'
  }
];

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const { t } = useLanguage();
  const projectId = parseInt(resolvedParams.id);
  const project = allProjects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-text-main dark:text-white mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-primary font-bold hover:underline">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Hero Image */}
      <div className="relative h-[50vh] w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-[1280px] mx-auto">
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              {t.sections.projects.buttons?.all || 'Back to Projects'}
            </Link>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-bold uppercase tracking-wider mb-4 ml-4">
              <span className="size-2 rounded-full bg-green-500"></span>
              {t.sections.projects.active || 'Active'}
            </div>
            <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-2xl">
              {project.name}
            </h1>
            <p className="text-white/80 text-lg mt-4 max-w-2xl">{project.desc}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-text-main dark:text-white mb-4">About This Project</h2>
                <div className="prose dark:prose-invert max-w-none">
                  {project.fullDesc.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-text-muted dark:text-gray-400 text-lg leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-surface-light dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-gray-800 p-6 sticky top-24 shadow-lg">
                <h3 className="text-lg font-bold text-text-main dark:text-white mb-6">Project Details</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700">
                    <span className="text-text-muted dark:text-gray-400">Category</span>
                    <span className="text-accent font-bold uppercase text-sm">{project.tag}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700">
                    <span className="text-text-muted dark:text-gray-400">Founded</span>
                    <span className="text-text-main dark:text-white font-medium">{project.founded}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700">
                    <span className="text-text-muted dark:text-gray-400">Team Size</span>
                    <span className="text-text-main dark:text-white font-medium">{project.team}</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-text-muted dark:text-gray-400">Funding</span>
                    <span className="text-primary font-bold">{project.funding}</span>
                  </div>
                </div>

                <button className="w-full mt-6 h-12 rounded-lg bg-primary hover:bg-primary-dark text-white font-bold transition-all shadow-lg hover:translate-y-[-2px]">
                  Contact Project Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
