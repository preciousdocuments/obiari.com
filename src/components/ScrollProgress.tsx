import { motion, useScroll, useTransform } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const percentage = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <motion.div className="fixed top-0 left-0 right-0 z-50 h-6 bg-background border-b border-border flex items-center px-6">
      <motion.span className="font-mono-meta text-[10px] text-muted-foreground">
        {percentage.get().toFixed(0).padStart(3, "0")}%
      </motion.span>
      <motion.div
        className="h-[1px] bg-foreground ml-3"
        style={{ width: scrollYProgress.get() * 100 + "%" }}
      />
    </motion.div>
  );
};

// Use a wrapper that updates on scroll
import { useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const ScrollProgressLive = () => {
  const { scrollYProgress } = useScroll();
  const [pct, setPct] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => setPct(v * 100));

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-6 bg-background border-b border-border flex items-center px-6">
      <span className="font-mono-meta text-[10px] text-muted-foreground">
        {String(Math.round(pct)).padStart(3, "0")}%
      </span>
      <div className="flex-1 h-[1px] bg-border ml-3 relative">
        <motion.div
          className="absolute inset-y-0 left-0 bg-foreground"
          style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
        />
      </div>
    </div>
  );
};

export default ScrollProgressLive;
