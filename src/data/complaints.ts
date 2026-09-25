/**
 * Klachten die op /klachten als klikbare blokken staan, gegroepeerd per categorie.
 * Elke klacht heeft een eigen pagina: /klachten/{slug}
 */

export type ComplaintCategory =
  | 'Hormonen en cyclus'
  | 'Darmen en spijsvertering'
  | 'Energie en bloedsuiker'
  | 'Huid en haar';

export const complaintCategories: {
  name: ComplaintCategory;
  slug: string;
  number: string;
  description: string;
}[] = [
  {
    name: 'Hormonen en cyclus',
    slug: 'hormonen-en-cyclus',
    number: '01',
    description: 'Van PMS en menstruatieklachten tot PCOS/PMOS, schildklierproblemen, kinderwens en overgang.',
  },
  {
    name: 'Darmen en spijsvertering',
    slug: 'darmen-en-spijsvertering',
    number: '02',
    description: 'Van een opgeblazen buik en winderigheid tot PDS, maagzuur en voedselintoleranties.',
  },
  {
    name: 'Energie en bloedsuiker',
    slug: 'energie-en-bloedsuiker',
    number: '03',
    description: 'Van moe wakker worden en energiedips tot cravings, brain fog en een schommelende bloedsuiker.',
  },
  {
    name: 'Huid en haar',
    slug: 'huid-en-haar',
    number: '04',
    description: 'Van acne en een gevoelige huid tot eczeem, haaruitval en terugkerende onrust.',
  },
];

export interface Complaint {
  slug: string;
  /** Categorie waaronder de klacht op /klachten staat. */
  category: ComplaintCategory;
  /** Extra categorieën waar de klacht ook terugkomt. */
  alsoIn?: ComplaintCategory[];
  /** Korte titel voor het blok. */
  title: string;
  /** Titel voor de detailpagina (H1). */
  pageTitle: string;
  /** SEO-titel, max ~42 tekens (merknaam komt erachter). */
  seoTitle: string;
  seoDescription: string;
  /** Eén regel in het blok op de overzichtspagina. */
  teaser: string;
  /** Korte introductie op de detailpagina. */
  intro: string[];
  /** Hoe je de klacht kunt herkennen. */
  signals: string[];
  /** Wat er mogelijk achter kan zitten. */
  causes: string[];
  /** Verwijzing naar het passende traject. */
  traject?: { href: string; label: string };
}

