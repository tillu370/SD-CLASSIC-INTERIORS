import { useEffect, useState } from 'react';

export type Route =
  | { name: 'home' }
  | { name: 'samples' }
  | { name: 'sample'; slug: string }
  | { name: 'category'; category: string }
  | { name: 'project'; category: string; slug: string }
  | { name: 'service'; id: string }
  | { name: 'guide' };

export function parseHash(hash: string): Route {
  const parts = hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  if (hash.startsWith('#/') && parts[0] === 'samples') {
    if (parts[1]) return { name: 'sample', slug: parts[1] };
    return { name: 'samples' };
  }
  if (hash.startsWith('#/') && parts[0] === 'projects') {
    // Keep existing shared sample links working after moving these cards out of Projects.
    if (parts[2] && SAMPLE_PROJECT_SLUGS.has(parts[2])) return { name: 'sample', slug: parts[2] };
    if (parts[1] && parts[2]) return { name: 'project', category: parts[1], slug: parts[2] };
    if (parts[1]) return { name: 'category', category: parts[1] };
  }
  if (hash.startsWith('#/') && parts[0] === 'services' && parts[1]) {
    return { name: 'service', id: parts[1] };
  }
  if (hash.startsWith('#/') && parts[0] === 'guide') return { name: 'guide' };
  return { name: 'home' };
}

const SAMPLE_PROJECT_SLUGS = new Set(['budget-package-2bhk', 'budget-package-3bhk']);

export function useHashRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parseHash(window.location.hash));

  useEffect(() => {
    const onChange = () => setRoute(parseHash(window.location.hash));
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return route;
}

export const categoryPath = (category: string) => `#/projects/${category}`;
export const projectPath = (category: string, slug: string) => `#/projects/${category}/${slug}`;
export const servicePath = (id: string) => `#/services/${id}`;
export const sampleDesignsPath = () => '#/samples';
export const sampleDesignPath = (slug: string) => `#/samples/${slug}`;
