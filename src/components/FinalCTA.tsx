import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Shield, CheckCircle, Star } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Klaar om je website te upgraden?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Sluit je aan bij 200+ professionals die hun website hebben geüpgraded en direct resultaat zagen.
          </p>
          
          {/* Guarantee section */}
          <Card className="p-8 mb-12 bg-card border-0 shadow-strong">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-success" />
              <h3 className="text-2xl font-bold text-foreground">Transparante werkwijze</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <CheckCircle className="w-6 h-6 text-success mx-auto mb-2" />
                <div className="font-semibold text-foreground mb-1">Geen risico</div>
                <div className="text-sm text-muted-foreground">Betaling pas na oplevering</div>
              </div>
              <div>
                <CheckCircle className="w-6 h-6 text-success mx-auto mb-2" />
                <div className="font-semibold text-foreground mb-1">Geen revisies</div>
                <div className="text-sm text-muted-foreground">Eén keer goed, efficiënt proces</div>
              </div>
              <div>
                <CheckCircle className="w-6 h-6 text-success mx-auto mb-2" />
                <div className="font-semibold text-foreground mb-1">1 week levertijd</div>
                <div className="text-sm text-muted-foreground">Snel resultaat gegarandeerd</div>
              </div>
            </div>
          </Card>
          
          {/* Social proof */}
          <div className="mb-12">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-warning text-warning" />
              ))}
              <span className="ml-2 font-semibold text-foreground">4.8/5</span>
            </div>
            <p className="text-muted-foreground">
              "WebRenoveur heeft mijn verouderde website omgetoverd tot een professionele showcase. Klanten zijn direct onder de indruk!" 
              <br />
              <span className="font-medium">- Marloes van Dijk, Business Coach</span>
            </p>
          </div>
          
          {/* Final CTA buttons */}
          <div className="space-y-4">
            <Button variant="hero" className="w-full sm:w-auto mr-0 sm:mr-4 mb-4 sm:mb-0">
              Start je website upgrade
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Plan een gesprek
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>Klaar binnen 1 week</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>Geen contracten</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>Betaling achteraf</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};