import React from "react";
import { Link } from "react-router-dom";
import { BadgeCheck, Eye, Download, Save, Sparkles, FileText, Code2, Palette } from "lucide-react";

const features = [
  { title: "Animated Headers", Icon: Sparkles },
  { title: "Badge Generator", Icon: BadgeCheck },
  { title: "Live Markdown Preview", Icon: Eye },
  { title: "README Templates", Icon: FileText },
  { title: "Copy & Download", Icon: Download },
  { title: "Save History", Icon: Save },
  { title: "Green Theme", Icon: Palette },
  { title: "Portfolio Ready", Icon: Code2 }
];

const Home = () => {
  return (
    <main className="relative overflow-hidden bg-slate-50">
      <div className="hero-blob-1 pointer-events-none" aria-hidden />
      <div className="hero-blob-2 pointer-events-none" aria-hidden />

      <section className="relative z-10 px-6 py-20">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 items-center">
          <div className="text-slate-900">
            <p className="mb-4 inline-flex items-center space-x-3 rounded-full bg-white/10 px-4 py-2 font-semibold text-sm text-slate-700">
              <span>🌿</span>
              <span>New! Next-level README designs</span>
            </p>
            <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-6xl text-slate-900">Create stunning GitHub READMEs with professional flair</h1>
            <p className="mt-6 text-lg text-slate-600 max-w-xl">Generate animated, badge-rich, portfolio-ready README.md files with presets, live preview, and export options — perfect for portfolios and project showcases.</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/register" className="btn-primary inline-flex items-center gap-3">
                <span>Start Generating</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link to="/templates" className="btn-secondary inline-flex items-center gap-3">
                Explore Templates
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {['50+ Badges', '7 Modes', 'Live Preview', 'Save History'].map(x => (
                <div key={x} className="rounded-2xl bg-white/5 p-3 text-center font-bold text-slate-900 shadow-sm">{x}</div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white/5 p-6 backdrop-blur-md shadow-2xl border border-white/5">
            <div className="rounded-2xl bg-darkCard p-5 text-white">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">README Preview</h3>
                <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-200">Live</span>
              </div>
              <div className="mt-5 rounded-2xl bg-white/6 p-4">
                <p className="text-2xl font-extrabold">🌿 Project Title</p>
                <p className="mt-2 text-green-200">Animated · Badge-rich · Portfolio-ready</p>
              </div>
              <div className="mt-5 space-y-3">
                <pre className="rounded-md bg-black/60 p-3 text-sm overflow-x-auto"># Installation
npm install
npm run dev
                </pre>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs">React</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs">Node.js</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs">MongoDB</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="relative z-10 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-extrabold text-slate-900">Features</h2>
          <p className="mt-3 text-slate-600 max-w-2xl">Everything you need to craft professional README files quickly.</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {features.map(({ title, Icon }) => (
              <div key={title} className="flex items-start gap-3 rounded-xl border p-4 bg-white">
                <div className="rounded-md bg-green-50 p-2 text-primary">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{title}</h4>
                  <p className="text-sm text-slate-600">Generate and customize with ease.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
