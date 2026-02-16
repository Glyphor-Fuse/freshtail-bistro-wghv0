import React from "react";
import { Dog } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-display font-bold text-2xl">
              <Dog className="w-8 h-8 text-primary" />
              FreshTail
            </div>
            <p className="text-foreground/60 text-sm max-w-xs">
              Human-grade nutrition delivered to your door. Because they're family, not just pets.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-primary">Shop</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li><a href="#" className="hover:text-foreground transition">Fresh Meals</a></li>
              <li><a href="#" className="hover:text-foreground transition">Treats</a></li>
              <li><a href="#" className="hover:text-foreground transition">Supplements</a></li>
              <li><a href="#" className="hover:text-foreground transition">Gift Cards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-primary">Learn</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li><a href="#" className="hover:text-foreground transition">Our Story</a></li>
              <li><a href="#" className="hover:text-foreground transition">Ingredients</a></li>
              <li><a href="#" className="hover:text-foreground transition">Sourcing Map</a></li>
              <li><a href="#" className="hover:text-foreground transition">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-primary">Support</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li><a href="#" className="hover:text-foreground transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-foreground transition">FAQ</a></li>
              <li><a href="#" className="hover:text-foreground transition">Shipping</a></li>
              <li><a href="#" className="hover:text-foreground transition">Returns</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-foreground/40">
          <p>© 2024 FreshTail Bistro. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
