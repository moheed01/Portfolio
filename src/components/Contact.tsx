import { useState } from 'react';
import { Layout } from './Layout';
import { GlassCard } from './GlassCard';
import { personal } from '../lib/content';
import { Mail, Phone, Copy, Check, Send, MapPin, Clock } from 'lucide-react';

function LinkedInIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.54a1.64 1.64 0 1 0 0 3.27 1.64 1.64 0 0 0 0-3.27Z" />
    </svg>
  );
}

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Open user's email client as prefilled mailto if desired
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.open(mailtoUrl, '_blank');
  };

  return (
    <Layout
      eyebrow="Initiate Contact"
      title="Let's Connect"
      subtitle="Seeking full-time roles, analyst positions, and collaborative FinTech initiatives. Direct communications welcome."
    >
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info Card */}
        <div className="lg:col-span-5 space-y-6">
          <GlassCard className="p-8">
            <h3 className="text-xl font-heading font-bold text-white mb-6">
              Contact Channels
            </h3>

            <div className="space-y-5">
              {/* Email */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] font-mono text-white/50 uppercase tracking-wider block">Email Address</span>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-sm font-medium text-white hover:text-cyan-300 transition-colors truncate block"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personal.email, 'email')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors flex-shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-violet-400/10 border border-violet-400/20 flex items-center justify-center text-violet-300 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] font-mono text-white/50 uppercase tracking-wider block">Phone &bull; WhatsApp</span>
                    <a
                      href="tel:+923129700356"
                      className="text-sm font-medium text-white hover:text-cyan-300 transition-colors block"
                    >
                      +92 312 9700356
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('+92 312 9700356', 'phone')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors flex-shrink-0"
                  title="Copy phone number"
                  aria-label="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-sky-400/10 border border-sky-400/20 flex items-center justify-center text-sky-300 flex-shrink-0">
                    <LinkedInIcon className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] font-mono text-white/50 uppercase tracking-wider block">LinkedIn Network</span>
                    <a
                      href={personal.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-white hover:text-cyan-300 transition-colors block truncate"
                    >
                      linkedin.com/in/moheed-hassan
                    </a>
                  </div>
                </div>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors flex-shrink-0"
                  aria-label="Visit LinkedIn"
                >
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 space-y-3">
              <div className="flex items-center gap-2.5 text-xs text-white/60">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Rawalpindi / Islamabad, Pakistan &bull; Open to Remote &amp; Relocation</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-white/60">
                <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Response Time: Typically within 24 hours</span>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Message Form */}
        <div className="lg:col-span-7">
          <GlassCard className="p-8">
            <h3 className="text-xl font-heading font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs text-white/50 mb-6">
              Fill in your details below to compose an inquiry directly to Moheed.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-white/60 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-white/60 uppercase tracking-wider mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-white/60 uppercase tracking-wider mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="FinTech Analyst Opportunity / Consulting Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-white/60 uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hello Moheed, I came across your portfolio and would like to discuss..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-black font-semibold text-sm transition-all shadow-[0_0_25px_-5px_rgba(0,229,255,0.4)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4 text-black" />
                Dispatch Message
              </button>
            </form>

            {submitted && (
              <div className="mt-5 p-4 rounded-xl bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-sm flex items-center gap-3">
                <Check className="w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Thank you for reaching out!</p>
                  <p className="text-xs text-white/70">Your message client has been triggered. Moheed will follow up promptly.</p>
                </div>
              </div>
            )}
          </GlassCard>
        </div>
      </div>
    </Layout>
  );
}
