import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

// ─── Asset Imports ─────────────────────────────────────────────────────────────
// Save these images in src/assets/portfolio/ with the filenames below.
// Recommended: download from Unsplash or use your own screenshots/mockups.
//   vehicleaxis.jpg   → car dealership / automotive dashboard
//   nexuscrm.jpg      → data dashboard / CRM interface
//   telagent.jpg      → AI / telecom / futuristic tech
//   medicore.jpg      → medical / healthcare / clinical
//   blogai.jpg        → content / publishing / news feed
//   luminabi.jpg      → data analytics / charts / BI
//   datavault.jpg     → data warehouse / server room / pipeline

import vehicleaxisImg from "../assets/portfolio/vehicleaxis.jpg";
import nexuscrmImg    from "../assets/portfolio/nexuscrm.jpg";
import telagentImg    from "../assets/portfolio/telagent.jpg";
import medicoreImg    from "../assets/portfolio/medicore.jpg";
import blogaiImg      from "../assets/portfolio/blogai.jpg";
import luminabiImg    from "../assets/portfolio/luminabi.jpg";
import datavaultImg   from "../assets/portfolio/datavault.jpg";

// ─── Project Data ──────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    id: 1,
    index: "01",
    title: "VehicleAxis",
    subtitle: "Dealership Management Software",
    category: "Enterprise SaaS",
    year: "2024",
    image: vehicleaxisImg,
    shortDesc: "End-to-end platform for multi-location vehicle dealerships  inventory, sales pipeline, service scheduling, and F&I automation in one unified system.",
    fullDesc: "VehicleAxis is a comprehensive dealership management platform engineered to unify every operational layer of modern vehicle retail. From real-time inventory syndication across 40+ listing portals to automated F&I document generation and digital contracting, the system eliminates the operational fragmentation that costs dealerships hours per deal. Built for multi-rooftop groups, it surfaces live performance dashboards per location, per salesperson, and per vehicle category  enabling management decisions grounded in actual data rather than intuition. The service module integrates OEM warranty lookup, parts ordering, and technician scheduling into a single workflow, reducing RO cycle time by an average of 31%. Role-based access, SSO, and a full audit trail make compliance straightforward.",
    stack: ["React", "Node.js", "PostgreSQL", "Redis", "AWS", "WebSockets"],
    highlights: ["Multi-location inventory sync", "Automated F&I documents", "Real-time sales dashboards", "OEM warranty integration", "Digital contracting"],
    impact: ["31% reduction in RO cycle time", "40+ listing portals synced", "Zero paper F&I documents"],
    color: "emerald",
  },
  {
    id: 2,
    index: "02",
    title: "NexusCRM",
    subtitle: "CRM & Supply Chain Management",
    category: "Full-Stack Web App",
    year: "2024",
    image: nexuscrmImg,
    shortDesc: "Unified CRM and SCM platform that connects customer relationship data with supplier chain visibility  from lead to fulfillment in one operational view.",
    fullDesc: "NexusCRM bridges the gap that most enterprises accept as inevitable: the disconnection between who bought something and how it gets to them. By fusing CRM pipeline data with live supply chain telemetry, NexusCRM gives account managers and operations teams a shared source of truth. Sales reps see real inventory availability before promising delivery dates. Operations teams see demand forecasts derived from the active deal pipeline. The platform includes AI-assisted lead scoring, automated follow-up sequences, supplier performance tracking, PO management, and a predictive reorder engine that cuts stockouts by surfacing risk 3–4 weeks before they materialize. Role-based dashboards surface exactly the right metrics for every function without requiring a separate BI tool.",
    stack: ["Next.js", "Python", "Django", "PostgreSQL", "Celery", "Docker", "GCP"],
    highlights: ["Unified CRM + SCM view", "AI lead scoring", "Predictive reorder engine", "Supplier performance tracking", "Automated deal follow-ups"],
    impact: ["Stockout risk detected 3–4 weeks early", "Sales & ops share one source of truth", "Automated follow-up sequences"],
    color: "teal",
  },
  {
    id: 3,
    index: "03",
    title: "TelAgent",
    subtitle: "AI Telecom Lead Generation Agent",
    category: "AI / Conversational AI",
    year: "2024",
    image: telagentImg,
    shortDesc: "Autonomous AI voice and chat agent purpose-built for telecommunications companies  qualifying leads, scheduling demos, and handling tier-1 support without human escalation.",
    fullDesc: "TelAgent is a multi-modal AI agent system built specifically for telecom operators and ISPs. Leveraging large language models fine-tuned on telecom sales scripts and support documentation, TelAgent engages inbound prospects across voice (via SIP integration), SMS, and web chat simultaneously. The agent qualifies leads using a dynamic scoring rubric  understanding plan requirements, location feasibility, existing provider pain points, and budget range  before booking demos directly into rep calendars through calendar API integration. For tier-1 support, TelAgent resolves billing inquiries, resets accounts, and troubleshoots connectivity issues against live account data with sub-second API calls. Escalation triggers are fully configurable. Every session is transcribed, scored, and surfaced in a manager dashboard for continuous prompt refinement. Client deployments reported a 68% reduction in cost-per-qualified-lead in 90 days.",
    stack: ["Python", "LangChain", "OpenAI", "Twilio", "FastAPI", "Redis", "PostgreSQL"],
    highlights: ["Voice + SMS + chat simultaneously", "Real-time lead scoring", "Calendar API booking", "Live account data queries", "Manager analytics dashboard"],
    impact: ["68% reduction in cost-per-lead", "Tier-1 support without escalation", "Sub-second live account queries"],
    color: "emerald",
  },
  {
    id: 4,
    index: "04",
    title: "MediCore AI",
    subtitle: "AI Medical & Healthcare System",
    category: "AI / Healthcare",
    year: "2023",
    image: medicoreImg,
    shortDesc: "Clinical AI system for patient triage, diagnostic assistance, and care coordination  reducing physician cognitive load while keeping clinicians firmly in control.",
    fullDesc: "MediCore AI is a clinical decision support system designed to reduce the cognitive burden on physicians during high-volume patient intake and ongoing care management. The system ingests patient history, lab results, imaging reports, and vital streams to generate structured triage recommendations, differential diagnosis suggestions ranked by probability, and care pathway recommendations  each with traceable evidence citations from peer-reviewed literature. Critically, MediCore AI is architected as an advisory layer: every output is presented to the clinician with full reasoning chains, uncertainty scores, and one-click dismissal. HIPAA compliance is foundational  all PHI is encrypted at rest and in transit, with role-based access, full audit logs, and on-premise deployment options for health systems with data residency requirements. Integrations with Epic, Cerner, and HL7 FHIR APIs enable deployment without disrupting existing workflows.",
    stack: ["Python", "PyTorch", "FastAPI", "PostgreSQL", "HL7 FHIR", "AWS", "Docker"],
    highlights: ["Differential diagnosis engine", "Evidence-cited recommendations", "Epic & Cerner integration", "HIPAA-compliant architecture", "On-premise deployment option"],
    impact: ["Traceable clinical reasoning", "HL7 FHIR interoperability", "Full PHI audit trail"],
    color: "teal",
  },
  {
    id: 5,
    index: "05",
    title: "BlogAI",
    subtitle: "Sentiment & Interest-Based Content Engine",
    category: "AI / Content Platform",
    year: "2023",
    image: blogaiImg,
    shortDesc: "AI-powered publishing platform that curates, generates, and personalizes news, sentiment analysis, and interest-matched reports for readers and enterprise teams.",
    fullDesc: "BlogAI reimagines content consumption for an era of information overload. The platform continuously ingests news feeds, RSS streams, social signals, and earnings reports across configurable topic clusters. A sentiment analysis pipeline assigns directional scores and confidence intervals to every article  surfacing not just what happened, but how the market, public, or community feels about it. Individual readers receive a personalized feed calibrated by reading history, explicit interest tags, and implicit engagement signals. Enterprise teams get branded digest reports generated on schedule  covering their industry verticals, competitor mentions, and regulatory developments  delivered as polished PDFs or pushed to Slack and Teams. The content generation layer uses retrieval-augmented generation to produce original summaries and analysis grounded in the ingested corpus, reducing hallucination risk significantly. Publishers can deploy BlogAI as a white-labeled audience engagement tool.",
    stack: ["Python", "FastAPI", "React", "OpenAI", "Pinecone", "Kafka", "PostgreSQL", "Redis"],
    highlights: ["Real-time sentiment scoring", "Personalized reader feeds", "Automated enterprise digests", "RAG-based content generation", "Slack/Teams delivery"],
    impact: ["Covers news + sentiment in one view", "Scheduled branded digest reports", "RAG reduces hallucination risk"],
    color: "emerald",
  },
  {
    id: 6,
    index: "06",
    title: "LuminaBI",
    subtitle: "Business Intelligence & Data Analytics",
    category: "Data / Analytics",
    year: "2023",
    image: luminabiImg,
    shortDesc: "Self-serve BI platform that turns business analysts into data engineers  natural language queries, automated insight generation, and enterprise-grade governance.",
    fullDesc: "LuminaBI is a business intelligence platform engineered for the analyst who shouldn't need to wait for a data engineer. Connect any data source  relational databases, data warehouses, REST APIs, flat files, or cloud storage  and the semantic layer automatically maps relationships, infers metrics, and builds a queryable business glossary. Analysts query in plain English: 'Show me revenue by region compared to last quarter, excluding cancelled orders.' The query engine translates intent to SQL, executes against the warehouse, and returns visualizations with auto-generated narrative summaries. For power users, a full SQL editor and Python notebook integration are available. The governance layer enforces row-level security, column masking for PII, and query cost controls by user group. Scheduled reports, anomaly alerts, and a public-facing embed SDK round out the platform. Enterprise clients have replaced three separate tools  a legacy BI tool, a separate alerting service, and ad-hoc analyst requests  with LuminaBI alone.",
    stack: ["Python", "dbt", "Snowflake", "React", "D3.js", "FastAPI", "Airflow", "PostgreSQL"],
    highlights: ["Natural language to SQL", "Auto-generated insight summaries", "Row-level security governance", "Anomaly alerting", "Embeddable SDK"],
    impact: ["Replaced 3 separate tools", "NL queries in plain English", "PII column masking built-in"],
    color: "teal",
  },
  {
    id: 7,
    index: "07",
    title: "DataVault",
    subtitle: "Enterprise Data Warehouse Platform",
    category: "Data Engineering",
    year: "2022",
    image: datavaultImg,
    shortDesc: "Scalable cloud data warehouse solution with automated ETL pipelines, data quality monitoring, and real-time streaming ingestion for enterprise-scale data operations.",
    fullDesc: "DataVault is a cloud-native data warehouse platform designed to handle petabyte-scale data operations without compromising on latency or cost efficiency. The platform provides a unified interface for batch ETL and real-time streaming ingestion, enabling organizations to build a single, reliable data foundation regardless of source system complexity. Automated data quality checks run at every pipeline stage  flagging schema drift, null anomalies, and referential integrity violations before bad data reaches analysts. The orchestration layer is built on Airflow with a visual DAG builder that lets data engineers design complex pipeline dependencies without writing YAML. A built-in data catalog with automated lineage tracking gives every stakeholder visibility into where data comes from, how it transforms, and where it ends up. Cost controls, query optimization recommendations, and usage-based alerting prevent warehouse bill shock at scale.",
    stack: ["Python", "Apache Spark", "Airflow", "Snowflake", "Kafka", "dbt", "Terraform", "AWS"],
    highlights: ["Petabyte-scale ingestion", "Automated data quality checks", "Visual DAG builder", "Automated data lineage", "Cost optimization engine"],
    impact: ["Schema drift detection automated", "Visual pipeline design", "Full data lineage tracking"],
    color: "emerald",
  },
];

