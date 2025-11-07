import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>SthirCarbon | Biochar Carbon Removal from Crop Waste | Delhi-NCR</title>
        <meta
          name="description"
          content="SthirCarbon transforms crop residue from stubble burning into biochar — locking carbon for centuries while improving soil health and reducing air pollution in Delhi-NCR."
        />
      </Helmet>

      <Navigation />

      <main className="pt-16">
        <Hero
          headline="From Smoke to Soil: Stable Carbon for a Cleaner Future"
          subheadline="We convert stubble and farm waste into biochar — permanently storing carbon and creating cleaner air, healthier soils, and sustainable growth."
          ctaText="Learn How"
          ctaLink="/technology"
          image={heroImage}
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  The Problem: Stubble Burning and Air Pollution
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Each winter, millions of tonnes of crop residue are burned across North India, 
                  contributing up to 40% of Delhi's seasonal air pollution. SthirCarbon tackles 
                  this crisis by transforming waste biomass into biochar, cutting emissions at the source.
                </p>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
                <img
                  src={heroImage}
                  alt="Delhi air pollution from stubble burning"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative h-80 rounded-lg overflow-hidden shadow-xl">
                <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <div className="text-center text-primary-foreground p-8">
                    <div className="text-6xl font-bold mb-4">500°C</div>
                    <p className="text-xl">Pyrolysis Temperature</p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our Solution: Converting Waste into Stable Carbon
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Through controlled pyrolysis, we turn crop residues into biochar — a carbon-rich 
                  material that remains stable for centuries. This not only prevents pollution but 
                  sequesters CO₂, creating measurable, permanent carbon removal.
                </p>
                <Link to="/technology">
                  <Button variant="outline" size="lg">
                    Explore Our Technology
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Join Our Mission for a Stable, Sustainable Future
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Partner with SthirCarbon to clean our air, support farmers, and accelerate 
              high-integrity carbon removal.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
