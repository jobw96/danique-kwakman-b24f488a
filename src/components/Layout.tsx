import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Headphones, BookOpen, Sparkles, Activity, ClipboardList, LayoutGrid, Instagram, Mail, ArrowUp, Zap, UtensilsCrossed } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import logoFull from '@/assets/logo-full.svg';
import logoCat from '@/assets/logo-cat.png';
import logoGat from '@/assets/logo-gat.png';
import { Breadcrumbs } from '@/components/Breadcrumbs';
interface LayoutProps {
  children: React.ReactNode;
}
interface NavSubItem {
  name: string;
  href: string;
  description: string;
  icon: React.ElementType;
}
interface NavItem {
  name: string;
  href?: string;
  subItems?: NavSubItem[];
}
export const Layout: React.FC<LayoutProps> = ({
  children
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const isHomePage = location.pathname === '/';
  const useDarkHeader = scrolled || !isHomePage || mobileMenuOpen;
  const footerRef = useRef<HTMLDivElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });
  const footerY = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change, or smooth scroll to hash
  useEffect(() => {
    if (location.hash) {
      const anchor = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);
  const scrollToTop = () => {
    const start = window.scrollY;
    const startTime = performance.now();
    const duration = 800;
    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth deceleration
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      window.scrollTo(0, start * (1 - easeOutCubic));
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };
    requestAnimationFrame(animateScroll);
  };
  const handleExternalLink = () => {
    window.open('https://daniquekwakman.clientomgeving.nl/afspraak-maken?t=QqtG5FOC', '_blank');
  };
  const navLinks: NavItem[] = [{
    name: 'Home',
    href: '/'
  }, {
    name: 'Gratis',
    subItems: [{
      name: 'Kennismakingsgesprek',
      href: '/kennismaking',
      description: '',
      icon: Phone
    }, {
      name: 'Podcast',
      href: '/podcast',
      description: '',
      icon: Headphones
    }, {
      name: 'E-book: 5 gratis ontbijtrecepten',
      href: '/ebook',
      description: '',
      icon: BookOpen
    }, {
      name: 'Recepten',
      href: '/recepten',
      description: '',
      icon: UtensilsCrossed
    }]
  }, {
    name: 'Aanbod',
    subItems: [{
    name: 'Behandelingen',
      href: '/behandelingen',
      description: '',
      icon: LayoutGrid
    }, {
      name: '1:1 Glowup',
      href: '/glowup',
      description: '',
      icon: Sparkles
    }, {
      name: '1:1 Darmtraject',
      href: '/darmtraject',
      description: '',
      icon: Activity
    }, {
      name: '1:1 Reset & Recharge',
      href: '/reset-recharge',
      description: '',
      icon: Zap
    }]
  }, {
    name: 'Mijn methode',
    href: '/method'
  }, {
    name: 'Over mij',
    href: '/about'
  }, {
    name: 'FAQ',
    href: '/faq'
  }, {
    name: 'Contact',
    href: '/contact'
  }];
  const handleNavigation = (href: string) => {
    if (href.includes('#')) {
      const [path, anchor] = href.split('#');
      if (path && path !== location.pathname) {
        navigate(href);
        setTimeout(() => {
          const element = document.getElementById(anchor);
          if (element) element.scrollIntoView({
            behavior: 'smooth'
          });
        }, 100);
      } else {
        const element = document.getElementById(anchor);
        if (element) element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    } else {
      navigate(href);
    }
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };
  return <div className="min-h-screen flex flex-col font-sans text-muted-foreground">
      <motion.header className="fixed top-0 w-full z-50 border-b" animate={{
      backgroundColor: scrolled ? 'hsl(var(--background) / 0.9)' : isHomePage ? 'transparent' : 'hsl(var(--background))',
      paddingTop: scrolled ? '0.5rem' : '1rem',
      paddingBottom: scrolled ? '0.5rem' : '1rem',
      borderColor: scrolled ? 'hsl(var(--secondary) / 0.5)' : 'transparent',
      boxShadow: scrolled ? '0 2px 4px -1px rgba(0, 0, 0, 0.02), 0 1px 2px -1px rgba(0, 0, 0, 0.01)' : '0 0 0 0 rgba(0, 0, 0, 0)'
    }} style={{
      backdropFilter: scrolled ? 'blur(20px)' : 'none'
    }} transition={{
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div className="flex items-center gap-2 cursor-pointer relative z-50" onClick={() => handleNavigation('/')} whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} transition={{
          type: "spring",
          stiffness: 400,
          damping: 25
        }}>
            <motion.img src={logoFull} alt="Danique Kwakman" className="h-10 w-auto" animate={{
            opacity: 1,
            filter: useDarkHeader ? 'brightness(1) invert(0)' : 'brightness(0) invert(1)'
          }} transition={{
            duration: 0.3
          }} />
          </motion.div>

          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map(link => <div key={link.name} className="relative px-3 py-2" onMouseEnter={() => link.subItems && setActiveDropdown(link.name)} onMouseLeave={() => link.subItems && setActiveDropdown(null)}>
                <motion.button onClick={() => link.href ? handleNavigation(link.href) : null} className="flex items-center gap-1.5 text-sm font-light" animate={{
              color: useDarkHeader ? 'hsl(var(--foreground))' : 'hsl(0 0% 100%)'
            }} whileHover={{
              color: useDarkHeader ? 'hsl(var(--foreground) / 0.8)' : 'hsl(0 0% 100% / 0.8)'
            }} transition={{
              duration: 0.3
            }} style={{
              filter: useDarkHeader ? 'none' : 'drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))'
            }}>
                  {link.name}
                  {link.subItems && <motion.div animate={{
                rotate: activeDropdown === link.name ? 180 : 0
              }} transition={{
                duration: 0.3,
                ease: "easeInOut"
              }}>
                      <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                    </motion.div>}
                </motion.button>

                {link.subItems && <AnimatePresence mode="wait">
                    {activeDropdown === link.name && <>
                        <div className="absolute top-full left-0 w-full h-4"></div>
                        <motion.div className="absolute top-[calc(100%+10px)] left-0 w-[340px]" initial={{
                  opacity: 0,
                  y: -10,
                  scale: 0.95
                }} animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1
                }} exit={{
                  opacity: 0,
                  y: -10,
                  scale: 0.95
                }} transition={{
                  duration: 0.3,
                  ease: [0.4, 0, 0.2, 1],
                  opacity: {
                    duration: 0.25
                  }
                }}>
                          <motion.div className="bg-background/95 backdrop-blur-xl shadow-lg rounded-2xl border border-secondary/60 p-3 overflow-hidden" initial={{
                    opacity: 0
                  }} animate={{
                    opacity: 1
                  }} transition={{
                    delay: 0.05,
                    duration: 0.2
                  }}>
                            <motion.div className="grid grid-cols-1 gap-1" initial="hidden" animate="visible" variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.04,
                          delayChildren: 0.08
                        }
                      }
                    }}>
                              {link.subItems.map(sub => <motion.button key={sub.name} onClick={() => handleNavigation(sub.href)} className="flex items-center gap-4 p-3 rounded-xl text-left transition-colors duration-[180ms] ease-out hover:bg-[#ede7e0]" variants={{
                        hidden: {
                          opacity: 0,
                          x: -8
                        },
                        visible: {
                          opacity: 1,
                          x: 0
                        }
                      }}>
                                  <motion.div className="w-10 h-10 rounded-lg bg-white/50 border border-secondary/50 flex items-center justify-center text-primary" whileHover={{
                          backgroundColor: "hsl(var(--primary) / 0.2)",
                          borderColor: "hsl(var(--primary) / 0.2)",
                          color: "hsl(var(--foreground))"
                        }} transition={{
                          duration: 0.2
                        }}>
                                    <sub.icon size={18} strokeWidth={2} />
                                  </motion.div>
                                  <div>
                                    <div className="text-sm font-light text-foreground">{sub.name}</div>
                                  </div>
                                </motion.button>)}
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      </>}
                  </AnimatePresence>}
              </div>)}
            
            <div className="ml-4">
              <motion.button onClick={handleExternalLink} className="text-xs font-medium px-5 py-2.5 rounded-md shadow-md bg-primary text-primary-foreground" whileHover={{
              y: -2,
              opacity: 0.9
            }} whileTap={{
              scale: 0.98
            }} transition={{
              type: "spring",
              stiffness: 400,
              damping: 25
            }}>
                Kennismaking
              </motion.button>
            </div>
          </nav>

          <motion.button className="lg:hidden p-2 relative z-[60]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} animate={{
          color: useDarkHeader ? 'hsl(var(--foreground))' : 'hsl(0 0% 100%)'
        }} style={{
          filter: useDarkHeader ? 'none' : 'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))'
        }} whileTap={{
          scale: 0.95
        }} transition={{
          duration: 0.2
        }}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </motion.button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && <motion.div className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden z-[55]" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} transition={{
          duration: 0.3
        }} onClick={() => setMobileMenuOpen(false)} />}
        </AnimatePresence>

        <motion.div className="fixed top-0 right-0 w-[85%] max-w-[360px] bg-background h-screen px-8 py-8 lg:hidden flex flex-col z-[58] shadow-2xl" initial={{
        x: "100%"
      }} animate={{
        x: mobileMenuOpen ? 0 : "100%"
      }} transition={{
        type: "spring",
        stiffness: 280,
        damping: 32,
        mass: 0.8
      }}>
          {/* Logo */}
          <motion.div className="mb-8" initial={{
          opacity: 0,
          y: -10
        }} animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          y: mobileMenuOpen ? 0 : -10
        }} transition={{
          delay: 0.1,
          duration: 0.3
        }}>
            <img src={logoFull} alt="Danique Kwakman" className="h-8 w-auto cursor-pointer" onClick={() => handleNavigation('/')} />
          </motion.div>

          <nav className="flex flex-col gap-1 flex-1 overflow-y-auto">
            {navLinks.map((link, index) => <motion.div key={link.name} initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: mobileMenuOpen ? 1 : 0,
            x: mobileMenuOpen ? 0 : 20
          }} transition={{
            delay: mobileMenuOpen ? 0.1 + index * 0.04 : 0,
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1]
          }}>
                {link.subItems ? <div>
                    <motion.button onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)} className="flex justify-between items-center w-full text-base font-light text-foreground py-3" whileTap={{
                scale: 0.98
              }}>
                      {link.name}
                      <motion.div animate={{
                  rotate: activeDropdown === link.name ? 180 : 0
                }} transition={{
                  duration: 0.35,
                  ease: [0.4, 0, 0.2, 1]
                }}>
                        <ChevronDown className="w-4 h-4 opacity-50" />
                      </motion.div>
                    </motion.button>
                    <AnimatePresence initial={false}>
                      {activeDropdown === link.name && <motion.div initial={{
                  height: 0,
                  opacity: 0
                }} animate={{
                  height: "auto",
                  opacity: 1
                }} exit={{
                  height: 0,
                  opacity: 0
                }} transition={{
                  height: {
                    duration: 0.35,
                    ease: [0.4, 0, 0.2, 1]
                  },
                  opacity: {
                    duration: 0.25,
                    ease: "easeOut"
                  }
                }} className="overflow-hidden">
                          <div className="flex flex-col gap-1 pb-2 pl-2">
                            {link.subItems.map((sub, subIndex) => <motion.button key={sub.name} onClick={() => handleNavigation(sub.href)} className="flex items-center gap-3 text-muted-foreground text-left py-2.5 rounded-lg transition-colors hover:bg-secondary/30" initial={{
                      opacity: 0,
                      x: 10
                    }} animate={{
                      opacity: 1,
                      x: 0
                    }} transition={{
                      delay: 0.05 + subIndex * 0.03,
                      duration: 0.3,
                      ease: [0.25, 0.1, 0.25, 1]
                    }} whileTap={{
                      scale: 0.98
                    }}>
                                <div className="w-8 h-8 rounded-lg bg-secondary/40 flex items-center justify-center text-foreground/60">
                                  <sub.icon size={14} strokeWidth={1.5} />
                                </div>
                                <span className="text-sm font-light">{sub.name}</span>
                              </motion.button>)}
                          </div>
                        </motion.div>}
                    </AnimatePresence>
                  </div> : <motion.button onClick={() => handleNavigation(link.href!)} className="text-base font-light text-foreground w-full text-left py-3" whileTap={{
              scale: 0.98
            }}>
                    {link.name}
                  </motion.button>}
              </motion.div>)}
          </nav>

          <motion.button onClick={handleExternalLink} className="bg-primary text-primary-foreground font-light text-center py-3.5 rounded-lg mt-6 w-full" initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          y: mobileMenuOpen ? 0 : 10
        }} transition={{
          delay: mobileMenuOpen ? 0.3 : 0,
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1]
        }} whileTap={{
          scale: 0.98
        }}>
            Gratis kennismaking
          </motion.button>
        </motion.div>
      </motion.header>

      <main className="flex-grow bg-background relative z-10">
        <Breadcrumbs />
        {children}
      </main>

      <footer ref={footerRef} className="relative min-h-[480px] md:min-h-[500px] w-full overflow-hidden z-0" style={{
      backgroundColor: 'hsl(var(--background))',
      boxShadow: '0 -4px 20px rgba(0,0,0,0.06)'
    }}>
        <motion.div className="absolute inset-0 w-full h-[120%] -top-[10%]" style={{
        y: footerY,
        background: 'linear-gradient(135deg, rgba(157,170,198,0.12) 0%, rgba(216,204,171,0.08) 100%)'
      }} />

        <div className="relative z-10 container mx-auto px-6 py-12 flex flex-col items-center justify-center text-center">
          <div className="mb-6 flex items-center gap-3">
            <img src={logoFull} alt="Danique Kwakman - orthomoleculair therapeut voor vrouwen" className="h-12 w-auto" />
          </div>

          <p className="text-muted-foreground max-w-xl text-sm md:text-base leading-relaxed mb-6">
            Orthomoleculair therapeut voor vrouwen die hun lijf en gezondheid willen begrijpen. Zodat je je klachten kunt doorgronden, kunt transformeren en weer volledig in je kracht staat.
          </p>

          <div className="flex items-center gap-8 mb-8">
            <motion.a href="https://www.instagram.com/daniquekwakman/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground" whileHover={{
            color: "hsl(var(--foreground))",
            y: -4
          }} transition={{
            type: "spring",
            stiffness: 400,
            damping: 25
          }}>
              <Instagram size={26} strokeWidth={1.5} />
            </motion.a>
            <motion.a href="https://www.tiktok.com/@daniquekwakman" target="_blank" rel="noopener noreferrer" className="text-muted-foreground" whileHover={{
            color: "hsl(var(--foreground))",
            y: -4
          }} transition={{
            type: "spring",
            stiffness: 400,
            damping: 25
          }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </motion.a>
            <motion.a href="mailto:info@daniquekwakman.nl" className="text-muted-foreground" whileHover={{
            color: "hsl(var(--foreground))",
            y: -4
          }} transition={{
            type: "spring",
            stiffness: 400,
            damping: 25
          }}>
              <Mail size={26} strokeWidth={1.5} />
            </motion.a>
          </div>

          {/* CAT & GAT info */}
          <div className="max-w-lg mb-6">
            <div className="flex items-center justify-center gap-4 mb-4">
              <img src={logoCat} alt="CAT - Collectief Alternatieve Therapeuten" className="h-12 w-auto" />
              <img alt="GAT - Geschilleninstantie Alternatieve Therapeuten" className="h-12 w-auto" src="/lovable-uploads/a74f49d6-b23c-40c2-8368-c8460118ab8d.png" />
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mb-2">
              Danique Kwakman is aangesloten bij CAT (Collectief Alternatieve Therapeuten) en GAT (Geschilleninstantie Alternatieve Therapeuten).
            </p>
            <p className="text-xs text-muted-foreground">
              Voor meer informatie over mijn klachtenregeling zie{' '}
              <a href="https://gatgeschillen.nl" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">
                gatgeschillen.nl
              </a>
            </p>
          </div>

          {/* Belangrijke documenten */}
          <div className="flex items-center justify-center gap-4 mb-8 flex-wrap">
            <span className="text-xs text-muted-foreground font-medium">Belangrijke documenten:</span>
            <motion.a href="/privacy" className="text-xs text-muted-foreground underline" whileHover={{
            color: "hsl(var(--foreground))"
          }} transition={{
            duration: 0.3
          }}>
              Privacyverklaring
            </motion.a>
            <span className="text-muted-foreground opacity-40">|</span>
            <motion.a href="/terms" className="text-xs text-muted-foreground underline" whileHover={{
            color: "hsl(var(--foreground))"
          }} transition={{
            duration: 0.3
          }}>
              Algemene Voorwaarden
            </motion.a>
          </div>

          <div className="text-center">
            <p className="text-xs text-muted-foreground opacity-60 font-light tracking-wide">
              © {new Date().getFullYear()} Danique Kwakman. Alle rechten voorbehouden.
            </p>
          </div>
        </div>
      </footer>
      
      <AnimatePresence>
        {showBackToTop && <motion.button initial={{
        opacity: 0,
        scale: 0.8,
        y: 20
      }} animate={{
        opacity: 1,
        scale: 1,
        y: 0
      }} exit={{
        opacity: 0,
        scale: 0.8,
        y: 20
      }} whileHover={{
        scale: 1.1,
        y: -2
      }} whileTap={{
        scale: 0.95
      }} transition={{
        type: "spring",
        stiffness: 400,
        damping: 25
      }} onClick={scrollToTop} className="fixed bottom-8 right-8 z-40 bg-primary text-primary-foreground p-3.5 rounded-full shadow-xl">
            <ArrowUp size={20} />
          </motion.button>}
      </AnimatePresence>
    </div>;
};