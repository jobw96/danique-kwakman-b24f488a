interface RecipeExtra {
  heading: string;
  paragraphs: string[];
  relatedSlug: string;
  relatedText: string;
}

/** Aanvullende redactionele tekst; de aangeleverde recepten blijven onaangeroerd. */
export const recipeExtras: Record<string, RecipeExtra> = {
  'homemade-chocolade-granola': {
    heading: 'Zelf chocolade granola maken voor je ontbijt',
    paragraphs: [
      'Je ontbijt mag meer zijn dan alleen iets om je maag te vullen. Havermout, noten en zaden leveren vezels en de noten en zaden bevatten ook vetten. Dat zijn voedingsstoffen die je lijf dagelijks nodig heeft. Deze chocolade granola kun je combineren met yoghurt om ook een eiwitbron aan je ontbijt toe te voegen.',
      'Voedzaam eten hoeft niet te betekenen dat je elke ochtend opnieuw moet bedenken wat je gaat maken. Een voorraadje helpt je om ook op drukke dagen goed voor jezelf te zorgen. Kijk daarbij niet alleen naar één ingrediënt, maar naar je hele ontbijt en of je er voldoende aan hebt.',
    ],
    relatedSlug: 'frambozen-chiapudding', relatedText: 'Lekker erbij: frambozen chiapudding',
  },
  'homemade-gembershotjes': {
    heading: 'Gembershotjes met appel en citroen',
    paragraphs: [
      'Een gembershotje kan onderdeel zijn van je ochtend, maar je lijf heeft meer nodig dan een shotje alleen. Denk aan voldoende eten, drinken, slaap en rust. Juist die dagelijkse basis neem ik mee wanneer we kijken naar je hormonen en darmen.',
      'Merk je dat een pittig of zuur drankje niet prettig valt op je maag? Neem dat signaal serieus. Je hoeft iets niet te blijven nemen omdat het als gezond wordt gezien. Wat voor een ander fijn werkt, hoeft niet te passen bij jouw buik.',
    ],
    relatedSlug: 'immuunboost-blokjes', relatedText: 'Ook met gember: immuunboost blokjes',
  },
  'eimuffins': {
    heading: 'Eimuffins voor drukke dagen',
    paragraphs: [
      'Eiwitten zijn bouwstoffen voor je lichaam. Met de eieren en kipfilet bevatten deze eimuffins een eiwitbron en met de groenten voeg je ook vezels toe. Fijn als aanvulling op je ontbijt of lunch, zeker wanneer je merkt dat je maaltijd anders vooral uit brood of iets zoets bestaat.',
      'Op drukke dagen schiet eten er soms bij in. Iets klaar hebben staan maakt het makkelijker om niet steeds je eigen eetmoment uit te stellen. Hoeveel je nodig hebt, verschilt per persoon en per moment. Een kleine snack is niet automatisch een volledige maaltijd.',
    ],
    relatedSlug: 'ontbijt-bordje', relatedText: 'Nog een hartig ontbijt: het ontbijtbordje',
  },
  'chocolade-smoothie': {
    heading: 'Een chocolade smoothie om met een lepel te eten',
    paragraphs: [
      'Trek in zoet is niet iets waar je tegen hoeft te vechten. Zeker als je regelmatig cravings hebt, is het goed om ook te kijken of je overdag voldoende eet. Deze chocolade smoothie combineert fruit met yoghurt, amandelpasta en lijnzaad, in plaats van alleen fruit te gebruiken.',
      'Je hoeft je eten niet perfect te doen om goed voor je lijf te zorgen. Neem de tijd voor je eetmoment en merk op of je daarna voldaan bent. Blijf je steeds trek houden of merk je veel energiedips? Dan kijken we verder dan alleen de snack die je kiest.',
    ],
    relatedSlug: 'eiwitrijke-chocolade-pannenkoeken', relatedText: 'Ook met cacao: chocolade pannenkoeken',
  },
  'mango-chiapudding': {
    heading: 'Mango chiapudding als ontbijt om voor te bereiden',
    paragraphs: [
      'Chiazaad bevat vezels en Griekse yoghurt levert eiwitten. Door fruit met deze ingrediënten te combineren, kijk je naar de opbouw van je hele ontbijt. Dat is ook hoe ik naar voeding kijk: niet één product dat alles oplost, maar een basis die je lijf dagelijks ondersteunt.',
      'Als je meer vezels gaat eten, hoeft dat niet in één keer. Geef je buik de tijd om te wennen en drink voldoende. Heb je juist meer last van een opgeblazen buik na een vezelrijk ontbijt? Dan is dat een signaal om verder te kijken naar wat bij jouw spijsvertering past.',
    ],
    relatedSlug: 'frambozen-chiapudding', relatedText: 'Probeer ook frambozen chiapudding',
  },
  'shakshuka-feta-tonijn': {
    heading: 'Shakshuka met feta en tonijn als warme maaltijd',
    paragraphs: [
      'Bij een maaltijd kijk ik graag naar de combinatie van eiwitten, vetten en vezels. In deze shakshuka komen de eiwitten onder andere uit de eieren en tonijn. De verschillende groenten voegen vezels toe. Zo is groente niet alleen iets wat je bij het avondeten probeert in te halen.',
      'Je lijf heeft voldoende voeding nodig, ook als je bezig bent met je hormonen of darmklachten. Het gaat niet alleen om wat je weglaat. Juist kijken naar wat je kunt toevoegen en of je genoeg eet, is een belangrijk onderdeel van de basis.',
    ],
    relatedSlug: 'eimuffins', relatedText: 'Ook hartig: eimuffins met groenten',
  },
  'zoete-aardappel-pannenkoekjes': {
    heading: 'Zoete aardappel pannenkoekjes voor een rustig ontbijt',
    paragraphs: [
      'Koolhydraten hoef je niet uit je ontbijt te halen om goed voor je hormonen te zorgen. Je lichaam gebruikt ze als energiebron. Deze pannenkoekjes combineren zoete aardappel en havermout met eieren en amandelpasta. Daarmee kijk je naar meer dan alleen de koolhydraten op je bord.',
      'Ook wat je bij je ontbijt eet, telt mee. Griekse yoghurt als topping voegt bijvoorbeeld eiwitten toe. Merk je dat je snel weer honger hebt? Kijk dan of je ontbijt groot genoeg is en voldoende verschillende voedingsstoffen bevat, in plaats van jezelf te vertellen dat je minder moet eten.',
    ],
    relatedSlug: 'baked-oats-met-frambozen', relatedText: 'Nog een warm ontbijt: baked oats met frambozen',
  },
  'baked-oats-met-frambozen': {
    heading: 'Baked oats met frambozen uit de oven',
    paragraphs: [
      'Havermout en frambozen leveren vezels. Het ei en de notenpasta voegen andere voedingsstoffen toe aan deze baked oats. Zo bestaat je ontbijt niet alleen uit fruit of havermout, maar uit een combinatie van ingrediënten.',
      'Hoe je je voelt na het eten, geeft informatie. Heb je voldoende gegeten of zoek je al snel weer iets? Merk je een dip of voelt je buik onrustig? Daar kun je op letten zonder elke maaltijd te analyseren. Je hoeft niet hetzelfde ontbijt te eten als iemand anders om goed voor jezelf te zorgen.',
    ],
    relatedSlug: 'carrot-cake-overnight-oats', relatedText: 'Liever koud? Carrot cake overnight oats',
  },
  'eiwitrijke-chocolade-pannenkoeken': {
    heading: 'Chocolade pannenkoeken met cottage cheese',
    paragraphs: [
      'Een ontbijt met voldoende eiwitten hoeft geen ingewikkelde maaltijd te zijn. Cottage cheese en eieren leveren in dit recept eiwitten en de havermout voegt vezels toe. Zo kun je ook met pannenkoeken aandacht hebben voor de voedingsstoffen die je lijf nodig heeft.',
      'Goed voor jezelf zorgen betekent niet dat je alle dingen die je lekker vindt moet laten staan. Ik kijk liever hoe je een maaltijd kunt opbouwen dan hoe je steeds meer kunt schrappen. Daarbij blijft belangrijk of je voldoende eet en hoe jouw buik reageert.',
    ],
    relatedSlug: 'zoete-aardappel-pannenkoekjes', relatedText: 'Probeer ook zoete aardappel pannenkoekjes',
  },
  'carrot-cake-overnight-oats': {
    heading: 'Carrot cake overnight oats voor de volgende ochtend',
    paragraphs: [
      'Groente hoeft niet alleen bij je avondeten te horen. Met wortel in je overnight oats voeg je ook bij je ontbijt vezels toe. Havermout, chiazaad en lijnzaad leveren eveneens vezels en met de yoghurt neem je een eiwitbron mee.',
      'Je darmgezondheid draait niet om één ingrediënt dat je iedere dag moet eten. Afwisseling en wat jij goed verdraagt, tellen ook mee. Merk je dat veel vezels tegelijk niet prettig vallen? Dan kijken we naar de hoeveelheid en je spijsvertering, in plaats van je buiksignalen te negeren.',
    ],
    relatedSlug: 'baked-oats-met-frambozen', relatedText: 'Liever warm? Baked oats met frambozen',
  },
  'ontbijt-bordje': {
    heading: 'Een ontbijtbordje met ei, avocado en zuurdesembrood',
    paragraphs: [
      'Dit ontbijtbordje laat zien hoe je verschillende voedingsstoffen samen kunt brengen. Eieren en cottage cheese leveren eiwitten, avocado bevat vetten en fruit en groenten voegen vezels toe. Je hoeft dus niet te kiezen tussen een ontbijt dat lekker is en een ontbijt dat je lijf voedt.',
      'Kimchi is gefermenteerd, maar dat betekent niet dat het voor iedere buik even prettig is. Zeker bij darmklachten blijft jouw reactie belangrijk. Een product hoeft niet op je bord te staan alleen omdat het vaak als goed voor je darmen wordt genoemd.',
    ],
    relatedSlug: 'eimuffins', relatedText: 'Voor onderweg: eimuffins met groenten',
  },
  'frambozen-chiapudding': {
    heading: 'Frambozen chiapudding met een knapperige topping',
    paragraphs: [
      'Met frambozen en chiazaad voeg je vezels toe aan je ontbijt. De Griekse yoghurt levert daarnaast eiwitten. Die combinatie is een praktische manier om niet alleen naar fruit te grijpen, maar ook andere voedingsstoffen mee te nemen.',
      'Een ontbijt voorbereiden kan helpen als je op drukke ochtenden vaak eten overslaat. Het hoeft niet veel tijd te kosten om een basis klaar te hebben staan. Let wel op hoe jouw buik reageert op chiazaad en vezels. Meer is niet automatisch beter voor jou.',
    ],
    relatedSlug: 'homemade-chocolade-granola', relatedText: 'Maak er zelf chocolade granola bij',
  },
  'immuunboost-blokjes': {
    heading: 'Gember-citrusblokjes voor een warme mok',
    paragraphs: [
      'Je weerstand ondersteunen gaat over meer dan één drankje. Voldoende voeding, slaap en rust horen daar ook bij. Deze blokjes zijn een aanvulling op die basis, geen vervanging van een maaltijd of een oplossing voor klachten die blijven terugkomen.',
      'Goed voor je lijf zorgen hoeft niet steeds iets extra’s op je to-dolijst te worden. Een voorraadje kan het makkelijker maken om even een drinkmoment te nemen. Merk je dat gember of citrus niet prettig valt op je maag? Luister dan naar dat signaal.',
    ],
    relatedSlug: 'homemade-gembershotjes', relatedText: 'Liever koud? Maak homemade gembershotjes',
  },
  'rode-bieten-sap': {
    heading: 'Zelf rode bietensap maken met appel en citroen',
    paragraphs: [
      'Een zelfgemaakt sapje kan een aanvulling zijn, maar vervangt niet de groenten en het fruit die je eet. Bij het juicen blijft een deel van de vezels achter. Juist die vezels neem ik mee wanneer we kijken naar je voeding en darmgezondheid.',
      'Als je je hormonen wilt ondersteunen, kijk dan niet alleen naar een drankje. Voldoende eten en de opbouw van je maaltijden zijn onderdeel van de basis. Bij vermoeidheid of klachten rond je menstruatie is het belangrijk om verder te kijken naar wat er speelt, in plaats van dat met één recept te willen oplossen.',
    ],
    relatedSlug: 'homemade-gembershotjes', relatedText: 'Ook zelf maken: gembershotjes met appel en citroen',
  },
  'pepernoten': {
    heading: 'Zelf pepernoten met havermeel bakken',
    paragraphs: [
      'Je hoeft niet alles wat je lekker vindt te laten staan als je aandacht wilt geven aan je hormonen en darmen. Het gaat om je dagelijkse basis, niet om één keer pepernoten eten. Deze variant met havermeel kan daar gewoon een plek in hebben.',
      'Merk je dat je steeds naar iets zoets zoekt? Kijk dan ook of je overdag voldoende eet en hoe je maaltijden zijn opgebouwd. Cravings zijn geen reden om streng voor jezelf te worden. Honing blijft een bron van suiker, ook in een zelfgemaakt recept. Het gaat dus niet om onbeperkt kunnen eten, maar om ruimte voor lekker eten zonder alles als goed of fout te zien.',
    ],
    relatedSlug: 'homemade-chocolade-granola', relatedText: 'Ook met havermout: homemade chocolade granola',
  },
};