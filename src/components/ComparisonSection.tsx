import React from "react";
import { Compare } from "@/components/ui/compare";
import { Sparkles } from "lucide-react";

export default function ComparisonSection() {
  return (
    <section className="py-24 bg-muted relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <SparklesCore className="w-5 h-5 text-primary" />
            <span className="text-primary font-bold tracking-wider text-sm uppercase">The FreshTail Difference</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Kibble vs. <span className="text-primary">Real Food</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium">
            See the difference for yourself. While kibble is processed at high heat, our meals are gently cooked to preserve nutrients and flavor.
          </p>
        </div>

        <div className="max-w-4xl mx-auto h-[400px] md:h-[500px] lg:h-[600px] w-full bg-card rounded-3xl shadow-2xl border-4 border-border p-4 md:p-4">
          <Compare
            firstImage="/images/compare-kibble.png"
            secondImage="/images/compare-fresh.png"
            firstImageClassName="object-cover object-center w-full h-full rounded-[22px]"
            secondImageClassname="object-cover object-center w-full h-full rounded-[22px]"
            className="w-full h-full rounded-[22px]"
            slideMode="hover"
            autoplay={true}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto text-center">
            <div className="bg-background/50 p-6 rounded-2xl backdrop-blur-sm border border-border/50">
                <h3 className="font-display font-bold text-xl mb-2 text-foreground">Digestion</h3>
                <p className="text-sm text-muted-foreground">Fresh food is up to 40% more digestible than dry kibble.</p>
            </div>
            <div className="bg-background/50 p-6 rounded-2xl backdrop-blur-sm border border-border/50">
                <h3 className="font-display font-bold text-xl mb-2 text-foreground">Energy</h3>
                <p className="text-sm text-muted-foreground">High-quality protein means sustained energy for playtime.</p>
            </div>
            <div className="bg-background/50 p-6 rounded-2xl backdrop-blur-sm border border-border/50">
                <h3 className="font-display font-bold text-xl mb-2 text-foreground">Coat</h3>
                <p className="text-sm text-muted-foreground">Essential fatty acids lead to softer, shinier fur in weeks.</p>
            </div>
        </div>
      </div>
    </section>
  );
}
