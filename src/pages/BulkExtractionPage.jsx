import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ArrowLeft, Factory, Gauge, CheckCircle2, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

export default function BulkExtractionPage({ onOpenQuote }) {
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
          <button onClick={() => navigate('/solutions')} className="hover:text-emerald-700 cursor-pointer">
            Solutions
          </button>
          <span>/</span>
          <span className="text-gray-900 font-bold">Bulk Extraction</span>
        </nav>

        {/* Hero Section */}
        <div className="rounded-3xl bg-white border border-gray-200/90 p-8 sm:p-14 shadow-xs mb-14">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight max-w-4xl">
            Bulk Supercritical CO₂ Botanical Extraction
          </h1>
          <p className="mt-4 text-base sm:text-lg text-emerald-800 font-medium">
            Scalable 150 MT Annual Processing Capacity with Zero Chemical Solvent Residues
          </p>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              <p>
                Our bulk extraction services leverage advanced supercritical CO₂ extraction technology to produce high-purity botanical extracts with exceptional consistency and potency. This solvent-free process allows us to selectively isolate valuable bioactive compounds while preserving the natural aroma, flavor, color, and nutritional integrity of the source material.
              </p>
              <p>
                We work with a broad range of raw materials—including spices (cardamom, pepper, ginger, cloves), seeds (fenugreek, black seed, coriander), herbs (tulsi, rosemary), and tropical fruits—delivering customized extracts tailored to specific concentration parameters.
              </p>
              <p>
                By combining sophisticated high-pressure equipment with strict process controls and automated PLC systems, we ensure that every multi-ton batch meets precise quality specifications and supports the development of premium products for global food, nutraceutical, and wellness markets.
              </p>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-gray-50">
              <img
                src="/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-13-at-10.05.46-PM.jpeg"
                alt="Bulk Extraction Facility"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="p-4 bg-emerald-950 text-white text-xs">
                <span className="font-bold text-amber-300 block">Kinfra Industrial Park Facility</span>
                <span className="text-emerald-200">Continuous thermodynamic multi-vessel extraction lines</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs">
            <Gauge className="w-8 h-8 text-emerald-700 mb-3" />
            <h3 className="font-bold text-lg text-gray-900 mb-2">High Pressure Precision</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Vessels operated up to 350+ Bar allow fine-tuning of density and solubility, isolating volatile terpenes separately from heavy resinous fractions.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs">
            <ShieldCheck className="w-8 h-8 text-emerald-700 mb-3" />
            <h3 className="font-bold text-lg text-gray-900 mb-2">0.00 ppm Solvent Purity</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Pure carbon dioxide completely dissipates into gas upon pressure release, leaving absolute zero toxic or petrochemical residue.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs">
            <Sparkles className="w-8 h-8 text-emerald-700 mb-3" />
            <h3 className="font-bold text-lg text-gray-900 mb-2">Scalable Batch Consistency</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Capable of handling continuous multi-ton bulk orders as well as pilot-scale specialized runs with consistent CoA guarantees.
            </p>
          </div>
        </div>

        {/* Inquiry Call to Action */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-900 to-teal-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl font-bold">Request Bulk Extraction Quotation &amp; Feasibility</h3>
            <p className="text-xs sm:text-sm text-emerald-200 mt-1 max-w-xl">
              Connect with our chemical engineering team to evaluate yields, parameters, and commercial scale-up for your botanical raw material.
            </p>
          </div>
          <button
            onClick={() => onOpenQuote('Bulk Supercritical Extraction Consultation')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md cursor-pointer whitespace-nowrap"
          >
            <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-4 h-4 object-contain" />
            <span>Inquire Bulk Extraction</span>
          </button>
        </div>
      </div>
    </div>
  );
}
