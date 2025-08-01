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
                <span className="text-sm font-bold text-warning">Limited Time Offer</span>
              </div>
              
              {/* Main headline */}
              <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
                Only 6 Upgrade Slots Left This Month
              </h2>
              
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                We limit our monthly upgrades to ensure quality. Don't miss your chance to transform your website.
              </p>
              
              {/* Countdown timer */}
              <div className="mb-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-primary-foreground" />
                  <span className="text-primary-foreground font-medium">Offer ends in:</span>
                </div>
                <CountdownTimer targetDate={targetDate} />
              </div>
              
              {/* Special offer */}
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 mb-8">
                <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                  50% Off Premium Redesign Package
                </h3>
                <p className="text-primary-foreground/90 mb-4">
                  Get a premium redesign at half the cost of a new build. We only get paid if you love the result.
                </p>
                <div className="flex items-center justify-center gap-4 text-sm text-primary-foreground/80">
                  <span>✓ No upfront payment</span>
                  <span>✓ 30-day guarantee</span>
                  <span>✓ Free revisions</span>
                </div>
              </div>
              
              {/* CTA */}
              <Button variant="accent" size="lg" className="shadow-glow">
                Claim Your Slot Now
                <ArrowRight className="w-5 h-5" />
              </Button>
              
              <p className="text-sm text-primary-foreground/70 mt-4">
                💳 No payment required until you're 100% satisfied
              </p>
            </div>
          </Card>
          
          {/* Scarcity indicators */}
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-warning mb-1">6</div>
              <div className="text-sm text-muted-foreground">Slots remaining</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-accent mb-1">47</div>
              <div className="text-sm text-muted-foreground">People viewing</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-success mb-1">12</div>
              <div className="text-sm text-muted-foreground">Signed up today</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};