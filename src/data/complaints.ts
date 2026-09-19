/**
 * Klachten die op /klachten als klikbare blokken staan.
 * Elke klacht heeft een eigen pagina: /klachten/{slug}
 */

export interface Complaint {
  slug: string;
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
    title: 'Menstruatieklachten',
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
    slug: 'pms',
    title: 'PMS',
    pageTitle: 'PMS en stemmingswisselingen',
    seoTitle: 'PMS herkennen en aanpakken',
    seoDescription:
      'PMS met stemmingswisselingen, prikkelbaarheid of somberheid voor je menstruatie? Lees hoe je het herkent en wat er achter kan zitten.',
    teaser: 'De dagen voor je menstruatie voel je jezelf niet meer.',
    intro: [
      'Bij PMS veranderen je klachten mee met je cyclus. De week voor je menstruatie voel je je somber, prikkelbaar of emotioneel, en zodra je menstruatie begint, valt dat gevoel weg.',
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
    slug: 'onregelmatige-cyclus',
    title: 'Onregelmatige cyclus',
    pageTitle: 'Een onregelmatige cyclus',
    seoTitle: 'Onregelmatige cyclus: wat betekent dat?',
    seoDescription:
      'Een cyclus die wisselt, uitblijft of niet te voorspellen is. Lees hoe je dit herkent, wat het kan betekenen en hoe ik je begeleid.',
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
    slug: 'pcos-pmos',
    title: 'PCOS / PMOS',
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
    slug: 'overgang',
    title: 'Overgangsklachten',
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
    slug: 'opgeblazen-buik',
    title: 'Opgeblazen buik',
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
    title: 'Darmklachten',
    pageTitle: 'Darmklachten en PDS',
    seoTitle: 'Darmklachten en PDS herkennen',
    seoDescription:
      'Buikpijn, wisselende ontlasting, verstopping of PDS-achtige klachten. Lees hoe je darmklachten herkent en hoe begeleiding werkt.',
    teaser: 'Buikpijn, verstopping, diarree of wisselende ontlasting.',
    intro: [
      'Darmklachten bepalen vaak meer van je dag dan je aan de buitenkant laat zien. Je let op wat je eet, houdt rekening met waar een toilet is en toch blijven de klachten komen.',
      'Vaak is er niet één schuldig voedingsmiddel, maar een combinatie van factoren in je spijsvertering, darmflora en dagelijkse belasting.',
    ],
    signals: [
      'Buikpijn of krampen, ook los van het eten',
      'Verstopping, diarree of wisselende ontlasting',
      'De diagnose PDS of prikkelbare darm',
      'Maagzuur, misselijkheid of snel een vol gevoel',
      'Klachten die toenemen bij stress of drukke periodes',
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
    title: 'Vermoeidheid',
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
    title: 'Cravings & bloedsuiker',
    pageTitle: 'Cravings en bloedsuikerschommelingen',
    seoTitle: 'Cravings en bloedsuikerschommelingen',
    seoDescription:
      'Steeds trek in zoet, energiedips of hangry worden? Lees hoe je bloedsuikerschommelingen herkent en wat je eraan kunt doen.',
    teaser: 'Steeds trek in zoet, energiedips of hangry worden.',
    intro: [
      'Cravings zijn zelden een kwestie van wilskracht. Meestal reageert je lichaam op schommelingen in je bloedsuiker, waardoor je hersenen om snelle energie vragen.',
      'Zodra je bloedsuiker stabieler wordt, merk je dat vaak terug in je energie, stemming, slaap en hormonen.',
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
    title: 'Slaapproblemen',
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
    slug: 'huid-en-haar',
    title: 'Huid- & haarklachten',
    pageTitle: 'Huid- en haarklachten',
    seoTitle: 'Acne, huidklachten en haaruitval',
    seoDescription:
      'Acne, een onrustige huid of haaruitval kunnen samenhangen met hormonen en darmen. Lees hoe je dit herkent en hoe ik je begeleid.',
    teaser: 'Acne, een onrustige huid of haar dat dunner wordt.',
    intro: [
      'Je huid en haar geven vaak als eerste signalen dat er vanbinnen iets speelt. Crèmes en shampoos helpen tijdelijk, maar raken zelden de onderliggende oorzaak.',
      'Daarom kijken we naar de samenhang tussen je hormonen, darmen, voedingsstoffen en ontstekingsgevoeligheid.',
    ],
    signals: [
      'Acne die steeds terugkomt, vaak rond je kin of kaaklijn',
      'Huidklachten die verergeren rondom je menstruatie',
      'Eczeem, rosacea of een geïrriteerde huid',
      'Een droge, gevoelige of dunne huid',
      'Haaruitval of haar dat dunner wordt',
    ],
    causes: [
      'Verhoogde androgenen of oestrogeendominantie',
      'Darmklachten en een verstoorde darmflora',
      'Bloedsuikerschommelingen en ontstekingsgevoeligheid',
      'Tekorten aan zink, ijzer, vitamine D of eiwit',
      'Een schildklier die minder goed meewerkt',
    ],
    traject: { href: '/hormoontraject', label: 'Bekijk het 1:1 Hormoontraject' },
  },
  {
    slug: 'stress-en-herstel',
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
];

export const findComplaint = (slug: string) => complaints.find((item) => item.slug === slug);
