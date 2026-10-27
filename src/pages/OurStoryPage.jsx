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
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mt-1">Five Decades of Industrial Milestones</h2>
          </div>

          <div className="relative border-l-2 border-emerald-300/60 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
            {heritageTimeline.map((item) => (
              <div key={item.year} className="relative group">
                {/* Year Marker Pill */}
                <div className="absolute -left-[37px] sm:-left-[53px] top-0 w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs shadow-md border-4 border-white">
                  ✓
                </div>

                <div className="rounded-2xl bg-white border border-gray-200/90 p-6 sm:p-8 shadow-xs hover:shadow-lg transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-800">
                      {item.year}
                    </span>
                    <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                      {item.tagline}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 pt-3 border-t border-gray-100">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Impact: {item.impact}</span>
                  </div>
                </div>
              </div>
            ))}
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
