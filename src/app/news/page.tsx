"use client";
import React, { useState } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const ITEMS_PER_PAGE = 3;

export default function NewsPage() {
  const [filter, setFilter] = useState('All News');
  const [currentPage, setCurrentPage] = useState(1);
  const [allNews, setAllNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    fetch('http://127.0.0.1:8000/api/news/')
      .then(res => res.json())
      .then(data => {
        setAllNews(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching news:", err);
        setLoading(false);
      });
  }, []);

  // Filter Logic
  const uniqueCategories = ['All News', ...Array.from(new Set(allNews.map(item => item.category)))].filter(Boolean);
  
  const filteredNews = filter === 'All News' 
    ? allNews 
    : allNews.filter(item => item.category === filter);

  // Pagination Logic
  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentNews = filteredNews.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setCurrentPage(1); // Reset to page 1 on filter change
  };

  if (loading) {
    return <div className="container mx-auto px-4 py-32 text-center text-xl dark:text-white mt-10">Loading News...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-32 bg-background-light dark:bg-background-dark min-h-screen">
      <SectionHeading title="News & Updates" subtitle="Latest Happenings in Samarkand" center />
      
      {/* Filters */}
      <div className="flex justify-center gap-4 mt-8 mb-12 flex-wrap">
        {uniqueCategories.map((cat) => (
          <button 
            key={cat}
            onClick={() => handleFilterChange(cat)}
            className={`px-5 py-2 rounded-full font-bold text-sm transition-all ${
              filter === cat 
                ? 'bg-primary text-white shadow-lg' 
                : 'bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-text-muted dark:text-gray-300 hover:border-primary hover:text-primary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[500px]">
        <AnimatePresence mode='wait'>
         {currentNews.map((item) => (
           <motion.div
             key={item.id}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -20 }}
             transition={{ duration: 0.3 }}
           >
             <Link href={`/news/${item.id}`} className="block group h-full">
               <div className="bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-800 h-full flex flex-col">
                 <div className="h-56 relative overflow-hidden">
                    <div className={`absolute top-4 left-4 text-white text-xs font-bold px-3 py-1 rounded shadow-md z-10 ${
                      item.category === 'Events' ? 'bg-blue-900' : 
                      item.category === 'Grants' ? 'bg-green-600' : 'bg-purple-600'
                    }`}>
                      {item.category}
                    </div>
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 </div>
                 <div className="p-6 flex-1 flex flex-col">
                   <div className="text-sm text-gray-500 mb-3 font-medium">{item.date}</div>
                   <h3 className="text-xl font-bold text-text-main dark:text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                     {item.title}
                   </h3>
                   <p className="text-text-muted dark:text-gray-400 text-sm line-clamp-3 mb-6 flex-1">
                     {item.description}
                   </p>
                   <div className="text-primary font-bold text-sm flex items-center group-hover:gap-2 transition-all">
                     Read Article <span className="material-symbols-outlined text-lg ml-1">arrow_forward</span>
                   </div>
                 </div>
               </div>
             </Link>
           </motion.div>
         ))}
        </AnimatePresence>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12 gap-2">
           <button 
             onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
             disabled={currentPage === 1}
             className="size-10 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-text-muted hover:border-primary hover:text-primary font-bold flex items-center justify-center transition-all disabled:opacity-50 disabled:hover:border-gray-200 disabled:hover:text-text-muted"
           >
             <span className="material-symbols-outlined">chevron_left</span>
           </button>

           {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
             <button
               key={page}
               onClick={() => handlePageChange(page)}
               className={`size-10 rounded-full font-bold flex items-center justify-center transition-all ${
                 currentPage === page
                   ? 'bg-primary text-white shadow-md'
                   : 'bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-text-muted hover:border-primary hover:text-primary'
               }`}
             >
               {page}
             </button>
           ))}

           <button 
             onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
             disabled={currentPage === totalPages}
             className="size-10 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-text-muted hover:border-primary hover:text-primary font-bold flex items-center justify-center transition-all disabled:opacity-50 disabled:hover:border-gray-200 disabled:hover:text-text-muted"
           >
             <span className="material-symbols-outlined">chevron_right</span>
           </button>
        </div>
      )}
    </div>
  );
}
