import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import ts from 'typescript';
import type { Recipe } from '../../data/recipes';
import { recipeCollectionSchema, recipeSchema, recipeSearchDetails } from '../recipe-seo';
import originalContent from './recipe-content.json';

// Lees de echte recepten zonder browser-assetimports; alleen de foto's worden in deze test vervangen.
const source = readFileSync(new URL('../../data/recipes.ts', import.meta.url), 'utf8')
  .replace(/^import (\w+) from .*;$/gm, 'const $1 = {url: ""};')
  .replace('image: eggMuffinsImage,', 'image: "",');
const compiled = ts.transpile(source, { module: ts.ModuleKind.CommonJS });
const recipeExports: { recipes?: Recipe[] } = {};
new Function('exports', compiled)(recipeExports);
const recipes = recipeExports.recipes ?? [];

describe('Behoud van aangeleverde recepten', () => {
  it('behoudt alle ingrediënten exact voor alle 15 recepten', () => {
    expect(recipes).toHaveLength(15);
    expect(recipes.map(({ slug, ingredients }) => ({ slug, ingredients })))
      .toEqual(originalContent.map(({ slug, ingredients }) => ({ slug, ingredients })));
  });
  it('behoudt alle bereidingsstappen exact voor alle 15 recepten', () => {
    expect(recipes.map(({ slug, steps }) => ({ slug, steps })))
      .toEqual(originalContent.map(({ slug, steps }) => ({ slug, steps })));
  });
});

describe('Receptgegevens voor zoekmachines', () => {
  it('gebruikt de echte ingrediënten en stappen in elk Recipe-schema', () => {
    for (const recipe of recipes) {
      const schema = recipeSchema(recipe);
      expect(schema.recipeIngredient).toEqual(recipe.ingredients);
      expect(schema.recipeInstructions.map((step) => step.text)).toEqual(recipe.steps);
      expect(schema.url).toBe(`https://daniquekwakman.nl/recepten/${recipe.slug}`);
    }
  });
  it('verzint geen voedingswaarden, beoordelingen of totale bereidingstijden', () => {
    for (const recipe of recipes) {
      const schema = recipeSchema(recipe);
      expect(schema).not.toHaveProperty('nutrition');
      expect(schema).not.toHaveProperty('aggregateRating');
      expect(schema).not.toHaveProperty('totalTime');
    }
    expect(recipeSearchDetails.pepernoten).not.toHaveProperty('cookTime');
    expect(recipeSearchDetails['baked-oats-met-frambozen'].cookTime).toBe('PT20M');
  });
  it('neemt alle recepten op in de collectie in de meegegeven volgorde', () => {
    const collection = recipeCollectionSchema([...recipes].reverse());
    expect(collection.numberOfItems).toBe(15);
    expect(collection.itemListElement[0].url).toBe('https://daniquekwakman.nl/recepten/pepernoten');
    expect(collection.itemListElement[14].url).toBe('https://daniquekwakman.nl/recepten/homemade-chocolade-granola');
  });
});