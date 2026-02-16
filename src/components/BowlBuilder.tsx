import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, ChevronRight, Dog, LoaderCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const steps = [
  { id: 1, title: "Who's this for?", field: "name" },
  { id: 2, title: "How old are they?", field: "age" },
  { id: 3, title: "Any allergies?", field: "allergies" },
  { id: 4, title: "Calculating...", field: "loading" },
];

export default function BowlBuilder() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({ name: "", age: "", allergies: "none" });

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(c => c + 1);
    }
  };

  const isFinalStep = currentStep === steps.length - 1;

  return (
    <section className="py-24 bg-muted relative overflow-hidden" id="builder">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-card rounded-[2rem] shadow-2xl overflow-hidden border border-border/50 flex flex-col md:flex-row min-h-[500px]">
          
          {/* Left Panel - Visual Context */}
          <div className="w-full md:w-1/3 bg-primary p-8 text-foreground flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-background/20 rounded-full flex items-center justify-center mb-6">
                <Dog className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-2">Bowl Builder</h3>
              <p className="text-foreground/80 text-sm">Design the perfect meal plan tailored to your pup's unique profile.</p>
            </div>

            <div className="space-y-4 relative z-10 mt-8">
              {steps.slice(0, 3).map((step, idx) => (
                <div key={step.id} className={`flex items-center gap-3 ${idx === currentStep ? "opacity-100" : "opacity-50"}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border ${idx <= currentStep ? "bg-background text-primary border-border" : "border-border/40"}`}>
                    {idx < currentStep ? <Check className="w-4 h-4" /> : step.id}
                  </div>
                  <span className="text-sm font-medium">{step.title}</span>
                </div>
              ))}
            </div>

            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-background/10 rounded-full blur-2xl" />
          </div>

          {/* Right Panel - Interactive Form */}
          <div className="w-full md:w-2/3 p-8 md:p-12 flex flex-col justify-center bg-background relative">
            <AnimatePresence mode="wait">
              
              {currentStep === 0 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-3xl font-display font-bold text-foreground">First, what's your dog's name?</h3>
                  <div className="space-y-2">
                    <Label htmlFor="dogName" className="text-lg">My dog's name is</Label>
                    <Input 
                      id="dogName" 
                      placeholder="e.g. Cooper" 
                      className="text-2xl p-6 h-auto border-2 focus-visible:ring-primary/50"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <Button 
                    onClick={nextStep} 
                    disabled={!formData.name}
                    className="w-full h-14 text-lg bg-primary hover:bg-primary/90 text-foreground rounded-xl"
                  >
                    Next Step <ChevronRight className="ml-2" />
                  </Button>
                </motion.div>
              )}

              {currentStep === 1 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-3xl font-display font-bold text-foreground">Hi {formData.name}! How old are they?</h3>
                  <RadioGroup defaultValue="adult" onValueChange={(v) => setFormData({...formData, age: v})} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="relative">
                      <RadioGroupItem value="puppy" id="puppy" className="peer sr-only" />
                      <Label htmlFor="puppy" className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-transparent p-4 hover:bg-muted/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary cursor-pointer transition-all h-32">
                        <span className="text-3xl mb-2">🍼</span>
                        <span className="font-bold">Puppy</span>
                        <span className="text-xs text-muted-foreground font-normal text-center">&lt; 1 Year</span>
                      </Label>
                    </div>
                    <div className="relative">
                      <RadioGroupItem value="adult" id="adult" className="peer sr-only" />
                      <Label htmlFor="adult" className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-transparent p-4 hover:bg-muted/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary cursor-pointer transition-all h-32">
                        <span className="text-3xl mb-2">🐕</span>
                        <span className="font-bold">Adult</span>
                        <span className="text-xs text-muted-foreground font-normal text-center">1-7 Years</span>
                      </Label>
                    </div>
                    <div className="relative">
                      <RadioGroupItem value="senior" id="senior" className="peer sr-only" />
                      <Label htmlFor="senior" className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-transparent p-4 hover:bg-muted/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary cursor-pointer transition-all h-32">
                        <span className="text-3xl mb-2">🦴</span>
                        <span className="font-bold">Senior</span>
                        <span className="text-xs text-muted-foreground font-normal text-center">7+ Years</span>
                      </Label>
                    </div>
                  </RadioGroup>
                  <Button onClick={nextStep} className="w-full h-14 text-lg bg-primary hover:bg-primary/90 text-foreground rounded-xl">
                    Next Step <ChevronRight className="ml-2" />
                  </Button>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-3xl font-display font-bold text-foreground">Any allergies we should know about?</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {["Chicken", "Beef", "Grain", "None"].map((allergy) => (
                      <Button 
                        key={allergy}
                        variant={formData.allergies === allergy ? "default" : "outline"}
                        className={`h-12 ${formData.allergies === allergy ? "bg-primary text-foreground border-primary" : "border-muted text-muted-foreground"}`}
                        onClick={() => setFormData({...formData, allergies: allergy})}
                      >
                        {allergy}
                      </Button>
                    ))}
                  </div>
                  <Button onClick={nextStep} className="w-full h-14 text-lg bg-primary hover:bg-primary/90 text-foreground rounded-xl mt-4">
                    Calculate Plan <ChevronRight className="ml-2" />
                  </Button>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div 
                  key="step4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center space-y-6 py-8"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
                     <Check className="w-10 h-10 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-display font-bold text-foreground mb-2">Plan Ready!</h3>
                    <p className="text-muted-foreground">We've crafted the perfect beef & sweet potato blend for {formData.name}.</p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-xl w-full text-left">
                     <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-foreground">FreshTail Beef Recipe</span>
                        <span className="font-bold text-primary">$2.50 / day</span>
                     </div>
                     <p className="text-xs text-muted-foreground">Based on {formData.age} age profile.</p>
                  </div>
                  <Button className="w-full h-14 text-lg bg-secondary hover:bg-secondary/90 text-foreground rounded-xl shadow-lg shadow-secondary/20 animate-bounce">
                    Proceed to Checkout
                  </Button>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
