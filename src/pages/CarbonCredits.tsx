import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-credits.jpg";

const CarbonCredits = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Verified & Certified",
      description: "Credits measured and verified under global frameworks like Puro.Earth",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Permanent Removal",
      description: "Carbon locked for 100-1000 years in stable biochar",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Co-Benefits",
      description: "Air quality improvement, soil enhancement, and farmer livelihoods",
    },
    {
      icon: <CheckCircle2 className="h-8 w-8" />,
      title: "Full Traceability",
      description: "Track your carbon removal from farm to final application",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Synchar Carbon Credits | Verified Carbon Removal</title>
        <meta
          name="description"
          content="Synchar generates verified carbon credits through biochar — providing transparent, high-integrity carbon removal for sustainability investors and net-zero buyers."
        />
      </Helmet>

      <Navigation />

      <main className="pt-16">
        <Hero
          headline="High-Integrity Carbon Removal Credits"
          subheadline="Each tonne of biochar represents permanent carbon removal — certified and traceable for climate-conscious investors and corporations."
          image={heroImage}
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Verified, Transparent, Impact-Driven
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our biochar credits are measured, reported, and verified under global frameworks. 
                We provide traceable, data-backed carbon removal aligned with net-zero goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Biochar Carbon Removal?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Biochar accounts for over 80% of all durable carbon removals delivered globally. 
                  It's scalable, cost-effective, and provides strong co-benefits for soil and air quality.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">
                      Recognized by IPCC as a durable carbon removal pathway
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">
                      Lower cost per tonne than many engineered solutions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">
                      Immediate deployment potential across agricultural regions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">
                      Measurable environmental and social co-benefits
                    </span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img
                  src={heroImage}
                  alt="Carbon credit certificate"
                  className="w-full rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Invest in Verified Carbon Removal?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Partner with Synchar for high-quality, traceable carbon credits
              that make a real difference.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                Get In Touch
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CarbonCredits;
