import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from './Layout';
import { GlassCard } from './GlassCard';
import { projects } from '../lib/content';
import { ArrowUpRight, X, Sparkles, TrendingUp, Cpu, Database, PieChart, Layers } from 'lucide-react';

const categories = ['All', 'FinTech', 'Finance', 'AI/ML', 'Blockchain'];

function getCategoryIcon(category: string) {
  switch (category) {
    case 'FinTech':
      return TrendingUp;
    case 'AI/ML':
      return Cpu;
    case 'Finance':
      return PieChart;
    case 'Blockchain':
      return Database;
    default:
      return Layers;
  }
}

function getCategoryGradient(category: string) {
  switch (category) {
    case 'FinTech':
      return 'from-cyan-500/20 via-blue-500/10 to-transparent border-cyan-400/30';
    case 'AI/ML':
      return 'from-violet-500/20 via-fuchsia-500/10 to-transparent border-violet-400/30';
    case 'Finance':
      return 'from-emerald-500/20 via-teal-500/10 to-transparent border-emerald-400/30';
    case 'Blockchain':
      return 'from-amber-500/20 via-orange-500/10 to-transparent border-amber-400/30';
    default:
      return 'from-cyan-500/20 to-violet-500/10 border-white/10';
  }
}

export function Projects() {
  const [active, setActive] = useState('All');
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);
  const selectedProject = projects.find((p) => p.title === selectedTitle);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedTitle(null);
    };
    if (selectedTitle) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedTitle]);

  return (
    <Layout
      eyebrow="Portfolio &amp; Research"
      title="Featured Projects"
      subtitle="Selected works spanning quantitative portfolio optimization, machine learning forecasting, cybersecurity, and financial engineering."
    >
      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2.5 mb-10">
        {categories.map((c) => {
          const isSelected = active === c;
          return (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                isSelected
                  ? 'bg-cyan-400/20 border border-cyan-400/50 text-cyan-300 shadow-[0_0_20px_-5px_rgba(0,229,255,0.4)]'
                  : 'bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => {
            const Icon = getCategoryIcon(project.category);
            const gradientClass = getCategoryGradient(project.category);

            return (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="h-full"
              >
                <GlassCard delay={i * 0.05} className="h-full flex flex-col justify-between p-6 sm:p-7 relative overflow-hidden group">
                  <div>
                    {/* Header Banner */}
                    <div className={`p-4 rounded-xl mb-5 bg-gradient-to-br ${gradientClass} border flex items-center justify-between`}>
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-lg bg-black/40 flex items-center justify-center text-white">
                          <Icon className="w-5 h-5 text-cyan-300" />
                        </div>
                        <span className="text-xs font-mono font-medium text-cyan-200 uppercase tracking-wider">
                          {project.category}
                        </span>
                      </div>
                      {project.title.includes('AI-Enhanced') && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" /> FYP
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-heading font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-white/60 leading-relaxed mb-5 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono text-white/50 px-2 py-0.5 rounded bg-white/5 border border-white/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* View Details Button */}
                    <button
                      onClick={() => setSelectedTitle(project.title)}
                      className="w-full py-2.5 px-4 rounded-lg bg-white/5 hover:bg-cyan-400/10 border border-white/10 hover:border-cyan-400/30 text-xs font-medium text-white/80 hover:text-cyan-300 transition-all flex items-center justify-center gap-1.5"
                    >
                      View Project Details <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Modal Detail View */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedTitle(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="glass-strong rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/20 p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-mono text-cyan-300 tracking-wider uppercase px-2.5 py-1 rounded bg-cyan-400/10 border border-cyan-400/20">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mt-3">
                    {selectedProject.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedTitle(null)}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-white/70 leading-relaxed mb-6 text-sm sm:text-base">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((t: string) => (
                  <span
                    key={t}
                    className="text-xs font-mono text-cyan-200 px-2.5 py-1 rounded-md bg-white/5 border border-white/15"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              <div className="pt-6 border-t border-white/10">
                <h4 className="text-xs font-mono text-cyan-300 uppercase tracking-wider mb-4">
                  Key Technical Implementation &amp; Highlights
                </h4>
                <div className="space-y-3">
                  {selectedProject.details.map((detail: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-white/80 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
