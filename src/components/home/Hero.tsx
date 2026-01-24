import React from 'react';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center bg-blue-900 text-white overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1548685913-fe65af60d696?q=80&w=2000&auto=format&fit=crop")' }} 
      />
      
      <div className="container mx-auto px-4 relative z-20 pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Together towards <br />
            <span className="text-yellow-500">accelerated development</span> <br />
            of entrepreneurship
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
            We are dedicated to fostering a robust economic environment in Samarkand through strategic partnerships, innovative projects, and unwavering support for local businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="text-lg px-8 py-4">
              Explore Projects
            </Button>
            <Button variant="outline" className="text-lg px-8 py-4 text-white hover:text-blue-900 bg-transparent border-white hover:bg-white">
              Become a Member
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
