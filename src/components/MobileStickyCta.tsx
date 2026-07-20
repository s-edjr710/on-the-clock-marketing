/*
 * Sticky bottom CTA, mobile only (Entry 209 / Step MS.11) — keeps
 * "Buy 2026 On The Clock" reachable on phone widths without scrolling
 * back up to the Hero or down to the Pricing block. Hidden at and
 * above the tablet breakpoint, where the full nav and in-page CTAs are
 * already close at hand.
 */

export default function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-muted/20 bg-white p-3 md:hidden">
      <a
        href="https://app.draftontheclock.com/purchase"
        className="flex w-full items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-bold text-text transition-colors"
      >
        Buy 2026 On The Clock
      </a>
    </div>
  );
}
