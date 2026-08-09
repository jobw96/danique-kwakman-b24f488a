import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Linkedin, Mail, Sparkles, Mic, Calendar, Globe, Compass, Heart, ShoppingBag } from 'lucide-react';
import { WhatsAppIcon, TikTokIcon } from '@/components/BrandIcons';
import { useBookingModal } from '@/components/BookingModal';
import logoFull from '@/assets/logo-full.svg';
import daniquePortret from '@/assets/danique-portret.webp';
import nourishCover from '@/assets/nourish-your-body-cover.jpeg.asset.json';


const NOURISH_URL = "https://daniquekwakman.plugandpay.com/checkout/nourish-your-body";

const LINKS = [
  {
    title: "Aanbod",
    href: "/#behandelingen",
    icon: Compass,
    internal: true
  },
  {
    title: "E-Book Nourish Your Body",
    href: NOURISH_URL,
    icon: Sparkles,
    internal: false
  },
  {
    title: "Gratis kennismaking",
    href: "",
    icon: Calendar,
    internal: false,
    isBooking: true
  },
  {
    title: "Aanbod & trajecten",
    href: "/behandelingen",
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

const CONNECT_LINKS = [
  {
    title: "Podcast – Health and Hormone Secrets",
    href: "https://open.spotify.com/show/21JMWSXjs1SziLcNNNFHZf?si=iyjN2HWLQn6QvpWlDB8PRA",
    icon: Mic,
    internal: false
  },
  {
    title: "Mijn verhaal en missie",
    href: "/over-mij",
    icon: Heart,
    internal: true
  }
];

const SHOP_LINKS = [
  {
    title: "Nourish Your Body – 50+ hormoonproof recepten",
    href: NOURISH_URL,
    icon: ShoppingBag,
    internal: false
  }
];

const SOCIAL_LINKS = [
  { name: "E-mail", href: "mailto:info@daniquekwakman.nl", icon: Mail },
  { name: "WhatsApp", href: "https://wa.me/31682018727", icon: WhatsAppIcon },
  { name: "Instagram", href: "https://instagram.com/daniquekwakman", icon: Instagram },
  { name: "TikTok", href: "https://www.tiktok.com/@daniquekwakman", icon: TikTokIcon },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/daniquekwakman", icon: Linkedin }
];


const containerVariants = {
  hidden: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 48 : -48
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      x: { duration: 0.28, ease: [0.22, 1, 0.36, 1] as const },
      opacity: { duration: 0.2 },
      staggerChildren: 0.03,
      delayChildren: 0.02
    }
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -48 : 48,
    transition: { duration: 0.16, ease: "easeIn" as const }
  })
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] as const }
  },
  exit: { opacity: 0, transition: { duration: 0.1 } }
};



type LinkItem = { title: string; href: string; icon: any; internal: boolean; isBooking?: boolean };

const Linktree: React.FC = () => {
  const { openModal } = useBookingModal();
  const [tab, setTab] = useState<'links' | 'shop'>('links');
  const linksRef = React.useRef<HTMLDivElement>(null);
  const shopRef = React.useRef<HTMLDivElement>(null);
  const [panelHeight, setPanelHeight] = useState<number | 'auto'>('auto');

  React.useLayoutEffect(() => {
    const measure = () => {
      const el = tab === 'links' ? linksRef.current : shopRef.current;
      if (el) setPanelHeight(el.offsetHeight);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [tab]);




  const handleLinkClick = (link: LinkItem) => {
    if (link.isBooking) {
      openModal();
    } else if (link.internal) {
      window.location.href = link.href;
    } else {
      window.open(link.href, '_blank');
    }
  };

  const renderButton = (link: LinkItem, index: number) => (
    <motion.button
      key={`${link.title}-${index}`}
      onClick={() => handleLinkClick(link)}
      className="w-full bg-background text-foreground rounded-full py-4 px-6 text-sm sm:text-base font-medium text-center transition-colors hover:bg-background/90"
      variants={itemVariants}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {link.title}
    </motion.button>
  );


  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 py-6 md:py-10">
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
            Orthomoleculair hormoon- & darmtherapeut
          </p>

          {/* Tabs */}
          <div className="mt-7 mx-auto w-full max-w-xs bg-background/15 rounded-full p-1 flex relative">
            {(['links', 'shop'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`relative flex-1 rounded-full py-2 text-sm font-medium transition-colors ${
                  tab === t ? 'text-foreground' : 'text-primary-foreground/80'
                }`}
                aria-pressed={tab === t}
              >
                {tab === t && (
                  <motion.span
                    layoutId="linktree-tab"
                    className="absolute inset-0 bg-background rounded-full"
                    transition={{ type: 'spring', stiffness: 700, damping: 40, mass: 0.5 }}
                  />
                )}
                <span className="relative z-10">{t === 'links' ? 'Links' : 'Shop'}</span>
              </button>
            ))}
          </div>

          {/* Links / Shop */}
          <motion.div
            className="mt-6 -mx-5 sm:-mx-8 overflow-x-clip"
            animate={{ height: panelHeight }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="flex items-start"
              animate={{ x: tab === 'links' ? '0%' : '-100%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                ref={linksRef}
                className={`w-full shrink-0 px-5 sm:px-8 py-1 flex flex-col gap-3.5 ${tab === 'links' ? '' : 'pointer-events-none'}`}
                aria-hidden={tab !== 'links'}
              >
                {LINKS.map(renderButton)}

                <p className="mt-4 text-center text-primary-foreground/70 text-xs uppercase tracking-[0.18em]">
                  Connect
                </p>

                {CONNECT_LINKS.map(renderButton)}
              </div>

              <div
                ref={shopRef}
                className={`w-full shrink-0 px-5 sm:px-8 py-1 ${tab === 'shop' ? '' : 'pointer-events-none'}`}
                aria-hidden={tab !== 'shop'}
              >
                <motion.button
                  onClick={() => window.open(NOURISH_URL, '_blank')}
                  className="w-full max-w-[260px] mx-auto block bg-background rounded-[28px] overflow-hidden text-left"
                  whileHover={{ scale: 1.015, y: -3 }}
                  whileTap={{ scale: 0.985 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 26 }}
                >
                  <img
                    src={nourishCover.url}
                    alt="Nourish Your Body — 50+ hormoonproof recepten, cyclusgerichte voeding en maaltijden die je hormonen en darmen ondersteunen"
                    title="50+ hormoonproof recepten, cyclusgerichte voeding en maaltijden die je hormonen en darmen ondersteunen"
                    className="w-full aspect-[4/5] object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="p-4">
                    <span className="inline-flex items-center justify-center w-full rounded-full bg-primary text-primary-foreground py-2.5 text-xs font-medium">
                      Bekijk e-book
                    </span>
                  </div>
                </motion.button>
              </div>
            </motion.div>
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
                transition={{
                  opacity: { delay: 0.5 + i * 0.08, duration: 0.3, ease: "easeOut" },
                  scale: { delay: 0.5 + i * 0.08, duration: 0.3, ease: "easeOut" },
                }}
                whileHover={{
                  scale: 1.18,
                  y: -2,
                  transition: { type: "spring", stiffness: 400, damping: 22, mass: 0.5, delay: 0 },
                }}
                whileTap={{ scale: 0.94, transition: { duration: 0.1, delay: 0 } }}
              >
                <social.icon className="w-6 h-6" strokeWidth={1.75} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <p className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Danique Kwakman
        </p>
      </div>
    </div>
  );
};

export default Linktree;
