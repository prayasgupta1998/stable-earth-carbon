import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-contact.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const submission = new FormData();
      submission.append("name", formData.name);
      submission.append("email", formData.email);
      submission.append("organization", formData.organization);
      submission.append("message", formData.message);
      submission.append("_subject", "New Synchar website inquiry");
      submission.append("_captcha", "false");

      const response = await fetch(
        "https://formsubmit.co/prayas.tension@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: submission,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", organization: "", message: "" });
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Please try again or email prayas.tension@gmail.com directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Helmet>
        <title>Contact Synchar | Partner for Clean Air & Carbon Removal</title>
        <meta
          name="description"
          content="Get in touch with Synchar to collaborate on biochar-based carbon removal, sustainability investment, or farm partnerships."
        />
      </Helmet>

      <Navigation />

      <main className="pt-16">
        <Hero
          headline="Let's Build a Stable Future Together"
          subheadline="Join us in cleaning Delhi's air and restoring carbon to the soil."
          image={heroImage}
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you're interested in carbon credits, technology partnerships, 
                  or farmer collaborations, we'd love to hear from you.
                </p>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="flex items-start gap-4 pt-6">
                      <div className="p-3 rounded-lg bg-accent/10">
                        <Mail className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a
                          href="mailto:info@synchar.com"
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          info@synchar.com
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="flex items-start gap-4 pt-6">
                      <div className="p-3 rounded-lg bg-accent/10">
                        <Phone className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <a
                          href="tel:+919521766111"
                          className="text-muted-foreground hover:text-accent transition-colors block"
                        >
                          +91 95217 66111
                        </a>
                        <a
                          href="tel:+919827721250"
                          className="text-muted-foreground hover:text-accent transition-colors block"
                        >
                          +91 78277 21250
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="organization">Organization</Label>
                      <Input
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="mt-2"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
