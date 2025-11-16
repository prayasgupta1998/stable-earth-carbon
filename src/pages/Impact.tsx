import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ImpactCard from "@/components/ImpactCard";
import { Wind, Droplets, Users, Lock } from "lucide-react";
import heroImage from "@/assets/hero-impact.jpg";

const Impact = () => {
  const impacts = [
    {
      icon: <Wind className="h-8 w-8" />,
      title: "Air Quality Improvement",
      text: "Every tonne of crop residue converted prevents smoke, soot, and PM2.5 emissions from open burning — reducing Delhi's seasonal pollution load.",
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Soil & Water Benefits",
      text: "Biochar enhances soil fertility, water retention, and microbial life, reducing fertilizer needs and improving crop yields sustainably.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Farmer Empowerment",
      text: "We create value for farmers by purchasing crop waste and enabling them to benefit from biochar use and potential carbon incentives.",
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Long-Term Carbon Storage",
      text: "Biochar keeps carbon locked for 100–1000 years — ensuring durable carbon removal recognized by IPCC and carbon markets.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Synchar Impact | Clean Air, Healthy Soils, Climate Action</title>
        <meta
          name="description"
          content="Synchar reduces Delhi's air pollution, enhances soil fertility, and sequesters carbon permanently through biochar — driving environmental and social impact."
        />
      </Helmet>

      <Navigation />

      <main className="pt-16">
        <Hero
          headline="Cleaner Air. Richer Soil. Stable Carbon."
          subheadline="Every tonne of biochar locks carbon away for centuries — preventing emissions, improving soil health, and benefiting farmers."
          image={heroImage}
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Creating measurable environmental and social benefits across the value chain
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {impacts.map((impact, index) => (
                <ImpactCard
                  key={index}
                  icon={impact.icon}
                  title={impact.title}
                  text={impact.text}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-8">
                <div className="text-5xl font-bold text-accent mb-2">40%</div>
                <p className="text-xl font-semibold mb-2">Pollution Reduction</p>
                <p className="text-muted-foreground">
                  Potential reduction in Delhi's seasonal air pollution from stubble burning
                </p>
              </div>
              <div className="p-8">
                <div className="text-5xl font-bold text-accent mb-2">3x</div>
                <p className="text-xl font-semibold mb-2">Water Retention</p>
                <p className="text-muted-foreground">
                  Biochar-amended soil retains up to 3 times more water than untreated soil
                </p>
              </div>
              <div className="p-8">
                <div className="text-5xl font-bold text-accent mb-2">1000+</div>
                <p className="text-xl font-semibold mb-2">Years Storage</p>
                <p className="text-muted-foreground">
                  Carbon remains locked in stable biochar for millennia
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img
                src={heroImage}
                alt="Farmer with biochar"
                className="w-full rounded-lg shadow-2xl mb-8"
              />
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Building a Sustainable Future Together
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our approach creates a virtuous cycle: farmers gain income from waste, 
                  communities breathe cleaner air, soils become more productive, and carbon 
                  is permanently removed from the atmosphere. This is climate action that works 
                  for people and planet.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Impact;
