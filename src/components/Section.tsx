import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
}

/**
 * Geeft de aanroep zelf al verticale padding mee, dan laat Section de eigen
 * standaard voor die kant weg. Dat kan tailwind-merge niet oplossen: een
 * `pt-4` uit className verdringt `py-20` niet, en een responsieve variant als
 * `md:pt-32` botst alleen met een andere `md:pt-*`. Zonder deze check werd de
 * meegegeven bovenpadding stilzwijgend genegeerd vanaf de md-breakpoint.
 */
const heeftPadding = (className: string, zijde: 't' | 'b') =>
  new RegExp(String.raw`(^|\s|:)p[${zijde}y]-`).test(className);

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ id, className = '', children, dark = false }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          !heeftPadding(className, 't') && 'pt-20 md:pt-32',
          !heeftPadding(className, 'b') && 'pb-20 md:pb-32',
          dark ? 'bg-foreground text-background' : 'bg-background text-foreground',
          className
        )}
      >
        <div className="container mx-auto px-6">
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = 'Section';
