import React from "react";
import { PiCertificate } from "react-icons/pi";
import { Education as EducationType } from "@/typing"; // Assuming this type is defined elsewhere

type Props = {
  education: EducationType[];
};

const Education: React.FC<Props> = ({ education = [] }: Props) => (
  <div className="grid grid-cols-1 gap-3">
    {education.map((edu, index) => (
      <ul
        key={edu._id}
        className="flex px-4 py-1 border-2 border-white rounded-lg items-center"
      >
        <PiCertificate className="text-5xl mr-4 text-white" />
        <div className="flex flex-col">
          <li className="mb-1">{edu.degree}</li>
          <li className="mb-1">{edu.institution}</li>
          <li>{edu.duration} </li>
        </div>
      </ul>
    ))}
  </div>
);

export default Education;
