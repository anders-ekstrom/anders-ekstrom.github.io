import Header from "@/components/Header";
import ProjectTile from "@/components/ProjectTile";
import { projects } from "@/data/projects";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="px-6 md:px-12 lg:px-20 pb-20">
        <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
          {projects.map((project, i) => (
            <ProjectTile key={project.id} project={project} index={i} />
          ))}
        </div>
      </main>
      <footer className="py-8 px-6 md:px-12 lg:px-20 border-t border-border">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-xs font-body text-muted-foreground">
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
