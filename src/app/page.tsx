import Hero from "@/components/Hero";
import Section1CommissionerControl from "@/components/Section1CommissionerControl";
import Section2DraftOrderCommentary from "@/components/Section2DraftOrderCommentary";

/*
 * Homepage. Hero (MS.3), Section 1, and Section 2 (MS.4) built. The
 * remaining feature sections and their anchor targets (#how-it-works,
 * #features, #faq, #pricing) are built in Steps MS.5–MS.7.
 */

export default function Home() {
  return (
    <>
      <Hero />
      <Section1CommissionerControl />
      <Section2DraftOrderCommentary />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-24 text-center">
        <p className="text-lg font-medium text-muted">
          [Placeholder — remaining feature sections are built in Steps
          MS.5–MS.7.]
        </p>
      </div>
    </>
  );
}
