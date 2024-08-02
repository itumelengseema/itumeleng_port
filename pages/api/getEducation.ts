import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";
import { Education } from "@/typing";

const query = groq`
*[_type == "education"]{...}`;

type Data = {
    education: Education[];
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const education: Education[] = await sanityClient.fetch(query);
    res.status(200).json({ education });
}