import PlaceholderSlot from "@/components/PlaceholderSlot";

/*
 * Section 1: Commissioner Control — copy verbatim from
 * marketing-site-copy.md. Screenshot slot per Entry 211's shot list:
 * Commissioner Panel overlay as the primary shot, league creation and
 * results export as smaller supporting shots.
 */

export default function Section1CommissionerControl() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-text sm:text-4xl">
            You&rsquo;ve done this before
          </h2>
          <div className="flex flex-col gap-4 text-lg leading-normal text-muted">
            <p>
              Ten seconds left. You&rsquo;re shouting the countdown, typing the
              pick, and checking your notes at the same time. Someone&rsquo;s
              connection drops. Someone already took the guy you wanted.
              You&rsquo;re the only one who remembers any of this, because
              you&rsquo;re the one tracking the whole board.
            </p>
            <p>Everyone else is drafting. You&rsquo;re working.</p>
            <p>
              On The Clock runs the clock, tracks the board, and handles the
              setup. You still run the league. You just get to draft like
              everyone else for once.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <PlaceholderSlot
            label="Screenshot placeholder — Commissioner Panel overlay sliding in over the manager's live portal"
            className="min-h-[320px]"
          />
          <div className="grid grid-cols-2 gap-4">
            <PlaceholderSlot label="Screenshot placeholder — League creation" />
            <PlaceholderSlot label="Screenshot placeholder — Results export" />
          </div>
        </div>
      </div>
    </section>
  );
}
