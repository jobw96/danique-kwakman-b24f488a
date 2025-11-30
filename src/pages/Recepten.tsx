import React, { useState } from 'react';
import { Section } from '@/components/Section';
import { FadeIn } from '@/components/Animations';
import { ChefHat, Clock, Lightbulb } from 'lucide-react';
import granolaImage from '@/assets/recipe-granola.jpg';
import gingerShotsImage from '@/assets/recipe-ginger-shots.jpg';
import eggMuffinsImage from '@/assets/recipe-egg-muffins.jpg';

const SectionTag = ({ text }: { text: string }) => (
  <div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium shadow-sm tracking-wide">{text}</div>
);

interface Recipe {
  id: string;
  title: string;
  intro: string;
  image: string;
  ingredients: string[];
  ingredientsNote?: string;
  steps: string[];
  tip?: string;
  afterNote?: string;
}

const recipes: Recipe[] = [
  {
    id: 'granola',
    title: 'Homemade Chocolade Granola',
    intro: 'Granola en chocola zijn voor mij de perfecte combinatie. Ik maak mijn granola het liefst zelf, omdat de varianten uit de supermarkt vaak onnodige toevoegingen bevatten. Zelfgemaakt is niet alleen voedzamer en gezonder, maar ook echt véél lekkerder.',
    image: granolaImage,
    ingredientsNote: 'voor een grote pot',
    ingredients: [
      '200 g havermout',
      '1 handje pecannoten',
      '100 g walnoten',
      '65 g pompoenpitten',
      '65 g zonnebloempitten',
      '30 g hennepzaad',
      '2 el chiazaad',
      '3 el cacao',
      '3 el kokosolie (gesmolten)',
      '2 el rauwe honing'
    ],
    steps: [
      'Meng alle noten, pitten en zaden op een bakplaat.',
      'Voeg de cacao, honing en gesmolten kokosolie toe en meng alles goed door elkaar.',
      'Bak de granola circa 90 minuten op 100°C en schep tussendoor regelmatig om.'
    ],
    tip: 'Voeg na het afkoelen wat pure chocolade toe voor een extra crunchy chocoladelaagje.'
  },
  {
    id: 'gembershots',
    title: 'Homemade Gembershotjes',
    intro: 'Gember ondersteunt je spijsvertering, helpt bij een opgeblazen buik en geeft je immuunsysteem een boost. Super simpel om te maken en perfect om elke ochtend mee te starten.',
    image: gingerShotsImage,
    ingredients: [
      '2 bio appels',
      '2 citroenen',
      '1 grote stronk gember'
    ],
    steps: [
      'Snijd de appels, citroenen en gember in stukken en blend alles tot een glad mengsel.',
      'Giet de mix door een fijne zeef met een maatbeker of pan eronder.',
      'Druk met een lepel zoveel mogelijk sap eruit. Tip: gebruik een schone theedoek in de zeef en knijp deze uit, zo haal je écht het maximale aan sap eruit.',
      'Schenk het sap in een afgesloten fles en vul aan met water.',
      'Je kunt dit een paar dagen in de koelkast bewaren.'
    ],
    afterNote: 'Neem elke ochtend een shotje voor je ontbijt.'
  },
  {
    id: 'eimuffins',
    title: 'Eimuffins',
    intro: 'Eimuffins zijn echt perfect om te preppen voor drukke dagen of als go-to snack. Je kunt ze makkelijk meenemen als snack of als extra eiwit bron bij je ontbijt of lunch. Maak er gelijk een voorraadje van zodat je altijd een snack bij de hand hebt.',
    image: eggMuffinsImage,
    ingredients: [
      '5 eieren',
      '1 handje spinazie',
      '3 plakjes kipfilet',
      '7 cherrytomaatjes',
      '½ (punt)paprika',
      'Kruiden naar keuze (bijv. peper, paprika, Italiaanse kruiden)'
    ],
    steps: [
      'Verwarm de oven voor op 180°C.',
      'Plaats muffinvormpjes in een bakvorm. Heb je geen vormpjes? Vet de vorm dan goed in met kokosolie of ghee.',
      'Klop de eieren los en voeg je favoriete kruiden toe.',
      'Snijd alle groenten en de kipfilet in kleine stukjes, voeg ze toe aan het eimengsel en meng alles goed.',
      'Verdeel het mengsel over de vormpjes.',
      'Bak de eimuffins in 15 minuten goudgeel en gaar.'
    ],
    afterNote: 'Je kunt ze meerdere dagen in de koelkast bewaren of invriezen dus maak vooral een voorraadje.'
  }
];

const RecipeCard = ({ recipe, onClick }: { recipe: Recipe; onClick: () => void }) => (
  <FadeIn className="h-full">
    <div 
      onClick={onClick}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-secondary/30 h-full flex flex-col cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-primary/30"
    >
      <div className="h-56 overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-serif text-xl text-foreground mb-3">{recipe.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 flex-grow">{recipe.intro}</p>
        <div className="flex items-center text-primary font-medium mt-4 text-sm">
          Bekijk recept <ChefHat className="w-4 h-4 ml-2" />
        </div>
      </div>
    </div>
  </FadeIn>
);

const RecipeDetail = ({ recipe, onClose }: { recipe: Recipe; onClose: () => void }) => (
  <div className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
    <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in" onClick={(e) => e.stopPropagation()}>
      <div className="h-64 overflow-hidden rounded-t-3xl">
        <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-8">
        <h2 className="font-serif text-3xl text-foreground mb-4">{recipe.title}</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">{recipe.intro}</p>
        
        <div className="mb-8">
          <h3 className="font-serif text-xl text-foreground mb-4 flex items-center gap-2">
            <span>Ingrediënten</span>
            {recipe.ingredientsNote && <span className="text-sm font-normal text-muted-foreground">({recipe.ingredientsNote})</span>}
          </h3>
          <ul className="space-y-2">
            {recipe.ingredients.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="font-serif text-xl text-foreground mb-4">Bereiding</h3>
          <ol className="space-y-3">
            {recipe.steps.map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground">
                <span className="w-6 h-6 rounded-full bg-[#FDF8F3] flex items-center justify-center text-sm font-medium text-foreground flex-shrink-0 mt-0.5">{i + 1}</span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {recipe.tip && (
          <div className="bg-[#FDF8F3] rounded-xl p-4 mb-6 flex items-start gap-3">
            <Lightbulb size={18} className="text-primary flex-shrink-0 mt-0.5" />
            <p className="text-muted-foreground text-sm"><span className="font-medium text-foreground">Tip:</span> {recipe.tip}</p>
          </div>
        )}

        {recipe.afterNote && (
          <p className="text-muted-foreground italic">{recipe.afterNote}</p>
        )}

        <button 
          onClick={onClose}
          className="mt-8 w-full bg-primary text-primary-foreground py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors"
        >
          Sluiten
        </button>
      </div>
    </div>
  </div>
);

const Recepten = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  return (
    <div className="min-h-screen">
      <Section className="pt-32 md:pt-40 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
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

          {/* Recipe Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {recipes.map((recipe, index) => (
              <RecipeCard 
                key={recipe.id} 
                recipe={recipe} 
                onClick={() => setSelectedRecipe(recipe)} 
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Recipe Detail Modal */}
      {selectedRecipe && (
        <RecipeDetail recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
      )}
    </div>
  );
};

export default Recepten;
