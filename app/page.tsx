import Navbar from "@/components/Navbar";
import About from "@/components/About";
import ProjectsSection from "@/components/ProjectsSection";
import Email from "@/components/Email";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";

import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchLanding } from "@/utils/fetchLanding";
import { fetchEducation } from "@/utils/fetchEducation";
import { fetchExperience } from "@/utils/fetchExperience";

export default async function Home() {
  const projects = await fetchProjects();
  const education = await fetchEducation();
  const skills = await fetchSkills();
  const landingPage = await fetchLanding();
  const experience = await fetchExperience();

  return (
      <>
        <Navbar />
        <main className="relative flex flex-col min-h-screen bg-[#0E0E0E] snap-y snap-mandatory">

          <div className="absolute inset-0 z-0 opacity-30 overflow-hidden pointer-events-none">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 blur-lg absolute top-[10%] left-[10%] transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600 to-transparent rounded-full h-60 w-60 blur-lg absolute top-[30%] right-[20%] transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-950 to-transparent rounded-full h-96 w-96 blur-lg absolute bottom-[20%] left-[25%] transform -translate-x-1/2 translate-y-1/2"></div>
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 to-transparent rounded-full h-72 w-72 blur-lg absolute top-[50%] left-[60%] transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950 to-transparent rounded-full h-40 w-40 blur-lg absolute bottom-[30%] right-[30%] transform -translate-x-1/2 translate-y-1/2"></div>
          </div>

          <section id="hero" className="snap-center flex items-center justify-center">
            <Hero />
          </section>

          <section id="projects" className="snap-start flex flex-grow items-center justify-center">
            <ProjectsSection projects={projects} />
          </section>

          <section id="contact" className="snap-center flex flex-grow items-center justify-center">
            <Email />
          </section>
          <Footer />
        </main>
      </>
  );
}
