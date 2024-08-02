import { LandingPage } from "@/typing";

export const fetchLanding = async (): Promise<LandingPage[]> => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getLandingPage`);

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            throw new Error("Received non-JSON response");
        }

        const data = await res.json();
        const landingPage: LandingPage[] = data.LandingPage;

        return landingPage;
    } catch (error) {
        console.error("Failed to fetch landing page data:", error);
        return []; // Return an empty array or handle it as per your need
    }
};