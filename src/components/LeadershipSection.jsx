import React from 'react';
import { leadershipTeam } from '../data/catalog';
import { Quote, Award, Shield, Compass, Target, Eye, HeartHandshake } from 'lucide-react';

export default function LeadershipSection() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission & Vision Section (from mission-vision.html) */}
        <div id="mission" className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200">
              <Compass className="w-3.5 h-3.5 text-emerald-700" />
              <span>Core Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Driving Purity Through Innovation
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              Anchored in our enduring philosophy: <strong className="text-emerald-800">Nature. Innovation. Humanity.</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-50/70 to-teal-50/40 border border-emerald-200/80 shadow-xs relative">
              <div className="w-12 h-12 rounded-2xl bg-emerald-800 text-white flex items-center justify-center mb-6 shadow-md">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                To become a globally recognized leader in natural food ingredients and supercritical extracts, setting new benchmarks in purity, innovation, and sustainable manufacturing. We envision a future where advanced extraction technologies, rigorous quality standards, and continuous research drive the creation of safe, high-performance ingredients trusted by industries worldwide.
              </p>
            </div>

            {/* Mission Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-50/70 to-orange-50/40 border border-amber-200/80 shadow-xs relative">
              <div className="w-12 h-12 rounded-2xl bg-amber-700 text-white flex items-center justify-center mb-6 shadow-md">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                We are committed to manufacturing premium-quality natural food ingredients with exceptional purity and consistency. By leveraging cutting-edge technologies such as supercritical CO₂ extraction, maintaining the highest standards of food safety, and embracing eco-friendly practices, we deliver innovative solutions that meet evolving global market demands and exceed customer expectations.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Section Header */}
        <div id="leadership" className="pt-8 text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200">
            <HeartHandshake className="w-3.5 h-3.5 text-emerald-700" />
            <span>Executive Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Scientific Stewardship &amp; Strategic Vision
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Led by experienced chemical engineers and industrial innovators dedicated to pure botanical science and global sustainability.
          </p>
        </div>

        {/* 3 Executive Leaders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {leadershipTeam.map((leader) => (
            <div
              key={leader.name}
              className="rounded-3xl bg-gray-50/80 border border-gray-200/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 group"
            >
              <div>
                {/* Image */}
                <div className="w-full h-72 overflow-hidden bg-gray-200 relative">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <h3 className="text-xl font-bold text-white">{leader.name}</h3>
                    <p className="text-xs text-amber-300 font-semibold uppercase tracking-wider">
                      {leader.role}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-xs font-semibold text-emerald-800 bg-emerald-100/70 border border-emerald-200/80 px-2.5 py-1 rounded-md inline-block mb-3">
                    {leader.credentials}
                  </span>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>

              {/* Quote Footer */}
              <div className="p-6 pt-0">
                <div className="p-4 rounded-2xl bg-white border border-gray-100 flex items-start gap-3 shadow-xs">
                  <Quote className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-xs italic text-gray-700 leading-snug">
                    "{leader.quote}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Principles Grid */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-900 to-teal-950 text-white shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h4 className="text-xl font-bold">The Five Pillars of Nature Pure Excellence</h4>
            <p className="text-xs text-emerald-200 mt-1">Guiding every extraction batch, R&amp;D partnership, and global shipment.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-lg mb-1 block">🔬</span>
              <strong className="text-xs font-bold block text-white">Scientific Precision</strong>
              <span className="text-[11px] text-gray-300">Pharma-grade parameters</span>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-lg mb-1 block">🌱</span>
              <strong className="text-xs font-bold block text-white">100% Solvent-Free</strong>
              <span className="text-[11px] text-gray-300">Pure CO₂ extraction</span>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-lg mb-1 block">♻️</span>
              <strong className="text-xs font-bold block text-white">Closed-Loop Green</strong>
              <span className="text-[11px] text-gray-300">95%+ CO₂ recycling</span>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-lg mb-1 block">🤝</span>
              <strong className="text-xs font-bold block text-white">Client Traceability</strong>
              <span className="text-[11px] text-gray-300">Farm-to-CoA tracking</span>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-lg mb-1 block">⚡</span>
              <strong className="text-xs font-bold block text-white">Scalable 150 MT</strong>
              <span className="text-[11px] text-gray-300">Continuous bulk capacity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
