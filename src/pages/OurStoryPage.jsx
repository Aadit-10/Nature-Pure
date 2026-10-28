import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { heritageTimeline } from '../data/catalog';
import { ArrowLeft, Clock, Award, Building, Sparkles, CheckCircle2 } from 'lucide-react';

export default function OurStoryPage({ onOpenQuote }) {
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
          <span className="text-gray-900 font-bold">Our Story</span>
        </nav>

        {/* Story Hero */}
        <div className="rounded-3xl bg-white border border-gray-200/90 p-8 sm:p-14 shadow-xs mb-14">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Our Story: Rooted in Scientific Excellence
          </h1>
          <p className="mt-3 text-base sm:text-lg text-emerald-800 font-medium">
            From chemical engineering pioneering in 1974 to global leadership in supercritical CO₂ extraction.
          </p>

          {/* Founder Feature */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-gray-50/80 p-8 rounded-3xl border border-gray-200/70">
            <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100">
              <div className="w-full bg-slate-100/60 flex items-center justify-center p-2">
                <img
                  src="/wp-content/uploads/2026/05/WhatsApp-Image-2026-04-13-at-12.05.57-PM-967x1024.jpeg"
                  alt="Founder Mr. N. T. Kuruvilla"
                  className="w-full h-80 sm:h-96 object-contain object-top rounded-lg"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-emerald-950 text-white text-xs">
                <span className="font-bold text-amber-300 block text-sm">Mr. N. T. Kuruvilla</span>
                <span className="text-emerald-200">Founder &amp; Chemical Engineer (UDCT)</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p>
                The journey began in <strong>1974</strong>, when <strong>Mr. N. T. Kuruvilla</strong>, a distinguished Chemical Engineering graduate from UDCT (now ICT Mumbai), established his first entrepreneurial venture after an impactful early career with Pfizer. This formative exposure to pharmaceutical-grade manufacturing standards laid the cornerstone of our company philosophy: precision, uncompromising purity, and process integrity.
              </p>
              <p>
                At a time when stability defined conventional success, Mr. Kuruvilla pursued a forward-looking path—harnessing chemical engineering science to transform Indian botanical riches into global standardized ingredients.
              </p>
              <p className="text-emerald-900 font-semibold italic border-l-4 border-emerald-600 pl-4 py-1">
                "Our journey is guided by three enduring pillars: Nature. Innovation. Humanity."
              </p>
            </div>
          </div>
        </div>

        {/* Milestone Timeline */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-extrabold text-gray-900 mt-1">Five Decades of Industrial Milestones</h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              A 50-year progression from pharmaceutical benchmarks to operating India's benchmark supercritical CO₂ processing facilities.
            </p>
          </div>

          {/* Timeline Track */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Center Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-300 via-emerald-600 to-teal-800 -translate-x-1/2" />

            <div className="space-y-12">
              {heritageTimeline.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={item.year}
                    className={`flex flex-col md:flex-row items-center ${
                      isEven ? 'md:flex-row-reverse' : ''
                    } gap-6 md:gap-12 relative`}
                  >
                    {/* Content Card */}
                    <div className="w-full md:w-1/2">
                      <div className="bg-white p-7 rounded-3xl border border-amber-200/70 shadow-sm hover:shadow-xl transition-all duration-300 relative group hover:-translate-y-1">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-100/70 text-amber-900 border border-amber-200">
                            {item.badge}
                          </span>
                          <span className="text-xl font-black text-emerald-800">
                            {item.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-800 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-2.5 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Center Node */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-emerald-800 text-white font-bold text-xs items-center justify-center border-4 border-white shadow-md z-10">
                      <Clock className="w-4 h-4 text-amber-300" />
                    </div>

                    {/* Empty side for layout spacing */}
                    <div className="hidden md:block w-1/2" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Heritage Gallery */}
        <div className="mb-14">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Archive &amp; Historical Footprint</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-3xl overflow-hidden bg-white border border-gray-200/90 shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
              <div className="w-full bg-slate-900/5 flex items-center justify-center p-3 sm:p-5">
                <img
                  src="/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-12-at-9.47.36-PM-1001x1024.jpeg"
                  alt="Historical extraction laboratory team"
                  className="w-full h-auto max-h-[480px] object-contain object-top rounded-xl shadow-xs"
                  loading="lazy"
                />
              </div>
              <div className="p-5 bg-gray-50/90 border-t border-gray-100 text-xs text-gray-700 leading-relaxed font-medium">
                Pioneering extraction and synthesis experiments laid the foundation for high-performance color and botanical fractions.
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden bg-white border border-gray-200/90 shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
              <div className="w-full bg-slate-900/5 flex items-center justify-center p-3 sm:p-5">
                <img
                  src="/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-12-at-9.44.38-PM-1024x796.jpeg"
                  alt="Early production team"
                  className="w-full h-auto max-h-[480px] object-contain object-top rounded-xl shadow-xs"
                  loading="lazy"
                />
              </div>
              <div className="p-5 bg-gray-50/90 border-t border-gray-100 text-xs text-gray-700 leading-relaxed font-medium">
                Continuous expansion across synthetic colorants, food additives, and modern supercritical fluid extraction.
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links Footer */}
        <div className="p-8 rounded-3xl bg-white border border-gray-200 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h4 className="text-lg font-bold text-gray-900">Next: Modern Manufacturing Capabilities</h4>
            <p className="text-xs text-gray-500">Explore our high-pressure SCFE extraction autoclaves and analytical QC facility.</p>
          </div>
          <button
            onClick={() => navigate('/infrastructure')}
            className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-emerald-800 hover:bg-emerald-700 transition-all cursor-pointer"
          >
            Explore Infrastructure →
          </button>
        </div>
      </div>
    </div>
  );
}
