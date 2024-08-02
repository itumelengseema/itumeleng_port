import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

// Sanity client configuration
export const config = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
    useCdn: process.env.NODE_ENV === "production",
    apiVersion: "2024-07-30",
};

// Create the Sanity client
export const sanityClient = createClient(config);

// Create an image URL builder with the Sanity client
const imageBuilder = createImageUrlBuilder(sanityClient);

// Function to build image URLs
export const urlFor = (source: any) => imageBuilder.image(source);
