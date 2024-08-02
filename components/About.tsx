"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import Aboutbg from "../public/Images/AboutImage.jpg";
import Tabs from "@/components/Tabs";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import { Education as EducationType } from "@/typing";
import { Skills as SkillsType } from '@/typing';

type Props = {
    education: EducationType[];
    skills: SkillsType[];
};

const About: React.FC<Props> = ({ education, skills }) => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        });
    };

    const renderTabContent = () => {
        switch (tab) {
            case "skills":
                return <Skills skills={skills} />;
            case "education":
                return <Education education={education} />;
            default:
                return null;
        }
    };

    return (
        <section className="grid md:grid-cols-2 gap-8 py-12 relative items-center min-h-screen">
            <div className="md:grid md:grid-cols-2 gap-6 items-center py-8 px-4 sm:px-8 lg:px-16 xl:px-24">
                <div className="relative w-full h-64 md:h-auto">
                    <Image
                        src={Aboutbg}
                        alt="About"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>
                <div className="md:ml-8 text-left flex flex-col">
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
                    <div className="mt-8">{renderTabContent()}</div>
                </div>
            </div>
        </section>
    );
};

export default About;
