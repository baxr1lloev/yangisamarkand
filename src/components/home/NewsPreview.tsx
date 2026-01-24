import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Link from 'next/link';

export default function NewsPreview() {
  const news = [
    {
      id: 1,
      title: 'International Business Forum 2024 Held in Samarkand',
      date: 'May 15, 2024',
      category: 'Events',
      image: '/images/news/news_1.png'
    },
    {
      id: 2,
      title: 'New Grant Program Announced for Local Entrepreneurs',
      date: 'May 10, 2024',
      category: 'Grants',
      image: '/images/news/news_2.png'
    },
    {
      id: 3,
      title: 'Partnership Agreement Signed with Tech Park',
      date: 'May 05, 2024',
      category: 'Partnerships',
      image: '/images/news/news_3.png'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <SectionHeading 
            title="Latest News & Updates" 
            subtitle="Stay Informed"
            center={true}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {news.map((item) => (
            <Link key={item.id} href={`/news/${item.id}`} className="block">
              <Card className="group cursor-pointer h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute top-4 left-4 bg-blue-900 text-white text-xs font-bold px-3 py-1 rounded shadow-md z-10">
                    {item.category}
                  </div>
                  <div 
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-3">{item.date}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="text-blue-600 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
                    Read More 
                    <span className="ml-1">→</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/news">
            <Button variant="secondary" className="px-8">View All News</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
