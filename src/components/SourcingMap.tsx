import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const locations = [
  { id: 1, name: "Texas Beef", x: "45%", y: "65%" },
  { id: 2, name: "California Spinach", x: "15%", y: "45%" },
  { id: 3, name: "Oregon Blueberries", x: "18%", y: "25%" },
  { id: 4, name: "Midwest Turkey", x: "55%", y: "35%" },
  { id: 5, name: "New York Apples", x: "80%", y: "30%" },
];

export default function SourcingMap() {
  return (
    <section className="py-24 bg-muted overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Total Transparency. <br/>
              <span className="text-secondary">From Farm to Bowl.</span>
            </h2>
            <p className="text-lg text-muted-foreground font-medium">
              We don't hide where our food comes from. Every ingredient is sourced from trusted farmers and suppliers in the USA. 
              No mystery meats from overseas. Just real, honest food.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-xl border border-border shadow-sm">
                <div className="text-3xl font-display font-bold text-primary mb-1">100%</div>
                <div className="text-sm font-semibold text-foreground">Human Grade</div>
              </div>
              <div className="bg-background p-6 rounded-xl border border-border shadow-sm">
                <div className="text-3xl font-display font-bold text-secondary mb-1">USA</div>
                <div className="text-sm font-semibold text-foreground">Sourced & Cooked</div>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] bg-card rounded-3xl shadow-xl border-4 border-border p-4 overflow-hidden group">
            <div className="absolute inset-0 bg-[#E3F2FD] opacity-50" />
            
            {/* Abstract Map Shape - simplified SVG for visual context */}
            <svg viewBox="0 0 800 500" className="w-full h-full text-foreground-200 fill-current opacity-50">
               <path d="M 50 100 Q 150 50 300 80 T 500 100 T 750 150 L 700 400 Q 400 450 100 350 Z" />
               {/* This is a very abstract blob representing a map base for style */}
            </svg>
            
            <div className="absolute inset-0">
               {locations.map((loc, i) => (
                 <div 
                   key={loc.id}
                   className="absolute"
                   style={{ left: loc.x, top: loc.y }}
                 >
                   <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: i * 0.2, type: "spring" }}
                    className="relative"
                   >
                     <div className="w-4 h-4 bg-primary rounded-full relative z-10 animate-pulse" />
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary/30 rounded-full animate-ping" />
                     
                     <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-background px-3 py-4 rounded-full shadow-lg border border-muted whitespace-nowrap z-20">
                       <span className="text-xs font-bold text-foreground flex items-center gap-1">
                         <MapPin className="w-3 h-3 text-secondary" /> {loc.name}
                       </span>
                     </div>
                   </motion.div>
                 </div>
               ))}
            </div>
            
            <div className="absolute bottom-4 right-4 text-xs text-muted-foreground bg-background/80 px-4 py-4 rounded backdrop-blur-sm">
              * Representative sourcing map
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
