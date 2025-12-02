import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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
    '/kennismaking': 'Kennismaking',
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
            className={`container mx-auto px-6 pt-24 pb-2 ${className || ''}`}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
        >
            <ol className="flex items-center gap-2 text-sm flex-wrap">
                {breadcrumbItems.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                        {item.href ? (
                            <Link
                                to={item.href}
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-gray-900 font-normal">
                                {item.label}
                            </span>
                        )}
                        {index < breadcrumbItems.length - 1 && (
                            <span className="text-gray-400">/</span>
                        )}
                    </li>
                ))}
            </ol>
        </motion.nav>
    );
};
