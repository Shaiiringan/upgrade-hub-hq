import { Card } from "@/components/ui/card";
import { Search, Wrench, Rocket, CheckCircle } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8 text-accent" />,
      step: "01",
      title: "Analyse",
      description: "We bekijken je huidige website en identificeren precies wat er verbeterd moet worden voor maximale impact."
    },
    {
      icon: <Wrench className="w-8 h-8 text-accent" />,
      step: "02", 
      title: "Strategische Upgrade",
      description: "We verbeteren je design, optimaliseren de prestaties en zorgen dat je expertise professioneel overkomt."
    },
    {
      icon: <Rocket className="w-8 h-8 text-accent" />,
      step: "03",
      title: "Oplevering",
      description: "Je geüpgradede website gaat live met betere prestaties, professionele uitstraling en meer impact."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Hoe het werkt
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ons bewezen 3-stappen proces levert resultaat binnen 1 week
            </p>
          </div>
          
          {/* Process steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-accent/30 to-transparent z-0 translate-x-4"></div>
                )}
                
                <Card className="relative z-10 p-8 text-center hover:shadow-strong transition-smooth bg-card border-0 shadow-soft">
                  <div className="mb-4 flex justify-center">
                    <div className="relative">
                      {step.icon}
                      <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                        {step.step}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Timeline */}
          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Typische planning</h3>
              <p className="text-muted-foreground">Van analyse tot oplevering</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center mb-2">
                  <CheckCircle className="w-5 h-5 text-success-foreground" />
                </div>
                <div className="text-sm font-medium text-foreground">Dag 1</div>
                <div className="text-xs text-muted-foreground">Analyse</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-warning rounded-full flex items-center justify-center mb-2">
                  <div className="w-3 h-3 bg-warning-foreground rounded-full"></div>
                </div>
                <div className="text-sm font-medium text-foreground">Dag 2-3</div>
                <div className="text-xs text-muted-foreground">Planning & Design</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mb-2">
                  <div className="w-3 h-3 bg-accent-foreground rounded-full"></div>
                </div>
                <div className="text-sm font-medium text-foreground">Dag 4-6</div>
                <div className="text-xs text-muted-foreground">Ontwikkeling</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center mb-2">
                  <Rocket className="w-5 h-5 text-success-foreground" />
                </div>
                <div className="text-sm font-medium text-foreground">Dag 7</div>
                <div className="text-xs text-muted-foreground">Oplevering</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};