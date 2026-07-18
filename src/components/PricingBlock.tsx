/*
 * Pricing block — copy verbatim from marketing-site-copy.md. Placed
 * after the feature sections and before the final CTA, per Entry 212's
 * locked placement rule — never in the hero. The CTA links to the
 * absolute purchase URL per Entry 208, same target as the Hero CTA,
 * with the CTA text locked to "Buy 2026 On The Clock" everywhere it
 * appears.
 */

export default function PricingBlock() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-14">
      <div className="flex flex-col items-center gap-4 rounded-md border border-muted/20 bg-white px-8 py-12 text-center">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-text sm:text-4xl">
          One price. One draft. No subscription.
        </h2>
        <p className="max-w-2xl text-lg leading-normal text-muted">
          $49.95 per league, per draft event. Pay once. Run your draft. Keep
          it for the season.
        </p>
        <p className="text-sm text-muted">All sales are final.</p>
        <a
          href="https://app.draftontheclock.com/purchase"
          className="mt-2 inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-bold text-text transition-colors hover:bg-accent-2"
        >
          Buy 2026 On The Clock
        </a>
      </div>
    </section>
  );
}
