import React, { FC } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Projects as ProjectType } from "@/typing";
import Image from 'next/image';
import { urlFor } from "@/sanity";

type Props = {
    project: ProjectType;
};

const ProjectCard: FC<Props> = ({ project }) => {
    const { image, title, description, previewUrl, gitUrl, techStack } = project;

    const imageUrl = image ? urlFor(image).url() : '';

    return (
        <div className="flex flex-col items-center bg-[#121212] p-4 md:p-5 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 mx-2 md:mx-4" style={{ width: "260px", minWidth: "260px" }}>
            <div className="relative w-full h-40 md:h-48">
                <Image
                    src={imageUrl}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                />
            </div>
            <div className="flex flex-col justify-between mt-3 md:mt-4 flex-1">
                <div>
                    <h3 className="text-lg md:text-2xl font-bold text-white">{title}</h3>
                    <p className="text-gray-400 mt-2 mb-4 h-16 md:h-24 overflow-hidden text-ellipsis hidden md:block">
                        {description}
                    </p>
                    {techStack && techStack.length > 0 && (
                        <div className="mt-2 md:mt-4">
                            <h4 className="text-base md:text-lg font-semibold text-white">Tech Stack</h4>
                            <ul className="flex flex-wrap mt-2">
                                {techStack.map((tech, index) => (
                                    <li key={index} className="bg-gray-800 text-white text-xs md:text-sm py-1 px-2 md:py-1 md:px-3 mr-2 mb-2 rounded-full">
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <div className="mt-3 md:mt-4 flex space-x-3">
                    {gitUrl && (
                        <a href={gitUrl} target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-gray-400 hover:text-white" size={24} />
                        </a>
                    )}
                    {previewUrl && (
                        <a href={previewUrl} target="_blank" rel="noopener noreferrer">
                            <FaExternalLinkAlt className="text-gray-400 hover:text-white" size={24} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
