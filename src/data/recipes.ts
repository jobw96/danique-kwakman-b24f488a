import granolaImage from '@/assets/recepten/homemade-granola.webp.asset.json';
import gingerShotsImage from '@/assets/recepten/gembershots.webp.asset.json';
import eggMuffinsImage from '@/assets/recipe-egg-muffins.webp';
import chocoladeSmoothieAsset from '@/assets/recepten/chocolade-smoothie.webp.asset.json';
import mangoChiaAsset from '@/assets/recepten/mango-chia-pudding.webp.asset.json';
import shakshukaAsset from '@/assets/recepten/shakshuka-feta-tonijn.webp.asset.json';
import zoeteAardappelAsset from '@/assets/recepten/zoete-aardappel-pannenkoeken.webp.asset.json';
import bakedOatsAsset from '@/assets/recepten/bakes-oats-frambozen.webp.asset.json';
import eiwitrijkePannenkoekenAsset from '@/assets/recepten/eiwitrijke-pannenkoekjes.webp.asset.json';
import carrotCakeAsset from '@/assets/recepten/carrotcake-overnight-oats.webp.asset.json';
import ontbijtbordjeAsset from '@/assets/recepten/ontbijtbordje.webp.asset.json';
import frambozenChiaAsset from '@/assets/recepten/framboze-chiapudding.webp.asset.json';

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
  /** Extra alinea's onder de bereiding, exact zoals in het recept. */
  notes?: string[];
  videoUrl?: string;
  videoText?: string;
}

