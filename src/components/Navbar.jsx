import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled || mobileMenuOpen
          ? "bg-slate-900/95 backdrop-blur-xl shadow-lg border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}
          <Link
            to="/"
            className="text-xl sm:text-2xl font-semibold tracking-tight"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="text-white">Orbian</span>
            <span className="text-emerald-400">AI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-slate-300 font-medium">
            <a href="#" className="relative group hover:text-white transition-colors">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-400 transition-all group-hover:w-full"></span>
            </a>
            <a href="#" className="relative group hover:text-white transition-colors">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-400 transition-all group-hover:w-full"></span>
            </a>
            <a href="/aboutus" className="relative group hover:text-white transition-colors">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-400 transition-all group-hover:w-full"></span>
            </a>
            <a href="#" className="relative group hover:text-white transition-colors">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-400 transition-all group-hover:w-full"></span>
            </a>
          </nav>

          {/* Desktop CTA */}
          <button className="hidden md:inline-flex items-center px-5 lg:px-6 py-2 rounded-full bg-emerald-500 text-white text-sm lg:text-base font-medium hover:bg-emerald-600 transition-all duration-300 shadow-md hover:shadow-emerald-500/40">
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5">
              <span 
                className={`absolute left-0 w-full h-0.5 bg-emerald-400 transition-all duration-300 ${
                  mobileMenuOpen ? 'top-2 rotate-45' : 'top-0'
                }`}
              />
              <span 
                className={`absolute left-0 w-full h-0.5 bg-emerald-400 transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : 'top-2'
                }`}
              />
              <span 
                className={`absolute left-0 w-full h-0.5 bg-emerald-400 transition-all duration-300 ${
                  mobileMenuOpen ? 'top-2 -rotate-45' : 'top-4'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-900/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{ top: '64px' }} // 16px * 4 = 64px (h-16)
      >
        <div className="flex flex-col h-full p-8 pt-12">
          {/* Mobile Navigation Links */}
          <nav className="flex flex-col gap-6">
            {[
              { name: 'Home', href: '#' },
              { name: 'Services', href: '#' },
              { name: 'About', href: '#' },
              { name: 'Contact', href: '#' }
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-2xl text-slate-300 font-medium hover:text-white transition-colors relative group w-fit"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="mt-12">
            <button className="w-full py-4 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 transition-all duration-300 shadow-lg hover:shadow-emerald-500/40 text-lg">
              Get Started
            </button>
          </div>

          {/* Mobile Footer Links */}
          <div className="mt-auto pt-12">
            <div className="flex flex-col gap-4 text-slate-400 text-sm">
              <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}