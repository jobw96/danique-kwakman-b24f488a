import React from 'react';
import { Section } from '@/components/Section';
import { FadeIn } from '@/components/Animations';
import { Play } from 'lucide-react';
import { CustomButton } from '@/components/CustomButton';

const SectionTag = ({ text }: { text: string }) => (
  <div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium shadow-sm tracking-wide">{text}</div>
);

const Podcast = () => {
  return (
    <div className="min-h-screen">
      <Section className="bg-background pt-32 md:pt-40">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <SectionTag text="Nu te beluisteren" />
            <h1 className="font-serif text-5xl mb-8 text-foreground">De OrthoBalance Podcast</h1>
            <p className="text-lg text-muted-foreground mb-12">
              Luister naar inspirerende gesprekken over hormonen, darmgezondheid en mindset. Wekelijks nieuwe afleveringen.
            </p>
          </FadeIn>

          <div className="grid gap-6">
            {[1, 2, 3].map((ep) => (
              <FadeIn key={ep} className="bg-white p-6 rounded-xl border border-secondary/30 shadow-sm flex flex-col md:flex-row items-center gap-6 text-left hover:border-primary/50 transition-colors">
                <div className="w-24 h-24 bg-secondary rounded-lg flex-shrink-0 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?auto=format&fit=crop&w=400&q=80" alt="Podcast cover" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <Play className="w-8 h-8 text-white fill-current" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="text-xs text-primary font-semibold mb-1">Aflevering {ep}</div>
                  <h3 className="font-serif text-xl mb-2 text-foreground">Het geheim van een stabiele bloedsuiker</h3>
                  <p className="text-sm text-muted-foreground">In deze aflevering bespreken we hoe je energiebalans direct gekoppeld is aan wat je eet in de ochtend.</p>
                </div>
                <CustomButton variant="outline" icon={false}>Luister nu</CustomButton>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Podcast;
