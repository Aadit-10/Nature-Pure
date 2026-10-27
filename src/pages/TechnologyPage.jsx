import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ArrowLeft, Cpu, CheckCircle2, ShieldCheck, Sparkles, RefreshCw, Zap, Layers, ArrowRight } from 'lucide-react';

export default function TechnologyPage({ onOpenQuote }) {
  const { navigate } = useNavigation();

  const extractionStages = [
    {
      step: '01',
      title: 'Precision Botanical Preparation',
      desc: 'Raw botanicals (cardamom, black pepper, turmeric, ginger, fenugreek) undergo sorting, cryo-assisted gentle milling to target particle size distribution, and humidity conditioning for optimal fluid percolation.'
    },
    {
      step: '02',
      title: 'Supercritical State Compression',
      desc: 'Purified liquid CO₂ is compressed beyond its critical point (73.8 bar, 31.1°C) to 350+ bar in high-pressure vessels, transitioning into a supercritical fluid that combines the high penetration rate of a gas with the dense dissolving power of a liquid.'
    },
    {
      step: '03',
      title: 'Selective Phyto-Dissolution',
      desc: 'Supercritical CO₂ percolates through the botanical bed, selectively dissolving targeted lipophilic active compounds, volatile essential oils, oleoresins, and delicate terpenes without applying thermal degradation.'
    },
    {
      step: '04',
      title: 'Fractional Multi-Stage Separation',
      desc: 'By stepping down pressure and adjusting vessel temperature across cascade separators, individual fractions—such as volatile aroma essences and heavy bioactives—precipitate sequentially as 100% pure extracts.'
    },
    {
      step: '05',
      title: 'Closed-Loop CO₂ Recycling',
      desc: 'Gaseous carbon dioxide is scrubbed, passed through high-efficiency sub-coolers, re-liquefied, and recycled with >95% system recovery, yielding a zero-VOC, environmentally benign manufacturing loop.'
    }
  ];

  const techAdvantages = [
    {
      title: '0.00 ppm Solvent Residue',
      desc: 'Unlike hexane, acetone, or ethanol extraction, supercritical CO₂ reverts to gas upon depressurization, leaving zero chemical solvent residues in the finished extract.'
    },
    {
      title: 'Low Thermal Profile (31.1°C+)',
      desc: 'Operates at near-ambient physiological temperatures, preventing thermal oxidation and protecting heat-labile volatile aromatic terpenes.'
    },
    {
      title: 'High Selective Solvation',
      desc: 'Fine-tuning operating pressure and temperature allows precise isolation of targeted active compounds (e.g., piperine, curcuminoids, gingerols) without unwanted ballast.'
    },
    {
      title: 'Ecological & Sustainable',
      desc: 'Carbon dioxide is non-flammable, GRAS-certified (Generally Recognized as Safe), non-toxic, and endlessly recyclable within closed-loop stainless systems.'
    }
  ];

  return (
    <div className="pt-28 pb-24 bg-[#fafbfc] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8 font-medium">
          <button onClick={() => navigate('/')} className="hover:text-emerald-700 flex items-center gap-1 cursor-pointer">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <span>/</span>
          <button onClick={() => navigate('/rd')} className="hover:text-emerald-700 cursor-pointer">
            R&amp;D
          </button>
          <span>/</span>
          <span className="text-gray-900 font-bold">Technology</span>
        </nav>

        {/* Hero Section */}
        <div className="rounded-3xl bg-white border border-gray-200/90 p-8 sm:p-14 shadow-xs mb-14">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight max-w-4xl">
            Supercritical CO₂ Extraction Technology
          </h1>
          <p className="mt-4 text-base sm:text-lg text-emerald-800 font-medium">
            Advanced Thermodynamic Phyto-Solvation for Pristine, Solvent-Free Botanical Extracts
          </p>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              <p>
                Our manufacturing process is powered by advanced supercritical CO₂ extraction technology, one of the most efficient and environmentally responsible methods for producing premium natural ingredients. By using carbon dioxide under carefully controlled temperature and pressure conditions, we are able to extract valuable bioactive compounds with exceptional purity and potency without relying on harsh chemical solvents.
              </p>
              <p>
                This innovative process helps preserve the natural aroma, color, flavor, and nutritional integrity of the raw materials, ensuring that the final products retain their full functional benefits. Supercritical CO₂ extraction also offers superior selectivity, allowing us to achieve consistent quality and high concentrations of desired compounds while maintaining stringent food safety standards.
              </p>
              <p>
                The result is a range of clean-label, high-quality ingredients that meet the evolving needs of the food, nutraceutical, cosmetic, and pharmaceutical industries worldwide.
              </p>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-gray-50">
              <img
                src="/wp-content/uploads/2026/10/Nature-pure-technology-pic.png"
                alt="Nature Pure Supercritical CO2 Extraction Unit"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="p-4 bg-emerald-950 text-white text-xs">
                <span className="font-bold text-amber-300 block">Supercritical High-Pressure Extractor</span>
                <span className="text-emerald-200">PLC-governed 350+ Bar dual-vessel closed circuit</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Step Process Roadmap */}
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              5-Stage Closed-Loop Extraction Cycle
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Thermodynamic precision engineering ensures pure extracts with zero residual petrochemical residues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {extractionStages.map((stage) => (
              <div
                key={stage.step}
                className="p-5 rounded-2xl bg-white border border-gray-200 shadow-xs flex flex-col justify-between hover:border-emerald-300 transition-colors"
              >
                <div>
                  <span className="text-2xl font-black text-emerald-600 block mb-2">{stage.step}</span>
                  <h3 className="font-bold text-sm text-gray-900 mb-2 leading-snug">{stage.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Advantages */}
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Why Supercritical CO₂ Outperforms Conventional Solvents
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techAdvantages.map((adv, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 mb-3" />
                <h3 className="font-bold text-base text-gray-900 mb-2">{adv.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Card */}
        <div className="rounded-3xl bg-emerald-950 text-white p-8 sm:p-12 relative overflow-hidden border border-emerald-900 shadow-lg">
          <div className="max-w-2xl relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Request Extraction Trial or Technical Specifications</h3>
            <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed mb-6">
              Our engineering team collaborates with formulation scientists to tailor pressure, flow rates, and fractionation profiles for your specific botanical target.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onOpenQuote?.('Supercritical CO2 Extraction Technology Inquiry')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold text-sm transition-all shadow-md cursor-pointer"
              >
                <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-4 h-4 object-contain" />
                <span>Inquire About Extraction Technology</span>
              </button>
              <button
                onClick={() => navigate('/rd')}
                className="px-6 py-3 rounded-full bg-emerald-900/80 hover:bg-emerald-900 border border-emerald-700 text-white font-bold text-sm transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Explore R&amp;D Hub</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
