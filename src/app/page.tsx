import { Hero, Footer, Socials, Header, WhatWeDo, WhyChoose, Testimonials, WhoAreWe, Ratings } from "@/components"

export default function Home() {
  return (
    <>
      <main className="text-foreground relative" >
        <Header />
        <Hero />
        <WhatWeDo />
        <WhyChoose />
        {/* <Ratings /> */}
        <Testimonials />
        <WhoAreWe />
        <Socials />
        <Footer />
      </main>
    </>
  );
}
