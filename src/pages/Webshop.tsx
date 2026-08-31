import React from 'react';
import { Section } from '@/components/Section';
import { FadeIn } from '@/components/Animations';
import { ShoppingBag, Check } from 'lucide-react';
import nourishCover from '@/assets/nourish-your-body-cover-2.jpeg.asset.json';

const SectionTag = ({ text }: { text: string }) => (
  <div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium shadow-xs tracking-wide">
    {text}
  </div>
);

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
  <FadeIn className="h-full">
    <article className="bg-white rounded-2xl overflow-hidden border border-secondary/30 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
      <div className="bg-secondary/10 flex items-center justify-center p-6">
        <img
          src={product.image}
          alt={`${product.title} — ${product.description}`}
          className="w-full max-w-[260px] h-auto rounded-xl"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="p-6 flex flex-col grow">
        <h2 className="font-serif text-xl md:text-2xl text-foreground mb-3">{product.title}</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">{product.description}</p>
        <ul className="mt-4 space-y-2">
          {product.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 mt-0.5 text-primary shrink-0" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 pt-4 border-t border-secondary/30 flex items-center justify-between gap-4 mt-auto">
          {product.price && <span className="font-serif text-lg text-foreground">{product.price}</span>}
          <a
            href={product.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground px-5 py-3 text-sm font-medium cursor-pointer transition-colors hover:bg-primary/90 w-full sm:w-auto"
          >
            <ShoppingBag className="w-4 h-4" />
            Bestel nu
          </a>
        </div>
      </div>
    </article>
  </FadeIn>
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
