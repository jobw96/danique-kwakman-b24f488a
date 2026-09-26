# Design tokens

Alle tokens staan in [`src/styles.css`](src/styles.css). Dit document beschrijft
wat daar op dit moment echt in staat, met regelnummers erbij. Verandert er iets
in `styles.css`, werk dit dan mee bij.

De kleuren zijn als losse HSL-componenten gedefinieerd op `:root` (regel 95–139)
en via `@theme inline` (regel 7–39) doorgegeven aan Tailwind als `--color-*`.
Daardoor werken ze zowel als utility (`bg-primary`, `text-muted-foreground`) als
in losse CSS (`hsl(var(--primary))`), en kun je er een dekking bij zetten:
`bg-primary/40` of `hsl(var(--primary) / 0.4)`.

## Kleuren

| Token | HSL | Hex | Rol |
| --- | --- | --- | --- |
| `--background` | `42 56% 97%` | `#FCF9F3` | crèmekleurige paginakleur |
| `--foreground` | `60 4% 11%` | `#1D1D1B` | koppen en donkere tekst |
| `--card` | `0 0% 100%` | `#FFFFFF` | witte kaarten en panelen |
| `--card-foreground` | `60 4% 11%` | `#1D1D1B` | tekst op kaarten |
| `--primary` | `220 27% 69%` | `#9BA9C5` | knoppen en accenten |
| `--primary-dark` | `220 27% 56%` | `#7185AD` | donkerdere blauwe vlakken |
| `--primary-foreground` | `0 0% 100%` | `#FFFFFF` | tekst op primary |
| `--secondary` | `44 38% 76%` | `#D9CDAB` | beige randen en accenten |
| `--secondary-dark` | `44 38% 36%` | `#7F6C39` | beige dat als letter leesbaar is |
| `--secondary-foreground` | `0 0% 100%` | `#FFFFFF` | tekst op secondary |
| `--muted-foreground` | `0 0% 46%` | `#757575` | bodytekst |
| `--border`, `--input` | `44 38% 76%` | `#D9CDAB` | randen en invoervelden |
| `--ring` | `220 27% 69%` | `#9BA9C5` | focusring |
| `--destructive` | `0 84% 60%` | — | foutmeldingen |

De hex-kolom hierboven is de kleur die de browser echt uitrekent uit de
HSL-waarde. **Let op: drie commentaarregels in `styles.css` noemen een net
andere hex** dan wat eruit komt: `#FCF9F2` tegen `#FCF9F3`, `#9CAAC6` tegen
`#9BA9C5` en `#D8CCAB` tegen `#D9CDAB`. Neem je die waarden over in een andere
omgeving, gebruik dan de kolom hierboven; anders wijkt de kleur een stap af.

`--muted`, `--accent`, `--popover` en de reeks `--sidebar-*` herhalen bovenstaande
waarden. De sidebar-tokens komen uit de shadcn-basis en worden op deze site
nergens gebruikt.

### Waarom er een `--secondary-dark` is

Het huisstijlbeige `#D9CDAB` haalt op de crèmekleurige achtergrond **1,5:1**. Als
vlak of als lijn is dat prima, maar als letter is het praktisch onleesbaar.
`--secondary-dark` houdt dezelfde kleurtoon en verzadiging, is alleen donkerder,
en haalt **4,86:1** — boven de 4,5 die WCAG AA voor gewone tekst vraagt.

Gebruik `--secondary` voor randen en vlakken, `--secondary-dark` zodra het een
letter wordt.

### Contrast om rekening mee te houden

Gemeten waarden, zodat je niet hoeft te gokken bij een nieuwe combinatie:

| Combinatie | Contrast | Norm gehaald? |
| --- | --- | --- |
| `foreground` op `background` | 16,1:1 | ja |
| `foreground` op `card` | 16,9:1 | ja |
| `muted-foreground` op `card` | 4,61:1 | ja |
| `muted-foreground` op `background` | **4,38:1** | nee, net onder de 4,5 |
| `secondary-dark` op `background` | 4,86:1 | ja |
| `secondary` op `background` | 1,50:1 | nee, niet als tekst gebruiken |
| wit op `primary-dark` | 3,71:1 | alleen als grote tekst |
| wit op `primary` | 2,33:1 | nee |

Twee dingen die hier nog openstaan:

