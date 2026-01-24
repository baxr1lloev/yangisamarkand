'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { YMaps, Map, Placemark, FullscreenControl, ZoomControl } from '@pbe/react-yandex-maps';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

// Samarkand Center / Generic Location for "14 Amir Temur Street"
// Approx coords for Samarkand center. 
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

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[var(--color-primary-dark)]/5 to-transparent pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 -left-20 w-72 h-72 bg-[var(--color-primary)]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
           initial="hidden"
           animate="visible"
           variants={fadeInUp}
           className="mb-16"
        >
          <SectionHeading 
            title="Contact Us" 
            subtitle="We'd Love to Hear From You" 
            center 
          />
          <p className="text-center text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
            Have questions or interested in partnership? Reach out to the Yangi Samarqand team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto items-start">
          
          {/* Left Column: Contact Info & Map */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <motion.div variants={fadeInUp} className="bg-[var(--color-surface-light)] p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center text-[var(--color-primary)] mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <h3 className="font-bold text-lg mb-1">Phone</h3>
                  <p className="text-gray-600 font-medium">+998 90 123 45 67</p>
               </motion.div>

               <motion.div variants={fadeInUp} className="bg-[var(--color-surface-light)] p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-[var(--color-accent)]/10 rounded-xl flex items-center justify-center text-[var(--color-accent)] mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-gray-600 font-medium break-all">info@yangisamarqand.uz</p>
               </motion.div>

               <motion.div variants={fadeInUp} className="bg-[var(--color-surface-light)] p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow md:col-span-2">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <h3 className="font-bold text-lg mb-1">Office</h3>
                  <p className="text-gray-600 font-medium">14, Amir Temur Street, Samarkand, Uzbekistan</p>
               </motion.div>
            </div>

            {/* Map */}
            <motion.div 
               variants={fadeInUp}
               className="h-[400px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200 relative z-0"
            >
               <YMaps>
                  <Map 
                    defaultState={mapState} 
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
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[var(--color-surface-light)] p-8 lg:p-10 rounded-3xl shadow-xl border border-gray-100 sticky top-24"
          >
             <h3 className="text-2xl font-bold mb-6 text-[var(--color-primary-dark)]">Send us a Message</h3>
             <form className="space-y-6">
               <div className="space-y-4">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                      <input 
                        id="fullName"
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent focus:bg-white outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                      <input 
                        id="email"
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent focus:bg-white outline-none transition-all"
                      />
                    </div>
                 </div>
                 
                 <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                    <input 
                      id="subject"
                      type="text" 
                      placeholder="How can we help?"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent focus:bg-white outline-none transition-all"
                    />
                 </div>

                 <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                    <textarea 
                      id="message"
                      rows={5} 
                      placeholder="Tell us more about your inquiry..."
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent focus:bg-white outline-none transition-all resize-none"
                    ></textarea>
                 </div>
               </div>

               <Button className="w-full py-4 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                 Send Message
               </Button>
               
               <p className="text-xs text-center text-gray-400 mt-4">
                 By sending this message, you agree to our <a href="#" className="underline hover:text-[var(--color-primary)]">Privacy Policy</a>.
               </p>
             </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
