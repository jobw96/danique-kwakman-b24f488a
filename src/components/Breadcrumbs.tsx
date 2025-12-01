import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { motion } from 'framer-motion';

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items?: BreadcrumbItem[];
    className?: string;
}

// Route name mappings
const routeNames: Record<string, string> = {
    '/': 'Home',
    '/about': 'Over mij',
    '/contact': 'Contact',
    '/blog': 'Blog',
    '/method': 'Methode',
    '/glowup': 'Glow Up Traject',
    '/darmtraject': 'Darmtraject',
    '/reset-recharge': 'Reset & Recharge',
    '/ebook': 'E-book',
    '/podcast': 'Podcast',
    '/recepten': 'Recepten',
    '/match-call': 'Match Call',
    '/faq': 'FAQ',
    '/privacy': 'Privacy',
    '/terms': 'Algemene Voorwaarden',
    '/cookie-policy': 'Cookie Beleid',
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
            generatedItems.push({ label: 'Home', href: '/' });
        }

        // Build breadcrumbs from path segments
        pathSegments.forEach((segment, index) => {
            const path = '/' + pathSegments.slice(0, index + 1).join('/');
            const label = routeNames[path] || segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');

            // Last item should not have href (current page)
            if (index === pathSegments.length - 1) {
                generatedItems.push({ label });
            } else {
                generatedItems.push({ label, href: path });
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
            className={`container mx-auto px-6 pt-28 pb-4 ${className || ''}`}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
        >
            <ol className="flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap">
                {breadcrumbItems.map((item, index) => (
                    <li key={index} className="flex items-center gap-1.5">
                        {item.href ? (
                            <Link 
                                to={item.href} 
                                className="flex items-center gap-1 hover:text-foreground transition-colors"
                            >
                                {index === 0 && <Home className="w-3.5 h-3.5" />}
                                <span>{item.label}</span>
                            </Link>
                        ) : (
                            <span className="text-foreground font-medium truncate max-w-[200px] md:max-w-none">
                                {item.label}
                            </span>
                        )}
                        {index < breadcrumbItems.length - 1 && (
                            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50 flex-shrink-0" />
                        )}
                    </li>
                ))}
            </ol>
        </motion.nav>
    );
};
