import { Projects } from "@/typing";

export const fetchProjects = async (): Promise<Projects[]> => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`, {
            cache: 'no-store', // Ensure fresh data
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        return data.projects;
    } catch (error) {
        console.error("Failed to fetch projects data:", error);
        return []; // Return an empty array if there is an error
    }
};
