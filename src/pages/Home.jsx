import { motion } from "framer-motion";
import heroDashboard from "../assets/Heronew.png";
import aboutTeam from "../assets/image7.png";
import servicesBg from "../assets/services-bg.png";
import whyUsImg from "../assets/why-us.png";
import { Link } from "react-router-dom";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.2 }
};

export default function Home() {
  return (
    <main className="bg-[#020617] text-slate-200 selection:bg-emerald-500/30">
      
  {/* ================= HERO SECTION - PREMIUM BG STYLE ================= */}
<section className="relative min-h-screen flex items-center overflow-hidden bg-[#020617]">

{/* Animated Background Image */}
<motion.div
  initial={{ scale: 1.2, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
  className="absolute inset-0 z-0"
>
  <img
    src={heroDashboard}
    alt="AI Infrastructure"
    className="w-full h-full object-cover object-center"
  />
</motion.div>

{/* Dark Overlay for Readability */}
<div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/30 to-[#020617]/20 z-10" />

{/* Subtle Glow Accent */}
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/10 blur-[120px] z-10" />

<div className="container mx-auto px-6 relative z-20">
  <div className="max-w-3xl">

    {/* Badge */}
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="inline-block py-1 px-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6"
    >
      Next-Gen AI Infrastructure
    </motion.span>

    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.8 }}
      className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white"
    >
      Engineering the <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
        Future of Intelligence
      </span>
    </motion.h1>

    {/* Paragraph */}
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed"
    >
      OrbianAI delivers scalable AI infrastructure and predictive frameworks 
      that transform ambitious enterprises into autonomous powerhouses.
    </motion.p>

    {/* Buttons */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="mt-10 flex flex-wrap gap-4"
    >
    <Link to="/contact">
      <button className="group relative px-8 py-4 bg-emerald-500 text-[#020617] font-bold rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25">
        <span className="relative z-10">Start Transformation</span>
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      </button>
    </Link>

    <Link to="/services">
      <button className="px-8 py-4 border border-slate-700 hover:border-emerald-500/50 rounded-xl font-medium transition-all backdrop-blur-sm hover:bg-white/5">
        Explore Solutions
      </button>
    </Link>
    </motion.div>

  </div>
</div>
</section>


{/* ================= ABOUT SECTION ================= */}
<section className="py-20 sm:py-28 lg:py-36 relative overflow-hidden">
  {/* Subtle background elements */}
  <div className="absolute inset-0 z-0">
    <div className="absolute top-40 -left-20 w-80 h-80 bg-emerald-500/3 rounded-full blur-3xl" />
    <div className="absolute bottom-40 -right-20 w-80 h-80 bg-blue-500/3 rounded-full blur-3xl" />
  </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
      
      {/* Image Section - Order changes on mobile */}
      <motion.div 
        className="relative order-1 lg:order-1"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Main image - reverted to original size */}
        <div className="relative z-10 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <img 
            src={aboutTeam} 
            alt="Team collaborating on AI solutions" 
            className="w-full h-auto object-cover aspect-[4/3] lg:aspect-auto transform hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-emerald-500/30 rounded-tr-3xl hidden lg:block" />
        <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-blue-500/30 rounded-bl-3xl hidden lg:block" />
      </motion.div>

      {/* Content Section */}
      <motion.div 
        className="order-2 lg:order-2"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        {/* Pill badge */}
        <motion.div 
          variants={fadeInUp}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-emerald-400 text-sm font-medium tracking-wider">OUR STORY</span>
        </motion.div>

        {/* Headline */}
        <motion.h2 
          variants={fadeInUp}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
        >
          Built by Visionaries.{" "}
          <span className="text-transparent bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text">
            Driven by Innovation.
          </span>
        </motion.h2>

        {/* Expanded content about innovation */}
        <motion.div 
          variants={fadeInUp}
          className="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed mb-8"
        >
          <p>
            Every line of code we write is driven by a singular belief: that technology should 
            amplify human potential, not replace it. Our team of engineers, researchers, and 
            visionaries came together with a shared mission—to build AI that doesn't just process 
            data, but truly understands it.
          </p>
          
          <p>
            We reject the notion that innovation happens in isolation. True breakthroughs emerge 
            at the intersection of diverse perspectives, rigorous engineering, and creative 
            problem-solving. That's why we've cultivated a culture where curiosity is currency 
            and every challenge is an opportunity to redefine what's possible.
          </p>

          <p>
            From our early days experimenting with neural networks to now architecting 
            enterprise-scale AI systems, we've always believed that technology should serve people, 
            not the other way around. Every solution we build is a testament to this philosophy—elegant, 
            intuitive, and built to evolve with your business.
          </p>
        </motion.div>

        {/* Core principles */}
        <motion.div 
          variants={fadeInUp}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
        >
          {[
            { label: "Research-First", desc: "Pushing boundaries" },
            { label: "Human-Centered", desc: "Technology with purpose" },
            { label: "Future-Ready", desc: "Built for tomorrow" }
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-emerald-400 font-semibold mb-1">{item.label}</div>
              <div className="text-sm text-slate-400">{item.desc}</div>
            </div>
          ))}
        </motion.div>

        {/* Signature/quote line */}
        <motion.div 
          variants={fadeInUp}
          className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500" />
          <div>
            <div className="text-white font-medium">Innovation isn't what we do.</div>
            <div className="text-slate-400 text-sm">It's who we are.</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </div>
</section>

{/* ================= SERVICES SECTION ================= */}
<section className="relative min-h-screen py-20 sm:py-28 lg:py-36 overflow-hidden">
  {/* Background Image with minimal overlay */}
  <div className="absolute inset-0 z-0">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${servicesBg})` }}
    />
    {/* Very light gradient overlay - significantly reduced */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#020617]/80 via-[#020617]/90 to-[#020617]/90" />
    {/* Very subtle gradient orbs */}
    <div className="absolute top-20 -left-20 w-96 h-96 bg-emerald-500/3 rounded-full blur-3xl" />
    <div className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl" />
  </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Section Header */}
    <motion.div 
      className="max-w-4xl mx-auto text-center mb-16 lg:mb-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Pill badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-emerald-400 text-sm font-medium tracking-wider">WHAT WE DO BEST</span>
      </div>

      {/* Main heading with gradient */}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
        Intelligent{" "}
        <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
          Services
        </span>
      </h2>
      
      {/* Description */}
      <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
        We architect and deploy cutting-edge AI solutions that transform how enterprises 
        leverage their data, delivering measurable impact at scale.
      </p>

      {/* Decorative element */}
      <div className="flex justify-center gap-2 mt-8">
        <div className="w-12 h-1 rounded-full bg-emerald-500/50" />
        <div className="w-12 h-1 rounded-full bg-blue-500/50" />
      </div>
    </motion.div>

    {/* Services Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {[
        { 
          title: "AI Engineering", 
          desc: "Custom ML pipelines and automation frameworks for enterprise-scale deployment. We build production-ready AI systems that deliver consistent, reliable results.",
          stats: "15+ Projects Delivered",
          color: "emerald"
        },
        { 
          title: "Cloud Infrastructure", 
          desc: "High-performance distributed systems with enterprise-grade security protocols. Scale effortlessly with our battle-tested cloud architecture patterns.",
          stats: "99.9% Uptime SLA",
          color: "blue"
        },
        { 
          title: "Data Intelligence", 
          desc: "Advanced analytics and forecasting models for real-time decision making. Transform raw data into actionable insights with our AI-powered analytics.",
          stats: "10B+ Data Points Processed",
          color: "purple"
        }
      ].map((service, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.15, duration: 0.5 }}
          whileHover={{ y: -4 }}
          className="group relative"
        >
          {/* Card with glassmorphism effect */}
          <div className="relative h-full p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500">
            {/* Subtle gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Subtle border effect on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20" />

            {/* Content */}
            <div className="relative z-10">
              {/* Numbered icon - 01, 02, 03 style */}
              <div className="relative mb-6 inline-block">
                <div className={`w-16 h-16 rounded-xl bg-${service.color}-500/10 border border-${service.color}-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <span className={`text-2xl font-bold text-${service.color}-400`}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Service code */}
              <div className="text-slate-500 font-mono text-sm mb-3">
                /services/{String(idx + 1).padStart(2, '0')}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-base leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                {service.desc}
              </p>

              {/* Stats/metric */}
              <div className="flex items-center gap-2 mb-6">
                <div className={`w-1.5 h-1.5 rounded-full bg-${service.color}-500 animate-pulse`} />
                <span className={`text-${service.color}-400 text-sm font-medium`}>
                  {service.stats}
                </span>
              </div>

              {/* Learn more link */}
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="text-slate-400 group-hover:text-white transition-colors">
                  Explore Service
                </span>
                <svg 
                  className="w-5 h-5 text-slate-400 transform group-hover:translate-x-1 group-hover:text-white transition-all duration-300"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Bottom CTA */}
    <motion.div 
      className="text-center mt-16 lg:mt-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
    >
      <div className="inline-flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
        <span className="text-slate-300">Ready to transform your infrastructure?</span>
        <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105">
          Schedule a Consultation
        </button>
      </div>
    </motion.div>
  </div>
