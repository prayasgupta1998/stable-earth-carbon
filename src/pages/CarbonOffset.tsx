import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calculator, TrendingDown, Leaf, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-technology.jpg";
import ImpactCard from "@/components/ImpactCard";

const CarbonOffset = () => {
  const roadmapSteps = [
    {
      number: "01",
      title: "Calculation",
      description: "We calculate your carbon footprint by determining the sources of your emissions."
    },
    {
      number: "02",
      title: "Reduction",
      description: "We create strategies and roadmaps to reduce your carbon footprint."
    },
    {
      number: "03",
      title: "Offset",
      description: "We enable you to invest in carbon offset projects and compensate for your unavoidable emissions."
    },
    {
      number: "04",
      title: "Verification",
      description: "We ensure all offset projects meet international standards and deliver measurable impact."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Carbon Offset Solutions | Synchar</title>
        <meta
          name="description"
          content="Offset your unavoidable emissions through verified carbon removal projects. Partner with Synchar to achieve your net zero goals."
        />
      </Helmet>

      <Navigation />

      <main className="pt-16">
        <Hero
          headline="Carbon Offset"
          subheadline="Participate in the net zero transformation by funding carbon offset projects."
          ctaText="Start Your Journey"
          ctaLink="/contact"
          image={heroImage}
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Carbon offsetting is a mechanism that allows companies to <strong>invest in local and 
                international emission reduction projects</strong> to compensate for their unavoidable emissions.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Carbon offset projects are of vital importance on the road to achieving net zero. 
                Organizations worldwide are now required to manage their greenhouse gas emissions if they 
                want to adapt to rapid regulatory changes.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Offset your unavoidable emissions by funding verified emission reduction projects with
                Synchar and mitigate your environmental impact. Demonstrate your commitment to
                corporate sustainability by taking steps to achieve global goals in the fight against 
                the climate crisis.
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
                Net Zero Roadmap
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We offer carbon offset projects in line with your corporate sustainability goals. 
                Balance your organization's emissions and step into the net zero future.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {roadmapSteps.map((step) => (
                <div key={step.number} className="text-center">
                  <div className="text-5xl font-bold text-primary mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
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
              Why Choose Synchar for Carbon Offsetting?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <ImpactCard
                icon={<CheckCircle className="h-10 w-10" />}
                title="Verified Projects"
                text="All our carbon offset projects meet international standards and deliver measurable, permanent carbon removal."
              />
              <ImpactCard
                icon={<TrendingDown className="h-10 w-10" />}
                title="Local Impact"
                text="Focus on addressing air pollution and agricultural waste issues in North India while creating global climate benefits."
              />
              <ImpactCard
                icon={<Leaf className="h-10 w-10" />}
                title="Co-Benefits"
                text="Beyond carbon removal, our projects improve air quality, enhance soil health, and support local farmers."
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Offset Your Carbon Footprint?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Partner with Synchar to balance your emissions and demonstrate your commitment
              to a sustainable future.
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

export default CarbonOffset;
