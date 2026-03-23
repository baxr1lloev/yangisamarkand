"use client";
import React, { useRef, useCallback, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Users, Rocket, Landmark, Handshake } from "lucide-react";

// ─── Samarkand Tilework Pattern ─────────────────────────────────────
// Inspired by the majolica tilework of Registan Square's madrasahs
function SamarkandTilework() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      style={{ opacity: 0.035 }}
    >
      <defs>
        <pattern
          id="samarkand-tile"
          x="0"
          y="0"
          width="120"
          height="120"
          patternUnits="userSpaceOnUse"
        >
          {/* Eight-pointed star — the iconic motif of Samarkand architecture */}
          <g fill="none" stroke="#D49D60" strokeWidth="0.6">
            {/* Outer octagram */}
            <polygon points="60,10 70,30 90,20 80,42 100,50 80,58 90,80 70,70 60,90 50,70 30,80 40,58 20,50 40,42 30,20 50,30" />
            {/* Inner octagram */}
            <polygon points="60,25 66,38 80,33 74,47 88,50 74,53 80,67 66,62 60,75 54,62 40,67 46,53 32,50 46,47 40,33 54,38" />
            {/* Central circle */}
            <circle cx="60" cy="50" r="8" />
            <circle cx="60" cy="50" r="3" fill="#D49D60" fillOpacity="0.15" />
            {/* Corner connectors — creating the continuous tile grid */}
            <line x1="0" y1="0" x2="30" y2="20" />
            <line x1="120" y1="0" x2="90" y2="20" />
            <line x1="0" y1="100" x2="30" y2="80" />
            <line x1="120" y1="100" x2="90" y2="80" />
            {/* Top/bottom connectors */}
            <line x1="60" y1="0" x2="60" y2="10" />
            <line x1="60" y1="90" x2="60" y2="100" />
            <line x1="0" y1="50" x2="20" y2="50" />
            <line x1="100" y1="50" x2="120" y2="50" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#samarkand-tile)" />
    </svg>
  );
}

