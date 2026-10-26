import React, { useState } from 'react';
import { certifications, faqs } from '../data/catalog';
import { ShieldCheck, Award, CheckCircle, Globe, Star, Leaf, ChevronDown } from 'lucide-react';

const certIconMap = {
  ShieldCheck,
  Award,
  CheckCircle,
  Globe,
  Star,
  Leaf,
};

export default function CertificationsSection() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="quality" className="py-24 bg-white relative">
      <div id="certifications" className="relative -top-24" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Audited &amp; Accredited</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Global Certifications &amp; Quality Assurances
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Every extraction run follows stringent pharmaceutical and food-grade protocols, validated by third-party global accreditation bodies.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mb-24">
          {certifications.map((cert) => {
            const Icon = certIconMap[cert.icon] || Award;
            return (
              <div
                key={cert.name}
                className="bg-gray-50/80 p-5 rounded-2xl border border-gray-200/80 text-center flex flex-col items-center justify-between shadow-sm hover:shadow-md hover:border-emerald-300 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900">{cert.name}</h4>
                  <p className="text-[11px] text-gray-500 mt-1 line-clamp-2">{cert.org}</p>
                </div>
                <span className="mt-3 text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                  {cert.code}
                </span>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto pt-8 border-t border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Frequently Asked Questions
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Everything you need to know about our extraction technology, certifications, and ordering.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-200/80 overflow-hidden bg-white shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-gray-900 hover:text-emerald-700 transition-colors cursor-pointer"
                  >
                    <span className="text-base sm:text-lg">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? 'rotate-180 text-emerald-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-50 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
