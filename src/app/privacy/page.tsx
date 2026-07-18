import type { Metadata } from "next";

/*
 * Privacy page — copy from marketing-site-implementation-plan.md Step
 * MS.9. Discloses Stripe by name, an explicit exception to the site's
 * no-vendor-names rule per Entry 221. The database provider is
 * genericized ("our database provider") rather than named, per Entry 228.
 */

export const metadata: Metadata = {
  title: "Privacy Policy — On The Clock",
  description: "How On The Clock collects, uses, and retains your data.",
};

export default function Privacy() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <div className="flex max-w-3xl flex-col gap-6">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-text sm:text-4xl">
          Privacy Policy
        </h1>
        <div className="flex flex-col gap-4 text-lg leading-normal text-muted">
          <p>
            On The Clock collects the information needed to run your account
            and your league&rsquo;s draft: your name, email address, and
            league configuration you provide. If you purchase a league,
            payment is processed by Stripe — we never see or store your
            card details. Your account and draft data are stored with our
            database provider. We use this information only to operate the
            product: creating your account, running your draft, and sending
            you purchase confirmations and support responses.
          </p>
          <p>
            We do not sell your information to anyone. We do not use it for
            advertising. Draft and account data is retained for the season;
            purchase records are retained longer for financial and tax
            purposes.
          </p>
          <p>
            Questions about your data — reach out anytime at{" "}
            <a
              href="mailto:support@draftontheclock.com"
              className="text-accent transition-colors hover:text-accent-2"
            >
              support@draftontheclock.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
