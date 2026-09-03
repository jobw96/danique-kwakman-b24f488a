import React from 'react';
import { Link, useParams, Navigate } from '@/lib/router-compat';
import { Section } from '@/components/Section';
import { FadeIn } from '@/components/Animations';
import { ArrowLeft, Lightbulb, ChefHat } from 'lucide-react';
import { getRecipeBySlug, recipes } from '@/data/recipes';

const ReceptDetail = () => {
  const { slug } = useParams();
  const recipe = getRecipeBySlug(slug);

  if (!recipe) return <Navigate to="/recepten" replace />;

  const others = recipes.filter((r) => r.slug !== recipe.slug).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Titel, description, canonical en het Recipe-schema staan in
          src/routes/_layout/recepten/$slug.tsx, zodat ze in de
          server-response staan in plaats van pas na hydratie. */}

      <Section className="pt-4 bg-background">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <Link
              to="/recepten"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Terug naar recepten
            </Link>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              {recipe.title}
            </h1>

            <div className="rounded-2xl overflow-hidden mb-8 aspect-[16/10]">
              <img
                src={recipe.image}
                alt={`${recipe.title} - voedzaam recept van orthomoleculair therapeut Danique Kwakman`}
                className="w-full h-full object-cover"
                decoding="async"
              />
            </div>

            <div className="mb-10 space-y-4">
              {recipe.intro.split('\n\n').filter(Boolean).map((p, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
              <div className="bg-[#FDF8F3] rounded-2xl p-6">

                <h2 className="font-serif text-xl text-foreground mb-4 flex items-baseline gap-2">
                  Ingrediënten
                  {recipe.ingredientsNote && (
                    <span className="text-xs font-normal text-muted-foreground">({recipe.ingredientsNote})</span>
                  )}
                </h2>
                <ul className="space-y-2">
                  {recipe.ingredients.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl p-6 border border-secondary/30">
                <h2 className="font-serif text-xl text-foreground mb-4">Bereiding</h2>
                <ol className="space-y-4">
                  {recipe.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium text-primary flex-shrink-0">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {recipe.tip && (
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mt-10 flex items-start gap-3">
                <Lightbulb size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm">
                  <span className="font-medium text-foreground">Tip:</span> {recipe.tip}
                </p>
              </div>
            )}

            {recipe.afterNote && (
              <p className="text-muted-foreground text-sm italic mt-6">{recipe.afterNote}</p>
            )}

            {recipe.notes && recipe.notes.length > 0 && (
              <div className="mt-8 space-y-4">
                {recipe.notes.map((note, i) => (
                  <p key={i} className="text-muted-foreground text-sm leading-relaxed">{note}</p>
                ))}
              </div>
            )}

            {recipe.videoUrl && (
              <div className="mt-8">
                {recipe.videoText && (
                  <p className="text-muted-foreground text-sm leading-relaxed mb-2">{recipe.videoText}</p>
                )}
                <a
                  href={recipe.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm font-medium underline underline-offset-4 break-all"
                >
                  {recipe.videoUrl}
                </a>
              </div>
            )}
          </FadeIn>

          {/* Andere recepten */}
          <div className="mt-20 pt-10 border-t border-secondary/40">
            <h2 className="font-serif text-2xl text-foreground mb-6">Meer recepten</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {others.map((r) => (
                <Link
                  key={r.id}
                  to={`/recepten/${r.slug}`}
                  className="bg-white rounded-2xl overflow-hidden border border-secondary/30 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
                >
                  <div className="h-40 overflow-hidden">
                    <img src={r.image} alt={r.title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg text-foreground mb-2">{r.title}</h3>
                    <span className="inline-flex items-center text-primary text-sm font-medium">
                      Bekijk recept<span className="sr-only"> voor {r.title}</span> <ChefHat className="w-4 h-4 ml-2" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <Link
                to="/recepten"
                className="inline-flex items-center justify-center h-11 px-6 rounded-md bg-primary text-primary-foreground text-sm font-medium transition-colors hover:bg-primary/90"
              >
                Alle recepten
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ReceptDetail;
