import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  coverImage?: string;   // image shown on the main page tile
  hero?: string;         // hero image or video on the detail page (optional)
  hoverMedia?: string;   // media shown on tile hover
  gallery: string[];     // images or videos (mp4/webm/mov auto-play muted loop)
  link?: string;         // e.g. GitHub URL
  subtitle?: string;
  tags?: string[];
  year?: string;
}

export const projects: Project[] = [
  {
    id: "project-one",
    title: "Project One",
    description: "A comprehensive brand identity system for a modern tech startup, including logo design, typography, and color palette.",
    longDescription: "This project involved creating a complete visual identity from scratch. Starting with research and mood boards, we developed a brand system that communicates innovation while remaining approachable. The deliverables included a primary and secondary logo, custom icon set, brand guidelines document, and application across digital and print media.",
    coverImage: project1,
    gallery: [project1, project2, project3, project4],
  },
  {
    id: "project-two",
    title: "Project Two",
    description: "A full-stack web application with real-time collaboration features and an intuitive interface.",
    longDescription: "Built with modern web technologies, this application enables teams to collaborate in real-time on creative projects. Key features include live cursors, version history, and a component-based design system. The interface was designed with accessibility in mind, scoring 100 on Lighthouse accessibility audits.",
    coverImage: project2,
    hero: project2,
    gallery: [project2, project3, project4],
  },
  {
    id: "project-three",
    title: "Project Three",
    description: "3D architectural visualizations and interactive walkthroughs for a residential development.",
    longDescription: "Working closely with the architecture firm, we created photorealistic 3D renders and an interactive web-based walkthrough experience. The project showcased each unit's interior and exterior, with dynamic lighting that simulated different times of day. Materials and finishes could be customized in real-time.",
    coverImage: project3,
    hero: project3,
    gallery: [project3, project4, project1],
  },
  {
    id: "project-four",
    title: "Project Four",
    description: "A series of animated brand assets and motion graphics for social media campaigns.",
    longDescription: "This motion design project produced a library of animated assets optimized for various social media platforms. Each animation maintained brand consistency while pushing creative boundaries. The toolkit included logo animations, transition effects, lower thirds, and story templates — all designed to be easily customizable by the marketing team.",
    coverImage: project4,
    hero: project4,
    gallery: [project4, project1, project2],
    link: "https://github.com/example/project-four",
  },
];
