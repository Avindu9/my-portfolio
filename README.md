# Portfolio — React version

The same portfolio as the plain-HTML site in the parent folder, rebuilt as a React 19 + Vite
app. Same design, same content file, same CSS — split into components with hooks for the
behaviour.

## Run it

```bash
npm install
npm run dev
```

Open `http://localhost:5173`. Edits appear instantly (hot module reload).

| Command | What it does |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run lint` | Lint with oxlint |

## Edit your content

Everything is in **`src/data/profile.js`** - the same content as the plain version, exported as
an ES module. It is filled in from your CV.

Static files already in place:

| File | Used for |
|---|---|
| `public/img/profile.jpg` | Your photo in the hero |
| `public/cv/Avindu-Dilshan-CV.pdf` | The "Download CV" button |

## Structure

```
react/
├── index.html              Shell: fonts, meta tags, <div id="root">
├── vite.config.js          base: './' so the build works from any path
├── public/img/             Static files copied as-is (your photo goes here)
└── src/
    ├── main.jsx            Entry point
    ├── App.jsx             Composes the sections
    ├── index.css           All styling (shared with the plain version)
    ├── data/profile.js     ← YOUR CONTENT
    ├── components/
    │   ├── Header.jsx      Nav, mobile menu, theme button
    │   ├── Hero.jsx        Intro, stats, photo with fallback
    │   ├── Section.jsx     Shared section shell (tag + title + lede)
    │   ├── Skills.jsx      Skill groups as chips
    │   ├── Projects.jsx    Project cards
    │   ├── Experience.jsx  Two timelines
    │   ├── Contact.jsx     Call to action and links
    │   └── Reveal.jsx      Wrapper that fades children in on scroll
    └── hooks/
        ├── useTheme.js     Dark/light, persisted in localStorage
        ├── useReveal.js    Scroll-into-view animation with a safety net
        └── useScrollSpy.js Highlights the nav link for the section in view
```

## Deploy

```bash
npm run build
```

That produces `dist/`. Because `base` is `'./'`, the folder works anywhere — a domain root,
a GitHub Pages project subfolder, or opened from disk.

**GitHub Pages:** push the repo, then either commit `dist/` to a `gh-pages` branch, or add a
GitHub Actions workflow that runs `npm ci && npm run build` and publishes `dist/`.

## Which version should you publish?

| | Plain HTML | React |
|---|---|---|
| Setup | None — double-click `index.html` | `npm install` |
| Deploy | Push the folder | Build first, publish `dist/` |
| Page weight | ~15 KB | ~73 KB gzipped |
| Best for | Getting online today | Showing React on your CV |

Both render identically. Pick one to publish and delete the other when you have decided.
