import React from 'react';
import { Factory, Snowflake, Microscope, Gauge, Leaf, MapPin } from 'lucide-react';

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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200">
            <Factory className="w-3.5 h-3.5 text-emerald-700" />
            <span>Industrial Footprint</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Advanced Manufacturing Infrastructure
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Strategically located at Kinfra Industrial Park in Thiruvalla, Kerala — combining thermodynamic supercritical extraction, freeze-drying, and precision analytics.
          </p>
        </div>

        {/* 4 Infrastructure Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {facilities.map((fac) => {
            const Icon = fac.icon;
            return (
              <div
                key={fac.title}
                className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                      {fac.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-800 transition-colors">
                    {fac.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                    {fac.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Core Capability
                  </span>
                  <strong className="text-xs font-bold text-emerald-700">
                    {fac.stats}
                  </strong>
                </div>
              </div>
            );
          })}
        </div>

        {/* Location Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-gray-900">
                Facility &amp; R&amp;D Center: Kinfra Industrial Park
              </h4>
              <p className="text-xs text-gray-600 mt-0.5">
                Plot No. 48, Thiruvalla - Mallappally Rd, Kunnamthanam, Thiruvalla, Kerala 689581, India
              </p>
            </div>
          </div>
          <a
            href="https://maps.google.com/maps?q=Nature%20Pure%20Supercritical%20Extracts%20Pvt.%20Ltd.%2C%20Plot%20No.%2048%2C%20Kinfra%20Industrial%20Park%2C%20Thiruvalla%20-%20Mallappally%20Rd%2C%20Kunnamthanam%2C%20Thiruvalla%2C%20Kerala%20689581"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full text-xs font-bold text-emerald-900 bg-emerald-100 hover:bg-emerald-200 transition-colors whitespace-nowrap flex-shrink-0"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
