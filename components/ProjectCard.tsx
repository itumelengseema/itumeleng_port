"use client";
import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

/**
 * Props for the ProjectCard component.
 * @typedef {Object} ProjectCardProps
 * @property {string} imgUrl - The URL of the project's image.
 * @property {string} title - The title of the project.
 * @property {string} description - A brief description of the project.
 * @property {string} gitUrl - The URL to the project's GitHub repository.
 * @property {string} previewUrl - The URL to the live preview of the project.
 */
interface ProjectCardProps {
    imgUrl: string;
    title: string;
    description: string;
    gitUrl: string;
    previewUrl: string;
}

/**
 * A card component that displays a project with an image, title, description, and links to the project's GitHub repository and live preview.
 * @param {ProjectCardProps} props - The props for the ProjectCard component.
 * @returns {JSX.Element} The rendered ProjectCard component.
 */
const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }: ProjectCardProps) => {
    return (
        <div>
            <div className="h-52 md:h-72 rounded-t-xl relative group">
                {/* Image of the project */}
                <Image
                    width={400}
                    height={200}
                    src={imgUrl} alt={title} className="w-full h-full object-cover rounded-t-xl" />
                {/* Overlay with links to GitHub and live preview */}
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
                    <Link href={gitUrl} className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
                        <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
                    </Link>
                    <Link href={previewUrl} className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
                        <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
                    </Link>
                </div>
            </div>
            {/* Project title and description */}
            <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <p className="text-[#ADB7BE]">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;