import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Target, Shield } from "lucide-react";

export const ServiceExplanation = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: "Performance Optimization",
      description: "We supercharge your site speed, fix technical issues, and optimize for mobile to keep visitors engaged."
    },
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: "Conversion Enhancement",
      description: "We redesign key pages, improve user flow, and add proven elements that turn visitors into customers."
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Modern Refresh",
      description: "We update your design with current trends, better UX, and professional touches that build trust."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Upgrade Instead of Rebuild?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Starting fresh is expensive and time-consuming. We work with what you have and make it exceptional.
            </p>
          </div>
          
          {/* Service cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-strong transition-smooth border-0 bg-card/50 backdrop-blur-sm">
                <div className="mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
          
          {/* Statistics */}
          <div className="bg-gradient-subtle rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50%</div>
                <div className="text-muted-foreground">Average cost savings vs new build</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">2-3x</div>
                <div className="text-muted-foreground">Faster project completion</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">85%</div>
                <div className="text-muted-foreground">Improvement in conversion rates</div>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center mt-12">
            <Button variant="cta" size="lg">
              Start Your Upgrade Today
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};