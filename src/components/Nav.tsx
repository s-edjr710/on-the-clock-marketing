import Image from "next/image";
import Link from "next/link";

/*
 * Marketing site navigation, per Entry 212 / copy file "Nav" block:
 *   Home · How It Works · Features · FAQ · About · Pricing
 * All items anchor-link to homepage sections except About, which is a
 * standalone page (/about, built in Step MS.8). Anchor targets
 * (#how-it-works, #features, #faq, #pricing) are created in later
 * steps — links are present now, sections scroll to nothing until then.
 */

const navLinks = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Features", href: "/#features" },
  { label: "FAQ", href: "/#faq" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/#pricing" },
];

export default function Nav() {
  return (
    <header className="w-full border-b border-muted/20 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" aria-label="On The Clock home" className="shrink-0">
          <Image
            src="/brand/OTC Lockup - Navy.png"
            alt="On The Clock"
            width={201}
            height={32}
            priority
            className="h-8 w-auto"
            style={{ width: "auto", height: "auto" }}
          />
        </Link>
        <ul className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-text transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
