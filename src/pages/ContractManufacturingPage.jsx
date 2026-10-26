import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ArrowLeft, Layers, ShieldCheck, CheckCircle2, PackageCheck, Sparkles } from 'lucide-react';

export default function ContractManufacturingPage({ onOpenQuote }) {
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
          <span className="text-gray-900 font-bold">Contract Manufacturing</span>
        </nav>

        {/* Hero Section */}
        <div className="rounded-3xl bg-white border border-gray-200/90 p-8 sm:p-14 shadow-xs mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200/80">
            <Layers className="w-3.5 h-3.5 text-emerald-600" />
            <span>Turnkey Formulation &amp; Production</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight max-w-4xl">
            Contract Manufacturing &amp; Private Formulation
          </h1>
          <p className="mt-4 text-base sm:text-lg text-emerald-800 font-medium">
            cGMP-Compliant Custom Processing from Raw Botanical to Finished Packaged Good
          </p>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              <p>
                Our contract manufacturing services are designed to provide clients with a dependable and scalable production solution for a wide range of natural ingredients and finished products. We manage every stage of the manufacturing process—including proprietary formulation, precision blending, supercritical extraction, sterile filling, and packaging—in accordance with your exact specifications and quality requirements.
              </p>
              <p>
                Our facilities operate under stringent quality control systems to ensure consistency, full batch traceability, and compliance with applicable regulatory standards including FSSAI, Halal, Kosher, and Organic certifications.
              </p>
              <p>
                Whether you require pilot-scale validation or high-volume commercial manufacturing, our experienced chemical engineering team delivers efficient and cost-effective solutions that allow you to focus on marketing and growing your brand while we manage production.
              </p>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-gray-50">
              <img
                src="/wp-content/uploads/2026/05/3.jpeg"
                alt="Contract Manufacturing Facilities"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="p-4 bg-emerald-950 text-white text-xs">
                <span className="font-bold text-amber-300 block">Clean-Room Processing Suites</span>
                <span className="text-emerald-200">GMP-compliant sterile blending, extraction &amp; packaging</span>
              </div>
            </div>
          </div>
        </div>

        {/* Manufacturing Capabilities */}
        <div className="rounded-3xl bg-white border border-gray-200/90 p-8 sm:p-12 mb-14">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Turnkey Capabilities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">Phase 1</div>
              <h4 className="font-bold text-base text-gray-900 mb-2">Formulation &amp; Prototyping</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Custom botanical profile matching, active compound standardization, and lab-scale trial batches.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">Phase 2</div>
              <h4 className="font-bold text-base text-gray-900 mb-2">Supercritical Processing</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Precision thermodynamic extraction preserving bioactive integrity and aroma with 0.00 ppm solvent residues.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">Phase 3</div>
              <h4 className="font-bold text-base text-gray-900 mb-2">Analytical Clearance</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Full GC-MS volatile verification, HPLC assay, pesticide and heavy metal clearance for every single batch.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">Phase 4</div>
              <h4 className="font-bold text-base text-gray-900 mb-2">Packaging &amp; Logistics</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Packaging in food-grade drums, carboys, bottles, or pouches with export dossiers for 25+ countries.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-900 to-teal-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl font-bold">Discuss Your Proprietary Formulation</h3>
            <p className="text-xs sm:text-sm text-emerald-200 mt-1 max-w-xl">
              We execute mutual Non-Disclosure Agreements (NDAs) to protect your proprietary formulations and intellectual property.
            </p>
          </div>
          <button
            onClick={() => onOpenQuote('Contract Manufacturing Consultation')}
            className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md cursor-pointer whitespace-nowrap"
          >
            Inquire Contract Manufacturing
          </button>
        </div>
      </div>
    </div>
  );
}
