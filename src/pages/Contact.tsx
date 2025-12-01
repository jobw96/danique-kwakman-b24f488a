import React from 'react';
import { Section } from '@/components/Section';
import { FadeIn } from '@/components/Animations';
import { CustomButton } from '@/components/CustomButton';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';
import contactBackground from '@/assets/contact-background.jpg';
import daniqueWalkingBeach from '@/assets/danique-walking-beach.jpg';
const contactFormSchema = z.object({
  firstName: z.string().trim().min(1, {
    message: "Voornaam is verplicht"
  }).max(50, {
    message: "Voornaam mag maximaal 50 karakters zijn"
  }),
  lastName: z.string().trim().min(1, {
    message: "Achternaam is verplicht"
  }).max(50, {
    message: "Achternaam mag maximaal 50 karakters zijn"
  }),
  email: z.string().trim().email({
    message: "Ongeldig e-mailadres"
  }).max(255, {
    message: "E-mail mag maximaal 255 karakters zijn"
  }),
  phone: z.string().optional(),
  message: z.string().trim().min(1, {
    message: "Bericht is verplicht"
  }).max(1000, {
    message: "Bericht mag maximaal 1000 karakters zijn"
  }),
  privacy: z.boolean().refine(val => val === true, {
    message: "Je moet akkoord gaan met de algemene voorwaarden en privacybeleid"
  })
});
type ContactFormData = z.infer<typeof contactFormSchema>;
const SectionTag = ({
  text
}: {
  text: string;
}) => <div className="inline-block bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full mb-6 font-medium shadow-sm tracking-wide">{text}</div>;
const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: {
      errors
    }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur'
  });
  const {
    toast
  } = useToast();
  const onSubmit = (data: ContactFormData) => {
    toast({
      title: "Bericht verzonden!",
      description: "We nemen zo snel mogelijk contact met je op."
    });
    reset();
  };
  return <div className="min-h-screen">
      {/* Main Content Section */}
      <Section className="pt-4">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <SectionTag text="Contact" />
            
            
          </FadeIn>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column: CTA and Form */}
            <div className="space-y-16">
              {/* Priority CTA */}
              <FadeIn>
                <div className="space-y-6 pb-8 border-b border-border/50">
                  <h2 className="font-serif text-4xl md:text-5xl text-foreground">
                    Maak een afspraak
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-base py-0 pt-0 pb-[20px]">
                    Met de volgende button kan je bij mij een afspraak maken voor een intakegesprek (60 minuten) of een kennismaking (vrijblijvend 10 minuten).
                  </p>
                  <a href="https://daniquekwakman.clientomgeving.nl/afspraak-maken?t=QqtG5FOC" target="_blank" rel="noopener noreferrer">
                    <CustomButton variant="secondary">Afspraak maken</CustomButton>
                  </a>
                </div>
              </FadeIn>

              {/* Contact Form */}
              <FadeIn delay={0.1}>
                <div className="space-y-6">
                  <h3 className="font-serif text-2xl text-foreground">
                    Of stel mij een vraag via het contactformulier
                  </h3>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Voornaam <span className="text-destructive">*</span></Label>
                        <Input {...register("firstName")} className={errors.firstName ? 'border-destructive' : ''} />
                        {errors.firstName && <p className="text-xs text-destructive">{errors.firstName.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label>Achternaam <span className="text-destructive">*</span></Label>
                        <Input {...register("lastName")} className={errors.lastName ? 'border-destructive' : ''} />
                        {errors.lastName && <p className="text-xs text-destructive">{errors.lastName.message}</p>}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>E-mail <span className="text-destructive">*</span></Label>
                      <Input type="email" {...register("email")} className={errors.email ? 'border-destructive' : ''} />
                      {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label>Telefoon</Label>
                      <Input type="tel" {...register("phone")} />
                    </div>
                    <div className="space-y-2">
                      <Label>Bericht <span className="text-destructive">*</span></Label>
                      <Textarea {...register("message")} className={errors.message ? 'border-destructive' : ''} />
                      {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <Controller name="privacy" control={control} render={({
                        field
                      }) => <Checkbox id="privacy" checked={field.value} onCheckedChange={field.onChange} className="mt-1" />} />
                        <Label htmlFor="privacy" className="text-sm leading-relaxed">
                          Ik ga akkoord met de{' '}
                          <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            algemene voorwaarden
                          </a>
                          {' '}en het{' '}
                          <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            privacybeleid
                          </a>
                        </Label>
                      </div>
                      {errors.privacy && <p className="text-xs text-destructive">{errors.privacy.message}</p>}
                    </div>
                    <Button type="submit" className="w-full">Verstuur bericht</Button>
                  </form>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Contact Information */}
            <FadeIn delay={0.2}>
              <div className="space-y-8">
                <div>
                  <img src={daniqueWalkingBeach} alt="Danique Kwakman orthomoleculair therapeut - neem contact op voor een kennismakingsgesprek" className="w-full h-auto rounded-lg object-cover" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-foreground mb-4">Veel werk ik online</h3>
                  <p className="text-muted-foreground leading-relaxed">Indien afspraken fysiek zijn ontvang ik je op de volgende locatie:</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Locatie</h4>
                    <p className="text-muted-foreground">Muntstraat 18, 1621GB Hoorn</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-2">Bereikbaarheid</h4>
                    <p className="text-muted-foreground leading-relaxed">OV: +- 10 min lopen vanaf station Hoorn.
Parkeren: betaald op straat.<br />
                      Parkeren: betaald op straat of in parkeergarage scheepvaartkwartier.
                    </p>
                  </div>

                  <div className="pt-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Het is een co working space waar je gewoon kunt aanbellen, ikzelf of 1 van mijn collega's doet de deur voor je open.
                    </p>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="space-y-6 pt-8 border-t border-secondary/30">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">E-mail</h4>
                    <p className="text-muted-foreground">info@daniquekwakman.nl</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Telefoon</h4>
                    <p className="text-muted-foreground">+31 6 12345678</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>
    </div>;
};
export default Contact;