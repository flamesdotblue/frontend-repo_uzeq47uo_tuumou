import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, FileUp, Share2 } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Sign Up',
    text: 'Create your account to personalize your experience and join the community.',
  },
  {
    icon: FileUp,
    title: 'Create / Upload Notes',
    text: 'Build beautiful notes with rich text, or upload PDFs and documents securely.',
  },
  {
    icon: Share2,
    title: 'Share & Explore',
    text: 'Publish your notes, follow top contributors, and discover trending topics.',
  },
];

export default function HowItWorks() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">How it works</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          A simple, secure journey designed for speed, clarity, and collaboration.
        </p>
      </div>

      <div id="explore" className="grid md:grid-cols-3 gap-6">
        {steps.map((step, idx) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.4, delay: idx * 0.12 }}
            className="rounded-2xl p-6 border border-slate-200/70 dark:border-slate-800/60 bg-white/70 dark:bg-slate-900/50 backdrop-blur shadow-sm"
          >
            <div className="w-12 h-12 rounded-xl grid place-items-center bg-indigo-600 text-white">
              <step.icon size={22} />
            </div>
            <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{step.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
