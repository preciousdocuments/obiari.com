import { motion } from "framer-motion";

const transition = { duration: 0.8, ease: [0.19, 1, 0.22, 1] as const };

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-svh overflow-hidden flex flex-col justify-center px-6 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.2 }}
      >
        <div className="mb-8">
          <span className="font-mono-meta text-[11px] text-muted-foreground tracking-widest uppercase">
            Obiari Uche — 2026
          </span>
        </div>

        <h1 className="font-serif-body text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[1.05] mb-8">
          <span className="block italic">Driving Function</span>
          <span className="block text-muted-foreground italic">in Wellness:</span>
          <span className="block">one idea at a time.</span>
        </h1>

      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...transition, delay: 0.8 }}
        className="absolute bottom-12 left-6 z-10"
      >
        <span className="font-mono-meta text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
          Scroll to explore
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;
