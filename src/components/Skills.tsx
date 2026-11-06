import { Layout } from './Layout';
import { GlassCard } from './GlassCard';
import { skills, certifications } from '../lib/content';
import { Cpu, DollarSign, BarChart3, Award, Check } from 'lucide-react';

export function Skills() {
  const skillSections = [
    {
      title: 'Financial Analysis & Valuation',
      icon: DollarSign,
      accent: 'cyan',
      description: 'Institutional portfolio management, asset valuation methodologies, and financial controllership.',
      items: skills.finance,
    },
    {
      title: 'Technical & FinTech Engineering',
      icon: Cpu,
      accent: 'violet',
      description: 'Algorithmic financial pipelines, Python development, predictive machine learning, and security.',
      items: skills.technical,
    },
    {
      title: 'Quantitative Analytics & BI Tools',
      icon: BarChart3,
      accent: 'emerald',
      description: 'Interactive dashboard engineering, statistical modeling, econometric forecasting, and variance analysis.',
      items: skills.analytics,
    },
  ];

  return (
    <Layout
      eyebrow="Competencies &amp; Stack"
      title="Skills &amp; Expertise"
      subtitle="A synergistic blend of quantitative financial theory, modern technical engineering, and business analytics."
    >
      <div className="space-y-12">
        {/* Three Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {skillSections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <GlassCard key={section.title} delay={idx * 0.1} className="p-6 sm:p-8 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-white">
                      {section.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-white/50 mb-6 leading-relaxed">
                  {section.description}
                </p>

                <div className="space-y-2.5 mt-auto">
                  {section.items.map((item) => (
                    <div
                      key={item}
                      className="px-3.5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-between group"
                    >
                      <span className="text-sm text-white/80 group-hover:text-white transition-colors">
                        {item}
                      </span>
                      <Check className="w-3.5 h-3.5 text-cyan-400 opacity-60 group-hover:opacity-100" />
                    </div>
                  ))}
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Certifications & Specialized Training */}
        <div>
          <h2 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-cyan-400" />
            Certifications &amp; Specialized Coursework
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, i) => (
              <GlassCard key={i} delay={0.3 + i * 0.1} className="p-6 relative overflow-hidden">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-xs font-mono text-cyan-300/80 uppercase tracking-wider">
                      {cert.issuer}
                    </span>
                    <h3 className="text-lg font-heading font-bold text-white mt-0.5">
                      {cert.title}
                    </h3>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-white/60">
                    {cert.year}
                  </span>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">
                  {cert.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
