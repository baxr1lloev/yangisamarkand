"use client";
import React from 'react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';

// Mock data - in a real app this would come from an API
const newsData = {
  1: {
    title: 'International Business Forum 2024 Held in Samarkand',
    date: 'May 15, 2024',
    category: 'Events',
    image: '/images/news/news_1.png',
    content: `
      <p class="mb-4">The International Business Forum 2024 brought together over 500 delegates from 30 countries to discuss investment opportunities in the Samarkand region. Key topics included sustainable tourism, textile modernization, and the growing IT sector.</p>
      <p class="mb-4">"Samarkand is open for business," stated the regional governor during his opening address. "We are creating an ecosystem where innovation respects tradition."</p>
      <p>Several major MOUs were signed during the event, promising to bring over $50 million in foreign direct investment to the city in the next fiscal year.</p>
    `
  },
  2: {
    title: 'New Grant Program Announced for Local Entrepreneurs',
    date: 'May 10, 2024',
    category: 'Grants',
    image: '/images/news/news_2.png',
    content: `
      <p class="mb-4">The Yangi Samarqand Fund has officially launched its Q3 Grant Program, targeting small to medium-sized enterprises (SMEs) focusing on export-oriented products.</p>
      <p class="mb-4">Grants of up to $10,000 are available for businesses that demonstrate a clear plan for job creation and community impact. Applications are open until June 30th.</p>
      <p>Workshops will be held weekly at the Innovation Hub to assist applicants with their proposals.</p>
    `
  },
  3: {
    title: 'Partnership Agreement Signed with Tech Park',
    date: 'May 05, 2024',
    category: 'Partnerships',
    image: '/images/news/news_3.png',
    content: `
      <p class="mb-4">In a strategic move to boost the local startup ecosystem, Yangi Samarqand has signed a memorandum of understanding with the National IT Park.</p>
      <p class="mb-4">This partnership will provide reduced rent, tax incentives, and cloud infrastructure credits to startups incubated within the Yangi Samarqand network.</p>
      <p>The first cohort of joint beneficiaries will be announced next month, focusing on AI and Blockchain solutions for logistics.</p>
    `
  }
};

export default function NewsDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  // @ts-ignore
  const article = newsData[id];

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
        <Link href="/news" className="text-primary hover:underline">Back to News</Link>
      </div>
    );
  }

  return (
    <article className="bg-white dark:bg-background-dark min-h-screen pb-20">
      {/* Hero Image */}
      <div className="relative h-[50vh] w-full">
        <div 
           className="absolute inset-0 bg-cover bg-center"
           style={{ backgroundImage: `url(${article.image})` }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 max-w-[1280px] mx-auto">
           <div className="inline-block px-3 py-1 mb-4 rounded bg-primary text-white text-sm font-bold uppercase tracking-wider">
             {article.category}
           </div>
           <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4 max-w-4xl">
             {article.title}
           </h1>
           <p className="text-gray-300 font-medium text-lg">{article.date}</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link href="/news" className="inline-flex items-center text-primary font-bold mb-8 hover:underline">
          <span className="material-symbols-outlined mr-2">arrow_back</span>
          Back to All News
        </Link>
        
        <div 
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </article>
  );
}
