import PlaceholderSlot from "@/components/PlaceholderSlot";

/*
 * Section 3: Grades and Projections — copy verbatim from
 * marketing-site-copy.md. Two clip placeholders per Step MS.5: the
 * grade-card expand interaction, and the same interaction on the
 * projections view.
 */

export default function Section3GradesProjections() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-14">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-text sm:text-4xl">
            Find out who actually won the draft
          </h2>
          <p className="text-lg leading-normal text-muted">
            Right after the last pick, every team gets graded. Pick by pick,
            so you can see exactly where the grade came from. Projections run
            on your league&rsquo;s real scoring settings. Not a generic
            ranking. Your league, your numbers.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <PlaceholderSlot label="Clip placeholder — grade card expanding into pick-by-pick breakdown" />
          <PlaceholderSlot label="Clip placeholder — projections view, same expand interaction" />
        </div>
      </div>
    </section>
  );
}
