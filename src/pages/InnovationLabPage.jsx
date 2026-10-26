import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ArrowLeft, Microscope, FlaskConical, CheckCircle2, ShieldCheck, ArrowRight, Sparkles, Binary, Activity } from 'lucide-react';

export default function InnovationLabPage({ onOpenQuote }) {
  const { navigate } = useNavigation();

  const analyticalCapabilities = [
    {
      title: 'High-Performance Liquid Chromatography (HPLC)',
      desc: 'Accurate quantification and standardization of primary non-volatile bioactives including curcuminoids, gingerols, and piperine to guaranteed assay percentages.'
    },
    {
      title: 'Gas Chromatography-Mass Spectrometry (GC-MS)',
      desc: 'Deep molecular fingerprinting of volatile essential oils, terpenes, and residual screening to ensure absolute purity and geographic authenticity.'
    },
    {
      title: 'Accelerated Shelf-Life & Stability Testing',
      desc: 'Environmental chambers simulate extreme thermal and humidity conditions to establish rigorous degradation kinetics and shelf-life horizons.'
    },
    {
      title: 'Pilot-Scale Supercritical Testing',
      desc: 'Bench-top and 5L pilot extractors validate yield curves, co-solvent viability, and fraction separation prior to industrial multi-ton processing.'
    },
    {
      title: 'Heavy Metal & Contaminant Screening',
      desc: 'Testing across lead, cadmium, arsenic, and mercury to ensure strict compliance with USP, Ph. Eur., and FSSAI limits at parts-per-billion sensitivity.'
    },
    {
      title: 'Custom Phyto-Formulation Design',
      desc: 'Collaborative development of specialized carrier systems, water-dispersible emulsions, and standardized botanical blends tailored to client needs.'
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
          <span className="text-gray-900 font-bold">Innovation &amp; Lab</span>
        </nav>

        {/* Hero Section */}
        <div className="rounded-3xl bg-white border border-gray-200/90 p-8 sm:p-14 shadow-xs mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200/80">
            <Microscope className="w-3.5 h-3.5 text-emerald-600" />
            <span>Analytical Precision &amp; Prototyping</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight max-w-4xl">
            Innovation &amp; Analytical Testing Laboratory
          </h1>
          <p className="mt-4 text-base sm:text-lg text-emerald-800 font-medium">
            Bridging Botanical Discovery with Pharmaceutical-Grade Standardization
          </p>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              <p>
                Innovation is at the core of our operations, and our dedicated research and development laboratory plays a critical role in creating products that deliver measurable value. Our scientists and technical experts work closely with clients to develop customized formulations, optimize extraction parameters, and validate product performance through rigorous analytical testing.
              </p>
              <p>
                From concept development and raw material evaluation to pilot trials and stability studies, we provide comprehensive technical support throughout the product development cycle.
              </p>
              <p>
                This collaborative approach enables us to create differentiated products with superior functionality, purity, and market appeal while ensuring that every formulation meets the highest standards of safety, reproducibility, and international regulatory compliance.
              </p>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-gray-50">
              <img
                src="/wp-content/uploads/2026/07/Lab-Pic--1024x809.jpeg"
                alt="Nature Pure Analytical Laboratory"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="p-4 bg-emerald-950 text-white text-xs">
                <span className="font-bold text-amber-300 block">Analytical Testing Suite</span>
                <span className="text-emerald-200">Kinfra Thiruvalla central analytical testing laboratory</span>
              </div>
            </div>
          </div>
        </div>

        {/* Analytical Suite Features */}
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Comprehensive Analytical Capabilities
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              State-of-the-art analytical equipment ensuring complete chemical traceability and active standardization.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {analyticalCapabilities.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 mb-4 font-bold text-sm">
                    {idx + 1}
                  </div>
                  <h3 className="font-bold text-base text-gray-900 mb-2 leading-snug">{item.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="rounded-3xl bg-emerald-950 text-white p-8 sm:p-12 relative overflow-hidden border border-emerald-900 shadow-lg">
          <div className="max-w-2xl relative z-10">
            <span className="text-amber-400 font-bold uppercase tracking-wider text-xs block mb-2">Collaborative Development</span>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Partner with Our Analytical &amp; Formulation Team</h3>
            <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed mb-6">
              Accelerate your product launch with verified Certificates of Analysis (COA), pilot extraction trial runs, and customized active biomarker concentrations.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onOpenQuote?.('Innovation & Lab Formulation Inquiry')}
                className="px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold text-sm transition-all shadow-md cursor-pointer"
              >
                Inquire for Lab Collaboration
              </button>
              <button
                onClick={() => navigate('/technology')}
                className="px-6 py-3 rounded-full bg-emerald-900/80 hover:bg-emerald-900 border border-emerald-700 text-white font-bold text-sm transition-all cursor-pointer flex items-center gap-2"
              >
                <span>View Technology</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
