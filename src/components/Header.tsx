import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
            <Shield className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-foreground">Samsung Care+</span>
            <span className="text-xs text-muted-foreground">Insurance Calculator</span>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/tips" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Tips & Guides
          </Link>
          <Link to="/about" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