</section>

{/* ================= WHY US SECTION ================= */}
<section className="relative py-16 sm:py-20 lg:py-28 bg-[#020617] overflow-hidden">
  {/* Abstract background pattern - simplified for mobile */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
  </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
    {/* Header */}
    <motion.div 
      className="max-w-3xl mx-auto text-center mb-12 lg:mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
        Why Industry Leaders 
        <span className="block text-emerald-400 mt-1">Choose Our Infrastructure</span>
      </h2>
      <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
        We don't just build AI systems — we engineer the foundation for the next decade of innovation.
      </p>
    </motion.div>

    {/* Mobile-optimized grid */}
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
      
      {/* Left side - Statistics */}
      <motion.div 
        className="order-2 lg:order-1 space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Main stat card */}
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl blur opacity-15" />
          <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-emerald-400 text-xs font-medium mb-1 uppercase tracking-wider">Track Record</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl sm:text-6xl font-bold text-white">98%</span>
                  <span className="text-slate-400 text-sm">success rate</span>
                </div>
                <p className="text-slate-400 text-sm mt-1">Across 500+ enterprise deployments</p>
              </div>
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-2xl">
                
              </div>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-5 border border-slate-800">
            <span className="text-2xl sm:text-3xl font-bold text-white block">10x</span>
            <p className="text-slate-400 text-xs sm:text-sm">Faster deployment</p>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-5 border border-slate-800">
            <span className="text-2xl sm:text-3xl font-bold text-white block">Zero</span>
            <p className="text-slate-400 text-xs sm:text-sm">Security breaches</p>
          </div>
          <div className="col-span-2 bg-gradient-to-r from-slate-900 to-slate-800/50 rounded-xl p-5 border border-slate-800">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-blue-400 border-2 border-slate-900" />
                ))}
              </div>
              <p className="text-slate-300 text-sm">
                <span className="text-white font-semibold">50+ AI engineers</span> ready to deploy
              </p>
            </div>
          </div>
        </div>

        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-2">
          {['TensorFlow', 'PyTorch', 'Kubernetes', 'AWS', 'Azure', 'GCP'].map((tech) => (
            <span key={tech} className="px-3 py-1.5 bg-white/5 rounded-full text-xs text-slate-300 border border-white/10">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Right side - Image and features (moved above stats on mobile) */}
      <motion.div 
        className="order-1 lg:order-2 space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Image card */}
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10" />
          <div className="absolute top-3 right-3 z-20">
            <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-emerald-400 text-xs border border-emerald-500/30">
              Live production
            </span>
          </div>
          <img 
            src={whyUsImg} 
            alt="AI Infrastructure"
            className="w-full h-[280px] sm:h-[320px] object-cover"
          />
          
          {/* Image overlay content */}
          <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
            <div className="flex items-center gap-3">
            
              <div>
                <p className="text-white font-medium text-sm">Real-time inference</p>
                <p className="text-slate-300 text-xs">&lt;10ms latency worldwide</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature list */}
        <div className="bg-slate-900/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-800">
          <h3 className="text-lg font-semibold text-white mb-4">What sets us apart</h3>
          <div className="space-y-4">
            {[
              { title: 'Zero-downtime deployments', desc: 'Blue-green deployments with instant rollback' },
              { title: 'Military-grade encryption', desc: 'End-to-end encryption for all data in transit' },
              { title: 'Global edge network', desc: 'Deploy to 20+ regions with one click' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-3">
                <span className="text-xl shrink-0">{item.icon}</span>
                <div>
                  <h4 className="text-white font-medium text-sm">{item.title}</h4>
                  <p className="text-slate-400 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>

    {/* Bottom CTA banner */}
    <motion.div 
      className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Ready to scale your AI infrastructure?</h3>
          <p className="text-slate-400 text-sm">Join 500+ companies already building on our platform</p>
        </div>
        <Link to="/contact">
        <button className="w-full sm:w-auto px-6 py-3 bg-emerald-500 rounded-lg font-medium text-white hover:bg-emerald-600 transition-colors text-sm whitespace-nowrap">
          Start building →
        </button>
        </Link>
      </div>
    </motion.div>
  </div>
</section>

{/* ================= PREMIUM CONTACT SECTION ================= */}
<section className="relative py-32 bg-[#020617] overflow-hidden">

  {/* Controlled Theme Glow */}
  <div className="absolute -top-40 -left-40 w-[450px] h-[450px] bg-emerald-500/10 blur-[160px] rounded-full" />
  <div className="absolute -bottom-40 -right-40 w-[450px] h-[450px] bg-cyan-500/10 blur-[160px] rounded-full" />

  <div className="container mx-auto px-6 relative z-10">
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* ================= LEFT SIDE CONTENT ================= */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
          Build Intelligence.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            Scale Without Limits.
          </span>
        </h2>

        <p className="mt-8 text-slate-400 text-lg leading-relaxed max-w-xl">
          OrbianAI partners with forward-thinking enterprises to design
          secure, scalable AI ecosystems that automate operations,
          enhance decision-making, and unlock predictive intelligence.
        </p>

        <p className="mt-6 text-slate-500 leading-relaxed max-w-xl">
          Whether you're building from scratch or optimizing existing
          systems, our AI architects engineer infrastructure that
          evolves with your ambition.
        </p>

        {/* Sub Points */}
        <div className="mt-10 space-y-4">
          {[
            "Enterprise-Grade AI Architecture",
            "Secure & Scalable Infrastructure",
            "Predictive & Autonomous Systems"
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * i }}
              className="flex items-center gap-4"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
              <span className="text-slate-300">{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>


      {/* ================= RIGHT SIDE FORM ================= */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative"
      >
        {/* Animated Border Glow Wrapper */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 blur-xl opacity-70" />

        <div className="relative bg-slate-900/70 backdrop-blur-3xl border border-white/10 rounded-3xl p-10 shadow-2xl">
          <h3 className="text-2xl font-semibold text-white mb-8">
            Start Your AI Journey
          </h3>

          <form className="grid gap-6">

            <input
              type="text"
              placeholder="Full Name"
              className="bg-[#0f172a] border border-slate-700 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all rounded-xl px-4 py-3 text-white outline-none"
            />

            <input
              type="email"
              placeholder="Business Email"
              className="bg-[#0f172a] border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all rounded-xl px-4 py-3 text-white outline-none"
            />

            <input
              type="text"
              placeholder="Company Name"
              className="bg-[#0f172a] border border-slate-700 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all rounded-xl px-4 py-3 text-white outline-none"
            />

            <textarea
              rows="4"
              placeholder="Tell us about your AI goals..."
              className="bg-[#0f172a] border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all rounded-xl px-4 py-3 text-white outline-none resize-none"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="relative mt-4 px-8 py-4 bg-gradient-to-r from-emerald-400 to-cyan-400 text-[#020617] font-bold rounded-xl shadow-xl overflow-hidden group"
            >
              <span className="relative z-10">Request Consultation</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </motion.button>

          </form>
        </div>
      </motion.div>

    </div>
  </div>
</section>

    </main>
  );
}