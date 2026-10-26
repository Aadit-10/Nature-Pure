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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200">
            <Layers className="w-3.5 h-3.5 text-emerald-700" />
            <span>Industrial Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Tailored Botanical Solutions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            From pilot concept validation to multi-ton bulk supercritical processing, our fully integrated platforms empower brands worldwide.
          </p>
        </div>

        {/* 4 Solutions Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="rounded-3xl bg-gray-50/70 border border-gray-200/90 p-8 hover:bg-white hover:shadow-xl hover:border-emerald-200/80 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 border border-emerald-200/80">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-gray-200/60 space-y-2.5">
                    {item.highlights.map((point) => (
                      <div key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-gray-200/60">
                  <button
                    onClick={() => onOpenQuote(item.title)}
                    className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-700 shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{item.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
