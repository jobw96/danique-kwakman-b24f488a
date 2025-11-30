import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Section } from '@/components/Section';
import { FadeIn } from '@/components/Animations';

import blogHormonen from '@/assets/blog-hormonen.jpg';
import blogDarmgezondheid from '@/assets/blog-darmgezondheid.jpg';
import blogEnergie from '@/assets/blog-energie.jpg';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'hormoonbalans-5-signalen',
    title: 'Hormoonbalans: 5 Signalen dat je hormonen uit balans zijn',
    excerpt: 'Ontdek de meest voorkomende signalen die aangeven dat je hormonen mogelijk uit balans zijn en wat je eraan kunt doen.',
    image: blogHormonen,
    date: '28 november 2024',
    readTime: '6 min',
    category: 'Hormonen'
  },
  {
    id: '2',
    slug: 'darmgezondheid-basis-welzijn',
    title: 'Darmgezondheid: De basis van je welzijn',
    excerpt: 'Waarom een gezonde darm de sleutel is tot meer energie, een sterker immuunsysteem en een betere mentale gezondheid.',
    image: blogDarmgezondheid,
    date: '21 november 2024',
    readTime: '8 min',
    category: 'Darmgezondheid'
  },
  {
    id: '3',
    slug: 'natuurlijke-energie-boost',
    title: 'Energie boost: Natuurlijke manieren om je energie te verhogen',
    excerpt: 'Voel je je vaak moe en uitgeput? Ontdek bewezen natuurlijke methoden om je energieniveau te verhogen zonder cafeïne.',
    image: blogEnergie,
    date: '14 november 2024',
    readTime: '5 min',
    category: 'Energie'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <Section className="bg-muted/30 py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Inzichten voor een <span className="text-secondary">gezonder</span> leven
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Artikelen over hormoonbalans, darmgezondheid en energie.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* Blog Posts Grid */}
      <Section className="py-12 md:py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {BLOG_POSTS.map((post) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
              className="group h-full"
            >
              <Link to={`/blog/${post.slug}`} className="block h-full">
                <div className="bg-card rounded-xl overflow-hidden border border-border/50 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    {/* Meta */}
                    <div className="flex items-center gap-3 text-muted-foreground text-xs mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="font-serif text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-muted-foreground text-sm leading-relaxed flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Read More */}
                    <div className="flex items-center gap-2 text-primary font-medium text-sm mt-3 pt-3 border-t border-border/30">
                      <span>Lees meer</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </Section>
    </div>
  );
};

export default Blog;
