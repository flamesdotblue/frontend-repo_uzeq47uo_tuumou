import React from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Is my data secure?',
    a: 'Yes. We use industry-standard encryption, granular permissions, and continuous monitoring to keep your content safe.',
  },
  {
    q: 'Can I upload PDFs and images?',
    a: 'Absolutely. Upload PDFs, images, and other common formats. We process files securely and keep original quality intact.',
  },
  {
    q: 'Is there a free plan?',
    a: 'Yes. Start free with generous limits. Upgrade anytime for advanced analytics, version history, and priority support.',
  },
  {
    q: 'Do you support dark mode?',
    a: 'Yes. Toggle dark/light themes from the header for a comfortable reading experience on any device.',
  },
];

function Item({ q, a, open, onToggle }) {
  return (
    <div className="border border-slate-200/70 dark:border-slate-800/60 rounded-xl overflow-hidden bg-white/70 dark:bg-slate-900/50">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-4 sm:px-6 py-4 text-left"
      >
        <span className="font-medium">{q}</span>
        <ChevronDown className={`transition-transform ${open ? 'rotate-180' : ''}`} size={18} />
      </button>
      <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden px-4 sm:px-6 pb-4 text-sm text-slate-600 dark:text-slate-400">
          {a}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState(0);
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Frequently asked questions</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Quick answers to common questions about security, features, and pricing.
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((f, i) => (
          <Item key={i} q={f.q} a={f.a} open={openIndex === i} onToggle={() => setOpenIndex((v) => (v === i ? -1 : i))} />
        ))}
      </div>
    </div>
  );
}
