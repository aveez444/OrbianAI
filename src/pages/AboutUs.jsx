import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Images
import heroNetwork from "../assets/abouthero1.png";
import aiArchitecture from "../assets/about-ai-architecture.jpg";
import dataFlow from "../assets/about-data-flow.jpg";
import aiBrain from "../assets/about-ai-brain.jpg";
import innovation from "../assets/about-innovation.png";
import teamAbstract from "../assets/about-team-abstract.png";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const floatAnimation = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

const milestones = [
  { year: "2019", label: "Founded", desc: "OrbianAI launched with a singular mission: democratize enterprise intelligence." },
  { year: "2021", label: "First Deployment", desc: "Scaled our first autonomous decision engine for a Fortune 500 client." },
  { year: "2022", label: "Series A", desc: "Raised $18M to expand our research division and infrastructure team." },
  { year: "2024", label: "Global Reach", desc: "Operating across 10 countries with 100+ enterprise deployments." },
];

const values = [
  {
    num: "01",
    title: "Precision over hype",
    body: "We build systems that work in production, not just demos. Every model we ship is stress-tested against real-world chaos.",
  },
  {
    num: "02",
    title: "Transparency by design",
    body: "AI should be explainable. We engineer interpretability into every layer so your teams always understand what's happening.",
  },
  {
    num: "03",
    title: "Relentless research",
    body: "We allocate 30% of our engineering bandwidth to fundamental research. The future doesn't wait — neither do we.",
  },
];

export default function About() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main className="bg-[#020617] text-slate-200 selection:bg-emerald-500/30 overflow-x-hidden">

