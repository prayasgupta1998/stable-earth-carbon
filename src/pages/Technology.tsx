import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Factory, Flame, Package, Network } from "lucide-react";
import heroImage from "@/assets/hero-technology.jpg";

const Technology = () => {
  const processSteps = [
    {
      icon: <Leaf className="h-12 w-12" />,
      title: "Sourcing Biomass",
      description: "We collect agricultural and agro-industrial residues — crop stubble, husk, woody biomass, and fibrous waste — by working directly with farmers and local supply networks.",
    },
    {
      icon: <Factory className="h-12 w-12" />,
      title: "On-Site Conversion",
      description: "Our advanced reactors convert this biomass into high-carbon solids. These reactors are engineered for rural and low-infrastructure environments, enabling decentralized deployment close to where biomass is generated.",
    },
    {
      icon: <Flame className="h-12 w-12" />,
      title: "Thermal Optimization",
      description: "Inside the reactors, thermal conditions (temperature, airflow, residence time) are precisely controlled to maximize carbon retention and minimize emissions. The system recovers usable energy from gases released during conversion, making the process partially self-powered.",
    },
    {
      icon: <Package className="h-12 w-12" />,
      title: "Stable Carbon Output",
      description: "The output is a durable, carbon-rich solid designed for long-term carbon storage. It is stable, low in volatiles, and suitable for soil use, industrial applications, or environmental restoration.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Technology | Stable Earth Carbon Advanced Reactors</title>
        <meta
          name="description"
          content="Learn how Stable Earth Carbon transforms biomass residues into stable carbon materials through cutting-edge reactor technology, enabling decentralized carbon removal."
        />
      </Helmet>

      <Navigation />

      <main className="pt-16">
        <Hero
          headline="Advanced Reactor Technology for Carbon Stability"
          subheadline="At Stable Earth Carbon, our mission is to transform biomass residues into stable carbon materials through cutting-edge reactor technology."
          image={heroImage}
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From biomass sourcing to stable carbon output, our reactor systems enable efficient, scalable carbon removal
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-12">Clean, Scalable, Efficient</h2>
              
              <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-12">
                <div className="text-center">
                  <h3 className="text-6xl md:text-7xl font-bold text-accent mb-2">Zero</h3>
                  <p className="text-lg text-muted-foreground">Emissions Operations</p>
                </div>
                <div className="text-center">
                  <h3 className="text-6xl md:text-7xl font-bold text-accent mb-2">100%</h3>
                  <p className="text-lg text-muted-foreground">Biomass Utilization</p>
                </div>
                <div className="text-center">
                  <h3 className="text-6xl md:text-7xl font-bold text-accent mb-2">1000+</h3>
                  <p className="text-lg text-muted-foreground">Years Carbon Storage</p>
                </div>
              </div>

              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                Our modular reactor units are designed for scalability and near-zero emissions. They can process diverse agricultural residues and produce consistent, high-quality biochar verified for carbon content and stability. Each unit is engineered for reliability and can be deployed across agricultural regions.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <img
              src={heroImage}
              alt="Advanced reactor technology for stable carbon production"
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
