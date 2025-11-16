import { Link } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo-synchar-new.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Technology", path: "/technology" },
    { name: "Impact", path: "/impact" },
    { name: "Carbon Credits", path: "/carbon-credits" },
  ];

  const serviceItems = [
    { name: "Development", path: "/services/development" },
    { name: "Advisory", path: "/services/advisory" },
    { name: "Commercialization", path: "/services/commercialization" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Synchar" className="h-[2.66rem] w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="text-foreground hover:text-accent transition-colors"
                activeClassName="text-accent font-semibold"
              >
                {item.name}
              </NavLink>
            ))}
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-accent transition-colors focus:outline-none">
                Services
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border z-50">
                {serviceItems.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link to={item.path} className="cursor-pointer">
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <NavLink
              to="/contact"
              className="text-foreground hover:text-accent transition-colors"
              activeClassName="text-accent font-semibold"
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="block py-2 text-foreground hover:text-accent transition-colors"
                activeClassName="text-accent font-semibold"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <div className="py-2">
              <div className="font-semibold text-foreground mb-2">Services</div>
              {serviceItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block py-2 pl-4 text-foreground hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <NavLink
              to="/contact"
              className="block py-2 text-foreground hover:text-accent transition-colors"
              activeClassName="text-accent font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
