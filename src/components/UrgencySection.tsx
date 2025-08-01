import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CountdownTimer } from "@/components/CountdownTimer";
import { AlertTriangle, Clock, ArrowRight } from "lucide-react";

export const UrgencySection = () => {
  // Set target date to 7 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden bg-gradient-hero p-8 md:p-12 text-center border-0 shadow-strong">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-warning via-accent to-warning"></div>
            
            <div className="relative z-10">
              {/* Urgency indicator */}
              <div className="inline-flex items-center gap-2 bg-warning/20 border border-warning/30 rounded-full px-4 py-2 mb-6">
                <AlertTriangle className="w-4 h-4 text-warning" />
                <span className="text-sm font-bold text-warning">Beperkt aanbod</span>
              </div>
              
              {/* Main headline */}
              <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
                Nog slechts 3 plekken beschikbaar deze week
              </h2>
              
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                We nemen bewust beperkt aantal klanten aan per week om kwaliteit te garanderen. Mis je kans niet.
              </p>
              
              {/* Countdown timer */}
              <div className="mb-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-primary-foreground" />
                  <span className="text-primary-foreground font-medium">Instapprijs geldig tot:</span>
                </div>
                <CountdownTimer targetDate={targetDate} />
              </div>
              
              {/* Special offer */}
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 mb-8">
                <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                  Tijdelijke instapprijs: €897
                </h3>
                <p className="text-primary-foreground/90 mb-4">
                  Een complete upgrade van je huidige website – snel, scherp en zonder gedoe. Betaling na oplevering.
                </p>
                <div className="flex items-center justify-center gap-4 text-sm text-primary-foreground/80">
                  <span>✓ Klaar binnen 1 week</span>
                  <span>✓ Betaling achteraf</span>
                  <span>✓ Geen revisies</span>
                </div>
              </div>
              
              {/* CTA */}
              <Button variant="accent" size="lg" className="shadow-glow">
                Claim je plek nu
                <ArrowRight className="w-5 h-5" />
              </Button>
              
              <p className="text-sm text-primary-foreground/70 mt-4">
                💳 Betaling pas na oplevering van je nieuwe website
              </p>
            </div>
          </Card>
          
          {/* Scarcity indicators */}
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-warning mb-1">3</div>
              <div className="text-sm text-muted-foreground">Plekken over</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-accent mb-1">24</div>
              <div className="text-sm text-muted-foreground">Mensen bekijken dit</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-success mb-1">7</div>
              <div className="text-sm text-muted-foreground">Aangemeld vandaag</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};