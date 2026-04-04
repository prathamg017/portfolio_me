import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import WorkSection from "@/components/WorkSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full flex flex-col pt-0 max-w-[1920px] mx-auto border-x-[2px] md:border-x-[4px] border-[var(--color-brand-text)] min-h-screen">
        <Hero />
        <IntroSection />
        <WorkSection />
        <Footer />
      </main>
    </>
  );
}
