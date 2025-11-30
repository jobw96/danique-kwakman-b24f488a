import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '@/components/Section';
import { FadeIn } from '@/components/Animations';
import { ChefHat, X, Lightbulb } from 'lucide-react';
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
  <motion.div 
    className="fixed inset-0 bg-foreground/60 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4" 
    onClick={onClose}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
  >
    <motion.div 
      className="bg-white rounded-2xl sm:rounded-3xl w-full max-w-xl max-h-[95vh] sm:max-h-[85vh] overflow-hidden shadow-2xl flex flex-col" 
      onClick={(e) => e.stopPropagation()}
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.95, opacity: 0, y: 10 }}
      transition={{ type: "spring", stiffness: 350, damping: 30 }}
    >
      {/* Header with image */}
      <div className="relative h-40 sm:h-48 flex-shrink-0">
        <motion.img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <motion.button 
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <X size={18} className="text-foreground" />
        </motion.button>
        <motion.h2 
          className="absolute bottom-3 left-4 right-4 font-serif text-xl sm:text-2xl text-white drop-shadow-lg"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {recipe.title}
        </motion.h2>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <motion.p 
          className="text-muted-foreground text-sm leading-relaxed mb-5"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          {recipe.intro}
        </motion.p>
        
        {/* Two column layout on larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Ingredients */}
          <motion.div 
            className="bg-[#FDF8F3] rounded-xl p-4"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-serif text-base sm:text-lg text-foreground mb-3 flex items-center gap-2">
              Ingrediënten
              {recipe.ingredientsNote && <span className="text-xs font-normal text-muted-foreground">({recipe.ingredientsNote})</span>}
            </h3>
            <ul className="space-y-1.5">
              {recipe.ingredients.map((item, i) => (
                <motion.li 
                  key={i} 
                  className="flex items-start gap-2 text-muted-foreground text-sm"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.25 + i * 0.03 }}
                >
                  <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Preparation */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            <h3 className="font-serif text-base sm:text-lg text-foreground mb-3">Bereiding</h3>
            <ol className="space-y-2">
              {recipe.steps.map((step, i) => (
                <motion.li 
                  key={i} 
                  className="flex items-start gap-2 text-muted-foreground text-sm"
                  initial={{ x: 10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                >
                  <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium text-primary flex-shrink-0 mt-0.5">{i + 1}</span>
                  <span className="leading-relaxed">{step}</span>
                </motion.li>
              ))}
            </ol>
          </motion.div>
        </div>

        {/* Tip */}
        {recipe.tip && (
          <motion.div 
            className="bg-primary/5 border border-primary/20 rounded-xl p-3 mt-4 flex items-start gap-2"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Lightbulb size={16} className="text-primary flex-shrink-0 mt-0.5" />
            <p className="text-muted-foreground text-xs sm:text-sm"><span className="font-medium text-foreground">Tip:</span> {recipe.tip}</p>
          </motion.div>
        )}

        {/* After note */}
        {recipe.afterNote && (
          <motion.p 
            className="text-muted-foreground text-sm italic mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            {recipe.afterNote}
          </motion.p>
        )}
      </div>
    </motion.div>
  </motion.div>
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
      <AnimatePresence>
        {selectedRecipe && (
          <RecipeDetail recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Recepten;
