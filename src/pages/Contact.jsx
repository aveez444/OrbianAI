import { motion } from "framer-motion";
import { useRef, useState } from "react";

// Images — you’ll need to download and place these in your assets folder
// 1. A minimalist office / team collaboration shot (well-lit, modern)   → contact-office.jpg
// 2. Abstract tech pattern (you mentioned contact-pattern.png)          → contact-pattern.png
import officeImage from "../assets/contact-office.png";        // <-- DOWNLOAD: modern office/team image
import patternImage from "../assets/contact-pattern.png";      // <-- DOWNLOAD: abstract tech pattern

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const staggerChildren = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission (console log for now)
    console.log("Form submitted:", formData);
  };

  return (
    <main className="bg-[#020617] text-slate-200 selection:bg-emerald-500/30 overflow-x-hidden">

     {/* ========== SECTION 1: INTRO BANNER (ABOVE HERO) ========== */}
     <section className="relative pt-40 pb-16 overflow-hidden">
        {/* Pattern overlay - more subtle but larger scale */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url(${patternImage})`,
            backgroundSize: '600px',
            backgroundRepeat: 'repeat',
          }}
        />
        
        {/* Ambient glow for depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/5 blur-[180px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
          >
            {/* Decorative element */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-emerald-400 font-mono text-sm tracking-widest">CONNECT</span>
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Let's build something
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                that matters.
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl sm:text-2xl text-slate-400 max-w-2xl font-light leading-relaxed"
            >
              Every conversation starts here. Tell us about your work, 
              your questions, or what you're trying to solve.
            </motion.p>

            {/* Subtle scroll indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-12"
            >
             
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========== HERO / PAGE HEADER (MIDDLE SECTION) ========== */}
      <section className="relative py-12 overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-500/6 blur-[200px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/6 blur-[180px] rounded-full pointer-events-none" />

        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(52,211,153,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.6) 1px, transparent 1px)`,
            backgroundSize: "70px 70px",
          }}
        />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-mono mb-6">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              LET'S CONNECT
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-6">
              Talk to the team
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                behind the code.
              </span>
            </h1>
            <p className="text-slate-400 text-lg lg:text-xl max-w-2xl leading-relaxed">
              Whether you're evaluating enterprise AI, have a technical question, or just want to explore what's possible — we're here.
            </p>
          </motion.div>
        </div>
      </section>



      {/* ========== CONTACT FORM + DETAILS ========== */}
      <section className="relative pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

            {/* LEFT: FORM */}
            <motion.div
              variants={staggerChildren}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <motion.div variants={fadeInUp} className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-3">Send a message</h2>
                <p className="text-slate-400">We'll get back to you within 2 business days.</p>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-mono text-slate-400 mb-2">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-5 py-4 text-white placeholder:text-slate-600 focus:border-emerald-500/40 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 transition-colors"
                      placeholder="Alex Chen"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-mono text-slate-400 mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-5 py-4 text-white placeholder:text-slate-600 focus:border-emerald-500/40 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 transition-colors"
                      placeholder="alex@company.com"
                    />
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label htmlFor="company" className="block text-sm font-mono text-slate-400 mb-2">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-5 py-4 text-white placeholder:text-slate-600 focus:border-emerald-500/40 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 transition-colors"
                    placeholder="OrbianAI (optional)"
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label htmlFor="message" className="block text-sm font-mono text-slate-400 mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-5 py-4 text-white placeholder:text-slate-600 focus:border-emerald-500/40 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 transition-colors resize-none"
                    placeholder="Tell us about your project, question, or idea..."
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <button
                    type="submit"
                    className="group relative w-full sm:w-auto px-8 py-4 bg-emerald-500 text-[#020617] font-bold rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25"
                  >
                    <span className="relative z-10">Send message</span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </button>
                </motion.div>
              </form>
            </motion.div>

            {/* RIGHT: OFFICE IMAGE + CONTACT INFO */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="sticky top-24">
                {/* main image */}
                <div className="relative rounded-3xl overflow-hidden border border-white/8 mb-8">
                  <img
                    src={officeImage}
                    alt="OrbianAI office"
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/70 via-transparent to-transparent" />

                  {/* floating badge */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-5 left-5 px-4 py-3 rounded-xl bg-slate-900/80 backdrop-blur-sm border border-white/10"
                  >
                    <div className="flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                      <span className="text-slate-300">usually replies within a few hours</span>
                    </div>
                  </motion.div>
                </div>

                {/* contact details */}
                <div className="space-y-5">
                  {[
                    { icon: "✉️", label: "Email", value: "hello@orbian.ai", link: "mailto:hello@orbian.ai" },
                    { icon: "📞", label: "Phone", value: "+1 (415) 555 0198", link: "tel:+14155550198" },
                    { icon: "📍", label: "HQ", value: "San Francisco, CA", link: null },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/30 border border-white/5 backdrop-blur-sm">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <p className="text-xs font-mono text-slate-500 mb-0.5">{item.label}</p>
                        {item.link ? (
                          <a href={item.link} className="text-white hover:text-emerald-400 transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-white">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

       {/* ========== LOCATIONS / OFFICES ========== */}
       <section className="relative py-32">
        {/* Background depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-emerald-400 font-mono text-sm tracking-widest block mb-4">
              OUR LOCATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              We're global, just like our clients.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { 
                city: "San Francisco", 
                address: "548 Market St", 
                detail: "Suite 101",
                time: "8:30 AM — 6:00 PM PT",
                region: "west coast"
              },
              { 
                city: "New York", 
                address: "20 W 34th St", 
                detail: "12th Floor",
                time: "9:00 AM — 7:00 PM ET",
                region: "east coast"
              },
              { 
                city: "London", 
                address: "25 Cabot Square", 
                detail: "Canary Wharf",
                time: "9:00 AM — 5:30 PM GMT",
                region: "europe"
              },
              { 
                city: "Singapore", 
                address: "80 Robinson Rd", 
                detail: "#16-00",
                time: "9:00 AM — 6:00 PM SGT",
                region: "asia pacific"
              },
            ].map((loc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative"
              >
                {/* Card background with hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-6 rounded-2xl border border-white/5 hover:border-emerald-500/20 transition-colors duration-300">
                  {/* City with accent line */}
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-bold text-white">{loc.city}</h3>
                    <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/40 to-transparent" />
                  </div>
                  
                  {/* Address */}
                  <div className="space-y-1 mb-4">
                    <p className="text-slate-300 text-sm">{loc.address}</p>
                    <p className="text-slate-500 text-sm">{loc.detail}</p>
                  </div>
                  
                  {/* Region tag */}
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-xs font-mono text-slate-400 mb-4">
                    {loc.region}
                  </span>
                  
                  {/* Hours */}
                  <div className="flex items-center gap-2 text-xs text-slate-600 border-t border-white/5 pt-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/40" />
                    {loc.time}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center text-slate-600 text-sm mt-12 font-mono"
          >
            * All offices are operational — reach out to the one closest to you.
          </motion.p>
        </div>
      </section>

      {/* ========== MINIMAL CTA ========== */}
      <section className="relative pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-emerald-500/5 border border-emerald-500/10 rounded-3xl p-10 text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Need immediate technical support?
            </h2>
            <p className="text-slate-400 mb-6">
              Existing clients can reach our engineering team 24/7.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-mono text-sm transition-colors"
            >
              <span>→ support.orbian.ai</span>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}