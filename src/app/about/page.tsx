import type { Metadata } from "next";

/*
 * About page — copy verbatim from marketing-site-copy.md "ABOUT PAGE"
 * block. First-person "we" throughout, per the copy file's own resolved
 * note (kept, not switched to "I"). CTA links to the same absolute
 * purchase URL as the Hero CTA, per Entry 208.
 */

export const metadata: Metadata = {
  title: "About — On The Clock",
  description:
    "Why On The Clock exists — a live draft platform built by a commissioner, for commissioners.",
};

export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <div className="flex max-w-3xl flex-col gap-6">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-text sm:text-4xl">
          Why this exists
        </h1>
        <div className="flex flex-col gap-4 text-lg leading-normal text-muted">
          <p>
            Twenty years ago, our league drafted on Yahoo&rsquo;s built-in
            tool over dial-up. Connections dropped. People got auto-picked.
            Not everyone could even get into the room.
          </p>
          <p>
            So we stopped drafting online and started drafting in person.
            Food, drinks, trash talk, one night a year the whole league
            showed up for.
          </p>
          <p>
            Somebody still had to run it. That was the commissioner. Every
            year, for twenty years, that was the same person: set up the
            room, sort out the screen and the connection, figure out how to
            decide draft order (a hat, beer pong, a Wonderlic test, a
            backyard Olympics, whatever it was that year), settle the
            league&rsquo;s rule debates, and track every vote by hand.
          </p>
          <p>
            Then the draft itself. Running the clock off a phone. Typing in
            every pick. Calling out the ten-second warning. Memorizing the
            board well enough to catch it when someone tried to draft a
            player already taken three rounds back.
          </p>
          <p>Everyone else got to focus on their team. The commissioner didn&rsquo;t.</p>
          <p>We got used to it. Then we didn&rsquo;t want to be used to it anymore.</p>
          <p>
            On The Clock is what we built instead: a live draft platform
            that runs the parts of draft night nobody enjoys running, so the
            commissioner gets to draft too.
          </p>
          <p>A draft tool for commissioners. Built by one.</p>
        </div>
        <a
          href="https://app.draftontheclock.com/purchase"
          className="mt-2 inline-flex w-fit items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-bold text-text transition-colors hover:bg-accent-2"
        >
          Buy 2026 On The Clock
        </a>
      </div>
    </section>
  );
}
