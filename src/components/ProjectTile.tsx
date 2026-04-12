import { useState } from "react";
import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";

interface ProjectTileProps {
  project: Project;
  index: number;
}

const ProjectTile = ({ project, index }: ProjectTileProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      to={`/project/${project.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
        {/* Image */}
        <div className="overflow-hidden rounded-3xl aspect-[4/3] bg-secondary">
          {(() => {
            const src = isHovered && project.hoverMedia
              ? project.hoverMedia
              : (project.coverImage || project.gallery?.[0]);
            const isVid = src && (src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".mov"));
            return isVid ? (
              <video
                src={src}
                autoPlay loop muted playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            ) : (
              <img
                src={src}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            );
          })()}
        </div>

        {/* Description */}
        <div className="py-4">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground group-hover:opacity-70 transition-opacity">
            {project.title}
          </h2>
          <p className="mt-3 text-sm md:text-base font-body text-muted-foreground leading-relaxed max-w-md">
            {project.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectTile;
