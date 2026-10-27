import Section from './Section';
import Reveal from './Reveal';

const isTodo = (value) => typeof value === 'string' && value.startsWith('TODO');

function Timeline({ entries, titleKey }) {
  return (
    <ol className="timeline">
      {entries.map((entry, index) => (
        <Reveal as="li" key={`${entry.org}-${index}`} delay={index * 70}>
          <h4 style={isTodo(entry[titleKey]) ? { color: 'var(--text-faint)' } : undefined}>
            {entry[titleKey]}
          </h4>
          <p className="org">{entry.org}</p>
          <p className="period">{entry.period}</p>
          {entry.points?.length > 0 && (
            <ul>
              {entry.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          )}
        </Reveal>
      ))}
    </ol>
  );
}

export default function Experience({ experience, education }) {
  return (
    <Section id="experience" tag="04 — Experience" title="Where I've worked & studied">
      <div className="two-col">
        <div>
          <h3 className="col-title">Experience</h3>
          <Timeline entries={experience} titleKey="role" />
        </div>
        <div>
          <h3 className="col-title">Education</h3>
          <Timeline entries={education} titleKey="qualification" />
        </div>
      </div>
    </Section>
  );
}
