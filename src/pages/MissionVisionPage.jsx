import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ArrowLeft, Compass, Eye, Target, Sparkles, HeartHandshake, ShieldCheck, Leaf } from 'lucide-react';

export default function MissionVisionPage({ onOpenQuote }) {
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
          <span className="text-gray-900 font-bold">Mission &amp; Vision</span>
        </nav>

        {/* Hero Section */}
        <div className="rounded-3xl bg-white border border-gray-200/90 p-8 sm:p-14 shadow-xs mb-14 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200/80">
            <Compass className="w-3.5 h-3.5 text-emerald-600" />
            <span>Core Organizational Philosophy</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Driving Purity Through Innovation
          </h1>
          <p className="mt-4 text-base sm:text-lg text-emerald-800 font-medium">
            Nature. Innovation. Humanity.
          </p>
          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            We combine advanced extraction technologies, uncompromising quality standards, and sustainable manufacturing practices to create premium natural ingredients trusted by industries around the world.
          </p>
        </div>

        {/* Vision & Mission Split Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Vision Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-emerald-50/70 via-white to-emerald-50/30 border border-emerald-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-emerald-800 text-white flex items-center justify-center mb-6 shadow-md">
                <Eye className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-2">
                Long-Term Aspiration
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                To become a globally recognized leader in natural food ingredients and supercritical extracts, setting new benchmarks in purity, innovation, and sustainable manufacturing.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-4">
                We envision a future where advanced extraction technologies, rigorous quality standards, and continuous research drive the creation of safe, high-performance ingredients trusted by industries worldwide. Through technological excellence and environmental responsibility, we aim to build a brand synonymous with reliability, global reach, and uncompromising quality.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-emerald-200/60 flex items-center gap-2 text-xs font-bold text-emerald-800">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Benchmark of Botanical Integrity</span>
            </div>
          </div>

          {/* Mission Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-amber-50/70 via-white to-amber-50/30 border border-amber-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-amber-700 text-white flex items-center justify-center mb-6 shadow-md">
                <Target className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-2">
                Everyday Commitment
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                We are committed to manufacturing premium-quality natural food ingredients with exceptional purity and consistency.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-4">
                By leveraging cutting-edge technologies such as supercritical CO₂ extraction, maintaining the highest standards of food safety, and embracing eco-friendly practices, we deliver innovative solutions that meet evolving global market demands and exceed customer expectations.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-amber-200/60 flex items-center gap-2 text-xs font-bold text-amber-900">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span>Pharmaceutical-Grade Consistency</span>
            </div>
          </div>
        </div>

        {/* Guiding Principles */}
        <div className="rounded-3xl bg-white border border-gray-200/90 p-8 sm:p-12 mb-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Core Values</span>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">What Guides Every Decision at Nature Pure</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 text-center">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">1. Nature</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Reverence for natural botanical matrices. We preserve the full symphony of active phyto-compounds without harsh petrochemical adulteration.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 text-center">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">2. Innovation</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Relentless investment in thermodynamic supercritical CO₂ technology, lyophilization techniques, and advanced analytical chromatography.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 text-center">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center mx-auto mb-4">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">3. Humanity</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Safety, traceability, and ethical commerce. Producing clean-label ingredients that promote wellness and human health across 25+ nations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
