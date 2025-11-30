import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items?: BreadcrumbItem[];
    className?: string;
}

const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: 'easeOut' as const,
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.3,
            ease: 'easeOut' as const,
        },
    },
};

// Route name mappings
const routeNames: Record<string, string> = {
    '/': 'Home',
    '/about': 'Over mij',
    '/contact': 'Contact',
    '/blog': 'Blog',
    '/method': 'Methode',
    '/glowup': 'Glow Up Traject',
    '/darmtraject': 'Darmtraject',
    '/ebook': 'E-book',
    '/podcast': 'Podcast',
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
            const label = routeNames[path] || segment.charAt(0).toUpperCase() + segment.slice(1);

            // Last item should not have href (current page)
            if (index === pathSegments.length - 1) {
                generatedItems.push({ label });
            } else {
                generatedItems.push({ label, href: path });
            }
        });

        return generatedItems;
    }, [items, location.pathname]);

    // Don't show breadcrumbs on homepage
    if (location.pathname === '/' && !items) {
        return null;
    }

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={className}
        >
            <Breadcrumb>
                <BreadcrumbList>
                    {breadcrumbItems.map((item, index) => (
                        <React.Fragment key={index}>
                            <motion.div variants={itemVariants}>
                                <BreadcrumbItem>
                                    {item.href ? (
                                        <BreadcrumbLink asChild>
                                            <Link to={item.href} className="flex items-center gap-1.5">
                                                {index === 0 && <Home className="w-3.5 h-3.5" />}
                                                <span>{item.label}</span>
                                            </Link>
                                        </BreadcrumbLink>
                                    ) : (
                                        <BreadcrumbPage>{item.label}</BreadcrumbPage>
                                    )}
                                </BreadcrumbItem>
                            </motion.div>
                            {index < breadcrumbItems.length - 1 && (
                                <BreadcrumbSeparator>
                                    <ChevronRight className="w-3.5 h-3.5" />
                                </BreadcrumbSeparator>
                            )}
                        </React.Fragment>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
        </motion.div>
    );
};
