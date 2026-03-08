// Services.jsx  Redesigned
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

import heroAbstract from "../assets/services-hero-abstract.jpg";
import webDevImage from "../assets/services-web-dev.jpg";
import softwareImage from "../assets/services-software.jpg";
import cloudImage from "../assets/services-cloud.jpg";
import dataAnalyticsImage from "../assets/services-data-analytics.jpg";
import dataWarehouseImage from "../assets/services-data-warehouse.jpg";
import aiAutomationImage from "../assets/services-ai-automation.jpg";
import consultingImage from "../assets/services-consulting.jpg";
import patternGrid from "../assets/services-pattern.png";

const allServices = [
  {
    id: "web-dev",
    category: "Digital Presence",
    index: "01",
    title: "Website & Web App Development",
    short: "Web & App Dev",
    description: "Custom web solutions from landing pages to complex enterprise portals. We build responsive, performant applications that load fast and convert visitors.",
    features: ["React/Next.js", "Headless CMS", "E-commerce", "Portal Dev"],
    image: webDevImage,
    accent: "#34d399",
  },
  {
    id: "software-dev",
    category: "Digital Presence",
    index: "02",
    title: "Software Development",
    short: "Software Dev",
    description: "End-to-end custom software engineering for mission-critical systems. From microservices to monolithic applications that scale.",
    features: ["Microservices", "API Development", "Legacy Modernization", "DevOps"],
    image: softwareImage,
    accent: "#818cf8",
  },
  {
    id: "data-analytics",
    category: "Data & Intelligence",
    index: "03",
    title: "Data Analytics",
    short: "Analytics",
    description: "Uncover hidden patterns and drive decisions with advanced analytics. Turn complex data into clear, actionable insights.",
    features: ["BI Dashboards", "Predictive Modeling", "Real-time Analytics", "Custom Reporting"],
    image: dataAnalyticsImage,
    accent: "#2dd4bf",
  },
  {
    id: "data-warehouse",
    category: "Data & Intelligence",
    index: "04",
    title: "Data Warehouse",
    short: "Data Warehouse",
    description: "Centralized, scalable data architecture for the modern enterprise. Single source of truth with lightning-fast query performance.",
    features: ["Snowflake", "BigQuery", "Redshift", "Data Lakes"],
    image: dataWarehouseImage,
    accent: "#34d399",
  },
  {
    id: "ai-service",
    category: "Data & Intelligence",
    index: "05",
    title: "AI Automation",
    short: "AI Automation",
    description: "Intelligent automation that learns, adapts, and scales. AI agents and pipelines that handle complex workflows.",
    features: ["LLM Integration", "RPA", "Workflow Automation", "ML Ops"],
    image: aiAutomationImage,
    accent: "#c084fc",
  },
  {
    id: "cloud",
    category: "Infrastructure & Consulting",
    index: "06",
    title: "Cloud Services",
    short: "Cloud",
    description: "Multi-cloud architecture, migration, and optimization. Secure, cost-effective infrastructure across AWS, Azure, or GCP.",
    features: ["Cloud Migration", "Kubernetes", "Serverless", "Cost Optimization"],
    image: cloudImage,
    accent: "#38bdf8",
  },
  {
    id: "consulting",
    category: "Infrastructure & Consulting",
    index: "07",
    title: "Enterprise Consulting",
    short: "Consulting",
    description: "Strategic guidance for Salesforce, Oracle, SAP & more. Bridge the gap between software capability and business need.",
    features: ["Salesforce", "Oracle", "SAP", "Digital Transformation"],
    image: consultingImage,
    accent: "#fb923c",
  },
];

