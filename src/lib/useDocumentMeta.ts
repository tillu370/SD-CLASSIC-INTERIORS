import { useEffect } from 'react';

/**
 * Sets the document title and meta description for the lifetime of a page/route,
 * restoring the previous values on unmount so other routes aren't affected.
 */
export function useDocumentMeta(title: string, description?: string) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    let previousDescription: string | null = null;
    const meta = description ? document.querySelector('meta[name="description"]') : null;
    if (meta && description) {
      previousDescription = meta.getAttribute('content');
      meta.setAttribute('content', description);
    }

    window.scrollTo(0, 0);

    return () => {
      document.title = previousTitle;
      if (meta && previousDescription !== null) {
        meta.setAttribute('content', previousDescription);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description]);
}
