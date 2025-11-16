import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, DollarSign, Globe2, Sparkles, Handshake } from "lucide-react";
import heroImage from "@/assets/hero-commercialization.jpg";
import ImpactCard from "@/components/ImpactCard";

const Commercialization = () => {
  const commercializationSteps = [
    {
      number: "01",
      title: "Supply Qualification",
      description:
        "We audit feedstock inputs, plant operations, and documentation so buyers receive verifiable, high-durability credits.",
    },
    {
      number: "02",
      title: "Credit Packaging",
      description:
        "Synchar bundles production into registry-ready lots with the right vintages, reporting artifacts, and delivery schedules.",
    },
    {
      number: "03",
      title: "Buyer Placement",
      description:
        "We market credits to leading marketplaces, enterprise buyers, and climate funds, structuring offtake or spot sales to match cash needs.",
    },
    {
      number: "04",
      title: "Lifecycle Service",
      description:
        "Our team manages attestations, retirement requests, and storytelling assets that keep customers engaged long after purchase.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Commercialization & Offtake | Synchar</title>
        <meta
          name="description"
          content="Unlock premium carbon removal revenue through Synchar's commercialization services: offtake strategy, buyer sourcing, and registry management."
        />
      </Helmet>

      <Navigation />

      <main className="pt-16">
        <Hero
          headline="Commercialization"
          subheadline="Monetize removal tonnes with trusted offtake, buyer relationships, and registry execution."
          ctaText="Meet the Commercial Team"
          ctaLink="/contact"
          image={heroImage}
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                High-quality projects deserve equally strong go-to-market engines, so Synchar operates a
                commercialization desk dedicated to biochar and other durable carbon removals.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We translate technical performance into compelling value propositions for corporate buyers, marketplaces,
                and climate funds. From advance purchase agreements to multi-year offtake, our team aligns supply timelines
                with budget cycles so developers can scale with confidence.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Beyond sales, we support customer onboarding, storytelling, and retirement logistics—ensuring credits remain
                traceable and your brand earns recognition for measurable climate impact.
              </p>

              <Link to="/contact">
                <Button size="lg">
                  Talk to Sales
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Commercialization Framework</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A structured process keeps every tonne accounted for—from initial quality checks to final retirement certificates.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {commercializationSteps.map((step) => (
                <div key={step.number} className="bg-background p-6 rounded-lg shadow-sm text-left">
                  <div className="text-4xl font-bold text-primary mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why Buyers Work with Synchar
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ImpactCard
                icon={<Handshake className="h-10 w-10" />}
                title="Trusted Relationships"
                text="We maintain direct lines with enterprise sustainability teams, marketplaces, and brokers across North America, Europe, and Asia."
              />
              <ImpactCard
                icon={<DollarSign className="h-10 w-10" />}
                title="Revenue Visibility"
                text="Scenario modeling and hedging tools provide predictable cash flow against both spot and contracted deliveries."
              />
              <ImpactCard
                icon={<Globe2 className="h-10 w-10" />}
                title="Global Reach"
                text="Credits are positioned for multinational buyers with localized messaging, impact storytelling, and co-benefit documentation."
              />
              <ImpactCard
                icon={<Sparkles className="h-10 w-10" />}
                title="Brand Amplification"
                text="We package project media, farmer stories, and soil data into ready-to-share content that celebrates each tonne retired."
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Bring Your Credits to Market</h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Synchar commercializes removal tonnes with transparent pricing, registry-grade documentation, and concierge-level buyer engagement.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                Connect with Our Desk
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

export default Commercialization;
