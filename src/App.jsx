import { useEffect } from 'react';
import profile from './data/profile';
import useTheme from './hooks/useTheme';
import useAnchorScroll from './hooks/useAnchorScroll';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function App() {
  const { theme, toggle } = useTheme();
  useAnchorScroll();

  useEffect(() => {
    document.title = `${profile.name} — ${profile.headline}`;
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow" aria-hidden="true" />

      <Header name={profile.name} theme={theme} onToggleTheme={toggle} />

      <main id="main">
        <Hero profile={profile} />

        <Section id="about" tag="01 — About" title="A bit about me">
          <div className="about-body">
            {profile.about.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Skills skills={profile.skills} softSkills={profile.softSkills} />
        <Projects projects={profile.projects} githubUrl={profile.social?.github} />
        <Experience experience={profile.experience} education={profile.education} />
        <Contact profile={profile} />
      </main>

      <footer className="site-footer">
        <div className="wrap footer-inner">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p className="footer-note">Built with React, Vite and plain CSS.</p>
        </div>
      </footer>
    </>
  );
}
