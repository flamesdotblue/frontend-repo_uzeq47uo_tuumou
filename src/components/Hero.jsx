import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

const contributors = [
  { name: 'alex.dev', img: 'https://i.pravatar.cc/64?img=1' },
  { name: 'maria.notes', img: 'https://i.pravatar.cc/64?img=5' },
  { name: 'sam_writer', img: 'https://i.pravatar.cc/64?img=8' },
  { name: 'jules', img: 'https://i.pravatar.cc/64?img=11' },
  { name: 'yuki', img: 'https://i.pravatar.cc/64?img=13' },
  { name: 'leo.ai', img: 'https://i.pravatar.cc/64?img=15' },
  { name: 'nora', img: 'https://i.pravatar.cc/64?img=19' },
];

function ContributorsMarquee() {
  const loopItems = [...contributors, ...contributors, ...contributors];
  return (
    <div className="relative mt-10 overflow-hidden">
      <motion.div
        className="flex items-center gap-6"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ ease: 'linear', duration: 20, repeat: Infinity }}
      >
        {loopItems.map((c, i) => (
          <div key={i} className="flex items-center gap-3 px-3 py-2 rounded-full bg-white/70 dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800/60 shadow-sm">
            <img src={c.img} alt={c.name} className="w-8 h-8 rounded-full object-cover" />
            <span className="text-sm font-medium">{c.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-indigo-50 via-white to-white dark:from-indigo-950/40 dark:via-slate-950 dark:to-slate-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center pt-10 sm:pt-16 lg:pt-24">
        <div className="order-2 lg:order-1 pb-10 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300">
              <Sparkles size={14} /> Premium notes sharing platform
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Share smarter. Learn faster.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-prose">
              Discover high‑quality study notes, collaborate with top contributors, and elevate your learning with a modern, secure, and delightful experience.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a href="#signup" className="inline-flex items-center gap-2 px-5 h-11 rounded-full bg-indigo-600 text-white hover:bg-indigo-500 transition shadow-lg shadow-indigo-600/20">
                Get Started
                <ArrowRight size={18} />
              </a>
              <a href="#explore" className="inline-flex items-center gap-2 px-5 h-11 rounded-full border border-slate-300/70 dark:border-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-900 transition">
                Explore Notes
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
              <ShieldCheck size={16} />
              Enterprise‑grade security and privacy controls
            </div>

            <ContributorsMarquee />
          </motion.div>
        </div>

        <div className="order-1 lg:order-2 relative h-[360px] sm:h-[460px] lg:h-[560px]">
          <div className="absolute inset-0 rounded-2xl overflow-hidden border border-slate-200/70 dark:border-slate-800/60 bg-white/60 dark:bg-slate-900/40 backdrop-blur">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
