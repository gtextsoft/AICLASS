import { AboutHost } from "./components/sections/AboutHost";
import { FAQ } from "./components/sections/FAQ";
import { FinalCTA } from "./components/sections/FinalCTA";
import { Footer } from "./components/sections/Footer";
import { Header } from "./components/sections/Header";
import { Hero } from "./components/sections/Hero";
import { Outcomes } from "./components/sections/Outcomes";
import { Registration } from "./components/sections/Registration";
import { VideoSection } from "./components/sections/VideoSection";
import { WhatYouLearn } from "./components/sections/WhatYouLearn";
import { WhoFor } from "./components/sections/WhoFor";
import { WhyMatters } from "./components/sections/WhyMatters";

export function LandingPage() {
  return (
    <>
      <a
        href="#overview"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-ink focus:shadow-lg"
      >
        Skip to content
      </a>
      <Header />
      <main id="top">
        <Hero />
        <VideoSection />
        <WhyMatters />
        <WhatYouLearn />
        <AboutHost />
        <WhoFor />
        <Outcomes />
        <Registration />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
