import Section from './Section';
import Reveal from './Reveal';

function ProjectCard({ project, delay }) {
  const style = project.accent ? { '--card-accent': `var(--${project.accent})` } : undefined;

  return (
    <Reveal
      as="article"
      delay={delay}
      className={`project-card${project.featured ? ' is-featured' : ''}`}
      style={style}
    >
      <div className="project-head">
        <h3>{project.title}</h3>
        {project.featured && <span className="featured-flag">Featured</span>}
      </div>

      <p>{project.summary}</p>

      {project.tags?.length > 0 && (
        <ul className="chips">
          {project.tags.map((tag) => (
            <li className="chip" key={tag}>{tag}</li>
          ))}
        </ul>
      )}

      {project.url && (
        <a
          className="project-link"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View source of ${project.title} on GitHub`}
        >
          View source
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" /></svg>
        </a>
      )}
    </Reveal>
  );
}

export default function Projects({ projects, githubUrl }) {
  return (
    <Section
      id="projects"
      tag="03 — Projects"
      title="Things I've built"
      lede="Work systems I delivered on the job, and personal projects on GitHub. Where source is public, the card links to it."
    >
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} delay={index * 70} />
        ))}
      </div>

      {githubUrl && (
        <a className="btn btn-ghost btn-wide" href={githubUrl} target="_blank" rel="noopener noreferrer">
          See all repositories on GitHub
        </a>
      )}
    </Section>
  );
}
