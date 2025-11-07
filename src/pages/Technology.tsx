import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Flame, Leaf, Zap, Factory } from "lucide-react";
import heroImage from "@/assets/hero-technology.jpg";

const Technology = () => {
  const processSteps = [
    {
      icon: <Leaf className="h-12 w-12" />,
      title: "Collection & Drying",
      description: "Crop residues are collected from farms and properly dried to optimal moisture levels.",
    },
    {
      icon: <Flame className="h-12 w-12" />,
      title: "Pyrolysis at 500°C",
      description: "Biomass is heated in an oxygen-free chamber, breaking down into carbon-rich biochar.",
    },
    {
      icon: <Factory className="h-12 w-12" />,
      title: "Multiple Outputs",
      description: "Process yields biochar (solid carbon), syngas (energy), and bio-oil (renewable fuel).",
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Energy Self-Sufficient",
      description: "Syngas powers the process, making operations carbon-neutral and low-emission.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>SthirCarbon Pyrolysis Technology | Biochar from Crop Residue</title>
        <meta
          name="description"
          content="Discover SthirCarbon's advanced pyrolysis process that converts stubble into biochar — producing clean energy, reducing emissions, and locking carbon for centuries."
        />
      </Helmet>

      <Navigation />

      <main className="pt-16">
        <Hero
          headline="Pyrolysis: Turning Biomass into Stable Carbon"
          subheadline="Our proprietary pyrolysis system converts crop residues into biochar, syngas, and bio-oil — capturing carbon and creating renewable energy."
          image={heroImage}
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our advanced pyrolysis technology transforms agricultural waste into valuable carbon-negative products
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="absolute top-0 right-0 text-8xl font-bold text-muted opacity-10">
                      {index + 1}
                    </div>
                    <div className="relative z-10">
                      <div className="text-accent mb-4">{step.icon}</div>
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Clean, Scalable, Efficient
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">Zero</div>
                  <p className="text-muted-foreground">Emissions Operations</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">100%</div>
                  <p className="text-muted-foreground">Biomass Utilization</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">1000+</div>
                  <p className="text-muted-foreground">Years Carbon Storage</p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground mt-12 leading-relaxed">
                Our modular pyrolysis units are designed for scalability and near-zero emissions. 
                They can process diverse agricultural residues and produce consistent, high-quality 
                biochar verified for carbon content and stability. Each unit is engineered for 
                reliability and can be deployed across agricultural regions.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <img
              src={heroImage}
              alt="Biochar production facility"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Technology;
