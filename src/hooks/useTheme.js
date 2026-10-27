import { useCallback, useEffect, useState } from 'react';

// Bumping this key resets every visitor to the dark default once, ignoring
// any light setting they picked under an older version of the site.
const STORAGE_KEY = 'theme-v2';

function readStored() {
  try {
    localStorage.removeItem('theme'); // clear the pre-v2 value
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null; // private browsing can throw
  }
}

/**
 * Dark/light theme, persisted per browser and applied to <html data-theme>.
 *
 * Dark is the default look of this site, so the system preference is not
 * consulted - only a visitor's own click on the toggle changes it.
 */
export default function useTheme() {
  const [theme, setTheme] = useState(() => readStored() || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  }, []);

  return { theme, toggle };
}
