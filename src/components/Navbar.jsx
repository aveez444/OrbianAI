// src/components/Navbar.jsx
import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo2.png"; // your big logo image

const services = [
  {
    label: "AI Services",
    to: "/services/ai-service",
    tag: "Intelligence",
    desc: "Custom ML pipelines and automation.",
  },
  {
    label: "Data Analytics",
    to: "/services/data-analytics",
    tag: "Insights",
    desc: "Dashboards, metrics, and decisions.",
  },
  {
    label: "Web Apps",
    to: "/services/web-dev",
    tag: "Frontend & Platforms",
    desc: "High-performance web experiences.",
  },
  {
    label: "Data Warehouse",
    to: "/services/data-warehouse",
    tag: "Infrastructure",
    desc: "Modern data stack at scale.",
  },
  {
    label: "Cloud",
    to: "/services/cloud",
    tag: "Cloud-native",
    desc: "Secure, scalable cloud solutions.",
  },
  {
    label: "Consulting",
    to: "/services/consulting",
    tag: "Advisory",
    desc: "Strategy, audits, and guidance.",
  },
];

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/aboutus" },
  { label: "Services", to: "/services", hasDropdown: true },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Career", to: "/career" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopShowMore, setDesktopShowMore] = useState(false);
  const [mobileShowMore, setMobileShowMore] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!servicesOpen) setDesktopShowMore(false);
  }, [servicesOpen]);

  useEffect(() => {
    if (!mobileServicesOpen) setMobileShowMore(false);
  }, [mobileServicesOpen]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const linkBase =
    "relative px-3 py-2 text-sm font-medium text-slate-300 hover:text-emerald-300 transition-colors";

  const activeClass =
    "text-emerald-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400";

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-[#020617]/90 backdrop-blur-xl border-b border-emerald-500/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* DESKTOP BAR */}
        <div className="flex h-20 items-center justify-between">
          {/* Logo + Brand */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <div className="relative">

              <img
                src={logo}
                alt="OrbianAI logo"
                className="relative h-28 w-26  object-contain"
              />
            </div>

          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.label}
                  className="relative"
                  ref={dropdownRef}
                >
                  <button
                    type="button"
                    onClick={() => setServicesOpen((prev) => !prev)}
                    className={`${linkBase} flex items-center gap-1`}
                  >
                    <span>Services</span>
                    <span className={`text-xs text-slate-500 transition-transform ${servicesOpen ? "rotate-180" : ""}`}>▾</span>
                  </button>

                  {/* Desktop mega dropdown: 3x3 grid */}
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute right-[-100px] sm:right-auto sm:left-1/2 sm:-translate-x-[65%] top-full mt-4 w-[760px] rounded-2xl border border-emerald-500/20 bg-[#020617]/95 shadow-2xl shadow-emerald-500/20 backdrop-blur-xl p-6"
                      >
                        <div className="mb-4 flex items-center justify-between px-2">
                          <div>
                            <p className="text-sm font-mono text-emerald-400 tracking-[0.15em]">
                              SERVICES
                            </p>
                            <p className="text-base text-slate-400 mt-1">
                              Choose where OrbianAI plugs into your stack.
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mt-2">
                          {services.slice(0, desktopShowMore ? 6 : 3).map((svc) => (
                            <NavLink
                              key={svc.label}
                              to={svc.to}
                              onClick={() => setServicesOpen(false)}
                              className={({ isActive }) =>
                                `group flex flex-col rounded-xl border border-white/5 bg-slate-950/60 p-5 hover:border-emerald-500/40 hover:bg-slate-900/80 transition-colors ${isActive ? "border-emerald-400/60" : ""
                                }`
                              }
                            >
                              <span className="text-xs font-mono uppercase tracking-[0.14em] text-emerald-400 mb-2">
                                {svc.tag}
                              </span>
                              <span className="text-[17px] font-bold text-white mb-2">
                                {svc.label}
                              </span>
                              <span className="text-[13px] text-slate-400 leading-relaxed">
                                {svc.desc}
                              </span>
                              <span className="mt-4 text-xs font-medium text-emerald-300/90 inline-flex items-center gap-1.5">
                                Explore
                                <span className="transition-transform group-hover:translate-x-1">
                                  →
                                </span>
                              </span>
                            </NavLink>
                          ))}
                        </div>

                        {!desktopShowMore && (
                          <div className="mt-4 flex justify-center">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                setDesktopShowMore(true);
                              }}
                              className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-2"
                            >
                              View more services <span className="text-[10px]">▼</span>
                            </button>
                          </div>
                        )}

                        {/* ADD THIS DIVIDER AND "VIEW ALL SERVICES" LINK */}
                        <div className="mt-4 pt-3 border-t border-emerald-500/20">
                          <NavLink
                            to="/services"
                            onClick={() => setServicesOpen(false)}
                            className={({ isActive }) =>
                              `flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${isActive
                                ? "bg-emerald-500/15 text-emerald-300"
                                : "text-slate-300 hover:bg-slate-800/70"
                              }`
                            }
                          >
                            <span className="font-medium">View All Services</span>
                            <span className="text-emerald-400">→</span>
                          </NavLink>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) =>
                    `${linkBase} ${isActive ? activeClass : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex">

          </div>

          {/* MOBILE: logo, name, hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => {
                setMobileOpen((prev) => !prev);
                if (!mobileOpen) setMobileServicesOpen(false);
              }}
              className="relative flex h-10 w-10 flex-col items-center justify-center rounded-full border border-emerald-500/40 bg-slate-900/80 text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Open main menu</span>
              <span
                className={`block h-0.5 w-5 rounded-full bg-slate-100 transition-transform ${mobileOpen ? "translate-y-1.5 rotate-45" : ""
                  }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-slate-100 transition-all ${mobileOpen ? "opacity-0" : "my-[5px]"
                  }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-slate-100 transition-transform ${mobileOpen ? "-translate-y-1.5 -rotate-45" : ""
                  }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE SLIDE-IN MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-30 bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            {/* Panel */}
            <motion.div
              className="fixed top-0 right-0 z-40 h-screen w-full bg-[#020617] border-l border-emerald-500/20 shadow-2xl shadow-emerald-500/30 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Mobile header inside drawer */}
              <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <img
                    src={logo}
                    alt="OrbianAI logo"
                    className="relative h-10 w-10 sm:h-16 sm:w-16 lg:h-20 lg:w-20 object-contain"
                  />
                  <div className="flex flex-col">
                    <span className="text-base font-semibold text-white">
                      OrbianAI
                    </span>

                  </div>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="h-9 w-9 flex items-center justify-center rounded-full border border-slate-700 text-slate-300"
                >
                  ✕
                </button>
              </div>

              {/* Mobile links */}
              <div className="flex-1 overflow-y-auto px-5 py-4 space-y-1">
                {navLinks.map((item) =>
                  item.hasDropdown ? (
                    <div key={item.label} className="pt-2 pb-1">
                      <button
                        type="button"
                        onClick={() =>
                          setMobileServicesOpen((prev) => !prev)
                        }
                        className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-sm font-medium text-slate-200 hover:bg-slate-900/80"
                      >
                        <span>Services</span>
                        <span
                          className={`text-xs transition-transform ${mobileServicesOpen ? "rotate-180" : ""
                            }`}
                        >
                          ▾
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-2 space-y-1 overflow-hidden rounded-lg bg-slate-900/80 border border-slate-800 px-2 py-2"
                          >
                            {services.slice(0, mobileShowMore ? 6 : 3).map((svc) => (
                              <NavLink
                                key={svc.label}
                                to={svc.to}
                                onClick={() => setMobileOpen(false)}
                                className={({ isActive }) =>
                                  `flex flex-col rounded-md px-2 py-2 text-xs ${isActive
                                    ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/40"
                                    : "text-slate-300 hover:bg-slate-800/70"
                                  }`
                                }
                              >
                                <span className="font-semibold">
                                  {svc.label}
                                </span>
                                <span className="text-[11px] text-slate-500">
                                  {svc.desc}
                                </span>
                              </NavLink>
                            ))}

                            {!mobileShowMore && (
                              <div className="flex justify-center py-1">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    setMobileShowMore(true);
                                  }}
                                  className="text-[11px] font-medium text-emerald-400 hover:text-emerald-300"
                                >
                                  View more services ▼
                                </button>
                              </div>
                            )}

                            {/* ADD THIS DIVIDER AND "VIEW ALL SERVICES" LINK FOR MOBILE */}
                            <div className="mt-2 pt-2 border-t border-slate-700">
                              <NavLink
                                to="/services"
                                onClick={() => setMobileOpen(false)}
                                className={({ isActive }) =>
                                  `flex items-center justify-between rounded-md px-2 py-2 text-sm ${isActive
                                    ? "bg-emerald-500/15 text-emerald-300"
                                    : "text-slate-200 hover:bg-slate-800/70"
                                  }`
                                }
                              >
                                <span className="font-medium">View All Services</span>
                                <span className="text-emerald-400 text-xs">→</span>
                              </NavLink>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink
                      key={item.label}
                      to={item.to}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        `block rounded-lg px-2 py-2 text-sm font-medium ${isActive
                          ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/40"
                          : "text-slate-200 hover:bg-slate-900/80"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  )
                )}
              </div>

              {/* Mobile bottom CTA */}
              <div className="border-t border-slate-800 px-5 py-4">
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex w-full items-center justify-center rounded-xl bg-emerald-500 text-[#020617] py-3 text-sm font-semibold shadow-lg shadow-emerald-500/30"
                >
                  Contact OrbianAI
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}