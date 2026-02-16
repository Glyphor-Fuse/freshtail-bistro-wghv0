import { motion } from "framer-motion";
import { ArrowRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-20 lg:pt-0">
      <div className="container px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-6 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary text-sm font-bold tracking-wide mb-4 border border-secondary/20">
              VET NUTRITIONIST APPROVED
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight text-foreground">
              The Bowl Your Dog <br/>
              <span className="text-primary italic">Dreams About.</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 font-medium"
          >
            Fresh, human-grade meals tailored to your pup's unique needs. Delivered to your door, devoured in seconds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-foreground rounded-full text-lg h-14 px-8 shadow-xl shadow-primary/20">
              Build Your Dog's Plan <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2 justify-center text-sm font-semibold text-foreground/80">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-background-200 border-2 border-background overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="user" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start leading-tight">
                <div className="flex text-foreground-500">
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                </div>
                <span>10,000+ Happy Pups</span>
              </div>
            </div>
          </motion.div>

          <div className="pt-8 flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-muted-foreground font-medium">
            <span className="flex items-center gap-1"><Check className="w-4 h-4 text-secondary" /> Human-Grade</span>
            <span className="flex items-center gap-1"><Check className="w-4 h-4 text-secondary" /> Preservative Free</span>
            <span className="flex items-center gap-1"><Check className="w-4 h-4 text-secondary" /> Gently Cooked</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-border transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="/images/hero-bowl.png" 
              alt="Fresh dog food in a bowl" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
          </div>
          
          {/* Floating Badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-10 bg-background p-4 rounded-2xl shadow-xl max-w-[200px] border border-muted"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-2xl">🥩</div>
              <div>
                <p className="font-bold text-foreground text-sm">Real Beef</p>
                <p className="text-xs text-muted-foreground">#1 Ingredient</p>
              </div>
            </div>
            <div className="h-1 w-full bg-background-100 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 w-[90%]" />
            </div>
          </motion.div>
        </motion.div>

      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 -skew-x-12 translate-x-1/2 -z-0" />
    </section>
  );
}
