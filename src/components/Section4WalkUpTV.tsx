import PlaceholderSlot from "@/components/PlaceholderSlot";

/*
 * Section 4: Walk-Up Songs + TV Display — copy verbatim from
 * marketing-site-copy.md. Two placeholders per Step MS.5: the walk-up
 * handoff clip, and the composited TV Display living-room image.
 */

export default function Section4WalkUpTV() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <div className="flex flex-col gap-6">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-text sm:text-4xl">
          Make an entrance
        </h2>
        <div className="flex max-w-3xl flex-col gap-4 text-lg leading-normal text-muted">
          <p>
            Every manager gets a walk-up song, generated fresh for them. New
            every time. Nobody&rsquo;s playing a track the whole room&rsquo;s
            heard a hundred times.
          </p>
          <p>
            The TV Display puts the clock, the board, and the pick on one
            screen. Built for a room, not a laptop.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <PlaceholderSlot label="Clip placeholder — pick submitted, announcement sound, next manager's walk-up song starting with AI-generated title and waveform. Muted by default, visible unmute control." />
        <PlaceholderSlot label="Image placeholder — TV Display composited into approved living-room scene" />
      </div>
    </section>
  );
}
