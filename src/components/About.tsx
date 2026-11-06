import { Layout } from './Layout';
import { GlassCard } from './GlassCard';
import { Image } from './Image';
import { personal, summary, education, certifications } from '../lib/content';
import { Award, Calendar } from 'lucide-react';

export function About() {
  return (
    <Layout
      eyebrow="Who I am"
      title="About Me"
      subtitle="FinTech professional blending analytical rigor, technical fluency, and real-world institutional finance experience."
    >
      <div className="grid lg:grid-cols-5 gap-10">
        {/* Profile */}
        <GlassCard className="lg:col-span-2 p-8 relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 blur-2xl opacity-40" />
          <div className="relative z-10">
            <div className="w-44 h-44 rounded-full overflow-hidden border-2 border-cyan-400/40 shadow-[0_0_40px_-8px_rgba(201,58,106,0.5)] mx-auto">
              <Image
                src="/assets/profile/profile.jpg"
                alt={personal.name}
                className="w-full h-full object-cover"
                fallbackText="MH"
              />
            </div>
            <h3 className="mt-6 text-2xl font-heading font-bold text-white">{personal.name}</h3>
            <p className="text-cyan-300 font-medium">{personal.title}</p>
            <p className="text-xs font-mono text-white/45 mt-2">{personal.location}</p>
          </div>
        </GlassCard>

        {/* Narrative + education + certs */}
        <div className="lg:col-span-3 space-y-8">
          <GlassCard className="p-8">
            <p className="text-white/75 leading-relaxed">{summary}</p>
          </GlassCard>

          <GlassCard className="p-8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white/50 mb-5 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-cyan-400" /> Education
            </h4>
            <div className="space-y-5">
              {education.map((edu) => (
                <div key={`${edu.institution}-${edu.degree}`} className="flex items-center gap-4">
                  <div className="logo-plate w-12 h-12 rounded-lg flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <Image src={edu.logo} alt={`${edu.institution} logo`} className="w-full h-full object-contain p-1" fallbackText={edu.institution.slice(0, 2)} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-white font-medium truncate">{edu.degree}</p>
                    <p className="text-sm text-cyan-300/80 truncate">{edu.institution} · {edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white/50 mb-5 flex items-center gap-2">
              <Award className="w-4 h-4 text-cyan-400" /> Certifications
            </h4>
            <ul className="space-y-3">
              {certifications.map((c, i) => (
                <li key={i} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-white">{c.title}</p>
                    <p className="text-sm text-cyan-300/80">{c.issuer}</p>
                  </div>
                  <span className="text-xs font-mono text-white/40 whitespace-nowrap mt-0.5">{c.year}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    </Layout>
  );
}