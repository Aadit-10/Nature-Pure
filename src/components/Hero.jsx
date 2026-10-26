import React from 'react';
import { Sparkles, ArrowRight, Factory, Leaf, CheckCircle2, ShieldCheck, Droplet } from 'lucide-react';

export default function Hero({ onOpenQuote, onExploreCatalog, onExploreTech }) {
  return (
    <section className="relative min-h-[96vh] flex items-center justify-center text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Authentic Original Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transform animate-in fade-in duration-1000"
        style={{
          backgroundImage: `url("/wp-content/uploads/2026/05/eutah-mizushima-OWwK_0_EnxY-unsplash-scaled.jpg")`
        }}
      />

      {/* Deep Botanical Emerald Gradient Overlay matching Nature Pure's identity */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#051e17]/90 via-[#06241b]/75 to-[#031510]/95" />

      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center z-10">
        {/* Top Innovation Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/70 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-medium tracking-wide mb-8 backdrop-blur-md shadow-lg">
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>Next-Generation Supercritical CO₂ Botanical Science</span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-balance">
          Purity Extracted from the{' '}
          <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200 bg-clip-text text-transparent">
            Heart of Nature
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-base sm:text-xl text-emerald-50/90 font-light leading-relaxed mb-10 text-pretty">
          Empowering global pharmaceutical, nutraceutical, fragrance, and food innovators with clean,{' '}
          <strong className="font-semibold text-white">100% solvent-free botanical oils &amp; oleoresins</strong>.
          Engineered to pharmaceutical precision since 1973 in Kerala, India.
        </p>

        {/* Interactive CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button
            onClick={onExploreCatalog}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-emerald-950 font-bold text-sm tracking-wider uppercase transition-all shadow-xl hover:shadow-emerald-500/30 flex items-center gap-3 transform hover:-translate-y-1 cursor-pointer"
          >
            <span>Explore 200+ Verified Extracts</span>
            <ArrowRight className="w-4 h-4 text-emerald-950" />
          </button>

          <button
            onClick={() => onOpenQuote()}
            className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/25 backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Request Sample &amp; CoA</span>
          </button>

          <button
            onClick={onExploreTech}
            className="px-6 py-4 rounded-full text-emerald-300 hover:text-white font-medium text-sm transition-colors flex items-center gap-1.5 underline underline-offset-8 decoration-emerald-500/50 hover:decoration-emerald-400 cursor-pointer"
          >
            <span>Why Supercritical CO₂?</span>
          </button>
        </div>

        {/* Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-white/15 text-left">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-2 text-emerald-400 mb-1">
              <Leaf className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-semibold text-emerald-200">Solvent Purity</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">0.00 ppm</div>
            <p className="text-xs text-emerald-100/70 mt-1">100% Zero Chemical Residue</p>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-2 text-amber-300 mb-1">
              <Factory className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-semibold text-amber-200">Annual Processing</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">150 MT</div>
            <p className="text-xs text-emerald-100/70 mt-1">Continuous Scalable Capacity</p>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-2 text-teal-300 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-semibold text-teal-200">Active Retention</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">99.8%</div>
            <p className="text-xs text-emerald-100/70 mt-1">Cold Subcritical Selectivity</p>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-2 text-emerald-300 mb-1">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-semibold text-emerald-200">Certifications</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">Global 4x</div>
            <p className="text-xs text-emerald-100/70 mt-1">Organic, Halal, Kosher, FSSAI</p>
          </div>
        </div>
      </div>
    </section>
  );
}
