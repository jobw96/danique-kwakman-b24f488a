import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, MessageCircle, Mail, Sparkles, Heart, BookOpen, Mic, Calendar, Gift, Globe } from 'lucide-react';
import logoFull from '@/assets/logo-full.svg';
import daniqueRelaxed from '@/assets/danique-relaxed.jpg';

const LINKS = [
  {
    title: "Schrijf je in voor de maandelijkse Glow & Nourish Recepten – hormoonproof & gut friendly",
    href: "/#nieuwsbrief",
    icon: Mail,
    internal: true
  },
  {
    title: "Gratis e-book: 5 ontbijt recepten voor de meest energieke start van de dag",
    href: "/ebook",
    icon: BookOpen,
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
    href: "https://daniquekwakman.clientomgeving.nl/afspraak-maken?t=QqtG5FOC",
    icon: Calendar,
    internal: false
  },
  {
    title: "Aanbod",
    href: "/#behandelingen",
    icon: Gift,
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
  {
    name: "Instagram",
    href: "https://instagram.com/daniquekwakman",
    icon: Instagram,
    color: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400"
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/31612345678",
    icon: MessageCircle,
    color: "bg-[#25D366]"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const
    }
  }
};

const profileVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  }
};

const socialVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
      delay: 0.3 + i * 0.08
    }
  })
};

const Linktree: React.FC = () => {
  const handleLinkClick = (href: string, internal: boolean) => {
    if (internal) {
      window.location.href = href;
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-card flex flex-col items-center px-4 py-8 md:py-12">
      <div className="w-full max-w-md relative z-10">
        {/* Profile Section */}
        <motion.div 
          className="flex flex-col items-center mb-6"
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image */}
          <motion.div 
            className="relative mb-4"
            variants={profileVariants}
          >
            <div className="w-24 h-24 rounded-full overflow-hidden border-3 border-primary/20 shadow-lg">
              <img 
                src={daniqueRelaxed} 
                alt="Danique Kwakman" 
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div 
              className="absolute -bottom-1 -right-1 bg-primary text-white rounded-full p-1.5"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 400 }}
            >
              <Sparkles className="w-3 h-3" />
            </motion.div>
          </motion.div>

          {/* Name/Logo */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <img 
              src={logoFull} 
              alt="Danique Kwakman" 
              className="h-6 w-auto mb-4"
            />
          </motion.div>

          {/* Social Icons */}
          <motion.div 
            className="flex gap-3 mb-6"
            initial="hidden"
            animate="visible"
          >
            {SOCIAL_LINKS.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} text-white p-2.5 rounded-full shadow-md`}
                variants={socialVariants}
                custom={index}
                whileHover={{ 
                  scale: 1.15, 
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Bio Text */}
          <motion.div 
            className="text-center mb-8 px-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <p className="text-foreground text-sm leading-relaxed mb-1">
              Ik help vrouwen in 3 maanden te transformeren via mijn CIRCLE-methode
            </p>
            <p className="text-foreground text-sm leading-relaxed mb-2">
              naar balans in hormonen, darmen en energie.
            </p>
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
              <span>👋</span> 8+ jaar ervaring in zorg & health
            </p>
          </motion.div>
        </motion.div>

        {/* Links */}
        <motion.div 
          className="flex flex-col gap-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {LINKS.map((link, index) => (
            <motion.button
              key={index}
              onClick={() => handleLinkClick(link.href, link.internal)}
              className="w-full bg-primary text-white py-4 px-6 rounded-lg text-sm font-medium shadow-md relative overflow-hidden group"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -2,
                boxShadow: "0 10px 30px -10px hsl(var(--primary) / 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Hover gradient overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
              />
              <span className="relative z-10 leading-relaxed">{link.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div 
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <p className="text-muted-foreground text-xs flex items-center justify-center gap-1">
            Made with <Heart className="w-3 h-3 text-secondary fill-secondary" /> by Danique
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Linktree;
