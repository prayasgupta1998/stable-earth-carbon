import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  headline: string;
  subheadline: string;
  ctaText?: string;
  ctaLink?: string;
  image: string;
}

const Hero = ({ headline, subheadline, ctaText, ctaLink, image }: HeroProps) => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(30, 30, 30, 0.85), rgba(30, 30, 30, 0.4)), url(${image})`,
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            {headline}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            {subheadline}
          </p>
          {ctaText && ctaLink && (
            <Link to={ctaLink}>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                {ctaText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
