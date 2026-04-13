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
import probes from "@/assets/probes2.png";
import dissipation from "@/assets/dissipation.png";
import tp2 from "@/assets/tp2.png";
import uptp from "@/assets/uptp.png";
import upvp from "@/assets/upvp.png";
import vptp from "@/assets/vptp.png";
import temp from "@/assets/T.png";
import vel from "@/assets/U.png";
import spectra from "@/assets/Eu.png";
import w2 from "@/assets/w2.png";
import vort_z from "@/assets/vort_z.png";
import vort_y from "@/assets/vort_y.png";
import vort_x from "@/assets/vort_x.png";
import v2 from "@/assets/v2.png";
import uv from "@/assets/uv.png";
import u2 from "@/assets/u2.png";
import loglaw from "@/assets/loglaw.png";
import stresses_rough from "@/assets/stresses_rough.png";
import log_rough from "@/assets/log_rough.png";
import log_scaled_rough from "@/assets/log_scaled_rough.png";
import streamline from "@/assets/streamline.png";
import log_law_vert_channel from "@/assets/log_law_vert_channel.png";



export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  coverImage?: string;   // image shown on the main page tile
  hero?: string;         // hero image or video on the detail page (optional)
  hoverMedia?: string;   // media shown on tile hover
  gallery?: string[];     // images or videos (mp4/webm/mov auto-play muted loop)
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
    longDescription: "Performed LES of turbulent plane channel flow in OpenFOAM at friction Reynolds number = 395 to compare several subgrid-scale turbulence models, including Smagorinsky, dynamic Smagorinsky, WALE, and Sigma. The case has periodic streamwise and spanwise boundaries, no-slip walls, a structured stretched mesh for near-wall resolution, and body-force-driven flow to maintain the target friction Reynolds number. Post-processed the simulations using mean velocity profiles, Reynolds stresses, vorticity statistics, two-point correlations, and anisotropy maps and compared to DNS results.",
    coverImage: channel_thumbnail,
    hero: channel_movie,
    gallery: [loglaw, u2, v2,w2,uv,vort_x,vort_y,vort_z],
    pdf: "https://drive.google.com/file/d/1QfI-2hM_wUcwFuDQt3UZ32f5sUmfAF1K/view?usp=sharing",
  },

  {
    id: "rod-roughened-channel",
    title: "Rod Roughened Channel Flow",
    description: "Custom case in OpenFOAM to validate multi-phase flows with dam-break case.",
    longDescription: "Extended the smooth-channel LES setup to a rod-roughened channel in OpenFOAM based on a published DNS configuration. Created the rough-wall geometry by adding evenly spaced square rods to the top and bottom walls, refined the mesh near and between the rods, and ran the case using the dynamic Smagorinsky model at the same nominal friction Reynolds number. Sampled the flow through multiple y-z planes and analyzed mean velocity profiles, Reynolds stresses, streamline patterns, and Q-criterion visualizations and compared to DNS results.",
    coverImage: rod_thumbnail,
    hero: rod_movie,
    gallery: [streamline,log_rough,log_scaled_rough,stresses_rough],
    pdf: "https://drive.google.com/file/d/1QfI-2hM_wUcwFuDQt3UZ32f5sUmfAF1K/view?usp=sharing",
  },
  {
    id: "rayleigh-benard",
    title: "Rayleigh Benard Convection",
    description: "2D Navier-Stokes for momentum, continuity, and energy equations",
    longDescription: "Built a 2D incompressible Navier–Stokes solver in MATLAB for Rayleigh-Benard convection using the Boussinesq approximation. The solver uses a staggered grid, second-order central differencing in space, RK2 time integration, and a pressure projection step to enforce incompressibility. The case shown is a thermally driven convection problem with periodic boundaries in the horizontal direction and no-slip, fixed-temperature walls at the top and bottom.",
    coverImage: rb_thumbnail,
    hero: rb_movie,
    link: "https://github.com/",
  },

    {
    id: "dam-break-validation",
    title: "Dam Break Validation",
    description: "Custom case in OpenFOAM to validate multi-phase flows with dam-break case.",
    longDescription: "Validated an OpenFOAM interFoam dam-break simulation against experimental data from the Maritime Research Institute Netherlands. Water height was tracked using the 0.5 air-water interface and compared at three probe locations. The study also included a mesh sensitivity analysis; the finest mesh shown here is on the order of 1.2 million cells, which is about the practical limit of my current storage and compute resources.",
    coverImage: dam_still,
    hero: dam_movie,
    gallery: [probes,probe3,probe2,probe1],
  },

    {
    id: "sediments",
    title: "Sediment Transport",
    description: "Custom OpenFOAM solver for sediment transport with an other density-effecting scalar (i.e., temperature).",
    longDescription: "Modified the OpenFOAM solver buoyantBoussinesqPimpleFoam to include a second density-affecting scalar representing suspended sediment. The solver adds a transport equation for sediment with a prescribed settling velocity. The case shown starts from an initially stable sediment-temperature configuration that later develops a convective instability. I am currently extending the model to handle multiple sediment classes with different densities and settling velocities.",
    coverImage: sediment_thumbnail,
    hero: sediment_movie,
    gallery: [project2, project3, project4],
  },
  {
    id: "rising-bubble",
    title: "Rising Bubble",
    description: "text text more text",
    longDescription: "OpenFOAM case for the dynamics of a buoyant air bubble rising in a liquid using InterFOAM. In nondimensional form, the problem is governed by the Galilei number (Ga), Eotvos number (Eo), density ratio, and viscosity ratio. Based on the regime map of Tripathi et al., there are five distinct behaviors of a rising bubble (axisymmetric, skirted, spiraling, peripheral breakup, and central breakup). The case shown corresponds to peripheral breakup at Ga = 70.71, Eo = 20, density ratio = 0.001, and viscosity ratio = 0.01. I am also working through additional bubble regimes and using phase-based dynamic mesh refinement to reduce computational cost.",
    coverImage: bubble_thumbnail,
    hero: rising_bubble_movie,
    gallery: [project2, project3, project4],
  },
  
  {
    id: "salt-fingers",
    title: "Salt Finger - Double Diffusive Instability",
    description: "OpenFOAM custom solver for two density-effecting scalars.",
    longDescription: "Modified the OpenFOAM solver buoyantBoussinesqPimpleFoam to solve for an additional density-affecting scalar and include its effect in the buoyancy term. The case shown is a salt-finger instability, where warm salty water overlies cold fresh water and the different diffusion rates of heat and salt drive a double-diffusive instability. ",
    coverImage: salt_finger,
    hero: salt_movie,
    gallery: [project1, project2, project3, project4],
  },

  {
    id: "vertical-channel-heated-walls",
    title: "Bouyancy Dominated Vertical Chnnel",
    description: "text text more text",
    longDescription: "Performed an LES study of mixed convection in a turbulent vertical channel with isothermal walls. Gravity acts opposite the mean streamwise direction, so buoyancy assists the flow near the hot wall and opposes it near the cold wall. The solver uses a dynamic procedure for both eddy viscosity and scalar flux. Simulations were run for two cases: friction Reynolds number = 180, Grashof number = 1.6e6 and friction Reynolds number = 180, Grashof number = 0, to isolate effect of buoyancy on the flow.",
    coverImage: vert_channel_thumbnail,
    gallery: [log_law_vert_channel, vel, temp, spectra, upvp, uptp, vptp, tp2, dissipation],
  },

  {
    id: "work-in-progress",
    title: "Current Projects in Progress",
    description: "text text more text",
    longDescription: "text text more text.",
    coverImage: dam_still,
    hero: dam_movie,
    gallery: [project2, project3, project4],
  },
];
