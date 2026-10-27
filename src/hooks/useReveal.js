import { useEffect, useRef, useState } from 'react';

const reducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Fade an element in when it scrolls into view.
 *
 * Returns [ref, isVisible]. It starts hidden only when the observer is
 * available and motion is allowed, and a 1.5s timer reveals the element
 * regardless - a portfolio that renders blank costs you an interview.
 */
export default function useReveal(delay = 0) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(
    () => reducedMotion() || typeof IntersectionObserver === 'undefined'
  );

  useEffect(() => {
    if (visible) return undefined;
    const node = ref.current;
    if (!node) return undefined;

    let timer;
    const show = () => {
      timer = setTimeout(() => setVisible(true), delay);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          show();
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );
    observer.observe(node);

    // Safety net for browsers that throttle the observer.
    const safety = setTimeout(() => setVisible(true), 1500);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
      clearTimeout(safety);
    };
  }, [delay, visible]);

  return [ref, visible];
}
