/** Shared section shell: numbered tag, title and optional lede. */
export default function Section({ id, tag, title, lede, children }) {
  return (
    <section className="section" id={id}>
      <div className="wrap">
        <p className="section-tag">{tag}</p>
        <h2 className="section-title">{title}</h2>
        {lede && <p className="section-lede">{lede}</p>}
        {children}
      </div>
    </section>
  );
}
