import { Footer, Socials, Header, WhatWeDo, WhyChoose, Testimonials, WhoAreWe } from "@/components"

export default function Home() {
  return (
    <main className="text-foreground" >
      <Header />
      <WhatWeDo />
      {/* <WhyChoose /> */}
      <Testimonials />
      <WhoAreWe />
      <Socials />
      <Footer />
    </main>
  );
}
