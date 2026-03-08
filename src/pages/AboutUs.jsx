import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Images
import heroNetwork from "../assets/abouthero1.png";
import aiArchitecture from "../assets/about-ai-architecture.jpg";
import dataFlow from "../assets/about-data-flow.jpg";
import aiBrain from "../assets/about-ai-brain.jpg";
import founderImage from "../assets/founder (1).png";
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
  { year: "Vision", desc: "OrbianAI launched with a singular mission: democratize enterprise intelligence." },
  { year: "Identifying the Gap", desc: "Organizations worldwide struggled with siloed data, inefficient workflows, and reactive decision-making. True intelligence was missing from business operations." },
  { year: "Building the Engine", desc: "We engineered a scalable AI services that integrates automation, analytics, and predictive modeling into one unified decision ecosystem." },
  { year: "Driving Industry Transformation", desc: "OrbianAI is pioneering the shift toward self-optimizing enterprises  empowering industries to operate with precision, agility, and continuous intelligence." },
];

const values = [
  {
    num: "01",
    title: "Precision over hype",
    body: "We build systems that work in production. Every model we ship is stress-tested against real-world chaos.",
  },
  {
    num: "02",
    title: "Transparency by design",
    body: "AI should be explainable. We engineer interpretability into every layer so your team always understand what's happening.",
  },
  {
    num: "03",
    title: "Relentless research",
    body: "We allocate 30% of our engineering bandwidth to fundamental research. The future doesn't wait  neither do we.",
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
                  OrbianAI was built by researchers and engineers who refused to accept the gap between AI research and real-world deployment. We close that gap  at enterprise scale.
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
              reliably, at scale, every time.
            </h2>
            <p className="mt-6 text-slate-400 text-lg leading-relaxed">
              Most AI products are impressive in sandboxes. We build for production. For the messy, high-stakes environments where your business actually runs. Our services handles the complexity so your teams can focus on the outcomes.
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
                className={`p-8 lg:p-10 relative group hover:bg-white/[0.03] transition-colors duration-300 ${i < values.length - 1 ? "border-b lg:border-b-0 lg:border-r border-white/8" : ""
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
                services built for
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 pb-2">
                  the intelligence era.
                </span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                From training to inference, our stack is purpose-built for reliability, speed, and scale. We don't bolt AI onto existing services  we architect it from first principles.
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
                <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest mb-2 block">Innovation Focused</span>
                <h3 className="text-2xl font-bold text-white mb-2">Committed to Continuous Improvement</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Our team constantly explores the latest developments to ensure your systems remain cutting-edge and reliable over the long term.
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
                <h3 className="text-2xl font-bold text-white mb-2">Dedicated Partnership and Support</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  We work closely with your organization, providing ongoing support to ensure the technology is fully trusted, adopted, and scaling successfully.
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
                <img src={founderImage} alt="Founder" className="w-full h-auto object-cover max-h-[600px] object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 via-transparent to-cyan-500/15 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/40 to-transparent" />

                <motion.div
                  animate={floatAnimation.animate}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-8 right-8 px-5 py-3 rounded-2xl bg-black/50 backdrop-blur-sm border border-white/10"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-xs text-white font-mono">VISIONARY LEADERSHIP</span>
                  </div>
                </motion.div>
              </div>

              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-emerald-500/30 rounded-tl-xl" />
            </motion.div>

            {/* Right: content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <span className="text-emerald-400 font-mono text-sm block mb-4 tracking-widest uppercase">Leadership</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight lg:leading-[1.30]">
                Meet Our
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  Founder
                </span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                "Our vision has always been to simplify the complex and deliver intelligent solutions that genuinely empower organizations. Building trust through reliable execution is at the heart of everything we do."
              </p>

              <div className="flex items-center gap-4 mt-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400 flex items-center justify-center">
                  <span className="font-bold text-white text-lg">O</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Our Founder</h4>
                  <p className="text-emerald-400 font-mono text-sm">Founder & CEO</p>
                </div>
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