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
      'Een pot zelfgemaakte chocolade granola komt op allerlei momenten van pas. De cacao geeft een chocoladesmaak en de noten, pitten en zaden zorgen voor een stevige crunch. Lekker als je graag iets knapperigs bij je yoghurt eet, maar ook als topping op een zacht ontbijt.',
      'Je hoeft niet elke ochtend iets nieuws te maken. Met deze grote pot heb je een topping klaarstaan die je steeds anders kunt combineren. Bij frambozen krijgt je ontbijt iets fris, terwijl mango juist een zoetere combinatie geeft. Zo blijft een eenvoudig ontbijt toch afwisselend.',
    ],
    relatedSlug: 'frambozen-chiapudding', relatedText: 'Lekker erbij: frambozen chiapudding',
  },
  'homemade-gembershotjes': {
    heading: 'Gembershotjes met appel en citroen',
    paragraphs: [
      'Zelf gembershotjes maken hoeft niet ingewikkeld te zijn. In dit recept gebruik je een blender en een zeef, dus een slowjuicer is niet nodig. De appel geeft het sap een zoete smaak, de citroen maakt het fris en de verse gember zorgt voor die herkenbare pittige kick.',
      'Dit is een drankje met een uitgesproken smaak. Het past bij een rustig ontbijt thuis, maar een flesje in de koelkast is ook handig op een drukke ochtend. Zoek je liever iets warms met gember? Dan zijn de immuunboost blokjes een andere manier om gember en citrus te combineren.',
    ],
    relatedSlug: 'immuunboost-blokjes', relatedText: 'Ook met gember: immuunboost blokjes',
  },
  'eimuffins': {
    heading: 'Eimuffins voor drukke dagen',
    paragraphs: [
      'Deze eimuffins zijn een hartige afwisseling op een zoet ontbijt. Eieren vormen de basis en de spinazie, tomaatjes en paprika geven kleur. Met kipfilet erbij maak je kleine muffins die je makkelijk kunt meenemen naar je werk of bij je lunch kunt eten.',
      'Juist op dagen waarop je weinig tijd hebt, is het fijn als er al iets klaarstaat. Je bakt meerdere eimuffins tegelijk en hoeft daardoor niet voor ieder eetmoment opnieuw de keuken in. Liever een ontbijt dat je op een bord samenstelt? Het ontbijtbordje met ei en avocado past daar goed bij.',
    ],
    relatedSlug: 'ontbijt-bordje', relatedText: 'Nog een hartig ontbijt: het ontbijtbordje',
  },
  'chocolade-smoothie': {
    heading: 'Een chocolade smoothie om met een lepel te eten',
    paragraphs: [
      'Banaan en cacao zijn een fijne combinatie als je zin hebt in iets met chocolade. De yoghurt en amandelpasta maken deze smoothie romig. Het is geen dun sapje, maar een smoothie die je in een glas of schaaltje kunt serveren en rustig met een lepel kunt eten.',
      'De plakjes banaan bovenop maken het net wat meer een eetmoment. Deze chocolade smoothie past bij een zoete trek tussendoor zonder dat je iets hoeft te bakken. Houd je van cacao bij je ontbijt? Dan zijn de chocolade pannenkoeken ook een lekkere optie voor een ochtend waarop je wat meer tijd hebt.',
    ],
    relatedSlug: 'eiwitrijke-chocolade-pannenkoeken', relatedText: 'Ook met cacao: chocolade pannenkoeken',
  },
  'mango-chiapudding': {
    heading: 'Mango chiapudding als ontbijt om voor te bereiden',
    paragraphs: [
      'Mango chiapudding is fijn als je graag koud ontbijt en niet meteen in de ochtend wilt koken. Chiazaad neemt vocht op, waardoor de pudding een andere structuur krijgt dan een schaaltje yoghurt. De mangomousse geeft een zachte fruitlaag en de granola zorgt voor iets knapperigs.',
      'Door de basis alvast klaar te zetten, blijft er in de ochtend vooral het afmaken over. Je kunt het ontbijt in een bakje meenemen of thuis in een schaaltje eten. De combinatie met banaan en mango is zoet en fruitig. Liever een frissere variant? Kijk dan eens bij de chiapudding met frambozen.',
    ],
    relatedSlug: 'frambozen-chiapudding', relatedText: 'Probeer ook frambozen chiapudding',
  },
  'shakshuka-feta-tonijn': {
    heading: 'Shakshuka met feta en tonijn als warme maaltijd',
    paragraphs: [
      'Shakshuka is een gerecht waarbij de eieren in een groentemengsel garen. In deze versie vormen tomaat, courgette en paprika de basis. De feta en tonijn komen er aan het einde bij. Zo krijg je een warme maaltijd met verschillende smaken zonder allerlei losse onderdelen te hoeven koken.',
      'Dit recept is voor twee personen en past zowel bij een uitgebreide lunch als bij het avondeten. Met zuurdesembrood erbij kun je ook het groentemengsel op je bord meenemen. Zin in een ander hartig gerecht met ei dat je makkelijk kunt meenemen? Dan zijn de eimuffins een fijne afwisseling.',
    ],
    relatedSlug: 'eimuffins', relatedText: 'Ook hartig: eimuffins met groenten',
  },
  'zoete-aardappel-pannenkoekjes': {
    heading: 'Zoete aardappel pannenkoekjes voor een rustig ontbijt',
    paragraphs: [
      'Zoete aardappel in pannenkoeken klinkt misschien anders dan je gewend bent, maar past goed bij de kaneel en amandelpasta in dit beslag. Samen met de havermout maak je er een ontbijt van dat je op een bord kunt afmaken met je favoriete toppings.',
      'Dit is een recept voor een ochtend waarop je even de tijd neemt om te bakken. Een stapel pannenkoekjes op tafel maakt ontbijten meteen gezellig. Aardbeien en Griekse yoghurt geven een frisse combinatie bij de zoete aardappel. Liever een ontbijt dat de oven voor je doet? Dan zijn baked oats met frambozen ook fijn.',
    ],
    relatedSlug: 'baked-oats-met-frambozen', relatedText: 'Nog een warm ontbijt: baked oats met frambozen',
  },
  'baked-oats-met-frambozen': {
    heading: 'Baked oats met frambozen uit de oven',
    paragraphs: [
      'Baked oats zijn een andere manier om havermout te eten dan als pap. Je maakt dit ontbijt in een ovenschaaltje, waardoor het een warm gerecht wordt dat je met een lepel eet. De banaan geeft zoetheid en de frambozen zorgen voor een frisse smaak tussen de havermout.',
      'Deze versie is voor één persoon. Dat maakt het makkelijk als je alleen ontbijt of niet iedereen thuis hetzelfde wil eten. Terwijl het schaaltje in de oven staat, heb je je handen even vrij. Voor dagen waarop je liever een koud havermoutontbijt klaar hebt staan, zijn overnight oats een andere optie.',
    ],
    relatedSlug: 'carrot-cake-overnight-oats', relatedText: 'Liever koud? Carrot cake overnight oats',
  },
  'eiwitrijke-chocolade-pannenkoeken': {
    heading: 'Chocolade pannenkoeken met cottage cheese',
    paragraphs: [
      'Cottage cheese in pannenkoekenbeslag geeft een andere basis dan een klassiek beslag met alleen meel en melk. In dit recept gaat het samen met eieren, havermout en cacao in de blender. Zo maak je chocolade pannenkoeken zonder de cottage cheese los op je bord te hoeven eten.',
      'Het recept is voor twee personen en past bij een ontbijt samen. De aardbeien bovenop geven een frisse tegenhanger bij de cacao. Je kunt de pannenkoeken op een stapel serveren of over twee borden verdelen. Zoek je een andere pannenkoek voor je ontbijt? Kijk dan ook bij de variant met zoete aardappel.',
    ],
    relatedSlug: 'zoete-aardappel-pannenkoekjes', relatedText: 'Probeer ook zoete aardappel pannenkoekjes',
  },
  'carrot-cake-overnight-oats': {
    heading: 'Carrot cake overnight oats voor de volgende ochtend',
    paragraphs: [
      'Bij carrot cake overnight oats komen wortel, kaneel en walnoten samen in een havermoutontbijt. Het heeft de smaken van carrot cake, maar je bakt er geen taart voor. De geraspte wortel mengt zich met de havermout en de walnoten zorgen bij het afmaken voor iets knapperigs.',
      'Dit ontbijt zet je de avond ervoor in de koelkast. Fijn wanneer je in de ochtend liever niet met een pan bij het fornuis staat. Je kunt het bakje thuis eten of meenemen en later afmaken. Voor een warm ontbijt met havermout kun je juist kiezen voor de baked oats met frambozen.',
    ],
    relatedSlug: 'baked-oats-met-frambozen', relatedText: 'Liever warm? Baked oats met frambozen',
  },
  'ontbijt-bordje': {
    heading: 'Een ontbijtbordje met ei, avocado en zuurdesembrood',
    paragraphs: [
      'Een ontbijtbordje is fijn als je liever verschillende dingen naast elkaar eet dan alles door elkaar in een kom. Hier komen gekookte eieren, zuurdesembrood, avocado en cottage cheese samen. Tomaat, kiwi en kiemgroente zorgen voor kleur en de kimchi geeft een uitgesproken smaak.',
      'Je stelt het bord onderdeel voor onderdeel samen. Dat maakt het ook een prettig ontbijt voor een ochtend waarop je rustig aan tafel wilt zitten. Je hebt geen blender of oven nodig voor dit recept. Zoek je juist iets hartigs dat je vooraf kunt bakken en meenemen? Dan passen de eimuffins daarbij.',
    ],
    relatedSlug: 'eimuffins', relatedText: 'Voor onderweg: eimuffins met groenten',
  },
  'frambozen-chiapudding': {
    heading: 'Frambozen chiapudding met een knapperige topping',
    paragraphs: [
      'Frambozen geven chiapudding een frisse smaak en een mooie kleur. De Griekse yoghurt maakt het ontbijt romig, terwijl de granola bovenop juist voor crunch zorgt. Zo heb je in één schaaltje verschillende structuren in plaats van alleen een zachte pudding.',
      'De basis kun je van tevoren klaarzetten, zodat je in de ochtend alleen nog hoeft af te maken. Dit recept is ook fijn als je graag een ontbijt meeneemt. Met zelfgemaakte chocolade granola als topping krijgt de combinatie van frambozen en yoghurt nog een andere smaak.',
    ],
    relatedSlug: 'homemade-chocolade-granola', relatedText: 'Maak er zelf chocolade granola bij',
  },
  'immuunboost-blokjes': {
    heading: 'Gember-citrusblokjes voor een warme mok',
    paragraphs: [
      'Deze immuunboost blokjes combineren citroen en sinaasappel met de pittige smaak van verse gember. Je maakt het mengsel in de blender en bewaart het in blokjesvorm. Daardoor hoef je niet iedere keer opnieuw fruit te schillen als je zin hebt in een warme mok met citrus en gember.',
      'Een blokje laten smelten in warm water of thee geeft een ander drinkmoment dan een koud sapje. Het is vooral een praktische manier om een voorraadje klaar te hebben. Drink je gember liever koud? De homemade gembershotjes combineren gember met appel en citroen.',
    ],
    relatedSlug: 'homemade-gembershotjes', relatedText: 'Liever koud? Maak homemade gembershotjes',
  },
  'rode-bieten-sap': {
    heading: 'Zelf rode bietensap maken met appel en citroen',
    paragraphs: [
      'Rode bietensap heeft een herkenbare aardse smaak en een diepe rode kleur. De appel maakt de combinatie zoeter en de citroen geeft een frisse tegenhanger. Met maar drie ingrediënten blijft dit een eenvoudig sapje waarvoor je geen lange boodschappenlijst nodig hebt.',
      'In dit recept gebruik je een juicer, zodat je het sap uit de bieten en appel haalt. Dat geeft een andere structuur dan een smoothie waarbij je alles samen blendt. Houd je van zelfgemaakte drankjes en wil je ook iets zonder juicer maken? Voor de gembershotjes gebruik je een blender en een zeef.',
    ],
    relatedSlug: 'homemade-gembershotjes', relatedText: 'Ook zelf maken: gembershotjes met appel en citroen',
  },
  'pepernoten': {
    heading: 'Zelf pepernoten met havermeel bakken',
    paragraphs: [
      'De geur van speculaaskruiden hoort voor veel mensen bij de weken rond Sinterklaas. Met dit recept maak je zelf kleine pepernoten met havermeel als basis. Je kunt kant-en-klaar havermeel gebruiken of havermout fijnmalen. Handig als je dat al in je keukenkastje hebt staan.',
      'Pepernoten bakken is ook gezellig om samen te doen. Het rollen van de kleine deegbolletjes maakt er een rustig keukenmoment van en daarna doet de oven het werk. Deze variant bevat roomboter en optioneel honing; het is dus geen suikervrij recept wanneer je honing toevoegt. Zin in nog iets met havermout? Bekijk ook de zelfgemaakte chocolade granola.',
    ],
    relatedSlug: 'homemade-chocolade-granola', relatedText: 'Ook met havermout: homemade chocolade granola',
  },
};