import type { Recipe } from '@/data/recipes';
import { breadcrumbs, seoHead, SITE_URL, toAbsoluteUrl } from '@/lib/seo';

interface RecipeSearchDetails {
  title: string;
  description: string;
  category: string;
  yield?: string;
  cookTime?: string;
}

/** Zoekteksten staan los van de letterlijke receptinhoud. Alleen vermelde tijden en porties worden gebruikt. */
export const recipeSearchDetails: Record<string, RecipeSearchDetails> = {
  'homemade-chocolade-granola': {
    title: 'Chocolade granola zelf maken',
    description: 'Maak zelf chocolade granola met havermout, noten, zaden en cacao. Bekijk het recept van Danique Kwakman met alle ingrediënten en de bereiding.',
    category: 'Ontbijt', yield: 'Een grote pot', cookTime: 'PT90M',
  },
  'homemade-gembershotjes': {
    title: 'Gembershotjes zelf maken',
    description: 'Gembershotjes zelf maken met appel, citroen en verse gember. Bekijk het recept van Danique Kwakman en maak een voorraadje voor in de koelkast.',
    category: 'Drankjes',
  },
  'eimuffins': {
    title: 'Eimuffins met groenten en kipfilet',
    description: 'Maak eimuffins met spinazie, kipfilet, tomaatjes en paprika. Bekijk het recept van Danique Kwakman voor een ontbijt of snack om mee te nemen.',
    category: 'Ontbijt en snacks', cookTime: 'PT15M',
  },
  'chocolade-smoothie': {
    title: 'Chocolade smoothie met banaan',
    description: 'Maak een chocolade smoothie met banaan, cacao, amandelpasta en yoghurt. Bekijk alle ingrediënten en de bereiding in het recept van Danique Kwakman.',
    category: 'Smoothies',
  },
  'mango-chiapudding': {
    title: 'Mango chiapudding met yoghurt',
    description: 'Mango chiapudding maken met chiazaad, amandelmelk en Griekse yoghurt. Bekijk het recept van Danique Kwakman voor een ontbijt dat je kunt voorbereiden.',
    category: 'Ontbijt', yield: '1 persoon',
  },
  'shakshuka-feta-tonijn': {
    title: 'Shakshuka met feta en tonijn',
    description: 'Maak shakshuka met eieren, courgette, paprika, feta en tonijn. Bekijk het recept van Danique Kwakman met alle ingrediënten en stappen voor twee personen.',
    category: 'Lunch en avondeten', yield: '2 personen',
  },
  'zoete-aardappel-pannenkoekjes': {
    title: 'Zoete aardappel pannenkoekjes maken',
    description: 'Maak zoete aardappel pannenkoekjes met havermout, amandelmelk en kaneel. Bekijk het recept van Danique Kwakman voor twee personen met favoriete toppings.',
    category: 'Ontbijt', yield: '2 personen',
  },
  'baked-oats-met-frambozen': {
    title: 'Baked oats met frambozen en banaan',
    description: 'Baked oats met frambozen, banaan, havermout en notenpasta maken. Bekijk het recept van Danique Kwakman voor een warm ontbijt uit de oven.',
    category: 'Ontbijt', yield: '1 persoon', cookTime: 'PT20M',
  },
  'eiwitrijke-chocolade-pannenkoeken': {
    title: 'Eiwitrijke chocolade pannenkoeken',
    description: 'Maak eiwitrijke chocolade pannenkoeken met cottage cheese, eieren en havermout. Bekijk de ingrediënten en bereiding in het recept van Danique Kwakman.',
    category: 'Ontbijt', yield: '2 personen',
  },
  'carrot-cake-overnight-oats': {
    title: 'Carrot cake overnight oats maken',
    description: 'Carrot cake overnight oats met wortel, havermout, chiazaad en walnoten. Bekijk het recept van Danique Kwakman en bereid je ontbijt de avond ervoor.',
    category: 'Ontbijt', yield: '1 persoon',
  },
  'ontbijt-bordje': {
    title: 'Ontbijtbordje met ei en avocado',
    description: 'Maak een ontbijtbordje met ei, avocado, zuurdesembrood en cottage cheese. Bekijk alle ingrediënten en de bereiding in het recept van Danique Kwakman.',
    category: 'Ontbijt', yield: '1 persoon',
  },
  'frambozen-chiapudding': {
    title: 'Frambozen chiapudding met yoghurt',
    description: 'Maak frambozen chiapudding met chiazaad, amandelmelk, Griekse yoghurt en granola. Bekijk het recept van Danique Kwakman om je ontbijt voor te bereiden.',
    category: 'Ontbijt', yield: '1 persoon',
  },
  'immuunboost-blokjes': {
    title: 'Immuunboost blokjes met gember maken',
    description: 'Maak immuunboost blokjes met citroen, sinaasappel, gember en kurkuma. Bekijk het recept van Danique Kwakman en bewaar de blokjes in de vriezer.',
    category: 'Drankjes',
  },
  'rode-bieten-sap': {
    title: 'Rode bietensap met appel en citroen',
    description: 'Zelf rode bietensap maken met appel en citroen in de juicer. Bekijk het recept van Danique Kwakman met de ingrediënten en vier stappen voor je sapje.',
    category: 'Drankjes',
  },
  'pepernoten': {
    title: 'Verantwoorde pepernoten met havermeel',
    description: 'Maak verantwoorde pepernoten met havermeel, speculaaskruiden en roomboter. Bekijk alle ingrediënten en de ovenbereiding in het recept van Danique Kwakman.',
    category: 'Snacks',
  },
};

