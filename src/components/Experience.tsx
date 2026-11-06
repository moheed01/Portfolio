import { Layout } from './Layout';
import { GlassCard } from './GlassCard';
import { Image } from './Image';
import { experience } from '../lib/content';
import { Building2, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export function Experience() {
  return (
    <Layout
      eyebrow="Career Timeline"
      title="Work Experience"
      subtitle="Hands-on institutional finance, accounts payable, financial modeling, and strategic communications experience."
    >
      <div className="space-y-8 relative">
        {/* Continuous timeline line on large screens */}
        <div className="hidden lg:block absolute left-8 top-10 bottom-10 w-px bg-gradient-to-b from-cyan-400/40 via-violet-500/30 to-transparent" />

        {experience.map((exp, index) => (
          <GlassCard key={`${exp.company}-${exp.period}`} delay={index * 0.1} className="p-6 sm:p-8 relative">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-white/10">
              <div className="flex items-start gap-4">
                {/* Company Logo or Icon */}
                <div className="logo-plate w-16 h-16 rounded-xl p-1.5 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  {exp.logo ? (
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-contain"
                      fallbackText={exp.company.slice(0, 3)}
                    />
                  ) : (
                    <Building2 className="w-8 h-8 text-cyan-400" />
                  )}
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-sm text-cyan-300 font-medium">
                    <span>{exp.company}</span>
                    {'department' in exp && exp.department && (
                      <span className="text-white/40 text-xs hidden sm:inline">&bull; {exp.department}</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-row md:flex-col md:items-end gap-2 text-xs font-mono text-white/60">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300">
                  <Calendar className="w-3.5 h-3.5" /> {exp.period}
                </span>
                <span className="inline-flex items-center gap-1 text-white/50">
                  <MapPin className="w-3.5 h-3.5" /> {exp.location}
                </span>
              </div>
            </div>

            {/* Responsibilities list */}
            <div className="pt-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-white/50 mb-4">
                Key Responsibilities &amp; Impact
              </h4>
              <ul className="grid sm:grid-cols-2 gap-3.5">
                {exp.responsibilities.map((res, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/70 leading-relaxed group">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400/70 mt-0.5 flex-shrink-0 group-hover:text-cyan-300 transition-colors" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>
          </GlassCard>
        ))}
      </div>
    </Layout>
  );
}
