import { Education } from "@/typing";

export const fetchEducation = async (): Promise<Education[]> => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getEducation`, {
            cache: 'no-store', // Ensure fresh data
        });

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        return data.education;
    } catch (error) {
        console.error("Failed to fetch education data:", error);
        return []; // Return an empty array if there is an error
    }
};
