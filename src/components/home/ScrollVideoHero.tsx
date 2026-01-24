"use client";
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { useScroll, useTransform, useSpring, useMotionValueEvent, motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function ScrollVideoHero() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const videoRef = useRef<any>(null);

  // Track scroll progress within the 300vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll progress to prevent jittery video playback
  const smoothProgress = useSpring(scrollYProgress, { mass: 0.1, stiffness: 100, damping: 20 });

  // Cinematic Scroll Effects
  // 1. Fade out content
  const contentOpacity = useTransform(smoothProgress, [0, 0.4], [1, 0]);
  // 2. Scale down slightly for depth
  const contentScale = useTransform(smoothProgress, [0, 0.4], [1, 0.9]);
  // 3. Blur out for a dreamy exit
  const contentBlur = useTransform(smoothProgress, [0, 0.4], ["0px", "20px"]);
  // 4. Move text up slightly as it fades
  const contentY = useTransform(smoothProgress, [0, 0.4], [0, -50]);

  useMotionValueEvent(smoothProgress, "change", (latest: number) => {
    const video = videoRef.current;
    if (video && video.duration) {
      if ('fastSeek' in video) {
         video.fastSeek(latest * video.duration);
      } else {
         video.currentTime = latest * video.duration;
      }
    }
  });

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        <video 
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover scale-105"
          src="/images/hero/vd.mp4"
          muted
          playsInline
          preload="auto"
        />
        
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] z-10 pointer-events-none"></div>

        {/* Hero Content */}
        <motion.div 
          style={{ 
            opacity: contentOpacity, 
            scale: contentScale,
            filter: contentBlur,
            y: contentY
          }}
          className="relative z-20 h-full flex flex-col items-center justify-center px-4 text-center max-w-[1400px] mx-auto pt-20"
        >
            <div className="flex flex-col items-center gap-8 max-w-4xl">
              
              {/* Badge Removed */}

              {/* Title - Elegant & Minimal */}
              <h1 key={t.hero.title} className="text-white text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] drop-shadow-2xl">
                {t.hero.title.split(" ").map((word, i) => (
                  <span key={i} className="inline-block overflow-hidden align-bottom mr-2 md:mr-4">
                    <motion.span
                      className="inline-block"
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ 
                        duration: 1.2, 
                        delay: 0.3 + (i * 0.1), 
                        ease: [0.22, 1, 0.36, 1] // Custom refined bezier
                      }}
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </h1>

              {/* Subtitle - Clean */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                className="text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-2xl tracking-wide"
              >
                {t.hero.subtitle}
              </motion.p>

              {/* Minimalist Actions */}
              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 1.4 }}
                 className="flex flex-col sm:flex-row gap-5 mt-8 items-center"
              >
                <Link href="/projects" className="group relative h-14 px-8 flex items-center justify-center rounded-full bg-[#D49D60] hover:bg-[#c28b50] text-white font-medium text-lg transition-all hover:scale-105 shadow-[0_10px_30px_rgba(212,157,96,0.3)]">
                  {t.hero.buttons.projects}
                </Link>
                
                <Link href="#about" className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors py-3 px-6 text-lg font-medium">
                  {t.hero.buttons.more} 
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </motion.div>
            </div>
        </motion.div>
        
        {/* Subtle Scroll Indicator */}
        <motion.div 
          style={{ opacity: contentOpacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 pointer-events-none mix-blend-overlay"
        >
          <div className="w-[1px] h-12 bg-white/50"></div>
        </motion.div>
      </div>
    </div>
  );
}
