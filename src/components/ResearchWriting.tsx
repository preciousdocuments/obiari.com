import { motion } from "framer-motion";
import { useState } from "react";
import { publicAsset } from "@/lib/utils";

const transition = { duration: 0.8, ease: [0.19, 1, 0.22, 1] as const };

const researchAreas = [
  {
    number: "01",
    title: "Medical Imaging",
    description:
      "Patient-specific imaging and anatomical modeling for clearer, more useful views of individual health needs.",
  },
  {
    number: "02",
    title: "Clinical Digital Twins",
    description:
      "Digital representations and simulation tools that can support visualization, planning, and preventative care.",
  },
  {
    number: "03",
    title: "Noninvasive Medicine",
    description:
      "Emerging biopharma and medical technologies that aim to make diagnosis and treatment more targeted.",
  },
];

const writingCollections = [
  {
    number: "01",
    title: "Undergraduate Collection",
    description: "Selected writing and projects from undergraduate study.",
    papers: [
      {
        title:
          "Afrosurrealism Through Art: A Metaphysical Study of the Route to Higher Consciousness and Meaning Through Portrayals of Art and Entertainment Multimedia",
        url: "/afrosurrealism-through-art.pdf",
      },
      {
        title: "Measurement of Consciousness: Subjective vs. Objective",
        url: "/measurement-of-consciousness-subjective-vs-objective.pdf",
      },
      {
        title: "Will and Awareness",
        url: "/psych447-will-and-awareness.pdf",
      },
      {
        title: "Optimal Consciousness",
        url: "/honors241-build-4-optimal-consciousness.pdf",
      },
      {
        title: "Problems of Personal Identity",
        url: "/honors241-westworld-build-3.pdf",
      },
      {
        title: "Consciousness",
        url: "/honors241-westworld-build-1.pdf",
      },
    ],
  },
  {
    number: "02",
    title: "Independent Collection",
    description: "Research and writing developed through independent inquiry.",
    papers: [
      {
        title: "174 Clinical Review of Duplicated Chronic Illness",
        placeholder: true,
      },
      {
        title: "Biopharma Market Analysis in the 2020s Statistical Review",
        placeholder: true,
      },
      {
        title: "Medical Device Market Analysis in the 2020s Statistical Review",
        placeholder: true,
      },
      {
        title: "SaMD Market Analysis in the 2020s Statistical Review",
        placeholder: true,
      },
    ],
  },
  {
    number: "03",
    title: "Graduate Collection",
    description: "Academic work and research from graduate study.",
    papers: [
      {
        title:
          "Replicational Study of CT Scans in Partnership with the Heffner Biomedical Lab at Columbia University",
        placeholder: true,
      },
    ],
  },
];

const ResearchWriting = () => {
  const [activeCollection, setActiveCollection] = useState<string | null>(null);

  return (
  <section id="research" className="scroll-mt-24 py-[20vh] px-6 max-w-7xl mx-auto">
    <div className="mb-16 border-b border-border pb-4 flex items-end justify-between gap-6">
      <span className="font-mono-meta text-[11px] text-muted-foreground tracking-widest uppercase">
        Research &amp; Academic Writing
      </span>
      <span className="font-mono-meta text-[10px] text-muted-foreground tracking-widest uppercase">
        01 — 03
      </span>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={transition}
    >
      <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tighter max-w-4xl">
        Research for more precise, preventative care.
      </h2>
      <p className="font-serif-body text-xl sm:text-2xl italic text-muted-foreground mt-6 max-w-3xl leading-relaxed">
        Exploring how medical imaging, digital twins, and noninvasive technologies can help make healthcare more personal and actionable.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
      {researchAreas.map((area, index) => (
        <motion.article
          key={area.number}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ ...transition, delay: index * 0.08 }}
          className="border-t border-foreground pt-5"
        >
          <span className="font-mono-meta text-xs text-muted-foreground">{area.number}</span>
          <h3 className="font-display text-2xl font-bold uppercase tracking-tight mt-8">{area.title}</h3>
          <p className="font-serif-body text-lg text-muted-foreground leading-relaxed mt-4">
            {area.description}
          </p>
        </motion.article>
      ))}
    </div>

    <div className="mt-24 border-t border-border pt-8">
      <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tighter">
        The Collections
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {writingCollections.map((collection) => (
          <motion.article
            key={collection.number}
            onHoverStart={() => setActiveCollection(collection.number)}
            onHoverEnd={() => setActiveCollection(null)}
            onFocusCapture={() => setActiveCollection(collection.number)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setActiveCollection(null);
              }
            }}
            tabIndex={"papers" in collection ? 0 : undefined}
            className="border-t border-foreground pt-5"
          >
            <span className="font-mono-meta text-xs text-muted-foreground">{collection.number}</span>
            <h4 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight mt-8">
              {collection.title}
            </h4>
            <p className="font-serif-body text-lg text-muted-foreground leading-relaxed mt-4">
              {collection.description}
            </p>
            {"papers" in collection && (
              <motion.ul
                initial={false}
                animate={{
                  opacity: activeCollection === collection.number ? 1 : 0,
                  height: activeCollection === collection.number ? "auto" : 0,
                  marginTop: activeCollection === collection.number ? 16 : 0,
                }}
                className="space-y-2 overflow-hidden"
                aria-hidden={activeCollection !== collection.number}
              >
                {collection.papers.map((paper) => (
                  <li key={paper.title}>
                    {"url" in paper && paper.url ? (
                      <a
                        href={publicAsset(paper.url)}
                        target="_blank"
                        rel="noreferrer"
                        tabIndex={activeCollection === collection.number ? 0 : -1}
                        className="font-serif-body text-base text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
                      >
                        {paper.title}
                      </a>
                    ) : (
                      <span className="font-serif-body text-base text-muted-foreground">
                        {paper.title} <span className="italic">(Forthcoming)</span>
                      </span>
                    )}
                  </li>
                ))}
              </motion.ul>
            )}
          </motion.article>
        ))}
      </div>
    </div>
  </section>
  );
};

export default ResearchWriting;
