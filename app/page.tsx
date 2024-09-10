import ExperienceEducation from "@/components/ExperienceEducation";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Contact from "./contact/page";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ExperienceEducation />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
