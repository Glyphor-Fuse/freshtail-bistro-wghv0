import React, { useState, useEffect, useCallback } from "react";
import { Sparkles, ArrowRight, ChevronRight, ChevronLeft, MoveRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface CompareProps {
  firstImage: string;
  secondImage: string;
  className?: string;
  firstImageClassName?: string;
  secondImageClassname?: string;
  initialSliderPercentage?: number;
  slideMode?: "drag" | "hover";
  showHandlebar?: boolean;
  autoplay?: boolean;
  autoplayDuration?: number;
}

export const Compare = ({
  firstImage,
  secondImage,
  className,
  firstImageClassName,
  secondImageClassname,
  initialSliderPercentage = 50,
  slideMode = "hover",
  showHandlebar = true,
  autoplay = false,
  autoplayDuration = 5000,
}: CompareProps) => {
  const [sliderXPercent, setSliderXPercent] = useState(initialSliderPercentage);
  const [isDragging, setIsDragging] = useState(false);

  const style = {
    cursor: slideMode === "drag" ? "ew-resize" : "col-resize",
  } as React.CSSProperties;

  const handleMouseOver = useCallback(
    (event: React.MouseEvent) => {
      if (slideMode === "drag" && !isDragging) return;
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const percent = (x / rect.width) * 100;
      setSliderXPercent(Math.max(0, Math.min(100, percent)));
    },
    [slideMode, isDragging]
  );

  const handleMouseDown = useCallback(() => setIsDragging(true), []);
  const handleMouseUp = useCallback(() => setIsDragging(false), []);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        setSliderXPercent((prev) => (prev === 100 ? 0 : 100));
      }, autoplayDuration);
      return () => clearInterval(interval);
    }
  }, [autoplay, autoplayDuration]);

  return (
    <div
      className={cn("w-full h-full overflow-hidden relative select-none", className)}
      style={style}
      onMouseMove={handleMouseOver}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => {
        if (slideMode === "drag") setIsDragging(false);
      }}
    >
      <AnimatePresence>
        <div
          className="h-full w-px absolute top-0 m-auto z-30 bg-gradient-to-b from-transparent from-[5%] to-[95%] via-indigo-500 to-transparent w-1 md:w-1.5 shadow-[0_0_20px_3px_#6366f1]"
          style={{
            left: `${sliderXPercent}%`,
          }}
        >
          {showHandlebar && (
            <div className="h-10 w-10 absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white z-30 rounded-full shadow-[0px_-1px_0px_0px_#FFFFFF40] flex items-center justify-center pointer-events-none">
              <MoveRight className="h-6 w-6 text-black" />
            </div>
          )}
        </div>
      </AnimatePresence>
      <div className="overflow-hidden w-full h-full relative z-20 pointer-events-none">
        <AnimatePresence>
          <motion.div
            className={cn(
              "absolute inset-0 z-20 rounded-2xl flex-shrink-0 w-full h-full select-none overflow-hidden",
              firstImageClassName
            )}
            style={{
              clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)`,
            }}
            transition={{ duration: 0 }}
          >
            <img
              alt="first image"
              src={firstImage}
              className={cn(
                "absolute inset-0 z-20 rounded-2xl flex-shrink-0 w-full h-full select-none object-cover object-left-top",
                firstImageClassName
              )}
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        <motion.div
          className={cn(
            "absolute inset-0 z-10 rounded-2xl flex-shrink-0 w-full h-full select-none overflow-hidden",
            secondImageClassname
          )}
          transition={{ duration: 0 }}
        >
          <img
            alt="second image"
            src={secondImage}
            className={cn(
              "absolute inset-0 z-10 rounded-2xl flex-shrink-0 w-full h-full select-none object-cover object-left-top",
              secondImageClassname
            )}
            draggable={false}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
