import React from 'react';
import { Factory, Snowflake, Microscope, Gauge, Leaf } from 'lucide-react';

export default function InfrastructureSection() {
  const facilities = [
    {
      title: 'High-Pressure SCFE Extraction Plant',
      icon: Gauge,
      badge: 'Up to 350+ Bar',
      desc: 'Engineered with high-pressure supercritical CO₂ extraction vessels capable of handling heavy spice matrices, oil seeds, and delicate herbal blossoms with automated temperature regulation.',
      stats: '150 MT Annual Processing'
    },
    {
      title: 'Precision Freeze-Drying (Lyophilization)',
      icon: Snowflake,
      badge: 'Sub-Zero Lyophilizer',
      desc: 'Sub-zero vacuum sublimation chambers that gently sublimate moisture from tropical fruits, berries, and vegetables, preserving raw cellular integrity, flavor, and live carotenoids.',
      stats: 'Zero Heat Damage'
    },
    {
      title: 'Analytical Quality Control Suite',
      icon: Microscope,
      badge: 'Pharma Validated',
      desc: 'In-house GC-MS (Gas Chromatography-Mass Spectrometry), HPLC (High-Performance Liquid Chromatography), and UV-Vis spectrophotometers delivering rigorous lot-by-lot CoA verification.',
      stats: 'Lot-by-Lot Traceability'
    },
    {
      title: 'Closed-Loop Circular Utilities',
      icon: Leaf,
      badge: 'Zero Effluent',
      desc: 'Equipped with dedicated CO₂ re-compression and recovery stages recycling up to 95% of process gas, paired with eco-friendly heat recovery and zero toxic wastewater discharge.',
      stats: '95%+ CO₂ Recycling'
    }
  ];

  return (
    <section id="infrastructure" className="py-24 bg-warm-canvas relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Advanced Manufacturing Infrastructure
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Strategically located at Kinfra Industrial Park in Thiruvalla, Kerala — combining thermodynamic supercritical extraction, freeze-drying, and precision analytics.
          </p>
        </div>

        {/* 4 Infrastructure Pillars */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 mb-12">
          {facilities.map((fac) => {
            const Icon = fac.icon;
            return (
              <div
                key={fac.title}
                className="bg-white p-3.5 sm:p-7 rounded-2xl sm:rounded-3xl border border-gray-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="mb-3 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-xl font-bold text-gray-900 group-hover:text-emerald-800 transition-colors leading-tight">
                    {fac.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1.5 sm:mt-3 leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {fac.desc}
                  </p>
                </div>

                <div className="mt-3 sm:mt-6 pt-2.5 sm:pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between text-[10px] sm:text-xs gap-1 sm:gap-0">
                  <span className="text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Core Capability
                  </span>
                  <strong className="text-[11px] sm:text-xs font-bold text-emerald-700">
                    {fac.stats}
                  </strong>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
