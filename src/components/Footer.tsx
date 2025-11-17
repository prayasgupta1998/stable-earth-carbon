import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Synchar</h3>
            <p className="text-primary-foreground/80">
              Turning Farm Waste into Stable Carbon for a Cleaner Future
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/technology" className="block hover:text-accent transition-colors">
                Technology
              </Link>
              <Link to="/impact" className="block hover:text-accent transition-colors">
                Impact
              </Link>
              <Link to="/carbon-credits" className="block hover:text-accent transition-colors">
                Carbon Credits
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <a
                href="mailto:removeco2@synchar.earth"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4" />
                removeco2@synchar.earth
              </a>
              <p className="text-primary-foreground/80">Delhi-NCR, India</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/80">
          <p>© 2025 Synchar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
