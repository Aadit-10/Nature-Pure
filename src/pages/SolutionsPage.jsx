import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ArrowLeft, Layers, Factory, FlaskConical, PackageCheck, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function SolutionsPage({ onOpenQuote }) {
  const { navigate } = useNavigation();

  const solutionPillars = [
    {
      id: 'bulk-extraction',
      slug: 'bulk-extraction',
      icon: Factory,
      title: 'Bulk Botanical Extraction',
      badge: '150 MT Annual SCFE',
      image: '/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-13-at-10.05.46-PM.jpeg',
      description: 'Leveraging high-pressure supercritical CO₂ extraction to produce high-purity botanical extracts with exceptional batch-to-batch consistency and zero residual solvents.',
      highlights: [
        'Selective isolation of heat-sensitive bioactive compounds',
        'Preservation of true-to-nature aroma, color, and flavor profiles',
        'Zero toxic effluent, pesticide-free extraction',
        'Dual extraction columns capable of 150 MT annual throughput'
      ],
      linkText: 'Explore Bulk Extraction Details'
    },
    {
      id: 'contract-manufacturing',
      slug: 'contract-manufacturing',
      icon: Layers,
      title: 'Contract Manufacturing',
      badge: 'Turnkey cGMP',
      image: '/wp-content/uploads/2026/05/3.jpeg',
      description: 'Dependable and scalable production managing custom formulation, precision blending, supercritical processing, sterile filling, and packaging in GMP clean rooms.',
      highlights: [
        'cGMP-compliant clean room processing environment',
        'Proprietary custom formulations and pilot trials',
        'Flexible batch sizes from development to commercial scales',
        'Full batch records and export-compliant regulatory dossiers'
      ],
      linkText: 'Explore Contract Manufacturing Details'
    },
    {
      id: 'innovation-lab',
      slug: 'innovation-lab',
      icon: FlaskConical,
      title: 'Innovation & Analytical Lab',
      badge: 'R&D Collaboration',
      image: '/wp-content/uploads/2026/05/4.jpeg',
      description: 'Our technical experts collaborate closely with your formulation team to develop customized extractions, optimize parameters, and validate stability.',
      highlights: [
        'In-house GC-MS, HPLC, and UV-Vis spectrophotometers',
        'Custom extraction profiling & compound standardization',
        'Accelerated real-time shelf life and stability studies',
        'Collaborative prototyping for food, pharma & cosmetics'
      ],
      linkText: 'Explore Innovation Lab Details'
    },
    {
      id: 'private-label',
      slug: 'solutions',
      icon: PackageCheck,
      title: 'White Label & Private Label',
      badge: 'Market Ready',
      image: '/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-14-at-2.01.02-PM-1024x768.jpeg',
      description: 'Certified, market-ready standardized botanical extracts, fruit powders, and oleoresins packaged under your brand label with complete regulatory compliance.',
      highlights: [
        'Certified Organic, Halal, Kosher, and FSSAI compliant',
        'Custom packaging formats (drums, carboys, pouches, bottles)',
        'Private label formulation customization and branding support',
        'Export-ready documentation for 25+ global markets'
      ],
      linkText: 'Inquire Private Label Solutions'
    }
  ];

  return (
    <div className="pt-28 pb-24 bg-[#fafbfc] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8 font-medium">
          <button onClick={() => navigate('/')} className="hover:text-emerald-700 flex items-center gap-1 cursor-pointer">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <span>/</span>
          <span className="text-gray-900 font-bold">Solutions</span>
        </nav>

        {/* Hero Section */}
        <div className="rounded-3xl bg-white border border-gray-200/90 p-8 sm:p-14 shadow-xs mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200/80">
            <Layers className="w-3.5 h-3.5 text-emerald-600" />
            <span>Integrated Industrial Platform</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Tailored Botanical Solutions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-emerald-800 font-medium max-w-3xl">
            From pilot concept validation to multi-ton commercial supercritical extraction, our platform accelerates product success across global food, nutraceutical, and personal care markets.
          </p>
          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed max-w-4xl">
            Our Solutions division offers a fully integrated platform of services designed to support businesses across the food, nutraceutical, herbal, and wellness industries. By combining research and development, laboratory testing, large-scale extraction, and finished product manufacturing under one roof, we help our clients reduce time to market, maintain exceptional quality standards, and build products that meet evolving consumer expectations for purity and safety.
          </p>
        </div>

        {/* 4 Solutions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {solutionPillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="rounded-3xl bg-white border border-gray-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-full h-52 overflow-hidden bg-gray-100 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-emerald-950/85 backdrop-blur-md text-emerald-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {item.badge}
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-800 transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed mt-2 mb-6">
                      {item.description}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-gray-100">
                      {item.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2 text-xs text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-8 pt-0 flex items-center gap-3">
                  <button
                    onClick={() => navigate(`/${item.slug}`)}
                    className="flex-grow py-3 px-4 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{item.linkText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onOpenQuote(item.title)}
                    className="py-3 px-5 rounded-xl text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-700 transition-all cursor-pointer whitespace-nowrap shadow-xs"
                  >
                    Quote
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
