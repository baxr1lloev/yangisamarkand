"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { YMaps, Map, Placemark, FullscreenControl, ZoomControl } from '@pbe/react-yandex-maps';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';

const mapState = { center: [39.6542, 66.9597], zoom: 15 };

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <div className="w-full relative overflow-hidden bg-[var(--background)]">
      {/* Decorative Background Elements - Subtle Corporate Style */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-primary)]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--color-accent)]/5 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 py-20 relative z-10">

        
        <div className="max-w-7xl mx-auto">
           {/* Map Only - Full Width */}
           <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="w-full h-[600px] rounded-3xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 relative z-0"
          >
             <YMaps>
                <Map 
                  defaultState={{ ...mapState, zoom: 16 }} 
                  width="100%" 
                  height="100%"
                  options={{
                     minZoom: 10,
                     maxZoom: 18,
                  }}
                >
                   <Placemark geometry={mapState.center} />
                   <FullscreenControl />
                   <ZoomControl options={{ position: { right: 10, top: 10 } }} />
                </Map>
             </YMaps>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
