import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed bottom-8 right-8 z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <motion.button
            type="button"
            onClick={scrollToTop}
            className="bg-lime-600 hover:bg-lime-700 text-white p-3 rounded-full shadow-xl 
                     focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-opacity-50"
            whileHover={{ 
              scale: 1.1,
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}
            whileTap={{ 
              scale: 0.95,
              boxShadow: '0 2px 10px -3px rgba(0, 0, 0, 0.1)'
            }}
            aria-label="Back to top"
          >
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5,
                ease: 'easeInOut'
              }}
            >
              <ArrowUp className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
