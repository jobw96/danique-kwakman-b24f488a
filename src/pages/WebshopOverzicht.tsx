import { m } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/lib/router-compat';
import { Section } from '@/components/Section';
import { FadeIn } from '@/components/Animations';
import nourishCover from '@/assets/nourish-your-body-cover-2.webp.asset.json';

const products = [
  {
    href: '/webshop/nourish-your-body',
    image: nourishCover.url,
    alt: 'E-book Nourish Your Body van Danique Kwakman met 50+ hormoonproof recepten',
    category: 'E-book',
    title: 'Nourish Your Body',
    text: '50+ hormoonproof en darmvriendelijke recepten, eten volgens je cyclus en mealprep-hacks.',
  },
];

const WebshopOverzicht = () => (
  <div className="min-h-screen bg-background">
    <Section className="pt-12 md:pt-20 bg-background">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12 md:mb-16">
            <h1 className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium tracking-wide">
              Webshop
            </h1>
            <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
              Hier vind je mijn producten om zelf aan de slag te gaan met je hormonen, darmen en energie.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <FadeIn key={p.href} className="h-full">
              <Link to={p.href} className="block h-full group">
                <m.div
                  className="h-full flex flex-col"
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                >
                  <div className="aspect-square rounded-2xl bg-card overflow-hidden mb-4 flex items-center justify-center">
                    <img src={p.image} alt={p.alt} className="w-full h-full object-contain p-6" loading="eager" decoding="async" />
                  </div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{p.category}</span>
                  <h2 className="font-serif text-xl text-foreground mb-2">{p.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{p.text}</p>
                  <span className="inline-flex items-center text-sm text-primary font-medium mt-auto">
                    Bekijk product <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </span>
                </m.div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  </div>
);

export default WebshopOverzicht;
