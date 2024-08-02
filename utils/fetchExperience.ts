import { Experience } from "@/typing";

export const fetchExperience = async (): Promise<Experience[]> => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`, {
            cache: 'no-store', // Ensure fresh data
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        return data.experience;
    } catch (error) {
        console.error("Failed to fetch Experience data:", error);
        return []; // Return an empty array if there is an error
    }
};
