import React from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    quote: "I couldn't believe the difference. His coat is shinier, his energy is back, and he actually licks the bowl clean every single time. Best decision I ever made.",
    name: "Sarah & Cooper",
    designation: "Golden Retriever • 4 Years Old",
    src: "/images/dog-goldie.png",
  },
  {
    quote: "Bella has always had a sensitive stomach. Since switching to FreshTail, her digestion is perfect and she's stopped itching completely. The vet was impressed!",
    name: "Mike & Bella",
    designation: "French Bulldog • 2 Years Old",
    src: "/images/dog-frenchie.png",
  },
  {
    quote: "It looks and smells like real food because it IS real food. I honestly was tempted to try it myself (I didn't, but I wanted to). Max loves the Beef recipe.",
    name: "Jessica & Max",
    designation: "Labrador Mix • 7 Years Old",
    src: "/images/hero-bowl.png", 
  }
];

export default function TransformationStories() {
  return (
    <section className="py-24 bg-background relative">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Real Dogs. <span className="text-primary">Real Results.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium">
            Join thousands of pet parents witnessing the FreshTail transformation.
          </p>
        </div>
        
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
}
