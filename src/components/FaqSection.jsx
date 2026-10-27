import React, { useState } from 'react';
import { faqs } from '../data/catalog';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="faq" className="py-20 sm:py-24 bg-gray-50/70 border-t border-gray-100 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-gray-600 mt-3 max-w-2xl mx-auto">
            Everything you need to know about our supercritical CO₂ technology, certifications, sample requests, and global supply logistics.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-gray-200/90 overflow-hidden bg-white shadow-xs transition-all hover:border-emerald-300"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-gray-900 hover:text-emerald-800 transition-colors cursor-pointer"
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
    </section>
  );
}
