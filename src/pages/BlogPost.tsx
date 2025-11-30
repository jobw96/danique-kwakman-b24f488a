import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { Section } from '@/components/Section';
import { FadeIn } from '@/components/Animations';
import { BLOG_POSTS } from './Blog';

import blogHormonen from '@/assets/blog-hormonen.jpg';
import blogDarmgezondheid from '@/assets/blog-darmgezondheid.jpg';
import blogEnergie from '@/assets/blog-energie.jpg';

// Blog content for each post
const BLOG_CONTENT: Record<string, { content: React.ReactNode }> = {
  'hormoonbalans-5-signalen': {
    content: (
      <>
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
    )
  },
  'darmgezondheid-basis-welzijn': {
    content: (
      <>
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
    )
  },
  'natuurlijke-energie-boost': {
    content: (
      <>
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
    )
  }
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const post = BLOG_POSTS.find(p => p.slug === slug);
  const content = slug ? BLOG_CONTENT[slug] : null;

  if (!post || !content) {
    return <Navigate to="/blog" replace />;
  }

  // Get related posts (excluding current)
  const relatedPosts = BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 2);

  return (
    <div className="min-h-screen pt-24">
      {/* Header with Featured Image */}
      <div className="relative">
        {/* Featured Image */}
        <motion.div 
          className="w-full h-[40vh] md:h-[50vh] relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </motion.div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-4xl mx-auto px-6 pb-8">
            <FadeIn>
              {/* Back Link */}
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-4 text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Terug naar blog</span>
              </Link>

              {/* Title */}
              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight">
                {post.title}
              </h1>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Meta bar */}
      <div className="border-b border-border/50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <motion.div 
            className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime} leestijd
            </span>
            <button 
              className="flex items-center gap-1.5 hover:text-primary transition-colors ml-auto"
              onClick={() => navigator.share?.({ title: post.title, url: window.location.href })}
            >
              <Share2 className="w-4 h-4" />
              Delen
            </button>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <Section className="py-12 md:py-16">
        <motion.article 
          className="max-w-3xl mx-auto prose prose-lg prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-a:text-primary prose-strong:text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
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
            {relatedPosts.map((relatedPost, index) => (
              <motion.article
                key={relatedPost.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group"
              >
                <Link to={`/blog/${relatedPost.slug}`} className="flex gap-4 items-center">
                  <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <motion.img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-base text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <span className="text-muted-foreground text-xs mt-1">{relatedPost.readTime}</span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default BlogPost;
