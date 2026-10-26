import React from 'react';
import { heritageTimeline } from '../data/catalog';
import { Calendar, Award, History, Clock } from 'lucide-react';

export default function HeritageTimeline() {
  return (
    <section id="heritage" className="py-24 bg-amber-50/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-200">
            <History className="w-3.5 h-3.5 text-amber-700" />
            <span>50-Year Scientific Heritage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Our Journey of Botanical Excellence
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            From pharmaceutical standards instilled in 1973 to operating India's most advanced supercritical CO₂ processing facilities.
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
    </section>
  );
}
