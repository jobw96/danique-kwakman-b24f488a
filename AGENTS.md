# Project Architecture

- Keep traject total prices and promotion deadlines in shared browser-safe data reused by price displays and service schema, because all website price references must stay consistent.
- Derive the promotion countdown from shared price data, ending after the full final Dutch calendar day; keep the mobile menu outside the translated header wrapper so viewport overlays remain correctly positioned.

- Store uploaded page photography as optimized WebP files behind Lovable Assets pointers, because this keeps binary media out of the repository while preserving stable imports.
- Keep optional photo-specific alt text in recipe data and reuse it in list, detail and related recipes, because each view must describe the same photograph consistently.
- Keep recipe search metadata and schema construction in a browser-safe SEO helper separate from recipe content; this preserves supplied wording and prevents invented servings, times or nutrition facts.
- Dienstpagina's (1:1 hormoon- en bloedsuikertraject) gebruiken het blauw van de site als accent — `--primary-deep` voor kleine labeltjes en de lead, `bg-primary-dark` met witte tekst voor de volle band, `bg-secondary/20` voor de zachte FAQ-band en standaard blauwe knoppen met een witte knop op de band — omdat de gebruiker de bloedsuikerpagina als referentie noemde; groen komt alleen voor als `--olive` zelf (`#C9C07D`, hue 53), zonder afgeleide tinten.