import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-12 md:py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-foreground leading-tight">
          Your Name
        </h1>
        <p className="mt-4 text-lg md:text-xl font-body text-muted-foreground max-w-xl leading-relaxed">
          Designer & Developer — crafting thoughtful digital experiences.
        </p>
        <nav className="mt-6 flex gap-6 text-sm font-body font-medium text-muted-foreground">
          <a href="mailto:hello@example.com" className="hover:text-foreground transition-colors">Email</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
          
        </nav>
      </div>
    </header>
  );
};

export default Header;
