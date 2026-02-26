
export default function Footer() {
    return (
      <footer className="bg-slate-900 text-slate-300 relative overflow-hidden">
        
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[140px]"></div>
  
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20">
  
          <div className="grid md:grid-cols-3 gap-12">
  
            {/* Brand */}
            <div>
              <h2 className="text-2xl font-semibold text-white">
                Orbian<span className="text-emerald-500">AI</span>
              </h2>
              <p className="mt-6 text-slate-400 leading-relaxed">
                Building intelligent systems that transform businesses through
                advanced AI, automation, and scalable digital architecture.
              </p>
            </div>
  
            {/* Links */}
            <div>
              <h3 className="text-white font-medium mb-6">Company</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="hover:text-emerald-400 transition cursor-pointer">About Us</li>
                <li className="hover:text-emerald-400 transition cursor-pointer">Services</li>
                <li className="hover:text-emerald-400 transition cursor-pointer">Careers</li>
                <li className="hover:text-emerald-400 transition cursor-pointer">Contact</li>
              </ul>
            </div>
  
            {/* Contact */}
            <div>
              <h3 className="text-white font-medium mb-6">Get in Touch</h3>
              <p className="text-slate-400">
                hello@orbianai.com
              </p>
              <p className="text-slate-400 mt-2">
                Pune, India
              </p>
            </div>
          </div>
  
          <div className="border-t border-slate-800 mt-16 pt-8 text-center text-slate-500 text-sm">
            © {new Date().getFullYear()} OrbianAI. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }