import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';

export default function VisionSection() {
  const visions = [
    {
      title: 'Innovation Support',
      description: 'Fostering a culture of innovation by providing resources and mentorship to startups.',
      icon: '💡'
    },
    {
      title: 'Global Partnerships',
      description: 'Building bridges with international organizations to bring expertise and investment.',
      icon: '🤝'
    },
    {
      title: 'Sustainable Growth',
      description: 'Ensuring development projects align with environmental and social sustainability goals.',
      icon: '🌱'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <SectionHeading 
            title="Our Strategic Vision" 
            subtitle="Building the Future"
            className="mb-0"
          />
          <p className="max-w-md text-gray-600 mt-4 md:mt-0">
            Our goal is to transform Samarkand into a leading hub for business and culture in Central Asia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visions.map((item, index) => (
            <Card key={index} className="p-8 border border-gray-100 hover:border-blue-100">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
