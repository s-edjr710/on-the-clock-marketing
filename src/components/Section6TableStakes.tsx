/*
 * Section 6: Everything You'd Expect — copy verbatim from
 * marketing-site-copy.md. Text-only, no placeholder media per Step
 * MS.6. Snake draft only — auction draft support is never implied,
 * per Entry 212.
 */

const TABLE_STAKES_ITEMS = [
  "Custom league settings and scoring",
  "Draft results export, PDF or CSV",
  "Real-time sync for every manager",
  "Works on any device",
];

export default function Section6TableStakes() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <div className="flex flex-col gap-6">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-text sm:text-4xl">
          The basics are covered
        </h2>
        <ul className="flex max-w-2xl flex-col gap-3 text-lg leading-normal text-muted">
          {TABLE_STAKES_ITEMS.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden="true">&bull;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
