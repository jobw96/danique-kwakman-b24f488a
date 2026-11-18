// Recipe-schema voor recepten die in een blog staan, per blog-slug.
// Alleen gegevens uit de aangeleverde tekst; geen voedings- of gezondheidsclaims.
export const BLOG_RECIPES: Record<string, Record<string, unknown>> = {
  "zoete-cravings-luteale-fase": {
    name: "Gezonde chocolade smoothie",
    prepTime: "PT5M",
    totalTime: "PT5M",
    recipeYield: "1 portie",
    recipeIngredient: [
      "1 banaan",
      "1 eetlepel cacaopoeder",
      "1 eetlepel amandelpasta",
      "2 eetlepels yoghurt",
      "1 eetlepel lijnzaad (zelfgemalen)",
      "1 theelepel Ceylon kaneel",
      "Optioneel: een halve courgette",
    ],
    recipeInstructions: [
      "Snijd ¾ van de banaan af en doe dit in de blender. Bewaar ¼ voor later.",
      "Doe de cacaopoeder, amandelpasta, lijnzaad, Ceylon kaneel en eventueel de halve courgette in de blender. Voeg yoghurt toe naar gewenste dikte. Mix alles tot een glad geheel.",
      "Schenk de smoothie in een mooi glas.",
      "Snijd de overige ¼ van de banaan in plakjes.",
      "Leg de plakjes banaan op de smoothie en top eventueel af met wat chiazaadjes of cacaonibs.",
      "Je smoothie is nu klaar! Eet hem met een lepel in plaats van hem te drinken.",
    ].map((text) => ({ "@type": "HowToStep", text })),
  },
};
