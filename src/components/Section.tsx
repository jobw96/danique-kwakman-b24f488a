import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ id, className = '', children, dark = false }, ref) => {
    return (
      <section 
        ref={ref}
        id={id} 
        className={`py-20 md:py-32 ${dark ? 'bg-foreground text-background' : 'bg-background text-foreground'} ${className}`}
      >
        <div className="container mx-auto px-6">
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = 'Section';
