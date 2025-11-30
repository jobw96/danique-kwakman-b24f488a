import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/Section';
import { FadeIn, ParallaxImage } from '@/components/Animations';
import { ArrowDown, Sparkles, Coffee, Zap } from 'lucide-react';
import ebookCoverFront from '@/assets/ebook-cover-front.png';
import ebookCoverOpen from '@/assets/ebook-cover-open.png';
const SectionTag = ({
  text
}: {
  text: string;
}) => <div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium shadow-sm tracking-wide">
    {text}
  </div>;
const Ebook = () => {
  useEffect(() => {
    // Load ActiveCampaign form script
    const script = document.createElement('script');
    script.src = 'https://daniquekwakman.activehosted.com/f/embed.php?id=1';
    script.charset = 'utf-8';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);
  return <div className="min-h-screen">
      <Section className="pt-32 md:pt-40 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section - Glow Up Style */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
            <div className="lg:w-[65%]">
              <FadeIn>
                <SectionTag text="Gratis E-book" />
                <h1 className="font-serif text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                  5 ontbijt recepten voor de <span className="italic text-secondary">meest energieke</span> start van je dag
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Een gezond ontbijt is de beste start van je dag. Het geeft je de brandstof om je hormonen aan ta maken, scherp en energiek te zijn, je beter te voelen en vol focus de dag door te gaan.
                </p>
                <motion.a href="#download-form" whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }} className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-medium hover:bg-primary/90 transition-colors">
                  Ontvang gratis e-book
                  <ArrowDown className="w-5 h-5" />
                </motion.a>
              </FadeIn>
            </div>
            <div className="lg:w-[35%]">
              <FadeIn delay={0.2} className="relative rounded-[2rem] overflow-hidden aspect-[4/5]">
                <ParallaxImage src={ebookCoverFront} alt="5 Ontbijt Recepten E-book" className="w-full h-full object-cover" />
              </FadeIn>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[{
            icon: Coffee,
            title: "Makkelijk & Voedzaam",
            desc: "Eenvoudige recepten die je snel kunt maken en vol zitten met voedingsstoffen."
          }, {
            icon: Zap,
            title: "Energie Boost",
            desc: "Start je dag met ontbijtjes die je energie geven voor de hele dag."
          }, {
            icon: Sparkles,
            title: "Hormonale Balans",
            desc: "Ontdek hoe kleine aanpassingen een groot verschil maken voor je hormonen."
          }].map((item, i) => <FadeIn key={i} delay={i * 0.1}>
                <motion.div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/30 h-full" whileHover={{
              y: -8,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
            }} transition={{
              type: "spring",
              stiffness: 300,
              damping: 25
            }}>
                  <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center text-primary mb-6">
                    <item.icon size={24} />
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </motion.div>
              </FadeIn>)}
          </div>

          {/* Content & Form Section - Integrated */}
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-secondary/30 mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left: Content */}
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                    In dit e-book laat ik je zien:
                  </h2>
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p>
                      Hoe je ontbijt je hormonen, darmen en energie kan ondersteunen. In dit e-book laat ik je zien hoe je ontbijt je hormonen, darmen en energie kan ondersteunen.
                    </p>

                    <div>
                      <p className="font-medium text-foreground mb-4">Dit e-book is voor jou als je:</p>
                      <div className="space-y-3">
                        {["Op zoek bent naar makkelijke, voedzame en heerlijke ontbijtjes", "Recepten wilt die je energie geven en je een goede start van de dag bezorgen", "Wil ontdekken hoe kleine aanpassingen in je ontbijt een groot verschil kunnen maken"].map((item, i) => <motion.div key={i} className="flex items-start gap-3" initial={{
                        opacity: 0,
                        x: -20
                      }} whileInView={{
                        opacity: 1,
                        x: 0
                      }} viewport={{
                        once: true
                      }} transition={{
                        delay: i * 0.1
                      }}>
                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                              <Sparkles size={14} />
                            </div>
                            <span>{item}</span>
                          </motion.div>)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Form */}
                <div id="download-form">
                  <motion.div className="bg-background p-8 rounded-2xl border border-secondary/30 sticky top-24" initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} viewport={{
                  once: true
                }} transition={{
                  delay: 0.2
                }}>
                    <h3 className="font-serif text-2xl text-foreground mb-2 text-center">
                      Download gratis e-book
                    </h3>
                    <p className="text-muted-foreground text-center mb-6 text-sm">
                      Vul je gegevens in en ontvang direct het e-book in je inbox
                    </p>

                    {/* ActiveCampaign Form Container */}
                    <div className="_form_1"></div>
                  </motion.div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* E-book Preview Images */}
          <FadeIn delay={0.3}>
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center max-w-4xl mx-auto">
              <motion.div className="relative" whileHover={{
              scale: 1.05,
              rotate: -2
            }} transition={{
              type: "spring",
              stiffness: 300,
              damping: 20
            }}>
                <div className="rounded-2xl overflow-hidden max-w-[280px]">
                  
                </div>
              </motion.div>
              <motion.div className="relative" whileHover={{
              scale: 1.05,
              rotate: 2
            }} transition={{
              type: "spring",
              stiffness: 300,
              damping: 20
            }}>
                <div className="rounded-2xl overflow-hidden max-w-[320px]">
                  
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </div>;
};
export default Ebook;