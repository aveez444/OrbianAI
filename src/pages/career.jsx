// Career.jsx - Professional dark-themed career page
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

const staggerChildren = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.08 },
};

// Job listings data
const jobListings = [
  {
    id: 1,
    title: "Senior Backend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "5+ years",
    description: "Design and build scalable backend systems, microservices, and APIs that power our AI-driven solutions.",
    requirements: ["Go/Python", "PostgreSQL", "Kubernetes", "Distributed systems"],
    applyUrl: "https://docs.google.com/forms/d/1eeqiTsqE4w_l-HCM4AHYsqFpSkum5APL6MhqE-S05tA/edit",
  },
  {
    id: 2,
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    description: "Create responsive, performant web applications with modern React and cutting-edge UI architectures.",
    requirements: ["React/Next.js", "TypeScript", "Tailwind CSS", "State management"],
    applyUrl: "https://docs.google.com/forms/d/e/1FAIpQLScHoYnkpqtD7BDtGPKakJv-VqtBhtAghESpwixqeT2o0ULNLw/viewform?usp=publish-editor",
  },
  {
    id: 3,
    title: "Cloud services Architect",
    department: "services",
    location: "Remote",
    type: "Full-time",
    experience: "7+ years",
    description: "Design and implement multi-cloud strategies, optimize costs, and ensure high availability across AWS/Azure/GCP.",
    requirements: ["AWS/Azure/GCP", "Terraform", "Kubernetes", "Networking"],
    applyUrl: "https://docs.google.com/forms/d/e/1FAIpQLSd3_zhe70-AKvmF38WtwaLFJqxMChucCcNthVEqF4rEgYSDHg/viewform?usp=publish-editor",
  },
  {
    id: 4,
    title: "Data Engineer",
    department: "Data & Analytics",
    location: "Remote",
    type: "Full-time",
    experience: "4+ years",
    description: "Build and maintain data pipelines, warehouses, and ETL processes that power our analytics platform.",
    requirements: ["Python", "Spark", "Airflow", "Snowflake/BigQuery"],
    applyUrl: "https://docs.google.com/forms/d/e/1FAIpQLSf6dPr8VT-8yiPzwyamHA04QXThcGwsbuhw2LlDfl0auC3g8w/viewform?usp=publish-editor",
  },
  {
    id: 5,
    title: "AI/ML Engineer",
    department: "AI & Automation",
    location: "Remote",
    type: "Full-time",
    experience: "4+ years",
    description: "Develop and deploy machine learning models, LLM integrations, and intelligent automation solutions.",
    requirements: ["PyTorch/TF", "LLMs", "Python", "ML Ops"],
    applyUrl: "https://docs.google.com/forms/d/1eeqiTsqE4w_l-HCM4AHYsqFpSkum5APL6MhqE-S05tA/edit",
  },
  {
    id: 6,
    title: "DevOps Engineer",
    department: "services",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    description: "Streamline deployment processes, manage CI/CD pipelines, and ensure system reliability and performance.",
    requirements: ["CI/CD", "Docker", "Kubernetes", "Monitoring"],
    applyUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdabszeZMTOgJ7izMJ6UjxFgO7gAK-XnqMQxg3gmjfLJnWohQ/viewform?usp=publish-editor",
  },
  {
    id: 7,
    title: "Security Engineer",
    department: "Security",
    location: "Remote",
    type: "Full-time",
    experience: "5+ years",
    description: "Implement security best practices, conduct audits, and protect services from emerging threats.",
    requirements: ["Application security", "IAM", "Penetration testing", "Compliance"],
    applyUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdnU19y0SQv0neQvrX1woIKHTHcM26yklCFvCASduSKSww9DQ/viewform?usp=publish-editor",
  },
  {
    id: 8,
    title: "Technical Product Manager",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    experience: "6+ years",
    description: "Bridge the gap between engineering and business, define roadmaps, and deliver enterprise-grade products.",
    requirements: ["Technical background", "Agile", "User research", "Go-to-market"],
    applyUrl: "https://docs.google.com/forms/d/e/1FAIpQLSd-ealYf-S2l5VNLxDlbciiDrCN_mvcgGGgwbip0IrJocCKbA/viewform?usp=publish-editor",
  },
];

