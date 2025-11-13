import CTA from "@/components/CTA";
import AboutHero from "./sections/AboutHero";
import Methodology from "./sections/Methodology";
import PainPoints from "./sections/PainPoints";
import Paradigm from "./sections/Paradigm";
import Recommendation from "./sections/Recommendation";

export default function AboutPage() {
  return (
    <main className="mb-20">
      <AboutHero />
      <Paradigm/>
      <Methodology/>
      <PainPoints/>
      <Recommendation/>
      <CTA/>
    </main>
  )
}