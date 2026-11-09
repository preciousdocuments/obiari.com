import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { Lock } from "lucide-react";

const transition = { duration: 0.8, ease: [0.19, 1, 0.22, 1] as const };
const projectUnlockCode = "8187447";
const calendlyUrl = "https://calendly.com/obiariuche";

interface Project {
  year: string;
  orgName?: string;
  name: string;
  description: string;
  role: string;
  credits?: string[];
  hideCredits?: boolean;
  teammates?: string[];
  slides?: string;
  supplementalUrl?: string;
  publicUrl?: string;
  publicUrlLabel?: string;
  images?: { src: string; alt: string }[];
  locked?: boolean;
  details?: string;
  hidden?: boolean;
}

const projects: Project[] = [
  {
    year: "2026",
    orgName: "Human Centered Design and Innovation",
    name: "Open Spot",
    description: "A platform that matches New Yorkers by sport, level, and time into games on courts already booked.",
    role: "TEAM MEMBER",
    publicUrl: "https://preciousdocuments.github.io/hcdi-prototypes/open-spot.html",
    publicUrlLabel: "View prototype ↗",
    teammates: ["Alara Dinc", "Lingkai", "Kobe Ko", "Yunji Park"],
    slides: "/open-spot-design-document.pdf",
    supplementalUrl: "/open-spot-supplemental-material.pptx",
  },
  {
    year: "2026 · Incoming",
    hidden: true,
    orgName: "Medical Imaging and Preventative Health for Chronic Illness",
    name: "GOODSENSSE LABS",
    description: "MBA MS Engineering Masters Research Proposal Columbia University ",
    role: "STUDENT RESEARCHER",
    details: "Research emphasis on medical imaging as the first step to mastering the render of objectified organ twin with localized anatomical accuracy and outline to visualize unique medical circumstances and interventive preventative solutions. 3D object rendering and analysis, VR/AR tooling for medical XR, and AI applications in medical imaging, digital twin simulations, and non-invasive biopharma technologies. An exploration of prognosis, preventative diagnostics, and noninvasive medicine. ",
  },
  {
    year: "2022-2026",
    orgName: "SOCIAL WELLNESS APPLICATION SUITE  ",
    name: "GOODSENSSE DIGITAL",
    description: "Social wellness software platforms and digital consulting ",
    role: "PRODUCT BUILDER",
    details: "Creating digital solutions and consulting for social welfare within diverse communities of Chicago and New York. Leveraging web platforms, data tools, and community building initiatives to promote social good and individual wellness.",
  },
  {
    year: "2026",
    orgName: "Oracle Health",
    name: "AI, Patient Safety, & Quality Management",
    description: "Research and development for the qual/quant measure and maintanence of quality AI input for patient safety in oncology, international regulations, accessibility, and global health systems.",
    role: "RESEARCHER/PM",
    locked: true,
    publicUrl: "https://www.oracle.com/news/announcement/oracle-to-advance-cancer-care-with-new-oncology-ehr-2026-09-23/",
  },
  {
    year: "2025 — 2026",
    orgName: "Oracle Health",
    name: "Digital Twin Pattern Systems",
    description: "Digital twin pattern series architecture for facility map, body map, and medical device twin configuration, expanding the 3D object library",
    role: "FRONTEND ARCHITECT",
    locked: true,
    images: [
      {
        src: "/digital-twin-human-body-map.jpg",
        alt: "Oracle Health human body map showing before and after 3D rendering",
      },
      {
        src: "/digital-twin-patient-dashboard.png",
        alt: "Patient dashboard showing a 3D body map, assessments, activity, intake and output, and care tasks",
      },
    ],
  },
  {
    year: "2024 — 2025",
    orgName: "Oracle Health",
    name: "Clinical Scheduler",
    description: "Dynamic clincial health patient scheduler composed of calendar item, week, day, and monthly views leveraging APIs, integrating patient data, appointment scheduling, and reporting functionalities for improved operational efficiency with sensitivity to patient data and regulative factors.",
    role: "DESIGN TECHNOLOGIST",
    credits: ["Lead Designer · Ted Unruh", "Project Manager · Katia", "Design Technologist · Obiari"],
    hideCredits: true,
    locked: true,
    publicUrl: "https://www.oracle.com/health/clinical-suite/electronic-health-record/#ai-generated-summaries",
  },
  {
    year: "2023",
    orgName: "Oracle Design Engineering",
    name: "Applications Developer Intern",
    description: "Hospital Management Dashboard",
    role: "DEVELOPER ",
    details: "Develop visualizations for a hospital manager dashboard utilizing scoreboard metric cards to manage valuable appointment scheduling KPIs, connecting visualizations and KPIs to Oracle’s HCM REST Cloud services. Apply the use of JavaScript frameworks (React/Preact), node.js, libraries and abstractions, and cloud services to develop visualization",
  },
  {
    year: "2022 — 2024",
    orgName: "Google",
    name: "Community Leaders, Nonprofit & SMB",
    description: "Nonprofit and Small/Medium Business student advisory for ads, searchability, SEO, and community based initatives.",
    role: "LEADER",
    publicUrl: "https://www.linkedin.com/feed/update/urn:li:share:7060579554242789376/",
    details: "Led initiatives to empower nonprofits and small businesses with Google's technology stack, organizing workshops, providing technical guidance, and developing open-source resources.",
  },
  {
    year: "2022",
    orgName: "Deloitte",
    name: "Discovery II Business Technology Consultant",
    description: "Discovery business technology consulting intern for Unlimited Reality Project.",
    role: "AR/VR CONSULTANT",
    details: "Used UX principles to design fitting landing portals for government based 3D augmented simulations in Government Public Services (GPS) branch Unlimited Reality Project. ",
  },
];

