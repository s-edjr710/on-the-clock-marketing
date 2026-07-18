import Hero from "@/components/Hero";
import Section1CommissionerControl from "@/components/Section1CommissionerControl";
import Section2DraftOrderCommentary from "@/components/Section2DraftOrderCommentary";
import Section3GradesProjections from "@/components/Section3GradesProjections";
import Section4WalkUpTV from "@/components/Section4WalkUpTV";
import Section5ReactionsRosterVoting from "@/components/Section5ReactionsRosterVoting";
import Section6TableStakes from "@/components/Section6TableStakes";
import FaqAccordion from "@/components/FaqAccordion";
import PricingBlock from "@/components/PricingBlock";

/*
 * Homepage. Hero (MS.3), Sections 1-2 (MS.4), Sections 3-4 (MS.5),
 * Sections 5-6 (MS.6), FAQ accordion and Pricing block (MS.7) built.
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
      <FaqAccordion />
      <PricingBlock />
    </>
  );
}
