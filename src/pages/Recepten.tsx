import React from 'react';
import { Link } from '@/lib/router-compat';
import { Section } from '@/components/Section';
import { FadeIn } from '@/components/Animations';
import { ChefHat } from 'lucide-react';
import { recipes, type Recipe } from '@/data/recipes';

const SectionTag = ({ text }: { text: string }) => (
  <div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium shadow-xs tracking-wide">{text}</div>
);

const RecipeCard = ({ recipe }: { recipe: Recipe }) => (
  <FadeIn className="h-full">
    <Link
      to={`/recepten/${recipe.slug}`}
      className="bg-white rounded-2xl overflow-hidden shadow-xs border border-secondary/30 h-full flex flex-col cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-primary/30"
    >
      <div className="h-56 overflow-hidden">
        <img
          src={recipe.image}
          alt={`${recipe.title} - gezond recept voor energie en hormoonbalans`}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="font-serif text-xl text-foreground mb-3">{recipe.title}</h2>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 flex-grow">{recipe.intro}</p>
        <div className="flex items-center text-primary font-medium mt-4 text-sm">
          Bekijk recept<span className="sr-only"> voor {recipe.title}</span> <ChefHat className="w-4 h-4 ml-2" />
        </div>
      </div>
    </Link>
  </FadeIn>
);

const Recepten = () => (
  <div className="min-h-screen">
    <Section className="pt-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <FadeIn>
            <SectionTag text="Gratis Recepten" />
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">Mijn Favoriete Recepten</h1>
            <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground leading-relaxed">
              <p>Dit zijn een aantal van mijn favoriete recepten.</p>
              <p>
                Voeding is zoveel meer dan brandstof. Het zorgt voor de juiste bouwstenen, voor energie en gezelligheid.
                Ik hou van lekker eten, maar ik maak het mezelf graag makkelijk, vooral op drukke dagen. Cook once, eat twice is dan perfect!
                Het liefst maak ik een grote pan soep of een bananenbrood, zodat je even vooruit kunt en tóch voedzaam eet.
              </p>
              <p>Met deze recepten maak je het jezelf een stukje makkelijker en je lijf een stukje blijer.</p>
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </Section>
  </div>
);

export default Recepten;
