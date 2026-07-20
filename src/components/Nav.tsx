"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

/*
 * Marketing site navigation, per Entry 212 / copy file "Nav" block:
 *   Home · How It Works · Features · FAQ · About · Pricing
 * All items anchor-link to homepage sections except About, which is a
 * standalone page (/about, built in Step MS.8). Anchor targets
 * (#how-it-works, #features, #faq, #pricing) are created in later
 * steps — links are present now, sections scroll to nothing until then.
 *
 * Below the tablet breakpoint (Entry 209), the full link row collapses
 * to a hamburger toggle — Step MS.11.
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-muted/20 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link
          href="/"
          aria-label="On The Clock home"
          className="shrink-0"
          onClick={() => setIsOpen(false)}
        >
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
        <ul className="hidden items-center gap-x-6 text-sm font-medium md:flex">
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
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="flex items-center justify-center rounded-md p-2 text-text md:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            {isOpen ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>
      {isOpen && (
        <ul className="flex flex-col gap-1 border-t border-muted/20 px-6 py-4 text-sm font-medium md:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-text transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
