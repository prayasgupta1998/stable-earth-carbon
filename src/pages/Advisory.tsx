import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpenCheck,
  BarChart3,
  ShieldCheck,
  ClipboardCheck,
  Target,
  Award,
  TrendingUp,
} from "lucide-react";
import heroImage from "@/assets/hero-advisory.jpg";
import ImpactCard from "@/components/ImpactCard";

const Advisory = () => {
  const advisoryTracks = [
    {
      title: "Carbon Strategy Playbooks",
      description:
        "Translate board-level ambition into sector-specific decarbonization roadmaps, policy levers, and investment cases.",
      icon: <BookOpenCheck className="h-10 w-10" />,
    },
    {
      title: "MRV & Quality Systems",
      description:
        "Stand up measurement, reporting, and verification workflows that satisfy Verra, Puro, and regional regulatory bodies.",
      icon: <ClipboardCheck className="h-10 w-10" />,
    },
    {
      title: "Market & Policy Intelligence",
      description:
        "Stay ahead of evolving tax incentives, Article 6 linkages, and procurement standards shaping the carbon removal market.",
      icon: <BarChart3 className="h-10 w-10" />,
    },
    {
      title: "Risk & Assurance",
      description:
        "Evaluate permanence, leakage, community safeguards, and credit delivery risk before you commit capital.",
      icon: <ShieldCheck className="h-10 w-10" />,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Carbon Removal Advisory | Synchar</title>
        <meta
          name="description"
          content="Advisory services for carbon removal developers, buyers, and financiers covering strategy, MRV, policy, and risk management."
        />
      </Helmet>

      <Navigation />

      <main className="pt-16">
        <Hero
          headline="Advisory"
          subheadline="Navigate carbon removal markets with independent analysis, MRV expertise, and hands-on program design."
          ctaText="Book a Strategy Call"
          ctaLink="/contact"
          image={heroImage}
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Synchar's advisors help developers, corporates, and financiers make confident decisions as they enter
                the carbon removal economy. We combine market intelligence with on-the-ground project data to shape
                the right moves for your portfolio.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Whether you are designing an insetting program, preparing for third-party due diligence, or sourcing
                long-term biochar credits, we provide independent assessments that go far beyond slideware. Our team has
                led methodology development, managed registry submissions, and negotiated offtake agreements across Asia.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Work with us to pressure-test assumptions, prioritize high-impact investments, and ensure your
                decarbonization initiatives align with emerging disclosure rules and stakeholder expectations.
              </p>

              <Link to="/contact">
                <Button size="lg">
                  Talk to an Advisor
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Support You</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Select a single track or engage Synchar as an embedded team across development, procurement, and reporting.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advisoryTracks.map((track) => (
                <div key={track.title} className="bg-background p-6 rounded-lg shadow-sm text-left">
                  <div className="text-primary mb-4">{track.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{track.title}</h3>
                  <p className="text-muted-foreground">{track.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Outcomes You Can Expect
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <ImpactCard
                icon={<Target className="h-10 w-10" />}
                title="Clear Decision Frameworks"
                text="We translate technical findings into board-ready recommendations, complete with KPIs and investment guardrails."
              />
              <ImpactCard
                icon={<Award className="h-10 w-10" />}
                title="Quality Alignment"
                text="Advisors ensure every project follows the highest-quality methodologies and community safeguards before credits are issued."
              />
              <ImpactCard
                icon={<TrendingUp className="h-10 w-10" />}
                title="Faster Market Entry"
                text="Accelerate procurement, financing, and reporting timelines with deliverables tailored to buyers, auditors, and registries."
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Partner with Synchar Advisory</h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              We'll align stakeholders, map the regulatory landscape, and guide you through every diligence checkpoint.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                Schedule a Consultation
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

export default Advisory;
