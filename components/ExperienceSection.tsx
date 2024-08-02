"use client"
import React, { useState } from 'react';
import { Experience } from '@/typing';
import Image from 'next/image';
import { urlFor } from '@/sanity';

type Props = {
    experience: Experience;
};

const ExperienceAccordion: React.FC<Props> = ({ experience }) => {
    const [isOpen, setIsOpen] = useState(false);

    if (!experience) {
        return null; // Avoid rendering if experience is undefined
    }

    const { company, role, companyLogo, techStack = [], responsibilities = [], startDate, endDate } = experience;

    const formattedStartDate = startDate ? new Date(startDate).toLocaleDateString() : 'Unknown start date';
    const formattedEndDate = endDate ? new Date(endDate).toLocaleDateString() : 'Present';

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full mb-6 bg-[#121212] text-white rounded-lg shadow-md overflow-hidden">
            <div
                className="flex items-center p-4 cursor-pointer hover:bg-[#1e1e1e] w-full"
                onClick={toggleAccordion}
            >
                {companyLogo && (
                    <Image
                        src={urlFor(companyLogo).url()}
                        alt={company}
                        width={50}
                        height={50}
                        className="rounded-full"
                    />
                )}
                <div className="ml-4 flex-1">
                    <h3 className="text-xl font-bold">{company}</h3>
                    <p className="text-md">{role}</p>
                    <p className="text-sm text-gray-400">{formattedStartDate} - {formattedEndDate}</p>
                </div>
                <div className="ml-auto flex items-center">
                    <button className="text-white text-2xl">
                        {isOpen ? '-' : '+'}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="p-4">
                    <div className="mb-4">
                        <h4 className="text-lg font-semibold">Tech Stack:</h4>
                        <div className="flex flex-wrap mt-2 gap-2">
                            {techStack.map((tech, index) => (
                                <Image
                                    key={index}
                                    src={urlFor(tech).url()}
                                    alt="tech"
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold">Responsibilities:</h4>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            {responsibilities.map((task, index) => (
                                <li key={index} className="text-sm">{task}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ExperienceAccordion;
