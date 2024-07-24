"use client";
import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "A portfolio website built using React.",
    image: "https://img.freepik.com/free-vector/workout-tracker-app-interface_23-2148653679.jpg?w=740&t=st=1721557354~exp=1721557954~hmac=cf99556c1277d72991c778b99b791469b28bae4c87cb0068ad5b6eb8e9d0b5c8",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
    {
        id: 2,
        title: "React Portfolio Website",
        description: "A portfolio website built using React.",
        image: "https://img.freepik.com/free-photo/marketing-creative-collage-with-phone_23-2149379900.jpg?size=626&ext=jpg&ga=GA1.1.552731653.1721557339&semt=ais_user",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id:3,
        title: "Eat Some More",
        description: "A food ordering app built using React Native.",
        image: "https://img.freepik.com/free-photo/nutritional-counter-app-composition_23-2149880620.jpg?t=st=1721557335~exp=1721557935~hmac=fcd5852df57331fc1b1559c94c003d0099c409ad91beab29996d33585474d8bb",
        tag: ["All", "Mobile"],
        gitUrl: "/",
        previewUrl: "/",
    }

];

const Projects = () => {
  return (
      <section id="projects">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          {/* Any filters or buttons can be added here */}
        </div>
        <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
          {projectsData.map((project) => (
              <li key={project.id}>
                <ProjectCard
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image} // Corrected prop name
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                />
              </li>
          ))}
        </ul>
      </section>
  );
};

export default Projects;