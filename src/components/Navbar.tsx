import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/skills', label: 'Skills' },
  { to: '/education', label: 'Education' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-cyan-400 focus:text-black focus:font-semibold"
      >
        Skip to main content
      </a>

      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3.5"
      >
        <nav
          className={`flex items-center justify-between gap-2 px-4 py-2.5 rounded-2xl transition-all duration-300 ${
            scrolled ? 'glass-strong shadow-2xl border border-white/10' : 'bg-transparent border border-transparent'
          } w-full max-w-7xl backdrop-blur-md`}
        >
          {/* Logo / Monogram */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400/25 to-violet-500/25 border border-white/15 flex items-center justify-center group-hover:border-cyan-400/50 transition-colors shadow-[0_0_15px_-3px_rgba(0,229,255,0.3)]">
              <span className="font-heading font-bold text-xs text-cyan-300">MH</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-heading font-semibold text-sm tracking-wide text-white group-hover:text-cyan-300 transition-colors">
                Moheed Ul Hassan
              </span>
              <span className="text-[10px] font-mono text-white/50 -mt-0.5">FinTech Professional</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const active = location.pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  aria-current={active ? 'page' : undefined}
                  className={`relative px-3 py-1.5 text-xs font-medium transition-colors rounded-lg ${
                    active ? 'text-cyan-300 font-semibold' : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-1 left-2.5 right-2.5 h-[2px] bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Quick CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              to="/contact"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cyan-400/10 hover:bg-cyan-400/20 border border-cyan-400/30 text-xs font-medium text-cyan-300 transition-all shadow-[0_0_15px_-5px_rgba(0,229,255,0.3)]"
            >
              Get in Touch <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 min-w-[40px] min-h-[40px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          className="fixed top-18 left-4 right-4 z-40 lg:hidden"
        >
          <div className="glass-strong rounded-2xl p-4 shadow-2xl border border-white/15">
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setMobileOpen(false)}
                  aria-current={location.pathname === l.to ? 'page' : undefined}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                    location.pathname === l.to
                      ? 'bg-cyan-400/15 text-cyan-300 font-semibold'
                      : 'text-white/80 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{l.label}</span>
                  {location.pathname === l.to && (
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  )}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
