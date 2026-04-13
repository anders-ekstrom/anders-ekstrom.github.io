import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [heroLightbox, setHeroLightbox] = useState(false);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-display font-bold text-foreground">Project not found</h1>
          <Link to="/" className="mt-4 inline-block text-sm font-body text-muted-foreground hover:text-foreground transition-colors">
            ← Back home
          </Link>
        </div>
      </div>
    );
  }

  const isVideo = (src: string) =>
    src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".mov");

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const prevSlide = () => {
    setLightboxIndex((i) => (i === 0 ? (project.gallery?.length ?? 1) - 1 : i - 1));
  };

  const nextSlide = () => {
    setLightboxIndex((i) => (i === (project.gallery?.length ?? 1) - 1 ? 0 : i + 1));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="px-6 md:px-12 lg:px-20 py-8">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-20 pb-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tight">
            {project.title}
          </h1>
          <div className="mt-4 flex flex-wrap gap-4">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                View on GitHub
              </a>
            )}
            {project.pdf && (
              <a
                href={project.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1z"/></svg>
                View PDF
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Hero image or video */}
      {project.hero && (
        <div className="px-6 md:px-12 lg:px-20 pb-12">
          <div className="max-w-6xl mx-auto">
            <button
              onClick={() => setHeroLightbox(true)}
              className="w-full overflow-hidden rounded-3xl aspect-[16/9] bg-secondary cursor-pointer group"
            >
              {isVideo(project.hero) ? (
                <video
                  src={project.hero}
                  autoPlay loop muted playsInline
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              ) : (
                <img
                  src={project.hero}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              )}
            </button>
          </div>
        </div>
      )}

      {/* Hero lightbox */}
      {project.hero && (
        <Dialog open={heroLightbox} onOpenChange={setHeroLightbox}>
          <DialogContent className="max-w-[95vw] max-h-[95vh] w-auto p-0 border-none bg-transparent shadow-none rounded-none [&>button]:hidden">
            <div className="flex flex-col items-center gap-4">
              {isVideo(project.hero) ? (
                <video
                  src={project.hero}
                  autoPlay loop muted playsInline
                  className="max-w-[92vw] max-h-[88vh] object-contain"
                />
              ) : (
                <img
                  src={project.hero}
                  alt={project.title}
                  className="max-w-[92vw] max-h-[88vh] object-contain"
                />
              )}
              <button
                onClick={() => setHeroLightbox(false)}
                className="p-2 rounded-full bg-background/80 text-foreground hover:bg-background transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Description */}
      <div className="px-6 md:px-12 lg:px-20 pb-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-base md:text-lg font-body text-foreground leading-relaxed whitespace-pre-line">
            {project.longDescription}
          </p>
        </div>
      </div>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <div className="px-6 md:px-12 lg:px-20 pb-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.gallery.map((src, i) => {
              const vid = isVideo(src);
              return (
                <button
                  key={i}
                  onClick={() => openLightbox(i)}
                  className="overflow-hidden rounded-3xl aspect-[4/3] bg-secondary cursor-pointer group"
                >
                  {vid ? (
                    <video
                      src={src}
                      autoPlay loop muted playsInline
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <img
                      src={src}
                      alt={`${project.title} gallery ${i + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Lightbox carousel */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] w-auto p-0 border-none bg-transparent shadow-none rounded-none [&>button]:hidden">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4">
              {(project.gallery?.length ?? 0) > 1 && (
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-background/80 text-foreground hover:bg-background transition-colors shrink-0"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {project.gallery && isVideo(project.gallery[lightboxIndex]) ? (
                <video
                  src={project.gallery[lightboxIndex]}
                  autoPlay loop muted playsInline
                  className="max-w-[80vw] max-h-[80vh] object-contain"
                />
              ) : project.gallery ? (
                <img
                  src={project.gallery[lightboxIndex]}
                  alt={`${project.title} gallery ${lightboxIndex + 1}`}
                  className="max-w-[80vw] max-h-[80vh] object-contain"
                />
              ) : null}

              {(project.gallery?.length ?? 0) > 1 && (
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-background/80 text-foreground hover:bg-background transition-colors shrink-0"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-4">
              {(project.gallery?.length ?? 0) > 1 && (
                <div className="flex gap-2">
                  {project.gallery?.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setLightboxIndex(i)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        i === lightboxIndex ? "bg-foreground" : "bg-foreground/40"
                      }`}
                    />
                  ))}
                </div>
              )}
              <button
                onClick={() => setLightboxOpen(false)}
                className="p-2 rounded-full bg-background/80 text-foreground hover:bg-background transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <footer className="py-8 px-6 md:px-12 lg:px-20 border-t border-border">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-xs font-body text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">← Back home</Link>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;
