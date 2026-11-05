import { useEffect, useState } from 'react';

export type Route =
  | { name: 'home' }
  | { name: 'category'; category: string }
  | { name: 'project'; category: string; slug: string }
  | { name: 'guide' };

export function parseHash(hash: string): Route {
  const parts = hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  if (hash.startsWith('#/') && parts[0] === 'projects') {
    if (parts[1] && parts[2]) return { name: 'project', category: parts[1], slug: parts[2] };
    if (parts[1]) return { name: 'category', category: parts[1] };
  }
  if (hash.startsWith('#/') && parts[0] === 'guide') return { name: 'guide' };
  return { name: 'home' };
}

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
