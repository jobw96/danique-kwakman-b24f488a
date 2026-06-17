import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { findRedirect } from '@/config/redirects';
import { trackRedirect } from '@/lib/errorTracking';

/**
 * Vangt routes af die in de redirect-map staan en stuurt ze door naar de
 * nieuwe URL. `replace: true` haalt de oude URL uit de history — gedrag dat
 * lijkt op een server-side 301/302.
 *
 * Plaats binnen <BrowserRouter>, vóór <Routes>.
 */
export const RedirectHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const rule = findRedirect(location.pathname);
    if (!rule) return;
    const target = `${rule.to}${location.search}${location.hash}`;
    trackRedirect(location.pathname, rule.to, rule.type);
    navigate(target, { replace: rule.type === 'permanent' });
  }, [location.pathname, location.search, location.hash, navigate]);

  return null;
};

export default RedirectHandler;