export const complaints: Complaint[] = [
  {
    slug: 'menstruatieklachten',
    category: 'Hormonen en cyclus',
    title: 'Pijnlijke of hevige menstruaties',
    pageTitle: 'Menstruatieklachten',
    seoTitle: 'Menstruatieklachten: herkennen en aanpak',
    seoDescription:
      'Pijnlijke, hevige of slopende menstruaties? Lees hoe je menstruatieklachten herkent, wat er achter kan zitten en hoe ik je hierin begeleid.',
    teaser: 'Pijn, hevig bloedverlies of klachten die je maand steeds bepalen.',
    intro: [
      'Een menstruatie mag voelbaar zijn, maar hoeft je leven niet over te nemen. Toch plannen veel vrouwen hun werk, sport en sociale leven rondom hun menstruatie omdat de klachten simpelweg te heftig zijn.',
      'Vaak wordt dit jarenlang afgedaan als iets waar je mee moet leren leven. Ik kijk liever naar wat jouw lichaam met deze klachten probeert te vertellen.',
    ],
    signals: [
      'Krampen of pijn waarvoor je pijnstillers nodig hebt',
      'Hevig bloedverlies, stolsels of een menstruatie die lang doorgaat',
      'Dagen vooraf al niet goed functioneren',
      'Misselijkheid, hoofdpijn of darmklachten rond je menstruatie',
      'Extreme vermoeidheid tijdens of na je menstruatie',
    ],
    causes: [
      'Een verstoorde verhouding tussen oestrogeen en progesteron',
      'Ontstekingsgevoeligheid en de rol van voeding daarin',
      'Tekorten aan bijvoorbeeld ijzer, magnesium of vitamine D',
      'Bloedsuikerschommelingen en langdurige stress',
      'Hoe je lever en darmen hormonen afvoeren',
    ],
    traject: { href: '/hormoontraject', label: 'Bekijk het 1:1 Hormoontraject' },
  },
  {
    slug: 'onregelmatige-cyclus',
    category: 'Hormonen en cyclus',
    title: 'Een onregelmatige cyclus',
    pageTitle: 'Een onregelmatige cyclus',
    seoTitle: 'Onregelmatige cyclus: oorzaken',
    seoDescription:
      'Is je menstruatie onregelmatig, blijft deze uit of wisselt je cyclus sterk? Lees wat er kan meespelen en hoe ik naar jouw klachten kijk.',
    teaser: 'Een cyclus die wisselt, uitblijft of lastig te voorspellen is.',
    intro: [
      'Je cyclus is een soort maandelijkse gezondheidsmeter. Wisselt de lengte sterk, blijft je menstruatie weg of weet je nooit wanneer je hem kunt verwachten, dan is dat een signaal dat je hormonen uit balans zijn.',
      'Vaak is dat geen los probleem, maar het gevolg van hoe je lichaam op dit moment met voeding, stress en herstel omgaat.',
    ],
    signals: [
      'Een cyclus die korter dan 24 of langer dan 35 dagen duurt',
      'Een menstruatie die maanden wegblijft',
      'Sterk wisselende cycluslengte per maand',
      'Tussentijds bloedverlies of spotting',
      'Geen duidelijke tekenen van een ovulatie',
    ],
    causes: [
      'Een ovulatie die uitblijft of moeizaam tot stand komt',
      'Te weinig energie of voedingsstoffen binnenkrijgen',
      'Insulineresistentie of bloedsuikerschommelingen',
      'Schildklier die minder goed meewerkt',
      'Langdurige stress of herstel na anticonceptie',
    ],
    traject: { href: '/hormoontraject', label: 'Bekijk het 1:1 Hormoontraject' },
  },
  {
    slug: 'opgeblazen-buik',
    category: 'Darmen en spijsvertering',
    title: 'Een opgeblazen buik (na het eten)',
    pageTitle: 'Een opgeblazen buik',
    seoTitle: 'Opgeblazen buik: oorzaken en aanpak',
    seoDescription:
      'Een buik die in de loop van de dag opzet, ook bij gezond eten. Lees hoe je een opgeblazen buik herkent en wat er achter kan zitten.',
    teaser: 'Een buik die in de loop van de dag opzet, ook als je bewust eet.',
    intro: [
      'Een opgeblazen buik is een van de meest voorkomende klachten in mijn praktijk. Vaak wordt hij in de loop van de dag erger en voel je je aan het eind van de dag maten groter dan in de ochtend.',
      'Dat betekent niet automatisch dat je iets verkeerd doet. Het is meestal een signaal dat je spijsvertering of darmmilieu ondersteuning nodig heeft.',
    ],
    signals: [
      'Een buik die opzet na het eten',
      'Een broek die aan het eind van de dag knelt',
      'Winderigheid, boeren of een vol gevoel',
      'Buikpijn of krampen die komen en gaan',
      'Klachten die per voedingsmiddel of per cyclusfase wisselen',
    ],
    causes: [
      'Een verstoorde balans in je darmflora',
      'Onvoldoende maagzuur of spijsverteringsenzymen',
      'Voedselintoleranties of gevoeligheid voor vezels',
      'Stress en te snel of onregelmatig eten',
      'Hormonale schommelingen door je cyclus heen',
    ],
    traject: { href: '/darmtraject', label: 'Bekijk het 1:1 Darmtraject' },
  },
  {
    slug: 'darmklachten',
    category: 'Darmen en spijsvertering',
    title: 'Darmklachten',
    pageTitle: 'Darmklachten',
    seoTitle: 'Darmklachten herkennen en aanpakken',
    seoDescription:
      'Buikpijn, wisselende ontlasting of verstopping. Lees hoe je darmklachten herkent, wat er achter kan zitten en hoe begeleiding werkt.',
    teaser: 'Buikpijn, verstopping, diarree of wisselende ontlasting.',
    intro: [
      'Darmklachten bepalen vaak meer van je dag dan je aan de buitenkant laat zien. Je let op wat je eet, houdt rekening met waar een toilet is en toch blijven de klachten komen.',
      'Vaak is er niet één schuldig voedingsmiddel, maar een combinatie van factoren in je spijsvertering, darmflora en dagelijkse belasting.',
    ],
    signals: [
      'Buikpijn of krampen, ook los van het eten',
      'Verstopping, diarree of wisselende ontlasting',
      'Maagzuur, misselijkheid of snel een vol gevoel',
      'Klachten die toenemen bij stress of drukke periodes',
      'Klachten die per cyclusfase veranderen',
    ],
    causes: [
      'Dysbiose of een verstoorde darmflora',
      'Onvoldoende vertering van eiwitten, vetten of koolhydraten',
      'Laaggradige ontstekingen in je darm',
      'Stress en een overactief stresssysteem',
      'De samenhang tussen je darmen en je hormonen',
    ],
    traject: { href: '/darmtraject', label: 'Bekijk het 1:1 Darmtraject' },
  },
  {
    slug: 'vermoeidheid',
    category: 'Energie en bloedsuiker',
    title: 'Moe wakker worden, ook na genoeg slaap',
    pageTitle: 'Vermoeidheid en energiedips',
    seoTitle: 'Vermoeidheid: oorzaken en aanpak',
    seoDescription:
      'Altijd moe, ook na voldoende slaap? Lees hoe je aanhoudende vermoeidheid en energiedips herkent en wat er achter kan zitten.',
    teaser: 'Moe wakker worden en energie die niet meer terugkomt.',
    intro: [
      'Vermoeidheid die blijft, ook als je goed slaapt en rust neemt, is geen kwestie van te weinig discipline. Je lichaam geeft aan dat er ergens meer gevraagd wordt dan er binnenkomt.',
      'Ik kijk daarom niet alleen naar je slaap, maar ook naar je voeding, bloedsuiker, darmen, schildklier en herstelmomenten.',
    ],
    signals: [
      'Moe wakker worden, ook na genoeg uren slaap',
      'Een duidelijke energiedip in de middag',
      'Concentratieproblemen of brain fog',
      'Lang nodig hebben om te herstellen van drukke dagen',
      'Afhankelijk zijn van koffie of zoet om de dag door te komen',
    ],
    causes: [
      'Bloedsuikerschommelingen door je dag heen',
      'Tekorten aan bijvoorbeeld ijzer, B12 of vitamine D',
      'Een schildklier die minder goed meewerkt',
      'Langdurige stress en een verstoord dagritme',
      'Darmklachten waardoor voedingsstoffen minder goed worden opgenomen',
    ],
    traject: { href: '/hormoontraject', label: 'Bekijk het 1:1 Hormoontraject' },
  },
  {
    slug: 'cravings-en-bloedsuiker',
    category: 'Energie en bloedsuiker',
    title: 'Cravings of veel trek in zoet',
    pageTitle: 'Cravings',
    seoTitle: 'Cravings: oorzaken en aanpak',
    seoDescription:
      'Steeds trek in zoet, snacken zonder honger of hangry worden? Lees hoe cravings ontstaan en wat je eraan kunt doen.',
    teaser: 'Steeds trek in zoet, hangry worden of snacken zonder echte trek.',
    intro: [
      'Cravings zijn zelden een kwestie van wilskracht. Vaak vraagt je lichaam om snelle energie, door je bloedsuiker, je cyclus, slaap of je eetpatroon.',
      'Zodra je begrijpt waar jouw cravings vandaan komen, merk je dat vaak terug in je energie, stemming, slaap en hormonen.',
    ],
    signals: [
      'Trek in iets zoets na het eten of in de middag',
      'Prikkelbaar, trillerig of slap worden als je niet eet',
      'Energiedips en daarna weer opleven',
      'Nachtelijk wakker worden of onrustig slapen',
      'Moeite met afvallen ondanks gezonde keuzes',
    ],
    causes: [
      'Maaltijden met te weinig eiwit, vet of vezels',
      'Insulineresistentie of een verstoorde bloedsuikerregulatie',
      'Stress en cortisol die je bloedsuiker beïnvloeden',
      'Te weinig eten op een dag en daarna inhalen',
      'De samenhang met PCOS en je cyclus',
    ],
    traject: { href: '/bloedsuikertraject', label: 'Bekijk het 1:1 Bloedsuikertraject' },
  },
  {
    slug: 'slaapproblemen',
    category: 'Energie en bloedsuiker',
    title: 'Moeite met inslapen of doorslapen',
    pageTitle: 'Slaapproblemen',
    seoTitle: 'Slaapproblemen: oorzaken en aanpak',
    seoDescription:
      'Moeite met inslapen, doorslapen of nooit uitgerust wakker worden. Lees hoe je slaapproblemen herkent en wat er achter kan zitten.',
    teaser: 'Moeite met inslapen, doorslapen of echt uitgerust wakker worden.',
    intro: [
      'Slaap is het moment waarop je lichaam herstelt, hormonen aanmaakt en je brein opruimt. Slaap je slecht, dan voel je dat in je energie, stemming, cyclus en eetlust.',
      'Slaapproblemen hebben vaak een lichamelijke component die je met voeding en dagritme kunt beïnvloeden.',
    ],
    signals: [
      'Lang wakker liggen voor je in slaap valt',
      'Rond drie of vier uur wakker worden',
      'Piekeren of een onrustig hoofd in bed',
      'Nachtelijk transpireren of warm wakker worden',
      'Niet uitgerust wakker worden, ook na genoeg uren',
    ],
    causes: [
      'Een bloedsuikerdip in de nacht',
      'Cortisol dat op het verkeerde moment hoog is',
      'Te weinig progesteron of hormonale wisselingen',
      'Tekorten aan bijvoorbeeld magnesium of B-vitaminen',
      'Een dagritme met weinig licht, rust of beweging',
    ],
    traject: { href: '/hormoontraject', label: 'Bekijk het 1:1 Hormoontraject' },
  },
  {
    slug: 'stemmingswisselingen',
    category: 'Hormonen en cyclus',
    title: 'Stemmingswisselingen',
    pageTitle: 'Stemmingswisselingen en moodswings',
    seoTitle: 'Stemmingswisselingen en hormonen',
    seoDescription:
      'Prikkelbaar, somber of emotioneel zonder duidelijke reden. Lees hoe stemmingswisselingen samenhangen met je hormonen en bloedsuiker.',
    teaser: 'Prikkelbaar, somber of emotioneel zonder duidelijke reden.',
    intro: [
      'Je stemming staat niet los van je lichaam. Hormonen, bloedsuiker, darmen en slaap bepalen mede hoe veerkrachtig je je voelt.',
      'Merk je dat je stemming wisselt met je cyclus of met je eetmomenten, dan is dat waardevolle informatie om mee te werken.',
    ],
    signals: [
      'Een kort lontje of sneller geïrriteerd zijn',
      'Somberheid of huilerigheid die komt en gaat',
      'Onrust of een gejaagd gevoel',
      'Stemming die duidelijk meebeweegt met je cyclus',
      'Prikkelbaar worden als je een maaltijd overslaat',
    ],
    causes: [
      'Hormonale wisselingen in de tweede helft van je cyclus',
      'Bloedsuikerschommelingen door je dag heen',
      'Langdurige stress en te weinig herstel',
      'Tekorten die je aanmaak van neurotransmitters beïnvloeden',
      'De wisselwerking tussen je darmen en je brein',
    ],
    traject: { href: '/hormoontraject', label: 'Bekijk het 1:1 Hormoontraject' },
  },
  {
    slug: 'stress-en-herstel',
    category: 'Energie en bloedsuiker',
    title: 'Stress & herstel',
    pageTitle: 'Stress en moeilijk herstellen',
    seoTitle: 'Stress en moeizaam herstel',
    seoDescription:
      'Opgejaagd voelen, niet kunnen ontspannen of lang nodig hebben om te herstellen. Lees hoe je dit herkent en wat er achter kan zitten.',
    teaser: 'Opgejaagd voelen en lang nodig hebben om te herstellen.',
    intro: [
      'Stress hoort bij het leven, maar langdurige stress zonder herstel vraagt veel van je lichaam. Je cyclus, spijsvertering, slaap en eetlust reageren daar allemaal op.',
      'We kijken niet alleen naar minder doen, maar vooral naar het beter ondersteunen van jouw herstelvermogen.',
    ],
    signals: [
      'Je opgejaagd voelen, ook op rustige momenten',
      'Moeilijk kunnen ontspannen of niets kunnen doen',
      'Sneller geïrriteerd of emotioneel zijn',
      'Lang nodig hebben om bij te komen van drukke periodes',
      'Vermoeid zijn, maar toch niet tot rust komen',
    ],
    causes: [
      'Een langdurig actief stresssysteem en cortisolpatroon',
      'Bloedsuikerschommelingen die stress versterken',
      'Onvoldoende slaap en herstelmomenten',
      'Tekorten aan magnesium en B-vitaminen',
      'De wisselwerking tussen stress, darmen en hormonen',
    ],
  },

  {
    slug: 'oestrogeendominantie',
    category: 'Hormonen en cyclus',
    title: 'Oestrogeendominantie',
    pageTitle: 'Oestrogeendominantie',
    seoTitle: 'Oestrogeendominantie herkennen',
    seoDescription:
      'Gevoelige borsten, hevige menstruaties of PMS kunnen wijzen op oestrogeendominantie. Lees hoe je het herkent en wat eraan te doen is.',
    teaser: 'Te veel oestrogeen ten opzichte van progesteron.',
    intro: [
      'Bij oestrogeendominantie is er niet per se te veel oestrogeen, maar te weinig progesteron om het in balans te houden. Die verhouding bepaalt hoe je je in de tweede helft van je cyclus voelt.',
      'Hoe goed je lichaam oestrogeen afvoert via je lever en darmen speelt hierin een grote rol.',
    ],
    signals: [
      'Gespannen of pijnlijke borsten voor je menstruatie',
      'Hevig bloedverlies of stolsels',
      'PMS, prikkelbaarheid of vocht vasthouden',
      'Hoofdpijn of migraine rond je cyclus',
      'Moeite met afvallen rond heupen en bovenbenen',
    ],
    causes: [
      'Te weinig progesteron door een zwakke of uitblijvende ovulatie',
      'Een lever die oestrogeen minder goed afbreekt',
      'Darmen die hormonen niet goed afvoeren of verstopping',
      'Langdurige stress en bloedsuikerschommelingen',
      'Tekorten aan bijvoorbeeld B-vitaminen, magnesium of zink',
    ],
    traject: { href: '/hormoontraject', label: 'Bekijk het 1:1 Hormoontraject' },
  },
  {
    slug: 'progesterontekort',
    category: 'Hormonen en cyclus',
    title: 'Progesterontekort',
    pageTitle: 'Een progesterontekort',
    seoTitle: 'Progesterontekort: signalen en aanpak',
    seoDescription:
      'Korte cyclus, spotting, slecht slapen of PMS kunnen wijzen op te weinig progesteron. Lees hoe je dit herkent en wat er achter kan zitten.',
    teaser: 'Te weinig progesteron in de tweede helft van je cyclus.',
    intro: [
      'Progesteron maak je pas aan na een ovulatie. Het is je kalmerende hormoon: het helpt je slapen, houdt je stemming stabiel en zorgt voor een rustige menstruatie.',
      'Blijft de aanmaak achter, dan merk je dat vaak in de week voor je menstruatie.',
    ],
    signals: [
      'Een cyclus korter dan 25 dagen',
      'Spotting in de dagen voor je menstruatie',
      'Slecht slapen of onrustig wakker worden',
      'PMS, onrust of huilerigheid',
      'Een korte tweede cyclushelft',
    ],
    causes: [
      'Een ovulatie die uitblijft of zwak is',
      'Langdurige stress en een hoog cortisolpatroon',
      'Te weinig eten of te intensief sporten',
      'Schildklier die minder goed meewerkt',
      'Tekorten aan bijvoorbeeld zink, magnesium of vitamine B6',
    ],
    traject: { href: '/hormoontraject', label: 'Bekijk het 1:1 Hormoontraject' },
  },
  {
    slug: 'insulineresistentie',
    category: 'Energie en bloedsuiker',
    alsoIn: ['Hormonen en cyclus'],
    title: 'Insulineresistentie',
    pageTitle: 'Insulineresistentie',
    seoTitle: 'Insulineresistentie herkennen',
    seoDescription:
      'Energiedips, cravings, moeite met afvallen of PCOS-klachten kunnen wijzen op insulineresistentie. Lees hoe je dit herkent en aanpakt.',
    teaser: 'Je cellen reageren minder goed op insuline.',
    intro: [
      'Bij insulineresistentie reageren je cellen minder goed op insuline, waardoor je lichaam er steeds meer van moet maken. Dat beïnvloedt je energie, je gewicht en je hormonen.',
      'Het is een patroon dat vaak jaren opbouwt, maar juist goed te beïnvloeden is met voeding, beweging en herstel.',
    ],
    signals: [
      'Energiedips na het eten of in de middag',
      'Steeds trek in zoet of snelle koolhydraten',
      'Moeite met afvallen, vooral rond je buik',
      'Een onregelmatige cyclus of PCOS-klachten',
      'Donkere plekjes in de hals of nek',
    ],
    causes: [
      'Maaltijden met te weinig eiwit, vet en vezels',
      'Weinig beweging of veel zitten',
      'Langdurige stress en te weinig slaap',
      'Erfelijke gevoeligheid en hormonale factoren',
      'Laaggradige ontstekingen en darmgezondheid',
    ],
    traject: { href: '/bloedsuikertraject', label: 'Bekijk het 1:1 Bloedsuikertraject' },
  },
  {
    slug: 'schildklierdisbalans',
    category: 'Hormonen en cyclus',
    title: 'Schildklierproblemen',
    pageTitle: 'Een schildklier die minder goed meewerkt',
    seoTitle: 'Schildklierklachten herkennen',
    seoDescription:
      'Vermoeidheid, kouwelijk zijn, haaruitval of een trage stofwisseling. Lees hoe schildklierklachten samenhangen met je hormonen en voeding.',
    teaser: 'Vermoeidheid, kouwelijk zijn of een trage stofwisseling.',
    intro: [
      'Je schildklier bepaalt het tempo van je stofwisseling. Werkt hij minder goed, dan voel je dat in je energie, gewicht, stemming en cyclus.',
      'Waarden kunnen binnen de referentie vallen terwijl je toch klachten hebt. Daarom kijk ik naar het volledige beeld en niet alleen naar één waarde.',
    ],
    signals: [
      'Vermoeidheid die niet weggaat met rust',
      'Snel koud hebben, koude handen en voeten',
      'Haaruitval of dunner wordend haar',
      'Verstopping en een trage spijsvertering',
      'Gewichtstoename zonder dat je anders eet',
    ],
    causes: [
      'Te weinig omzetting van fT4 naar fT3',
      'Antistoffen zoals anti-TPO of anti-Tg',
      'Tekorten aan jodium, selenium, zink, ijzer of vitamine D',
      'Langdurige stress en een hoog cortisolpatroon',
      'Darmgezondheid en ontstekingsgevoeligheid',
    ],
    traject: { href: '/hormoontraject', label: 'Bekijk het 1:1 Hormoontraject' },
  },
  {
    slug: 'cortisol-uit-balans',
    category: 'Energie en bloedsuiker',
    title: 'Cortisol uit balans',
    pageTitle: 'Cortisol uit balans',
    seoTitle: 'Cortisol uit balans: signalen',
    seoDescription:
      'Wired but tired, nachtelijk wakker worden of een energiedip in de ochtend. Lees hoe een verstoord cortisolpatroon voelt en wat helpt.',
    teaser: 'Moe maar toch opgejaagd, of energie op de verkeerde momenten.',
    intro: [
      'Cortisol is je wekhormoon: het hoort in de ochtend hoog te zijn en in de avond laag. Bij langdurige belasting kan dat ritme verschuiven.',
      'Dan ben je moe wanneer je wakker moet zijn en klaarwakker wanneer je wilt slapen.',
    ],
    signals: [
      'Moeilijk opstarten in de ochtend',
      "'s Avonds pas energie krijgen",
      'Nachtelijk wakker worden rond drie of vier uur',
      'Hartkloppingen, onrust of een gejaagd gevoel',
      'Trek in zout of zoet bij spanning',
    ],
    causes: [
      'Langdurige stress zonder herstelmomenten',
      'Bloedsuikerschommelingen en maaltijden overslaan',
      'Te weinig slaap of een verschoven dagritme',
      'Intensief sporten zonder voldoende voeding',
      'Onderliggende darm- of schildklierklachten',
    ],
  },

  {
    slug: 'kinderwens',
    category: 'Hormonen en cyclus',
    title: 'Kinderwens of voorbereiden op een zwangerschap',
    pageTitle: 'Kinderwens en je cyclus voorbereiden',
    seoTitle: 'Kinderwens: je lichaam voorbereiden',
    seoDescription:
      'Een kinderwens vraagt om een cyclus die goed werkt. Lees waar we naar kijken om je lichaam en hormonen voor te bereiden.',
    teaser: 'Je lichaam en cyclus voorbereiden op een zwangerschap.',
    intro: [
      'Bij een kinderwens kijken we naar of jouw cyclus doet wat hij hoort te doen: een goede ovulatie, voldoende progesteron en een lichaam dat genoeg bouwstoffen binnenkrijgt.',
      'Een goed werkende cyclus is niet alleen belangrijk om zwanger te worden, maar ook voor hoe je je tijdens en na een zwangerschap voelt.',
    ],
    signals: [
      'Een onregelmatige cyclus of een cyclus die uitblijft',
      'Geen duidelijke tekenen van een ovulatie',
      'Een korte tweede cyclushelft of spotting',
      'Net gestopt met anticonceptie en nog geen ritme',
      'Vermoeidheid, cravings of darmklachten naast je kinderwens',
    ],
    causes: [
      'Een ovulatie die uitblijft of zwak is',
      'Te weinig energie, eiwit of micronutriënten binnenkrijgen',
      'Bloedsuikerschommelingen en insulineresistentie',
      'Schildklier en de rol daarvan bij vruchtbaarheid',
      'Langdurige stress en te weinig herstel',
    ],
    traject: { href: '/hormoontraject', label: 'Bekijk het 1:1 Hormoontraject' },
  },
  {
    slug: 'herstel-na-anticonceptie',
    category: 'Hormonen en cyclus',
    title: 'Gestopt met anticonceptie',
    pageTitle: 'Gestopt met de pil of andere anticonceptie',
    seoTitle: 'Herstel na stoppen met de pil',
    seoDescription:
      'Acne, een uitblijvende menstruatie of PMS na het stoppen met de pil. Lees hoe je je cyclus na anticonceptie weer op gang helpt.',
    teaser: 'Je cyclus weer op gang helpen na de pil of het spiraal.',
    intro: [
      'Na het stoppen met anticonceptie moet je lichaam de eigen hormoonproductie weer opbouwen. Bij de een gaat dat vlot, bij de ander komt de cyclus moeizaam terug.',
      'In die periode kun je je lichaam gericht ondersteunen, zodat je cyclus zich sneller herstelt.',
    ],
    signals: [
      'Een menstruatie die weken of maanden wegblijft',
      'Acne of een onrustige huid na het stoppen',
      'Haaruitval of dunner wordend haar',
      'PMS of stemmingswisselingen die nieuw zijn',
      'Een onregelmatige of erg lange cyclus',
    ],
    causes: [
      'Een ovulatie die nog niet op gang komt',
      'Tekorten die tijdens pilgebruik zijn ontstaan, zoals zink en B-vitaminen',
      'Bloedsuikerschommelingen en verhoogde androgenen',
      'Darmflora en de afvoer van hormonen',
      'Stress en te weinig herstel in deze fase',
    ],
    traject: { href: '/hormoontraject', label: 'Bekijk het 1:1 Hormoontraject' },
  },
  {
    slug: 'overgang',
    category: 'Hormonen en cyclus',
    title: 'Klachten rondom de overgang of menopauze',
    pageTitle: 'Klachten rondom de overgang',
    seoTitle: 'Overgangsklachten: herkennen en aanpak',
    seoDescription:
      'Opvliegers, slaapproblemen, stemmingswisselingen of gewichtstoename in de overgang. Lees hoe je klachten herkent en hoe ik je begeleid.',
    teaser: 'Opvliegers, slechter slapen of jezelf niet meer herkennen.',
    intro: [
      'De overgang begint vaak jaren voor je laatste menstruatie. In die periode wisselen je hormonen sterker, waardoor klachten kunnen ontstaan die je niet altijd meteen aan de overgang koppelt.',
      'Deze fase is niet iets om door te bijten. Met voeding, leefstijl en gerichte ondersteuning valt er veel te verzachten.',
    ],
    signals: [
      'Opvliegers of nachtelijk transpireren',
      'Slechter in- of doorslapen',
      'Stemmingswisselingen, onrust of kort lontje',
      'Gewichtstoename rond je buik zonder dat je anders eet',
      'Minder energie, vergeetachtigheid of brain fog',
    ],
    causes: [
      'Dalend oestrogeen en progesteron',
      'Bloedsuikerschommelingen die opvliegers versterken',
      'Verhoogde stressbelasting en minder herstel',
      'Schildklier die in deze fase minder meebeweegt',
      'Veranderende behoefte aan eiwitten en voedingsstoffen',
    ],
    traject: { href: '/hormoontraject', label: 'Bekijk het 1:1 Hormoontraject' },
  },

  {
    slug: 'pms',
    category: 'Hormonen en cyclus',
    title: 'Veel last van PMS',
    pageTitle: 'PMS en stemmingswisselingen',
    seoTitle: 'PMS herkennen en aanpakken',
    seoDescription:
      'PMS met stemmingswisselingen, prikkelbaarheid of somberheid voor je menstruatie? Lees hoe je het herkent en wat er achter kan zitten.',
    teaser: 'De dagen voor je menstruatie voel je jezelf niet meer.',
    intro: [
      'Bij PMS veranderen je klachten mee met je cyclus. De week voor je menstruatie voel je je somber, prikkelbaar of emotioneel en zodra je menstruatie begint, valt dat gevoel weg.',
      'Dat patroon is juist waardevolle informatie. Het vertelt iets over hoe je lichaam omgaat met de hormonale wisselingen in de tweede helft van je cyclus.',
    ],
    signals: [
      'Stemmingswisselingen of een kort lontje voor je menstruatie',
      'Somberheid, onrust of huilerigheid die steeds terugkomt',
      'Gespannen of pijnlijke borsten',
      'Vocht vasthouden, een opgeblazen gevoel of trek in zoet',
      'Slechter slapen in de dagen voor je menstruatie',
    ],
    causes: [
      'Te weinig progesteron ten opzichte van oestrogeen',
      'Bloedsuikerschommelingen die je stemming versterken',
      'Langdurige stress en onvoldoende herstel',
      'Tekorten die je aanmaak van neurotransmitters beïnvloeden',
      'De rol van je darmen bij het afvoeren van hormonen',
    ],
    traject: { href: '/hormoontraject', label: 'Bekijk het 1:1 Hormoontraject' },
  },
  {
    slug: 'pcos-pmos',
    category: 'Hormonen en cyclus',
    title: 'PCOS/ PMOS',
    pageTitle: 'PCOS (PMOS)',
    seoTitle: 'PCOS en PMOS: herkennen en aanpak',
    seoDescription:
      'PCOS of PMOS met een onregelmatige cyclus, acne, haargroei of gewichtstoename? Lees hoe je het herkent en hoe begeleiding eruitziet.',
    teaser: 'Een onregelmatige cyclus, acne of haargroei die bij PCOS kan horen.',
    intro: [
      'PCOS, ook wel PMOS genoemd, is een verzameling klachten die vaak samenhangt met je bloedsuiker, hormonen en ontstekingsgevoeligheid. Geen twee vrouwen met PCOS hebben precies hetzelfde beeld.',
      'Daarom werk ik niet met een standaardaanpak, maar kijk ik welke factoren bij jou de grootste rol spelen.',
    ],
    signals: [
      'Een onregelmatige cyclus of een menstruatie die wegblijft',
      'Acne, vette huid of overmatige haargroei',
      'Haaruitval op het hoofd',
      'Moeite met afvallen of juist snel in gewicht toenemen',
      'Cravings, energiedips en trek in zoet',
    ],
    causes: [
      'Insulineresistentie en bloedsuikerschommelingen',
      'Verhoogde androgenen zoals testosteron',
      'Laaggradige ontstekingen',
      'Stress en cortisol die je cyclus beïnvloeden',
      'Darmgezondheid en tekorten aan voedingsstoffen',
    ],
    traject: { href: '/hormoontraject', label: 'Bekijk het 1:1 Hormoontraject' },
  },
  {
    slug: 'pds',
    category: 'Darmen en spijsvertering',
    title: 'Prikkelbare darm (PDS)',
    pageTitle: 'PDS (prikkelbare darm syndroom)',
    seoTitle: 'PDS: prikkelbare darm aanpakken',
    seoDescription:
      'De diagnose PDS betekent niet dat je ermee moet leren leven. Lees hoe je klachten herkent en waar we bij een prikkelbare darm naar kijken.',
    teaser: 'De diagnose prikkelbare darm, met wisselende klachten.',
    intro: [
      'PDS is een diagnose die gesteld wordt als andere oorzaken zijn uitgesloten. Het zegt vooral dat je darm overgevoelig reageert, niet waarom dat zo is.',
      'Juist die waarom-vraag is waar ik naar kijk: wat maakt jouw darm op dit moment zo prikkelbaar?',
    ],
    signals: [
      'Buikpijn of krampen die komen en gaan',
      'Wisselende ontlasting, diarree of verstopping',
      'Een opgeblazen buik die in de loop van de dag erger wordt',
      'Klachten die toenemen bij stress of drukke periodes',
      'Steeds minder voedingsmiddelen durven eten',
    ],
    causes: [
      'Dysbiose of bacteriële overgroei in de dunne darm',
      'Onvoldoende maagzuur of spijsverteringsenzymen',
      'Een overgevoelig darm-brein-systeem bij stress',
      'Voedselintoleranties of gevoeligheid voor vezels',
      'De samenhang met je cyclus en hormonen',
    ],
    traject: { href: '/darmtraject', label: 'Bekijk het 1:1 Darmtraject' },
  },
  {
    slug: 'endometriose',
    category: 'Hormonen en cyclus',
    title: 'Endometriose',
    pageTitle: 'Endometriose en adenomyose',
    seoTitle: 'Endometriose: voeding en leefstijl',
    seoDescription:
      'Bij endometriose of adenomyose kunnen voeding en leefstijl pijn en ontsteking verzachten. Lees waar we samen naar kijken.',
    teaser: 'Heftige pijn en ontsteking rondom je cyclus.',
    intro: [
      'Bij endometriose en adenomyose is pijn niet iets wat tussen je oren zit. Er is sprake van ontstekingsactiviteit die veel van je lichaam vraagt.',
      'Voeding en leefstijl nemen de aandoening niet weg, maar kunnen wel invloed hebben op ontstekingsgevoeligheid, hormoonafvoer en je energie.',
    ],
    signals: [
      'Heftige menstruatiepijn, soms ook buiten je menstruatie',
      'Pijn bij gemeenschap of bij ontlasting',
      'Darmklachten rondom je menstruatie',
      'Extreme vermoeidheid of ziek voelen tijdens je cyclus',
      'Hevig bloedverlies of stolsels',
    ],
    causes: [
      'Laaggradige ontstekingen en ontstekingsgevoeligheid',
      'De afvoer van oestrogeen via lever en darmen',
      'Darmgezondheid en de wisselwerking met je immuunsysteem',
      'Tekorten aan bijvoorbeeld magnesium, omega 3 of vitamine D',
      'Stress en een verstoord herstelvermogen',
    ],
    traject: { href: '/hormoontraject', label: 'Bekijk het 1:1 Hormoontraject' },
  },
  {
    slug: 'winderigheid', category: 'Darmen en spijsvertering', title: 'Veel last van winderigheid',
    pageTitle: 'Veel last van winderigheid', seoTitle: 'Winderigheid: oorzaken en aanpak',
    seoDescription: 'Veel last van winderigheid of een borrelende buik? Lees hoe je dit herkent, wat er achter kan zitten en hoe ik je hierin begeleid.',
    teaser: 'Veel lucht, een borrelende buik of ongemak na het eten.',
    intro: ['Af en toe winderigheid is normaal. Heb je er dagelijks veel last van of pas je jouw dag erop aan, dan kan dat wijzen op een spijsvertering die niet optimaal verloopt.', 'We kijken naar wat je eet, hoe je verteert en welke rol je darmflora en stress hierbij spelen.'],
    signals: ['Veel lucht na maaltijden', 'Een borrelende of gespannen buik', 'Klachten bij specifieke voedingsmiddelen', 'Winderigheid samen met buikpijn of wisselende ontlasting'],
    causes: ['Onvolledige vertering van voeding', 'Een verstoorde balans in je darmflora', 'Te snel eten, stress of onvoldoende kauwen', 'Voedselintoleranties of gevoeligheid voor bepaalde vezels'],
    traject: { href: '/darmtraject', label: 'Bekijk het 1:1 Darmtraject' },
  },
  {
    slug: 'obstipatie', category: 'Darmen en spijsvertering', title: 'Vaak obstipatie',
    pageTitle: 'Obstipatie', seoTitle: 'Obstipatie: oorzaken en aanpak',
    seoDescription: 'Vaak verstopt, hard moeten persen of dagen zonder ontlasting? Lees waar obstipatie vandaan kan komen en hoe ik je hierin begeleid.',
    teaser: 'Ontlasting die te weinig of te hard komt, of dagenlang uitblijft.',
    intro: ['Je ontlasting vertelt veel over hoe je spijsvertering werkt. Verstopping is een signaal om serieus te nemen.', 'In plaats van alleen het symptoom te onderdrukken, kijken we naar wat jouw darmen nodig hebben om weer rustiger te functioneren.'],
    signals: ['Minder dan drie keer per week ontlasting', 'Harde ontlasting of veel moeten persen', 'Een opgeblazen gevoel door verstopping', 'Een onvolledig geëvacueerd gevoel na de wc'],
    causes: ['Vocht, vezels en beweging', 'De balans van je darmflora', 'Magnesium en je schildklier', 'Stress, hormonen en medicatiegebruik'],
    traject: { href: '/darmtraject', label: 'Bekijk het 1:1 Darmtraject' },
  },
  {
    slug: 'diarree', category: 'Darmen en spijsvertering', title: 'Regelmatig diarree',
    pageTitle: 'Diarree', seoTitle: 'Diarree: waar komt het vandaan',
    seoDescription: 'Regelmatig dunne ontlasting of plotselinge aandrang? Lees wat diarree kan vertellen over je darmen en hoe ik je hierin begeleid.',
    teaser: 'Dunne ontlasting, aandrang of een toilet dat je niet uit het oog verliest.',
    intro: ['Je ontlasting vertelt veel over hoe je spijsvertering werkt. Regelmatig diarree is een signaal om serieus te nemen.', 'In plaats van alleen het symptoom te onderdrukken, kijken we naar wat jouw darmen nodig hebben om weer rustiger te functioneren.'],
    signals: ['Meerdere keren per dag dunne ontlasting', 'Plotselinge aandrang na het eten', 'Haast om op tijd bij een toilet te zijn', 'Diarree die terugkomt bij stress of bepaalde voeding'],
    causes: ['Een versnelde darmwerking', 'De balans van je darmflora', 'Galzouten en vetvertering', 'Stress, hormonen en voedselintoleranties'],
    traject: { href: '/darmtraject', label: 'Bekijk het 1:1 Darmtraject' },
  },
  {
    slug: 'maagzuur-en-verteringsklachten', category: 'Darmen en spijsvertering', title: 'Maagzuur of andere verteringsklachten',
    pageTitle: 'Maagzuur en verteringsklachten', seoTitle: 'Maagzuur en verteringsklachten',
    seoDescription: 'Last van maagzuur, oprispingen of een zwaar gevoel na het eten? Lees wat er achter kan zitten en hoe ik je hierin begeleid.',
    teaser: 'Maagzuur, oprispingen of een zwaar gevoel na het eten.',
    intro: ['Maagzuur en een zwaar gevoel na het eten kunnen betekenen dat je voeding niet soepel wordt verteerd. Dat kan verderop in je darmen opnieuw klachten geven.', 'We brengen daarom de hele route van je spijsvertering in beeld.'],
    signals: ['Een branderig gevoel achter je borstbeen', 'Oprispingen of veel boeren', 'Snel vol zitten', 'Misselijkheid of zwaar gevoel na maaltijden'],
    causes: ['De aanmaak van maagzuur en verteringsenzymen', 'Eettempo, portiegrootte en timing', 'Stress en spanning rond maaltijden', 'Voedingsmiddelen die jouw klachten uitlokken'],
    traject: { href: '/darmtraject', label: 'Bekijk het 1:1 Darmtraject' },
  },
  {
    slug: 'voedselintoleranties', category: 'Darmen en spijsvertering', title: 'Voedselintoleranties of het vermoeden daarvan',
    pageTitle: 'Voedselintoleranties', seoTitle: 'Voedselintoleranties herkennen',
    seoDescription: 'Vermoed je een voedselintolerantie? Lees welke signalen daarbij passen en waarom we breder kijken dan alleen voeding weglaten.',
    teaser: 'Klachten na voeding zonder precies te weten waarop je reageert.',
    intro: ['Wanneer je na het eten steeds klachten krijgt, kan het voelen alsof je op alles reageert. Steeds meer voeding schrappen geeft dan niet altijd rust.', 'Ik kijk niet alleen naar het voedingsmiddel, maar ook naar je vertering, darmwand, darmflora en totale belasting.'],
    signals: ['Een opgeblazen buik of buikpijn na voeding', 'Winderigheid of wisselende ontlasting', 'Huidklachten, hoofdpijn of vermoeidheid na het eten', 'Een steeds kleiner wordende lijst met veilige voeding'],
    causes: ['Onvoldoende vertering', 'Een verstoorde darmflora of darmbarrière', 'De hoeveelheid en combinatie van voedingsmiddelen', 'Stress en een gevoelig darm-brein-systeem'],
    traject: { href: '/darmtraject', label: 'Bekijk het 1:1 Darmtraject' },
  },
  {
    slug: 'energiedips', category: 'Energie en bloedsuiker', title: 'Energiedips gedurende de dag',
    pageTitle: 'Energiedips gedurende de dag', seoTitle: 'Energiedips gedurende de dag',
    seoDescription: 'Heb je dagelijks energiedips, vooral na het eten of in de middag? Lees wat dit kan zeggen over je bloedsuiker en herstel.',
    teaser: 'Na een maaltijd of in de middag zakt je energie plotseling weg.',
    intro: ['Een dagelijkse energiedip is niet iets wat je alleen met koffie hoeft op te lossen. Het tijdstip en de omstandigheden geven vaak duidelijke aanwijzingen.', 'We kijken onder andere naar je maaltijden, bloedsuiker, slaap en stressbelasting.'],
    signals: ['Een dip na ontbijt of lunch', 'In de middag nauwelijks vooruitkomen', 'Koffie of zoet nodig hebben om door te gaan', 'Prikkelbaar of wazig worden als je te laat eet'],
    causes: ['De opbouw en timing van je maaltijden', 'Bloedsuikerschommelingen', 'Slaapkwaliteit en dagritme', 'Tekorten, stress en hormonale factoren'],
    traject: { href: '/bloedsuikertraject', label: 'Bekijk het 1:1 Bloedsuikertraject' },
  },
  {
    slug: 'brain-fog', category: 'Energie en bloedsuiker', title: 'Brain fog en moeite met focussen',
    pageTitle: 'Brain fog en moeite met focussen', seoTitle: 'Brain fog en concentratieproblemen',
    seoDescription: 'Een mistig hoofd of moeite met focussen? Lees hoe brain fog kan samenhangen met bloedsuiker, darmen, hormonen en slaap.',
    teaser: 'Een mistig hoofd, vergeetachtigheid en moeite om scherp te blijven.',
    intro: ['Brain fog kan voelen alsof je hoofd niet meewerkt. Je zoekt naar woorden, vergeet afspraken of hebt moeite om een taak af te maken.', 'Dat staat vaak niet los van je energie, slaap, darmen en hormonen.'],
    signals: ['Moeite om je aandacht erbij te houden', 'Woorden of afspraken vergeten', 'Een wazig gevoel na maaltijden', 'Minder scherp zijn rond je menstruatie of overgang'],
    causes: ['Bloedsuikerschommelingen', 'Onvoldoende of onrustige slaap', 'Darmklachten en ontstekingsgevoeligheid', 'Hormonale veranderingen en tekorten'],
    traject: { href: '/bloedsuikertraject', label: 'Bekijk het 1:1 Bloedsuikertraject' },
  },
  {
    slug: 'bloedsuikerschommelingen', category: 'Energie en bloedsuiker', title: 'Schommelingen in je bloedsuikerspiegel',
    pageTitle: 'Bloedsuikerschommelingen', seoTitle: 'Bloedsuikerschommelingen herkennen',
    seoDescription: 'Trillerig, duizelig of hartkloppingen als je te lang niet eet? Lees hoe bloedsuikerschommelingen ontstaan en waar we naar kijken.',
    teaser: 'Dips, trillerigheid of hartkloppingen wanneer je te lang niet gegeten hebt.',
    intro: ['Je bloedsuiker beweegt de hele dag, maar grote pieken en dalen kunnen je energie, stemming, slaap en hormonen beïnvloeden.', 'Met de juiste opbouw van maaltijden en leefstijl kun je vaak veel meer rust creëren.'],
    signals: ['Trillerig, slap of prikkelbaar worden', 'Zweten of een bonzend hart als je te lang niet eet', 'Een dip kort na het eten', 'Nachtelijk wakker worden of onrustig slapen'],
    causes: ['Te weinig eiwit, vet of vezels in maaltijden', 'Onregelmatig eten of maaltijden overslaan', 'Stress en te weinig slaap', 'Insulineresistentie en hormonale factoren'],
    traject: { href: '/bloedsuikertraject', label: 'Bekijk het 1:1 Bloedsuikertraject' },
  },
  {
    slug: 'acne', category: 'Huid en haar', title: 'Acne ',
    pageTitle: '(Adult) Acne', seoTitle: 'Terugkerende acne en hormonen',
    seoDescription: 'Acne die steeds terugkomt kan samenhangen met hormonen, bloedsuiker en darmen. Lees hoe ik naar de mogelijke oorzaken kijk.',
    teaser: 'Puistjes die blijven terugkomen, vaak rond kin of kaaklijn.',
    intro: ['Terugkerende acne is vaak meer dan alleen een huidprobleem. De plek, timing en combinatie met andere klachten kunnen waardevolle signalen geven.', 'We kijken naar hormonen, bloedsuiker, darmen, voeding en voedingsstoffen.'],
    signals: ['Acne rond kin, kaaklijn of hals', 'Opvlammingen rondom je menstruatie', 'Een vette én gevoelige huid', 'Acne samen met een onregelmatige cyclus'],
    causes: ['Androgenen en hormonale schommelingen', 'Bloedsuiker en insuline', 'Darmgezondheid en ontstekingsgevoeligheid', 'Tekorten en persoonlijke voedingstriggers'],
    traject: { href: '/hormoontraject', label: 'Bekijk het 1:1 Hormoontraject' },
  },
  {
    slug: 'droge-gevoelige-huid', category: 'Huid en haar', title: 'Een droge of gevoelige huid',
    pageTitle: 'Een droge of gevoelige huid', seoTitle: 'Droge of gevoelige huid begrijpen',
    seoDescription: 'Een droge, trekkerige of snel reagerende huid? Lees hoe huidklachten kunnen samenhangen met voeding, darmen en hormonen.',
    teaser: 'Een huid die trekt, schilfert of snel op producten en voeding reageert.',
    intro: ['Een droge of gevoelige huid kan een signaal zijn dat de huidbarrière ondersteuning nodig heeft. Ook factoren van binnenuit kunnen meespelen.', 'Daarom kijken we verder dan alleen huidverzorging.'],
    signals: ['Een trekkerige of schilferige huid', 'Snel rood of geïrriteerd raken', 'Reageren op veel verzorgingsproducten', 'Klachten die wisselen met seizoen of cyclus'],
    causes: ['Voldoende vetzuren, eiwitten en vocht', 'Darmgezondheid en opname van voedingsstoffen', 'Hormonale veranderingen', 'Persoonlijke triggers en ontstekingsgevoeligheid'],
    traject: { href: '/hormoontraject', label: 'Bekijk het 1:1 Hormoontraject' },
  },
  {
    slug: 'eczeem', category: 'Huid en haar', title: 'Eczeem of rode, geïrriteerde plekken',
    pageTitle: 'Eczeem en geïrriteerde huid', seoTitle: 'Eczeem en geïrriteerde huid',
    seoDescription: 'Eczeem of rode, geïrriteerde plekken kunnen van binnenuit worden beïnvloed. Lees waar we bij terugkerende huidklachten naar kijken.',
    teaser: 'Jeukende, rode of geïrriteerde plekken die terug blijven komen.',
    intro: ['Eczeem kan veel invloed hebben op je dagelijks leven en slaap. De huidreactie staat vaak in verbinding met je immuunsysteem en darmgezondheid.', 'We zoeken rustig uit welke factoren jouw huid mogelijk extra belasten.'],
    signals: ['Droge, jeukende of schilferige plekken', 'Roodheid die regelmatig opvlamt', 'Krabben en slechter slapen', 'Reacties na stress, voeding of huidcontact'],
    causes: ['De huid- en darmbarrière', 'Ontstekingsgevoeligheid en immuunsysteem', 'Voeding en persoonlijke triggers', 'Stress, slaap en voedingsstoffen'],
    traject: { href: '/darmtraject', label: 'Bekijk het 1:1 Darmtraject' },
  },
  {
    slug: 'haaruitval', category: 'Huid en haar', title: 'Haaruitval',
    pageTitle: 'Haaruitval', seoTitle: 'Haaruitval bij vrouwen begrijpen',
    seoDescription: 'Last van haaruitval of dunner haar? Lees welke rol hormonen, schildklier, stress en voedingsstoffen kunnen spelen.',
    teaser: 'Meer haar verliezen dan normaal of merken dat je haar dunner wordt.',
    intro: ['Haaruitval is vaak een vertraagd signaal: wat je nu ziet, kan maanden eerder zijn begonnen. Dat maakt het belangrijk om naar de tijdlijn te kijken.', 'We nemen hormonen, schildklier, stress, voeding en mogelijke tekorten mee.'],
    signals: ['Meer haren in borstel, douche of kleding', 'Een bredere scheiding of dunnere staart', 'Haarverlies na stress, ziekte of zwangerschap', 'Haaruitval samen met vermoeidheid of cyclusklachten'],
    causes: ['IJzer, zink, vitamine D, B12 en eiwitten', 'Schildklier en hormonale veranderingen', 'Langdurige stress of herstel na ziekte', 'Darmgezondheid en opname van voedingsstoffen'],
    traject: { href: '/hormoontraject', label: 'Bekijk het 1:1 Hormoontraject' },
  },

];