export const recipes: Recipe[] = [
  {
    id: 'granola',
    slug: 'homemade-chocolade-granola',
    title: 'Homemade Chocolade Granola',
    intro: 'Granola en chocola zijn voor mij de perfecte combinatie. Ik maak mijn granola het liefst zelf, omdat de varianten uit de supermarkt vaak onnodige toevoegingen bevatten. Zelfgemaakt is niet alleen voedzamer en gezonder, maar ook echt véél lekkerder.',
    image: granolaImage.url,
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
    image: gingerShotsImage.url,
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
  },
  {
    id: 'chocolade-smoothie',
    slug: 'chocolade-smoothie',
    title: 'Chocolade smoothie',
    intro: 'Op zoek naar een zoete snack voor je luteale fase die je hormonen ondersteunt én helpt tegen cravings?\n\nDeze chocolade smoothie is binnen 5 minuten klaar, zit vol voedzame ingrediënten en is een heerlijke hormoonproof snack voor de luteale fase.',
    image: chocoladeSmoothieAsset.url,
    ingredients: [
      '1 banaan',
      '1 eetlepel cacao poeder',
      '1 eetlepel amandelpasta',
      'Yoghurt na smaak ( Raw Milk Company)',
      '1 eetlepel lijnzaad ( zelfgemalen)',
      '1 theelepel ceylon kaneel',
      'Optioneel : halve courgette ( proef je echt niks van!)'
    ],
    steps: [
      'Snijd ¾ van de banaan af en doe het ¾ deel in de blender. Bewaar ¼ voor later.',
      'Doe de cacao poeder, amandelpasta, lijnzaad, Ceylon kaneel, de halve courgette in een blender. Voeg yoghurt toe naar smaak van dikte. Mix alles tot een glad geheel.',
      'Schenk de smoothie in een mooi glas.',
      'Snijd de overige ¼ van de banaan in plakjes.',
      'Leg de plakjes banaan op de smoothie en top eventueel nog af met wat chiazaadjes of cacaonips.',
      'Eet de smoothie met een lepel om je spijsvertering te helpen.'
    ],
    tip: 'Voor een goede vertering wil je graag goed kauwen op je maaltijden en zo dus ook op je smoothie. Daarom wil je je smoothie eten met een lepel, dit stimuleert je om te gaan kauwen in plaats van de smoothie meteen op te drinken. Je hebt je lijf op deze manier om een opgeblazen buik te voorkomen.',
    notes: [
      'Het liefst gooi je nog wat toppings over je smoothie heen om het kauwen nog meer te stimuleren. Dit kan nog wat extra fruit zijn, wat nootjes of cacaonips.'
    ]
  },
  {
    id: 'mango-chiapudding',
    slug: 'mango-chiapudding',
    title: 'Mango chiapudding',
    intro: 'Chiazaad bevat vezels en omega 3-vetzuren die bijdragen aan een gezonde darmen en een stabielere bloedsuikerspiegel. In combinatie met yoghurt en fruit ontstaat een voedzaam ontbijt dat zorgt voor een lange verzadiging.',
    image: mangoChiaAsset.url,
    ingredientsNote: '1 p',
    ingredients: [
      '200 ml (amandel) melk',
      '3 eetlepels chiazaad',
      '2 eetlepels Griekse yoghurt van Dodoni',
      'Een handje mango',
      'Een handje granola',
      '1 banaan'
    ],
    steps: [
      'Voeg de chiazaad toe aan een afsluitbaar bakje',
      'Voeg vervolgens de amandelmelk en Griekse yoghurt toe en roer het geheel goed door',
      'Zet het bakje in de koelkast en laat dit minimaal 15 minuten staan. Heb je in de ochtend weinig tijd? Dan kun je dit ook de avond van tevoren alvast voorbereiden',
      'Snijd de mango en pureer deze tot een gladde mousse',
      'Haal de chiapudding uit de koelkast en verdeel de mango, granola en banaan eroverheen'
    ],
    notes: [
      'Chiapudding is echt ideaal om te mealpreppen. Je kunt meteen meerdere porties maken, zodat je er de rest van de week weinig omkijken naar hebt.',
      'In de ochtend hoef je alleen nog wat granola en banaan toe te voegen en je ontbijt staat klaar',
      'Perfect voor drukke ochtenden, een stabiele bloedsuikerspiegel en een rustige buik.'
    ],
    videoText: 'Bekijk hieronder de video waarin ik stap voor stap laat zien hoe je deze mango chiapudding maak:',
    videoUrl: 'https://www.instagram.com/p/DXBzzFGjEDJ/'
  },
  {
    id: 'shakshuka-feta-tonijn',
    slug: 'shakshuka-feta-tonijn',
    title: 'Shakshuka feta tonijn',
    intro: 'Eitjes zijn lekker hoog in eiwitten die belangrijk zijn voor de aanmaak van hormonen en neurotransmitters. De grote hoeveelheid groenten ondersteunt daarnaast je darmgezondheid en ontgifting.',
    image: shakshukaAsset.url,
    ingredientsNote: '2 personen',
    ingredients: [
      '4 eitjes',
      '1 courgette',
      '2 punt paprika’s',
      'Tomatenblokjes uit blik',
      '3 tomaten',
      'Feta hoeveelheid naar smaak',
      '1 ui',
      'Een paar teentjes knoflook',
      '1 blikje tomaten puree',
      'Kruiden naar keuze',
      'Zuurdesem brood'
    ],
    steps: [
      'Snij alle groente, de ui en de knoflook',
      'Fruit de ui en knoflook en voeg vervolgens de tomaten puree toe',
      'Bak de courgette',
      'Voeg de overige groente toe en bak dit nog eventjes',
      'Voeg kruiden toe naar keuze',
      'Als de groente gaar begint te worden, maak je per ei een kuiltje en breek je daarin het eitje',
      'Plaats een deksel op de pan om de eitjes te laten stollen',
      'Als de eitjes gestold zijn verdeel je de shakshuka over 2 borden (of 1 portie in een afsluitbaar bakje)',
      'Verdeel de tonijn en verkruimel je de feta over je bord heen'
    ],
    videoText: 'Bekijk hieronder de video waarin ik stap voor stap laat zien hoe je de shakshuka maak:',
    videoUrl: 'https://www.instagram.com/p/DXTeEbFsbHV/'
  },
  {
    id: 'zoete-aardappel-pannenkoekjes',
    slug: 'zoete-aardappel-pannenkoekjes',
    title: 'Zoete aardappel pannenkoekjes',
    intro: 'Mijn favoriete toppings zijn: aardbeien, Griekse yoghurt, hennepzaad, amandelen en amandelpasta.',
    image: zoeteAardappelAsset.url,
    ingredientsNote: '2 personen',
    ingredients: [
      '250 gram zoete aardappel',
      '180 gram havermout',
      '250 ml amandelmelk',
      '2 eieren',
      '1 theelepel kaneel',
      '1 theelepel bakpoeder',
      '1 eetlepel amandelpasta'
    ],
    steps: [
      'Bak de zoete aardappel in de oven op 180 graden tot deze beetgaar is',
      'Doe ondertussen de havermout in je blender en mix dit tot het glad gemixt is. ( super snelle manier om havermeel te maken)',
      'Voeg vervolgend de amandelmelk, de eitjes, kaneel, bakpoeder en amandelpasta toe en mix het geheel',
      'Ondertussen kan je de zoete aardappel uit de oven halen en voeg deze ook toe aan het beslag. Mix het geheel nog even goed glad',
      'Verwarm een pan met boter of olie. en bak de pannenkoekjes goud bruin',
      'Leg de pannenkoekjes op je bord en voeg je favo toppings toe'
    ],
    notes: [
      'Mijn favoriete toppings zijn:',
      'Aardbeien',
      'Griekse yoghurt',
      'Hennepzaad',
      'Amandelen',
      'Amandelpasta',
      'Ik bak het liefst in 1 keer een flinke stapel en vries een deel in. Zo hoef je ze de volgende keer alleen te laten ontdooien en je favo toppings toe te voegen. Cook once, eat twice!'
    ],
    videoText: 'Bekijk hieronder de video waarin ik stap voor stap laat zien hoe je deze pannenkoekjes maak:',
    videoUrl: 'https://www.instagram.com/p/DXI5DMKDKfH/'
  },
  {
    id: 'baked-oats-frambozen',
    slug: 'baked-oats-met-frambozen',
    title: 'Baked oats met frambozen',
    intro: 'Havermout bevat oplosbare vezels die je darmbacteriën voeden en bijdragen aan een stabielere bloedsuikerspiegel. De combinatie van vezels uit onder andere de frambozen, de eiwitten en gezonde vetten helpt om je energie langer vast te houden.',
    image: bakedOatsAsset.url,
    ingredientsNote: '1 persoon',
    ingredients: [
      '1 banaan',
      '1 ei',
      '40 gram havermout',
      '70 ml amandelmelk',
      '1 theelepel bakpoeder',
      'Een halve theelepel vanille-extract',
      '1 theelepel kaneel',
      'Een handje frambozen',
      '1 eetlepel notenpasta'
    ],
    steps: [
      'Prak de banaan in een schaaltje die ook in de oven mag',
      'Breek het ei in het schaaltje',
      'Voeg de havermout, melk, kaneel, bakpoeder en vanille toe en mix goed door elkaar',
      'Voeg de frambozen en notenpasta toe',
      'Bak het geheel ongeveer 20 minuten op 180 graden',
      'Ik vind het lekker om af te toppen met wat Griekse yoghurt'
    ],
    videoText: 'Bekijk hieronder de video waarin ik stap voor stap laat zien hoe je deze baked oats maak:',
    videoUrl: 'https://www.instagram.com/p/DX4M7ibMRUT/'
  },
  {
    id: 'eiwitrijke-chocolade-pannenkoeken',
    slug: 'eiwitrijke-chocolade-pannenkoeken',
    title: 'Eiwitrijke chocolade pannenkoeken',
    intro: 'Soms heb je gewoon zin in pannenkoeken voor het ontbijt en dan zijn deze eiwitrijke pannenkoeken perfect!',
    image: eiwitrijkePannenkoekenAsset.url,
    ingredientsNote: '2p',
    ingredients: [
      '4 eitjes',
      '200 gram cottage cheese',
      '2 theelepel cacaopoeder',
      '1 theelepel bakpoeder',
      '100 gram havermout'
    ],
    steps: [
      'Meng de eitjes, cottage cheese, cacaopoeder, bakpoeder en havermout in de blender',
      'Mix tot een glad geheel',
      'Verwarm de pan en smelt de boter in de pan',
      'Bak de pannenkoeken om en om in de pan',
      'Snijd ondertussen de aardbeien klein',
      'Leg de pannenkoekjes op een bord en top af met de aardbeien'
    ],
    videoText: 'Bekijk hieronder de video waarin ik stap voor stap laat zien hoe je deze pannenkoeken maak:',
    videoUrl: 'https://www.instagram.com/p/DYJ-EZ_sv6I/'
  },
  {
    id: 'carrot-cake-overnight-oats',
    slug: 'carrot-cake-overnight-oats',
    title: 'Carrot cake overnight oats',
    intro: 'Wist je dat rauwe wortel je helpt bij je hormoonbalans? Rauwe wortel bevat lekker veel vezels, maar helpen je ook bij het balanceren van je hormonen.',
    image: carrotCakeAsset.url,
    ingredientsNote: '1p',
    ingredients: [
      '1 a 2 wortels',
      '1 eetlepel chiazaad',
      '1 eetlepel lijnzaad',
      '250 ml amandelmelk',
      'Een paar scheppen Griekse yoghurt',
      'Een theelepel Ceylon kaneel',
      'Optioneel: Een schepje eiwitpoeder zonder troep',
      'Een handje walnoten',
      '40 gram havermout'
    ],
    steps: [
      'Rasp de wortels en bewaar een klein beetje rasp voor de topping',
      'Voeg de wortel toe aan een bakje. Ik gebruik de glazen bakjes van IKEA, omdat deze van glas zijn en je ze makkelijk mee kan nemen.',
      'Voeg de havermout toe',
      'Voeg de melk toe',
      'Breek de lijnzaad met een vijzel en voeg de lijnzaad en chiazaad toe',
      'Voeg de kaneel toe aan het mengsel',
      'Voeg de eiwitpoeder toe, maar zorg er altijd voor dat je een eiwit poeder gebruikt zonder troep en zonder suikers',
      'Voeg 1 a 2 EL Griekse yoghurt toe naar smaak',
      'Roer alles goed door elkaar heen, sluit het bakje af en zet de oats voor een nachtje in de koelkast',
      'De volgende ochtend top je de oats af met Griekse yoghurt, overige wortels rasp en een handje walnoten'
    ],
    notes: [
      'De vezels in wortel binden zich aan overtollig oestrogeen en een teveel aan oestrogeen staat gelinkt met PMS, pijnlijke en hormonale migraine..',
      'Daarnaast bevatten walnoten veel omega 3 en worden deze echt gezien als ‘brainfood’',
      'Door de combinatie van havermout, lijnzaad, chiazaad en wortel bevat dit ontbijtje lekker veel vezels, waar je buik heel blij van wordt!'
    ],
    videoText: 'Bekijk hieronder de video waarin ik stap voor stap laat zien hoe je deze carrot cake overnight oats maak:',
    videoUrl: 'https://www.instagram.com/p/DZkBhZFspl5/'
  },
  {
    id: 'ontbijt-bordje',
    slug: 'ontbijt-bordje',
    title: 'Ontbijt bordje',
    intro: 'Ontbijt bordjes zijn echt mijn favoriete manier van lekker en makkelijk ontbijten. Je kunt hiermee ook eindeloos variëren en lekker veel kleur op je bord creëren!',
    image: ontbijtbordjeAsset.url,
    ingredientsNote: '1p',
    ingredients: [
      '2 gekookte eitjes',
      '2 plakjes zuurdesembrood',
      '2 eetlepels kimchi',
      '2 eetlepels cottage cheese',
      'Een halve avocado',
      '1 eetlepels kiemgroente',
      'Een halve theelepel hennepzaadjes',
      '1 tomaat',
      '1 kiwi'
    ],
    steps: [
      'Kook 2 eitjes, pel deze en leg deze alvast op je bord',
      'Snij een halve avocado in stukjes en leg deze bij je eitjes op het bord',
      'Snij 2 broodjes zuurdesem af en besmeer deze met wat roomboter en wat zeezout. Ook deze mogen toegevoegd worden',
      'Voeg 2 eetlepels cottage cheese toe aan je bordje en top deze af met wat hennepzaadjes',
      'Voeg vervolgens 2 eetlepels kimchi toe',
      'Snij 1 tomaat in plakjes en voeg deze ook toe aan het bordje',
      'Snij 1 kiwi in plakjes en voeg toe aan je ontbijt bordje. Ja, met schil om extra vezels binnen te krijgen!',
      'Om het af te maken voeg je nog 1 eetlepel kiemgroente toe en je bord is compleet'
    ],
    tip: 'Kook gelijk wat eitjes extra en bewaar deze in de koelkast voor later. Dit scheelt je de volgende ronde weer.',
    videoText: 'Bekijk hieronder de video waarin ik stap voor stap laat zien hoe je dit ontbijt bordje maak:',
    videoUrl: 'https://www.instagram.com/p/DZRsR8dsdfj/'
  },
  {
    id: 'frambozen-chiapudding',
    slug: 'frambozen-chiapudding',
    title: 'Frambozen chiapudding',
    intro: 'Chiazaad bevat vezels en omega 3-vetzuren die bijdragen aan een gezonde darmen en een stabielere bloedsuikerspiegel. Frambozen bevatten daarnaast ook lekker veel vezels en zorgen voor kleur op je bord.',
    image: frambozenChiaAsset.url,
    ingredientsNote: '1 p',
    ingredients: [
      '250 ml (amandel) melk',
      '3 eetlepels chiazaad',
      '2 eetlepels Griekse yoghurt van Dodoni',
      '3 handjes frambozen',
      'Een handje granola',
      'Je favo toppings'
    ],
    steps: [
      'Voeg de chiazaad toe aan een afsluitbaar bakje',
      'Voeg vervolgens de amandelmelk en frambozen toe en roer het geheel goed door',
      'Zet het bakje in de koelkast en laat dit minimaal 15 minuten staan. Heb je in de ochtend weinig tijd? Dan kun je dit ook de avond van tevoren alvast voorbereiden',
      'Haal de chiapudding uit de koelkast en roer nog een keer goed door',
      'Verdeel 2 scheppen Griekse yoghurt over de chiapudding heen en vervolgens voeg je ook nog de overgebleven frambozen toe',
      'Top het geheel af met wat granola en je overige favo toppings.'
    ],
    notes: [
      'Ik maak zelf altijd gelijk een paar porties zodat ik voor de rest van de week al een aantal ontbijtes klaar hebt staan.',
      'Ideaal voor drukkere ochtenden, een stabiele bloedsuikerspiegel en een rustige buik.'
    ],
    videoText: 'Bekijk hieronder de video waarin ik stap voor stap laat zien hoe je deze frambozen chiapudding maak:',
    videoUrl: 'https://www.instagram.com/p/DaHiQyxsPHQ/'
  }
];

export const getRecipeBySlug = (slug?: string) => recipes.find((r) => r.slug === slug);
