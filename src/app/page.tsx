import { Hero, Footer, Socials, Header, WhatWeDo, WhyChoose, WhoAreWe, Ratings } from "@/components"

export default function Home() {
  return (
    <>
      <main className="text-foreground relative" >
        <Header />
        <Hero />
        <WhatWeDo />
        <WhyChoose />
        <Ratings />
        {/* <Testimonials /> */}
        <WhoAreWe />
        <Socials />
        <Footer />
      </main>
    </>
  );
}
