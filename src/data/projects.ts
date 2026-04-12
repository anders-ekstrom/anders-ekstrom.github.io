import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import dam_movie from "@/assets/dam_cropped.mp4";
import dam_still from "@/assets/dam_thumbnail.png";
import salt_finger from "@/assets/salt_finger3.png";
import salt_movie from "@/assets/salt_fingers.mp4";
import sediment_movie from "@/assets/sediment_movie_refined_cropped.mp4";
import rising_bubble_movie from "@/assets/rising_bubble.mp4";
import channel_movie from "@/assets/channel_flow_movie_w_q2_cropped.mp4";
import rod_movie from "@/assets/rod_no_q_cropped.mp4";
import rb_movie from "@/assets/rb_theta_n2_cropped.mp4";
import rb_thumbnail from "@/assets/rb_thumbnail5.png";
import sediment_thumbnail from "@/assets/sediment_thumbnail3.png";
import bubble_thumbnail from "@/assets/bubble_thumbnail_crop.png";
import channel_thumbnail from "@/assets/channel_thumbnail.png";
import vert_channel_thumbnail from "@/assets/domain_vert_channel2.png";
import rod_thumbnail from "@/assets/rod_thumbnail.png";
import probe1 from "@/assets/probe1.png";
import probe2 from "@/assets/probe2.png";
import probe3 from "@/assets/probe3.png";
import probes from "@/assets/probes.png";

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
  pdf?: string;          // link to a PDF
  subtitle?: string;
  tags?: string[];
  year?: string;
}

export const projects: Project[] = [
    {
    id: "channel-turbulence",
    title: "LES Turbulence Model Evaluation for Channel Flows",
    description: "Evaluation of four LES turbulence models (Smagorinsky, Dynamic Smagorinsky, Sigma, WALE) for the canonical channel flow case at a friction Reynolds number of 395.",
    longDescription: "text text more text.",
    coverImage: channel_thumbnail,
    hero: channel_movie,
    gallery: [project2, project3, project4],
    pdf: "https://drive.google.com/file/d/1QfI-2hM_wUcwFuDQt3UZ32f5sUmfAF1K/view?usp=sharing",
  },


  {
    id: "rod-roughened-channel",
    title: "Rod Roughened Channel Flow",
    description: "Custom case in OpenFOAM to validate multi-phase flows with dam-break case.",
    longDescription: "text text more text.",
    coverImage: rod_thumbnail,
    hero: rod_movie,
    gallery: [project2, project3, project4],
    pdf: "https://drive.google.com/file/d/1QfI-2hM_wUcwFuDQt3UZ32f5sUmfAF1K/view?usp=sharing",
  },
  {
    id: "rayleigh-benard",
    title: "Rayleigh-Benard Convection",
    description: "2D Navier-Stokes for momentum, continuity, and energy equations",
    longDescription: "text text more text.",
    coverImage: rb_thumbnail,
    hero: rb_movie,
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
    gallery: [probes,probe3,probe2,probe1],
    link: "https://github.com/",
  },

    {
    id: "sediments",
    title: "Sediment Transport",
    description: "Custom OpenFOAM solver for sediment transport with an other density-effecting scalar (i.e., temperature).",
    longDescription: "text text more text.",
    coverImage: sediment_thumbnail,
    hero: sediment_movie,
    gallery: [project2, project3, project4],
    link: "https://github.com/",
  },
  {
    id: "rising-bubble",
    title: "Rising Bubble",
    description: "text text more text",
    longDescription: "text text more text.",
    coverImage: bubble_thumbnail,
    hero: rising_bubble_movie,
    gallery: [project2, project3, project4],
    link: "https://github.com/",
  },
  
  {
    id: "salt-fingers",
    title: "Salt Finger - Double Diffusive Instability",
    description: "OpenFOAM custom solver for two density-effecting scalars.",
    longDescription: "text text more text.",
    coverImage: salt_finger,
    hero: salt_movie,
    gallery: [project1, project2, project3, project4],
    link: "https://github.com/",
  },

  {
    id: "vertical-channel-heated-walls",
    title: "Bouyancy Dominated Vertical Chnnel",
    description: "text text more text",
    longDescription: "text text more text.",
    coverImage: vert_channel_thumbnail,
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
