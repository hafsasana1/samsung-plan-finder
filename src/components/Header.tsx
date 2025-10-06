import { Shield } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation().pathname;
  
  const navItems = [
    { path: "/", label: "Home", color: "from-emerald-500 to-teal-500" },
    { path: "/tips", label: "Tips & Guides", color: "from-blue-500 to-cyan-500" },
    { path: "/compare", label: "Compare", color: "from-purple-500 to-pink-500" },
    { path: "/about", label: "About", color: "from-orange-500 to-amber-500" },
    { path: "/contact", label: "Contact", color: "from-rose-500 to-red-500" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-gradient-to-r from-background/95 via-primary/5 to-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 shadow-lg">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 transition-all hover:scale-105 hover:opacity-90">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 shadow-md">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Samsung Care+</span>
            <span className="text-xs text-muted-foreground">Insurance Calculator</span>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-2" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = location === item.path;
            return (
              <Link 
                key={item.path}
                to={item.path} 
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                  isActive 
                    ? `bg-gradient-to-r ${item.color} text-white shadow-md` 
                    : 'text-foreground hover:text-white'
                }`}
                aria-label={item.label}
                data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {!isActive && (
                  <span className={`absolute inset-0 rounded-lg bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></span>
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
