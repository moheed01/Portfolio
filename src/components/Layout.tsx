import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  eyebrow?: string;
}

export function Layout({ children, title, subtitle, eyebrow }: LayoutProps) {
  return (
    <div className="relative min-h-screen bg-grid">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="mb-16">
          {eyebrow && (
            <span className="inline-block text-xs font-mono text-cyan-300/80 tracking-[0.2em] uppercase mb-4">
              {eyebrow}
            </span>
          )}
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tight">
            {title}
          </h1>
          <p className="mt-4 text-lg text-white/50 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
          <div className="mt-6 h-px w-24 bg-gradient-to-r from-cyan-400 to-violet-500" />
        </div>
        {children}
      </div>
    </div>
  );
}