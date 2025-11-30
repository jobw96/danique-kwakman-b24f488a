import React from 'react';
import { Section } from '@/components/Section';
import { FadeIn } from '@/components/Animations';
import { Download } from 'lucide-react';
import { CustomButton } from '@/components/CustomButton';
import { Input } from '@/components/ui/input';
import ebookCover from '@/assets/ebook-cover.png';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';

const Ebook = () => {
  const { register, handleSubmit, reset } = useForm();
  const { toast } = useToast();

  const onSubmit = (data: any) => {
    toast({ title: "E-book aangevraagd!", description: "Check je inbox voor de download link." });
    reset();
  };

  return (
    <div className="min-h-screen">
      <Section className="bg-background pt-32 md:pt-40 min-h-screen flex items-center relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <FadeIn className="relative w-full max-w-md">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-secondary rounded-full z-0 opacity-60"></div>
                <img
                  src={ebookCover}
                  alt="5 Ontbijt Recepten E-book"
                  className="w-full h-auto rounded-2xl relative z-10"
                />
              </FadeIn>
            </div>

            <div className="w-full md:w-1/2 text-left">
              <FadeIn delay={0.2}>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-[1.1]">
                  5 ontbijt recepten voor de <span className="italic text-secondary">meest energieke</span> start van je dag
                </h1>
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl">
                  <p>
                    Een gezond en voedzaam ontbijtje is de beste start van de dag. Het geeft ons de brandstof die we nodig hebben om de dag goed te starten en geeft ons de energie die we nodig hebben om de hele dag te kunnen shinen.
                  </p>
                  <p>
                    Gezonde maaltijden zijn de basis voor een gezonde hormoonbalans, gezonde darmen, een sky high energie niveau, betere sportprestaties, je lekkerder in je vel zitten en je mentaal beter voelen.
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-8 rounded-2xl shadow-sm border border-secondary/30">
                  <h3 className="font-serif text-2xl text-foreground mb-4">Download gratis e-book</h3>
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
              </FadeIn>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Ebook;
