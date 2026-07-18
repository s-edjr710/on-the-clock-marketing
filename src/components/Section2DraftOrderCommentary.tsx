import PlaceholderSlot from "@/components/PlaceholderSlot";

/*
 * Section 2: Draft Order Reveal + Live Commentary & Draft Stock — copy
 * verbatim from marketing-site-copy.md. The commentary-example callout is
 * rendered exactly as the copy file specifies it: a placeholder note
 * about the example itself being pending rework, not invented sample
 * commentary text (per Step MS.4's explicit instruction).
 */

export default function Section2DraftOrderCommentary() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <div className="flex flex-col gap-6">
        <h2 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-text sm:text-4xl">
          The two moments your league will talk about all year
        </h2>
        <div className="flex max-w-3xl flex-col gap-4 text-lg leading-normal text-muted">
          <p>
            However your league has always settled draft order (a hat, beer
            pong, a Wonderlic test, a backyard Olympics), On The Clock gives
            the moment itself something better: a live reveal. Positions
            spin. One by one, they slam into place while the room holds its
            breath.
          </p>
          <p>
            Then the draft starts, and every pick gets judged. Live
            commentary the second it happens. A 1 to 5 Draft Stock rating on
            every pick. Your league&rsquo;s reactions, in real time.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <PlaceholderSlot label="Commentary example: placeholder pending sprint — current output flagged as too flat, being reworked pre-launch. Screenshot slot: Clock Zone + Commentary Strip in one frame." />
        <PlaceholderSlot label="Clip placeholder — full “reveal all” sequence, positions spinning and locking" />
      </div>
    </section>
  );
}
