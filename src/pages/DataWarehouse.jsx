// services/DataWarehouse.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import heroImage from "../assets/datawarehouse-hero.png";
import featureImage from "../assets/datawarehouse-architecture.jpg";

// ─── Data ─────────────────────────────────────────────────────────────────────

const capabilities = [
  {
    number: "01",
    title: "Modern Data Warehouse Architecture",
    body: "Design and implementation of cloud-native data warehouses that scale with your data. We help you choose the right architecture—whether it's Kimball, Inmon, or Data Vault—and build it to last.",
    tags: ["Snowflake", "BigQuery", "Redshift", "Databricks", "Synapse"],
  },
  {
    number: "02",
    title: "ETL/ELT Pipeline Engineering",
    body: "Reliable, monitored data pipelines that move and transform data without loss or duplication. We build idempotent, self-healing pipelines your team can trust and operate.",
    tags: ["dbt", "Airflow", "Fivetran", "Stitch", "Matillion"],
  },
  {
    number: "03",
    title: "Data Modeling & Governance",
    body: "Structured, documented data models that business users can understand. We implement proper naming conventions, version control, and governance so you always know what data means.",
    tags: ["Kimball", "Data Vault", "dbt", "OpenMetadata", "Collibra"],
  },
  {
    number: "04",
    title: "Real-time Data Streaming",
    body: "When batch isn't fast enough, we build streaming architectures that process events in real-time. Perfect for fraud detection, IoT, and instant customer experiences.",
    tags: ["Kafka", "Kinesis", "Flink", "Spark Streaming", "Debezium"],
  },
];

const process = [
  {
    phase: "Data Discovery",
    duration: "Week 1–2",
    desc: "We map all your data sources, assess volume and variety, and document business requirements. You get a complete inventory of your data landscape and clear recommendations.",
  },
  {
    phase: "Architecture Design",
    duration: "Week 2–4",
    desc: "Detailed architecture decisions, tool selection, and data modeling. We document everything in ADRs so your team understands the 'why' behind every choice.",
  },
  {
    phase: "Warehouse Build",
    duration: "Week 4–16+",
    desc: "Iterative construction of schemas, pipelines, and transformations. We deliver working increments—you see data flowing and transformations working long before final delivery.",
  },
  {
    phase: "Optimization & Handoff",
    duration: "Final 2–3 weeks",
    desc: "Performance tuning, cost optimization, and comprehensive documentation. We train your team and hand over a warehouse they can operate with confidence.",
  },
];

const techStack = [
  "Snowflake", "BigQuery", "Redshift", "Databricks", "Synapse",
  "dbt", "Airflow", "Fivetran", "Stitch", "Matillion",
  "Kafka", "Kinesis", "Flink", "Spark", "Debezium",
  "Terraform", "AWS", "GCP", "Azure", "Looker", "Power BI",
];

const stats = [
  { value: "100+", label: "Billion rows processed daily across projects" },
  { value: "99.99%", label: "Pipeline reliability SLA" },
  { value: "60%", label: "Avg. reduction in query latency" },
  { value: "15+", label: "Enterprise data warehouses delivered" },
];

const differentiators = [
  {
    title: "Documentation is code",
    body: "Every data model, transformation, and pipeline is documented in the repo—not a wiki. Data lineage, definitions, and business logic live alongside the code that implements them.",
  },
  {
    title: "Cost-aware by design",
    body: "We don't just build warehouses; we build cost-efficient ones. Query optimization, storage tiering, and resource monitoring ensure your cloud bills don't surprise you.",
  },
  {
    title: "SLA-guaranteed pipelines",
    body: "Failed pipelines are inevitable—data loss isn't. We build idempotent pipelines with dead-letter queues, alerting, and automatic retries. When something breaks, you know immediately.",
  },
];

// ─── Shared primitives ────────────────────────────────────────────────────────

const SectionLabel = ({ children }) => (
  <p className="font-mono text-xs tracking-[0.25em] text-emerald-400 uppercase mb-4">{children}</p>
);

