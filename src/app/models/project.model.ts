export interface Project {
    id: number;
    title: string;
    description: string;
    image: string; // URL to image
    technologies: string[];
    githubUrl?: string; // Optional
    demoUrl?: string;   // Optional
    date?: Date;        // Optional
    featured?: boolean;
}
