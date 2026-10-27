import React from 'react';

export default function CertificationsSection() {

  // The 4 authentic official certification seal images from the original website
  const primaryCertifications = [
    {
      name: '100% Organic Certified',
      subtitle: 'USDA & NPOP Organic Standards',
      desc: 'Certified organic agricultural raw material sourcing and 100% solvent-free processing without synthetic inputs or chemical pesticides.',
      image: '/wp-content/uploads/2026/04/2-1-150x150.webp',
      badge: 'NPOP & Global Organic',
      status: 'Active Accreditation'
    },
    {
      name: 'Halal Certified',
      subtitle: 'Global Islamic Dietary Compliance',
      desc: 'Full compliance with global Halal dietary requirements, manufactured strictly alcohol-free and animal-derivative-free in dedicated stainless steel vessels.',
      image: '/wp-content/uploads/2026/04/3-1-150x150.webp',
      badge: 'Halal Pareve Standard',
      status: 'Worldwide Acceptance'
    },
    {
      name: 'FSSAI Certified',
      subtitle: 'Food Safety and Standards Authority of India',
      desc: 'Central manufacturing license adhering to strict Schedule 4 hygiene, microbiological thresholds, and regulatory food safety parameters.',
      image: '/wp-content/uploads/2026/04/4-1-150x150.webp',
      badge: 'Lic. No. 11319007000123',
      status: 'Central Regulatory Body'
    },
    {
      name: 'Kosher Certified',
      subtitle: 'Global Kashrut Rabbinical Standards',
      desc: 'Certified kosher compliance guaranteeing purity, cleanliness, and non-cross-contamination across all supercritical fluid extraction stages.',
      image: '/wp-content/uploads/2026/04/1-1-150x150.webp',
      badge: 'Strict Rabbinical Supervision',
      status: 'Export Grade'
    }
  ];

  return (
    <section id="quality" className="py-20 sm:py-24 bg-white relative overflow-hidden">
      <div id="certifications" className="relative -top-24" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Global Certifications &amp; Quality Assurance
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Every extraction batch follows stringent pharmaceutical and food-grade protocols, validated by third-party global accreditation seals.
          </p>
        </div>

        {/* 4 Authentic Certification Badges Grid (2 in a row on mobile) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 mb-16">
          {primaryCertifications.map((cert) => (
            <div
              key={cert.name}
              className="rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white to-gray-50/80 p-3.5 sm:p-7 border border-gray-200/90 shadow-xs hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 text-center relative overflow-hidden"
            >
              {/* Subtle Top Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 opacity-80 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Official Certification Seal Image */}
                <div className="w-16 h-16 sm:w-28 sm:h-28 mx-auto mb-2.5 sm:mb-5 rounded-xl sm:rounded-2xl bg-white border border-gray-200/80 p-2 sm:p-3 shadow-xs flex items-center justify-center group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Status Pill */}
                <div className="inline-block px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider mb-1.5 sm:mb-2">
                  {cert.status}
                </div>

                <h3 className="text-xs sm:text-lg font-bold text-gray-900 group-hover:text-emerald-800 transition-colors leading-tight">
                  {cert.name}
                </h3>
                <p className="text-[10px] sm:text-xs font-semibold text-emerald-700 mt-1 leading-tight">
                  {cert.subtitle}
                </p>
              </div>

              {/* Bottom Badge */}
              <div className="mt-3 sm:mt-5 pt-2.5 sm:pt-4 border-t border-gray-100">
                <span className="text-[9px] sm:text-[11px] font-bold text-gray-700 bg-gray-100/90 px-2 sm:px-3 py-0.5 sm:py-1 rounded-md sm:rounded-lg inline-block border border-gray-200/70">
                  {cert.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
