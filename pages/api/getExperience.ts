// pages/api/experience.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Experience } from "@/typing";

const query = groq`
  *[_type == "experience"]{
    _id,
    company,
    role,
    companyLogo,
    techStack,
    responsibilities,
    startDate,
    endDate
  }
`;

type Data = {
    experience: Experience[];
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const experience: Experience[] = await sanityClient.fetch(query);
    res.status(200).json({ experience });
}
