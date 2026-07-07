import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft, Share2 } from 'lucide-react';
import { Section } from '@/components/Section';
import { FadeIn } from '@/components/Animations';
import SEO from '@/components/SEO';
import { BLOG_POSTS } from './Blog';

// ISO publish dates per slug (for Article schema)
const POST_DATES: Record<string, string> = {
  'darmen-gezond-houden-5-tips': '2026-07-07',
  'wat-je-ontlasting-zegt-over-je-gezondheid': '2026-07-07',
};


// Blog content for each post
const BLOG_CONTENT: Record<string, {
  content: React.ReactNode;
}> = {
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
          Kan je wel wat inspiratie gebruiken voor darmvriendelijke ontbijtjes? <Link to="/recepten">Check hier mijn recepten.</Link>
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

  const publishedISO = slug ? POST_DATES[slug] : undefined;
  const canonical = `/blog/${slug}`;
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: `https://daniquekwakman.nl${post.image}`,
    datePublished: publishedISO,
    dateModified: publishedISO,
    author: {
      '@type': 'Person',
      name: 'Danique Kwakman',
      url: 'https://daniquekwakman.nl/over-mij',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Danique Kwakman',
      logo: {
        '@type': 'ImageObject',
        url: 'https://daniquekwakman.nl/og-image.jpg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://daniquekwakman.nl${canonical}`,
    },
    articleSection: post.category,
  };

  return <div className="min-h-screen">
      <SEO
        title={post.title}
        description={post.excerpt}
        canonicalUrl={canonical}
        ogType="article"
        publishedTime={publishedISO}
        modifiedTime={publishedISO}
        jsonLd={articleSchema}
      />
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
          <motion.div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm mb-8 pb-8 border-b border-border/50" initial={{
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
            <button className="flex items-center gap-1.5 hover:text-primary transition-colors ml-auto" onClick={() => navigator.share?.({
            title: post.title,
            url: window.location.href
          })}>
              <Share2 className="w-4 h-4" />
              Delen
            </button>
          </motion.div>

          {/* Featured Image Card */}
          <motion.div className="rounded-2xl overflow-hidden shadow-md mb-12 border border-border/30" initial={{
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
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Article Content */}
      <Section className="py-12 md:py-16">
        <motion.article className="max-w-3xl mx-auto prose prose-lg prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-a:text-primary prose-strong:text-foreground" initial={{
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
        </motion.article>
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
            {relatedPosts.map((relatedPost, index) => <motion.article key={relatedPost.id} initial={{
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
                    <motion.img src={relatedPost.image} alt={relatedPost.title} className="w-full h-full object-cover" whileHover={{
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
              </motion.article>)}
          </div>
        </div>
      </Section>
    </div>;
};
export default BlogPost;