import PlaceholderSlot from "@/components/PlaceholderSlot";

/*
 * Section 5: Reactions, Roster Tracking, League Voting — copy verbatim
 * from marketing-site-copy.md. Two screenshot placeholders per Step
 * MS.6 and Entry 211's shot list: yes/no vote question, results view.
 */

export default function Section5ReactionsRosterVoting() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <div className="flex flex-col gap-6">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-text sm:text-4xl">
          The little things that make it feel like your league
        </h2>
        <p className="max-w-3xl text-lg leading-normal text-muted">
          React to picks live. Watch rosters fill out in real time. Settle a
          rule change with a vote instead of a group text that never ends.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <PlaceholderSlot label="Screenshot placeholder — yes/no vote question mid-vote" />
        <PlaceholderSlot label="Screenshot placeholder — completed vote results view" />
      </div>
    </section>
  );
}
