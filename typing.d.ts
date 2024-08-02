interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface LandingPage extends SanityBody {
  _type: "landingPage";
  title: string;
  description: string;
  image: Image;
}

export interface Education extends SanityBody {
  _type: "education";
  duration: string;
  institution: string;
  degree: string;
}

export interface Skills extends SanityBody {
  _type: "skills";
  name: string;
}

export interface Projects extends SanityBody {
  _type: "projects";
  title: string;
  previewUrl: string;
  description: string;
  image: Image;
  gitUrl?: string;
  techStack?: string[]; // Adjust if techStack is not always present
}

export interface Experience extends SanityBody {
  _type: "experience"; // Ensure _type is correct
  company: string;
  role: string;
  companyLogo: Image;
  techStack: Image[];
  responsibilities: string[];
  startDate: string;
  endDate?: string;
}
