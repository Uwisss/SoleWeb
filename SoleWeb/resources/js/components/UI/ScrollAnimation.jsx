import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export const ScrollAnimation = ({
  children,
  delay = 0,
  yOffset = 20,
  duration = 0.6,
  className = '',
  ...props
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const variants = {
    hidden: { 
      opacity: 0, 
      y: yOffset,
      transition: { duration, ease: [0.25, 0.1, 0.25, 1] }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      } 
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({ children, className = '', staggerChildren = 0.1, ...props }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={className}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren: 0.2
          }
        }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const FadeIn = ({ children, delay = 0, className = '' }) => (
  <ScrollAnimation 
    delay={delay} 
    duration={0.8} 
    yOffset={0}
    className={className}
  >
    {children}
  </ScrollAnimation>
);