const RevealText = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DataWarehouse() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <main className="bg-[#030c18] text-slate-200 overflow-x-hidden selection:bg-emerald-500/30">

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col justify-end overflow-hidden">

        {/* Parallax hero image */}
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <img
            src={heroImage}
            alt="Data warehouse infrastructure"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030c18] via-[#030c18]/65 to-[#030c18]/25" />
          <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-emerald-950/30 to-transparent" />
        </motion.div>

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="absolute top-8 left-6 lg:left-12 z-20 flex items-center gap-2 font-mono text-xs text-slate-500"
        >
          <a href="/services" className="hover:text-emerald-400 transition-colors">Services</a>
          <span>/</span>
          <span className="text-slate-300">Data Warehousing</span>
        </motion.div>

        {/* Hero content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 container mx-auto px-5 lg:px-12 pb-16 lg:pb-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="font-mono text-xs text-emerald-400 tracking-[0.2em]">04 — DATA INFRASTRUCTURE</span>
          </motion.div>

          <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-[0.92] tracking-tight max-w-5xl"
        >
        <span className="text-white">Data</span>
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-300 to-green-400">
            Warehousing
        </span>
        <br />
        <span className="text-white/90">& Engineering</span>
        </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-6 text-slate-400 text-lg max-w-xl leading-relaxed"
          >
            The foundation of data-driven decision-making. We build scalable, reliable data warehouses that turn fragmented data into a single source of truth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-emerald-500 text-white font-bold rounded-xl text-sm overflow-hidden transition-all hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25"
            >
              <span className="relative z-10">Build Your Data Foundation</span>
              <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
              <div className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a
              href="#capabilities"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-slate-700/70 rounded-xl text-sm font-medium hover:border-emerald-500/40 hover:bg-white/[0.03] transition-all"
            >
              See Our Approach
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 right-8 lg:right-12 z-10 flex flex-col items-center gap-2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-emerald-500/60 to-transparent" />
          <span className="font-mono text-[10px] text-slate-600 tracking-widest rotate-90 origin-center mt-2">SCROLL</span>
        </motion.div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="border-y border-slate-800/60 bg-[#040d1a]">
        <div className="container mx-auto px-5 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-slate-800/60">
            {stats.map((stat, i) => (
              <RevealText key={i} delay={i * 0.08} className="px-6 lg:px-8 py-8">
                <div className="text-3xl lg:text-4xl font-bold text-white tabular-nums mb-1">{stat.value}</div>
                <div className="text-xs text-slate-500 leading-snug">{stat.label}</div>
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-5 lg:px-12">
          <RevealText className="max-w-4xl">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-slate-300 leading-[1.4]">
              "A data warehouse isn't just storage—it's the{" "}
              <span className="text-white font-semibold">central nervous system</span>{" "}
              of your data operations. When it's built right, every dashboard, report, and model draws from the same{" "}
              <span className="text-emerald-400">single source of truth</span>."
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-8 h-px bg-emerald-500/50" />
              <span className="font-mono text-xs text-slate-600">OrbianAI Data Engineering Philosophy</span>
            </div>
          </RevealText>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section id="capabilities" className="py-20 lg:py-24">
        <div className="container mx-auto px-5 lg:px-12">
          <RevealText className="mb-16">
            <SectionLabel>What We Build</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-2xl leading-tight">
              Four pillars of our data warehousing practice
            </h2>
          </RevealText>

          <div className="space-y-0 divide-y divide-slate-800/50">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className="group grid lg:grid-cols-12 gap-4 lg:gap-8 py-10 hover:bg-white/[0.015] -mx-5 lg:-mx-12 px-5 lg:px-12 transition-colors cursor-default"
              >
                <div className="lg:col-span-1">
                  <span className="font-mono text-xs text-slate-600 group-hover:text-emerald-500 transition-colors">
                    {cap.number}
                  </span>
                </div>
                <div className="lg:col-span-3">
                  <h3 className="text-xl font-semibold text-white group-hover:text-emerald-300 transition-colors leading-tight">
                    {cap.title}
                  </h3>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-slate-400 text-sm leading-relaxed">{cap.body}</p>
                </div>
                <div className="lg:col-span-3 flex flex-wrap gap-2 lg:justify-end items-start">
                  {cap.tags.map((tag, ti) => (
                    <span
                      key={ti}
                      className="text-xs font-mono text-slate-500 border border-slate-800 px-2.5 py-1 rounded-full group-hover:border-slate-700 group-hover:text-slate-400 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURE IMAGE ── */}
      <section className="py-10 lg:py-16">
        <div className="container mx-auto px-5 lg:px-12">
          <RevealText>
            <div className="relative rounded-2xl overflow-hidden" style={{ height: "clamp(280px, 50vw, 560px)" }}>
              <img
                src={featureImage}
                alt="Data warehouse architecture diagram"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />
              <div className="absolute top-5 right-5 bg-[#030c18]/80 backdrop-blur-sm border border-slate-700/50 rounded-lg px-3 py-2">
                <span className="font-mono text-xs text-slate-400">Modern Data Stack — Reference Architecture</span>
              </div>
            </div>
          </RevealText>
        </div>
      </section>

      {/* ── TECH STACK MARQUEE ── */}
      <section className="py-14 overflow-hidden border-y border-slate-800/40 bg-[#040d1a]">
        <RevealText className="container mx-auto px-5 lg:px-12 mb-8">
          <SectionLabel>Technologies We Use</SectionLabel>
        </RevealText>
        <div className="relative">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="flex gap-6 whitespace-nowrap"
          >
            {[...techStack, ...techStack].map((tech, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 text-sm font-mono text-slate-500 px-4 py-2 border border-slate-800/80 rounded-full bg-[#060f1e] flex-shrink-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60" />
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-5 lg:px-12">
          <RevealText className="mb-16">
            <SectionLabel>How We Work</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-xl leading-tight">
              Building your data foundation, step by step
            </h2>
          </RevealText>

          <div className="relative">
            <div className="hidden lg:block absolute left-[140px] top-0 bottom-0 w-px bg-slate-800/60" />
            <div className="space-y-0">
              {process.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.65, delay: i * 0.1 }}
                  className="group relative flex flex-col lg:flex-row gap-4 lg:gap-12 py-10 border-b border-slate-800/40 last:border-0"
                >
                  <div className="lg:w-[140px] flex-shrink-0 flex lg:flex-col lg:items-end gap-3 lg:gap-1">
                    <span className="font-mono text-xs text-slate-600">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-mono text-xs text-emerald-500/70 lg:text-right">{step.duration}</span>
                  </div>
                  <div className="hidden lg:flex absolute left-[134px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-slate-700 bg-[#030c18] group-hover:border-emerald-500 group-hover:bg-emerald-500/20 transition-all" />
                  <div className="flex-1 lg:pl-12">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                      {step.phase}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DIFFERENTIATORS ── */}
      <section className="py-20 bg-[#040d1a] border-y border-slate-800/40">
        <div className="container mx-auto px-5 lg:px-12">
          <RevealText className="mb-14">
            <SectionLabel>Our Standards</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-xl leading-tight">
              What makes our data warehouses different
            </h2>
          </RevealText>

          <div className="grid md:grid-cols-3 gap-px bg-slate-800/30 rounded-2xl overflow-hidden">
            {differentiators.map((item, i) => (
              <RevealText key={i} delay={i * 0.1} className="bg-[#060f1e] p-8 lg:p-10">
                <div className="w-8 h-px bg-emerald-500/50 mb-6" />
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-5 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <RevealText>
              <SectionLabel>Let's Build Your Data Foundation</SectionLabel>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.0] mb-6">
                Fragmented data costing you time
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-400 mt-1">
                  and confidence?
                </span>
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-10 max-w-lg mx-auto">
                Tell us about your data landscape and we'll show you what a unified, reliable data warehouse could do for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 text-white font-bold rounded-xl text-sm overflow-hidden hover:scale-105 transition-all hover:shadow-2xl hover:shadow-emerald-500/25"
                >
                  <span className="relative z-10">Start a Conversation</span>
                  <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
                  <div className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 border border-slate-700/70 rounded-xl text-sm font-medium hover:border-emerald-500/40 hover:bg-white/[0.03] transition-all"
                >
                  ← Back to Services
                </a>
              </div>
            </RevealText>
          </div>
        </div>
      </section>

    </main>
  );
}