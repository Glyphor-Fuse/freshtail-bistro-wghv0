import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { Utensils, HeartPulse, Truck } from "lucide-react";

export default function FeaturesGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            More Than Just <span className="text-secondary">Dog Food</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium">
            We're redefining what goes into your dog's bowl. No fillers, no secrets—just science-backed nutrition and love.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full">
          
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-primary min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <div className="max-w-xs">
              <div className="w-12 h-12 rounded-full bg-background/20 flex items-center justify-center mb-4">
                <Utensils className="w-6 h-6 text-foreground" />
              </div>
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-foreground">
                Human-Grade Ingredients
              </h2>
              <p className="mt-4 text-left  text-base/6 text-foreground-200">
                If you wouldn't eat it, why should they? We use USDA-certified meats and fresh produce you'd find in a grocery store.
              </p>
            </div>
            <img
              src="/images/ingredients-spread.png"
              width={500}
              height={500}
              alt="Fresh ingredients"
              className="absolute -right-4 lg:-right-[10%] grayscale filter -bottom-10 object-contain rounded-2xl"
            />
          </WobbleCard>
          
          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-secondary">
            <div className="w-12 h-12 rounded-full bg-background/20 flex items-center justify-center mb-4">
               <HeartPulse className="w-6 h-6 text-foreground" />
            </div>
            <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-foreground">
              Vet Nutritionist Formulated
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-foreground-200">
              Recipes designed by experts to ensure complete and balanced nutrition for all life stages.
            </p>
          </WobbleCard>
          
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-background-900 min-h-[500px] lg:min-h-[400px] xl:min-h-[300px]">
            <div className="max-w-sm">
              <div className="w-12 h-12 rounded-full bg-background/20 flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-foreground" />
              </div>
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-foreground">
                Delivered Cold, Ready to Serve
              </h2>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-foreground-200">
                Portioned perfectly for your pup and delivered in eco-friendly insulated boxes. Store in the fridge or freezer.
              </p>
            </div>
            <img
              src="/images/dog-frenchie.png"
              width={500}
              height={500}
              alt="Happy dog"
              className="absolute -right-10 md:-right-[40%] lg:-right-[10%] -bottom-10 object-contain rounded-2xl h-[120%]"
            />
          </WobbleCard>
        </div>
      </div>
    </section>
  );
}
