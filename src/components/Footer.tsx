import { Link } from 'react-router-dom';
import { Mail, ArrowUp, Phone, MapPin } from 'lucide-react';
import { personal } from '../lib/content';

function LinkedInIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.54a1.64 1.64 0 1 0 0 3.27 1.64 1.64 0 0 0 0-3.27Z" />
    </svg>
  );
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 mt-24 bg-[#07080D]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 pb-10 border-b border-white/5">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400/25 to-violet-500/25 border border-white/15 flex items-center justify-center">
                <span className="font-heading font-bold text-xs text-cyan-300">MH</span>
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-white">Moheed Ul Hassan</h4>
                <p className="text-xs text-cyan-300">{personal.title}</p>
              </div>
            </div>
            <p className="text-xs text-white/50 max-w-sm leading-relaxed">
              FAST NUCES Financial Technology specialist with expertise in quantitative analysis, institutional accounts payable, financial modeling, and machine learning.
            </p>
            <div className="flex items-center gap-2 text-xs text-white/40 pt-1">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{personal.location}</span>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs">
            <div>
              <span className="font-mono text-[11px] text-white/40 uppercase tracking-wider block mb-2.5">
                Navigation
              </span>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-white/70 hover:text-cyan-300 transition-colors">About</Link></li>
                <li><Link to="/projects" className="text-white/70 hover:text-cyan-300 transition-colors">Projects</Link></li>
                <li><Link to="/experience" className="text-white/70 hover:text-cyan-300 transition-colors">Experience</Link></li>
                <li><Link to="/skills" className="text-white/70 hover:text-cyan-300 transition-colors">Skills</Link></li>
              </ul>
            </div>
            <div>
              <span className="font-mono text-[11px] text-white/40 uppercase tracking-wider block mb-2.5">
                Credentials
              </span>
              <ul className="space-y-2">
                <li><Link to="/education" className="text-white/70 hover:text-cyan-300 transition-colors">Education</Link></li>
                <li><Link to="/resume" className="text-white/70 hover:text-cyan-300 transition-colors">Resume CV</Link></li>
                <li><Link to="/contact" className="text-white/70 hover:text-cyan-300 transition-colors">Contact</Link></li>
                <li>
                  <a href="/Moheed_Ul_Hassan_Resume.pdf" download className="text-cyan-300 hover:text-cyan-200 transition-colors">
                    Download PDF
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Direct Communication */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-[11px] text-white/40 uppercase tracking-wider block">
              Direct Contact
            </span>
            <div className="space-y-2 text-xs">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2 text-white/70 hover:text-cyan-300 transition-colors truncate"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span className="truncate">{personal.email}</span>
              </a>
              <a
                href="tel:+923129700356"
                className="flex items-center gap-2 text-white/70 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span>+92 312 9700356</span>
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-cyan-300 transition-colors"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© 2026 Moheed Ul Hassan. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors cursor-pointer"
          >
            Back to Top <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