export const findComplaint = (slug: string) => complaints.find((item) => item.slug === slug);

export const findComplaintCategory = (slug: string) =>
  complaintCategories.find((category) => category.slug === slug);

export const complaintsByCategory = complaintCategories.map((category) => ({
  ...category,
  items: complaints.filter(
    (item) => item.category === category.name || item.alsoIn?.includes(category.name)
  ),
}));

/**
 * Subgroepen binnen een categorie, voor de indeling op
 * /klachten/onderdeel/{slug}. Alleen bedoeld om lange lijsten leesbaar te
 * houden: met dertien tegels achter elkaar is er geen houvast meer.
 *
 * Een categorie zonder entry blijft een platte lijst; bij vier tegels voegt
 * groeperen niets toe. Klachten die hier niet in een groep staan verdwijnen
 * niet: complaintsInGroups zet ze achteraan in een blok zonder kop.
 */
export const complaintGroups: Record<string, { name: string; slugs: string[] }[]> = {
  'hormonen-en-cyclus': [
    {
      name: 'Je cyclus',
      slugs: ['menstruatieklachten', 'onregelmatige-cyclus', 'pms', 'stemmingswisselingen'],
    },
    {
      name: 'Hormonen uit balans',
      slugs: [
        'oestrogeendominantie',
        'progesterontekort',
        'schildklierdisbalans',
        'pcos-pmos',
        'endometriose',
        'insulineresistentie',
      ],
    },
    {
      name: 'Levensfase',
      slugs: ['kinderwens', 'herstel-na-anticonceptie', 'overgang'],
    },
  ],
  'darmen-en-spijsvertering': [
    {
      name: 'Buik en vertering',
      slugs: [
        'opgeblazen-buik',
        'winderigheid',
        'maagzuur-en-verteringsklachten',
        'voedselintoleranties',
      ],
    },
    {
      name: 'Ontlasting en darmwerking',
      slugs: ['darmklachten', 'pds', 'obstipatie', 'diarree'],
    },
  ],
  'energie-en-bloedsuiker': [
    {
      name: 'Energie door de dag',
      slugs: ['vermoeidheid', 'energiedips', 'brain-fog'],
    },
    {
      name: 'Bloedsuiker',
      slugs: ['cravings-en-bloedsuiker', 'bloedsuikerschommelingen', 'insulineresistentie'],
    },
    {
      name: 'Stress en slaap',
      slugs: ['slaapproblemen', 'stress-en-herstel', 'cortisol-uit-balans'],
    },
  ],
};

/**
 * De klachten van een categorie in groepen, in de volgorde van
 * complaintGroups. Geeft null terug als de categorie niet gegroepeerd is.
 */
export const complaintsInGroups = (categorySlug: string) => {
  const groepen = complaintGroups[categorySlug];
  const categorie = complaintsByCategory.find((item) => item.slug === categorySlug);
  if (!groepen || !categorie) return null;

  const gebruikt = new Set<string>();
  const uit = groepen.map((groep) => {
    const items = groep.slugs
      .map((slug) => categorie.items.find((item) => item.slug === slug))
      .filter((item): item is Complaint => Boolean(item));
    items.forEach((item) => gebruikt.add(item.slug));
    return { name: groep.name, items };
  });

  // Vangnet: een klacht die aan de categorie is toegevoegd maar nog in geen
  // enkele groep staat, komt achteraan in een blok zonder kop terecht.
  const rest = categorie.items.filter((item) => !gebruikt.has(item.slug));
  if (rest.length) uit.push({ name: '', items: rest });

  return uit.filter((groep) => groep.items.length > 0);
};