// ─── Eight-Pointed Star SVG ─────────────────────────────────────────
function EightPointStar({
  size = 16,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <path
        d="M12 2L14.09 8.26L20 6.34L16.18 11.38L22 14L15.82 14.74L17.66 21L12 17.27L6.34 21L8.18 14.74L2 14L7.82 11.38L4 6.34L9.91 8.26L12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

// ─── 3D Tilt Card ───────────────────────────────────────────────────
function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouse = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      x.set((e.clientX - rect.left) / rect.width - 0.5);
      y.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [x, y],
  );

  const handleLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Config ─────────────────────────────────────────────────────────
const stats = [
  { value: 150, suffix: "+", labelKey: "members", icon: Users },
  { value: 50, suffix: "+", labelKey: "projects", icon: Rocket },
  {
    value: 12,
    suffix: "M+",
    prefix: "$",
    labelKey: "invested",
    icon: Landmark,
  },
  { value: 30, suffix: "+", labelKey: "partners", icon: Handshake },
];

const labels: Record<string, Record<string, string>> = {
  members: { en: "Active Members", ru: "Активных Членов", uz: "Faol A'zolar" },
  projects: {
    en: "Projects Funded",
    ru: "Проектов Профинансировано",
    uz: "Moliyalashtirilgan Loyihalar",
  },
  invested: {
    en: "Total Invested",
    ru: "Общие Инвестиции",
    uz: "Jami Investitsiyalar",
  },
  partners: { en: "Partners", ru: "Партнёров", uz: "Hamkorlar" },
};

// ─── Main Component ─────────────────────────────────────────────────
export default function AnimatedStats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { language } = useLanguage();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* 
        Deep Uzbek Blue background — the signature color of Samarkand
        ranging from the dark interior of Gur-e-Amir to the bright turquoise domes 
      */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1e2d] via-[#0d2e42] to-[#0b1e2d]" />

      {/* Samarkand tilework pattern overlay */}
      <SamarkandTilework />

      {/* Warm glow — like golden light inside Tilla-Kori Madrasah */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#D49D60]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Ornamental gold border lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D49D60]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D49D60]/30 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          {/* Ornamental divider with eight-pointed star */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#D49D60]/50" />
            <EightPointStar size={14} className="text-[#D49D60]/60" />
            <div className="h-px w-24 bg-[#D49D60]/30" />
            <EightPointStar size={20} className="text-[#D49D60]/80" />
            <div className="h-px w-24 bg-[#D49D60]/30" />
            <EightPointStar size={14} className="text-[#D49D60]/60" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#D49D60]/50" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-display">
            Our Growing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D49D60] to-[#e8c088]">
              Legacy
            </span>
          </h2>
          <p className="mt-4 text-white/35 text-lg font-light tracking-wide max-w-lg mx-auto">
            Building the future of Samarkand, one milestone at a time
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            const isHovered = hoveredIdx === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <TiltCard className="h-full perspective-1000">
                  <div
                    className="relative group h-full rounded-2xl p-7 md:p-8 cursor-default overflow-hidden text-center transition-all duration-500"
                    onMouseEnter={() => setHoveredIdx(index)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    style={{
                      background: isHovered
                        ? "linear-gradient(160deg, rgba(212,157,96,0.1), rgba(13,46,66,0.8))"
                        : "rgba(255,255,255,0.025)",
                      border: `1px solid ${isHovered ? "rgba(212,157,96,0.3)" : "rgba(212,157,96,0.08)"}`,
                      boxShadow: isHovered
                        ? "0 0 50px rgba(212,157,96,0.08), 0 20px 50px rgba(0,0,0,0.3), inset 0 1px 0 rgba(212,157,96,0.15)"
                        : "0 4px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.03)",
                    }}
                  >
                    {/* Corner star ornament */}
                    <div className="absolute top-3 right-3 opacity-[0.08] group-hover:opacity-[0.2] transition-opacity duration-700 pointer-events-none">
                      <EightPointStar size={28} className="text-[#D49D60]" />
                    </div>

                    {/* Top gold accent line */}
                    <motion.div
                      className="absolute top-0 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-transparent via-[#D49D60] to-transparent"
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{
                        opacity: isHovered ? 1 : 0,
                        scaleX: isHovered ? 1 : 0,
                      }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Icon */}
                    <div
                      className="w-16 h-16 mx-auto mb-5 rounded-xl flex items-center justify-center transition-all duration-500"
                      style={{
                        background: isHovered
                          ? "rgba(212,157,96,0.15)"
                          : "rgba(212,157,96,0.06)",
                        border: `1px solid ${isHovered ? "rgba(212,157,96,0.35)" : "rgba(212,157,96,0.1)"}`,
                        boxShadow: isHovered
                          ? "0 0 25px rgba(212,157,96,0.15)"
                          : "none",
                      }}
                    >
                      <IconComponent
                        size={28}
                        strokeWidth={1.5}
                        className="transition-colors duration-500"
                        style={{
                          color: isHovered
                            ? "#D49D60"
                            : "rgba(212,157,96,0.45)",
                        }}
                      />
                    </div>

                    {/* Number */}
                    <div className="text-4xl md:text-5xl font-black tracking-tight mb-2 text-white font-display transition-all duration-500">
                      {stat.prefix && (
                        <span className="text-[#D49D60]/70">{stat.prefix}</span>
                      )}
                      {inView ? (
                        <CountUp
                          end={stat.value}
                          duration={2.5}
                          separator=","
                          easingFn={(t, b, c, d) => {
                            t /= d;
                            return c * t * t * t + b;
                          }}
                        />
                      ) : (
                        <span>0</span>
                      )}
                      <span className="text-[#D49D60]">{stat.suffix}</span>
                    </div>

                    {/* Label */}
                    <p className="text-white/35 text-xs font-semibold uppercase tracking-[0.2em] group-hover:text-white/55 transition-colors duration-500">
                      {labels[stat.labelKey][language]}
                    </p>

                    {/* Bottom warm glow on hover */}
                    <div className="absolute -bottom-4 left-1/4 right-1/4 h-16 rounded-full blur-[30px] opacity-0 group-hover:opacity-25 transition-opacity duration-700 pointer-events-none bg-[#D49D60]" />
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