// Department filter options
const departments = [
  "All Departments",
  "Engineering",
  "services",
  "Data & Analytics",
  "AI & Automation",
  "Security",
  "Product",
];

export default function Career() {
  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Filter jobs based on department and search
  const filteredJobs = jobListings.filter((job) => {
    const matchesDept = selectedDept === "All Departments" || job.department === selectedDept;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.requirements.some(req => req.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesDept && (searchTerm === "" || matchesSearch);
  });

  const handleApply = (applyUrl) => {
    window.open(applyUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="bg-[#030c18] text-slate-200 selection:bg-emerald-500/30 min-h-screen overflow-x-hidden">
      {/* Header Section */}
      <section className="relative pt-40 pb-16 overflow-hidden">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(52,211,153,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/5 blur-[180px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-emerald-400 font-mono text-sm tracking-widest">JOIN US</span>
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Build the future
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                with us.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed"
            >
              We're looking for passionate builders who want to solve complex problems
              and create technology that matters.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="relative py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              { title: "Remote-first culture", desc: "Work from anywhere. We trust you to do your best work, wherever you are." },
              { title: "Cutting-edge tech", desc: "Stay ahead with the latest tools, frameworks, and AI technologies." },
              { title: "Growth mindset", desc: "Learning stipends, conferences, and time to explore new ideas." },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="text-center p-6 rounded-2xl border border-white/5 bg-slate-900/20"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="relative py-8">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center border-y border-slate-800/60 py-6">
            {/* Department filters */}
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-4 py-2 rounded-full font-mono text-xs transition-all ${selectedDept === dept
                      ? "bg-emerald-500 text-[#030c18] font-semibold"
                      : "bg-slate-900/60 text-slate-400 border border-slate-800 hover:border-emerald-500/30 hover:text-slate-300"
                    }`}
                >
                  {dept}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="w-full md:w-auto">
              <input
                type="text"
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-64 bg-slate-900/50 border border-slate-800 rounded-full px-5 py-2 text-white placeholder:text-slate-600 focus:border-emerald-500/40 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="relative py-12 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Results count */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm text-slate-600 font-mono mb-6"
          >
            {filteredJobs.length} open {filteredJobs.length === 1 ? "position" : "positions"}
          </motion.p>

          {/* Job cards */}
          <div className="space-y-4">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative p-6 rounded-2xl border border-slate-800/60 bg-slate-900/20 hover:border-slate-700 transition-colors">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    {/* Left: Job info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap mb-2">
                        <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                        <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                          <span className="text-xs font-mono text-emerald-400">{job.department}</span>
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-3">
                        <span className="flex items-center gap-1">📍 {job.location}</span>
                        <span className="flex items-center gap-1">⏱️ {job.type}</span>
                      </div>

                      <p className="text-slate-400 text-sm mb-4 max-w-2xl">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {job.requirements.map((req, i) => (
                          <span
                            key={i}
                            className="text-xs text-slate-600 bg-slate-900/60 px-2.5 py-1 rounded-full border border-slate-800"
                          >
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Apply button */}
                    <div className="lg:text-right">
                      <button
                        onClick={() => handleApply(job.applyUrl)}
                        className="px-6 py-3 bg-emerald-500 text-[#030c18] font-semibold rounded-xl hover:scale-105 transition-transform hover:shadow-lg hover:shadow-emerald-500/25 text-sm whitespace-nowrap"
                      >
                        Apply Now →
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No results message */}
          {filteredJobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-slate-600 text-lg">No positions match your criteria</p>
              <button
                onClick={() => {
                  setSelectedDept("All Departments");
                  setSearchTerm("");
                }}
                className="mt-4 text-emerald-400 hover:text-emerald-300 font-mono text-sm"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-slate-800/60 bg-slate-900/20 rounded-2xl p-10 text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl font-semibold text-white mb-3">
              Don't see the right role?
            </h2>
            <p className="text-slate-400 mb-6">
              We're always looking for exceptional talent. Send us your resume and we'll keep you in mind.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="px-6 py-3 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 hover:border-emerald-500/50 rounded-xl font-mono text-sm transition-colors"
            >
              General Application →
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer note */}
      <div className="border-t border-slate-800/60 py-6">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="text-center text-xs text-slate-700 font-mono">
            OrbianAI is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.
          </p>
        </div>
      </div>
    </main>
  );
}