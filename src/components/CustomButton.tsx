import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface CustomButtonProps extends Omit<HTMLMotionProps<"button">, 'children'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  icon?: boolean;
  children: React.ReactNode;
}

export const CustomButton: React.FC<CustomButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = true,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm font-medium shadow-md";
  
  const variants = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    outline: "bg-transparent text-white border-2 border-white backdrop-blur-sm",
    white: "bg-white text-foreground"
  };

  return (
    <motion.button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ 
        y: -2,
        scale: 1.02,
        backgroundColor: variant === 'primary' ? 'hsl(var(--primary) / 0.9)' : 
                        variant === 'secondary' ? 'hsl(var(--secondary) / 0.9)' :
                        variant === 'outline' ? 'hsl(0 0% 100% / 0.1)' :
                        'hsl(0 0% 100% / 0.9)'
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      {...props}
    >
      {children}
      {icon && <ArrowUpRight className="w-4 h-4" />}
    </motion.button>
  );
};
