import Link from "next/link";

/*
 * Marketing site footer, per copy file "Footer" block:
 *   - support@draftontheclock.com
 *   - © Strategic Legacy Collective, LLC
 *   - Terms · Privacy · All sales final
 *
 * "Terms" points to the canonical app-hosted page at
 * app.draftontheclock.com/terms (Paywall Step PW.3), not a new
 * marketing page — one canonical URL, the same one registered with
 * Stripe (Entry 221). "Privacy" points to the marketing /privacy page
 * built in Step MS.9. "All sales final" is plain text, not a link.
 */

export default function Footer() {
  return (
    <footer className="w-full border-t border-muted/20 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-muted">
        <a
          href="mailto:support@draftontheclock.com"
          className="transition-colors hover:text-accent"
        >
          support@draftontheclock.com
        </a>
        <p>© Strategic Legacy Collective, LLC</p>
        <p className="flex flex-wrap items-center gap-2">
          <a
            href="https://app.draftontheclock.com/terms"
            className="transition-colors hover:text-accent"
          >
            Terms
          </a>
          <span aria-hidden="true">·</span>
          <Link href="/privacy" className="transition-colors hover:text-accent">
            Privacy
          </Link>
          <span aria-hidden="true">·</span>
          <span className="italic text-muted/70">All sales final</span>
        </p>
      </div>
    </footer>
  );
}
