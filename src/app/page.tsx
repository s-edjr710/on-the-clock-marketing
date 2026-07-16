import Hero from "@/components/Hero";

/*
 * Homepage. Hero built in Step MS.3. The remaining feature sections and
 * their anchor targets (#how-it-works, #features, #faq, #pricing) are
 * built in Steps MS.4–MS.7.
 */

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-24 text-center">
        <p className="text-lg font-medium text-muted">
          [Placeholder — feature sections are built in Steps MS.4–MS.7.]
        </p>
      </div>
    </>
  );
}
