"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence, useMotionValue, useAnimationFrame, useTransform } from 'framer-motion';
import Image from 'next/image';

// Utility for conditional class names
const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(" ");

// Static image data
const galleryImages = [
  "/images/galleryphotos/sam1.avif",      // Registan Square
  "/images/galleryphotos/sam2.avif",      // Gur-Emir Mausoleum
  "/images/galleryphotos/samarkand.avif",  // Shahi-Zinda Blue
  "/images/galleryphotos/sam3.jpeg",      // Bibi-Khanym Mosque
  "/images/galleryphotos/sam1.avif",      // Registan Square at Night (reused)
  "/images/galleryphotos/sam5.jpg",       // Turquoise Domes
  "/images/galleryphotos/samarkand.avif",  // Heritage Tiles (reused)
  "/images/galleryphotos/sam5.jpg",       // Carved Portals (reused)
];

type CardData = {
  id: number;
  image: string;
  title: string;
  description: string;
};

// FlipCard Component
function FlipCard({ 
  image, 
  title, 
  description, 
  className, 
  style,
  onClick,
  onMouseEnter,
  onMouseLeave
}: {
  image: string;
  title: string;
  description: string;
  className?: string;
  style?: any;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  return (
    <motion.div
      className={cn(
        "group w-24 h-32 md:w-28 md:h-36 lg:w-32 lg:h-40 rounded-xl [perspective:1000px] cursor-pointer",
        className,
      )}
      style={style}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative w-full h-full rounded-xl shadow-lg transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front side - Image */}
        <div className="absolute inset-0 rounded-xl [backface-visibility:hidden]">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 96px, (max-width: 1024px) 112px, 128px"
            className="object-cover rounded-xl border-2 border-primary/30 pointer-events-none"
          />
        </div>
        {/* Back side - Title and Description */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-primary-dark border-2 border-primary flex flex-col items-center justify-center p-3 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <h3 className="font-bold text-xs md:text-sm text-white mb-1 text-balance">{title}</h3>
          <p className="text-[10px] md:text-xs text-white/80 text-pretty leading-snug line-clamp-3">{description}</p>
          <span className="mt-2 text-white/60 text-[10px] flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">zoom_in</span>
            View
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// Helper component for each card to avoid re-renders
const CardWrapper = ({ 
  index, 
  total, 
  card, 
  rotation, 
  radius,
  onSelect,
  onHoverChange 
}: { 
  index: number;
  total: number;
  card: CardData;
  rotation: any;
  radius: number;
  onSelect: (card: CardData) => void;
  onHoverChange: (hovering: boolean) => void;
}) => {
  const angleOffset = (index / total) * 2 * Math.PI - Math.PI / 2;
  
  const x = useTransform(rotation, (r: number) => radius * Math.cos(r + angleOffset));
  const y = useTransform(rotation, (r: number) => radius * Math.sin(r + angleOffset));
  const rotate = useTransform(rotation, (r: number) => (r + angleOffset + Math.PI / 2) * (180 / Math.PI));

  return (
    <FlipCard
      image={card.image}
      title={card.title}
      description={card.description}
      className="absolute hover:z-20"
      style={{
        left: '50%',
        top: '50%',
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
        rotate,
      }}
      onClick={() => onSelect(card)}
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
    />
  );
};

// Main Circular Gallery Component
export default function CircularGallery() {
  const { t } = useLanguage();
  const galleryRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(0);
  const [selectedImage, setSelectedImage] = useState<CardData | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  
  // Motion value for rotation
  const rotation = useMotionValue(0);

  // Combine static images with translated text
  const cardData = useMemo(() => {
    return galleryImages.map((img, index) => ({
      id: index + 1,
      image: img,
      title: t.sections.gallery.items[index]?.title || `Image ${index + 1}`,
      description: t.sections.gallery.items[index]?.description || '',
    }));
  }, [t]);

  // Effect for responsive sizing
  useEffect(() => {
    const updateSize = () => {
      if (galleryRef.current) {
        const gallerySize = galleryRef.current.offsetWidth;
        setSize(gallerySize);
      }
    };

    updateSize();

    const resizeObserver = new ResizeObserver(updateSize);
    if (galleryRef.current) {
      resizeObserver.observe(galleryRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  // Animation loop using useAnimationFrame for smooth performance
  useAnimationFrame((time, delta) => {
    if (!isHovering && !selectedImage && size > 0) {
      // Delta time normalization
      const currentRotation = rotation.get();
      rotation.set(currentRotation + 0.0003 * delta); 
    }
  });

  // Navigate to previous/next image in modal
  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    const currentIndex = cardData.findIndex(card => card.id === selectedImage.id);
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % cardData.length 
      : (currentIndex - 1 + cardData.length) % cardData.length;
    setSelectedImage(cardData[newIndex]);
  };

  const radius = size * 0.4; // Slightly increased for better spacing

  return (
    <>
      <section className="w-full bg-gradient-to-b from-[#0A1628] via-[#0e1f3d] to-[#0A1628] py-16 px-4 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">{t.sections.gallery.title}</h2>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
              {t.sections.gallery.title}
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              {t.sections.gallery.subtitle}
            </p>
          </div>

          {/* Circular Gallery Container */}
          <div className="flex items-center justify-center">
            <div
              ref={galleryRef}
              className="relative w-full max-w-[340px] sm:max-w-[500px] md:max-w-[650px] lg:max-w-[750px] aspect-square flex items-center justify-center"
            >
              {/* Central text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none p-8">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm rounded-full p-8 md:p-12 lg:p-14 border border-white/10">
                  <h2 className="text-lg md:text-2xl lg:text-3xl font-extrabold text-white text-center text-balance leading-tight [text-shadow:0_4px_10px_rgba(0,0,0,0.5)]">
                    {t.sections.gallery.visualStories}
                  </h2>
                  <p className="text-[10px] md:text-xs text-white/60 uppercase tracking-widest font-medium mt-3 text-center">
                    {t.sections.gallery.clickExplore}
                  </p>
                </div>
              </div>

              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border border-white/5" style={{ margin: '5%' }}></div>
              <div className="absolute inset-0 rounded-full border border-white/10" style={{ margin: '15%' }}></div>
              <div className="absolute inset-0 rounded-full border border-primary/20" style={{ margin: '25%' }}></div>

              {/* Circular arrangement of cards */}
              {size > 0 &&
                cardData.map((card, index) => (
                    <CardWrapper 
                      key={card.id} 
                      index={index} 
                      total={cardData.length}
                      card={card} 
                      rotation={rotation}
                      radius={radius}
                      onSelect={setSelectedImage}
                      onHoverChange={setIsHovering}
                    />
                ))}
            </div>
          </div>

          {/* View More Button */}
          <div className="flex justify-center mt-12">
            <button className="group flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50">
              {t.sections.gallery.viewFull}
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <motion.button 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute top-6 right-6 size-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110 border border-white/20 z-50"
              onClick={() => setSelectedImage(null)}
            >
              <span className="material-symbols-outlined text-white text-3xl">close</span>
            </motion.button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotateY: 90 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative max-w-4xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 bg-black aspect-video md:aspect-auto">
                 <div className="w-full h-full relative" style={{ minHeight: '50vh' }}>
                    <Image 
                    src={selectedImage.image} 
                    alt={selectedImage.title} 
                    fill
                    className="object-contain"
                    sizes="100vw"
                    />
                 </div>
                
                {/* Gradient Overlay for Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="text-accent text-sm font-bold uppercase tracking-widest">{t.sections.gallery.title}</span>
                    <h3 className="text-white text-3xl md:text-4xl font-bold mt-2">{selectedImage.title}</h3>
                    <p className="text-white/70 text-lg mt-2">{selectedImage.description}</p>
                  </motion.div>
                </div>
              </div>

              {/* Image Counter */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3"
              >
                {cardData.map((card, index) => (
                  <button
                    key={card.id}
                    onClick={() => setSelectedImage(card)}
                    className={`size-2 rounded-full transition-all ${
                      card.id === selectedImage.id 
                        ? 'bg-primary w-6' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* Navigation Arrows */}
            <motion.button 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute left-4 md:left-8 size-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110 border border-white/20 z-50"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
            >
              <span className="material-symbols-outlined text-white text-3xl">chevron_left</span>
            </motion.button>
            <motion.button 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute right-4 md:right-8 size-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110 border border-white/20 z-50"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
            >
              <span className="material-symbols-outlined text-white text-3xl">chevron_right</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


