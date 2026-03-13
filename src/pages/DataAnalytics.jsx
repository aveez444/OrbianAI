// services/DataAnalytics.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import heroImage from "../assets/dataanalytics-hero.jpg";
import featureImage from "../assets/dataanalytics-feature.jpg";

// ─── Data ─────────────────────────────────────────────────────────────────────

const capabilities = [
  {
    number: "01",
    title: "BI Dashboards & Reporting",
    body: "Transform raw data into intuitive, interactive dashboards that put insights at your team's fingertips. Custom visualizations, drill-down capabilities, and automated reporting that keeps everyone aligned.",
    tags: ["Tableau", "Power BI", "Looker", "Metabase", "Superset"],
  },
  {
    number: "02",
    title: "Predictive Modeling & ML",
    body: "Forecast trends, identify opportunities, and mitigate risks before they materialize. We build and deploy machine learning models that learn from your data and improve over time.",
    tags: ["Python", "scikit-learn", "TensorFlow", "PyTorch", "XGBoost"],
  },
  {
    number: "03",
    title: "Real-time Analytics",
    body: "Process and visualize data as it flows. Stream processing, anomaly detection, and live dashboards that react instantly to changing conditions  perfect for operations and monitoring.",
    tags: ["Kafka", "Flink", "Spark Streaming", "Redis", "ClickHouse"],
  },
  {
    number: "04",
    title: "Data Engineering & Pipelines",
    body: "Clean, reliable data is the foundation of everything. We design and maintain ETL/ELT pipelines that ingest, transform, and deliver data with consistency and minimal latency.",
    tags: ["Airflow", "dbt", "Spark", "Snowflake", "BigQuery"],
  },
];

const process = [
  {
    phase: "Data Audit",
    duration: "Week 1–2",
    desc: "We inventory your data sources, assess quality, and identify gaps. You get a clear picture of what's possible with your current data and what's needed to answer your questions.",
  },
  {
    phase: "Solution Design",
    duration: "Week 2–3",
    desc: "Architecture decisions, tool selection, and success metrics. We define exactly how we'll transform your data into insights  and how we'll measure impact.",
  },
  {
    phase: "Development",
    duration: "Week 3–12",
    desc: "Iterative delivery of dashboards, models, and pipelines. You see working prototypes early and provide feedback that shapes the final product.",
  },
  {
    phase: "Deployment & Training",
    duration: "Week 12–14",
    desc: "Production deployment, documentation, and team training. We ensure your people can use the tools and trust the data without depending on us.",
  },
];

const techStack = [
  "Python", "SQL", "R", "Spark", "Kafka",
  "Tableau", "Power BI", "Looker", "Metabase",
  "Snowflake", "BigQuery", "Redshift", "dbt", "Airflow",
  "TensorFlow", "PyTorch", "scikit-learn", "Pandas",
  "Flink", "ClickHouse", "Redis", "MongoDB",
];

const stats = [
  { value: "3.5×", label: "Faster decision-making with custom dashboards" },
  { value: "85%", label: "Reduction in manual reporting effort" },
  { value: "94%", label: "Forecast accuracy on predictive models" },
  { value: "50+", label: "Data pipelines engineered for scale" },
];

const differentiators = [
  {
    title: "Explainable AI",
    body: "Black-box models aren't acceptable for critical decisions. We build models you can interpret and explain  because trust matters as much as accuracy.",
  },
  {
    title: "Data Quality First",
    body: "Garbage in, garbage out. We establish data quality gates, validation rules, and monitoring before a single insight is delivered.",
  },
  {
    title: "Actionable, Not Just Visual",
    body: "We don't just make pretty charts. Every dashboard answers a question, every model drives a decision. Insights without action aren't insights.",
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

export default function DataAnalytics() {
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
            alt="Data analytics visualization"
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
          <span className="text-slate-300">Data Analytics</span>
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

          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-[0.92] tracking-tight max-w-5xl"
          >
            <span className="text-white">Data</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-blue-300 to-indigo-400">
              Analytics
            </span>
            <br />
            <span className="text-white/90">& Intelligence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-6 text-slate-400 text-lg max-w-xl leading-relaxed"
          >
            Uncover hidden patterns and drive decisions with advanced analytics. Turn complex data into clear, actionable insights.
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
              <span className="relative z-10">Explore Your Data</span>
              <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
              <div className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a
              href="#capabilities"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-slate-700/70 rounded-xl text-sm font-medium hover:border-emerald-500/40 hover:bg-white/[0.03] transition-all"
            >
              See Our Capabilities
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
              "Data isn't valuable because you have it.{" "}
              <span className="text-white font-semibold">It's valuable because you understand it</span>{" "}
              and act on it. We build the bridge between raw numbers and{" "}
              <span className="text-emerald-400">better decisions</span>."
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-8 h-px bg-emerald-500/50" />
              <span className="font-mono text-xs text-slate-600">OrbianAI Data Philosophy</span>
            </div>
          </RevealText>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section id="capabilities" className="py-20 lg:py-24">
        <div className="container mx-auto px-5 lg:px-12">
          <RevealText className="mb-16">
            <SectionLabel>What We Deliver</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-2xl leading-tight">
              Four pillars of our data analytics practice
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
                  <p className="text-white text-base lg:text-lg leading-relaxed">
                    {cap.body}
                  </p>
                </div>
                <div className="lg:col-span-3 flex flex-wrap gap-2 lg:justify-end items-start">
                  {cap.tags.map((tag, ti) => (
                    <span
                      key={ti}
                      className="text-sm font-mono text-white border border-slate-700 px-3 py-1.5 rounded-full transition-all duration-300 group-hover:border-emerald-500 group-hover:text-emerald-300"
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
            <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider text-center">Real-time Analytics Dashboard Case Example</h3>
            <div className="relative rounded-2xl overflow-hidden" style={{ height: "clamp(280px, 50vw, 560px)" }}>
              <img
                src={featureImage}
                alt="Data analytics dashboard visualization"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />
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
                className="inline-flex items-center gap-2 text-sm font-mono text-emerald-500 px-4 py-2 border border-slate-800/80 rounded-full bg-[#060f1e] flex-shrink-0"
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
              From raw data to trusted insights
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
                    <span className="font-mono text-[17px] font-bold text-emerald-500/90 lg:text-right">{step.duration}</span>
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
              What sets our data practice apart
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
              <SectionLabel>Let's Explore Your Data</SectionLabel>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.0] mb-6">
                What questions could you answer
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 mt-1">
                  with the right data?
                </span>
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-10 max-w-lg mx-auto">
                Tell us about your data challenges and we'll show you what's possible  with no pressure, just honest conversation about what works.
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