- **`--muted-foreground` op de crèmekleur haalt 4,38:1.** Dat is de bodytekst op
  vrijwel elke pagina. Naar `0 0% 44%` (`#707070`) brengt het op 4,71:1; het
  verschil is met het blote oog nauwelijks te zien.
- **Witte tekst op `primary-dark` komt niet verder dan 3,71:1.** Grote koppen
  mogen dat (de norm is daar 3:1), maar bodytekst op zo'n blauwe band niet. Rond
  `220 27% 42%` haalt witte tekst 4,5:1.

WCAG rekent tekst als "groot" vanaf 24px, of vanaf 18,66px als hij vet is. Daar
geldt 3:1 in plaats van 4,5:1.

## Typografie

```css
--font-sans:  'Neulis Sans', sans-serif;   /* bodytekst */
--font-serif: 'Aesthet Nova', serif;       /* koppen */
```

Drie `@font-face`-blokken (regel 66–88), alle drie lokale woff2-bestanden uit
`public/fonts/`:

| Bestand | Familie | Gewicht |
| --- | --- | --- |
| `Aesthet-Nova.woff2` | Aesthet Nova | `bold` |
| `Neulis-Sans-Light.woff2` | Neulis Sans | 300 |
| `Neulis-Sans-Medium.woff2` | Neulis Sans | 500 |

Alle drie met `font-display: swap`.

**Aesthet Nova bestaat maar in één snit**, gedeclareerd als `bold`. Koppen
renderen op gewicht 300 zonder dat er een lichte variant is; de browser gebruikt
gewoon dat ene bestand. Er is dus geen gewichtsverloop mogelijk in de kopletter.

**Een basisregel op regel 192 zet `h1` tot en met `h6` automatisch op
`font-serif`.** Wil je een kop in de bodyletter, dan moet `font-sans` er
expliciet op; de klasse weglaten is niet genoeg.

### Schaal

Deze schaal ligt niet als token vast maar wordt door de pagina's consequent
aangehouden. Gemeten op 1440px:

| Element | Grootte / regelafstand |
| --- | --- |
| h1 trajectpagina | 60 / 75px |
| h1 klachtpagina | 48 / 60px |
| h2 | 36 / 40px |
| h3 | 24 / 32px of 20 / 28px |
| bodytekst | 16 / 26px |
| kleine tekst | 14 / 22,75px |
| label in een pill | 12 / 16px |

## Maatvoering

```css
--radius: 0.5rem;                      /* 8px  */
--radius-lg: var(--radius);            /* 8px  */
--radius-md: calc(var(--radius) - 2px);/* 6px  */
--radius-sm: calc(var(--radius) - 4px);/* 4px  */
```

Deze schaal geldt voor knoppen en formulierelementen; `CustomButton` gebruikt
`rounded-md` (6px). Foto's en panelen gebruiken losse waarden buiten de tokens
om: 16px op de categoriepagina's, 24px voor de introfoto en 32px voor de grote
hoekafrondingen op `/klachten`.

`container` (regel 58–64): volle breedte, gecentreerd, 2rem binnenruimte,
afgetopt op 1400px.

## Terugkerende onderdelen

Geen tokens, maar patronen die op meerdere pagina's letterlijk hetzelfde zijn.
Wijk je ervan af, dan valt een pagina uit de toon.

**SectionTag**, het labeltje boven een kop:

```jsx
<div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium tracking-wide">
```

**Knop**, via `CustomButton`: `rounded-md`, `px-4 md:px-6`, `py-3`, `text-sm`,
`font-medium`, met een `ArrowUpRight` van 16px erachter. Gerenderd 44px hoog.

**Vinkje in een lijst**, op een lichte achtergrond:

```jsx
<span className="h-6 w-6 min-w-6 rounded-full bg-[#FDF8F3] text-primary">
  <Check className="h-3.5 w-3.5" />
</span>
```

**Schaduwen zijn overal weggehaald** bij foto's, knoppen, kaarten en panelen.
Alleen zwevende lagen houden ze: het mobiele menu, het desktop-dropdown, de
boekingsmodal, de cookiebanner en de shadcn-overlays. Focusringen zijn geen
schaduw maar een toetsenbordindicator en blijven dus staan.

## Donker thema

Er staat een `.dark`-blok in `styles.css` (regel 141+) met dezelfde tokennamen,
maar het wordt nergens geactiveerd: er is geen themaschakelaar en de klasse
`dark` wordt in de hele broncode niet gezet. In de praktijk draait de site altijd
op het lichte thema.
