import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';

export default function LeadershipPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <SectionHeading title="Our Leadership" subtitle="Meet the Team" center />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="text-center p-8">
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl">
              👤
            </div>
            <h3 className="text-xl font-bold text-gray-900">Leader Name {i}</h3>
            <p className="text-blue-900 font-medium mb-4">Position Title</p>
            <p className="text-gray-600 text-sm">
              Brief bio description goes here. Dedicated to the development of Samarkand.
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
