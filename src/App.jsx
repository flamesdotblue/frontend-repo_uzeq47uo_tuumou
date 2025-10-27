import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import FAQ from './components/FAQ.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />

      <main id="home" className="pt-16">
        <Hero />

        <section id="how-it-works" className="relative py-20 sm:py-24">
          <HowItWorks />
        </section>

        <section id="faq" className="relative py-20 sm:py-24">
          <FAQ />
        </section>
      </main>

      <footer className="border-t border-slate-200/70 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">Best Notes</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Share, discover, and collaborate on high‑quality study notes with a premium experience.</p>
          </div>
          <div>
            <h4 className="text-sm font-medium tracking-wide uppercase text-slate-500 dark:text-slate-400">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="hover:text-slate-900 dark:hover:text-white underline-offset-4 hover:underline" href="#">Terms of Service</a></li>
              <li><a className="hover:text-slate-900 dark:hover:text-white underline-offset-4 hover:underline" href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium tracking-wide uppercase text-slate-500 dark:text-slate-400">Connect</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="hover:text-slate-900 dark:hover:text-white underline-offset-4 hover:underline" href="#">Twitter</a></li>
              <li><a className="hover:text-slate-900 dark:hover:text-white underline-offset-4 hover:underline" href="#">LinkedIn</a></li>
              <li><a className="hover:text-slate-900 dark:hover:text-white underline-offset-4 hover:underline" href="#">GitHub</a></li>
              <li><a className="hover:text-slate-900 dark:hover:text-white underline-offset-4 hover:underline" href="#">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <div className="py-6 text-center text-xs text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} Best Notes. All rights reserved.</div>
      </footer>
    </div>
  );
}
