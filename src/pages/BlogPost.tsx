import React from 'react';
import { useParams, Link, Navigate } from '@/lib/router-compat';
import { m } from 'framer-motion';
import { Calendar, ArrowLeft, Share2 } from 'lucide-react';
import { Section } from '@/components/Section';
import { FadeIn } from '@/components/Animations';
import { BLOG_POSTS } from './Blog';
import { useBookingModal } from '@/components/BookingModal';
import bristolStoolChart from '@/assets/bristol-stool-chart.webp';

// ISO publish dates per slug (for Article schema)
export const POST_DATES: Record<string, string> = {
  'darmen-gezond-houden-5-tips': '2026-06-29',
  'wat-je-ontlasting-zegt-over-je-gezondheid': '2026-07-07',
  'hormoonproof-darmvriendelijke-ontbijtjes': '2026-08-09',
  'zoete-cravings-luteale-fase': '2026-09-07',
  'zoete-cravings': '2026-09-14',
};

function KennismakingLink({ children }: { children: React.ReactNode }) {
  const { openModal } = useBookingModal();
  return <button type="button" onClick={openModal} className="text-primary underline font-semibold">{children}</button>;
}


// Blog content for each post
const BLOG_CONTENT: Record<string, {
  content: React.ReactNode;
}> = {
  'zoete-cravings': {
    content: <>
        <p className="lead">
          Het is 9 uur 's avonds. Je hebt de hele dag gewerkt, gezorgd en geregeld. Eindelijk zit je op de bank en dan denk je 1 stukje chocola kan wel! Voor je het weet is de reep op en voel je je schuldig.
        </p>
        <p>Herken je dit?</p>
        <ul>
          <li>Je hebt 's middags al trek in iets zoets, ook al heb je net gegeten.</li>
          <li>Je neemt je voor om er vandaag niet aan toe te geven, en om 9 uur lig je er toch in.</li>
          <li>Na het snoepen voel je je heel even beter en daarna moe of chagrijnig.</li>
          <li>Vlak voor je menstruatie is het nog erger.</li>
          <li>Om 15.00u val je in slaap achter je laptop en zoek je naar een gebrokkelde Sultana in je tas.</li>
        </ul>
        <p>
          Je denkt dan misschien dat je gewoon te weinig discipline hebt. Dat is bijna nooit zo. Een craving is een signaal van je lichaam. Als je begrijpt wat het je vertelt, hoef je er niet meer tegen te vechten en kun je er rustig mee omgaan.
        </p>
        <aside className="not-prose my-8 rounded-md border-l-4 border-primary bg-secondary/20 p-6 text-base leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Kort antwoord:</strong> zoete cravings komen vaak door een bloedsuiker die op en neer gaat, te weinig eten of te weinig eiwitten overdag, slaaptekort, stress, gewoontes en emoties. Bij veel vrouwen komt daar hun cyclus nog bovenop. Eet regelmatig met eiwitten, vezels en gezonde vetten, zorg voor voldoende slaap en rust en verbied jezelf niets. Dat laatste maakt cravings vaak juist sterker.
        </aside>

        <h2>Wat is een craving eigenlijk?</h2>
        <p>
          Een craving is een sterke, specifieke behoefte aan een bepaald soort eten, vaak iets zoets. Het verschilt van gewone honger. Honger bouwt langzaam op en is blij met bijna alles. Een craving komt plotseling en wil precies dat ene ding, het liefst nu.
        </p>

        <h2>Je bloedsuiker gaat op en neer</h2>
        <p>
          Eet je een ontbijt met vooral snelle koolhydraten, zoals een croissant, witbrood met jam of een smoothie? Dan schiet je bloedsuiker snel omhoog. Je lichaam maakt daarna insuline aan om die suiker weer de cellen in te brengen, en je bloedsuiker zakt vaak net zo snel weer terug. Die val voel je als trek in iets zoets, soms samen met trillerigheid, een dipje of een kort lontje. Je eet dan weer iets zoets, je bloedsuiker stijgt weer en zo draai je rond.
        </p>
        <p>
          Veel vrouwen met hormonale klachten herkennen dit patroon, omdat een schommelende bloedsuiker en je hormonen elkaar beïnvloeden. Meer rust in je bloedsuiker geeft dus ook meer rust in je cravings.
        </p>

        <h2>Je eet overdag te weinig</h2>
        <p>
          Een klein ontbijt, een salade als lunch en tussendoor een kop koffie. Dat klinkt gezond, maar je lichaam bent een volwassen vrouw die ook mag eten als een volwassen vrouw. Als je overdag te weinig eet dan wil je lichaam dat ‘s avonds in halen.
        </p>
        <p>
          Ook te weinig eiwitten speelt mee. Eiwitten zorgen ervoor dat je langer verzadigd blijft. Eet je ze niet of te weinig, dan heb je sneller weer trek. Dit komt omdat je bleodsuiker spiegel minder stabiel blijft met onvoldoende eiwitten.
        </p>

        <h2>Je slaapt slecht</h2>
        <p>
          Na een korte nacht heb je meer honger en vooral meer zin in zoet en vet. Dat merk je waarschijnlijk zelf ook. Na een nacht van slecht slapen grijp je sneller naar koffie en een koekje. Je lichaam zoekt dan snelle energie om de dag door te komen. Slaaptekort maakt je bloedsuiker bovendien minder stabiel, waardoor de cravings nog sterker worden.
        </p>

        <h2>Je hebt stress</h2>
        <p>
          Als je veel aan je hoofd hebt, zoek je troost. Zoet werkt dan even als een beloning en maakt je spanning dat moment lichter. Ook je stresshormoon cortisol speelt daarbij een rol. Het probleem is dat die rust maar kort duurt. Daarna heb je weer stress en weer trek.
        </p>
        <p>
          Als je dit herkent, helpt het om niet alleen naar je eten te kijken, maar ook naar wat er in je dag aan spanning zit.
        </p>

        <h2>Je cyclus speelt een grote rol</h2>
        <p>
          In de week voor je menstruatie, de luteale fase, hebben veel vrouwen meer trek en meer zin in zoet. Je lichaam heeft in die fase meer energie nodig en je bloedsuiker en stemming zijn gevoeliger. Het is dus niet raar dat je dan meer zin hebt in chocola. Wil je hier meer over weten en wil je gelijk een gezond snackje maken? Lees dan mijn blog <Link to="/blog/zoete-cravings-luteale-fase">Zoete cravings in je luteale fase: tips + chocolade smoothie</Link>.
        </p>

        <h2>Is het niet gewoon een tekort aan magnesium?</h2>
        <p>
          Dit hoor je vaak, vooral bij trek in chocola. Pure chocolade bevat wel magnesium en voeding met magnesium is zinvol voor veel mensen. Kies dus ook regelmatig voor magnesiumrijke voeding, zoals:
        </p>
        <ul>
          <li>Pure chocolade (70% of meer)</li>
          <li>Noten en pitten, zoals amandelen, cashewnoten en pompoenpitten</li>
          <li>Groene bladgroenten, zoals spinazie</li>
          <li>Peulvruchten, zoals kikkererwten en linzen</li>
          <li>Havermout en andere volkoren producten</li>
          <li>Avocado en banaan</li>
        </ul>

        <h2>Wat kun je doen bij zoete cravings?</h2>
        <p><strong>Eet regelmatig en genoeg.</strong> Begin je dag met een ontbijt met eiwitten en zorg dat je lunch echt voedt. Dat verandert vaak meer dan suiker schrappen.</p>
        <p><strong>Combineer koolhydraten met eiwitten, vezels en vetten.</strong> Bijvoorbeeld fruit met yoghurt en noten, of een boterham met pindakaas. Je bloedsuiker stijgt dan rustiger en je houdt het langer vol.</p>
        <p><strong>Zorg voor slaap en rust.</strong> Dat heeft meer invloed op je trek dan je denkt.</p>
        <p><strong>Ontdek je trigger.</strong> Houd een week bij wanneer je trek hebt en wat er op dat moment speelt. Is het honger, vermoeidheid, stress of je cyclus? Als je weet waar het vandaan komt, weet je ook wat je nodig hebt.</p>
        <p>
          Heb je zin in iets zoets? Dan heb ik een <Link to="/e-book-recepten-snacks">e-book met recepten voor zoete cravings</Link> gemaakt, met voedzame snacks die je lichaam ondersteunen. Bekijk ook mijn <Link to="/blog/zoete-cravings-luteale-fase">gezonde chocolade smoothie</Link>.
        </p>

        <h2>Wanneer is het tijd om hulp te zoeken?</h2>
        <p>
          Heb je elke dag last van cravings, lukt het je niet om er zelf grip op te krijgen of voel je je er moe, opgeblazen of onrustig door? Dan is het goed om samen te kijken naar wat er bij jou speelt. Je hoeft dit niet alleen uit te zoeken.
        </p>
        <p>
          Bij mijn cliënten zie ik vaak dat cravings niet los staan van de rest: een bloedsuiker die op en neer gaat, een cyclus die uit balans is, een darm die niet lekker werkt, te weinig slaap of te veel stress. Het is meestal een samenspel. Als je dat samen in kaart brengt, worden cravings vanzelf rustiger.
        </p>

        <h2>Wil je begrijpen wat jouw cravings je vertellen?</h2>
        <p>
          Herken je dit en wil je weten wat er bij jou speelt? Dan kijk ik graag met je mee naar je voeding, bloedsuiker, slaap, stress en cyclus. Zo ontdek je waarom jouw lichaam vraagt om zoet en wat het echt nodig heeft.
        </p>
        <p>
          <Link to="/behandelingen">Lees hier meer over mijn trajecten</Link> of <KennismakingLink>plan een vrijblijvende kennismaking in</KennismakingLink>.
        </p>
        <p>
          Succes,<br />
          Liefs Danique
        </p>

        <h2>{"\n"}</h2>
        <ul>
          <li><Link to="/blog/zoete-cravings-luteale-fase"></Link></li>
        </ul>
      </>
  },
  'zoete-cravings-luteale-fase': {
    content: <>
        <p className="lead">
          Zit je in je luteale fase en heb je last van <Link to="/blog/zoete-cravings">zoete cravings</Link>? Het ene moment gaat het prima en het volgende moment sta je met je hoofd in de koekjestrommel, of ligt er standaard chocola in huis. Dan ben je echt niet de enige, en het zegt niets over je wilskracht.
        </p>

        <h2>Waarom heb je zoveel zin in zoet vóór je menstruatie?</h2>
        <p>
          Je luteale fase is de periode tussen je eisprong en je menstruatie. Na je eisprong stijgt progesteron en daalt oestrogeen. Je lichaam heeft in die weken meer brandstof nodig.
        </p>
        <p>
          Ook je bloedsuiker reageert in deze fase vaak gevoeliger. Daardoor heb je de dagen voor je menstruatie vaak meer trek, grijp je sneller naar iets zoets en gaat je energie meer op en neer.
        </p>

        <h2>Zoete cravings in je luteale fase zijn een signaal van je lijf</h2>
        <p>
          Je lichaam vraagt om energie. Het verlangen naar chocola is dus geen karakterzwakte. Waar het om gaat, is hoe je op dat signaal reageert.
        </p>
        <p>
          Als je die zin in zoet negeert of probeert te onderdrukken, bouwt dat vaak alleen maar op. En een zak koekjes geeft je even een piek, waarna je weer inzakt en nog vermoeider op de bank ligt.
        </p>

        <h2>Wat kun je eten bij zoete cravings in je luteale fase?</h2>
        <p>
          Het helpt om iets zoets te combineren met eiwit, gezonde vetten en vezels, zodat je langer verzadigd blijft en je energie stabieler blijft. Eet daarnaast genoeg en sla je ontbijt niet over, want voor veel vrouwen is lang niet eten een stressprikkel, wat kan zorgen voor meer cravings later op de dag. Schrap ook geen koolhydraten: havermout, aardappelen en fruit mogen er gewoon in.
        </p>

        <h2>Mag je chocola eten in je luteale fase?</h2>
        <p>
          Je hoeft jezelf niks te ontzeggen! Kies bij voorkeur cacao of pure chocola, omdat dit rijk is aan magnesium en dat kun je in deze fase goed gebruiken.
        </p>
        <p>
          Daarom maakte ik deze smoothie. Hij smaakt als een toetje, is in 5 minuten klaar en geeft je iets te eten waar je lichaam echt wat aan heeft.
        </p>

        <h2>Gezonde chocolade smoothie</h2>
        <p>Bereidingstijd: 5 minuten | Porties: 1</p>
        <p><strong>Ingrediënten:</strong></p>
        <ul>
          <li>1 banaan</li>
          <li>1 eetlepel cacaopoeder</li>
          <li>1 eetlepel amandelpasta</li>
          <li>2 eetlepels yoghurt</li>
          <li>1 eetlepel lijnzaad (zelfgemalen)</li>
          <li>1 theelepel Ceylon kaneel</li>
          <li>Optioneel: een halve courgette (je proeft er echt niks van!)</li>
        </ul>
        <p><strong>Bereiding:</strong></p>
        <ol>
          <li>Snijd ¾ van de banaan af en doe dit in de blender. Bewaar ¼ voor later.</li>
          <li>Doe de cacaopoeder, amandelpasta, lijnzaad, Ceylon kaneel en eventueel de halve courgette in de blender. Voeg yoghurt toe naar gewenste dikte. Mix alles tot een glad geheel.</li>
          <li>Schenk de smoothie in een mooi glas.</li>
          <li>Snijd de overige ¼ van de banaan in plakjes.</li>
          <li>Leg de plakjes banaan op de smoothie en top eventueel af met wat chiazaadjes of cacaonibs.</li>
          <li>Je smoothie is nu klaar! Eet hem met een lepel in plaats van hem te drinken.</li>
        </ol>
        <p>
          <strong>Tip:</strong> Voor een goede vertering wil je graag goed kauwen op je maaltijden en dus ook op je smoothie. Dit voorkomt een opgeblazen buik. Het liefst gooi je daarom wat toppings over je smoothie: extra fruit, wat nootjes of cacaonibs.
        </p>

        <p>
          Je hoeft jezelf niks te ontzeggen wanneer je zoete cravings ervaart tijdens je menstruatie. Om je daarbij te helpen heb ik iets voor je gemaakt:
        </p>
        <ul>
          <li>Recepten die je energie geven, in plaats van dat je na een zak koekjes nog vermoeider op de bank ligt</li>
          <li>Not-guilty recepten, zonder bergen suiker, darmvriendelijk en hormoonproof</li>
          <li>Snacks die je gemakkelijk en snel in elkaar draait</li>
        </ul>
        <p>
          In mijn gratis e-book '5 recepten om je cravings te stillen tijdens je menstruatie' ontdek je hoe je je zoete cravings vervult met voedzame snacks die je lichaam echt ondersteunen.
        </p>
        <p className="not-prose">
          <Link to="/e-book-recepten-snacks" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm text-primary-foreground no-underline hover:bg-primary/90 transition-colors">
            Klik hier om de recepten gratis te downloaden
          </Link>
        </p>

        <h2>Lees ook</h2>
        <ul>
          <li><Link to="/blog/zoete-cravings">Zoete cravings: waarom heb je steeds trek in suiker en wat kun je eraan doen?</Link></li>
        </ul>
      </>
  },
  'hormoonproof-darmvriendelijke-ontbijtjes': {
    content: <>
        <p className="lead">
          Heb je last van vermoeidheid, een opgeblazen buik, hormonale klachten of energiedips gedurende de dag?
        </p>

        <p>Voeding is een echt medicijn als je het op de juiste manier inzet!</p>

        <p>
          Zodra je de stap hebt gezet om te gaan werken aan je hormonale gezondheid en je darmgezondheid kan dat best wel overwhelming zijn.
        </p>

        <p>
          Ik weet dat zelf nog zo goed van toen ik net begon! Daarom ga ik die overwhelm wegnemen.
        </p>

        <p>
          Wat moet je nu wel eten? Wat juist niet? En waar begin je als je meer energie wilt, je hormonen wilt ondersteunen en tegelijkertijd je darmgezondheid wilt verbeteren?
        </p>

        <p>Het hoeft niet ingewikkeld te zijn.</p>

        <p>
          In mijn praktijk start ik vaak met het optimaliseren van het ontbijt. Een voedzaam ontbijt helpt namelijk om je bloedsuikerspiegel stabiel te houden, ondersteunt de aanmaak en balans van hormonen en geeft je lichaam de voedingsstoffen die het nodig heeft om energie aan te maken.
        </p>

        <p>
          In deze blog deel ik 5 van mijn favoriete hormoonproof ontbijtjes. Ze zijn voedzaam, makkelijk te maken en ondersteunen zowel je hormonen als je darmen.
        </p>

        <h2>Waarom een hormoonproof ontbijt zo belangrijk is</h2>
        <p>Je eerste maaltijd van de dag zet de toon voor de rest van je dag.</p>
        <p>
          Als je ontbijt voornamelijk bestaat uit snelle suikers of weinig voedingsstoffen bevat, ontstaat er vaak een piek in je bloedsuikerspiegel gevolgd door een energiedip.
        </p>
        <p>
          Dit kan zorgen voor meer trek, cravings, vermoeidheid en op de lange termijn zelfs bijdragen aan hormonale disbalansen.
        </p>
        <p>Een hormoonproof ontbijt bevat daarom altijd een combinatie van:</p>
        <ul>
          <li>Eiwitten</li>
          <li>Gezonde vetten</li>
          <li>Vezels</li>
          <li>Langzame koolhydraten</li>
        </ul>
        <p>
          Deze combinatie zorgt voor een stabielere energie, een verzadigd gevoel en ondersteuning van je hormonen en darmgezondheid.
        </p>

        <h2>1. Mango chiapudding</h2>
        <h3>Ingrediënten (1 p)</h3>
        <ul>
          <li>200 ml (amandel) melk</li>
          <li>3 eetlepels chiazaad</li>
          <li>2 eetlepels Griekse yoghurt van Dodoni</li>
          <li>Een handje mango</li>
          <li>Een handje granola</li>
          <li>1 banaan</li>
        </ul>
        <h3>Bereiding</h3>
        <ol>
          <li>Voeg de chiazaad toe aan een afsluitbaar bakje</li>
          <li>Voeg vervolgens de amandelmelk en Griekse yoghurt toe en roer het geheel goed door</li>
          <li>Zet het bakje in de koelkast en laat dit minimaal 15 minuten staan. Heb je in de ochtend weinig tijd? Dan kun je dit ook de avond van tevoren alvast voorbereiden</li>
          <li>Snijd de mango en pureer deze tot een gladde mousse</li>
          <li>Haal de chiapudding uit de koelkast en verdeel de mango, granola en banaan eroverheen</li>
        </ol>
        <p>
          <strong>Waarom dit ontbijt hormoonproof is</strong><br />
          Chiazaad bevat vezels en omega 3-vetzuren die bijdragen aan een gezonde darmen en een stabielere bloedsuikerspiegel. In combinatie met yoghurt en fruit ontstaat een voedzaam ontbijt dat zorgt voor een lange verzadiging.
        </p>

        <h2>2. Shakshuka</h2>
        <h3>Ingrediënten (2 personen)</h3>
        <ul>
          <li>4 eitjes</li>
          <li>1 courgette</li>
          <li>2 punt paprika's</li>
          <li>Tomatenblokjes uit blik</li>
          <li>3 tomaten</li>
          <li>Feta hoeveelheid naar smaak</li>
          <li>1 ui</li>
          <li>Een paar teentjes knoflook</li>
          <li>1 blikje tomaten puree</li>
          <li>Kruiden naar keuze</li>
          <li>Zuurdesem brood</li>
        </ul>
        <h3>Bereiding</h3>
        <ol>
          <li>Snij alle groente, de ui en de knoflook</li>
          <li>Fruit de ui en knoflook en voeg vervolgens de tomaten puree toe</li>
          <li>Bak de courgette</li>
          <li>Voeg de overige groente toe en bak dit nog eventjes</li>
          <li>Voeg kruiden toe naar keuze</li>
          <li>Als de groente gaar begint te worden, maak je per ei een kuiltje en breek je daarin het eitje</li>
          <li>Plaats een deksel op de pan om de eitjes te laten stollen</li>
          <li>Als de eitjes gestold zijn verdeel je de shakshuka over 2 borden (of 1 portie in een afsluitbaar bakje)</li>
          <li>Verdeel de tonijn en verkruimel je de feta over je bord heen</li>
        </ol>
        <p>
          <strong>Waarom dit ontbijt hormoonproof is</strong><br />
          Eitjes zijn lekker hoog in eiwitten die belangrijk zijn voor de aanmaak van hormonen en neurotransmitters. De grote hoeveelheid groenten ondersteunt daarnaast je darmgezondheid en ontgifting.
        </p>

        <h2>3. Zoete aardappel pannenkoekjes</h2>
        <h3>Ingrediënten (2 personen)</h3>
        <ul>
          <li>250 gram zoete aardappel</li>
          <li>180 gram havermout</li>
          <li>250 ml amandelmelk</li>
          <li>2 eieren</li>
          <li>1 theelepel kaneel</li>
          <li>1 theelepel bakpoeder</li>
          <li>1 eetlepel amandelpasta</li>
        </ul>
        <h3>Bereiding</h3>
        <ol>
          <li>Bak de zoete aardappel in de oven op 180 graden tot deze beetgaar is</li>
          <li>Doe ondertussen de havermout in je blender en mix dit tot het glad gemixt is. (super snelle manier om havermeel te maken)</li>
          <li>Voeg vervolgend de amandelmelk, de eitjes, kaneel, bakpoeder en amandelpasta toe en mix het geheel</li>
          <li>Ondertussen kan je de zoete aardappel uit de oven halen en voeg deze ook toe aan het beslag. Mix het geheel nog even goed glad</li>
          <li>Verwarm een pan met boter of olie en bak de pannenkoekjes goud bruin</li>
          <li>Leg de pannenkoekjes op je bord en voeg je favo toppings toe</li>
        </ol>
        <p>Mijn favoriete toppings zijn:</p>
        <ul>
          <li>Aardbeien</li>
          <li>Griekse yoghurt</li>
          <li>Hennepzaad</li>
          <li>Amandelen</li>
          <li>Amandelpasta</li>
        </ul>
        <p>
          <strong>Waarom dit ontbijt hormoonproof is</strong><br />
          Zoete aardappel bevat langzame koolhydraten die zorgen dat er langzaam energie wordt afgegeven. Dit in combinatie met de eiwitten uit eitjes en Griekse yoghurt en gezonde vetten voorkom je grote schommelingen in je bloedsuiker. Een stabiele bloedsuikerspiegel is de basis van een stabiele hormoon balans.
        </p>

        <h2>4. Baked oats met frambozen</h2>
        <h3>Ingrediënten (1 persoon)</h3>
        <ul>
          <li>1 banaan</li>
          <li>1 ei</li>
          <li>40 gram havermout</li>
          <li>70 ml amandelmelk</li>
          <li>1 theelepel bakpoeder</li>
          <li>Een halve theelepel vanille-extract</li>
          <li>1 theelepel kaneel</li>
          <li>Een handje frambozen</li>
          <li>1 eetlepel notenpasta</li>
        </ul>
        <h3>Bereiding</h3>
        <ol>
          <li>Prak de banaan in een schaaltje die ook in de oven mag</li>
          <li>Breek het ei in het schaaltje</li>
          <li>Voeg de havermout, melk, kaneel, bakpoeder en vanille toe en mix goed door elkaar</li>
          <li>Voeg de frambozen en notenpasta toe</li>
          <li>Bak het geheel ongeveer 20 minuten op 180 graden</li>
          <li>Ik vind het lekker om af te toppen met wat Griekse yoghurt</li>
        </ol>
        <p>
          <strong>Waarom dit ontbijt hormoonproof is</strong><br />
          Havermout bevat oplosbare vezels die je darmbacteriën voeden en bijdragen aan een stabielere bloedsuikerspiegel. De combinatie van vezels uit onder andere de frambozen, eiwitten en gezonde vetten helpt om je energie langer vast te houden.
        </p>

        <h2>5. Carrot Cake Overnight Oats</h2>
        <h3>Ingrediënten (1 persoon)</h3>
        <ul>
          <li>1 à 2 wortels</li>
          <li>40 gram havermout</li>
          <li>250 ml amandelmelk</li>
          <li>1 eetlepel chiazaad</li>
          <li>1 eetlepel lijnzaad</li>
          <li>Een paar eetlepels Griekse yoghurt</li>
          <li>1 theelepel Ceylon kaneel</li>
          <li>Optioneel: 1 schepje eiwitpoeder zonder troep</li>
          <li>Een handje walnoten</li>
        </ul>
        <h3>Bereiding</h3>
        <ol>
          <li>Rasp de wortels en houd een klein beetje apart voor de topping.</li>
          <li>Voeg de geraspte wortel, havermout, amandelmelk, chiazaad, gemalen lijnzaad, kaneel en eventueel het eiwitpoeder toe aan een afsluitbaar bakje.</li>
          <li>Voeg een paar eetlepels Griekse yoghurt toe en roer alles goed door.</li>
          <li>Zet het bakje een nacht in de koelkast.</li>
          <li>Top de volgende ochtend af met extra Griekse yoghurt, de achtergehouden geraspte wortel en een handje walnoten.</li>
        </ol>
        <p>
          <strong>Waarom dit ontbijt hormoonproof is</strong><br />
          Dit ontbijt bevat mega vezels uit havermout, chiazaad, lijnzaad én rauwe wortel. Vezels ondersteunen een gezonde darmflora en helpen je lichaam bij het afvoeren van overtollige hormonen via de ontlasting.
        </p>
        <p>
          Rauwe wortel bevat daarnaast unieke vezels die zich kunnen binden aan overtollig oestrogeen in de darm. Een teveel aan oestrogeen wordt regelmatig in verband gebracht met klachten zoals PMS, gevoelige borsten en hormonale migraine.
        </p>
        <p>
          De walnoten leveren gezonde omega 3-vetzuren die bijdragen aan gezonde hersenen en een gezonde ontstekingsbalans. Dankzij de combinatie van eiwitten, gezonde vetten, vezels en langzame koolhydraten geeft dit ontbijt langdurige energie én een verzadigd gevoel.
        </p>

        <h3>Bekijk hoe ik dit recept maak</h3>
        <p>
          Bekijk de video waarin ik stap voor stap laat zien hoe je deze Carrot Cake Overnight Oats maakt:{' '}
          <a href="https://www.instagram.com/p/DZkBhZFspl5/" target="_blank" rel="noopener noreferrer">
            bekijk de video op Instagram
          </a>.
        </p>

        <h2>Gezond eten hoeft niet ingewikkeld te zijn</h2>
        <p>Om gezond te eten hoef je niet elke dag opnieuw het wiel uit te vinden.</p>
        <p>Ik adviseer mijn klanten altijd om 3 favo ontbijtjes te kiezen die je lekker afwisselt.</p>
        <p>
          Ontbijtjes die je echt heel lekker vindt, die goed voelen voor jouw lichaam en die passen binnen jouw routine. Wissel deze af gedurende de week.
        </p>
        <p>
          Zo creëer je rust, maak je gezonde keuzes makkelijker en bouw je stap voor stap aan meer energie, een betere darmgezondheid en een sterkere hormoonbalans.
        </p>
        <p>
          Kan je wel wat inspiratie gebruiken? <Link to="/recepten">Klik hier voor meer van mijn recepten.</Link> Of bestel{' '}
          <Link to="/webshop">het e-book met 50+ hormoonproof recepten</Link> voor een compleet weekmenu vol cyclusgerichte ontbijtjes.
        </p>


        <h2>Wil je ontdekken welke voeding jouw hormonen en darmen écht ondersteunt?</h2>
        <p>
          Loop je vast in vermoeidheid, darmklachten, hormonale disbalans of heb je het gevoel dat je van alles probeert zonder blijvend resultaat? Dan kijk ik graag met je mee!
        </p>
        <p>
          Samen onderzoeken we waar jouw klachten vandaan komen en wat jouw lichaam nodig heeft om weer in balans te komen.
        </p>
        <p>
          <Link to="/behandelingen">Lees hier meer over mijn trajecten</Link> of <Link to="/kennismaking">plan een vrijblijvende kennismaking in</Link>.
        </p>

        <p>
          Succes,<br />
          Liefs Danique
        </p>
      </>
  },
  'wat-je-ontlasting-zegt-over-je-gezondheid': {
    content: <>
        <p className="lead">
          Laten we eerlijk zijn… de meeste mensen trekken de wc door zonder ook maar één keer te kijken.
        </p>

        <p>Zonde…</p>

        <p>
          Want je ontlasting is misschien wel de meest eerlijke vorm van feedback die je lichaam je iedere dag geeft.
        </p>

        <p>
          Toen ik zelf begon met het herstellen van mijn darmen, had ik gewild dat iemand me dit eerder had verteld. Ik had signalen veel eerder herkend en eerder aan de bel kunnen trekken.
        </p>

        <p>
          Daarom deel ik vandaag de 3 belangrijkste dingen die je moet weten over je ontlasting.
        </p>

        <h2>1. De kleur van je ontlasting zegt meer dan je denkt</h2>
        <p>
          Een gezonde ontlasting is meestal mooi middelbruin. Dat betekent dat gal en je spijsvertering hun werk goed doen.
        </p>
        <p>
          Maar ook andere kleuren kunnen waardevolle informatie geven.
        </p>

        <h3>🤎 Bruin</h3>
        <p>
          Dit is wat je het liefst ziet. Je vertering en galproductie lijken dan meestal goed te verlopen.
        </p>

        <h3>💛 Geel</h3>
        <p>
          Gele ontlasting kan wijzen op een minder goede vetvertering of een snelle doorloop door de darm. Dit zie je bijvoorbeeld bij langdurige stress, een voedingspatroon met veel vet en suiker of wanneer je lever of gal minder optimaal functioneren.
        </p>

        <h3>💚 Groen</h3>
        <p>
          Groene ontlasting ontstaat vaak doordat voeding sneller door de darm gaat of doordat je veel groene bladgroenten hebt gegeten. Soms kan een bacteriële infectie ook een rol spelen.
        </p>

        <h3>🖤 Zwart of heel donker</h3>
        <p>
          Dit kan komen door voeding, ijzersupplementen of bepaalde medicijnen. Maar zwarte ontlasting kan ook wijzen op oud bloed. Neem daarom altijd contact op met je huisarts om dit te bespreken.
        </p>

        <h2>2. Hoe vaak je poept is minstens zo belangrijk</h2>
        <p>
          Veel mensen denken dat drie keer per week normaal is.
        </p>
        <p>
          Vanuit mijn orthomoleculaire visie streven we liever naar minimaal één keer per dag. Je lichaam is namelijk continu bezig met het afvoeren van afvalstoffen. Een deel daarvan verlaat je lichaam via je ontlasting.
        </p>
        <p>
          Wanneer ontlasting te lang blijft zitten, kunnen afvalstoffen opnieuw worden opgenomen. Dat kan bijdragen aan klachten zoals:
        </p>
        <ul>
          <li>een opgeblazen gevoel</li>
          <li>vermoeidheid</li>
          <li>hormonale klachten</li>
          <li>huidproblemen</li>
          <li>hoofdpijn</li>
        </ul>
        <p>
          Poepen is dus letterlijk een belangrijk onderdeel van je natuurlijke detoxproces.
        </p>

        <h2>3. De vorm van je ontlasting vertelt hoe het met je darmen gaat</h2>
        <p>
          Niet alleen de kleur en frequentie zijn belangrijk. Ook de vorm geeft veel informatie.
        </p>
        <p>
          De welbekende Bristol Stool Chart zette ik voorheen in toen ik nog werkzaam was als verpleegkundige, maar ook nu zet ik hem dagelijks in bij klanten in mijn praktijk.
        </p>

        <h3>De Bristol Stool Chart</h3>
        <p>
          De Bristol Stool Chart verdeelt ontlasting in zeven verschillende types.
        </p>

        <p><strong>Type 1 – Losse harde keutels</strong><br />
          Vaak een teken van verstopping.
        </p>
        <p><strong>Type 2 – Worstvormig maar bobbelig</strong><br />
          Nog steeds aan de harde kant; vaak te weinig vocht, vezels of beweging.
        </p>
        <p><strong>Type 3 – Worstvormig met scheurtjes</strong><br />
          Vrijwel perfect.
        </p>
        <p><strong>Type 4 – Gladde, zachte 'boomstam'</strong><br />
          Dit is de ideale ontlasting. Goed gevormd, soepel en makkelijk uit te scheiden.
        </p>
        <p><strong>Type 5 – Zachte klontjes</strong><br />
          Kan wijzen op iets te snelle darmpassage.
        </p>
        <p><strong>Type 6 – Brijachtige ontlasting</strong><br />
          Vaak een teken dat voeding te snel door de darm gaat of dat de darm geïrriteerd is.
        </p>
        <p><strong>Type 7 – Waterdun</strong><br />
          Diarree. Hierbij is het belangrijk om te kijken naar mogelijke oorzaken zoals een infectie, voedselintolerantie of darmontsteking.
        </p>

        <p>
          Het doel? <strong>Type 3 of 4.</strong>
        </p>

        <figure className="my-8">
          <img width={1748} height={899}
            src={bristolStoolChart}
            alt="Bristol Stool Chart met de zeven ontlastingstypes"
            className="w-full rounded-xl border border-border/40"
            loading="lazy"
          />
          <figcaption className="text-center text-sm text-muted-foreground mt-2">
            De Bristol Stool Chart
          </figcaption>
        </figure>

        <h2>Let ook op deze signalen</h2>
        <p>
          Naast kleur en vorm zijn er nog andere dingen waar je op mag letten.
        </p>

        <h3>Onverteerde voedselresten</h3>
        <p>
          Zie je regelmatig stukjes groente, noten of andere voeding terug? Dat kan betekenen dat voeding onvoldoende wordt afgebroken. Dit kan samenhangen met een lage maagzuurproductie, een verminderde enzymwerking of te snel eten.
        </p>

        <h3>Slijm</h3>
        <p>
          Een klein beetje slijm kan normaal zijn. Zie je regelmatig veel slijm? Dan kan dit wijzen op irritatie of ontsteking van de darmwand.
        </p>

        <h3>Een extreem sterke geur</h3>
        <p>
          Ontlasting ruikt natuurlijk nooit naar bloementjes. Maar het kan wijzen op een verstoorde darmflora of een minder goede vertering van eiwitten en vetten.
        </p>

        <p>
          <em>Je ontlasting is het eerlijkste feedbacksysteem van je lijf.</em>
        </p>

        <h2>Wil jij ontdekken wat jouw darmen je proberen te vertellen?</h2>
        <p>
          Heb je regelmatig last van een opgeblazen buik, obstipatie, diarree, vermoeidheid, hormonale klachten of wisselende ontlasting? Dan is de kans groot dat je darmen aandacht nodig hebben.
        </p>
        <p>
          In mijn 6 maanden durende darmhersteltraject kijken we niet alleen naar de symptomen, maar vooral naar de oorzaak. Stap voor stap werken we aan het herstellen van je darmgezondheid, zodat je meer energie krijgt, je hormonen beter in balans komen en je lichaam weer kan doen waar het voor gemaakt is.
        </p>

        <p>
          <Link to="/darmtraject">Klik hier om meer te lezen over het 1:1 darmtraject.</Link>
        </p>

        <p>
          Succes,<br />
          Liefs Danique
        </p>
      </>
  },
  'darmen-gezond-houden-5-tips': {
    content: <>
        <p className="lead">
          Je darmen worden niet voor niets je tweede brein genoemd.
        </p>

        <h2>Wist je dat?</h2>
        <ul>
          <li>Je hersenen en je darmen de hele dag signalen naar elkaar sturen en communiceren met elkaar. Dat betekent dat wat er in je darmen gebeurt, invloed kan hebben op je energie, stemming en hoe je je voelt.</li>
          <li>Ongeveer 70% van je immuunsysteem zich in en rondom je darmen bevindt.</li>
          <li>Darmbacteriën een belangrijke rol spelen bij de aanmaak van verschillende neurotransmitters, waaronder serotonine.</li>
        </ul>

        <p>
          Misschien herken je het ook wel dat wanneer je gespannen bent, je dat direct voelt in je buik. Maar het werkt ook andersom. Wanneer je darmgezondheid uit balans is, kan dat invloed hebben op je energie, stemming, concentratie en zelfs je hormonen.
        </p>

        <p>
          Je darmen doen dus veel meer dan alleen voedsel verteren.
        </p>

        <p>
          Juist daarom besteed ik, maar ook de vrouwen in mijn praktijk, dagelijks heel veel aandacht aan de darmgezondheid.
        </p>

        <p>
          Een goede darmgezondheid begint niet meteen bij het inzetten van supplementen, poedertjes of ingewikkelde protocollen. De grootste winst haal je echt bij het aanpassen van de basis.
        </p>

        <p>
          Dit zijn 5 simpele dingen die je dagelijks kan toepassen om je darmen te ondersteunen:
        </p>

        <h2>1. Kauw heel goed op je eten</h2>
        <p>
          Je vertering begint al in je mond. Als je grote happen doorslikt, moet je maag en darmstelsel extra hard werken om alles goed te kunnen verwerken. Goed kauwen helpt je voeding beter af te breken én kan klachten zoals een opgeblazen gevoel verminderen.
        </p>

        <h2>2. Eet niet achter je laptop of met Netflix aan</h2>
        <p>
          Wanneer je gehaast eet of afgeleid bent tijdens het eten, staat je lichaam vaak in de 'aan-stand'. Je vertering werkt het beste wanneer je lichaam zich veilig en ontspannen voelt.
        </p>
        <p>
          Je hoofd kan geen onderscheid maken tussen je Netflix serie en de realiteit. Denk je dat je je maaltijd goed kan verteren als je hoofd denkt dat jij midden in die spannende Netflix scene staat?
        </p>
        <p>
          Je zenuwstelsel is op dat moment bezig met prikkels verwerken, in plaats van met verteren. Als je lijf niet bewust "door heeft" dat er eten aankomt, worden er ook minder verteringsenzymen aangemaakt.
        </p>
        <p>
          Je maagzuurproductie komt minder goed op gang en je hele verteringsproces start eigenlijk al halfslachtig.
        </p>
        <p>
          Daardoor wordt je eten minder goed afgebroken en opgenomen, wat je bijvoorbeeld kunt merken in een opgeblazen buik of een zwaar gevoel na het eten.
        </p>
        <p>
          Je vertering werkt het beste wanneer je lichaam zich veilig en ontspannen voelt. In een ontspannen staat kan je lichaam enzymen aanmaken, je maagzuur goed laten werken en voedingsstoffen optimaal opnemen.
        </p>
        <p>
          Probeer ook echt een momentje te maken van het eten van je maaltijden.
        </p>

        <h2>3. Haal 3 keer diep adem voordat je begint met eten</h2>
        <p>
          Dit klinkt misschien een beetje suf, maar dit helpt je om je zenuwstelsel van stressmodus naar rustmodus te schakelen. En juist in die ruststand kan je lichaam optimaal verteren.
        </p>
        <p>
          <strong>Rest and digest!</strong>
        </p>
        <p>
          Ben je op kantoor en vind je dat niet prettig aan tafel waar iedereen bij is? Ga voor je pauze even naar het toilet en neem daar even je rust om een paar keer diep in en uit te ademen.
        </p>
        <p>
          Of lukt dit thuis niet met kinderen aan tafel? Je kunt bijvoorbeeld ook een rondje dankbaarheid doen. Iedereen deelt 1 ding waar ze vandaag dankbaar voor zijn. Op deze manier maken jullie er een ritueel van om even in het moment te zijn en te ontspannen voordat de maaltijd start.
        </p>

        <h2>4. Kies regelmatig voor een warm ontbijt</h2>
        <p>
          Denk aan havermout of een warme scramble. Een warm ontbijt is makkelijker te verteren voor je spijsvertering en zorgt ervoor dat je lijf minder hard hoeft te werken om je maaltijd te verwerken.
        </p>
        <p>
          Kan je wel wat inspiratie gebruiken voor darmvriendelijke ontbijtjes? <Link to="/recepten">Check hier mijn recepten.</Link> In{' '}
          <Link to="/webshop">het e-book met 50+ hormoonproof recepten</Link> vind je bovendien darmvriendelijke maaltijden voor elk moment van de dag.
        </p>


        <h2>5. Beweeg elke dag minimaal 20 minuten</h2>
        <p>
          Beweging stimuleert de natuurlijke beweging van je darmen en helpt je vertering. Een korte wandeling na het eten kan soms al een wereld van verschil maken bij bijvoorbeeld een opgeblazen buik.
        </p>

        <p>
          Je kunt de beste supplementen slikken, maar als je elke maaltijd gehaast achter je bureau eet en niet goed kauwt, krijgt je vertering nog steeds niet de omstandigheden die ze nodig heeft.
        </p>

        <p>
          Merk je dat je toch nog last blijft houden van opgeblazen buiken en darmklachten, ondanks deze tips? Dan is het slim om verder te onderzoeken wat er speelt!
        </p>

        <p>
          In het 1:1 darmtraject is dat precies wat we gaan doen. Met gekwalificeerd lab onderzoek onderzoeken we waar de oorzaak en triggers liggen van jouw maag- en darmklachten.
        </p>

        <p>
          <em>Ps. We doen dit in ongeveer 6 maanden. Het is geen quick fix, maar wel iets waar je jarenlang blij over zal zijn!</em>
        </p>

        <p>
          <Link to="/darmtraject">Lees hier meer over het 1:1 darmtraject.</Link>
        </p>

        <p>
          Succes,<br />
          Liefs Danique
        </p>
      </>
  }
};

