import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { Section } from '@/components/Section';
import { FadeIn } from '@/components/Animations';
import SEO from '@/components/SEO';
import { BLOG_POSTS } from './Blog';
import daniqueRelaxed from '@/assets/danique-relaxed.webp';
import daniqueBeach from '@/assets/danique-beach.webp';
import daniqueRunning from '@/assets/danique-running.webp';

// ISO publish dates per slug (for Article schema)
const POST_DATES: Record<string, string> = {
  'darmen-gezond-houden-5-tips': '2026-07-07',
  'hormoonbalans-5-signalen': '2024-11-28',
  'darmgezondheid-basis-welzijn': '2024-11-21',
  'natuurlijke-energie-boost': '2024-11-14',
};

// Blog content for each post
const BLOG_CONTENT: Record<string, {
  content: React.ReactNode;
}> = {
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
  },
  'hormoonbalans-5-signalen': {
    content: <>
        <p className="lead">
          Hormonen spelen een cruciale rol in vrijwel elk aspect van je gezondheid. Ze reguleren je stofwisseling, stemming, slaap, voortplanting en nog veel meer. Wanneer je hormonen uit balans raken, kan dit een breed scala aan symptomen veroorzaken.
        </p>

        <h2>1. Aanhoudende vermoeidheid</h2>
        <p>
          Voel je je constant moe, zelfs na een goede nachtrust? Dit kan een teken zijn van hormonale onbalans. Cortisol, je stresshormoon, en schildklierhormonen spelen een grote rol in je energieniveau. Wanneer deze uit balans zijn, kun je je uitgeput voelen, ongeacht hoeveel je slaapt.
        </p>

        <h2>2. Onverklaarbare gewichtsveranderingen</h2>
        <p>
          Hormonen zoals insuline, cortisol, en schildklierhormonen beïnvloeden direct hoe je lichaam vet opslaat en verbrandt. Als je merkt dat je aankomt of afvalt zonder duidelijke reden, kan dit wijzen op een hormonale disbalans.
        </p>

        <h2>3. Stemmingswisselingen en angstgevoelens</h2>
        <p>
          Oestrogeen en progesteron hebben een directe invloed op de productie van serotonine en andere neurotransmitters die je stemming reguleren. Fluctuaties in deze hormonen kunnen leiden tot stemmingswisselingen, prikkelbaarheid, angst of depressieve gevoelens.
        </p>

        <h2>4. Slaapproblemen</h2>
        <p>
          Progesteron heeft een kalmerend effect en helpt je te slapen. Wanneer dit hormoon daalt, zoals tijdens de perimenopauze, kunnen slaapproblemen ontstaan. Ook melatonine en cortisol spelen een belangrijke rol in je slaap-waakcyclus.
        </p>

        <h2>5. Huidproblemen en haaruitval</h2>
        <p>
          Acne, droge huid, of plotselinge haaruitval kunnen allemaal signalen zijn van hormonale veranderingen. Androgenen, schildklierhormonen en oestrogeen beïnvloeden de gezondheid van je huid en haar.
        </p>

        <h2>Wat kun je doen?</h2>
        <p>
          Als je meerdere van deze signalen herkent, is het belangrijk om actie te ondernemen. Een holistische aanpak die voeding, beweging, stressmanagement en waar nodig supplementen omvat, kan helpen om je hormonen weer in balans te brengen.
        </p>
        <p>
          Wil je meer weten over hoe je je hormoonbalans kunt herstellen? Neem dan contact met me op voor een persoonlijk adviesgesprek.
        </p>
      </>
  },
  'darmgezondheid-basis-welzijn': {
    content: <>
        <p className="lead">
          Je darmen worden niet voor niets je 'tweede brein' genoemd. Een gezond microbioom is essentieel voor je algehele welzijn, van je immuunsysteem tot je mentale gezondheid.
        </p>

        <h2>De darm-brein connectie</h2>
        <p>
          Wist je dat 95% van je serotonine – het 'gelukshormoon' – wordt aangemaakt in je darmen? De communicatie tussen je darmen en brein verloopt via de nervus vagus en beïnvloedt je stemming, stressgevoeligheid en zelfs je slaapkwaliteit.
        </p>

        <h2>Je immuunsysteem begint in de darm</h2>
        <p>
          Ongeveer 70-80% van je immuuncellen bevindt zich in je darmen. Een gezond darmmicrobioom helpt bij de productie van antilichamen en beschermt tegen ziekteverwekkers. Een verstoorde darmflora kan leiden tot ontstekingen en een verzwakt immuunsysteem.
        </p>

        <h2>Signalen van een ongezonde darm</h2>
        <p>
          Veelvoorkomende signalen van een verstoorde darmgezondheid zijn:
        </p>
        <ul>
          <li>Opgeblazen gevoel en gasvorming</li>
          <li>Obstipatie of diarree</li>
          <li>Voedselintoleranties</li>
          <li>Vermoeidheid en concentratieproblemen</li>
          <li>Huidproblemen zoals eczeem</li>
          <li>Frequent ziek zijn</li>
        </ul>

        <h2>Voeding voor een gezonde darm</h2>
        <p>
          Een gevarieerd dieet rijk aan vezels is essentieel voor een gezond microbioom. Focus op:
        </p>
        <ul>
          <li>Gefermenteerde voedingsmiddelen zoals zuurkool, kimchi en kefir</li>
          <li>Prebiotica zoals knoflook, uien, prei en bananen</li>
          <li>Vezelrijke groenten en fruit</li>
          <li>Volkoren granen en peulvruchten</li>
        </ul>

        <h2>Leefstijlfactoren</h2>
        <p>
          Naast voeding spelen ook andere factoren een rol bij je darmgezondheid. Chronische stress, slaapgebrek en gebrek aan beweging kunnen je darmmicrobioom negatief beïnvloeden. Een holistische aanpak die al deze aspecten adresseert is essentieel.
        </p>
      </>
  },
  'natuurlijke-energie-boost': {
    content: <>
        <p className="lead">
          Vermoeidheid is een van de meest voorkomende klachten in onze moderne samenleving. Gelukkig zijn er veel natuurlijke manieren om je energie te verhogen zonder te grijpen naar eindeloze kopjes koffie.
        </p>

        <h2>1. Optimaliseer je slaap</h2>
        <p>
          Kwaliteitsslaap is de basis van goede energie. Streef naar 7-9 uur slaap per nacht en zorg voor een consistent slaapritme. Vermijd schermen minimaal een uur voor het slapengaan en creëer een donkere, koele slaapomgeving.
        </p>

        <h2>2. Begin je dag met beweging</h2>
        <p>
          Ochtendbeweging activeert je stofwisseling en verhoogt de aanmaak van endorfines. Dit hoeft geen intensieve workout te zijn – een korte wandeling, yoga of stretchroutine kan al een groot verschil maken voor je energieniveau gedurende de dag.
        </p>

        <h2>3. Stabiliseer je bloedsuiker</h2>
        <p>
          Pieken en dalen in je bloedsuiker zorgen voor energiedips. Kies voor maaltijden met een goede balans van eiwitten, gezonde vetten en complexe koolhydraten. Vermijd geraffineerde suikers en bewerkte voedingsmiddelen.
        </p>

        <h2>4. Hydratatie is key</h2>
        <p>
          Al 2% uitdroging kan leiden tot verminderde concentratie en vermoeidheid. Begin je dag met een groot glas water en drink regelmatig door de dag heen. Kruidenthee telt ook mee!
        </p>

        <h2>5. Neem pauzes en beweeg tussendoor</h2>
        <p>
          Langdurig zitten verlaagt je energieniveau. Sta elk uur even op, rek je uit en neem een korte wandeling. Dit stimuleert de bloedcirculatie en geeft je brein een reset.
        </p>

        <h2>6. Adembewust zijn</h2>
        <p>
          Diep ademhalen activeert je parasympathische zenuwstelsel en verhoogt de zuurstoftoevoer naar je cellen. Probeer een paar keer per dag bewust 5-10 diepe ademhalingen te nemen.
        </p>

        <h2>7. Check je vitamines en mineralen</h2>
        <p>
          Tekorten aan ijzer, vitamine B12, vitamine D en magnesium zijn veelvoorkomende oorzaken van vermoeidheid. Overweeg om je waarden te laten testen als je aanhoudende vermoeidheid ervaart.
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
      <Section className="pt-4 pb-0">
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
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime} leestijd
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
            <div className="relative aspect-[21/9]">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Article Content */}
      <Section className="py-0 md:py-0">
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
                    <span className="text-muted-foreground text-xs mt-1">{relatedPost.readTime}</span>
                  </div>
                </Link>
              </motion.article>)}
          </div>
        </div>
      </Section>
    </div>;
};
export default BlogPost;