import { useEffect, useState } from 'react';

/** Returns the id of the section currently in view, for highlighting the nav. */
export default function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [ids]);

  return active;
}
