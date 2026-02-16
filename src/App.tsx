import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Hero from "@/components/Hero";
import ComparisonSection from "@/components/ComparisonSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import SourcingMap from "@/components/SourcingMap";
import TransformationStories from "@/components/TransformationStories";
import BowlBuilder from "@/components/BowlBuilder";
import Footer from "@/components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster position="top-center" />
        <main className="min-h-screen bg-background text-foreground font-body overflow-x-hidden selection:bg-primary selection:text-white">
          <Hero />
          <ComparisonSection />
          <FeaturesGrid />
          <SourcingMap />
          <TransformationStories />
          <BowlBuilder />
          <Footer />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
