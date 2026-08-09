import granolaImage from '@/assets/recipe-granola.webp';
import gingerShotsImage from '@/assets/recipe-ginger-shots.webp';
import eggMuffinsImage from '@/assets/recipe-egg-muffins.webp';

export interface Recipe {
  id: string;
  slug: string;
  title: string;
  intro: string;
  image: string;
  ingredients: string[];
  ingredientsNote?: string;
  steps: string[];
  tip?: string;
  afterNote?: string;
}

export const recipes: Recipe[] = [
  {
    id: 'granola',
    slug: 'homemade-chocolade-granola',
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
    slug: 'homemade-gembershotjes',
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
    slug: 'eimuffins',
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

export const getRecipeBySlug = (slug?: string) => recipes.find((r) => r.slug === slug);
