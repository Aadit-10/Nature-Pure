import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ArrowLeft, Sparkles, Factory, Award, Globe, Leaf, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AboutUsPage({ onOpenQuote }) {
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
          <span className="text-gray-900 font-bold">About Us</span>
        </nav>

        {/* Hero Section */}
        <div className="rounded-3xl bg-white border border-gray-200/90 p-8 sm:p-14 shadow-xs mb-14 relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200/80">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Who We Are</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight max-w-4xl">
            Innovation-Led Botanical Extraction
          </h1>
          <p className="mt-4 text-base sm:text-lg text-emerald-800 font-medium">
            Your Strategic R&amp;D Partner in Supercritical Fluid &amp; Botanical Ingredient Science
          </p>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              <p>
                Nature Pure Extracts is more than just a supplier of botanical ingredients; we are your strategic R&amp;D partner specializing in advanced CO₂ extraction technology for premium-quality plant extracts. With decades of expertise in botanical science and supercritical CO₂ extraction, we harness the power of clean, solvent-free processes to deliver highly potent, pure, and consistent extracts that preserve the full spectrum of active compounds.
              </p>
              <p>
                Our state-of-the-art CO₂ extraction methods ensure maximum efficacy, safety, and environmental sustainability, making them ideal for applications across nutraceuticals, pharmaceuticals, cosmetics, and functional foods. By combining scientific precision with deep knowledge of natural resources, we bridge the gap between raw botanicals and high-performance formulations.
              </p>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50">
              <img
                src="/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-14-at-2.01.02-PM-1024x768.jpeg"
                alt="Nature Pure Extracts Facility"
                className="w-full h-72 object-cover"
                loading="lazy"
              />
              <div className="p-4 bg-emerald-950 text-white text-xs">
                <span className="font-bold text-amber-300 block">Kinfra Industrial Park, Kerala</span>
                <span className="text-emerald-200">State-of-the-Art Thermodynamic Extraction Plant</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-10 border-t border-gray-100">
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 text-center">
              <div className="text-3xl font-extrabold text-emerald-800">50+</div>
              <div className="text-xs text-gray-500 mt-1">Years of Heritage</div>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 text-center">
              <div className="text-3xl font-extrabold text-emerald-800">25+</div>
              <div className="text-xs text-gray-500 mt-1">Countries Served</div>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 text-center">
              <div className="text-3xl font-extrabold text-emerald-800">150 MT</div>
              <div className="text-xs text-gray-500 mt-1">Annual Processing</div>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 text-center">
              <div className="text-3xl font-extrabold text-emerald-800">0.00 ppm</div>
              <div className="text-xs text-gray-500 mt-1">Zero Solvent Residue</div>
            </div>
          </div>
        </div>

        {/* Explore Sub-Pages Grid */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore Nature Pure Chapters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              onClick={() => navigate('/our-story')}
              className="p-6 rounded-2xl bg-white border border-gray-200/90 hover:border-emerald-600 hover:shadow-lg transition-all cursor-pointer group"
            >
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">Our Heritage</span>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-800">Our Story →</h3>
              <p className="text-xs text-gray-500 mt-2">Discover our journey since 1974 founded by chemical engineer Mr. N. T. Kuruvilla.</p>
            </div>
            <div
              onClick={() => navigate('/infrastructure')}
              className="p-6 rounded-2xl bg-white border border-gray-200/90 hover:border-emerald-600 hover:shadow-lg transition-all cursor-pointer group"
            >
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">Manufacturing</span>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-800">Infrastructure →</h3>
              <p className="text-xs text-gray-500 mt-2">High-pressure SCFE autoclaves, Lyophilization, and in-house GC-MS analytics.</p>
            </div>
            <div
              onClick={() => navigate('/mission-vision')}
              className="p-6 rounded-2xl bg-white border border-gray-200/90 hover:border-emerald-600 hover:shadow-lg transition-all cursor-pointer group"
            >
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">Philosophy</span>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-800">Mission &amp; Vision →</h3>
              <p className="text-xs text-gray-500 mt-2">Nature. Innovation. Humanity. Setting benchmarks in sustainable extraction.</p>
            </div>
            <div
              onClick={() => navigate('/leadership')}
              className="p-6 rounded-2xl bg-white border border-gray-200/90 hover:border-emerald-600 hover:shadow-lg transition-all cursor-pointer group"
            >
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">Governance</span>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-800">Leadership →</h3>
              <p className="text-xs text-gray-500 mt-2">Guided by experienced chemical engineers and industrial innovators.</p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl font-bold">Partner with Nature Pure Extracts</h3>
            <p className="text-xs sm:text-sm text-emerald-200 mt-1 max-w-xl">
              From raw botanicals to refined formulations, we deliver high-purity, solvent-free extracts backed by science and precision.
            </p>
          </div>
          <button
            onClick={() => onOpenQuote('About Us Inquiry')}
            className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md cursor-pointer whitespace-nowrap"
          >
            Request Commercial Quote
          </button>
        </div>
      </div>
    </div>
  );
}
