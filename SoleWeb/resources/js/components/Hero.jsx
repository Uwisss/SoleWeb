import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '../components/UI/button';

const slides = [
  {
    id: 1,
    image: '/img/places/shangrila.png',
    title: 'Ultimate Luxury Awaits at',
    highlight: 'Shangri-La',
    displayText: 'Shangri-La',
    description: 'Indulge in world-class hospitality where pristine beaches meet five-star luxury. Experience private villas, award-winning spas, and gourmet dining with breathtaking ocean views.',
    cta: 'Reserve Your Paradise',
    tag: 'Exclusive Member Rates',
    features: ['Private Beach Access', '24/7 Butler Service', 'Infinity Pools']
  },
  {
    id: 2,
    image: '/img/places/boracay.png',
    title: 'Tropical Paradise Found in',
    highlight: 'Boracay',
    displayText: 'Boracay',
    description: 'Step onto the world-famous White Beach, where powder-soft sand meets crystal-clear waters. Enjoy water sports, sunset cruises, and vibrant nightlife in this island paradise.',
    cta: 'Discover Island Deals',
    tag: 'Limited Time Offer',
    features: ['Free Water Activities', 'Beachfront Dining', 'Spa Packages']
  },
  {
    id: 3,
    image: '/img/places/Riceterraces.png',
    title: 'Ancient Wonders of the',
    highlight: 'Banaue Rice Terraces',
    displayText: 'Rice Terraces',
    description: 'Witness the "Eighth Wonder of the World" - 2,000-year-old terraces carved into the Cordillera Mountains. Experience indigenous culture and breathtaking mountain landscapes.',
    cta: 'Plan Your Cultural Journey',
    tag: 'UNESCO Heritage Site',
    features: ['Guided Hikes', 'Cultural Shows', 'Local Homestays']
  },
  {
    id: 4,
    image: '/img/places/tokyo.png',
    title: 'Neon Dreams in',
    highlight: 'Tokyo',
    displayText: 'Tokyo',
    description: 'Where ancient temples meet cutting-edge technology. From cherry blossom gardens to robot restaurants, experience the perfect harmony of tradition and innovation.',
    cta: 'Explore Tokyo Now',
    tag: 'Trending Destination',
    features: ['Temple Tours', 'Sushi Making Classes', 'Shopping Districts']
  },
  {
    id: 5,
    image: '/img/places/korea.png',
    title: 'K-Wave Awaits in',
    highlight: 'South Korea',
    displayText: 'Korea',
    description: 'From the futuristic streets of Seoul to the tranquil beauty of Jeju Island. Immerse yourself in K-culture, cuisine, and breathtaking landscapes.',
    cta: 'Start Your K-Adventure',
    tag: 'Popular Destination',
    features: ['Palace Tours', 'K-Beauty Spas', 'Street Food Tours']
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef(null);
  const slideInterval = 5000; // 5 seconds per slide

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    
    // Add a small delay before allowing next transition
    const transitionTimer = setTimeout(() => {
      setIsTransitioning(false);
    }, 100);
    
    return () => clearTimeout(transitionTimer);
  }, [isTransitioning]);

  const goToSlide = useCallback((index) => {
    if (isTransitioning || index === currentSlide) return;
    
    setIsTransitioning(true);
    setCurrentSlide(index);
    
    // Reset the timer when user manually changes slide
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    const transitionTimer = setTimeout(() => {
      setIsTransitioning(false);
      // Restart the timer after transition
      timeoutRef.current = setTimeout(nextSlide, slideInterval);
    }, 100);
    
    return () => clearTimeout(transitionTimer);
  }, [currentSlide, isTransitioning, nextSlide]);

  // Auto-advance slides
  useEffect(() => {
    if (isHovered) return;
    
    const startTimer = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      const timer = () => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
        timeoutRef.current = setTimeout(timer, slideInterval);
      };
      
      timeoutRef.current = setTimeout(timer, slideInterval);
    };
    
    startTimer();
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isHovered]);

  const slideVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
    exit: { 
      opacity: 0, 
      x: -50,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        delay: 0.3,
        ease: [0.16, 1, 0.3, 1] 
      }
    }
  };

  return (
    <section 
      className="relative min-h-[calc(100vh-64px)] pt-16 md:pt-0 md:h-screen flex items-start md:items-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slideshow Background */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 w-full h-full"
            onAnimationComplete={() => setIsTransitioning(false)}
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].highlight}
              className="w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 h-full flex flex-col justify-center py-12 md:py-0 md:pb-32 lg:pb-24">
        <motion.div
          className="max-w-2xl text-white"
          initial="hidden"
          animate="visible"
          variants={contentVariants}
          key={`content-${currentSlide}`}
        >
          <motion.div className="space-y-4 sm:space-y-6 pt-6 md:pt-0">
            <motion.span 
              className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium sm:font-semibold text-white bg-gradient-to-r from-amber-400/90 to-amber-500/90 rounded-full backdrop-blur-sm border border-amber-300/30 shadow-lg shadow-amber-500/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <svg className="w-4 h-4 mr-2 text-amber-100" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {slides[currentSlide].tag || 'Featured Destination'}
            </motion.span>
            
            <motion.h1 
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {slides[currentSlide].title} <br />
              <span className="bg-gradient-to-r from-teal-300 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                {slides[currentSlide].highlight}
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {slides[currentSlide].description}
            </motion.p>
            
            {slides[currentSlide].features && (
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <ul className="flex flex-wrap gap-3">
                  {slides[currentSlide].features.map((feature, index) => (
                    <li key={index} className="flex items-center text-xs xs:text-sm sm:text-base text-white/90 bg-white/5 backdrop-blur-sm px-2 xs:px-3 py-1 xs:py-1.5 rounded-full border border-white/10">
                      <svg className="w-3.5 h-3.5 mr-1.5 text-teal-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Button 
              className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-white px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base font-medium h-auto group w-full sm:w-auto text-center"
              size="lg"
            >
              {slides[currentSlide].cta}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base h-auto group bg-white/5 backdrop-blur-sm w-full sm:w-auto"
              size="lg"
              onClick={() => window.open('https://www.facebook.com/sole.explorer/videos/877766847534363', '_blank', 'noopener,noreferrer')}
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Video
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Preview Thumbnails - Enhanced Responsive */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 md:left-auto md:right-8 lg:right-12 z-10 w-full md:w-auto max-w-full overflow-visible no-scrollbar px-4 sm:px-6 md:px-0">
        <div className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 justify-center">
          {slides.map((slide, index) => {
            const isActive = currentSlide === index;
            return (
              <motion.div 
                key={slide.id}
                className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 flex-shrink-0 ${
                  isActive 
                    ? 'ring-3 sm:ring-4 ring-amber-300 shadow-lg sm:shadow-2xl' 
                    : 'opacity-80 hover:opacity-100 hover:ring-2 hover:ring-white/50'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentSlide(index);
                  if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                  }
                }}
                initial={false}
                animate={{
                  scale: isActive ? 1.1 : 1,
                  y: isActive ? (window.innerWidth < 768 ? -5 : -10) : 0,
                }}
                whileHover={{ 
                  scale: 1.1,
                  y: window.innerWidth < 768 ? -5 : -10,
                  transition: { duration: 0.2, ease: 'easeOut' },
                  zIndex: 10
                }}
                whileTap={{ 
                  scale: 1.05,
                  y: -5,
                  zIndex: 10
                }}
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 30
                }}
                style={{ 
                  width: '120px',
                  height: '80px',
                  '@media (min-width: 480px)': {
                    width: '160px',
                    height: '100px'
                  },
                  '@media (min-width: 768px)': {
                    width: '200px',
                    height: '130px'
                  },
                  '@media (min-width: 1024px)': {
                    width: '240px',
                    height: '150px'
                  },
                  '@media (min-width: 1280px)': {
                    width: '280px',
                    height: '170px'
                  }
                }}
              >
                <motion.img 
                  src={slide.image} 
                  alt={slide.highlight}
                  className="w-full h-full object-cover"
                  initial={false}
                  animate={{
                    scale: isActive ? 1.05 : 1,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut'
                  }}
                />
                {isActive && (
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end justify-center pb-2 sm:pb-3"
                    initial={false}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-white font-semibold text-xs sm:text-sm font-sans px-2 text-center truncate w-full">
                      {slide.displayText || slide.highlight}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
