import React from 'react';
import { Section } from '@/components/Section';
import { FadeIn } from '@/components/Animations';
import { Download } from 'lucide-react';
import { Input } from '@/components/ui/input';
import ebookCoverFront from '@/assets/ebook-cover-front.png';
import ebookCoverOpen from '@/assets/ebook-cover-open.png';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';
const Ebook = () => {
  const {
    register,
    handleSubmit,
    reset
  } = useForm();
  const {
    toast
  } = useToast();
  const onSubmit = (data: any) => {
    toast({
      title: "E-book aangevraagd!",
      description: "Check je inbox voor de download link."
    });
    reset();
  };
  return <div className="min-h-screen">
      <Section className="bg-background pt-32 md:pt-40 min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-16">
            {/* Images */}
            <div className="w-full lg:w-1/2">
              <FadeIn className="relative">
                <div className="flex items-center justify-center gap-4">
                  <img src={ebookCoverFront} alt="5 Ontbijt Recepten E-book voorkant" className="w-1/2 max-w-[240px] h-auto rounded-lg shadow-none" />
                  <img src={ebookCoverOpen} alt="5 Ontbijt Recepten E-book open" className="w-1/2 max-w-[280px] h-auto rounded-lg shadow-none" />
                </div>
              </FadeIn>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
              <FadeIn delay={0.2}>
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                  5 ontbijt recepten voor de <span className="italic text-secondary">meest energieke</span> start van je dag
                </h1>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                  <p>
                    Een gezond ontbijt is de beste start van je dag. Het geeft je de brandstof om je hormonen aan te maken, scherp en energiek te zijn, je beter te voelen en vol focus de dag door te gaan. In dit e-book laat ik je zien hoe je ontbijt je hormonen, darmen en energie kan ondersteunen.
                  </p>
                  
                  <p className="font-medium text-foreground">Dit e-book is voor jou als je:</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Op zoek bent naar makkelijke, voedzame en heerlijke ontbijtjes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Recepten wilt die je energie geven en je een goede start van de dag bezorgen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Wil ontdekken hoe kleine aanpassingen in je ontbijt een groot verschil kunnen maken</span>
                    </li>
                  </ul>
                  
                  <p className="font-medium text-foreground pt-2">
                    Download het e-book via het formulier.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Form Section */}
          <FadeIn delay={0.3}>
            <div className="max-w-md mx-auto">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-8 rounded-2xl border border-secondary/30">
                <h3 className="font-serif text-2xl text-foreground mb-4 text-center">Download gratis e-book</h3>
                <div className="space-y-2">
                  <Label>Naam</Label>
                  <Input {...register("name")} required />
                </div>
                <div className="space-y-2">
                  <Label>E-mailadres</Label>
                  <Input type="email" {...register("email")} required />
                </div>
                <Button type="submit" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download nu gratis
                </Button>
              </form>
            </div>
          </FadeIn>
        </div>
      </Section>
    </div>;
};
export default Ebook;