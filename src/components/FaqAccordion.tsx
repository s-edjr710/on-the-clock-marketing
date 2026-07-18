"use client";

import { useState } from "react";

/*
 * FAQ — copy verbatim from marketing-site-copy.md's five categories
 * (Trust and risk, Compatibility and fit, Technical and device, Product
 * mechanics, Purchase). Renders as an accordion, collapsed by default;
 * each question expands independently on tap/click, per Entry 209's
 * mobile-first requirement and Step MS.7.
 */

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCategory {
  category: string;
  items: FaqItem[];
}

const FAQ_CATEGORIES: FaqCategory[] = [
  {
    category: "Trust and risk",
    items: [
      {
        question: "Is my payment information secure?",
        answer: "Yes. We never see or store your card details.",
      },
      {
        question: "What happens if something goes wrong during the draft?",
        answer:
          "Email support@draftontheclock.com. We actively monitor it and respond fast. That’s for app issues — if your running back gets hurt in Week 3, that one’s on us to feel bad about with you, not fix.",
      },
      {
        question: "Is this a new platform? Who’s behind it?",
        answer:
          "Yes, brand new. Built by a longtime fantasy football commissioner who got tired of running draft night by hand and decided to fix it. Read the full story on our About page.",
      },
      {
        question: "Tell us how it went",
        answer:
          "We’re new, and we want to hear about it, good or bad. Reach out anytime at support@draftontheclock.com.",
      },
    ],
  },
  {
    category: "Compatibility and fit",
    items: [
      {
        question: "Does this replace my ESPN, Yahoo, or Sleeper league?",
        answer:
          "No. On The Clock runs your live draft. Once the draft’s done, you’re back on whatever platform you already use for the season.",
      },
      {
        question: "Do my managers need to create accounts?",
        answer:
          "Yes, but not until you’re ready. Set up your league first, then send your managers the invite link. Each one creates a free account in under a minute.",
      },
      {
        question: "Does this support snake or auction drafts?",
        answer: "Snake draft only.",
      },
    ],
  },
  {
    category: "Technical and device",
    items: [
      {
        question: "Do I need a laptop or desktop?",
        answer:
          "For the commissioner, yes. Setup, league creation, and running the draft are all built for desktop, and that’s where they work best. Managers can draft comfortably from a phone. Everyone gets a better experience on desktop, commissioner and manager both, but for managers, mobile is genuinely fine.",
      },
      {
        question: "What if my internet drops mid-draft?",
        answer:
          "Your picks are saved the second they happen, not backed up later. Reconnect and you’re right back in, no lost progress, no refresh needed.",
      },
      {
        question: "How many people can join a draft?",
        answer: "Built for standard league sizes, up to 14 teams.",
      },
    ],
  },
  {
    category: "Product mechanics",
    items: [
      {
        question: "Can I customize scoring and league settings?",
        answer:
          "Yes. Fully custom scoring and roster settings, set by the commissioner before the draft.",
      },
      {
        question: "What happens to the results afterward?",
        answer:
          "Full results, exportable as PDF or CSV, right after the draft ends.",
      },
    ],
  },
  {
    category: "Purchase",
    items: [
      {
        question: "Is this a one-time payment or a subscription?",
        answer: "One-time. $49.95 per league, per draft.",
      },
      {
        question: "What’s your refund policy?",
        answer: "All sales are final.",
      },
    ],
  },
];

export default function FaqAccordion() {
  const [openKeys, setOpenKeys] = useState<Set<string>>(new Set());

  function toggle(key: string) {
    setOpenKeys((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  }

  return (
    <section id="faq" className="mx-auto max-w-6xl px-6 py-14">
      <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-text sm:text-4xl">
        FAQ
      </h2>
      <div className="mt-6 flex flex-col gap-8">
        {FAQ_CATEGORIES.map((category) => (
          <div key={category.category} className="flex flex-col gap-2">
            <h3 className="text-sm font-bold uppercase tracking-wide text-muted">
              {category.category}
            </h3>
            <div className="flex flex-col divide-y divide-muted/20 border-y border-muted/20">
              {category.items.map((item) => {
                const key = `${category.category}-${item.question}`;
                const isOpen = openKeys.has(key);
                return (
                  <div key={key}>
                    <button
                      type="button"
                      onClick={() => toggle(key)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 py-4 text-left text-base font-semibold text-text"
                    >
                      <span>{item.question}</span>
                      <span aria-hidden="true" className="shrink-0 text-muted">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <p className="pb-4 text-base leading-normal text-muted">
                        {item.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
