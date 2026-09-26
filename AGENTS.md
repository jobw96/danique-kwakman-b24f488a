# Project Architecture

- Store uploaded page photography as optimized WebP files behind Lovable Assets pointers, because this keeps binary media out of the repository while preserving stable imports.
- Groene accenten gebruiken de `--olive`-tokens in `src/styles.css` (basis #C9C07D, hue 53), omdat de merkkleur te licht is voor tekst en knoppen en de afgeleide tinten (`-strong`, `-deep`, `-dark`, `-soft`) daar wel leesbaar genoeg voor zijn.