/*
 * Hero section — copy verbatim from marketing-site-copy.md "Hero" block.
 *
 * Per Entry 209, the hero carries a muted, looping, autoplay video
 * background. The real capture is blocked on Phase 13 staging (Entry 211),
 * so this renders a clearly-labeled dark placeholder panel — NOT a broken
 * <video> tag — swapped for the real clip in Step MS.15.
 *
 * The CTA links to the absolute purchase URL defined by the Paywall plan
 * (Step PW.5) — https://app.draftontheclock.com/purchase — per Entry 208.
 */

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Video background slot — placeholder until the Entry 211 capture (MS.15). */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-text"
      >
        <span className="absolute bottom-4 right-4 text-xs font-medium text-white/40">
          Video placeholder — Commissioner Panel overlay clip
        </span>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 pt-28 pb-12 sm:pt-36 sm:pb-16">
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
          Draft night, without the day job.
        </h1>
        <p className="max-w-2xl text-lg leading-normal text-white/80">
          Twenty years commissioning a fantasy league taught us something. Most
          people running the draft never really get to enjoy it. Some get used
          to it. We think there&rsquo;s a better way.
        </p>
        <a
          href="https://app.draftontheclock.com/purchase"
          className="mt-2 inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-bold text-text transition-colors hover:bg-white"
        >
          Buy 2026 On The Clock
        </a>
      </div>
    </section>
  );
}
