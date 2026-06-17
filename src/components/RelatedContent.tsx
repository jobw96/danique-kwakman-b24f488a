import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export interface RelatedItem {
  /** Internal path, e.g. "/recepten" — full path, no fragments. */
  href: string;
  /** Descriptive anchor text. Avoid "klik hier" / "lees meer". */
  title: string;
  /** One-sentence description shown under the title. */
  description: string;
}

interface RelatedContentProps {
  /** 3–5 related items recommended. */
  items: RelatedItem[];
  /** Section heading. Defaults to "Verder lezen". */
  heading?: string;
  /** Heading level — match it to the surrounding outline. Defaults to h2. */
  headingLevel?: 2 | 3;
  /** Optional accessible label for the <aside>. */
  ariaLabel?: string;
  className?: string;
}

/**
 * Related-content block for internal linking & SEO.
 *
 * - Rendered as <aside> with aria-label so screen readers announce it as a
 *   complementary section.
 * - Each link uses the item title as anchor text (no "click here").
 * - Always uses absolute internal paths via React Router <Link>.
 */
export const RelatedContent = ({
  items,
  heading = 'Verder lezen',
  headingLevel = 2,
  ariaLabel,
  className,
}: RelatedContentProps) => {
  if (!items?.length) return null;

  const HeadingTag = (`h${headingLevel}` as unknown) as keyof JSX.IntrinsicElements;

  return (
    <aside
      aria-label={ariaLabel ?? heading}
      className={`container mx-auto px-6 py-12 ${className ?? ''}`}
    >
      <HeadingTag className="text-2xl md:text-3xl font-display text-slate-900 mb-6">
        {heading}
      </HeadingTag>
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 list-none p-0">
        {items.slice(0, 5).map((item) => (
          <li key={item.href}>
            <Link
              to={item.href}
              className="group block h-full rounded-md border border-slate-200 bg-white p-5 transition-colors hover:border-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              <span className="flex items-center gap-2 text-base font-medium text-slate-900 group-hover:text-slate-700">
                {item.title}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
              <span className="mt-2 block text-sm text-slate-600 leading-relaxed">
                {item.description}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default RelatedContent;
