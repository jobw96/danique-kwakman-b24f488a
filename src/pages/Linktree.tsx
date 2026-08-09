import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, MessageCircle, Mail, Sparkles, Mic, Calendar, Globe, Compass } from 'lucide-react';
import { useBookingModal } from '@/components/BookingModal';
import logoFull from '@/assets/logo-full.svg';
import daniquePortret from '@/assets/danique-portret.webp';

const LINKS = [
  {
    title: "Nourish Your Body – 50+ hormoonproof recepten",
    href: "https://daniquekwakman.plugandpay.com/checkout/nourish-your-body",
    icon: Sparkles,
    internal: false
  },
  {
    title: "Ontvang elke week mijn gratis nieuwsbrief",
    href: "/nieuwsbrief",
    icon: Mail,
    internal: true
  },
  {
    title: "Podcast: Health & Hormone secrets",
    href: "/podcast",
    icon: Mic,
    internal: true
  },
  {
    title: "Plan jouw gratis kennismakingsgesprek in",
    href: "",
    icon: Calendar,
    internal: false,
    isBooking: true
  },
  {
    title: "Aanbod",
    href: "/#behandelingen",
    icon: Compass,
    internal: true
  },
  {
    title: "Website",
    href: "/",
    icon: Globe,
    internal: true
  }
];

const SOCIAL_LINKS = [
  { name: "E-mail", href: "mailto:info@daniquekwakman.nl", icon: Mail },
  { name: "WhatsApp", href: "https://wa.me/31682018727", icon: MessageCircle },
  { name: "Instagram", href: "https://instagram.com/daniquekwakman", icon: Instagram }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const }
  }
};

const Linktree: React.FC = () => {
  const { openModal } = useBookingModal();

  const handleLinkClick = (link: typeof LINKS[0]) => {
    if ('isBooking' in link && link.isBooking) {
      openModal();
    } else if (link.internal) {
      window.location.href = link.href;
    } else {
      window.open(link.href, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-primary-dark flex flex-col items-center px-4 py-6 md:py-10">
      <h1 className="sr-only">Danique Kwakman — Links en Resources</h1>

      <div className="w-full max-w-xl">
        {/* Card */}
        <motion.div
          className="bg-primary rounded-3xl px-5 sm:px-8 pt-10 pb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Avatar */}
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-background/40">
              <img
                src={daniquePortret}
                alt="Danique Kwakman"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-center mt-6">
            <img
              src={logoFull}
              alt="Danique Kwakman"
              className="h-7 w-auto brightness-0 invert opacity-95"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Bio */}
          <p className="mt-5 text-center text-primary-foreground/90 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
            Ik help vrouwen naar balans in hormonen, darmen en energie via mijn CIRCLE-methode.
          </p>

          {/* Links */}
          <motion.div
            className="mt-8 flex flex-col gap-3.5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {LINKS.map((link, index) => (
              <motion.button
                key={index}
                onClick={() => handleLinkClick(link)}
                className="w-full bg-background text-foreground rounded-full py-4 px-6 text-sm sm:text-base font-medium text-center transition-colors hover:bg-background/90"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {link.title}
              </motion.button>
            ))}
          </motion.div>

          {/* Socials */}
          <div className="mt-9 flex items-center justify-center gap-7">
            {SOCIAL_LINKS.map((social, i) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-primary-foreground"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.3, ease: "easeOut" }}
                whileHover={{ scale: 1.18 }}
                whileTap={{ scale: 0.94 }}
              >
                <social.icon className="w-6 h-6" strokeWidth={1.75} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <p className="mt-8 text-center text-xs text-primary-foreground/70">
          © {new Date().getFullYear()} Danique Kwakman
        </p>
      </div>
    </div>
  );
};

export default Linktree;
