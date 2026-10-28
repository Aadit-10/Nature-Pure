import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { HeartHandshake, Eye, Target, Quote, ArrowRight, CheckCircle2, Shield, Sparkles } from 'lucide-react';

export default function ManagementSection() {
  const { navigate } = useNavigation();

  return (
    <section id="management" className="py-20 sm:py-24 bg-white relative overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            About the Management: Steering Global Botanical Excellence
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Our executive leadership team unites global supply chain strategy, industrial operational scale, and high-pressure supercritical extraction science.
          </p>
        </div>

        {/* 2 Key Executive Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16 max-w-5xl mx-auto">
          {/* Leader 1: Thomas Kuruvilla */}
          <div className="rounded-3xl bg-gray-50/90 border border-gray-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div>
              {/* Leader Image Container with clean framing */}
              <div className="w-full h-80 sm:h-96 overflow-hidden bg-slate-900/5 relative flex items-center justify-center p-3">
                <img
                  src="/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-12-at-9.44.38-PM-1024x796.jpeg"
                  alt="Thomas Kuruvilla - Managing Director"
                  className="w-full h-full object-contain object-top rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Leader Details */}
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-gray-900">Thomas Kuruvilla</h3>
                <p className="text-xs sm:text-sm font-semibold text-emerald-800 mt-0.5">
                  Managing Director • Strategic Growth &amp; Operations
                </p>
                <p className="mt-4 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Spearheads international market expansion, long-term multinational supply partnerships, and sustainable growth across Nature Pure Extracts and global distribution operations.
                </p>
              </div>
            </div>

            {/* Leader Quote Footer */}
            <div className="p-6 sm:p-8 pt-0">
              <div className="p-4 rounded-2xl bg-white border border-gray-200/80 flex items-start gap-3 shadow-2xs">
                <Quote className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <p className="text-xs italic text-gray-700 leading-relaxed font-medium">
                  "Our goal is to be the most trusted, dependable botanical partner in our clients' global supply chain."
                </p>
              </div>
            </div>
          </div>

          {/* Leader 2: Joseph Biju Kuruvilla */}
          <div className="rounded-3xl bg-gray-50/90 border border-gray-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div>
              {/* Leader Image Container with clean framing */}
              <div className="w-full h-80 sm:h-96 overflow-hidden bg-slate-900/5 relative flex items-center justify-center p-3">
                <img
                  src="/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-12-at-9.47.36-PM-1001x1024.jpeg"
                  alt="Joseph Biju Kuruvilla - Director of Technology & R&D"
                  className="w-full h-full object-contain object-top rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Leader Details */}
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-gray-900">Joseph Biju Kuruvilla</h3>
                <p className="text-xs sm:text-sm font-semibold text-emerald-800 mt-0.5">
                  Director of Technology &amp; R&amp;D
                </p>
                <p className="mt-4 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Directs thermodynamic engineering, high-pressure SCFE extraction parameters (up to 350+ bar), custom fractional separation, and in-house analytical testing laboratories.
                </p>
              </div>
            </div>

            {/* Leader Quote Footer */}
            <div className="p-6 sm:p-8 pt-0">
              <div className="p-4 rounded-2xl bg-white border border-gray-200/80 flex items-start gap-3 shadow-2xs">
                <Quote className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <p className="text-xs italic text-gray-700 leading-relaxed font-medium">
                  "Supercritical CO₂ is green engineering at its finest: thermodynamic precision creating clean bioactives."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Governance Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
          {/* Vision */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-50/80 to-teal-50/40 border border-emerald-200/80 shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-800 text-white flex items-center justify-center shrink-0 shadow-md">
              <Eye className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-1.5">Management Vision</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                To set global standards in natural ingredient purity through state-of-the-art green thermodynamic extraction, reliable batch traceability, and sustainable manufacturing practices.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-50/80 to-orange-50/40 border border-amber-200/80 shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-700 text-white flex items-center justify-center shrink-0 shadow-md">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-1.5">Management Mission</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                To consistently deliver 100% solvent-free botanical oils, oleoresins, and bioactives that preserve full-spectrum natural integrity while meeting rigorous global pharmacopoeial standards.
              </p>
            </div>
          </div>
        </div>

        {/* View Full Leadership Link */}
        <div className="text-center pt-2">
          <button
            onClick={() => navigate('/leadership')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 transition-all cursor-pointer"
          >
            <span>Learn More About Executive Governance &amp; R&amp;D Stewardship</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
