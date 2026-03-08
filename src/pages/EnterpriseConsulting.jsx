// services/EnterpriseConsulting.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import heroImage from "../assets/enterprise-consulting-hero.png";
import featureImage from "../assets/enterprise-consulting-feature.jpg";

// ─── Data ─────────────────────────────────────────────────────────────────────

const capabilities = [
  {
    number: "01",
    title: "Salesforce Strategy & Advisory",
    body: "Maximize your Salesforce investment with expert guidance on architecture, implementation, and optimization. We help align Salesforce capabilities with your unique business processes and growth objectives.",
    tags: ["Sales Cloud", "Service Cloud", "Marketing Cloud", "Experience Cloud", "CPQ"],
  },
  {
    number: "02",
    title: "Oracle Transformation",
    body: "Navigate the complexity of Oracle ecosystems. From ERP to HCM and cloud migrations, we provide strategic roadmaps that reduce technical debt and unlock the full potential of your Oracle investments.",
    tags: ["Oracle Cloud", "E-Business Suite", "PeopleSoft", "JD Edwards", "NetSuite"],
  },
  {
    number: "03",
    title: "SAP Modernization",
    body: "Transform SAP from a transactional backbone to a strategic advantage. We guide S/4HANA migrations, process optimization, and integration strategies that bridge SAP with modern cloud applications.",
    tags: ["S/4HANA", "SAP Business Suite", "SuccessFactors", "SAP Analytics Cloud", "BTP"],
  },
  {
    number: "04",
    title: "Digital Transformation",
    body: "Technology alone doesn't transform businessesstrategy does. We help you reimagine processes, orchestrate change, and align technology investments with measurable business outcomes.",
    tags: ["Process Optimization", "Change Management", "Enterprise Architecture", "Cloud Strategy", "M&A Integration"],
  },
];

const process = [
  {
    phase: "Discovery & Assessment",
    duration: "Week 1–3",
    desc: "We interview stakeholders, audit existing systems, and document pain points. You get an objective assessment of your current state and clear recommendations for improvement.",
  },
  {
    phase: "Strategy & Roadmap",
    duration: "Week 3–6",
    desc: "Detailed architectural guidance, vendor selection criteria, and phased implementation plans. We help you prioritize investments based on business impact and technical feasibility.",
  },
  {
    phase: "Execution Support",
    duration: "Month 2–6+",
    desc: "Hands-on guidance through implementation. We review designs, validate configurations, and ensure alignment with enterprise standardswithout taking over the work.",
  },
  {
    phase: "Governance & Enablement",
    duration: "Ongoing",
    desc: "Establish practices that keep your enterprise systems healthy. We help you build internal capabilities, governance frameworks, and continuous improvement processes.",
  },
];

const techStack = [
  "Salesforce", "Oracle Cloud", "SAP S/4HANA", "NetSuite", "SuccessFactors",
  "MuleSoft", "Dell Boomi", "Workday", "ServiceNow", "Adobe Experience Cloud",
  "AWS", "Azure", "GCP", "Snowflake", "Datadog",
  "Okta", "DocuSign", "Coupa", "Anaplan", "Confluent",
];

const stats = [
  { value: "150+", label: "Enterprise systems assessed and optimized" },
  { value: "42%", label: "Average reduction in total cost of ownership" },
  { value: "2.8×", label: "ROI on strategic consulting engagements" },
  { value: "15+", label: "Years of enterprise software expertise" },
];

const differentiators = [
  {
    title: "Vendor-agnostic guidance",
    body: "We don't resell softwarewe advise on the best path forward. Whether you're extending existing systems or considering new platforms, our recommendations are driven by your needs, not commissions.",
  },
  {
    title: "Technical depth meets business context",
    body: "Our consultants speak both CIO and CFO. We translate technical complexity into business cases and ensure every recommendation ties back to measurable organizational outcomes.",
  },
  {
    title: "Change-ready delivery",
    body: "Enterprise software projects fail when people aren't ready. We embed change management into every engagement, ensuring your teams adopt and embrace new ways of working.",
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

export default function EnterpriseConsulting() {
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
            alt="Enterprise consulting strategy session"
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
          <span className="text-slate-300">Enterprise Consulting</span>
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
            <span className="font-mono text-xs text-emerald-400 tracking-[0.2em]">05  ENTERPRISE ADVISORY</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-[0.92] tracking-tight max-w-5xl"
          >
            <span className="text-white">Enterprise</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-300 to-emerald-400">
              Consulting
            </span>
            <br />
            <span className="text-white/90">& Strategy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-6 text-slate-400 text-lg max-w-xl leading-relaxed"
          >
            Strategic guidance for Salesforce, Oracle, SAP & beyond. Bridge the gap between software capability and business need with expert advisory that drives real results.
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
              <span className="relative z-10">Shape Your Strategy</span>
              <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
              <div className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a
              href="#capabilities"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-slate-700/70 rounded-xl text-sm font-medium hover:border-emerald-500/40 hover:bg-white/[0.03] transition-all"
            >
              Explore Our Approach
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
              "Enterprise software is just services.{" "}
              <span className="text-white font-semibold">Strategy is what makes it valuable</span>{" "}
               the difference between paying for licenses and{" "}
              <span className="text-emerald-400">unlocking competitive advantage</span>."
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-8 h-px bg-emerald-500/50" />
              <span className="font-mono text-xs text-slate-600">OrbianAI Enterprise Consulting Philosophy</span>
            </div>
          </RevealText>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section id="capabilities" className="py-20 lg:py-24">
        <div className="container mx-auto px-5 lg:px-12">
          <RevealText className="mb-16">
            <SectionLabel>What We Advise</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-2xl leading-tight">
              Four pillars of our enterprise consulting practice
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
            <div className="relative rounded-2xl overflow-hidden" style={{ height: "clamp(280px, 50vw, 560px)" }}>
              <img
                src={featureImage}
                alt="Enterprise strategy workshop"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />
              <div className="absolute top-5 right-5 bg-[#030c18]/80 backdrop-blur-sm border border-slate-700/50 rounded-lg px-3 py-2">
                <span className="font-mono text-xs text-slate-400">Enterprise Architecture Review  Case Study</span>
              </div>
            </div>
          </RevealText>
        </div>
      </section>

      {/* ── TECH STACK MARQUEE ── */}
      <section className="py-14 overflow-hidden border-y border-slate-800/40 bg-[#040d1a]">
        <RevealText className="container mx-auto px-5 lg:px-12 mb-8">
          <SectionLabel>Technologies We Guide</SectionLabel>
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
            <SectionLabel>How We Guide</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-xl leading-tight">
              From complexity to clarity
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
              What makes our advisory different
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
              <SectionLabel>Let's Shape Your Strategy</SectionLabel>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.0] mb-6">
                Underutilized enterprise systems?
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400 mt-1">
                  Let's unlock their potential.
                </span>
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-10 max-w-lg mx-auto">
                Tell us about your enterprise landscape and strategic goals. We'll provide an honest assessment and clear path forwardno vendor bias, just expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 text-white font-bold rounded-xl text-sm overflow-hidden hover:scale-105 transition-all hover:shadow-2xl hover:shadow-emerald-500/25"
                >
                  <span className="relative z-10">Start the Conversation</span>
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