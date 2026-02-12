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

export default async function Home() {
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

  const res = await fetch(
    `${STRAPI_URL}/api/solutions?populate=animationVideo&populate=iTwinity`,
    { next: { revalidate: 10 } }
  );

  const json = await res.json();

  // Find entry that has animationVideo
  const animationEntry = json?.data?.find(
    (item) => item?.animationVideo
  );

  const animationPath = animationEntry?.animationVideo?.url;

  const animationUrl = animationPath
    ? `${STRAPI_URL}${animationPath}`
    : null;

  // Find entry that has iTwinity
  const iTwinityEntry = json?.data?.find(
    (item) => item?.iTwinity
  );

  const iTwinityPath = iTwinityEntry?.iTwinity?.url;

  const iTwinityUrl = iTwinityPath
    ? `${STRAPI_URL}${iTwinityPath}`
    : null;

  return (
    <>
      <Hero />
      <LogoBar />
      <KeyProblems />
      <SolutionSection videoUrl={animationUrl} />
      <CoreCapabilities />
      <VarietySection videoUrl={iTwinityUrl} />
    </>
  );
}
