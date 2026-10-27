import React, { useState } from 'react';
import { subBrands } from '../data/catalog';
import { useNavigation } from '../context/NavigationContext';
import { ArrowRight, Sparkles, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

export default function SubBrandsSection() {
  const { navigate } = useNavigation();
  const [expandedBrands, setExpandedBrands] = useState({});

  const toggleExpand = (e, brandId) => {
    e.stopPropagation();
    setExpandedBrands((prev) => ({
      ...prev,
      [brandId]: !prev[brandId]
    }));
  };

  return (
    <section id="sub-brands" className="py-24 bg-[#f8faf9] relative overflow-hidden border-b border-gray-100">
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Our Curated Brands.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Four specialized divisions engineered for global food, beverage, nutraceutical, pharmaceutical, and personal care industries.
          </p>
        </div>

        {/* 4 Authentic Brands Grid (2 in a row on mobile, 4 in a row on desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-7 items-start">
          {subBrands.map((brand) => {
            const isExpanded = !!expandedBrands[brand.id];

            return (
              <div
                key={brand.id}
                onClick={() => navigate(`/${brand.id}`)}
                className="group relative rounded-2xl sm:rounded-3xl bg-white border border-gray-200/90 p-3.5 sm:p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1 cursor-pointer"
              >
                {/* Decorative top accent stripe */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 sm:h-1.5 transition-all group-hover:h-2"
                  style={{ backgroundColor: brand.accent }}
                />

                <div>
                  {/* Brand Logo Circular Emblem */}
                  <div className="w-14 h-14 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto mb-2.5 sm:mb-5 relative rounded-full p-1 bg-white border border-gray-100 shadow-xs flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="w-full h-full object-contain rounded-full"
                      loading="lazy"
                    />
                  </div>

                  {/* Brand Name & Tagline */}
                  <div className="text-center mb-2 sm:mb-3">
                    <h3 className="text-sm sm:text-xl md:text-2xl font-extrabold text-gray-900 group-hover:text-emerald-800 transition-colors leading-tight">
                      {brand.name}
                    </h3>
                    <p className="text-[10px] sm:text-xs font-semibold text-emerald-700 mt-0.5 sm:mt-1 uppercase tracking-wider line-clamp-1">
                      {brand.tagline}
                    </p>
                  </div>

                  {/* Concise Description */}
                  <p className="text-[11px] sm:text-sm text-gray-600 leading-relaxed text-center mb-2.5 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                    {brand.description}
                  </p>

                  {/* Dropdown / Toggle Button to Show/Hide Key Product Lines & Details */}
                  <div className="text-center mb-2">
                    <button
                      type="button"
                      onClick={(e) => toggleExpand(e, brand.id)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold bg-gray-50 hover:bg-emerald-50 text-gray-700 hover:text-emerald-800 border border-gray-200 transition-colors cursor-pointer shadow-2xs"
                    >
                      <span className="hidden sm:inline">{isExpanded ? 'Hide Details' : 'Key Product Lines & Info'}</span>
                      <span className="sm:hidden">{isExpanded ? 'Hide Info' : 'Key Lines'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-700" />
                      ) : (
                        <ChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-700" />
                      )}
                    </button>
                  </div>

                  {/* Collapsible Section: Subcategories & Key Product Lines */}
                  {isExpanded && (
                    <div className="pt-2.5 sm:pt-4 border-t border-gray-100 animate-in fade-in duration-200">
                      <span className="text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1.5 sm:mb-2">
                        Key Product Lines
                      </span>
                      <div className="space-y-1 sm:space-y-1.5 mb-2.5 sm:mb-3">
                        {brand.subCategories.map((sub) => (
                          <div key={sub.name} className="flex items-start gap-1 sm:gap-1.5 text-[11px] sm:text-xs text-gray-700">
                            <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="font-medium line-clamp-1">{sub.name}</span>
                          </div>
                        ))}
                      </div>

                      {/* Featured Items Pills */}
                      <span className="text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                        Featured Extracts
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {brand.featuredProducts.slice(0, 3).map((item) => (
                          <span
                            key={item}
                            className="text-[10px] sm:text-[11px] bg-gray-50 text-gray-600 px-1.5 sm:px-2 py-0.5 rounded-md font-medium border border-gray-100"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Always-Visible Action Button */}
                <div className="mt-3.5 sm:mt-5 pt-3 sm:pt-4 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/${brand.id}`);
                    }}
                    className="w-full py-2 sm:py-2.5 px-2 sm:px-4 rounded-xl text-[11px] sm:text-xs font-bold text-center transition-all flex items-center justify-center gap-1 sm:gap-2 cursor-pointer shadow-xs hover:shadow-md"
                    style={{
                      backgroundColor: `${brand.accent}15`,
                      color: brand.accent,
                      border: `1px solid ${brand.accent}30`
                    }}
                  >
                    <span className="hidden sm:inline">Explore {brand.name} Page</span>
                    <span className="sm:hidden">Explore Page</span>
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