export const recipeStepId = (index: number) => `bereiding-stap-${index + 1}`;

export function recipeSchema(recipe: Recipe) {
  const search = recipeSearchDetails[recipe.slug];
  const url = toAbsoluteUrl(`/recepten/${recipe.slug}`);
  return {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    '@id': `${url}#recept`,
    name: recipe.title,
    description: search?.description ?? recipe.intro,
    image: [toAbsoluteUrl(recipe.image)],
    recipeIngredient: recipe.ingredients,
    recipeInstructions: recipe.steps.map((text, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      text,
      url: `${url}#${recipeStepId(index)}`,
    })),
    author: { '@type': 'Person', name: 'Danique Kwakman', url: `${SITE_URL}/over-mij` },
    publisher: { '@id': `${SITE_URL}/#business` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    inLanguage: 'nl-NL',
    ...(search ? { recipeCategory: search.category } : {}),
    ...(search?.yield ? { recipeYield: search.yield } : {}),
    ...(search?.cookTime ? { cookTime: search.cookTime } : {}),
  };
}

export function recipeHead(recipe: Recipe) {
  const search = recipeSearchDetails[recipe.slug];
  const head = seoHead({
    path: `/recepten/${recipe.slug}`,
    title: search?.title ?? recipe.title,
    description: search?.description ?? recipe.intro,
    ogType: 'article',
    image: toAbsoluteUrl(recipe.image),
    schemas: [recipeSchema(recipe), breadcrumbs([
      { name: 'Recepten', path: '/recepten' },
      { name: recipe.title, path: `/recepten/${recipe.slug}` },
    ])],
  });
  // Receptfoto's zijn geen 1200×630 portretten van Danique: publiceer geen onjuiste afmetingen of alt-tekst.
  return {
    ...head,
    meta: head.meta.filter((tag) => !('property' in tag &&
      ['og:image:width', 'og:image:height', 'og:image:alt'].includes(tag.property ?? ''))).concat([
      { property: 'og:image:alt', content: recipe.imageAlt ?? recipe.title },
    ]),
  };
}

export function recipeCollectionSchema(recipes: Recipe[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${SITE_URL}/recepten#recepten`,
    name: 'Recepten van Danique Kwakman',
    numberOfItems: recipes.length,
    itemListElement: recipes.map((recipe, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: recipe.title,
      url: toAbsoluteUrl(`/recepten/${recipe.slug}`),
    })),
  };
}