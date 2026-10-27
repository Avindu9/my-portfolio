import { useState } from 'react';

export default function Hero({ profile }) {
  const [photoFailed, setPhotoFailed] = useState(false);
  const firstName = profile.name.split(' ')[0];
  const initials = profile.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-text">
          <p className="eyebrow">
            <span className="dot" aria-hidden="true" />
            Available for work — {profile.location}
          </p>

          <h1>
            Hi, I&apos;m <span className="grad">{firstName}</span>.
            <br />
            {profile.headline}.
          </h1>

          {profile.currentRole && <p className="current-role">{profile.currentRole}</p>}

          <p className="lede">{profile.tagline}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">View my work</a>
            <a className="btn btn-ghost" href="#contact">Get in touch</a>
          </div>

          <ul className="stats">
            {profile.stats.map((stat) => (
              <li key={stat.label}>
                <span className="value">{stat.value}</span>
                <span className="label">{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-portrait">
          <div className="portrait-ring" aria-hidden="true" />
          <figure className="portrait">
            {!photoFailed ? (
              <img
                src="img/profile.jpg"
                alt={`Portrait of ${profile.name}`}
                width="440"
                height="440"
                onError={() => setPhotoFailed(true)}
              />
            ) : (
              <div className="portrait-fallback">
                <span aria-hidden="true">{initials}</span>
                <p>
                  Save your photo as
                  <br />
                  <code>public/img/profile.jpg</code>
                </p>
              </div>
            )}
          </figure>
          <div className="portrait-badge">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 13 4 4L19 7" /></svg>
            <span>{profile.company}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
