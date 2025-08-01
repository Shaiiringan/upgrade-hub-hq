import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Target, Shield } from "lucide-react";

export const ServiceExplanation = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: "Technische Optimalisatie",
      description: "Wij versnellen je website, lossen technische problemen op en zorgen voor perfecte weergave op alle apparaten."
    },
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: "Professionele Uitstraling",
      description: "We verbeteren je design, optimaliseren de gebruikerservaring en zorgen dat je expertise direct opvalt."
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Moderne Vernieuwing",
      description: "We brengen je website up-to-date met huidige trends en professionele elementen die vertrouwen wekken."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Waarom upgraden in plaats van opnieuw beginnen?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Een nieuwe website is duur en tijdrovend. Wij werken met wat je hebt en maken het uitzonderlijk.
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
                <div className="text-4xl font-bold text-primary mb-2">1 week</div>
                <div className="text-muted-foreground">Maximale levertijd</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">3x</div>
                <div className="text-muted-foreground">Sneller dan nieuwbouw</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-muted-foreground">Tevreden professionals</div>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center mt-12">
            <Button variant="cta" size="lg">
              Start je upgrade vandaag
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};