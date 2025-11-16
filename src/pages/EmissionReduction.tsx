import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, FileCheck, Target, Award, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-impact.jpg";
import ImpactCard from "@/components/ImpactCard";

const EmissionReduction = () => {
  const projectPhases = [
    {
      number: "01",
      title: "Project Compatibility Assessment",
      description: "We evaluate your project's eligibility and potential for emission reduction credits under international standards."
    },
    {
      number: "02",
      title: "Methodology Selection",
      description: "We identify and apply the appropriate CDM methodology aligned with Gold Standard, VCS, or GCC requirements."
    },
    {
      number: "03",
      title: "Project Documentation",
      description: "We prepare comprehensive project design documents and validation reports for third-party verification."
    },
    {
      number: "04",
      title: "Verification & Registration",
      description: "We facilitate third-party verification and register your project to generate tradeable carbon credits."
    },
    {
      number: "05",
      title: "Monitoring & Reporting",
      description: "We provide ongoing monitoring and reporting to ensure continued compliance and credit generation."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Emission Reduction Project Development | SthirCarbon</title>
        <meta
          name="description"
          content="Develop verified voluntary emission reduction projects and generate carbon credits. Expert guidance through international standards and carbon markets."
        />
      </Helmet>

      <Navigation />

      <main className="pt-16">
        <Hero
          headline="Emission Reduction Project Development"
          subheadline="Reach your net zero goals by developing emission reduction projects."
          ctaText="Start Developing"
          ctaLink="/contact"
          image={heroImage}
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                SthirCarbon offers businesses the opportunity to develop internationally accredited 
                Voluntary Emission Reduction (VER) projects and generate carbon credits to be traded 
                in the voluntary carbon market.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We offer organizations the opportunity to develop voluntary emission reduction projects 
                in compliance with CDM methodologies and international standards. Businesses can also 
                develop projects within their supply chain (carbon insetting) and directly reduce their 
                Scope 3 emissions.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Develop verified Voluntary Emission Reduction (VER) projects in accordance with CDM 
                methodologies and international standards such as <strong>GS (Gold Standard), VCS 
                (Verified Carbon Standard), Global Carbon Council (GCC)</strong> and <strong>Social Carbon</strong>. 
                Following the relevant standard and approval processes, your projects become tradeable 
                in voluntary carbon markets.
              </p>

              <Link to="/contact">
                <Button size="lg">
                  Start Your Net Zero Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Phases of Emission Reduction Project Development
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We develop emission reduction projects to reduce your organization's unavoidable 
                emissions within your supply chain or elsewhere in the world.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {projectPhases.map((phase) => (
                <div key={phase.number} className="bg-background p-6 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-4">{phase.number}</div>
                  <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                  <p className="text-muted-foreground">{phase.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/contact">
                <Button size="lg" variant="default">
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why Develop Projects with SthirCarbon?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <ImpactCard
                icon={<Award className="h-10 w-10" />}
                title="International Standards"
                text="We guide you through Gold Standard, VCS, GCC, and Social Carbon certification processes for maximum credibility."
              />
              <ImpactCard
                icon={<Target className="h-10 w-10" />}
                title="End-to-End Support"
                text="From initial assessment to credit generation, we handle all technical, regulatory, and verification requirements."
              />
              <ImpactCard
                icon={<TrendingUp className="h-10 w-10" />}
                title="Market Access"
                text="Gain access to voluntary carbon markets and create new revenue streams while reducing your carbon footprint."
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Develop Your Emission Reduction Project?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Get involved in global carbon markets and prepare for the net zero transition 
              with SthirCarbon's expert guidance.
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

export default EmissionReduction;
