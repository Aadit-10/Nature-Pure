import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { leadershipTeam } from '../data/catalog';
import { ArrowLeft, HeartHandshake, Quote, Shield, Award, Sparkles } from 'lucide-react';

export default function LeadershipPage({ onOpenQuote }) {
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
          <span className="text-gray-900 font-bold">Leadership</span>
        </nav>

        {/* Hero Section */}
        <div className="rounded-3xl bg-white border border-gray-200/90 p-8 sm:p-14 shadow-xs mb-14 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200/80">
            <HeartHandshake className="w-3.5 h-3.5 text-emerald-600" />
            <span>Executive Governance</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Scientific Stewardship &amp; Strategic Vision
          </h1>
          <p className="mt-4 text-base sm:text-lg text-emerald-800 font-medium">
            Guided by chemical engineers and experienced industry innovators.
          </p>
          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Our leadership team unites chemical engineering rigor, deep pharmaceutical standards, and global commercial strategy to steer Nature Pure’s global extraction leadership.
          </p>
        </div>

        {/* 3 Executive Leaders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {leadershipTeam.map((leader) => (
            <div
              key={leader.name}
              className="rounded-3xl bg-white border border-gray-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="w-full h-80 overflow-hidden bg-gray-200 relative">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6 text-white">
                    <h3 className="text-xl font-bold text-white">{leader.name}</h3>
                    <p className="text-xs text-amber-300 font-semibold uppercase tracking-wider mt-0.5">
                      {leader.role}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md inline-block mb-3">
                    {leader.credentials}
                  </span>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>

              {/* Quote Footer */}
              <div className="p-6 pt-0">
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                  <Quote className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-xs italic text-gray-700 leading-snug">
                    "{leader.quote}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pillars Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-950 via-teal-950 to-emerald-900 text-white shadow-xl mb-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">Operational Excellence</span>
            <h3 className="text-2xl font-bold mt-1">The Five Pillars of Nature Pure Governance</h3>
            <p className="text-xs text-emerald-200 mt-2">Enforced across every batch, analytical CoA, and client agreement.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-center">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-2xl mb-2 block">🔬</span>
              <strong className="text-xs font-bold block text-white">Scientific Precision</strong>
              <span className="text-[11px] text-gray-300">UDCT-trained engineering</span>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-2xl mb-2 block">🌱</span>
              <strong className="text-xs font-bold block text-white">100% Solvent-Free</strong>
              <span className="text-[11px] text-gray-300">Pure thermodynamic CO₂</span>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-2xl mb-2 block">♻️</span>
              <strong className="text-xs font-bold block text-white">Closed-Loop Green</strong>
              <span className="text-[11px] text-gray-300">95%+ gas recycling</span>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-2xl mb-2 block">🤝</span>
              <strong className="text-xs font-bold block text-white">Full Traceability</strong>
              <span className="text-[11px] text-gray-300">Lot-by-lot CoA verification</span>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-2xl mb-2 block">⚡</span>
              <strong className="text-xs font-bold block text-white">Scalable 150 MT</strong>
              <span className="text-[11px] text-gray-300">Continuous bulk capacity</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
