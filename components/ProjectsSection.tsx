import React from "react";
import ProjectCard from "./ProjectCard";
import { Projects as ProjectsType } from "@/typing";

type Props = {
    projects: ProjectsType[];
};

const ProjectsSection: React.FC<Props> = ({ projects }) => {
    return (
        <section id="projects" className="min-h-screen flex flex-col items-center justify-center p-10 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-10">My Projects</h2>
            <div className="w-full px-4 md:px-8">
                <div className="flex flex-wrap gap-6 justify-center">
                    {projects.map((project) => (
                        <div key={project._id} className="w-full sm:w-fit md:w-fit lg:w-fit ">
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
