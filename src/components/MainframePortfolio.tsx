import { useState, useEffect, useRef } from 'react';
import data from '../data/portfolio-content.json';

const { personal, summary, education, experience, projects, skills, certifications, extracurricular } = data;

function useTypewriter(text: string, speed = 32, startDelay = 400) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;
    const timeoutId = setTimeout(() => {
      let currentIndex = 0;
      intervalId = setInterval(() => {
        currentIndex += 1;
        setDisplayed(text.slice(0, currentIndex));
        if (currentIndex >= text.length) {
          clearInterval(intervalId);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}

// Interactive Moving Wallpapers for each project in the details modal
function ProjectMovingWallpaper({ project }: { project: typeof projects[0] }) {
  const title = project.title;

  if (title.includes('Cryptocurrency') || title.includes('AI-Enhanced')) {
    return (
      <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-[#0A0D14] border border-cyan-500/30 shadow-[0_0_40px_rgba(0,229,255,0.2)] flex flex-col justify-between p-5">
        <div className="absolute inset-0 animate-moving-grid opacity-30 pointer-events-none" />
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-cyan-500/25 rounded-full blur-3xl animate-float-orb pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-emerald-500/20 rounded-full blur-3xl animate-pulse pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-cyan-300 font-bold uppercase tracking-wider">LIVE MPT vs ML ENGINE</span>
          </div>
          <div className="flex items-center gap-3 text-white/70">
            <span className="text-emerald-400 font-semibold">BTC +5.2%</span>
            <span className="text-cyan-300 font-semibold">ETH +7.8%</span>
            <span className="text-emerald-400 font-semibold">SOL +12.4%</span>
          </div>
        </div>

        <div className="relative z-10 my-auto py-2">
          <svg className="w-full h-24 overflow-visible" viewBox="0 0 600 100" fill="none">
            <line x1="0" y1="80" x2="600" y2="80" stroke="rgba(255,255,255,0.1)" strokeDasharray="4 4" />
            <line x1="0" y1="40" x2="600" y2="40" stroke="rgba(255,255,255,0.1)" strokeDasharray="4 4" />
            <path
              d="M0 90 Q 150 75, 300 50 T 600 15"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="6 6"
            />
            <path
              d="M0 85 C 140 60, 260 25, 600 8"
              stroke="url(#cyanGrad)"
              strokeWidth="3.5"
              fill="none"
              className="animate-wave"
            />
            <line x1="60" y1="95" x2="520" y2="5" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="340" cy="28" r="6" fill="#00E5FF" className="animate-pulse" />
            <circle cx="340" cy="28" r="14" stroke="#00E5FF" strokeWidth="1" opacity="0.4" className="animate-ping" />
            <defs>
              <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00E5FF" />
                <stop offset="50%" stopColor="#38BDF8" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative z-10 grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-center text-xs font-mono">
          <div className="bg-black/40 rounded-lg p-1.5 border border-white/5">
            <span className="text-white/50 block text-[10px]">OPTIMAL SHARPE</span>
            <span className="text-cyan-300 font-bold text-sm">2.84 SR</span>
          </div>
          <div className="bg-black/40 rounded-lg p-1.5 border border-white/5">
            <span className="text-white/50 block text-[10px]">ALPHA OVER MPT</span>
            <span className="text-emerald-400 font-bold text-sm">+18.3%</span>
          </div>
          <div className="bg-black/40 rounded-lg p-1.5 border border-white/5">
            <span className="text-white/50 block text-[10px]">MAX DRAWDOWN</span>
            <span className="text-cyan-200 font-bold text-sm">-11.2%</span>
          </div>
        </div>
      </div>
    );
  }

  if (title.includes('PayBuddy')) {
    return (
      <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-[#070B18] border border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.25)] flex flex-col justify-between p-5">
        <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scanline pointer-events-none" />
        <div className="absolute inset-0 animate-moving-grid opacity-20 pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-ping" />
            <span className="text-blue-300 font-bold uppercase tracking-wider">FINTECH CYBERSECURITY GATEWAY</span>
          </div>
          <span className="px-2.5 py-0.5 rounded bg-blue-500/20 text-cyan-300 border border-blue-400/30">
            SHA-256 VALIDATED
          </span>
        </div>

        <div className="relative z-10 flex items-center justify-center my-auto gap-8">
          <div className="relative flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border border-cyan-400/40 animate-ping opacity-30" />
            <div className="absolute w-16 h-16 rounded-full border-2 border-dashed border-cyan-400 animate-spin" style={{ animationDuration: '10s' }} />
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center shadow-lg text-black font-bold text-lg">
              🔒
            </div>
          </div>
          <div className="space-y-1.5 text-xs font-mono">
            <div className="flex items-center gap-2 text-white/90">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Multi-Factor Authentication: Enabled</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Transaction Tokenization: 100%</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Anomaly Detection: Zero Breach</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-center text-xs font-mono">
          <div className="bg-black/40 rounded-lg p-1.5 border border-white/5">
            <span className="text-white/50 block text-[10px]">PAYMENT PIPELINE</span>
            <span className="text-cyan-300 font-bold">Streamlit + Py</span>
          </div>
          <div className="bg-black/40 rounded-lg p-1.5 border border-white/5">
            <span className="text-white/50 block text-[10px]">ENCRYPTION</span>
            <span className="text-blue-300 font-bold">AES-GCM 256</span>
          </div>
          <div className="bg-black/40 rounded-lg p-1.5 border border-white/5">
            <span className="text-white/50 block text-[10px]">FRAUD RATE</span>
            <span className="text-emerald-400 font-bold">0.00%</span>
          </div>
        </div>
      </div>
    );
  }

  if (title.includes('Stock Price Forecasting') || title.includes('XGBoost')) {
    return (
      <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-[#110A1A] border border-violet-500/30 shadow-[0_0_40px_rgba(139,92,246,0.25)] flex flex-col justify-between p-5">
        <div className="absolute inset-0 animate-moving-grid opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-44 h-44 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-violet-400 animate-ping" />
            <span className="text-violet-300 font-bold uppercase tracking-wider">XGBOOST EVENT REGRESSION PIPELINE</span>
          </div>
          <span className="px-2.5 py-0.5 rounded bg-violet-500/20 text-fuchsia-300 border border-violet-400/30">
            EVENT IMPULSE: +3.8σ
          </span>
        </div>

        <div className="relative z-10 my-auto py-2">
          <svg className="w-full h-24 overflow-visible" viewBox="0 0 600 100" fill="none">
            {[40, 80, 120, 160, 200, 240].map((x, i) => (
              <g key={i}>
                <line x1={x} y1={75 - i * 6} x2={x} y2={35 - i * 4} stroke="#A78BFA" strokeWidth="1.5" />
                <rect x={x - 6} y={60 - i * 5} width="12" height="15" fill={i % 2 === 0 ? '#10B981' : '#F43F5E'} rx="1" />
              </g>
            ))}
            <line x1="280" y1="10" x2="280" y2="90" stroke="#F43F5E" strokeWidth="1.5" strokeDasharray="4 4" />
            <text x="285" y="22" fill="#F43F5E" fontSize="9" fontFamily="monospace">SPONSORSHIP ANNOUNCED</text>
            <path
              d="M 280 45 C 340 30, 420 15, 600 12"
              stroke="#D946EF"
              strokeWidth="3.5"
              fill="none"
              className="animate-wave"
            />
            <path
              d="M 280 35 C 340 20, 420 5, 600 5 L 600 22 C 420 25, 340 40, 280 55 Z"
              fill="rgba(217, 70, 239, 0.15)"
            />
          </svg>
        </div>

        <div className="relative z-10 grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-center text-xs font-mono">
          <div className="bg-black/40 rounded-lg p-1.5 border border-white/5">
            <span className="text-white/50 block text-[10px]">PREDICTIVE ACCURACY</span>
            <span className="text-violet-300 font-bold">87.4%</span>
          </div>
          <div className="bg-black/40 rounded-lg p-1.5 border border-white/5">
            <span className="text-white/50 block text-[10px]">EVENT FEATURES</span>
            <span className="text-fuchsia-300 font-bold">FIFA / Major Games</span>
          </div>
          <div className="bg-black/40 rounded-lg p-1.5 border border-white/5">
            <span className="text-white/50 block text-[10px]">MODEL TYPE</span>
            <span className="text-violet-200 font-bold">Gradient Boosted</span>
          </div>
        </div>
      </div>
    );
  }

  if (title.includes('Analysis & Optimization') || title.includes('Excel')) {
    return (
      <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-[#0A160F] border border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.25)] flex flex-col justify-between p-5">
        <div className="absolute inset-0 animate-moving-grid opacity-20 pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-300 font-bold uppercase tracking-wider">SOLVER OPTIMIZATION &amp; POWER BI</span>
          </div>
          <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 font-bold">
            +20.7% RETURN LIFT
          </span>
        </div>

        <div className="relative z-10 my-auto py-2">
          <div className="flex items-end justify-between h-20 px-4 gap-3">
            {[
              { label: 'Security A', h: '65%', color: 'from-emerald-400 to-teal-500' },
              { label: 'Security B', h: '40%', color: 'from-emerald-500 to-green-600' },
              { label: 'Security C', h: '85%', color: 'from-teal-400 to-emerald-400' },
              { label: 'Security D', h: '30%', color: 'from-green-500 to-emerald-600' },
              { label: 'Security E', h: '75%', color: 'from-emerald-400 to-teal-300' },
              { label: 'Security F', h: '50%', color: 'from-teal-500 to-emerald-500' },
            ].map((bar, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                <div
                  className={`w-full rounded-t-md bg-gradient-to-t ${bar.color} transition-all duration-700 animate-wave`}
                  style={{ height: bar.h, animationDelay: `${i * 0.2}s` }}
                />
                <span className="text-[9px] font-mono text-white/50">{bar.label.split(' ')[1]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-center text-xs font-mono">
          <div className="bg-black/40 rounded-lg p-1.5 border border-white/5">
            <span className="text-white/50 block text-[10px]">RISK-ADJUSTED</span>
            <span className="text-emerald-300 font-bold">+20.7% Gain</span>
          </div>
          <div className="bg-black/40 rounded-lg p-1.5 border border-white/5">
            <span className="text-white/50 block text-[10px]">PORTFOLIO SIZE</span>
            <span className="text-teal-300 font-bold">6 Securities</span>
          </div>
          <div className="bg-black/40 rounded-lg p-1.5 border border-white/5">
            <span className="text-white/50 block text-[10px]">DASHBOARD</span>
            <span className="text-emerald-200 font-bold">Interactive BI</span>
          </div>
        </div>
      </div>
    );
  }

  if (title.includes('Blockchain')) {
    return (
      <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-[#181108] border border-amber-500/30 shadow-[0_0_40px_rgba(245,158,11,0.25)] flex flex-col justify-between p-5">
        <div className="absolute inset-0 animate-moving-grid opacity-20 pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
            <span className="text-amber-300 font-bold uppercase tracking-wider">ETHEREUM SMART CONTRACT NETWORK</span>
          </div>
          <span className="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30 font-bold">
            SOLIDITY VERIFIED
          </span>
        </div>

        <div className="relative z-10 flex items-center justify-between my-auto px-2">
          {['Block #8410', 'Block #8411', 'Block #8412'].map((block, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-400/30 text-center animate-pulse" style={{ animationDelay: `${i * 0.4}s` }}>
                <span className="text-[10px] font-mono text-amber-300 block">{block}</span>
                <span className="text-xs font-mono font-bold text-white">0x8F...3A</span>
                <span className="text-[9px] font-mono text-emerald-400 block mt-0.5">✓ Verified</span>
              </div>
              {i < 2 && <span className="text-amber-400 font-bold text-lg animate-ping">→</span>}
            </div>
          ))}
        </div>

        <div className="relative z-10 grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-center text-xs font-mono">
          <div className="bg-black/40 rounded-lg p-1.5 border border-white/5">
            <span className="text-white/50 block text-[10px]">SMART CONTRACT</span>
            <span className="text-amber-300 font-bold">Solidity EVM</span>
          </div>
          <div className="bg-black/40 rounded-lg p-1.5 border border-white/5">
            <span className="text-white/50 block text-[10px]">TAMPER PROOF</span>
            <span className="text-amber-200 font-bold">100% Immutable</span>
          </div>
          <div className="bg-black/40 rounded-lg p-1.5 border border-white/5">
            <span className="text-white/50 block text-[10px]">LEDGER AUDIT</span>
            <span className="text-emerald-400 font-bold">Zero Reversal</span>
          </div>
        </div>
      </div>
    );
  }

  // Fallback for Financial Reports & Analysis
  return (
    <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-[#0A101C] border border-sky-500/30 shadow-[0_0_40px_rgba(14,165,233,0.25)] flex flex-col justify-between p-5">
      <div className="absolute inset-0 animate-moving-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-ping" />
          <span className="text-sky-300 font-bold uppercase tracking-wider">ANNUAL FINANCIAL REPORT &amp; DDM VALUATION</span>
        </div>
        <span className="px-2.5 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-400/30 font-bold">
          DCF / MULTIPLES
        </span>
      </div>

      <div className="relative z-10 my-auto py-2 grid grid-cols-3 gap-3">
        <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-400/20 text-center">
          <span className="text-[10px] font-mono text-white/50 block">PROFIT MARGIN</span>
          <span className="text-sm font-mono font-bold text-sky-300">22.4%</span>
          <div className="w-full bg-white/10 h-1.5 rounded-full mt-1.5 overflow-hidden">
            <div className="bg-sky-400 h-full w-[70%] animate-wave" />
          </div>
        </div>
        <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-400/20 text-center">
          <span className="text-[10px] font-mono text-white/50 block">ASSET TURNOVER</span>
          <span className="text-sm font-mono font-bold text-teal-300">1.85x</span>
          <div className="w-full bg-white/10 h-1.5 rounded-full mt-1.5 overflow-hidden">
            <div className="bg-teal-400 h-full w-[60%] animate-wave" style={{ animationDelay: '0.3s' }} />
          </div>
        </div>
        <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-400/20 text-center">
          <span className="text-[10px] font-mono text-white/50 block">RETURN ON EQUITY</span>
          <span className="text-sm font-mono font-bold text-emerald-300">28.6%</span>
          <div className="w-full bg-white/10 h-1.5 rounded-full mt-1.5 overflow-hidden">
            <div className="bg-emerald-400 h-full w-[85%] animate-wave" style={{ animationDelay: '0.6s' }} />
          </div>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-center text-xs font-mono">
        <div className="bg-black/40 rounded-lg p-1.5 border border-white/5">
          <span className="text-white/50 block text-[10px]">VALUATION METHOD</span>
          <span className="text-sky-300 font-bold">DDM + Multiples</span>
        </div>
        <div className="bg-black/40 rounded-lg p-1.5 border border-white/5">
          <span className="text-white/50 block text-[10px]">DISCOUNT RATE</span>
          <span className="text-sky-200 font-bold">WACC: 11.2%</span>
        </div>
        <div className="bg-black/40 rounded-lg p-1.5 border border-white/5">
          <span className="text-white/50 block text-[10px]">REPORT AUDIT</span>
          <span className="text-emerald-400 font-bold">Clean Opinion</span>
        </div>
      </div>
    </div>
  );
}

export function MainframePortfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pillsVisible, setPillsVisible] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [messageForm, setMessageForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSent, setFormSent] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const prevXRef = useRef<number | null>(null);
  const targetTimeRef = useRef<number>(0);
  const isSeekingRef = useRef<boolean>(false);
  const SENSITIVITY = 0.8;

  // Clean, focused title
  const typewriterText = 'FinTech Professional';
  const { displayed, done } = useTypewriter(typewriterText, 45, 400);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPillsVisible(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      targetTimeRef.current = videoRef.current.currentTime || 0;
    }
  };

  const handleSeeked = () => {
    const video = videoRef.current;
    if (!video) {
      isSeekingRef.current = false;
      return;
    }
    if (Math.abs(video.currentTime - targetTimeRef.current) > 0.02) {
      video.currentTime = targetTimeRef.current;
    } else {
      isSeekingRef.current = false;
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const video = videoRef.current;
      if (!video || !video.duration) return;

      if (prevXRef.current === null) {
        prevXRef.current = e.clientX;
        return;
      }

      const delta = e.clientX - prevXRef.current;
      prevXRef.current = e.clientX;

      const timeOffset = (delta / window.innerWidth) * SENSITIVITY * video.duration;
      const clampedTime = Math.max(0, Math.min(video.duration, targetTimeRef.current + timeOffset));
      targetTimeRef.current = clampedTime;

      if (!isSeekingRef.current) {
        isSeekingRef.current = true;
        video.currentTime = clampedTime;
      }
    };

    const handleMouseLeave = () => {
      prevXRef.current = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleCopyEmail = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+92 312 9700356');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${personal.email}?subject=${encodeURIComponent(
      messageForm.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${messageForm.name}\nEmail: ${messageForm.email}\n\nMessage:\n${messageForm.message}`
    )}`;
    window.open(mailto, '_blank');
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
  };

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const categories = ['All', 'FinTech', 'Finance', 'AI/ML', 'Blockchain'];

  return (
    <div className="relative w-full min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* BACKGROUND VIDEO (mouse-scrub controlled) */}
      <video
        ref={videoRef}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_041744_63efcd78-bf7d-4039-99e2-2461e8a61903.mp4"
        muted
        playsInline
        preload="auto"
        onLoadedMetadata={handleLoadedMetadata}
        onSeeked={handleSeeked}
        className="fixed inset-0 z-0 w-full h-full object-cover pointer-events-none"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          objectFit: 'cover',
          objectPosition: '70% center',
        }}
      />

      {/* Atmospheric Overlays */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-black/20 via-black/50 to-black/90" />

      {/* NAVBAR (fixed, z-index: 30) */}
      <header className="fixed top-0 left-0 right-0 z-30 w-full px-5 sm:px-8 py-4 sm:py-5 flex flex-row justify-between items-center backdrop-blur-xl bg-black/45 border-b border-white/10 transition-all">
        {/* Logo (left) */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex flex-row items-center gap-3 cursor-pointer group"
        >
          <span
            className="text-[21px] sm:text-[26px] tracking-tight text-white select-none group-hover:opacity-80 transition-opacity"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Moheed®
          </span>
          <span
            className="text-[25px] sm:text-[30px] text-white select-none group-hover:rotate-45 transition-transform duration-300"
            style={{ letterSpacing: '-0.02em' }}
          >
            ✳︎
          </span>
        </div>

        {/* Desktop nav links (center, hidden below lg) */}
        <nav className="hidden lg:flex flex-row items-center text-[19px] sm:text-[22px] text-white">
          <button
            onClick={() => scrollToSection('about')}
            className="hover:opacity-60 transition-opacity cursor-pointer"
          >
            About
          </button>
          <span>,&nbsp;</span>
          <button
            onClick={() => scrollToSection('projects')}
            className="hover:opacity-60 transition-opacity cursor-pointer"
          >
            Projects
          </button>
          <span>,&nbsp;</span>
          <button
            onClick={() => scrollToSection('experience')}
            className="hover:opacity-60 transition-opacity cursor-pointer"
          >
            Experience
          </button>
          <span>,&nbsp;</span>
          <button
            onClick={() => scrollToSection('skills')}
            className="hover:opacity-60 transition-opacity cursor-pointer"
          >
            Skills
          </button>
          <span>,&nbsp;</span>
          <button
            onClick={() => scrollToSection('education')}
            className="hover:opacity-60 transition-opacity cursor-pointer"
          >
            Education
          </button>
          <span>,&nbsp;</span>
          <button
            onClick={() => scrollToSection('resume')}
            className="hover:opacity-60 transition-opacity cursor-pointer"
          >
            Resume
          </button>
        </nav>

        {/* Desktop CTA (right, hidden below lg) */}
        <button
          onClick={() => scrollToSection('contact')}
          className="hidden lg:block text-[20px] sm:text-[22px] text-white underline underline-offset-4 hover:opacity-60 transition-opacity cursor-pointer"
        >
          Get in touch
        </button>

        {/* Mobile hamburger (visible below lg) */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex lg:hidden flex-col justify-center items-center gap-[5px] p-2 focus:outline-none cursor-pointer z-40"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-white transition-opacity duration-300 ease-in-out ${
              mobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-white transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </header>

      {/* Mobile overlay (z-index: 25) */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-2xl flex flex-col justify-center px-8 gap-7 transition-opacity duration-300 lg:hidden z-25 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={() => scrollToSection('about')}
          className="text-left text-[30px] font-medium text-white hover:opacity-60 transition-opacity"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection('projects')}
          className="text-left text-[30px] font-medium text-white hover:opacity-60 transition-opacity"
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection('experience')}
          className="text-left text-[30px] font-medium text-white hover:opacity-60 transition-opacity"
        >
          Experience
        </button>
        <button
          onClick={() => scrollToSection('skills')}
          className="text-left text-[30px] font-medium text-white hover:opacity-60 transition-opacity"
        >
          Skills
        </button>
        <button
          onClick={() => scrollToSection('education')}
          className="text-left text-[30px] font-medium text-white hover:opacity-60 transition-opacity"
        >
          Education
        </button>
        <button
          onClick={() => scrollToSection('resume')}
          className="text-left text-[30px] font-medium text-white hover:opacity-60 transition-opacity"
        >
          Resume
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="text-left text-[30px] font-medium text-white underline underline-offset-4 hover:opacity-60 transition-opacity"
        >
          Get in touch
        </button>
      </div>

      {/* HERO SECTION (z-index: 10) */}
      <section className="relative z-10 w-full min-h-screen flex flex-col justify-end pb-12 md:justify-center md:pb-0 px-5 sm:px-8 md:px-12 overflow-hidden">
        <div className="max-w-4xl relative z-10 pt-28 sm:pt-16 pb-8">
          
          {/* SLIDING GLASS CONTAINER OVER PARAGRAPHS */}
          <div className="sliding-glass-card rounded-3xl p-6 sm:p-9 border border-white/20 backdrop-blur-2xl bg-white/[0.05] relative overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.6)] mb-6 group">
            <div className="absolute inset-0 pointer-events-none w-1/2 h-full bg-gradient-to-r from-transparent via-white/[0.2] to-transparent animate-glass-sheen glass-specular" />
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            {/* Prominent Name Header - 100% visible, sharp, bold */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-bold text-white tracking-tight mb-2 relative z-10 select-text drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
              Moheed Ul Hassan
            </h1>

            {/* FinTech Professional headline with typewriter */}
            <div
              className="text-white/90 relative z-10 select-text font-heading font-medium tracking-tight text-2xl sm:text-4xl md:text-5xl flex items-center gap-1.5 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
              style={{
                minHeight: '44px',
              }}
            >
              <span>{displayed}</span>
              {!done && (
                <span className="inline-block w-[3px] h-[0.9em] bg-white align-middle ml-[2px] animate-cursor-blink" />
              )}
            </div>
          </div>

          {/* PROPERLY SPACED 3-COLUMN EXECUTIVE DASHBOARD ON LANDING PAGE */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 my-6 w-full">
            {/* Column 1: Academic Distinction */}
            <div className="glass-panel rounded-2xl p-5 sm:p-6 flex flex-col justify-between border border-white/10 hover:border-white/25 transition-all shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono text-cyan-300 font-bold uppercase tracking-wider">Academics</span>
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-heading font-bold text-white mb-1">3.93</div>
                <p className="text-xs text-white/80 font-medium">Dean's List of Honour</p>
                <p className="text-[11px] text-white/45 mt-0.5">FAST NUCES &bull; 8th Semester</p>
              </div>
            </div>

            {/* Column 2: Institutional Finance */}
            <div className="glass-panel rounded-2xl p-5 sm:p-6 flex flex-col justify-between border border-white/10 hover:border-white/25 transition-all shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono text-violet-300 font-bold uppercase tracking-wider">Experience</span>
                <span className="w-2 h-2 rounded-full bg-violet-400" />
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-heading font-bold text-white mb-1">3 Roles</div>
                <p className="text-xs text-white/80 font-medium">Institutional Finance</p>
                <p className="text-[11px] text-white/45 mt-0.5">U Bank &bull; IMARAT &bull; ISPR</p>
              </div>
            </div>

            {/* Column 3: Projects (renamed from Engineering, Optimization block removed) */}
            <div className="glass-panel rounded-2xl p-5 sm:p-6 flex flex-col justify-between border border-white/10 hover:border-white/25 transition-all shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono text-emerald-300 font-bold uppercase tracking-wider">Projects</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-heading font-bold text-white mb-1">6 Projects</div>
                <p className="text-xs text-white/80 font-medium">FinTech &amp; Machine Learning</p>
                <p className="text-[11px] text-white/45 mt-0.5">Crypto MPT &bull; XGBoost &bull; Power BI</p>
              </div>
            </div>
          </div>

          {/* Action pill buttons */}
          <div
            className="flex flex-wrap gap-y-1 mt-2"
            style={{
              opacity: pillsVisible ? 1 : 0,
              transform: pillsVisible ? 'translateY(0)' : 'translateY(8px)',
              transition: 'opacity 0.4s ease, transform 0.4s ease',
            }}
          >
            <button
              type="button"
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer shadow-lg font-medium"
            >
              Explore Projects
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('experience')}
              className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer shadow-lg font-medium"
            >
              Work Experience
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('education')}
              className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer shadow-lg font-medium"
            >
              Academic Honors (GPA 3.93)
            </button>
            <a
              href="/Moheed_Ul_Hassan_Resume.pdf"
              download="Moheed_Ul_Hassan_Resume.pdf"
              className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer shadow-lg font-medium"
            >
              Download CV (PDF)
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center text-white bg-black/40 backdrop-blur-md border border-white rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap gap-2 sm:gap-3 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer shadow-lg"
            >
              <span>
                {copiedEmail ? 'Email Copied!' : (
                  <>
                    Reach me: <span className="underline underline-offset-1">{personal.email}</span>
                  </>
                )}
              </span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="inline-block flex-shrink-0"
              >
                <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" />
                <path d="M3.5 10.5H2.5A1.5 1.5 0 0 1 1 9V2.5A1.5 1.5 0 0 1 2.5 1H9A1.5 1.5 0 0 1 10.5 2.5v1" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scroll cue */}
        <div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <span className="text-[11px] font-mono tracking-widest uppercase">Scroll to explore</span>
          <div className="w-4 h-7 rounded-full border border-white/40 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* MAIN PORTFOLIO BODY */}
      <div className="relative z-10 bg-black/85 backdrop-blur-md border-t border-white/10">
        
        {/* ABOUT SECTION */}
        <section id="about" className="max-w-7xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-white/50">01 &bull; Profile</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-heading font-bold tracking-tight text-white mb-12">
            About Moheed Ul Hassan
          </h2>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Profile Avatar Card */}
            <div className="lg:col-span-5 glass-panel rounded-3xl p-8 flex flex-col items-center text-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border border-white/20 mb-6 shadow-2xl relative">
                <img
                  src="/assets/profile/profile.jpg"
                  alt={personal.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <h3 className="text-2xl font-heading font-bold text-white mb-1">
                {personal.name}
              </h3>
              <p className="text-sm text-white/70 font-medium mb-1">
                {personal.title}
              </p>
              <p className="text-xs text-white/50 mb-6">
                {personal.location}
              </p>

              {/* FAST NUCES Badge */}
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 mb-6">
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center p-0.5 overflow-hidden">
                  <img src="/assets/logos/fast_nuces.png" alt="FAST NUCES" className="w-full h-full object-contain" />
                </div>
                <span className="text-xs font-mono text-white font-medium">FAST NUCES &bull; FinTech</span>
              </div>

              <div className="flex items-center gap-3 w-full">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex-1 py-2.5 rounded-full bg-white text-black text-xs font-semibold text-center hover:bg-white/80 transition-colors shadow-md"
                >
                  Email
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 rounded-full border border-white/20 text-white text-xs font-semibold text-center hover:bg-white/10 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Narrative Summary & Key Focus */}
            <div className="lg:col-span-7 space-y-6">
              <div className="glass-panel rounded-3xl p-8 sm:p-10">
                <h4 className="text-xl font-heading font-bold text-white mb-4">
                  Professional Narrative
                </h4>
                <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-6 font-light">
                  {summary}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <span className="text-xs font-mono text-white/50 uppercase block mb-1">
                      Institutional Finance
                    </span>
                    <p className="text-xs text-white/70 leading-relaxed">
                      Accounts payable reconciliation, petty cash handling, voucher preparation, 3-way matching, cost variance analysis, and firm valuation.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <span className="text-xs font-mono text-white/50 uppercase block mb-1">
                      Quantitative Engineering
                    </span>
                    <p className="text-xs text-white/70 leading-relaxed">
                      Markowitz Modern Portfolio Theory, Python financial pipelines, XGBoost forecasting, Power BI executive dashboards, and Streamlit apps.
                    </p>
                  </div>
                </div>
              </div>

              {/* 4 Stats Grid in About */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="glass-panel rounded-2xl p-4 text-center">
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-white mb-0.5">3.93</div>
                  <div className="text-[10px] font-mono text-white/50 uppercase">Term GPA (8th Sem)</div>
                </div>
                <div className="glass-panel rounded-2xl p-4 text-center">
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-white mb-0.5">3</div>
                  <div className="text-[10px] font-mono text-white/50 uppercase">Finance Roles</div>
                </div>
                <div className="glass-panel rounded-2xl p-4 text-center">
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-white mb-0.5">6</div>
                  <div className="text-[10px] font-mono text-white/50 uppercase">Key Projects</div>
                </div>
                <div className="glass-panel rounded-2xl p-4 text-center">
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-white mb-0.5">FAST NUCES</div>
                  <div className="text-[10px] font-mono text-white/50 uppercase">BS FinTech</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="max-w-7xl mx-auto px-5 sm:px-8 py-24 sm:py-32 border-t border-white/10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-white/50">02 &bull; Portfolio</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-4xl sm:text-6xl font-heading font-bold tracking-tight text-white mb-3">
                Featured Projects
              </h2>
              <p className="text-white/60 text-base max-w-xl">
                Cryptocurrency portfolio optimization, algorithmic forecasting pipelines, cybersecurity payment systems, and valuation frameworks.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedCategory(c)}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                    selectedCategory === c
                      ? 'bg-white text-black font-semibold shadow-md'
                      : 'bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((proj) => (
              <div
                key={proj.title}
                className="glass-card rounded-3xl p-7 flex flex-col justify-between group cursor-pointer border border-white/10 hover:border-white/30"
                onClick={() => setSelectedProject(proj)}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-white border border-white/10">
                      {proj.category}
                    </span>
                    {proj.title.includes('AI-Enhanced') && (
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white text-black font-bold">
                        CAPSTONE FYP
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:underline underline-offset-4 transition-all">
                    {proj.title}
                  </h3>

                  <p className="text-sm text-white/70 leading-relaxed mb-6 font-light line-clamp-3">
                    {proj.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-white/60 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/80">
                    <span className="group-hover:text-white transition-colors">View Moving Wallpaper &amp; Specs</span>
                    <span className="text-base group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION WITH AUTHENTIC FULL-COLOR LOGOS */}
        <section id="experience" className="max-w-7xl mx-auto px-5 sm:px-8 py-24 sm:py-32 border-t border-white/10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-white/50">03 &bull; Career</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-heading font-bold tracking-tight text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-white/60 text-base max-w-xl mb-14">
            Institutional finance, accounts payable, firm valuation, and strategic communication roles.
          </p>

          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div key={`${exp.company}-${exp.period}`} className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 hover:border-white/20 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white p-2.5 flex items-center justify-center flex-shrink-0 shadow-lg border border-white/30">
                      {exp.logo ? (
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <span className="text-xl font-heading font-bold text-black">{idx + 1}</span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-white mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-base text-white/80 font-medium">
                        {exp.company} &bull; <span className="text-white/50 text-sm font-normal">{exp.location}</span>
                      </p>
                    </div>
                  </div>

                  <span className="px-4 py-1.5 rounded-full text-xs font-mono bg-white text-black font-semibold self-start md:self-center shadow-md">
                    {exp.period}
                  </span>
                </div>

                <div className="pt-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-white/40 mb-4">
                    Key Responsibilities &amp; Impact
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-3.5">
                    {exp.responsibilities.map((res, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-white/70 leading-relaxed font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="max-w-7xl mx-auto px-5 sm:px-8 py-24 sm:py-32 border-t border-white/10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-white/50">04 &bull; Expertise</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-heading font-bold tracking-tight text-white mb-4">
            Skills &amp; Competencies
          </h2>
          <p className="text-white/60 text-base max-w-xl mb-14">
            A tripartite synthesis of financial modeling, programming engineering, and quantitative business analytics.
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Financial Analysis */}
            <div className="glass-panel rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-white/50 uppercase tracking-wider block mb-2">Pillar 01</span>
                <h3 className="text-2xl font-heading font-bold text-white mb-3">
                  Financial Analysis &amp; Valuation
                </h3>
                <p className="text-xs text-white/60 mb-6 font-light leading-relaxed">
                  Portfolio optimization, firm valuation models, financial reporting, and cost analytics.
                </p>
              </div>
              <div className="space-y-2 mt-auto">
                {skills.finance.map((s) => (
                  <div key={s} className="px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white/80">
                    {s}
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Engineering */}
            <div className="glass-panel rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-white/50 uppercase tracking-wider block mb-2">Pillar 02</span>
                <h3 className="text-2xl font-heading font-bold text-white mb-3">
                  Technical &amp; FinTech Engineering
                </h3>
                <p className="text-xs text-white/60 mb-6 font-light leading-relaxed">
                  Python for finance, algorithmic pipelines, machine learning, and security fundamentals.
                </p>
              </div>
              <div className="space-y-2 mt-auto">
                {skills.technical.map((s) => (
                  <div key={s} className="px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white/80">
                    {s}
                  </div>
                ))}
              </div>
            </div>

            {/* Analytics & Tools */}
            <div className="glass-panel rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-white/50 uppercase tracking-wider block mb-2">Pillar 03</span>
                <h3 className="text-2xl font-heading font-bold text-white mb-3">
                  Quantitative Analytics &amp; Tools
                </h3>
                <p className="text-xs text-white/60 mb-6 font-light leading-relaxed">
                  Executive dashboard engineering, econometric analysis, and strategic communication.
                </p>
              </div>
              <div className="space-y-2 mt-auto">
                {skills.analytics.map((s) => (
                  <div key={s} className="px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white/80">
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications Row */}
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div key={cert.title} className="glass-panel rounded-3xl p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-white border border-white/10">
                      {cert.issuer}
                    </span>
                    <span className="text-xs font-mono text-white/50">{cert.year}</span>
                  </div>
                  <h4 className="text-xl font-heading font-bold text-white mb-2">{cert.title}</h4>
                  <p className="text-xs text-white/70 font-light leading-relaxed">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="max-w-7xl mx-auto px-5 sm:px-8 py-24 sm:py-32 border-t border-white/10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-white/50">05 &bull; Academics</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-heading font-bold tracking-tight text-white mb-4">
            Education &amp; Honors
          </h2>
          <p className="text-white/60 text-base max-w-xl mb-14">
            National University of Computer &amp; Emerging Sciences (FAST NUCES) and Saint Mary's Academy.
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {education.map((edu) => (
              <div key={`${edu.institution}-${edu.degree}`} className="glass-panel rounded-3xl p-8 flex flex-col justify-between border border-white/10 hover:border-white/20 transition-all">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-white p-2 flex items-center justify-center flex-shrink-0 shadow-lg border border-white/30">
                      {edu.logo ? (
                        <img
                          src={edu.logo}
                          alt={edu.institution}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <span className="text-lg font-mono text-black font-bold">ED</span>
                      )}
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-white border border-white/10">
                      {edu.period}
                    </span>
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-white mb-1.5">{edu.degree}</h3>
                  <p className="text-sm text-white/80 font-medium mb-1">{edu.institution}</p>
                  <p className="text-xs text-white/50 mb-6">{edu.location}</p>

                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-2 mb-6">
                      <span className="text-[11px] font-mono uppercase tracking-wider block text-white font-bold">
                        Academic Distinction
                      </span>
                      {edu.achievements.map((ach, idx) => (
                        <div key={idx} className="text-xs text-white/90 font-medium flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-white" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Extracurricular Leadership */}
          <div className="glass-panel rounded-3xl p-8 sm:p-10">
            <span className="text-xs font-mono text-white/50 uppercase tracking-wider block mb-2">Leadership</span>
            {extracurricular.map((extra, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-2xl font-heading font-bold text-white">{extra.role}</h4>
                  <p className="text-sm text-white/80 font-medium mt-1">{extra.organization} &bull; FAST NUCES</p>
                  <p className="text-xs text-white/60 font-light mt-2 max-w-2xl">{extra.description}</p>
                </div>
                <span className="px-4 py-1.5 rounded-full text-xs font-mono bg-white text-black font-semibold whitespace-nowrap self-start sm:self-center shadow-md">
                  Executive Committee
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* RESUME SECTION */}
        <section id="resume" className="max-w-7xl mx-auto px-5 sm:px-8 py-24 sm:py-32 border-t border-white/10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-white/50">06 &bull; Credentials</span>
          </div>
          <div className="glass-panel rounded-3xl p-8 sm:p-14 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-6xl font-heading font-bold text-white mb-4">
              Curriculum Vitae
            </h2>
            <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-light">
              Download the official verified PDF resume of Moheed Ul Hassan with full academic distinctions, institutional finance roles, and quantitative research projects.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/Moheed_Ul_Hassan_Resume.pdf"
                download="Moheed_Ul_Hassan_Resume.pdf"
                className="px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/80 transition-colors shadow-2xl cursor-pointer"
              >
                Download Official PDF
              </a>
              <a
                href="/Moheed_Ul_Hassan_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-full border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-colors cursor-pointer"
              >
                View Online Preview
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="max-w-7xl mx-auto px-5 sm:px-8 py-24 sm:py-32 border-t border-white/10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-white/50">07 &bull; Inquiries</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-heading font-bold tracking-tight text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-white/60 text-base max-w-xl mb-14">
            Available for quantitative financial modeling, portfolio optimization, institutional financial analysis, and collaborative projects.
          </p>

          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 space-y-4">
              <div className="glass-panel rounded-3xl p-6 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono text-white/50 uppercase block">Email</span>
                  <a href={`mailto:${personal.email}`} className="text-sm sm:text-base font-medium text-white hover:underline">
                    {personal.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopyEmail()}
                  className="px-4 py-2 rounded-full border border-white/20 text-xs font-mono hover:bg-white hover:text-black transition-colors cursor-pointer"
                >
                  {copiedEmail ? 'Copied' : 'Copy'}
                </button>
              </div>

              <div className="glass-panel rounded-3xl p-6 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono text-white/50 uppercase block">Phone / WhatsApp</span>
                  <a href="tel:+923129700356" className="text-sm sm:text-base font-medium text-white hover:underline">
                    +92 312 9700356
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="px-4 py-2 rounded-full border border-white/20 text-xs font-mono hover:bg-white hover:text-black transition-colors cursor-pointer"
                >
                  {copiedPhone ? 'Copied' : 'Copy'}
                </button>
              </div>

              <div className="glass-panel rounded-3xl p-6 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono text-white/50 uppercase block">LinkedIn</span>
                  <span className="text-sm sm:text-base font-medium text-white">
                    moheed-hassan
                  </span>
                </div>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-full bg-white text-black text-xs font-mono font-semibold hover:bg-white/80 transition-colors shadow-md"
                >
                  Open →
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form onSubmit={handleSendMessage} className="glass-panel rounded-3xl p-8 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-white/50 uppercase mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={messageForm.name}
                      onChange={(e) => setMessageForm({ ...messageForm, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-white/50 uppercase mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      value={messageForm.email}
                      onChange={(e) => setMessageForm({ ...messageForm, email: e.target.value })}
                      placeholder="sarah@institution.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-white/50 uppercase mb-1">Subject</label>
                  <input
                    type="text"
                    required
                    value={messageForm.subject}
                    onChange={(e) => setMessageForm({ ...messageForm, subject: e.target.value })}
                    placeholder="FinTech Analyst Role / Project Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-white/50 uppercase mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={messageForm.message}
                    onChange={(e) => setMessageForm({ ...messageForm, message: e.target.value })}
                    placeholder="Hello Moheed, I reviewed your work and would like to connect regarding..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-white/80 transition-colors cursor-pointer shadow-lg"
                >
                  Send Inquiry
                </button>

                {formSent && (
                  <p className="text-xs text-white/80 text-center font-mono mt-2">
                    Inquiry prepared! Your default mail client has opened.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 px-5 sm:px-8 py-12 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-white/50">
          <div className="flex items-center gap-3">
            <span className="font-heading font-bold text-white text-sm">Moheed Ul Hassan®</span>
            <span>&bull;</span>
            <span>FinTech Professional &bull; FAST NUCES</span>
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors cursor-pointer">
              Back to top ↑
            </button>
            <span>&copy; 2026 All rights reserved.</span>
          </div>
        </footer>
      </div>

      {/* PROJECT DETAILS MODAL WITH STRONG SLIDING ANIMATION & MOVING WALLPAPER */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="animate-modal-slide glass-panel rounded-3xl max-w-3xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto border border-white/25 shadow-[0_25px_80px_rgba(0,0,0,0.85)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-white border border-white/10 uppercase font-semibold">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mt-2.5">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-colors cursor-pointer flex-shrink-0"
              >
                ✕
              </button>
            </div>

            <div className="mb-6">
              <ProjectMovingWallpaper project={selectedProject} />
            </div>

            <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tags.map((t) => (
                <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/10 text-white border border-white/10">
                  #{t}
                </span>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-wider text-white/50 mb-4 font-bold">
                Implementation Details &amp; Methodologies
              </h4>
              <ul className="space-y-3">
                {selectedProject.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-white/80 leading-relaxed font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default MainframePortfolio;
