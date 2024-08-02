import React from "react";
import ProjectCard from "./ProjectCard";
import { Projects as ProjectsType } from "@/typing";

type Props = {
    projects: ProjectsType[];
};

const ProjectsSection: React.FC<Props> = ({ projects }) => {
    return (
        <section id="projects" className="min-h-screen flex flex-col items-center justify-center p-10  md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-10">My Projects</h2>
            <div className="w-full px-20 flex overflow-x-scroll scrollbar-hide gap-6 md:overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {projects.map((project) => (
                    <ProjectCard key={project._id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
