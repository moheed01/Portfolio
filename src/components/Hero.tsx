import { useState, useEffect, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Award, TrendingUp, ShieldCheck, Download } from 'lucide-react';

const GlassArchitecture = lazy(() =>
  import('./GlassArchitecture').then((m) => ({ default: m.GlassArchitecture }))
);

export function Hero() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-grid">
      {/* 3D Glass Architecture Background */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {!isMobile && (
          <Suspense fallback={<div className="w-full h-full bg-transparent" />}>
            <GlassArchitecture />
          </Suspense>
        )}
      </div>

      {/* Atmospheric Gradients */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 20%, rgba(0,229,255,0.12), transparent 55%), radial-gradient(ellipse at 50% 85%, rgba(139,92,246,0.08), transparent 60%)',
        }}
      />

      <div className="relative z-30 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-cyan-400/30 text-cyan-300 text-xs font-mono mb-8 tracking-wider uppercase shadow-[0_0_20px_-5px_rgba(0,229,255,0.3)]"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            FinTech &bull; Financial Modeling &bull; AI/ML
          </motion.div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-heading font-bold text-white tracking-tight mb-6">
            Moheed <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-violet-400">Ul Hassan</span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/80 max-w-2xl mx-auto mb-4 font-light leading-relaxed">
            Financial Technology blending financial engineering, algorithmic portfolio optimization, and institutional finance experience.
          </p>

          <p className="text-sm sm:text-base text-white/50 max-w-xl mx-auto mb-10">
            Dean's List of Honour @ FAST NUCES &bull; Hands-on Accounts Payable &amp; Valuation Experience &bull; Python, ML &amp; Power BI
          </p>

          {/* Quick Stats Pill Row */}
          <div className="grid grid-cols-3 gap-3 max-w-xl mx-auto mb-10">
            <div className="glass px-3 py-3 rounded-xl text-center border border-white/10">
              <div className="text-xl sm:text-2xl font-bold font-heading text-cyan-300 flex items-center justify-center gap-1">
                <Award className="w-4 h-4 text-cyan-400 hidden sm:inline" /> 3.93
              </div>
              <div className="text-[11px] sm:text-xs text-white/60 font-mono mt-0.5">Top Term GPA</div>
            </div>
            <div className="glass px-3 py-3 rounded-xl text-center border border-white/10">
              <div className="text-xl sm:text-2xl font-bold font-heading text-violet-300 flex items-center justify-center gap-1">
                <TrendingUp className="w-4 h-4 text-violet-400 hidden sm:inline" /> 3+
              </div>
              <div className="text-[11px] sm:text-xs text-white/60 font-mono mt-0.5">Finance Roles</div>
            </div>
            <div className="glass px-3 py-3 rounded-xl text-center border border-white/10">
              <div className="text-xl sm:text-2xl font-bold font-heading text-emerald-300 flex items-center justify-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400 hidden sm:inline" /> 6+
              </div>
              <div className="text-[11px] sm:text-xs text-white/60 font-mono mt-0.5">FinTech Projects</div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/projects"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-cyan-400/40 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-white font-semibold hover:border-cyan-300 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_30px_-5px_rgba(0,229,255,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              Explore Portfolio <ArrowUpRight className="w-4 h-4 text-cyan-300" />
            </Link>

            <Link
              to="/resume"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/15 glass hover:bg-white/10 text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              View Resume
            </Link>

            <a
              href="/Moheed_Ul_Hassan_Resume.pdf"
              download
              className="w-full sm:w-auto px-5 py-4 rounded-xl border border-white/10 glass hover:bg-white/10 text-white/80 hover:text-white font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2"
              title="Download PDF Resume"
            >
              <Download className="w-4 h-4 text-cyan-400" /> PDF
            </a>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 hidden md:block"
      >
        <Link to="/about" className="flex flex-col items-center gap-2 text-white/40 hover:text-cyan-300 transition-colors">
          <span className="text-[10px] font-mono tracking-widest uppercase">Scroll Down</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
            <div className="w-1.5 h-2 bg-cyan-400 rounded-full animate-bounce" />
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
