import { motion } from "framer-motion";

const transition = { duration: 0.8, ease: [0.19, 1, 0.22, 1] as const };

const websites = [
  { name: "www.goodsensse.com", url: "https://www.goodsensse.com" },
  { name: "www.obiariphotography.com", url: "https://www.obiariphotography.com" },
  { name: "www.obiariblogs.com", url: "https://www.obiariblogs.com" },
];

const About = () => {
  return (
    <section id="about" className="py-[20vh] px-6 max-w-5xl mx-auto">
      <div className="mb-16 border-b border-border pb-4">
        <span className="font-mono-meta text-[11px] text-muted-foreground tracking-widest uppercase">
          About
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
        >
          <h2 className="font-display text-3xl font-bold tracking-tighter uppercase mb-8">
            Philosophy
          </h2>
          <div className="space-y-6 font-serif-body text-lg leading-relaxed text-muted-foreground">
            <p>
              To bridge the gap between emerging technology and social equity by architecting digital solutions that empower underserved communities and modernize health & wellness. I am dedicated to transforming complex data—from anatomical modeling to financial systems—into intuitive, impactful tools that foster human wellness and collective advancement.
            </p>
            <p>
              Driven by the conviction to do good and a mind prone to rigorous systems thinking — the aim always is to further drive function in wellness.
            </p>
            <p className="italic">
              Currently transitioning from corprate health software systems to global healthcare equities management. 
            </p>
          </div>
        </motion.div>

        {/* More Obiari */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.1 }}
        >
          <h2 className="font-display text-3xl font-bold tracking-tighter uppercase mb-8">
            More Obiari ‎ . ݁⋆ ꫂ᭪ ݁˖ . ݁
          </h2>
          <div className="space-y-0">
            {websites.map((website) => (
              <a
                key={website.url}
                href={website.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between border-b border-border py-4 font-serif-body text-lg text-foreground transition-colors hover:text-muted-foreground"
              >
                <span>{website.name}</span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
