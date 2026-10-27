import { useEffect, useState } from 'react';
import useScrollSpy from '../hooks/useScrollSpy';

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

const SECTION_IDS = LINKS.map((link) => link.id);

export default function Header({ name, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const active = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <header className={`site-header${stuck ? ' is-stuck' : ''}`}>
      <nav className="nav" aria-label="Main">
        <a className="brand" href="#top">
          <span className="brand-mark" aria-hidden="true">{initials}</span>
          <span className="brand-name">{name}</span>
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        <ul className={`nav-links${open ? ' is-open' : ''}`} id="nav-links">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={active === link.id ? 'is-active' : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              className="theme-toggle"
              onClick={onToggleTheme}
              title="Switch theme"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              <svg className="icon-moon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
              </svg>
              <svg className="icon-sun" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="4.2" />
                <path d="M12 2v2.6M12 19.4V22M2 12h2.6M19.4 12H22M4.9 4.9l1.9 1.9M17.2 17.2l1.9 1.9M19.1 4.9l-1.9 1.9M6.8 17.2l-1.9 1.9" />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
