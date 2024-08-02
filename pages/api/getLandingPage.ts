import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";
import { Skills } from "@/typing";

const query = groq`
*[_type == "landingPage"]`;

type Data = {
    skills: Skills[];
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const skills: Skills[] = await sanityClient.fetch(query);
    res.status(200).json({ skills });
}