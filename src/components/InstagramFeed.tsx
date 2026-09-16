import React from 'react';
import { m } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { Section } from '@/components/Section';
import { FadeIn } from '@/components/Animations';

const IG_PROFILE_URL = 'https://www.instagram.com/daniquekwakman/';

interface IgPost {
  code: string;
  type: 'p' | 'reel';
  alt: string;
}

/** Nieuwste posts van @daniquekwakman (handmatig bij te werken). */
const POSTS: IgPost[] = [{
  code: 'DbqbBLEM_3o',
  type: 'p',
  alt: 'Post van Danique Kwakman op Instagram'
}, {
  code: 'DbhqqcZsWa8',
  type: 'p',
  alt: 'Post van Danique Kwakman op Instagram'
}, {
  code: 'DaXCjgIsR-r',
  type: 'p',
  alt: 'Post van Danique Kwakman op Instagram'
}, {
  code: 'DaFKUtgM4--',
  type: 'p',
  alt: 'Post van Danique Kwakman op Instagram'
}, {
  code: 'DdTDLhYDD6Z',
  type: 'p',
  alt: 'Post: inmiddels heb ik al 50+ vrouwen geholpen'
}, {
  code: 'DV0aoj8jF0L',
  type: 'p',
  alt: 'Post: "Kom maar terug als je zwanger wil worden"'
}, {
  code: 'DdWnM6jMZZ_',
  type: 'reel',
  alt: 'Reel over PCOS-klachten'
}, {
  code: 'DdRZncOsLNk',
  type: 'reel',
  alt: 'Reel: was dit echt hoe jij je zomer wilde doorbrengen?'
}, {
  code: 'DcsVy0HsyRk',
  type: 'reel',
  alt: 'Reel: inzichten na 14 dagen glucosemonitoring'
}, {
  code: 'DcYdQVNDAnI',
  type: 'p',
  alt: 'Post: home made amandelpasta'
}, {
  code: 'DcME2JsMSHt',
  type: 'reel',
  alt: 'Reel: je lichaam boeit die calorieën helemaal niet'
}, {
  code: 'DcIpvnvjClq',
  type: 'p',
  alt: 'Post: wat je kunt doen tegen energiedips'
}];

export const InstagramFeed: React.FC = () => (
  <Section className="py-20 md:py-28">
    <div className="text-center mb-12">
      <FadeIn>
        <div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium shadow-xs tracking-wide">Instagram</div>
        <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Volg me op Instagram</h2>
      </FadeIn>
    </div>

    <div className="overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0 [scrollbar-width:thin]">
      <div className="flex gap-5 md:gap-6 w-max mx-auto">
        {POSTS.map((post, index) => (
          <m.div
            key={post.code}
            className="w-[300px] md:w-[320px] shrink-0 snap-center rounded-md overflow-hidden border border-secondary/30 bg-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <iframe
              src={`https://www.instagram.com/${post.type}/${post.code}/embed`}
              title={post.alt}
              width={320}
              height={580}
              loading="lazy"
              scrolling="no"
              frameBorder={0}
              className="w-full h-[580px]"
            />
          </m.div>
        ))}
      </div>
    </div>

    <div className="text-center mt-8">
      <m.a
        href={IG_PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Volg Danique Kwakman op Instagram"
        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm font-medium bg-secondary text-white cursor-pointer"
        whileHover={{ y: -2, scale: 1.02, backgroundColor: 'hsl(var(--secondary) / 0.9)' }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        <Instagram size={18} strokeWidth={1.5} />
        Volg @daniquekwakman
      </m.a>
    </div>
  </Section>
);
