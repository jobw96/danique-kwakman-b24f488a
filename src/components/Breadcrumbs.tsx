import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Home,
    User,
    Mail,
    FileText,
    Layers,
    LayoutGrid,
    Sparkles,
    Activity,
    Zap,
    Book,
    Mic,
    Utensils,
    Phone,
    HelpCircle,
    Shield,
    Info,
    ChevronRight
} from 'lucide-react';

export interface BreadcrumbItem {
    label: string;
    href?: string;
    icon?: React.ElementType;
}

interface BreadcrumbsProps {
    items?: BreadcrumbItem[];
    className?: string;
}

// Route name mappings
const routeNames: Record<string, string> = {
    '/': 'Home',
    '/over-mij': 'Over mij',
    '/contact': 'Contact',
    '/blog': 'Blog',
    '/method': 'Methode',
    '/behandelingen': 'Aanbod',
    '/glowup': 'Glow Up Traject',
    '/darmtraject': 'Darmtraject',
    '/reset-recharge': 'Reset & Recharge',
    '/e-book': 'E-book',
    '/podcast': 'Podcast',
    '/recepten': 'Recepten',
    '/kennismaking': 'Kennismaking',
    '/match-call': 'Match Call',
    '/faq': 'FAQ',
    '/privacy': 'Privacy',
    '/terms': 'Algemene Voorwaarden',
    '/cookie-policy': 'Cookie Beleid',
};

// Icon mappings
const routeIcons: Record<string, React.ElementType> = {
    '/': Home,
    '/over-mij': User,
    '/contact': Mail,
    '/blog': FileText,
    '/method': Layers,
    '/behandelingen': LayoutGrid,
    '/glowup': Sparkles,
    '/darmtraject': Activity,
    '/reset-recharge': Zap,
    '/e-book': Book,
    '/podcast': Mic,
    '/recepten': Utensils,
    '/kennismaking': Phone,
    '/match-call': Phone,
    '/faq': HelpCircle,
    '/privacy': Shield,
    '/terms': FileText,
    '/cookie-policy': Info,
};

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className }) => {
    const location = useLocation();

    // Auto-generate breadcrumbs from current path if items not provided
    const breadcrumbItems = React.useMemo(() => {
        if (items) return items;

        const pathSegments = location.pathname.split('/').filter(Boolean);
        const generatedItems: BreadcrumbItem[] = [];

        // Always start with home
        if (location.pathname !== '/') {
            generatedItems.push({ label: 'Home', href: '/', icon: Home });
        }

        // Build breadcrumbs from path segments
        pathSegments.forEach((segment, index) => {
            const path = '/' + pathSegments.slice(0, index + 1).join('/');
            const label = routeNames[path] || segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
            const icon = routeIcons[path];

            // Last item should not have href (current page)
            if (index === pathSegments.length - 1) {
                generatedItems.push({ label, icon });
            } else {
                generatedItems.push({ label, href: path, icon });
            }
        });

        return generatedItems;
    }, [items, location.pathname]);

    // Don't show breadcrumbs on homepage or linktree
    if (location.pathname === '/' || location.pathname === '/linktree') {
        return null;
    }

    // Don't render if only one item (just the current page)
    if (breadcrumbItems.length < 2 && !items) {
        return null;
    }

    return (
        <motion.nav
            aria-label="Breadcrumb"
            className={`container mx-auto px-6 pt-24 pb-2 ${className || ''}`}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
        >
            <ol className="flex items-center gap-2 text-sm flex-wrap">
                {breadcrumbItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <li key={index} className="flex items-center gap-2">
                            {item.href ? (
                                <Link
                                    to={item.href}
                                    className="flex items-center gap-1.5 text-slate-500 hover:text-slate-700 transition-colors"
                                >
                                    {Icon && <Icon className="w-4 h-4" />}
                                    <span>{item.label}</span>
                                </Link>
                            ) : (
                                <span className="flex items-center gap-1.5 text-slate-800 font-medium">
                                    {Icon && <Icon className="w-4 h-4" />}
                                    <span>{item.label}</span>
                                </span>
                            )}
                            {index < breadcrumbItems.length - 1 && (
                                <ChevronRight className="w-4 h-4 text-slate-400" />
                            )}
                        </li>
                    );
                })}
            </ol>
        </motion.nav>
    );
};
