import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, FileCheck } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

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
                    <div className="text-5xl font-bold mb-4">Advanced</div>
                    <div className="text-4xl font-bold mb-2">Biomass</div>
                    <div className="text-5xl font-bold">Reactors</div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our Solution: Converting Waste into Stable Carbon
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  SthirCarbon uses advanced biomass reactors to convert agricultural and agro-industrial 
                  residues into stable carbon materials. By deploying advanced reactor units, we eliminate 
                  open burning, and create durable carbon that remains stored for the long term.
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

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We offer comprehensive solutions to help organizations achieve their net zero goals 
                through carbon removal and emission reduction strategies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4 text-accent">
                    <Target className="h-12 w-12" />
                  </div>
                  <CardTitle className="text-2xl">Carbon Offset</CardTitle>
                  <CardDescription>
                    Compensate for your unavoidable emissions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Invest in verified carbon removal projects to offset your organization's 
                    carbon footprint. We provide transparent, measurable, and permanent carbon 
                    sequestration solutions aligned with international standards.
                  </p>
                  <Link to="/services/carbon-offset">
                    <Button variant="outline" className="w-full">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4 text-accent">
                    <FileCheck className="h-12 w-12" />
                  </div>
                  <CardTitle className="text-2xl">Emission Reduction Project Development</CardTitle>
                  <CardDescription>
                    Develop your own emission reduction projects
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    We guide you through developing internationally accredited Voluntary Emission 
                    Reduction projects. Generate tradeable carbon credits while reducing your 
                    Scope 3 emissions through carbon insetting.
                  </p>
                  <Link to="/services/emission-reduction">
                    <Button variant="outline" className="w-full">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
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
