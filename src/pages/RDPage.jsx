import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ArrowLeft, FlaskConical, Cpu, Microscope, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function RDPage({ onOpenQuote }) {
  const { navigate } = useNavigation();

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
          <span className="text-gray-900 font-bold">Research &amp; Development</span>
        </nav>

        {/* Hero Section */}
        <div className="rounded-3xl bg-white border border-gray-200/90 p-8 sm:p-14 shadow-xs mb-14">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight max-w-4xl">
            Innovating Natural Ingredients Through Science &amp; Technology
          </h1>
          <p className="mt-4 text-base sm:text-lg text-emerald-800 font-medium">
            Bridging Raw Botanical Potential with High-Performance Commercial Formulations
          </p>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              <p>
                Our Research &amp; Development (R&amp;D) division is the foundation of our commitment to innovation, quality, and continuous improvement. By combining scientific expertise, advanced analytical capabilities, and deep industry knowledge, we develop high-performance natural ingredients and customized formulations that meet the evolving needs of the food, nutraceutical, personal care, and wellness industries.
              </p>
              <p>
                From concept development to commercial-scale production, our R&amp;D team works closely with clients to transform ideas into market-ready solutions. Whether you are looking to optimize an existing product, create a new formulation, or explore novel botanical ingredients, we provide the technical support and innovation needed to accelerate your success.
              </p>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-gray-50">
              <img
                src="/wp-content/uploads/2026/07/Research-And-Development-1024x794.jpeg"
                alt="Research & Development Suite"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="p-4 bg-emerald-950 text-white text-xs">
                <span className="font-bold text-amber-300 block">Analytical R&amp;D Suite</span>
                <span className="text-emerald-200">Chromatographic standardization &amp; pilot trials</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2 Dedicated Divisions: Technology & Innovation Lab */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div
            onClick={() => navigate('/technology')}
            className="p-8 rounded-3xl bg-white border border-gray-200/90 shadow-xs hover:shadow-xl hover:border-emerald-600 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-800 text-white flex items-center justify-center mb-6 shadow-md">
                <Cpu className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-800 transition-colors">
                Supercritical CO₂ Extraction Technology →
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mt-3">
                Discover the thermodynamic carbon dioxide science that enables solvent-free, non-thermal extraction of pure bioactives without environmental pollution.
              </p>
              <div className="mt-6 space-y-2 text-xs text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Thermodynamic supercritical state above 73.8 bar / 31.1°C</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Dual gas-liquid diffusivity for complete active penetrability</span>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-100 font-bold text-xs text-emerald-700 group-hover:text-emerald-800 flex items-center gap-1">
              <span>Explore Technology Deep Dive</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div
            onClick={() => navigate('/innovation-lab')}
            className="p-8 rounded-3xl bg-white border border-gray-200/90 shadow-xs hover:shadow-xl hover:border-emerald-600 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-teal-800 text-white flex items-center justify-center mb-6 shadow-md">
                <Microscope className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-800 transition-colors">
                Innovation &amp; Prototyping Lab →
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mt-3">
                Collaborative research laboratory where our scientists work alongside client teams to formulate bespoke extraction profiles and validate shelf-life stability.
              </p>
              <div className="mt-6 space-y-2 text-xs text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>In-house GC-MS, HPLC, and UV-Vis spectrophotometry</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Accelerated real-time stability &amp; solubility testing</span>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-100 font-bold text-xs text-teal-700 group-hover:text-emerald-800 flex items-center gap-1">
              <span>Explore Innovation Lab</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-900 to-teal-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl font-bold">Have a Revolutionary Botanical R&amp;D Idea?</h3>
            <p className="text-xs sm:text-sm text-emerald-200 mt-1 max-w-xl">
              Collaborate directly with our chemical engineers and botanical scientists to develop your next market-leading formulation.
            </p>
          </div>
          <button
            onClick={() => onOpenQuote('Botanical R&D Collaboration Idea')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md cursor-pointer whitespace-nowrap"
          >
            <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-4 h-4 object-contain" />
            <span>Discuss R&amp;D Collaboration</span>
          </button>
        </div>
      </div>
    </div>
  );
}
