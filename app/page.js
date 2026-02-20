// import Hero from "@/components/home/Hero";
// import LogoBar from "@/components/home/LogoBar";
// import KeyProblems from "@/components/home/KeyProblems";
// import SolutionSection from "@/components/home/SolutionSection";
// import CoreCapabilities from "@/components/home/CoreCapabilities";

import Hero from "../components/home/Hero";
import LogoBar from "../components/home/LogoBar";
import KeyProblems from "../components/home/KeyProblems";
import SolutionSection from "../components/home/SolutionSection";
import CoreCapabilities from "../components/home/CoreCapabilities";
import VarietySection from "../components/home/VarietySection"
import Webar from "../components/home/webar"
import SectorSSection from "../components/home/SectorsSection";
import ClientsSection from "../components/home/ClientsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import { getTestimonials } from "../lib/api";

export default async function Home() {
  const testimonials = await getTestimonials();


  return (
    <>
      <Hero />
      <LogoBar />
      <KeyProblems />
      {/* <SolutionSection videoUrl={animationUrl} /> */}
      <SolutionSection />
      <CoreCapabilities />
      {/* <VarietySection videoUrl={iTwinityUrl} /> */}
      <VarietySection />
      <Webar />
      <SectorSSection />
      <ClientsSection />
      <TestimonialsSection testimonials={testimonials} />
    </>
  );
}
