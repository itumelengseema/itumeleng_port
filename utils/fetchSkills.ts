import { Skills } from "@/typing";

export const fetchSkills = async (): Promise<Skills[]> => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            throw new Error("Received non-JSON response");
        }

        const data = await res.json();
        // Extract the skills array from the response object
        const skills: Skills[] = data.skills;
        return skills;
    } catch (error) {
        console.error("Failed to fetch skills data:", error);
        return []; // Return an empty array if there is an error
    }
};
