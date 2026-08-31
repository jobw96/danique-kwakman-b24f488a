import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/Section';
import { FadeIn } from '@/components/Animations';
import { ShoppingBag, Check, ArrowRight } from 'lucide-react';
import nourishCover from '@/assets/nourish-your-body-cover-2.jpeg.asset.json';

const SectionTag = ({ text }: { text: string }) => (
  <div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium shadow-xs tracking-wide">
    {text}
  </div>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

interface Product {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  price: string;
  image: string;
  href: string;
}

const products: Product[] = [
  {
    id: 'nourish-your-body',
    title: 'Nourish Your Body',
    description:
      '50+ hormoonproof en darmvriendelijke recepten. Cyclusgerichte voeding en maaltijden die je hormonen, darmen en energie ondersteunen.',
    highlights: ['50+ recepten', 'Hormoon- & darmproof', 'Direct te downloaden'],
    price: '',
    image: nourishCover.url,
    href: 'https://daniquekwakman.plugandpay.com/checkout/nourish-your-body',
  },
];

const ProductCard = ({ product }: { product: Product }) => (
  <motion.article variants={cardVariants} className="group h-full">
    <a
      href={product.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full bg-card rounded-xl overflow-hidden border border-border/50 flex flex-col transition-colors duration-300 hover:border-primary/30"
    >
      <div className="relative h-60 overflow-hidden">
        <img
          src={product.image}
          alt={`${product.title} — ${product.description}`}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="p-5 flex flex-col grow">
        <h2 className="font-serif text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {product.title}
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
          {product.description}
        </p>
        <ul className="mt-4 space-y-2">
          {product.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 mt-0.5 text-primary shrink-0" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 pt-3 border-t border-border/30 flex items-center justify-between gap-4">
          {product.price && (
            <span className="font-serif text-lg text-foreground">{product.price}</span>
          )}
          <span className="inline-flex items-center gap-2 text-primary font-medium text-sm">
            <ShoppingBag className="w-4 h-4" />
            Bestel nu
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </div>
      </div>
    </a>
  </motion.article>
);

const Webshop = () => (
  <div className="min-h-screen">
    <Section className="pt-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <FadeIn>
            <SectionTag text="Webshop" />
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              Webshop
            </h1>
            <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
              Praktische e-books en tools die je helpen bij hormoonbalans, darmgezondheid en meer energie.
              Je bestelt veilig via een externe checkout en ontvangt je aankoop direct per mail.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Section>
  </div>
);

export default Webshop;
