import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { faqs } from '../data/catalog';
import { ArrowLeft, ShieldCheck, Award, CheckCircle2, Microscope, FileText, ChevronDown, Sparkles } from 'lucide-react';

export default function QualityPage({ onOpenQuote }) {
  const { navigate } = useNavigation();
  const [openFaq, setOpenFaq] = useState(0);

  const certLogos = [
    { name: 'FSSAI Certified', image: '/wp-content/uploads/2026/04/1-1-150x150.webp', desc: 'Food Safety and Standards Authority of India manufacturing license.' },
    { name: '100% Organic Certified', image: '/wp-content/uploads/2026/04/2-1-150x150.webp', desc: 'Verified chemical-free raw material sourcing & organic processing.' },
    { name: 'Halal Certified', image: '/wp-content/uploads/2026/04/3-1-150x150.webp', desc: 'Compliant with Islamic dietary laws and international Halal standards.' },
    { name: 'Kosher Certified', image: '/wp-content/uploads/2026/04/4-1-150x150.webp', desc: 'Certified kosher compliance for global food and beverage export.' },
  ];

  const qualityStandards = [
    { title: 'Zero Residual Solvents', value: '0.00 ppm', desc: 'Pure CO₂ leaves zero petrochemical residues (unlike hexane, acetone, or ethanol).' },
    { title: 'Lot-by-Lot Fingerprinting', value: '100%', desc: 'Every production lot is validated via GC-MS volatile chromatography and HPLC assay.' },
    { title: 'Bioactive Preservation', value: '99.8%', desc: 'Thermodynamic supercritical state avoids thermal stress and oxidative degradation.' },
    { title: 'Traceability & Compliance', value: 'Farm-to-CoA', desc: 'Full batch records, harvest origin tracking, and technical dossier support.' },
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
          <span className="text-gray-900 font-bold">Quality &amp; Reputation</span>
        </nav>

        {/* Hero Section */}
        <div className="rounded-3xl bg-white border border-gray-200/90 p-8 sm:p-14 shadow-xs mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200/80">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Audited Pharmaceutical Standards</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Quality Assurance &amp; Industry Reputation
          </h1>
          <p className="mt-4 text-base sm:text-lg text-emerald-800 font-medium">
            Certified Quality You Can Trust Across 25+ Global Markets
          </p>
          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl">
            At every stage of our production process, quality, safety, and compliance remain our highest priorities. We adhere to internationally recognized certification standards to ensure that every extract, oil, and freeze-dried ingredient delivered meets the stringent expectations of pharmaceutical, nutraceutical, and culinary leaders worldwide.
          </p>

          {/* Standards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 pt-8 border-t border-gray-100">
            {qualityStandards.map((std) => (
              <div key={std.title} className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-800 block">
                  {std.value}
                </span>
                <strong className="text-xs font-bold text-gray-900 block mt-1">
                  {std.title}
                </strong>
                <p className="text-xs text-gray-500 mt-1 leading-snug">
                  {std.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Official Certifications Showcase */}
        <div id="certifications" className="rounded-3xl bg-white border border-gray-200/90 p-8 sm:p-12 shadow-xs mb-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Accreditations</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">Globally Recognized Certifications</h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              Verified by accredited regulatory bodies for export to North America, Europe, Middle East, and Asia-Pacific.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certLogos.map((cert) => (
              <div key={cert.name} className="p-6 rounded-2xl bg-gray-50/80 border border-gray-200/80 text-center flex flex-col items-center justify-between shadow-2xs hover:shadow-md transition-all">
                <div className="w-24 h-24 mb-4 flex items-center justify-center p-2 bg-white rounded-2xl border border-gray-100 shadow-xs">
                  <img src={cert.image} alt={cert.name} className="max-h-full max-w-full object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-gray-900">{cert.name}</h3>
                  <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">{cert.desc}</p>
                </div>
                <span className="mt-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                  Verified Active
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quality FAQs Accordion */}
        <div className="rounded-3xl bg-white border border-gray-200/90 p-8 sm:p-12 shadow-xs mb-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Frequently Asked Questions</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">Quality Assurance &amp; Technical FAQs</h2>
          </div>

          <div className="space-y-3 max-w-4xl mx-auto">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={faq.q} className="rounded-2xl border border-gray-200/90 overflow-hidden bg-gray-50/50">
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-gray-900 hover:text-emerald-800 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-emerald-700 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Request CoA CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-900 to-teal-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl font-bold">Request Lot-Specific Certificate of Analysis</h3>
            <p className="text-xs sm:text-sm text-emerald-200 mt-1 max-w-xl">
              All batches are dispatched with full GC-MS volatile profiles, HPLC bioactive quantification, and microbiological clearance.
            </p>
          </div>
          <button
            onClick={() => onOpenQuote('Certificate of Analysis (CoA) Request')}
            className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md cursor-pointer whitespace-nowrap"
          >
            Request Batch CoA &amp; Sample
          </button>
        </div>
      </div>
    </div>
  );
}
