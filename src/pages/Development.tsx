import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Ruler, HardHat, BadgeCheck, Factory } from "lucide-react";
import heroImage from "@/assets/hero-development.jpg";
import ImpactCard from "@/components/ImpactCard";

const Development = () => {
  const buildSteps = [
    {
      number: "01",
      title: "Site & Feedstock Intelligence",
      description:
        "We map agricultural residue flows, evaluate logistics, and size modular biochar reactors around reliable biomass supply.",
    },
    {
      number: "02",
      title: "Permitting & Engineering",
      description:
        "Our team navigates local permits while producing detailed engineering packages, balance-of-plant design, and utility tie-ins.",
    },
    {
      number: "03",
      title: "Fabrication & Deployment",
      description:
        "Synchar coordinates OEM fabrication, balance-of-plant procurement, and on-site construction until the reactors are mechanically complete.",
    },
    {
      number: "04",
      title: "Commissioning & MRV",
      description:
        "We commission the plant, validate process controls, and stand up monitoring, reporting, and verification workflows for credit issuance.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Carbon Removal Project Development | Synchar</title>
        <meta
          name="description"
          content="Develop reliable biochar carbon removal infrastructure with Synchar's site diligence, engineering, and turnkey deployment services."
        />
      </Helmet>

      <Navigation />

      <main className="pt-16">
        <Hero
          headline="Development"
          subheadline="Design, permit, and commission high-integrity biochar projects built on agricultural residues."
          ctaText="Scope a Project"
          ctaLink="/contact"
          image={heroImage}
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Synchar turns surplus field residues into durable carbon removal assets by bringing together
                agronomy, engineering, and finance teams. Every project is grounded in real biomass supply chains
                and ready for institutional buyers.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                From the first site walk to the first batch of biochar, our project developers orchestrate land
                access, feedstock contracts, modular pyrolysis tech, and commissioning plans. Each project is
                structured for rapid replication and meets the permanence, traceability, and social impact screens
                demanded by global carbon markets.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                The result is a portfolio of bankable carbon removal facilities that eliminate stubble burning,
                improve soils, and deliver auditable carbon credits. Our team manages diligence, procurement,
                and schedule control so you can focus on scaling climate results.
              </p>

              <Link to="/contact">
                <Button size="lg">
                  Talk to Our Developers
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Turnkey Development Journey</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We apply a structured gating process to de-risk every milestone and keep new facilities on budget.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {buildSteps.map((step) => (
                <div key={step.number} className="text-center bg-background p-6 rounded-lg shadow-sm">
                  <div className="text-4xl font-bold text-primary mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/contact">
                <Button size="lg" variant="default">
                  Request a Project Brief
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              What Synchar Delivers
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ImpactCard
                icon={<Ruler className="h-10 w-10" />}
                title="Integrated Design"
                text="Civil, mechanical, and electrical packages are coordinated to fit modular pyrolysis systems into rural footprints without surprises."
              />
              <ImpactCard
                icon={<HardHat className="h-10 w-10" />}
                title="On-Site Execution"
                text="Dedicated site leads handle contractor mobilization, QC, and safety, keeping every build aligned with critical path schedules."
              />
              <ImpactCard
                icon={<BadgeCheck className="h-10 w-10" />}
                title="Credit-Ready MRV"
                text="We design data collection, lab testing, and registry documentation alongside the plant so credits are ready as soon as biochar ships."
              />
              <ImpactCard
                icon={<Factory className="h-10 w-10" />}
                title="Scalable Portfolio"
                text="Facilities are standardized for replication, unlocking multi-site rollouts that rapidly grow removal capacity."
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Break Ground?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Synchar can own, co-develop, or manage projects for partners that want to deploy serious carbon removal capacity fast.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                Contact Us Today
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

export default Development;
