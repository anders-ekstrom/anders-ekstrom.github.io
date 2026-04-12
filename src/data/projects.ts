import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import dam_movie from "@/assets/dam_cropped.mp4";
import dam_still from "@/assets/dam_still.jpg";
import salt_finger from "@/assets/salt_finger.png";
import salt_movie from "@/assets/salt_fingers.mp4";
import sediment_movie from "@/assets/sediment_movie_refined_cropped.mp4";
import rising_bubble_movie from "@/assets/rising_bubble.mp4";
import channel_movie from "@/assets/channel_flow_movie_w_q2_cropped.mp4";
import rod_movie from "@/assets/rod_no_q.mp4";
import rb_movie from "@/assets/rb_sped_up.mp4";

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
    description: "OpenFOAM custom solver for two density-effecting scalars.",
    longDescription: "text text more text.",
    coverImage: salt_finger,
    hero: salt_movie,
    gallery: [project1, project2, project3, project4],
    link: "https://github.com/",
  },

  {
    id: "sediments",
    title: "Sediment Transport",
    description: "Custom OpenFOAM solver for sediment transport with an other density-effecting scalar (i.e., temperature).",
    longDescription: "text text more text.",
    coverImage: dam_still,
    hero: sediment_movie,
    gallery: [project2, project3, project4],
    link: "https://github.com/",
  },
  {
    id: "dam-break-validation",
    title: "Dam Break Validation",
    description: "Custom case in OpenFOAM to validate multi-phase flows with dam-break case.",
    longDescription: "text text more text.",
    coverImage: dam_still,
    hero: dam_movie,
    gallery: [project2, project3, project4],
    link: "https://github.com/",
  },

  {
    id: "channel-turbulence",
    title: "LES Turbulence Model Evaluation for Channel Flows",
    description: "Evaluation of four LES turbulence models (Smagorinsky, Dynamic Smagorinsky, Sigma, WALE) for the canonical channel flow case at a friction Reynolds number of 395.",
    longDescription: "text text more text.",
    coverImage: dam_still,
    hero: channel_movie,
    gallery: [project2, project3, project4],
    link: "https://github.com/",
  },


  {
    id: "rod-roughened-channel",
    title: "Rod Roughened Channel Flow",
    description: "Custom case in OpenFOAM to validate multi-phase flows with dam-break case.",
    longDescription: "text text more text.",
    coverImage: dam_still,
    hero: rod_movie,
    gallery: [project2, project3, project4],
    link: "https://github.com/",
  },

  {
    id: "rayleigh-benard-convection ",
    title: "Rayleigh-Benard Convection MATLAB 2D Solver",
    description: "text text more text",
    longDescription: "text text more text.",
    coverImage: dam_still,
    hero: rb_movie,
    gallery: [project2, project3, project4],
    link: "https://github.com/",
  },

  {
    id: "rising-bubble",
    title: "Rising Bubble",
    description: "text text more text",
    longDescription: "text text more text.",
    coverImage: dam_still,
    hero: rising_bubble_movie,
    gallery: [project2, project3, project4],
    link: "https://github.com/",
  },

  {
    id: "vertical-channel-heated-walls",
    title: "Bouyancy Dominated Vertical Chnnel",
    description: "text text more text",
    longDescription: "text text more text.",
    coverImage: dam_still,
    hero: dam_movie,
    gallery: [project2, project3, project4],
    link: "https://github.com/",
  },

  {
    id: "connect-four",
    title: "Connect Four Monte Carlo Tree Search",
    description: "text text more text",
    longDescription: "text text more text.",
    coverImage: dam_still,
    hero: dam_movie,
    gallery: [project2, project3, project4],
    link: "https://github.com/",
  },
];
