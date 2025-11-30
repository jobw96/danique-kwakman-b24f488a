import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const LUXE_EASE: [number, number, number, number] = [0.6, 0.01, 0.05, 0.95];

export const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: -40 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        y: 0,
        transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] }
      }}
      exit={{ 
        opacity: 0, 
        scale: 0.96, 
        y: 40,
        transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] }
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export const FadeIn: React.FC<{ 
  children: React.ReactNode; 
  delay?: number; 
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  fullWidth?: boolean;
}> = ({ children, delay = 0, direction = 'up', className = '', fullWidth = false }) => {
  
  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0,
      transition: { 
        duration: 0.9, 
        ease: LUXE_EASE,
        delay: delay 
      } 
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={variants}
      className={`${className} ${fullWidth ? 'w-full' : ''}`}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={{
        visible: { transition: { staggerChildren: 0.15, delayChildren: delay } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ParallaxImage: React.FC<{ 
  src: string; 
  alt: string; 
  className?: string; 
  speed?: number;
}> = ({ src, alt, className = '', speed = 0.15 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale }}
        className="w-full h-full object-cover"
      />
    </div>
  );
};
