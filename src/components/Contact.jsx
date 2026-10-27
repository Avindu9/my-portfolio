const isTodo = (value) => typeof value === 'string' && value.startsWith('TODO');

export default function Contact({ profile }) {
  const links = [];

  if (profile.email && !isTodo(profile.email)) {
    links.push({ label: 'Email me', href: `mailto:${profile.email}`, primary: true });
  }
  if (profile.social?.linkedin) links.push({ label: 'LinkedIn', href: profile.social.linkedin });
  if (profile.social?.github) links.push({ label: 'GitHub', href: profile.social.github });
  if (profile.resumeUrl) links.push({ label: 'Download CV', href: profile.resumeUrl });

  return (
    <section className="section" id="contact">
      <div className="wrap">
        <div className="cta">
          <p className="section-tag">05 — Contact</p>
          <h2 className="section-title">Let&apos;s build something</h2>
          <p className="section-lede">
            Open to full-stack roles and freelance work. The quickest way to reach me is email
            or LinkedIn.
          </p>
          <div className="cta-actions">
            {links.map((link) => (
              <a
                key={link.label}
                className={`btn ${link.primary ? 'btn-primary' : 'btn-ghost'}`}
                href={link.href}
                {...(link.href.startsWith('http')
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