// ─── Helpers ───────────────────────────────────────────────────────────────────

const FadeIn = ({ children, delay = 0, y = 30, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

// ─── Modal ─────────────────────────────────────────────────────────────────────

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        {/* Modal Panel */}
        <motion.div
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-emerald-900/60 bg-[#040f1a] shadow-[0_0_80px_rgba(16,185,129,0.12)]"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Image */}
          <div className="relative h-56 md:h-80 overflow-hidden rounded-t-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040f1a] via-[#040f1a]/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/40 to-transparent" />

            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-emerald-500/50 transition-all"
            >
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Index */}
            <div className="absolute bottom-6 left-8 font-mono text-emerald-400/40 text-6xl font-bold leading-none select-none">
              {project.index}
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-10">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase mb-2 block">
                  {project.category} · {project.year}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">{project.title}</h2>
                <p className="text-emerald-300/70 text-lg mt-1">{project.subtitle}</p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed text-base mb-8 border-l-2 border-emerald-500/30 pl-5">
              {project.fullDesc}
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Highlights */}
              <div className="md:col-span-2">
                <h3 className="font-mono text-xs text-slate-500 tracking-widest uppercase mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact */}
              <div>
                <h3 className="font-mono text-xs text-slate-500 tracking-widest uppercase mb-3">Impact</h3>
                <ul className="space-y-2">
                  {project.impact.map((imp, i) => (
                    <li key={i} className="text-emerald-300 text-sm font-medium leading-snug">
                      {imp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Stack */}
            <div>
              <h3 className="font-mono text-xs text-slate-500 tracking-widest uppercase mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 rounded-full border border-emerald-900/60 bg-emerald-950/30 text-emerald-300 text-xs font-mono"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Project Card (Zigzag) ─────────────────────────────────────────────────────

function ProjectCard({ project, index, onOpen }) {
  const isEven = index % 2 === 0;
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <motion.div
      ref={cardRef}
      className="relative grid md:grid-cols-2 gap-0 group"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Image Side */}
      <div
        className={`relative overflow-hidden rounded-2xl h-72 md:h-auto min-h-[360px] ${isEven ? "md:order-1" : "md:order-2"}`}
      >
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          style={{ y: imgY }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/60 via-transparent to-[#030c18]/70" />
        {/* Index watermark */}
        <div className="absolute bottom-4 right-6 font-mono text-white/10 text-8xl font-black leading-none select-none">
          {project.index}
        </div>
        {/* Category pill */}
        <div className="absolute top-5 left-5">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 border border-emerald-800/50 backdrop-blur-sm font-mono text-[10px] text-emerald-400 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {project.category}
          </span>
        </div>
      </div>

      {/* Content Side */}
      <div
        className={`flex flex-col justify-center px-8 py-10 md:px-14 ${isEven ? "md:order-2" : "md:order-1"}`}
      >
        <span className="font-mono text-xs text-emerald-500/60 tracking-[0.25em] mb-4 block">
          {project.year}
        </span>

        <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-2 tracking-tight">
          {project.title}
        </h3>
        <p className="text-emerald-300/60 text-lg mb-5 font-light">{project.subtitle}</p>

        <p className="text-slate-400 leading-relaxed text-sm mb-8 max-w-lg">
          {project.shortDesc}
        </p>

        {/* Stack preview */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.stack.slice(0, 4).map((s) => (
            <span
              key={s}
              className="px-2.5 py-1 rounded border border-emerald-900/50 bg-emerald-950/20 text-emerald-400/80 text-[11px] font-mono"
            >
              {s}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="px-2.5 py-1 text-slate-600 text-[11px] font-mono">
              +{project.stack.length - 4} more
            </span>
          )}
        </div>

        <button
          onClick={() => onOpen(project)}
          className="group/btn self-start flex items-center gap-3 text-sm font-medium text-emerald-400 hover:text-white transition-colors duration-300"
        >
          <span className="relative flex items-center justify-center w-10 h-10 rounded-full border border-emerald-700/50 group-hover/btn:border-emerald-400 group-hover/btn:bg-emerald-400/10 transition-all duration-300">
            <svg
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="group-hover/btn:translate-x-0.5 transition-transform"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
          View Full Case
        </button>
      </div>

      {/* Divider line */}
      <div className="md:col-span-2 mt-16 mb-0 h-px bg-gradient-to-r from-transparent via-emerald-900/40 to-transparent" />
    </motion.div>
  );
}

// ─── Noise Texture ─────────────────────────────────────────────────────────────

const NoiseOverlay = () => (
  <div
    className="pointer-events-none fixed inset-0 z-[1] opacity-[0.03]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
    }}
  />
);

// ─── Main Page ─────────────────────────────────────────────────────────────────

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.7], [1, 0]);

  // Animated counter
  const [counted, setCounted] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setCounted(true), 1200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="bg-[#030c18] text-slate-200 overflow-x-hidden selection:bg-emerald-500/25 font-sans">
      <NoiseOverlay />

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden">

        {/* Grid pattern background */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(16,185,129,1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Radial glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-emerald-500/[0.06] blur-[120px] pointer-events-none" />
        <div className="absolute top-2/3 right-1/4 w-[400px] h-[400px] rounded-full bg-teal-500/[0.05] blur-[100px] pointer-events-none" />

        {/* Animated vertical lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[10, 30, 55, 75, 90].map((left, i) => (
            <motion.div
              key={i}
              className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent"
              style={{ left: `${left}%` }}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 1.5, delay: i * 0.15, ease: "easeOut" }}
            />
          ))}
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 container mx-auto px-6 lg:px-16 pt-24 pb-20"
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 mb-10"
          >
            <span className="w-8 h-px bg-emerald-500" />
            <span className="font-mono text-xs text-emerald-400 tracking-[0.3em] uppercase">Selected Work</span>
            <span className="w-8 h-px bg-emerald-500" />
          </motion.div>

          {/* Main headline */}
          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.45, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(3.5rem,10vw,9rem)] font-black leading-[0.9] tracking-[-0.03em] text-white"
            >
              WORK &amp;
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(3.5rem,10vw,9rem)] font-black leading-[0.9] tracking-[-0.03em] text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-400"
            >
              PROJECTS
            </motion.h1>
          </div>

          {/* Descriptor row */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16"
          >
            <p className="text-slate-400 text-lg max-w-md leading-relaxed">
              A curated collection of full-stack systems, AI-native applications, and enterprise platforms  designed with precision, built to scale.
            </p>
            <div className="flex gap-12 md:ml-auto">
              {[
              
              ].map(({ num, label }) => (
                <div key={label}>
                  <div className="text-3xl font-bold text-white tabular-nums">{num}</div>
                  <div className="text-xs font-mono text-slate-500 tracking-widest uppercase mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-5 h-8 rounded-full border border-emerald-700/50 flex items-start justify-center pt-1.5"
            animate={{ borderColor: ["rgba(6,95,70,0.5)", "rgba(16,185,129,0.4)", "rgba(6,95,70,0.5)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 rounded-full bg-emerald-400"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <span className="font-mono text-[10px] text-slate-600 tracking-[0.2em]">SCROLL</span>
        </motion.div>
      </section>

      {/* ── INTRO BANNER ─────────────────────────────────────────────────────── */}
      <section className="relative border-y border-emerald-900/30 bg-emerald-950/10 py-8 overflow-hidden">
        <div className="flex items-center gap-16 whitespace-nowrap">
          <motion.div
            className="flex items-center gap-16 text-emerald-300/80 font-mono text-xs tracking-widest uppercase"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[
              "Enterprise SaaS", "·", "AI Agent Systems", "·", "Data Engineering", "·",
              "Healthcare Tech", "·", "Conversational AI", "·", "BI Platforms", "·",
              "Supply Chain", "·", "Full-Stack Development", "·",
              "Enterprise SaaS", "·", "AI Agent Systems", "·", "Data Engineering", "·",
              "Healthcare Tech", "·", "Conversational AI", "·", "BI Platforms", "·",
              "Supply Chain", "·", "Full-Stack Development", "·",
            ].map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────────────────────── */}
      <section className="relative py-24 md:py-36 container mx-auto px-6 lg:px-16 space-y-24">

        {/* Section header */}
        <FadeIn className="flex items-end justify-between mb-4">
          <div>
            <span className="font-mono text-xs text-emerald-400/60 tracking-widest uppercase block mb-3">
               Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Selected Projects
            </h2>
          </div>
          <span className="font-mono text-slate-700 text-sm hidden md:block">
            {PROJECTS.length} projects
          </span>
        </FadeIn>

        {/* Zigzag cards */}
        <div className="space-y-24">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onOpen={setActiveProject}
            />
          ))}
        </div>
      </section>

      {/* ── FOOTER CTA ───────────────────────────────────────────────────────── */}
      <section className="relative py-32 overflow-hidden border-t border-emerald-900/30">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-950/20 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

        <FadeIn className="text-center container mx-auto px-6">
          <span className="font-mono text-xs text-emerald-400/60 tracking-widest uppercase block mb-6">
            Let's build something
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight mb-6">
            Have a project
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">
              in mind?
            </span>
          </h2>
          <p className="text-slate-400 max-w-md mx-auto mb-10 leading-relaxed">
            From AI-native systems to enterprise platforms  let's turn your idea into something that ships and scales.
          </p>
          <motion.a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-emerald-600/50 bg-emerald-500/10 text-emerald-300 font-medium hover:bg-emerald-500/20 hover:border-emerald-400 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in touch
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>
        </FadeIn>
      </section>

      {/* ── MODAL ────────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {activeProject && (
          <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
        )}
      </AnimatePresence>
    </main>
  );
}