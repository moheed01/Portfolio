import { Layout } from './Layout';
import { GlassCard } from './GlassCard';
import { Image } from './Image';
import { education } from '../lib/content';
import { MapPin, Calendar } from 'lucide-react';

export function Education() {
  return (
    <Layout
      eyebrow="Academic Foundations"
      title="Education"
      subtitle="Degrees and qualifications from FAST NUCES and Saint Mary's Academy, Rawalpindi."
    >
      <div className="grid lg:grid-cols-2 gap-8">
        {education.map((edu, i) => (
          <GlassCard key={`${edu.institution}-${edu.degree}`} delay={i * 0.1} className="p-7 relative overflow-hidden">
            <div className="flex items-start gap-5">
              <div className="logo-plate w-20 h-20 rounded-xl flex-shrink-0 overflow-hidden flex items-center justify-center">
                <Image
                  src={edu.logo}
                  alt={`${edu.institution} logo`}
                  className="w-full h-full object-contain p-2"
                  fallbackText={edu.institution.slice(0, 2)}
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-heading font-bold text-white leading-snug">
                  {edu.degree}
                </h3>
                <p className="text-cyan-300 font-medium mt-0.5">{edu.institution}</p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs font-mono text-white/55">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" /> {edu.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" /> {edu.location}
                  </span>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </Layout>
  );
}