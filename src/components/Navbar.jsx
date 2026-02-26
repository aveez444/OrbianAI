// Navbar.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [location]);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.services-dropdown') && !e.target.closest('.services-trigger')) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const services = [
    { 
      name: "Web App Development", 
      path: "/services/web-dev", 
      description: "Modern web applications",
      icon: (className) => (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    { 
      name: "Software Development", 
      path: "/services/software-dev", 
      description: "Custom software solutions",
      icon: (className) => (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      name: "Data Analytics", 
      path: "/services/data-analytics", 
      description: "Transform data into insights",
      icon: (className) => (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    { 
      name: "Data Warehouse", 
      path: "/services/data-warehouse", 
      description: "Scalable data storage",
      icon: (className) => (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    },
    { 
      name: "AI & Automation", 
      path: "/services/ai-service", 
      description: "Intelligent automation",
      icon: (className) => (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      )
    }
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled || mobileMenuOpen
          ? "bg-slate-900/95 backdrop-blur-xl shadow-lg border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo with enhanced styling */}
          <Link
            to="/"
            className="text-xl sm:text-2xl font-bold tracking-tight group"
          >
            <span className="text-white group-hover:text-emerald-400 transition-colors">Orbian</span>
            <span className="text-emerald-400">AI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-slate-300 font-medium">
            <Link 
              to="/" 
              className={`relative px-4 py-2 rounded-full hover:bg-slate-800/50 transition-all ${
                isActivePath('/') 
                  ? 'text-emerald-400 bg-slate-800/30' 
                  : 'hover:text-white'
              }`}
            >
              Home
              {isActivePath('/') && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-400 rounded-full"></span>
              )}
            </Link>
            
            {/* Services Dropdown - Enhanced */}
            <div className="relative">
              <button
                className={`services-trigger px-4 py-2 rounded-full flex items-center gap-2 transition-all ${
                  isActivePath('/services') || services.some(s => location.pathname.startsWith('/services/'))
                    ? 'text-emerald-400 bg-slate-800/30' 
                    : 'hover:text-white hover:bg-slate-800/50'
                }`}
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => setServicesOpen(true)}
              >
                <span>Services</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${
                    servicesOpen ? 'rotate-180 text-emerald-400' : ''
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Enhanced Dropdown Menu */}
              <div 
                className={`services-dropdown absolute left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden ${
                  servicesOpen 
                    ? 'opacity-100 visible translate-y-0' 
                    : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                }`}
                onMouseLeave={() => setServicesOpen(false)}
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-emerald-600/20 to-transparent p-4 border-b border-slate-800">
                  <h3 className="text-white font-semibold">Our Services</h3>
                  <p className="text-sm text-slate-400">Comprehensive solutions for your business</p>
                </div>

                {/* Services Grid */}
                <div className="p-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className={`flex items-start gap-3 p-3 rounded-xl transition-all ${
                        location.pathname === service.path 
                          ? 'bg-emerald-600/20 text-emerald-400' 
                          : 'text-slate-300 hover:bg-slate-800/50 hover:text-emerald-400'
                      }`}
                      onClick={() => setServicesOpen(false)}
                    >
                      <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                        location.pathname === service.path
                          ? 'bg-emerald-600/30 text-emerald-400'
                          : 'bg-slate-800 text-slate-400 group-hover:bg-emerald-600/30'
                      }`}>
                        {service.icon('w-5 h-5')}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{service.name}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{service.description}</div>
                      </div>
                      {location.pathname === service.path && (
                        <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </Link>
                  ))}
                </div>

                {/* Footer Link */}
                <div className="p-2 border-t border-slate-800">
                  <Link
                    to="/services"
                    className="flex items-center justify-between p-3 rounded-xl text-emerald-400 hover:bg-slate-800/50 transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    <span className="font-medium">View All Services</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <Link 
              to="/aboutus" 
              className={`relative px-4 py-2 rounded-full hover:bg-slate-800/50 transition-all ${
                isActivePath('/aboutus') 
                  ? 'text-emerald-400 bg-slate-800/30' 
                  : 'hover:text-white'
              }`}
            >
              About
              {isActivePath('/aboutus') && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-400 rounded-full"></span>
              )}
            </Link>
            
            <Link 
              to="/contact" 
              className={`relative px-4 py-2 rounded-full hover:bg-slate-800/50 transition-all ${
                isActivePath('/contact') 
                  ? 'text-emerald-400 bg-slate-800/30' 
                  : 'hover:text-white'
              }`}
            >
              Contact
              {isActivePath('/contact') && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-400 rounded-full"></span>
              )}
            </Link>
          </nav>

          {/* Desktop CTA - Enhanced */}
          <div className="hidden md:flex items-center gap-3">
            <Link 
              to="/contact" 
              className="px-5 lg:px-6 py-2 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-sm lg:text-base font-medium hover:from-emerald-500 hover:to-emerald-600 transition-all duration-300 shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button - Enhanced */}
          <button 
            className="md:hidden relative w-10 h-10 flex items-center justify-center z-50"
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

      {/* Mobile Menu Overlay - Enhanced */}
      <div 
        className={`fixed inset-0 bg-slate-900/98 backdrop-blur-xl transition-all duration-500 md:hidden ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{ top: '64px' }}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="p-6 pb-32">
            {/* Mobile Navigation Links */}
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                className={`flex items-center gap-3 text-xl py-3 px-4 rounded-xl transition-all ${
                  isActivePath('/') 
                    ? 'bg-emerald-600/20 text-emerald-400' 
                    : 'text-slate-300 hover:bg-slate-800/50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </Link>
              
              {/* Mobile Services Section - Enhanced */}
              <div className="space-y-1">
                <div className={`flex items-center gap-3 text-xl py-3 px-4 rounded-xl ${
                  isActivePath('/services') || services.some(s => location.pathname.startsWith('/services/'))
                    ? 'text-emerald-400'
                    : 'text-slate-300'
                }`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Services
                </div>
                <div className="pl-4 space-y-1">
                  <Link
                    to="/services"
                    className={`flex items-center gap-3 py-2 px-4 rounded-lg text-sm transition-colors ${
                      isActivePath('/services')
                        ? 'bg-emerald-600/20 text-emerald-400'
                        : 'text-slate-400 hover:bg-slate-800/50 hover:text-emerald-400'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    All Services
                  </Link>
                  
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className={`flex items-center gap-3 py-2 px-4 rounded-lg text-sm transition-colors ${
                        location.pathname === service.path
                          ? 'bg-emerald-600/20 text-emerald-400'
                          : 'text-slate-400 hover:bg-slate-800/50 hover:text-emerald-400'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="w-4 h-4 flex items-center justify-center">
                        {service.icon('w-4 h-4')}
                      </span>
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/aboutus"
                className={`flex items-center gap-3 text-xl py-3 px-4 rounded-xl transition-all ${
                  isActivePath('/aboutus') 
                    ? 'bg-emerald-600/20 text-emerald-400' 
                    : 'text-slate-300 hover:bg-slate-800/50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                About
              </Link>

              <Link
                to="/contact"
                className={`flex items-center gap-3 text-xl py-3 px-4 rounded-xl transition-all ${
                  isActivePath('/contact') 
                    ? 'bg-emerald-600/20 text-emerald-400' 
                    : 'text-slate-300 hover:bg-slate-800/50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact
              </Link>
            </nav>

            {/* Mobile CTA */}
            <div className="mt-8 px-4">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-medium rounded-xl hover:from-emerald-500 hover:to-emerald-600 transition-all shadow-lg shadow-emerald-600/25">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Mobile Footer Links - Enhanced */}
            <div className="mt-12 px-4">
              <div className="border-t border-slate-800 pt-6">
                <div className="flex flex-col gap-3 text-sm">
                  <Link to="/privacy" className="text-slate-500 hover:text-emerald-400 transition-colors">
                    Privacy Policy
                  </Link>
                  <Link to="/terms" className="text-slate-500 hover:text-emerald-400 transition-colors">
                    Terms of Service
                  </Link>
                  <div className="flex gap-4 mt-4">
                    <a href="#" className="text-slate-500 hover:text-emerald-400 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="text-slate-500 hover:text-emerald-400 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a href="#" className="text-slate-500 hover:text-emerald-400 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}