# Project Architecture

- Store uploaded page photography as optimized WebP files behind Lovable Assets pointers, because this keeps binary media out of the repository while preserving stable imports.
- Groene accenten gebruiken uitsluitend `--olive` in `src/styles.css` (alleen `#C9C07D`, hue 53), omdat de gebruiker geen afgeleide tinten wil; lichte groene vlakken zijn dezelfde kleur met een laag dekking (`bg-olive/15`) en tekst blijft de inkkleur, want #C9C07D op creme haalt maar 1,8:1.