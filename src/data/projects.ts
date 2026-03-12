import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import dam_movie from "@/assets/dam_new.mp4";
import dam_still from "@/assets/dam_still.jpg";
import salt_finger from "@/assets/salt_finger.png";
import salt_movie from "@/assets/salt_fingers.mp4";


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
    title: "Salt Finger - Double Diffusive Instability",
    description: "OpenFOAM custom solver for two density-effecting scalars..",
    longDescription: "text text more text.",
    coverImage: salt_finger,
    hero: salt_movie,
    gallery: [project1, project2, project3, project4],
    link: "https://github.com/",
  },
  {
    id: "project-two",
    title: "Dam Break Validation",
    description: "Custom case in OpenFOAM to validate multi-phase flows with dam-break case.",
    longDescription: "text text more text.",
    coverImage: dam_still,
    hero: dam_movie,
    gallery: [project2, project3, project4],
    link: "https://github.com/",
  },
];
