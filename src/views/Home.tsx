import Hero from "../sections/Hero/Hero";
import FeaturedProject from "../sections/FeaturedProject/FeaturedProject";
import AdditonalProjects from "../sections/AdditionalProjects/AdditionalProject";
//import Highlights from "../sections/Highlights/Highlights";
//import About from "../sections/About/About";
//import Contact from "../sections/Contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProject />
      <AdditonalProjects />
    </>
  );
}