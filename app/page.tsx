"use client";

import Navbar from "@/components/Navbar";

import { About } from "@/components/About";
import Projects from "@/components/Projects";
import Email from "@/components/Email";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      {/* Navbar with higher z-index */}
      <Navbar />

      <main className="relative flex min-h-screen flex-col bg-[#0E0E0E]">
        {/* Background Gradient Circles */}
        <div className="absolute inset-0 z-0 opacity-30 overflow-hidden pointer-events-none">
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 blur-lg absolute top-[10%] left-[10%] transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600 to-transparent rounded-full h-60 w-60 blur-lg absolute top-[30%] right-[20%] transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-950 to-transparent rounded-full h-96 w-96 blur-lg absolute bottom-[20%] left-[25%] transform -translate-x-1/2 translate-y-1/2"></div>
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 to-transparent rounded-full h-72 w-72 blur-lg absolute top-[50%] left-[60%] transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950 to-transparent rounded-full h-40 w-40 blur-lg absolute bottom-[30%] right-[30%] transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="container mt-24 mx-auto px-12 py-4 relative z-10">
          <Hero />
          <About />
          <Projects />
          <Email />
        </div>
        <Footer />
      </main>
    </>
  );
}
