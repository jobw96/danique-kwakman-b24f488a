import React from 'react';
import { Instagram } from 'lucide-react';
import { CustomButton } from '@/components/CustomButton';
import { useBookingModal } from '@/components/BookingModal';
import contactBg from '@/assets/contact-background.jpg';

export const CTASection = () => {
  const { openModal } = useBookingModal();

  return (
    <section className="py-24 px-6 animate-fade-in bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-3xl overflow-hidden relative h-[500px] md:h-[600px] flex items-center justify-center">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `url(${contactBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          
          <div className="relative z-10 text-center text-white px-6 max-w-3xl">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Meer energie &<br />een gezonder leven?
            </h2>
            
            <p className="text-lg md:text-xl text-white/95 mb-10 leading-relaxed">
              Ik sta voor je klaar! Neem contact hieronder<br />
              of stuur een berichtje via Instagram
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CustomButton variant="white" icon={false} className="px-8 h-14 text-base rounded-xl" onClick={openModal}>
                Gratis kennismaking
              </CustomButton>
              
              <a href="https://www.instagram.com/daniquekwakman/" target="_blank" rel="noopener noreferrer">
                <CustomButton variant="outline" icon={false} className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border-2 border-white px-6 h-14 rounded-xl">
                  <Instagram className="w-6 h-6" />
                </CustomButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
