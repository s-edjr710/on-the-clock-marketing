import Hero from "@/components/Hero";
import Section1CommissionerControl from "@/components/Section1CommissionerControl";
import Section2DraftOrderCommentary from "@/components/Section2DraftOrderCommentary";
import Section3GradesProjections from "@/components/Section3GradesProjections";
import Section4WalkUpTV from "@/components/Section4WalkUpTV";
import Section5ReactionsRosterVoting from "@/components/Section5ReactionsRosterVoting";
import Section6TableStakes from "@/components/Section6TableStakes";

/*
 * Homepage. Hero (MS.3), Sections 1-2 (MS.4), Sections 3-4 (MS.5),
 * Sections 5-6 (MS.6) built. FAQ accordion and Pricing block, plus
 * their anchor targets (#faq, #pricing), are built in Step MS.7.
 */

export default function Home() {
  return (
    <>
      <Hero />
      <Section1CommissionerControl />
      <Section2DraftOrderCommentary />
      <Section3GradesProjections />
      <Section4WalkUpTV />
      <Section5ReactionsRosterVoting />
      <Section6TableStakes />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-24 text-center">
        <p className="text-lg font-medium text-muted">
          [Placeholder — FAQ accordion and Pricing block are built in Step
          MS.7.]
        </p>
      </div>
    </>
  );
}
