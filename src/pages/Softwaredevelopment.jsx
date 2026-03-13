// services/SoftwareDevelopment.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import heroImage from "../assets/softwaredev-hero.png";
import featureImage from "../assets/softwaredev-feature.jpg";

// ─── Data ─────────────────────────────────────────────────────────────────────

const capabilities = [
  {
    number: "01",
    title: "Microservices & Distributed Systems",
    body: "We decompose monoliths into independently deployable services that teams can own and scale in isolation. Event-driven architectures, message queues, and service meshes  designed for fault tolerance from day one.",
    tags: ["Kafka", "RabbitMQ", "gRPC", "Docker", "Kubernetes"],
  },
  {
    number: "02",
    title: "API Design & Development",
    body: "APIs are products. We design contracts first, then build robust REST and GraphQL layers with versioning, rate limiting, and documentation baked in  not bolted on after.",
    tags: ["REST", "GraphQL", "OpenAPI", "OAuth 2.0", "Webhooks"],
  },
  {
    number: "03",
    title: "Legacy Modernization",
    body: "We've rescued systems that haven't been touched in a decade. Strangler fig migrations, incremental rewrites, and database modernization  keeping the lights on while we rebuild the engine.",
    tags: ["Strangler Fig", "Data Migration", "Refactoring", "Re-platforming"],
  },
  {
    number: "04",
    title: "DevOps & CI/CD",
    body: "Code that can't be deployed reliably isn't finished. We set up pipelines that give your team confidence  automated testing, staged rollouts, rollback strategies, and full observability.",
    tags: ["GitHub Actions", "Terraform", "ArgoCD", "Prometheus", "Datadog"],
  },
];

const process = [
  {
    phase: "Technical Audit",
    duration: "Week 1",
    desc: "We map your existing systems, identify bottlenecks, technical debt, and risk areas. You get a written assessment before we propose anything.",
  },
  {
    phase: "System Design",
    duration: "Week 2–3",
    desc: "Architecture diagrams, ADRs (Architecture Decision Records), and data models. Every decision is documented with context  so your future team understands the why.",
  },
  {
    phase: "Engineering Sprints",
    duration: "Week 3–16+",
    desc: "Two-week sprints with working software at every demo. No dark periods. You see real, tested, deployed code  not progress bars.",
  },
  {
    phase: "Hardening & Handoff",
    duration: "Final 2 weeks",
    desc: "Load testing, security review, runbooks, and on-call playbooks. We don't call it done until your team can operate it without us.",
  },
];

const techStack = [
  "Python", "Go", "Node.js", "Java", "Rust",
  "PostgreSQL", "MongoDB", "Redis", "Kafka", "RabbitMQ",
  "Kubernetes", "Terraform", "AWS", "GCP", "Azure",
  "GitHub Actions", "Datadog", "Prometheus", "ArgoCD", "gRPC",
];

const stats = [
  { value: "60%", label: "Avg. reduction in deployment time" },
  { value: "10×", label: "Throughput improvement on legacy systems" },
  { value: "0", label: "Production incidents at launch across last 12 projects" },
  { value: "22+", label: "Mission-critical systems delivered" },
];

const differentiators = [
  {
    title: "We write ADRs, not just code",
    body: "Architecture Decision Records mean your team always understands why the system is built the way it is  not just how. Knowledge lives in the repo, not in someone's head.",
  },
  {
    title: "Security is never a phase",
    body: "Threat modeling, OWASP compliance, secrets management, and dependency scanning are part of every sprint  not a checkbox at the end.",
  },
  {
    title: "Observability from day one",
    body: "Logging, metrics, and distributed tracing are built in from sprint one. When something breaks at 3am, you'll know exactly where and why.",
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

export default function SoftwareDevelopment() {
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
            alt="Software engineering environment"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030c18] via-[#030c18]/65 to-[#030c18]/25" />
          {/* Emerald atmosphere at bottom */}
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
          <span className="text-slate-300">Software Development</span>
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
            <span className="text-white">Software</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-300 to-green-400">
              Engineering
            </span>
            <br />
            <span className="text-white/90">at Scale</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-6 text-slate-400 text-lg max-w-xl leading-relaxed"
          >
            Mission-critical software built with the discipline of a team that's shipped systems handling millions of requests  and kept them running.
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
              <span className="relative z-10">Discuss Your System</span>
              <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
              <div className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a
              href="#capabilities"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-slate-700/70 rounded-xl text-sm font-medium hover:border-emerald-500/40 hover:bg-white/[0.03] transition-all"
            >
              See Our Practice
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
              "The most expensive software is the kind you have to{" "}
              <span className="text-white font-semibold">rewrite in two years</span>{" "}
              because the first version was built to ship fast, not to{" "}
              <span className="text-emerald-400">last</span>."
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-8 h-px bg-emerald-500/50" />
              <span className="font-mono text-xs text-slate-600">OrbianAI Engineering Philosophy</span>
            </div>
          </RevealText>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section id="capabilities" className="py-20 lg:py-24">
        <div className="container mx-auto px-5 lg:px-12">
          <RevealText className="mb-16">
            <SectionLabel>What We Engineer</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-2xl leading-tight">
              Four pillars of our software engineering practice
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
                alt="Software architecture diagram"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />
              <div className="absolute top-5 right-5 bg-[#030c18]/80 backdrop-blur-sm border border-slate-700/50 rounded-lg px-3 py-2">
                <span className="font-mono text-xs text-slate-400">Distributed System Architecture  Case Example</span>
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
              Structured delivery, zero dark periods
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
              Non-negotiables on every engagement
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
              <SectionLabel>Let's Build Together</SectionLabel>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.0] mb-6">
                Got a complex system
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400 mt-1">
                  to build or rescue?
                </span>
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-10 max-w-lg mx-auto">
                Whether you're starting from scratch or untangling years of technical debt  we've been there. Let's talk through your situation.
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