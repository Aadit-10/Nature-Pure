import React from 'react';
import { Layers, Factory, FlaskConical, PackageCheck, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function SolutionsSection({ onOpenQuote }) {
  const solutions = [
    {
      id: 'bulk-extraction',
      icon: Factory,
      badge: 'Scalable SCFE',
      title: 'Bulk Botanical Extraction',
      description:
        'Leveraging high-pressure supercritical CO₂ systems to produce high-purity botanical extracts with exceptional batch-to-batch consistency and zero residual solvents.',
      highlights: [
        'Annual processing capacity up to 150 MT',
        'Selective isolation of heat-sensitive bioactive compounds',
        'Preservation of true-to-nature aroma, color, and flavor profiles',
        'Zero toxic effluent and pesticide-free extraction'
      ],
      ctaText: 'Inquire Bulk Extraction'
    },
    {
      id: 'contract-manufacturing',
      icon: Layers,
      badge: 'Full Turnkey GMP',
      title: 'Contract Manufacturing',
      description:
        'Dependable and scalable production solutions managing formulation, precision blending, supercritical processing, filling, and packaging under strict quality control systems.',
      highlights: [
        'cGMP-compliant clean room processing environment',
        'Customized proprietary formulations and pilot trials',
        'Flexible batch sizes from development to commercial scales',
        'Comprehensive lot traceability and regulatory dossiers'
      ],
      ctaText: 'Explore Contract Manufacturing'
    },
    {
      id: 'innovation-lab',
      icon: FlaskConical,
      badge: 'Strategic R&D',
      title: 'Innovation & Analytical Lab',
      description:
        'Our technical experts collaborate closely with your formulation team to optimize extraction parameters, profile active phyto-compounds, and validate stability.',
      highlights: [
        'Advanced in-house GC-MS, HPLC, and UV-Vis analytics',
        'Custom extraction profiling & compound standardization',
        'Accelerated real-time shelf life and stability studies',
        'Collaborative prototyping for food, pharma & cosmetics'
      ],
      ctaText: 'Collaborate with Our Lab'
    },
    {
      id: 'private-label',
      icon: PackageCheck,
      badge: 'Ready-to-Market',
      title: 'White Label & Private Label',
      description:
        'Certified, market-ready standardized botanical extracts, fruit powders, and oleoresins packaged under your brand label with complete compliance assurance.',
      highlights: [
        'Certified Organic, Halal, Kosher, and FSSAI compliant',
        'Custom packaging formats (drums, carboys, pouches, bottles)',
        'Private label formulation customization and branding',
        'Export-ready documentation for 25+ global markets'
      ],
      ctaText: 'Request Private Label Catalog'
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-white relative overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Tailored Botanical Solutions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            From pilot concept validation to multi-ton bulk supercritical processing, our fully integrated platforms empower brands worldwide.
          </p>
        </div>

        {/* 4 Solutions Cards (2 in a row on mobile, 2x2 spacious grid on PC) */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-6 md:gap-8">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="rounded-2xl md:rounded-3xl bg-gray-50/70 border border-gray-200/90 p-3.5 sm:p-6 md:p-8 hover:bg-white hover:shadow-xl hover:border-emerald-200/80 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-emerald-700 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                    </div>
                    <span className="text-[9px] sm:text-xs font-bold uppercase tracking-wider px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-emerald-100/80 text-emerald-800 border border-emerald-200/80">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-lg md:text-2xl font-bold text-gray-900 group-hover:text-emerald-800 transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1.5 sm:mt-3 leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {item.description}
                  </p>

                  <div className="mt-3 sm:mt-6 pt-3 sm:pt-6 border-t border-gray-200/60 space-y-1.5 sm:space-y-2.5">
                    {item.highlights.map((point, pIdx) => (
                      <div key={point} className={`items-start gap-1.5 sm:gap-2.5 text-[11px] sm:text-sm text-gray-700 ${pIdx >= 2 ? 'hidden sm:flex' : 'flex'}`}>
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-2 sm:line-clamp-none">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 sm:mt-8 pt-3 sm:pt-5 border-t border-gray-200/60">
                  <button
                    onClick={() => onOpenQuote(`${item.title} Industrial Service`)}
                    className="w-full py-2.5 md:py-3.5 px-2 md:px-4 rounded-xl text-[11px] md:text-xs font-bold text-white bg-gradient-to-r from-emerald-800 to-teal-800 hover:from-emerald-700 hover:to-teal-700 shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer"
                  >
                    <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-3.5 h-3.5 object-contain brightness-0 invert" />
                    <span className="line-clamp-1">{item.ctaText}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
