import React, { useState } from 'react';
import { techComparison } from '../data/catalog';
import { Check, X, Sparkles, Cpu, Layers, RefreshCw, Zap } from 'lucide-react';

export default function TechExplainer() {
  const [activeStep, setActiveStep] = useState(0);

  const extractionSteps = [
    {
      num: '01',
      title: 'Botanical Preparation',
      desc: 'Ethically harvested raw botanicals (cardamom, turmeric, pepper, ginger) are sorted, milled to precise particle size, and conditioned for maximum fluid contact.'
    },
    {
      num: '02',
      title: 'Pressurization to Supercritical State',
      desc: 'Food-grade liquid CO₂ is compressed above 73.8 bar and heated gently to 31.1°C, entering its supercritical state where it exhibits both gas-like diffusivity and liquid-like solubility.'
    },
    {
      num: '03',
      title: 'Targeted Phyto-Dissolution',
      desc: 'Supercritical fluid flows through the extraction column, gently dissolving volatile essential oils, terpenes, and lipophilic active compounds without thermal stress.'
    },
    {
      num: '04',
      title: 'Fractional Depressurization',
      desc: 'Pressure is stepped down in specialized separator vessels. Carbon dioxide reverts to pure gas, precipitating 100% pure, unadulterated extract into sterile receiver vessels.'
    },
    {
      num: '05',
      title: 'Closed-Loop CO₂ Recycling',
      desc: 'The released gaseous CO₂ is purified, re-condensed, and cycled back into the system with 95%+ recovery, ensuring zero environmental release and sustainable green chemistry.'
    }
  ];

  return (
    <section id="technology" className="py-24 bg-botanical-mesh text-white relative overflow-hidden">
      <div id="rd" className="relative -top-24" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/60 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5 text-amber-400" />
            <span>Green Chemistry Pioneer</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            The Science of Supercritical CO₂ Extraction
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
            Why leading pharmaceutical and culinary brands are abandoning petrochemical solvents in favor of thermodynamic supercritical carbon dioxide.
          </p>
        </div>

        {/* Process Flow Steps */}
        <div className="mb-20">
          <h3 className="text-xl font-bold text-emerald-300 mb-6 text-center">
            The 5-Stage Closed-Loop Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {extractionSteps.map((step, idx) => (
              <div
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                  activeStep === idx
                    ? 'bg-emerald-800/80 border-emerald-400 shadow-lg shadow-emerald-950/40 transform -translate-y-1'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="text-2xl font-black text-amber-400 mb-2">{step.num}</div>
                <h4 className="text-base font-bold text-white mb-2">{step.title}</h4>
                <p className="text-xs text-gray-300 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Matrix Table */}
        <div className="glass-card-dark rounded-3xl p-6 sm:p-10 border-white/15 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-6 border-b border-white/10 gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Technical Benchmark Comparison
              </h3>
              <p className="text-sm text-gray-300 mt-1">
                Supercritical Fluid Extraction (SCFE) vs. Traditional Steam &amp; Chemical Solvents
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Check className="w-4 h-4 bg-emerald-500/20 rounded-full p-0.5 text-emerald-300" />
                Nature Pure CO₂ Superiority
              </span>
              <span className="flex items-center gap-1.5 text-gray-400">
                <X className="w-4 h-4 bg-red-500/20 rounded-full p-0.5 text-red-300" />
                Conventional Limitations
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-xs font-bold uppercase tracking-wider text-gray-400">
                  <th className="py-4 pr-6">Extraction Parameter</th>
                  <th className="py-4 px-6 text-emerald-400 bg-emerald-950/50 rounded-t-xl">
                    🌿 Nature Pure Supercritical CO₂
                  </th>
                  <th className="py-4 pl-6 text-gray-400">
                    ⚠️ Conventional Steam / Solvents (Hexane/Acetone)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {techComparison.map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 pr-6 font-semibold text-gray-200">
                      {row.aspect}
                    </td>
                    <td className="py-4 px-6 text-emerald-200 bg-emerald-950/30 font-medium">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{row.co2}</span>
                      </div>
                    </td>
                    <td className="py-4 pl-6 text-gray-400">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                        <span>{row.conventional}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
