"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  useScroll,
  useTransform,
  useSpring,
  motion,
} from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import MagneticButton from "@/components/ui/MagneticButton";

export default function ScrollVideoHero() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
  });

  const contentOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const contentScale = useTransform(smoothProgress, [0, 0.5], [1, 0.95]);
  const contentBlur = useTransform(smoothProgress, [0, 0.5], ["0px", "10px"]);
  const contentY = useTransform(smoothProgress, [0, 0.5], [0, -50]);
  
  const bgScale = useTransform(smoothProgress, [0, 1], [1.05, 1.15]);
  const bgY = useTransform(smoothProgress, [0, 1], [0, 100]);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image with Cinematic Zoom and Parallax */}
      <motion.div
        style={{ scale: bgScale, y: bgY }}
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1.05, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <Image
          src="/images/hero/IMG_4331.jpg"
          alt="Yangi Samarqand Hero"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.55)_100%)] z-10 pointer-events-none"></div>

      {/* Hero Content */}
      <motion.div
        style={{
          opacity: contentOpacity,
          scale: contentScale,
          filter: contentBlur,
          y: contentY,
        }}
        className="relative z-30 h-full flex flex-col items-center justify-center px-4 text-center max-w-[1400px] mx-auto pt-20"
      >
        <div className="flex flex-col items-center gap-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
          </motion.div>

          {/* Title with Cinematic Text Reveal */}
          <h1
            key={t.hero.title}
            className="text-white text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] drop-shadow-2xl"
          >
            {t.hero.title.split(" ").map((word: string, i: number) => (
              <span
                key={i}
                className="inline-block overflow-hidden align-bottom mr-2 md:mr-4"
              >
                <motion.span
                  className="inline-block"
                  initial={{ y: "120%", rotateX: -40 }}
                  animate={{ y: 0, rotateX: 0 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.5 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ transformOrigin: "bottom" }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
            className="text-white/80 text-base md:text-lg font-light leading-normal max-w-2xl"
            style={{ fontFamily: "var(--font-roboto), sans-serif" }}
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTA Buttons with Magnetic Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-5 mt-8 items-center"
          >
            <MagneticButton>
              <Link
                href="/projects"
                className="group relative h-14 px-8 flex items-center justify-center rounded-full bg-accent hover:bg-accent/90 text-white font-medium text-lg transition-all shadow-[0_10px_30px_rgba(212,157,96,0.3)] hover:shadow-[0_15px_40px_rgba(212,157,96,0.4)] animate-pulse-glow"
              >
                {t.hero.buttons.projects}
                <span className="ml-2 material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </MagneticButton>

            <MagneticButton>
              <Link
                href="#about"
                className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors py-3 px-6 text-lg font-medium border border-white/20 rounded-full hover:border-white/40 hover:bg-white/5 backdrop-blur-sm"
              >
                {t.hero.buttons.more}
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>

      {/* Animated Scroll Indicator */}
      <motion.div
        style={{ opacity: contentOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </div>
  );
}
