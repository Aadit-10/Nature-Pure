import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ArrowLeft, Factory, Gauge, Snowflake, Microscope, Leaf, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function InfrastructurePage({ onOpenQuote }) {
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
          <button onClick={() => navigate('/about-us')} className="hover:text-emerald-700 cursor-pointer">
            About Us
          </button>
          <span>/</span>
          <span className="text-gray-900 font-bold">Infrastructure</span>
        </nav>

        {/* Hero Section */}
        <div className="rounded-3xl bg-white border border-gray-200/90 p-8 sm:p-14 shadow-xs mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200/80">
            <Factory className="w-3.5 h-3.5 text-emerald-600" />
            <span>World-Class Processing Plant</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Advanced Manufacturing Infrastructure &amp; Technical Capabilities
          </h1>
          <p className="mt-4 text-base sm:text-lg text-emerald-800 font-medium max-w-3xl">
            Engineered to pharmaceutical-grade standards at Kinfra Industrial Park in Thiruvalla, Kerala — combining thermodynamic extraction, lyophilization, and rigorous analytical quality control.
          </p>

          <div className="mt-8 p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 flex items-start sm:items-center gap-3 text-xs sm:text-sm text-emerald-950 font-medium">
            <MapPin className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5 sm:mt-0" />
            <span>Strategic Location: Plot No. 48, Kinfra Industrial Park, Kunnamthanam, Thiruvalla, Kerala 689581, India</span>
          </div>
        </div>

        {/* 4 Pillars of Infrastructure Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* 1. SCFE Plant */}
          <div className="rounded-3xl bg-white border border-gray-200/90 p-8 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-800 text-white flex items-center justify-center shadow-md mb-6">
                <Gauge className="w-7 h-7" />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-gray-900">Supercritical CO₂ Extraction Unit</h3>
                <span className="text-[11px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Up to 350+ Bar
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mt-3">
                Our core manufacturing strength lies in advanced supercritical fluid extraction (SCFE) autoclaves capable of high-pressure thermodynamic cycles. High-grade liquid CO₂ acts as a non-toxic solvent above its critical point, extracting volatile terpenes, oleoresins, and delicate phyto-actives without thermal breakdown.
              </p>
              <div className="mt-6 space-y-2 text-xs text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Annual processing capacity: <strong>150 MT</strong> of raw botanicals</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Dual extraction columns for continuous high-yield operation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Automated PLC temperature &amp; pressure regulation</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Lyophilization Plant */}
          <div className="rounded-3xl bg-white border border-gray-200/90 p-8 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-700 text-white flex items-center justify-center shadow-md mb-6">
                <Snowflake className="w-7 h-7" />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-gray-900">Freeze-Drying (Lyophilization) Unit</h3>
                <span className="text-[11px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800">
                  Sub-Zero Vacuum
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mt-3">
                Equipped with industrial-scale freeze-drying chambers engineered for our <strong>LyoPure</strong> product line. Tropical fruits, culinary herbs, and botanical slices undergo deep-freezing followed by high-vacuum moisture sublimation, completely preserving raw cellular structure, live enzymes, natural color, and nutritional density.
              </p>
              <div className="mt-6 space-y-2 text-xs text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  <span>Zero thermal damage or caramelization</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  <span>Multiple format outputs: Whole slices, dices, crumbles, and fine powders</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  <span>Extended shelf life without synthetic preservatives or chemical drying agents</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Analytical Suite */}
          <div className="rounded-3xl bg-white border border-gray-200/90 p-8 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-700 text-white flex items-center justify-center shadow-md mb-6">
                <Microscope className="w-7 h-7" />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-gray-900">Analytical Quality Control Lab</h3>
                <span className="text-[11px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">
                  In-House GC-MS / HPLC
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mt-3">
                Quality assurance is anchored in our validated on-site testing suites. Every raw material intake and finished extraction batch is analyzed for active standardization, residual pesticides, heavy metals, and microbiological safety.
              </p>
              <div className="mt-6 space-y-2 text-xs text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>High-Performance Liquid Chromatography (HPLC) active quantification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Gas Chromatography-Mass Spectrometry (GC-MS) volatile fingerprinting</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Lot-specific Certificates of Analysis (CoA) with guaranteed traceability</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Closed Loop Utilities */}
          <div className="rounded-3xl bg-white border border-gray-200/90 p-8 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-teal-700 text-white flex items-center justify-center shadow-md mb-6">
                <Leaf className="w-7 h-7" />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-gray-900">Closed-Loop Sustainable Utilities</h3>
                <span className="text-[11px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800">
                  95%+ Gas Recycling
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mt-3">
                Nature Pure operates with strict adherence to environmental responsibility. Our extraction infrastructure includes high-efficiency carbon dioxide re-compression units that capture, purify, and recycle up to 95% of the extraction gas.
              </p>
              <div className="mt-6 space-y-2 text-xs text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Zero hazardous chemical solvent disposal or toxic wastewater release</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Energy-efficient thermodynamic heat exchangers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Exhaust botanical residue repurposed into organic agricultural compost</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Audit & Compliance Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-gray-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900">Schedule a Facility Audit or Technical Meeting</h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-xl">
                We invite global procurement directors, formulation scientists, and QA auditors to review our manufacturing standards and documentation.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenQuote('Facility Audit Inquiry')}
            className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-emerald-800 hover:bg-emerald-700 transition-all cursor-pointer whitespace-nowrap"
          >
            Inquire Facility Audit
          </button>
        </div>
      </div>
    </div>
  );
}
