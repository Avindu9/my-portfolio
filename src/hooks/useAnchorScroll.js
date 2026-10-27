import { useEffect } from 'react';

const HEADER_OFFSET = 88;

/**
 * Smooth scrolling for every #anchor link on the page - nav links, the hero
 * buttons, the brand mark.
 *
 * Done in JavaScript rather than with CSS `scroll-behavior: smooth`, which some
 * browsers treat as a reason to skip the jump to the fragment entirely - the
 * links then do nothing at all.
 */
export default function useAnchorScroll() {
  useEffect(() => {
    function onClick(event) {
      const link = event.target.closest?.('a[href^="#"]');
      if (!link) return;

      const id = link.getAttribute('href').slice(1);
      if (!id) return;

      const target = document.getElementById(id);
      if (!target) return;

      event.preventDefault();

      const reduced =
        window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const top = target.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;

      const before = window.pageYOffset;
      window.scrollTo({ top, behavior: reduced ? 'auto' : 'smooth' });

      // Some browsers accept a smooth scroll and then do nothing at all.
      // If we have not moved shortly after, jump straight there instead.
      setTimeout(() => {
        if (Math.abs(window.pageYOffset - before) < 2 && Math.abs(top - before) > 2) {
          window.scrollTo(0, top);
        }
      }, 320);

      // Keep the URL shareable without letting the browser jump again.
      window.history?.replaceState(null, '', `#${id}`);
    }

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
}
