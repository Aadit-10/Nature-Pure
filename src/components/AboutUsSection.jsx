import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Sparkles, Factory, Globe, Leaf, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AboutUsSection() {
  const { navigate } = useNavigation();

  return (
    <section id="about-us" className="py-20 sm:py-24 bg-gradient-to-b from-white via-gray-50/60 to-white relative overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            About Us: Nature Pure Extracts
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Your strategic R&amp;D and industrial manufacturing partner in advanced supercritical fluid CO₂ extraction and standardized botanical bioactives.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="rounded-3xl bg-white border border-gray-200/90 p-6 sm:p-10 lg:p-12 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Corporate Story & Capabilities */}
            <div className="lg:col-span-7 space-y-5">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-snug">
                Bridging Nature's Riches with Industrial Precision
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Nature Pure Extracts operates from our specialized thermodynamic processing facility in Kerala, South India. With decades of dedicated research in botanical extraction, we utilize pure carbon dioxide at supercritical state to extract volatile oils, oleoresins, and active phytochemicals without employing petrochemical solvents or high thermal stress.
              </p>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Our clean closed-loop extraction processes guarantee 100% natural aroma fidelity, maximum bioavailability, and verified zero solvent residues (0.00 ppm), serving leading global brands in pharmaceuticals, functional nutrition, cosmetics, and culinary flavors across 25+ countries.
              </p>

              {/* 4 Capability Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">High-Pressure SCFE Autoclaves</h4>
                    <p className="text-[11px] text-gray-500">Pressures up to 350+ bar with multi-stage fractional separators.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">Sub-Zero Lyophilization</h4>
                    <p className="text-[11px] text-gray-500">Freeze-drying that locks cellular nutrients and vibrant natural colors.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">In-House GC-MS &amp; HPLC</h4>
                    <p className="text-[11px] text-gray-500">Every batch accompanied by a full-spectrum verified Certificate of Analysis.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">Zero Solvent Effluent</h4>
                    <p className="text-[11px] text-gray-500">Closed-loop CO₂ recycling with 95%+ recovery rate.</p>
                  </div>
                </div>
              </div>

              {/* Button */}
              <div className="pt-3">
                <button
                  onClick={() => navigate('/about-us')}
                  className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-800 hover:bg-emerald-900 text-white shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Explore Full Corporate Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right: Facility Feature Photo */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gray-100 group">
                <div className="relative">
                  <img
                    src="/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-14-at-2.01.02-PM-1024x768.jpeg"
                    alt="Nature Pure Extracts Facility in Kerala"
                    className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest block mb-1">
                      Manufacturing Hub
                    </span>
                    <h4 className="text-lg font-bold text-white">Kinfra Industrial Park, Kerala</h4>
                    <p className="text-xs text-emerald-200 mt-0.5">
                      150 MT Annual Supercritical Extraction Capacity
                    </p>
                  </div>
                </div>
                <div className="p-4 bg-emerald-950 text-white text-xs flex items-center justify-between border-t border-emerald-900">
                  <span className="text-emerald-200">GMP, FSSAI, Halal &amp; Kosher Certified</span>
                  <button
                    onClick={() => navigate('/infrastructure')}
                    className="text-amber-300 hover:underline font-bold text-xs"
                  >
                    View Plant Details →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Quantitative Performance Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-6 rounded-2xl bg-white border border-gray-200/90 text-center shadow-xs">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-800">50+</div>
            <div className="text-xs font-bold text-gray-800 mt-1 uppercase tracking-wider">Years of Heritage</div>
            <p className="text-[11px] text-gray-500 mt-1">Chemical engineering pedigree since 1974</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gray-200/90 text-center shadow-xs">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-800">25+</div>
            <div className="text-xs font-bold text-gray-800 mt-1 uppercase tracking-wider">Countries Supplied</div>
            <p className="text-[11px] text-gray-500 mt-1">Global pharmaceutical &amp; food client base</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gray-200/90 text-center shadow-xs">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-800">150 MT</div>
            <div className="text-xs font-bold text-gray-800 mt-1 uppercase tracking-wider">Annual Capacity</div>
            <p className="text-[11px] text-gray-500 mt-1">High-pressure thermodynamic autoclaves</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gray-200/90 text-center shadow-xs">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-800">0.00 ppm</div>
            <div className="text-xs font-bold text-gray-800 mt-1 uppercase tracking-wider">Zero Solvent Residue</div>
            <p className="text-[11px] text-gray-500 mt-1">100% pure CO₂ green extraction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
