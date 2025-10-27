import React from 'react';
import { Moon, Sun, BookOpen, LogIn } from 'lucide-react';

export default function Navbar() {
  const [dark, setDark] = React.useState(() => {
    if (typeof window === 'undefined') return false;
    return document.documentElement.classList.contains('dark') ||
      window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  React.useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [dark]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur bg-white/70 dark:bg-slate-950/60 border-b border-slate-200/70 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold">
          <div className="p-2 rounded-md bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 text-white">
            <BookOpen size={18} />
          </div>
          <span className="hidden sm:block">Best Notes</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#home" className="hover:text-indigo-600 dark:hover:text-indigo-400">Home</a>
          <a href="#explore" className="hover:text-indigo-600 dark:hover:text-indigo-400">Explore Notes</a>
          <a href="#how-it-works" className="hover:text-indigo-600 dark:hover:text-indigo-400">How It Works</a>
          <a href="#faq" className="hover:text-indigo-600 dark:hover:text-indigo-400">FAQ</a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle theme"
            onClick={() => setDark((d) => !d)}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-200/70 dark:border-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-900 transition"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href="#login" className="hidden sm:inline-flex items-center gap-2 px-4 h-9 rounded-full border border-slate-200/70 dark:border-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-900 transition text-sm">
            <LogIn size={16} />
            Login / Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}
