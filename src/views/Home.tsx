import Hero from "../sections/Hero/Hero";
import FeaturedProject from "../sections/FeaturedProject/FeaturedProject";
import AdditonalProjects from "../sections/AdditionalProjects/AdditionalProject";
import Skills from "../sections/Skills/Skills";
import Contact from "../sections/Contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProject />
      <AdditonalProjects />
      <Skills />
      <Contact />
    </>
  );
}