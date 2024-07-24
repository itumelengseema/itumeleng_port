"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import Aboutbg from "../public/Images/AboutImage.jpg";
import Tabs from "@/components/Tabs";
import { PiCertificate } from "react-icons/pi";

const Tab_Data = [
  {
    title: "Skills",
    id: "skills",
    content: (
        <div>
          <div className="flex flex-wrap gap-4">
            <span className="bg-blue-500 text-white text-sm font-medium py-1 px-3 rounded-full shadow-md">HTML</span>
            <span className="bg-yellow-500 text-white text-sm font-medium py-1 px-3 rounded-full shadow-md">JavaScript</span>
            <span className="bg-blue-700 text-white text-sm font-medium py-1 px-3 rounded-full shadow-md">CSS</span>
            <span className="bg-teal-500 text-white text-sm font-medium py-1 px-3 rounded-full shadow-md">React</span>
            <span className="bg-red-600 text-white text-sm font-medium py-1 px-3 rounded-full shadow-md">Firebase</span>
            <span className="bg-gray-700 text-white text-sm font-medium py-1 px-3 rounded-full shadow-md">C#</span>
            <span className="bg-gray-600 text-white text-sm font-medium py-1 px-3 rounded-full shadow-md">MS SQL</span>
          </div>
        </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
        <div className="grid grid-cols-1 gap-3">
          <ul className="flex px-4 py-1 border-2 border-white rounded-lg items-center">
            <PiCertificate className="text-5xl mr-4 text-white" />
            <div className="flex flex-col">
              <li className="mb-1">AdvDip in Application Development</li>
              <li className="mb-1">IIE Rosebank College</li>
              <li>Jan 2024 - Dec 2024</li>
            </div>
          </ul>
          <ul className="flex px-4 py-1 border-2 border-white rounded-lg items-center">
            <PiCertificate className="text-5xl mr-4 text-white" />
            <div className="flex flex-col">
              <li className="mb-1">Dip in Information Technology (Software Development)</li>
              <li className="mb-1">IIE Rosebank College</li>
              <li>Jan 2021 - Dec 2023</li>
            </div>
          </ul>
        </div>
    ),
  },
];

export function About() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
      <section className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
          <Image
              src={Aboutbg}
              alt="About"
              width={500}
              height={500}
              className="rounded-lg"
          />
          <div className="mt-4 md:mt-0 text-left flex flex-col">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-lg">
              I am Itumeleng Seema, your go-to for software development. My tech
              journey kicked off with a mad curiosity for how technology can fix
              real-world issues. I am passionate about coding and skilled in IT
              support. Check out my portfolio to see my work.
            </p>
            <div className="flex flex-row mt-8">
              <Tabs
                  selectTab={() => handleTabChange("skills")}
                  active={tab === "skills"}
              >
                Skills
              </Tabs>
              <Tabs
                  selectTab={() => handleTabChange("education")}
                  active={tab === "education"}
              >
                Education
              </Tabs>
            </div>
            <div className="mt-8">
              {Tab_Data.find((item) => item.id === tab)?.content}
            </div>
          </div>
        </div>
      </section>
  );
}

export default About;
