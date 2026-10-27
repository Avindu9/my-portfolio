import Section from './Section';
import Reveal from './Reveal';

function SkillCard({ title, items, delay }) {
  return (
    <Reveal className="skill-card" delay={delay}>
      <h3>{title}</h3>
      <ul className="chips">
        {items.map((item) => (
          <li className="chip" key={item}>{item}</li>
        ))}
      </ul>
    </Reveal>
  );
}

export default function Skills({ skills, softSkills }) {
  const groups = [
    ...skills.map((group) => ({ title: group.group, items: group.items })),
    ...(softSkills?.length ? [{ title: 'Soft skills', items: softSkills }] : []),
  ];

  return (
    <Section id="skills" tag="02 — Skills" title="What I work with">
      <div className="skill-grid">
        {groups.map((group, index) => (
          <SkillCard key={group.title} title={group.title} items={group.items} delay={index * 70} />
        ))}
      </div>
    </Section>
  );
}