const ProductCatalog = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [unlockCode, setUnlockCode] = useState("");
  const [projectsUnlocked, setProjectsUnlocked] = useState(false);
  const [codeError, setCodeError] = useState(false);
  const [isCodeDialogOpen, setIsCodeDialogOpen] = useState(false);
  const [selectedLockedProject, setSelectedLockedProject] = useState("");

  const handleUnlock = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (unlockCode === projectUnlockCode) {
      setProjectsUnlocked(true);
      setCodeError(false);
      setUnlockCode("");
      setIsCodeDialogOpen(false);
    } else {
      setCodeError(true);
    }
  };

  const closeCodeDialog = () => {
    setIsCodeDialogOpen(false);
    setCodeError(false);
    setUnlockCode("");
  };

  return (
    <section id="catalog" className="py-[20vh] px-6 max-w-7xl mx-auto">
      <div className="mb-16 border-b border-border pb-4 flex items-center justify-between gap-4">
        <span className="font-mono-meta text-[11px] text-muted-foreground tracking-widest uppercase">
          Meaningful Work
        </span>
      </div>

      {isCodeDialogOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-6 backdrop-blur-sm"
          onClick={(event) => {
            if (event.target === event.currentTarget) closeCodeDialog();
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") closeCodeDialog();
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-unlock-title"
            aria-describedby="project-unlock-description"
            className="relative w-full max-w-md border border-border bg-background/80 p-6 shadow-xl backdrop-blur-xl"
          >
            <button
              type="button"
              onClick={closeCodeDialog}
              aria-label="Close unlock dialog"
              className="absolute right-4 top-4 font-mono-meta text-lg text-muted-foreground transition-colors hover:text-foreground"
            >
              ×
            </button>
            <div className="mb-6 space-y-2 pr-8">
              <h2 id="project-unlock-title" className="font-display text-2xl uppercase tracking-tight">
                Locked Project
              </h2>
              <p id="project-unlock-description" className="font-serif-body text-base text-muted-foreground">
                Enter the code to view {selectedLockedProject}. A valid code unlocks all locked projects.
              </p>
            </div>
          <form onSubmit={handleUnlock} className="space-y-4">
            <label htmlFor="project-unlock-code" className="sr-only">
              Project unlock code
            </label>
            <input
              id="project-unlock-code"
              type="password"
              inputMode="numeric"
              autoComplete="off"
              maxLength={7}
              value={unlockCode}
              onChange={(event) => {
                setUnlockCode(event.target.value);
                setCodeError(false);
              }}
              placeholder="Enter code"
              className="w-full border-b border-border bg-transparent py-2 font-mono-meta text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
              aria-invalid={codeError}
              aria-describedby={codeError ? "project-unlock-error" : undefined}
              autoFocus
            />
            {codeError && (
              <p id="project-unlock-error" role="alert" className="font-mono-meta text-xs text-destructive">
                Incorrect code
              </p>
            )}
            <button
              type="submit"
              className="w-full border border-foreground px-4 py-3 font-mono-meta text-xs uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background"
            >
              Unlock Projects
            </button>
          </form>
          </div>
        </div>
      )}

      <div className="flex flex-col">
        {projects.filter((project) => !project.hidden).map((project, i) => {
          const isLocked = Boolean(project.locked && !projectsUnlocked);

          return (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ ...transition, delay: i * 0.05 }}
            whileHover={!isLocked ? { x: 10 } : undefined}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => {
              if (isLocked) {
                setSelectedLockedProject(project.name);
                setCodeError(false);
                setIsCodeDialogOpen(true);
              }
            }}
            onKeyDown={(event) => {
              if (isLocked && (event.key === "Enter" || event.key === " ")) {
                event.preventDefault();
                setSelectedLockedProject(project.name);
                setCodeError(false);
                setIsCodeDialogOpen(true);
              }
            }}
            role={isLocked ? "button" : undefined}
            tabIndex={isLocked ? 0 : undefined}
            aria-haspopup={isLocked ? "dialog" : undefined}
            className="grid grid-cols-1 sm:grid-cols-12 border-b border-border py-8 group cursor-pointer"
          >
            <span className="sm:col-span-2 font-mono-meta text-xs text-muted-foreground uppercase self-center mb-2 sm:mb-0 whitespace-pre-line">
              {project.year}
            </span>
            <div className={`sm:col-span-6 ${isLocked ? "select-none" : ""}`}>
              <h2
                className={`font-display text-2xl sm:text-3xl font-bold uppercase tracking-tighter transition-colors ${
                  isLocked
                    ? "text-muted-foreground/40"
                    : "group-hover:text-[#E89EB8]"
                }`}
              >
                {isLocked ? (
                  <span className="flex items-center gap-3">
                    {project.name}
                    <Lock className="w-4 h-4 text-muted-foreground/60 shrink-0" />
                  </span>
                ) : (
                  project.name
                )}
              </h2>
              {project.orgName ? (
                <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground mt-1">
                  {project.orgName}
                </p>
              ) : null}
              <p className="font-serif-body italic text-lg mt-2 text-muted-foreground">
                {project.description}
              </p>
              {project.images && !isLocked && (
                <div className="mt-4 space-y-4">
                  {project.images.map((image) => (
                    <img
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                      className="w-full max-h-[360px] object-contain object-left border border-border bg-white"
                    />
                  ))}
                </div>
              )}
              {project.credits && !project.hideCredits && (
                <p className="font-serif-body text-base text-muted-foreground mt-2">
                  {project.credits.join(" · ")}
                </p>
              )}
              {project.details && (
                <motion.p
                  animate={{
                    opacity: hoveredIndex === i && !isLocked ? 1 : 0,
                    height: hoveredIndex === i && !isLocked ? 'auto' : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="font-serif-body text-base mt-2 text-muted-foreground overflow-hidden"
                >
                  {project.details}
                </motion.p>
              )}
              {project.slides && (
                <motion.div
                  animate={{
                    opacity: hoveredIndex === i && !isLocked ? 1 : 0,
                    height: hoveredIndex === i && !isLocked ? 360 : 0,
                    marginTop: hoveredIndex === i && !isLocked ? 16 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                  aria-hidden={hoveredIndex !== i}
                >
                  <iframe
                    src={`${project.slides}#toolbar=0&navpanes=0&view=FitH`}
                    title={`${project.name} design slides`}
                    className="h-[360px] w-full border border-border bg-background"
                  />
                </motion.div>
              )}
              {(project.publicUrl || project.supplementalUrl) && (
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-2">
                  {project.publicUrl && (
                    <a
                      href={project.publicUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      onKeyDown={(event) => event.stopPropagation()}
                      className="font-serif-body text-base text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
                    >
                      {project.publicUrlLabel ?? "Learn more about the public work ↗"}
                    </a>
                  )}
                  {project.supplementalUrl && (
                    <a
                      href={project.supplementalUrl}
                      download
                      onClick={(event) => event.stopPropagation()}
                      onKeyDown={(event) => event.stopPropagation()}
                      className="font-serif-body text-base text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
                    >
                      Supplemental material ↗
                    </a>
                  )}
                </div>
              )}
              {project.teammates && (
                <motion.p
                  animate={{
                    opacity: hoveredIndex === i && !isLocked ? 1 : 0,
                    height: hoveredIndex === i && !isLocked ? "auto" : 0,
                    marginTop: hoveredIndex === i && !isLocked ? 8 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="font-serif-body text-base text-muted-foreground overflow-hidden"
                  aria-hidden={hoveredIndex !== i}
                >
                  Teammates · {project.teammates.join(", ")}
                </motion.p>
              )}
            </div>
            <div className="sm:col-span-4 self-center mt-4 sm:mt-0">
              <div className="flex flex-col items-start gap-3 sm:items-end">
                <span
                  className={`font-mono-meta text-xs px-2 py-1 ${
                    isLocked
                      ? "border border-muted-foreground/30 text-muted-foreground/40"
                      : "border border-foreground"
                  }`}
                >
                  {project.role}
                </span>
                {project.locked && projectsUnlocked && (
                  <a
                    href={calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    onKeyDown={(event) => event.stopPropagation()}
                    className="font-mono-meta text-xs px-2 py-1 border border-foreground"
                  >
                    FURTHER INQUIRY
                  </a>
                )}
              </div>
            </div>
          </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductCatalog;
