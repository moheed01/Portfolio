import { Layout } from './Layout';
import { GlassCard } from './GlassCard';
import { personal, summary, education, experience, projects, skills } from '../lib/content';
import { Download, FileText, CheckCircle2, ArrowUpRight } from 'lucide-react';

export function Resume() {
  return (
    <Layout
      eyebrow="Curriculum Vitae"
      title="Resume"
      subtitle="Complete record of professional qualifications, academic honors, institutional finance experience, and technical competencies."
    >
      <div className="space-y-10">
        {/* Top Header Card */}
        <GlassCard className="p-8 sm:p-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-violet-500/10 pointer-events-none" />
          
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider block mb-2">
                Official Curriculum Vitae
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-2">
                {personal.name}
              </h2>
              <p className="text-lg text-cyan-300 font-medium mb-3">
                {personal.title} &bull; <span className="text-white/60 text-sm font-normal">{personal.location}</span>
              </p>
              <p className="text-sm text-white/70 leading-relaxed">
                {summary}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 flex-shrink-0">
              <a
                href="/Moheed_Ul_Hassan_Resume.pdf"
                download="Moheed_Ul_Hassan_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-black font-semibold rounded-xl transition-all shadow-[0_0_25px_-5px_rgba(0,229,255,0.4)]"
              >
                <Download className="w-4 h-4 text-black" />
                Download PDF
              </a>
              <a
                href="/Moheed_Ul_Hassan_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 glass hover:bg-white/10 text-white font-medium rounded-xl transition-all border border-white/15"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                Open PDF in Tab
              </a>
            </div>
          </div>
        </GlassCard>

        {/* Quick Highlights Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <GlassCard className="p-5 text-center">
            <div className="text-3xl font-bold font-heading text-cyan-300 mb-1">3.93</div>
            <div className="text-xs text-white/50 font-mono uppercase tracking-wider">Top GPA (8th Sem)</div>
          </GlassCard>
          <GlassCard className="p-5 text-center">
            <div className="text-3xl font-bold font-heading text-violet-300 mb-1">{experience.length}</div>
            <div className="text-xs text-white/50 font-mono uppercase tracking-wider">Internships Completed</div>
          </GlassCard>
          <GlassCard className="p-5 text-center">
            <div className="text-3xl font-bold font-heading text-emerald-300 mb-1">{projects.length}</div>
            <div className="text-xs text-white/50 font-mono uppercase tracking-wider">Key Projects</div>
          </GlassCard>
          <GlassCard className="p-5 text-center">
            <div className="text-3xl font-bold font-heading text-amber-300 mb-1">2026</div>
            <div className="text-xs text-white/50 font-mono uppercase tracking-wider">BS Financial Technology</div>
          </GlassCard>
        </div>

        {/* Professional Experience Section */}
        <GlassCard className="p-8">
          <h3 className="text-2xl font-heading font-bold text-white mb-8 pb-4 border-b border-white/10 flex items-center justify-between">
            <span>Work Experience</span>
            <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider">Corporate &amp; Banking</span>
          </h3>

          <div className="space-y-8">
            {experience.map((exp) => (
              <div key={`${exp.company}-${exp.period}`} className="relative pl-6 border-l-2 border-cyan-400/40 pb-2">
                <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-[#07080D]" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                  <span className="text-xs font-mono text-cyan-300/80 bg-cyan-400/10 px-2.5 py-0.5 rounded border border-cyan-400/20 w-fit">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-cyan-300 font-medium mb-3">
                  {exp.company} &bull; <span className="text-white/50 text-xs font-normal">{exp.location}</span>
                </p>
                <ul className="space-y-2">
                  {exp.responsibilities.map((res, idx) => (
                    <li key={idx} className="text-sm text-white/70 flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400/70 mt-1 flex-shrink-0" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Education & Honors */}
        <GlassCard className="p-8">
          <h3 className="text-2xl font-heading font-bold text-white mb-8 pb-4 border-b border-white/10 flex items-center justify-between">
            <span>Education</span>
            <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider">Academic Record</span>
          </h3>

          <div className="space-y-6">
            {education.map((edu) => (
              <div key={`${edu.institution}-${edu.degree}`} className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div>
                  <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                  <p className="text-sm text-cyan-300 font-medium mt-0.5">{edu.institution} &bull; <span className="text-white/50 text-xs">{edu.location}</span></p>
                  
                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {edu.achievements.map((ach, i) => (
                        <span key={i} className="text-xs font-mono text-emerald-300 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-0.5 rounded">
                          ★ {ach}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <span className="text-xs font-mono text-white/50 px-3 py-1 rounded-full bg-white/5 border border-white/10 whitespace-nowrap self-start">
                  {edu.period}
                </span>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Skills Summary Grid */}
        <GlassCard className="p-8">
          <h3 className="text-2xl font-heading font-bold text-white mb-6 pb-4 border-b border-white/10">
            Skills Inventory
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-xs font-mono text-cyan-300 uppercase tracking-wider mb-3 font-semibold">
                Financial Analysis
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {skills.finance.map((s) => (
                  <span key={s} className="text-xs text-white/70 px-2.5 py-1 rounded bg-white/5 border border-white/10">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono text-violet-300 uppercase tracking-wider mb-3 font-semibold">
                Technical &amp; Coding
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {skills.technical.map((s) => (
                  <span key={s} className="text-xs text-white/70 px-2.5 py-1 rounded bg-white/5 border border-white/10">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono text-emerald-300 uppercase tracking-wider mb-3 font-semibold">
                Analytics &amp; Data Tools
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {skills.analytics.map((s) => (
                  <span key={s} className="text-xs text-white/70 px-2.5 py-1 rounded bg-white/5 border border-white/10">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Selected Projects */}
        <GlassCard className="p-8">
          <h3 className="text-2xl font-heading font-bold text-white mb-6 pb-4 border-b border-white/10 flex items-center justify-between">
            <span>Key Projects</span>
            <a href="/projects" className="text-xs font-mono text-cyan-300 hover:text-cyan-200 flex items-center gap-1">
              Explore All <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            {projects.map((proj) => (
              <div key={proj.title} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-colors">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="font-semibold text-white text-sm">{proj.title}</h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-400/10 text-cyan-300 border border-cyan-400/20 whitespace-nowrap">
                    {proj.category}
                  </span>
                </div>
                <p className="text-xs text-white/60 leading-relaxed mb-3 line-clamp-2">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {proj.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[10px] font-mono text-white/40 px-1.5 py-0.5 rounded bg-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </Layout>
  );
}
