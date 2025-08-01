import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-card border rounded-full px-4 py-2 mb-8 shadow-soft">
            <CheckCircle className="w-4 h-4 text-success" />
            <span className="text-sm font-medium text-foreground">Vertrouwd door 200+ professionals</span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Laat je expertise{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              eruit springen
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Maak indruk met je aanbod. WebRenoveur upgradet, verbetert en verfijnt je bestaande website om meer klanten aan te trekken en je expertise te laten stralen.
          </p>
          
          {/* Key benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <span className="text-foreground font-medium">Klaar binnen 1 week</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <span className="text-foreground font-medium">Professionele uitstraling</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <span className="text-foreground font-medium">Meer klanten aantrekken</span>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" className="w-full sm:w-auto">
              Start je upgrade
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Bekijk voorbeelden
            </Button>
          </div>
          
          {/* Social proof */}
          <p className="text-sm text-muted-foreground mt-8">
            ⭐⭐⭐⭐⭐ 4.8/5 van 200+ professionals • Snel, scherp en zonder gedoe
          </p>
        </div>
      </div>
    </section>
  );
};