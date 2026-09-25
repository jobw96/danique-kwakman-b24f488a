# Vernieuwing 1:1 Bloedsuikertraject

## Doel
De bestaande pagina ombouwen tot een warmere, beeldrijke en overtuigende trajectpagina. De opbouw krijgt het ritme van de aangeleverde voorbeeldpagina, maar blijft herkenbaar Danique Kwakman: rustig, persoonlijk, compact en in de bestaande crème-blauwe huisstijl.

## Wat ik aanpas
- De opening vernieuwen met een sterke positionering, de belangrijkste belofte, praktische trajectdetails en een duidelijke knop voor de gratis kennismaking.
- De huidige teksten behouden en logisch herschikken in afwisselende tekst-, beeld- en overzichtssecties.
- Waar nodig korte aanvullende teksten schrijven over wat een 14-daagse glucosemeting inzichtelijk maakt, zonder medische garanties of nieuwe onbewezen claims.
- Duidelijker tonen voor wie het traject passend is, welk resultaat de inzichten opleveren, hoe de twee weken verlopen, wat inbegrepen is en wat de investering is.
- Meerdere kennismakingsknoppen op natuurlijke beslismomenten plaatsen; alle knoppen openen het bestaande boekingsvenster.
- Een compacte veelgestelde-vragensectie toevoegen met uitsluitend informatie die al uit het aanbod volgt.

## Foto’s
- Alle vijf aangeleverde foto’s converteren naar geoptimaliseerde WebP-bestanden.
- De portretfoto’s met glucosesensor gebruiken als belangrijkste menselijke beelden.
- De sensorverpakking en twee glucosegrafieken inzetten als inhoudelijke bewijs- en uitlegbeelden.
- Elke foto krijgt een beschrijvende Nederlandse alt-tekst, vaste afmetingen en passende laadinstellingen.
- De bestanden via de bestaande media-opslag van de website toevoegen, zodat de bronbestanden niet onnodig groot in het project komen.

## Vormgeving
- Bestaande lettertypes, kleuren, navigatie, voettekst en boekingsvenster behouden.
- Geen kopie van de voorbeeldsite: wel vergelijkbare afwisseling tussen grote beelden, compacte tekstblokken, stappen en een duidelijke afsluitende investering.
- Minder losse witte kaarten; secties worden ruimtelijker en editorialer, met bescheiden randen en `rounded-md` waar een kader functioneel is.
- Bestaande subtiele animaties gebruiken en rekening houden met verminderde beweging.
- Controleren op mobiel en desktop, inclusief tekstoverloop, beeldkaders en werkende knoppen.

## Zoek- en deelinformatie
- De bestaande paginatitel en beschrijving aanscherpen binnen de afgesproken lengtes.
- Open Graph- en Twitter-beschrijving via de bestaande route-instellingen behouden/verbeteren.
- Geen los sociaal deelbeeld toevoegen: de aangeleverde portretten zijn verticaal en daardoor niet geschikt als 1200×630 deelbeeld zonder aparte uitsnede.

## Technische details
- Hoofdbestand: `src/pages/Bloedsuikertraject.tsx`.
- Route-informatie: `src/routes/_layout/bloedsuikertraject.tsx`.
- Foto’s: WebP-conversie, daarna CDN-verwijzingen in `src/assets/`.
- Alleen als nodig komt er een kleine, lokaal herbruikbare FAQ/open-dicht-sectie; overige globale stijlen blijven onaangetast.
