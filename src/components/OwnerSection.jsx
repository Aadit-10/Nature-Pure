import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Award, Compass, Quote, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function OwnerSection() {
  const { navigate } = useNavigation();

  return (
    <section id="owners" className="py-20 sm:py-24 bg-gradient-to-b from-white via-emerald-50/25 to-white relative overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            About the Owners: A Legacy of Scientific Mastery
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Founded by chemical engineering pioneer <strong className="text-emerald-900">Mr. N. T. Kuruvilla</strong>, rooted in pharmaceutical discipline and pure botanical innovation since 1974.
          </p>
        </div>

        {/* Founder Feature Container */}
        <div className="rounded-3xl bg-white border border-gray-200/90 p-6 sm:p-10 lg:p-12 shadow-sm hover:shadow-md transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Founder Portrait (ensuring no forehead cutoff and perfect aspect ratio) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-slate-50 relative group">
                <div className="w-full bg-gradient-to-b from-slate-100 to-slate-200/80 p-3 sm:p-4 flex items-center justify-center">
                  <img
                    src="/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-13-at-12.05.57-PM-967x1024.jpeg"
                    alt="Founder & Owner Mr. N. T. Kuruvilla"
                    className="w-full h-80 sm:h-96 object-contain object-top rounded-xl group-hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 bg-emerald-950 text-white text-center">
                  <h3 className="font-bold text-amber-300 text-base sm:text-lg">Mr. N. T. Kuruvilla</h3>
                  <p className="text-xs text-emerald-200 font-medium mt-0.5">
                    Founder &amp; Owner • Chemical Engineer (UDCT)
                  </p>
                  <p className="text-[11px] text-emerald-300/80 mt-1">
                    Former Pfizer Professional • Over 50 Years of Industry Stewardship
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Narrative & Founding Philosophy */}
            <div className="lg:col-span-7 space-y-5 text-gray-700">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200/60">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Pioneering Solvent-Free Supercritical Fluid Extraction</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-snug">
                From Pharmaceutical Engineering to Botanical Excellence
              </h3>

              <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                The journey of Nature Pure Extracts began in <strong>1974</strong> when <strong>Mr. N. T. Kuruvilla</strong>, a distinguished chemical engineering graduate from the prestigious University Department of Chemical Technology (UDCT, now ICT Mumbai), established his first manufacturing enterprise following an impactful formative tenure at <strong>Pfizer</strong>.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                Mr. Kuruvilla instilled pharmaceutical-grade standard operating procedures, stringent analytical validation, and relentless process integrity into every extraction process. This technical foundation paved the way for our emergence as India's premier supercritical fluid carbon dioxide (SCFE) extract innovator.
              </p>

              {/* Founder Quote Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50/50 to-emerald-50/30 border-l-4 border-emerald-700 text-gray-800 relative">
                <Quote className="w-6 h-6 text-emerald-600/30 absolute top-4 right-4" />
                <p className="text-sm sm:text-base italic font-medium text-emerald-950 leading-relaxed">
                  "True purity requires no solvents, no shortcuts, and no compromises. When we respect nature through rigorous thermodynamic science, we deliver unadulterated botanical efficacy for future generations."
                </p>
                <span className="block mt-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  — Mr. N. T. Kuruvilla, Founder
                </span>
              </div>

              {/* Founder Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">cGMP Standards</h4>
                    <p className="text-[11px] text-gray-500">Pharma-grade rigor</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">Green Science</h4>
                    <p className="text-[11px] text-gray-500">100% solvent-free</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">50-Year Trust</h4>
                    <p className="text-[11px] text-gray-500">Batch repeatability</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => navigate('/our-story')}
                  className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-800 hover:bg-emerald-900 text-white shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Read 50-Year Heritage Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => navigate('/infrastructure')}
                  className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 transition-all cursor-pointer"
                >
                  <span>Explore Infrastructure</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
