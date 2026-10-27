import React from 'react';
import { Users } from 'lucide-react';

export default function PeopleWhoKnowUsBetter() {
  // All 15 client logos from the original website
  const clientLogos = [
    { id: 1, src: '/wp-content/uploads/2026/04/1.webp', alt: 'Partner Brand 1' },
    { id: 2, src: '/wp-content/uploads/2026/04/2.webp', alt: 'Partner Brand 2' },
    { id: 3, src: '/wp-content/uploads/2026/04/3.webp', alt: 'Partner Brand 3' },
    { id: 4, src: '/wp-content/uploads/2026/04/4.webp', alt: 'Partner Brand 4' },
    { id: 5, src: '/wp-content/uploads/2026/04/5.webp', alt: 'Partner Brand 5' },
    { id: 6, src: '/wp-content/uploads/2026/04/6.webp', alt: 'Partner Brand 6' },
    { id: 7, src: '/wp-content/uploads/2026/04/7.webp', alt: 'Partner Brand 7' },
    { id: 8, src: '/wp-content/uploads/2026/04/8.webp', alt: 'Partner Brand 8' },
    { id: 9, src: '/wp-content/uploads/2026/04/9.webp', alt: 'Partner Brand 9' },
    { id: 10, src: '/wp-content/uploads/2026/04/10.webp', alt: 'Partner Brand 10' },
    { id: 11, src: '/wp-content/uploads/2026/04/11.webp', alt: 'Partner Brand 11' },
    { id: 12, src: '/wp-content/uploads/2026/04/12.webp', alt: 'Partner Brand 12' },
    { id: 13, src: '/wp-content/uploads/2026/04/13.webp', alt: 'Partner Brand 13' },
    { id: 14, src: '/wp-content/uploads/2026/04/14.webp', alt: 'Partner Brand 14' },
    { id: 15, src: '/wp-content/uploads/2026/04/15.webp', alt: 'Partner Brand 15' },
  ];

  return (
    <section id="partners" className="py-20 sm:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            People Who Know Us Better
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Trusted by leading food, beverage, confectionery, flavor, personal care, and pharmaceutical innovators across India and 25+ global markets.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 mb-10">
          {clientLogos.map((logo) => (
            <div
              key={logo.id}
              className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-200/80 shadow-2xs hover:shadow-lg hover:border-emerald-300 transition-all duration-300 flex items-center justify-center group h-28 hover:-translate-y-1"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-14 sm:max-h-16 w-auto max-w-full object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 opacity-80 group-hover:opacity-100"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