// ─── Marquee strip ───────────────────────────────────────────────────────────
const MarqueeStrip = () => {
  const items = allServices.map((s) => s.short);
  return (
    <div className="overflow-hidden border-y border-slate-800/60 py-3 bg-[#040d1a]">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-12 whitespace-nowrap"
      >
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className="text-xs font-mono text-slate-600 tracking-widest uppercase">
            {item} <span className="text-emerald-600 mx-2">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

// ─── Digital Presence  Tall split layout ────────────────────────────────────
const DigitalPresenceSection = ({ services, filter }) => {
  if (filter !== "all" && filter !== "Digital Presence") return null;
  const ds = services.filter((s) => s.category === "Digital Presence");

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-5 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-14 flex-wrap gap-4"
        >
          <div>
            <p className="text-emerald-400 font-mono text-xs tracking-[0.25em] mb-3">
              01  DIGITAL PRESENCE
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-[1.05]">
              Build your<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                digital foundation.
              </span>
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
            From first impression to enterprise portal  we craft experiences that perform.
          </p>
        </motion.div>

        {/* Two tall split panels */}
        <div className="grid md:grid-cols-2 gap-5">
          {ds.map((service, i) => (
            <motion.a
              key={service.id}
              href={`/services/${service.id}`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group block relative rounded-2xl overflow-hidden cursor-pointer"
              style={{ minHeight: "520px" }}
            >
              {/* Full-bleed image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark overlay gradient  heavier at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030c18] via-[#030c18]/60 to-transparent" />
              {/* Subtle accent tint on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: `radial-gradient(ellipse at 50% 100%, ${service.accent}55, transparent 70%)` }}
              />

              {/* Content pinned to bottom */}
              <div className="absolute inset-x-0 bottom-0 p-7">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs text-slate-500">{service.index}</span>
                  <span
                    className="h-px flex-1 max-w-[40px]"
                    style={{ background: service.accent + "80" }}
                  />
                  <span
                    className="text-xs font-mono px-2.5 py-0.5 rounded-full border"
                    style={{ color: service.accent, borderColor: service.accent + "50" }}
                  >
                    {service.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-sm">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.features.map((f, fi) => (
                    <span key={fi} className="text-xs text-slate-500 border border-slate-700/60 px-2.5 py-1 rounded-full bg-slate-900/50">
                      {f}
                    </span>
                  ))}
                </div>
                <span
                  className="inline-flex items-center gap-2 text-sm font-mono transition-colors"
                  style={{ color: service.accent }}
                >
                  Explore Service
                  <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Data & Intelligence  Staggered editorial layout ────────────────────────
const DataIntelligenceSection = ({ services, filter }) => {
  if (filter !== "all" && filter !== "Data & Intelligence") return null;
  const ds = services.filter((s) => s.category === "Data & Intelligence");

  return (
    <section className="py-24 relative">
      {/* Subtle dot pattern bg */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url(${patternGrid})`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container mx-auto px-5 lg:px-12 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-emerald-400 font-mono text-xs tracking-[0.25em] mb-3">
            02  DATA & INTELLIGENCE
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-[1.05]">
            Transform data into<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              competitive advantage.
            </span>
          </h2>
        </motion.div>

        {/* Editorial staggered rows */}
        <div className="space-y-5">
          {ds.map((service, i) => {
            const flip = i % 2 === 1;
            return (
              <motion.a
                key={service.id}
                href={`/services/${service.id}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group flex flex-col ${flip ? "md:flex-row-reverse" : "md:flex-row"} rounded-2xl overflow-hidden border border-slate-800/60 bg-[#060f1e] hover:border-slate-700 transition-colors cursor-pointer`}
              >
                {/* Image  fixed aspect, fills side */}
                <div className="relative md:w-[45%] flex-shrink-0 overflow-hidden" style={{ minHeight: "280px" }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Index number watermark */}
                  <span className="absolute top-4 left-4 font-mono text-6xl font-bold leading-none text-white/[0.07] select-none">
                    {service.index}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-center p-7 md:p-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: service.accent }}
                    />
                    <span className="text-xs font-mono text-slate-500 tracking-widest">
                      {service.category.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-md">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-7">
                    {service.features.map((f, fi) => (
                      <span key={fi} className="text-xs text-slate-500 border border-slate-700/50 px-2.5 py-1 rounded-full">
                        {f}
                      </span>
                    ))}
                  </div>
                  <span
                    className="inline-flex items-center gap-2 text-sm font-mono w-fit"
                    style={{ color: service.accent }}
                  >
                    Explore Service
                    <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ─── Infrastructure  Overlapping feature + side stack ───────────────────────
const InfrastructureSection = ({ services, filter }) => {
  if (filter !== "all" && filter !== "Infrastructure & Consulting") return null;
  const ds = services.filter((s) => s.category === "Infrastructure & Consulting");

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-5 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-emerald-400 font-mono text-xs tracking-[0.25em] mb-3">
            03  INFRASTRUCTURE & CONSULTING
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-[1.05]">
            Scale with confidence,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              guided by experts.
            </span>
          </h2>
        </motion.div>

        {/* Two wide equal panels with full-image top + content bottom */}
        <div className="grid md:grid-cols-2 gap-5">
          {ds.map((service, i) => (
            <motion.a
              key={service.id}
              href={`/services/${service.id}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group block rounded-2xl overflow-hidden border border-slate-800/60 bg-[#060f1e] hover:border-slate-700 transition-colors cursor-pointer"
            >
              {/* Image top half  tall enough to show content */}
              <div className="relative overflow-hidden" style={{ height: "260px" }}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060f1e] via-[#060f1e]/20 to-transparent" />
                {/* Accent glow */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ background: `linear-gradient(90deg, transparent, ${service.accent}80, transparent)` }}
                />
              </div>

              {/* Text bottom */}
              <div className="p-7">
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-mono text-xs text-slate-600">{service.index}</span>
                  <span
                    className="h-px w-8"
                    style={{ background: service.accent + "60" }}
                  />
                  <span
                    className="text-xs font-mono"
                    style={{ color: service.accent + "cc" }}
                  >
                    {service.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <div className="space-y-2 mb-6">
                  {service.features.map((f, fi) => (
                    <div key={fi} className="flex items-center gap-2.5">
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: service.accent }}
                      />
                      <span className="text-sm text-slate-400">{f}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between border-t border-slate-800/60 pt-5">
                  <span
                    className="text-sm font-mono"
                    style={{ color: service.accent }}
                  >
                    Explore Service
                  </span>
                  <span
                    className="group-hover:translate-x-1 transition-transform inline-block text-sm"
                    style={{ color: service.accent }}
                  >
                    →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};



// ─── Main Component ────────────────────────────────────────────────────────────
export default function Services() {
  const heroRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const filters = [
    { id: "all", label: "All Services" },
    { id: "Digital Presence", label: "Digital Presence" },
    { id: "Data & Intelligence", label: "Data & Intelligence" },
    { id: "Infrastructure & Consulting", label: "Infrastructure" },
  ];

  return (
    <main className="bg-[#030c18] text-slate-200 selection:bg-emerald-500/30 overflow-x-hidden">
      {/* ── Hero ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Ambient blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-80 h-80 bg-emerald-500/[0.07] rounded-full blur-[130px] animate-pulse" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-cyan-500/[0.06] rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/[0.04] rounded-full blur-[180px]" />
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `linear-gradient(rgba(52,211,153,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.3) 1px, transparent 1px)`,
              backgroundSize: "44px 44px",
            }}
          />
        </div>

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="container mx-auto px-5 lg:px-12 relative z-10"
        >
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#0a1a2e]/70 backdrop-blur-sm border border-slate-800 mb-8"
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-emerald-400 font-mono text-sm">SERVICES</span>
              <span className="w-px h-4 bg-slate-700" />
              <span className="text-slate-400 text-sm">7 Core Offerings</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.9 }}
              className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight"
            >
              <span className="text-white">We build the</span>
              <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  engine
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
              </span>
              <span className="text-white ml-4">behind</span>
              <br />
              <span className="text-white/30 text-4xl sm:text-5xl lg:text-6xl font-light italic">
                your growth.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-8 text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              From web presence to AI automation  enterprise-grade solutions that don't just work, they outperform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="group relative px-8 py-4 bg-emerald-500 text-[#030c18] font-bold rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25 text-sm">
                <span className="relative z-10">Explore All Services</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
              <button className="px-8 py-4 border border-slate-700/60 hover:border-emerald-500/40 rounded-xl font-medium transition-all hover:bg-white/[0.03] backdrop-blur-sm text-sm">
                Schedule Consultation
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="mt-14 flex flex-wrap justify-center gap-10"
            >
              {[
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-white tabular-nums">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-1 font-mono">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-mono text-slate-700">SCROLL</span>
            <div className="w-px h-14 bg-gradient-to-b from-emerald-500 to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* ── Marquee ── */}
      <MarqueeStrip />

      {/* ── Filter nav ── */}
      <div className="sticky top-0 z-40 bg-[#030c18]/85 backdrop-blur-xl border-b border-slate-800/50">
        <div className="container mx-auto px-5 lg:px-12 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-5 py-2.5 rounded-full font-mono text-xs transition-all ${
                  activeFilter === f.id
                    ? "bg-emerald-500 text-[#030c18] font-bold shadow-lg shadow-emerald-500/20"
                    : "bg-slate-900/60 text-slate-400 border border-slate-800 hover:border-emerald-500/30 hover:text-slate-300"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Sections ── */}
      <DigitalPresenceSection services={allServices} filter={activeFilter} />
      <DataIntelligenceSection services={allServices} filter={activeFilter} />
      <InfrastructureSection services={allServices} filter={activeFilter} />


      {/* ── CTA ── */}
      <section className="py-20">
        <div className="container mx-auto px-5 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/15 via-transparent to-cyan-500/15" />
            <div className="relative bg-[#060f1e] border border-slate-800/60 p-10 lg:p-16 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                Ready to build something extraordinary?
              </h2>
              <p className="text-slate-400 text-base mb-8 max-w-lg mx-auto">
                Let's discuss how our services can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-emerald-500 text-[#030c18] font-bold rounded-xl hover:scale-105 transition-transform hover:shadow-xl hover:shadow-emerald-500/25 text-sm">
                  Start a Project
                </button>
                <button className="px-8 py-4 border border-slate-700/60 hover:border-emerald-500/40 rounded-xl font-medium transition-all hover:bg-white/[0.03] text-sm">
                  Contact Sales
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}