{/* ============= HERO: ABOUT SECTION ============= */}
<section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-12 lg:pt-0 lg:pb-0">

  {/* Ambient glows - reduced for mobile */}
  <div className="absolute top-0 left-0 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-emerald-500/5 blur-[120px] lg:blur-[180px] rounded-full pointer-events-none" />
  <div className="absolute bottom-0 right-0 w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] bg-cyan-500/5 blur-[120px] lg:blur-[160px] rounded-full pointer-events-none" />

  <motion.div style={{ y: heroY, opacity: heroOpacity }} className="w-full">
    <div className="container mx-auto px-4 sm:px-6 lg:px-12">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-20 items-center min-h-screen py-16 lg:py-32">

        {/* ---- LEFT: TEXT (Always on top) ---- */}
        <div className="relative z-10 w-full order-1">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-5"
          >
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            ABOUT ORBIANAI
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight lg:leading-[1.05] tracking-tight text-white"
          >
            We don't predict
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              the future.
            </span>
            <br />
            <span className="text-slate-400 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light block mt-1 lg:inline lg:mt-0">
              We engineer it.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 text-slate-400 text-base sm:text-lg leading-relaxed max-w-lg"
          >
            OrbianAI was built by researchers and engineers who refused to accept the gap between AI research and real-world deployment. We close that gap — at enterprise scale.
          </motion.p>
        </div>

        {/* ---- RIGHT: IMAGE COMPOSITION (Mobile: between text and stats) ---- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="relative w-full order-2"
        >
          {/* Main image */}
          <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden border border-white/8">
            <img src={heroNetwork} alt="AI neural network" className="w-full h-auto object-cover aspect-[16/9] lg:aspect-[4/3]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 via-transparent to-transparent" />
          </div>

          {/* Floating badges - simplified for mobile */}
          <div className="absolute -top-3 -left-3 lg:-top-5 lg:-left-5 px-3 py-2 lg:px-4 lg:py-3 rounded-xl lg:rounded-2xl bg-slate-900/90 backdrop-blur-sm border border-white/10">
            <span className="text-xs lg:text-sm text-emerald-400 font-medium">Active 24/7</span>
          </div>

          <div className="absolute -bottom-3 -right-3 lg:-bottom-5 lg:-right-5 px-3 py-2 lg:px-5 lg:py-4 rounded-xl lg:rounded-2xl bg-slate-900/90 backdrop-blur-sm border border-white/10">
            <div className="text-lg lg:text-2xl font-bold text-white">2019</div>
            <div className="text-[10px] lg:text-xs text-slate-400">FOUNDED</div>
          </div>
        </motion.div>

        {/* ---- STATS (Mobile: below image, Desktop: part of left column) ---- */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="w-full order-3 lg:order-1 lg:col-start-1 lg:row-start-2 lg:mt-6"
        >
          <div className="grid grid-cols-3 gap-3 sm:gap-6 lg:gap-10">
            {[
              { val: "100+", label: "Enterprise clients" },
              { val: "10", label: "Countries" },
              { val: "99.97%", label: "Uptime SLA" },
            ].map((s, i) => (
              <div key={i} className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tabular-nums">{s.val}</div>
                <div className="text-[10px] sm:text-xs text-slate-500 mt-0.5 font-mono uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  </motion.div>
</section>

      {/* ============= MISSION STATEMENT ============= */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            {...fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-emerald-400 font-mono text-sm block mb-6 tracking-widest uppercase">Our Mission</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Artificial intelligence that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                actually works
              </span>{" "}
              — reliably, at scale, every time.
            </h2>
            <p className="mt-6 text-slate-400 text-lg leading-relaxed">
              Most AI products are impressive in sandboxes. We build for production. For the messy, high-stakes environments where your business actually runs. Our infrastructure handles the complexity so your teams can focus on the outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============= STORY / TIMELINE ============= */}
      <section className="py-24 relative">
        {/* background detail */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent" />

        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/8">
                <img src={aiBrain} alt="AI brain architecture" className="w-full h-auto object-cover aspect-[4/3]" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/15 via-transparent to-cyan-500/10 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/50 to-transparent" />
              </div>
              <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-emerald-500/40 rounded-tr-xl" />
            </motion.div>

            {/* Right: timeline */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <span className="text-emerald-400 font-mono text-sm block mb-4 tracking-widest uppercase">Our Story</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-10">
                Built from the ground up,{" "}
                <span className="text-slate-500 font-light">milestone by milestone.</span>
              </h2>

              <div className="space-y-8 relative">
                {/* vertical line */}
                <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-emerald-500/40 via-cyan-500/20 to-transparent" />

                {milestones.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.7 }}
                    className="flex gap-6 items-start"
                  >
                    {/* dot */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-900 border border-emerald-500/40 flex items-center justify-center z-10">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-emerald-400 font-mono text-sm">{m.year}</span>
                        <span className="text-white font-semibold">{m.label}</span>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============= VALUES ============= */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="mb-16">
            <span className="text-emerald-400 font-mono text-sm block mb-4 tracking-widest uppercase">Our Values</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white max-w-2xl">
              The principles that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                drive every decision.
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-0 border border-white/8 rounded-3xl overflow-hidden">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                className={`p-8 lg:p-10 relative group hover:bg-white/[0.03] transition-colors duration-300 ${
                  i < values.length - 1 ? "border-b lg:border-b-0 lg:border-r border-white/8" : ""
                }`}
              >
                {/* hover line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <span className="text-slate-700 font-mono text-5xl font-bold block mb-6">{v.num}</span>
                <h3 className="text-xl font-semibold text-white mb-4">{v.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= CORE CAPABILITIES ============= */}
      <section className="py-24 relative overflow-hidden">

        {/* Ambient glow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/6 blur-[160px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/8"
          >
            <div>
              <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase block mb-3">What We Do</span>
              <h2 className="text-5xl lg:text-6xl font-bold text-white leading-none">Core<br />Capabilities</h2>
            </div>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed sm:text-right">
              Six domains. One unified platform. Every capability engineered to work together — not in silos.
            </p>
          </motion.div>

          {/* Capability rows */}
          <div className="divide-y divide-white/8">
            {[
              {
                num: "01",
                title: "Enterprise AI Architecture",
                tags: ["LLM Integration", "Model Routing", "Fine-tuning"],
                desc: "We design end-to-end AI systems — from model selection and training pipelines to serving infrastructure — tailored to your data, compliance requirements, and scale targets.",
              },
              {
                num: "02",
                title: "Predictive Intelligence",
                tags: ["Forecasting", "Anomaly Detection", "Risk Modeling"],
                desc: "Turn your historical data into forward-looking insight. Our predictive models are built for accuracy in messy, real-world environments where clean data is a luxury.",
              },
              {
                num: "03",
                title: "Autonomous Decision Systems",
                tags: ["Agents", "Workflow Automation", "Policy Engines"],
                desc: "Move beyond dashboards. Our autonomous systems act on insight — routing, approving, escalating — so your teams focus on exceptions, not operations.",
              },
              {
                num: "04",
                title: "Data Pipeline Engineering",
                tags: ["ETL/ELT", "Real-time Streaming", "Data Mesh"],
                desc: "AI is only as good as its data. We build reliable, observable pipelines that ingest, transform, and serve data at the speed your models demand.",
              },
              {
                num: "05",
                title: "AI Security & Governance",
                tags: ["Explainability", "Audit Trails", "Bias Monitoring"],
                desc: "Every model we ship comes with guardrails. We embed interpretability, drift detection, and compliance tooling so you can trust what's running in production.",
              },
              {
                num: "06",
                title: "Edge & Cloud Deployment",
                tags: ["Multi-cloud", "Edge Inference", "Kubernetes"],
                desc: "Deploy where your users are. From cloud-native clusters to edge devices with constrained compute — our inference stack runs lean and fast, anywhere.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group grid grid-cols-12 gap-4 lg:gap-8 py-7 items-start hover:bg-white/[0.02] transition-colors duration-300 -mx-4 px-4 rounded-xl cursor-default"
              >
                {/* Number */}
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-slate-700 font-mono text-sm group-hover:text-emerald-500/60 transition-colors duration-300">
                    {item.num}
                  </span>
                </div>

                {/* Title */}
                <div className="col-span-10 sm:col-span-4">
                  <h3 className="text-xl lg:text-2xl font-bold text-white leading-tight group-hover:text-emerald-50 transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                {/* Tags */}
                <div className="col-span-12 sm:col-span-3 flex flex-wrap gap-2 sm:pt-1">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-slate-500 border border-slate-800 group-hover:border-emerald-500/20 group-hover:text-emerald-400/70 px-2.5 py-1 rounded-full transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <div className="col-span-12 sm:col-span-4">
                  <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-400 transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ============= TECHNOLOGY SECTION (like Innovation Lab) ============= */}
      <section className="relative py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Right: Image (shown first on mobile) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/8">
                <img src={dataFlow} alt="Data flow visualization" className="w-full h-auto object-cover aspect-[4/3]" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 via-transparent to-cyan-500/15 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/50 to-transparent" />

                {/* Floating data stat */}
                <motion.div
                  animate={floatAnimation.animate}
                  className="absolute top-8 right-8 p-4 rounded-2xl bg-black/50 backdrop-blur-sm border border-white/10"
                >
                  <div className="text-2xl font-bold text-white">1.2PB</div>
                  <div className="text-xs text-slate-400 font-mono">Data processed / day</div>
                </motion.div>

                <motion.div
                  animate={floatAnimation.animate}
                  transition={{ delay: 1.2 }}
                  className="absolute bottom-8 left-8 p-4 rounded-2xl bg-black/50 backdrop-blur-sm border border-white/10"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                    <span className="text-xs text-slate-300 font-mono">INFERENCE LIVE</span>
                  </div>
                </motion.div>
              </div>

              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-cyan-500/30 rounded-br-xl" />
            </motion.div>

            {/* Left: Text + progress */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="order-2 lg:order-1"
            >
              <span className="text-emerald-400 font-mono text-sm block mb-4 tracking-widest uppercase">Technology</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Infrastructure built for
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  the intelligence era.
                </span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                From training to inference, our stack is purpose-built for reliability, speed, and scale. We don't bolt AI onto existing infrastructure — we architect it from first principles.
              </p>

              <div className="space-y-5">
                {[
                  { label: "Model Inference Speed", val: 92 },
                  { label: "Data Pipeline Reliability", val: 98 },
                  { label: "Edge Deployment Coverage", val: 78 },
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">{item.label}</span>
                      <span className="text-emerald-400 font-mono">{item.val}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.val}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ============= TWO IMAGE SPLIT: RESEARCH + COLLABORATION ============= */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 lg:px-12">

          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-emerald-400 font-mono text-sm block mb-4 tracking-widest uppercase">How We Operate</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Research meets{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                execution.
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Research */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden border border-white/8 group"
            >
              <img
                src={aiArchitecture}
                alt="AI Architecture"
                className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest mb-2 block">Deep Research</span>
                <h3 className="text-2xl font-bold text-white mb-2">30% of bandwidth dedicated to R&D</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Our research arm operates like an independent lab — publishing, questioning, and pushing AI boundaries without the pressure of shipping features.
                </p>
              </div>
            </motion.div>

            {/* Collaboration */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden border border-white/8 group"
            >
              <img
                src={teamAbstract}
                alt="Collaboration abstract"
                className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2 block">Collaboration</span>
                <h3 className="text-2xl font-bold text-white mb-2">Embedded in your team from day one</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  We don't hand off and disappear. Our engineers work alongside yours until the system is trusted, adopted, and scaling.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============= INNOVATION / FUTURE SECTION ============= */}
      <section className="relative py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left: image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/8">
                <img src={innovation} alt="Innovation" className="w-full h-auto object-cover aspect-[4/3]" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 via-transparent to-cyan-500/15 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/40 to-transparent" />

                <motion.div
                  animate={floatAnimation.animate}
                  transition={{ delay: 0.8 }}
                  className="absolute top-8 left-8 px-4 py-3 rounded-2xl bg-black/50 backdrop-blur-sm border border-white/10"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-xs text-white font-mono">15+ ACTIVE PROJECTS</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={floatAnimation.animate}
                  transition={{ delay: 2 }}
                  className="absolute bottom-8 right-8 px-5 py-3 rounded-2xl bg-black/50 backdrop-blur-sm border border-white/10"
                >
                  <div className="text-xl font-bold text-white">2025</div>
                  <div className="text-xs text-slate-400 font-mono">NEXT MILESTONE</div>
                </motion.div>
              </div>

              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-emerald-500/30 rounded-tl-xl" />
            </motion.div>

            {/* Right: content + research progress */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <span className="text-emerald-400 font-mono text-sm block mb-4 tracking-widest uppercase">What's Next</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Where tomorrow's
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  intelligence is born.
                </span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Our innovation lab runs parallel to our product engineering. We explore what's coming — so when the world is ready, we already are.
              </p>

              <div className="space-y-5">
                {[
                  { area: "Quantum Machine Learning", progress: 75, eta: "2025 Q2" },
                  { area: "Neuromorphic Computing", progress: 60, eta: "2025 Q4" },
                  { area: "Autonomous Reasoning", progress: 85, eta: "2025 Q1" },
                ].map((r, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">{r.area}</span>
                      <span className="text-emerald-400 font-mono">{r.eta}</span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${r.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ============= CTA STRIP ============= */}
      <section className="py-24 relative">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/8 blur-[160px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-white/8 rounded-3xl p-10 lg:p-16 relative overflow-hidden"
          >
            {/* Inner glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-emerald-500/30 to-transparent" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                  Ready to build something that lasts?
                </h2>
                <p className="text-slate-400 text-lg">Let's talk about your AI strategy.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <button className="group relative px-8 py-4 bg-emerald-500 text-[#020617] font-bold rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25">
                  <span className="relative z-10">Start a Conversation</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
                <button className="px-8 py-4 border border-slate-700 hover:border-emerald-500/40 rounded-xl font-medium transition-all hover:bg-white/5">
                  View Case Studies
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}