const BlogPost: React.FC = () => {
  const {
    slug
  } = useParams<{
    slug: string;
  }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);
  const content = slug ? BLOG_CONTENT[slug] : null;
  if (!post || !content) {
    return <Navigate to="/blog" replace />;
  }

  // Get related posts (excluding current)
  const relatedPosts = BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 2);

  return <div className="min-h-screen">
      {/* Metadata en het Article-schema staan in
          src/routes/_layout/blog/$slug.tsx, zodat ze in de server-response
          staan in plaats van pas na hydratie. */}
      {/* Content */}
      <Section className="pt-8 pb-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <FadeIn>
            <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 text-sm">
              <ArrowLeft className="w-4 h-4" />
              <span>Terug naar blog</span>
            </Link>
          </FadeIn>

          {/* Title */}
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
          </FadeIn>

          {/* Meta */}
          <m.div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm mb-8 pb-8 border-b border-border/50" initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.4,
          delay: 0.2
        }}>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            {post.updated && <span>Laatst bijgewerkt: {post.updated}</span>}
            <button className="flex items-center gap-1.5 hover:text-primary transition-colors ml-auto" onClick={() => navigator.share?.({
            title: post.title,
            url: window.location.href
          })}>
              <Share2 className="w-4 h-4" />
              Delen
            </button>
          </m.div>

          {/* Featured Image Card */}
          <m.div className="rounded-2xl overflow-hidden mb-12 border border-border/30" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }}>
            <div className="relative aspect-[16/9]">
              <img src={post.image} alt={post.imageAlt ?? post.title} className="w-full h-full object-cover" loading={post.imageAlt ? "eager" : "lazy"} fetchPriority={post.imageAlt ? "high" : undefined} decoding="async" />
            </div>
          </m.div>
        </div>
      </Section>

      {/* Article Content */}
      <Section className="py-12 md:py-16">
        <m.article className="max-w-3xl mx-auto prose prose-lg prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-a:text-primary prose-strong:text-foreground" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.3
      }}>
          {content.content}
        </m.article>
      </Section>

      {/* Related Posts */}
      <Section className="bg-muted/30 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-xl md:text-2xl text-foreground mb-6">
              Meer artikelen
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {relatedPosts.map((relatedPost, index) => <m.article key={relatedPost.id} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.1 * index
          }} className="group">
                <Link to={`/blog/${relatedPost.slug}`} className="flex gap-4 items-center">
                  <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <m.img loading="lazy" decoding="async" src={relatedPost.image} alt={relatedPost.title} className="w-full h-full object-cover" whileHover={{
                  scale: 1.05
                }} transition={{
                  duration: 0.6
                }} />
                  </div>
                  <div>
                    <h3 className="font-serif text-base text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    
                  </div>
                </Link>
              </m.article>)}
          </div>
        </div>
      </Section>
    </div>;
};
export default BlogPost;