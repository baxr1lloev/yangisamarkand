"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function NewsDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (id) {
      fetch(`http://127.0.0.1:8000/api/news/${id}/`)
        .then(res => {
          if (!res.ok) throw new Error("Not found");
          return res.json();
        })
        .then(data => {
          setArticle(data);
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
    return <div className="container mx-auto px-4 py-32 text-center text-xl mt-10 dark:text-white">Loading Article...</div>;
  }

  if (error || !article) {
    return (
      <div className="container mx-auto px-4 py-32 text-center text-xl mt-10 dark:text-white">
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
