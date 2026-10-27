import React from 'react';
import { subBrands, productsList } from '../data/catalog';
import { subCategoriesData } from '../data/subCategories';
import { useNavigation } from '../context/NavigationContext';
import { ArrowLeft, ArrowRight, Sparkles, Layers, ShieldCheck, CheckCircle2, ChevronRight, FileText } from 'lucide-react';

export default function BrandsHubPage({ onOpenQuote }) {
  const { navigate } = useNavigation();

  return (
    <div className="pt-28 pb-24 bg-[#fafbfc] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8 font-medium">
          <button
            onClick={() => navigate('/')}
            className="hover:text-emerald-700 flex items-center gap-1 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <span>/</span>
          <span className="text-gray-900 font-bold">Curated Brands &amp; Products</span>
        </nav>

        {/* Hero Banner */}
        <div className="rounded-3xl bg-white border border-gray-200/90 p-8 sm:p-14 shadow-xs mb-14 relative overflow-hidden">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight max-w-4xl">
            Our Curated Brands &amp; Botanical Portfolio
          </h1>
          <p className="mt-4 text-base sm:text-lg text-emerald-800 font-medium max-w-3xl">
            Explore our four dedicated brand divisions, each engineered for distinct industrial applications spanning supercritical CO₂ extraction, lyophilization, standardized actives, and natural color science.
          </p>
        </div>

        {/* The 4 Curated Brands Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Four Specialized Product Divisions
              </h2>
            </div>
            <span className="text-xs text-gray-500 hidden sm:inline-block">220+ Standardized Phyto-Extracts</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subBrands.map((brand) => {
              const brandSubCats = subCategoriesData.filter((s) => s.subBrandId === brand.id);
              const brandProductsCount = productsList.filter((p) => p.subBrand === brand.id).length;

              return (
                <div
                  key={brand.id}
                  className="rounded-3xl bg-white border border-gray-200/90 p-8 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-1.5"
                    style={{ backgroundColor: brand.accent }}
                  />

                  <div>
                    {/* Header Row: Circular Emblem + Title */}
                    <div className="flex items-center gap-5 mb-6">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1.5 bg-white border border-gray-100 shadow-md shrink-0 flex items-center justify-center">
                        <img
                          src={brand.image}
                          alt={brand.name}
                          className="w-full h-full object-contain rounded-full"
                        />
                      </div>
                      <div>
                        <div
                          className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider mb-1"
                          style={{ backgroundColor: `${brand.accent}15`, color: brand.accent }}
                        >
                          <Sparkles className="w-3 h-3" />
                          <span>{brand.category}</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-emerald-800 transition-colors">
                          {brand.name}
                        </h3>
                        <p className="text-xs font-semibold text-emerald-700 mt-0.5">
                          {brand.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      {brand.description}
                    </p>

                    {/* Dedicated Subcategories / Product Lines */}
                    {brandSubCats.length > 0 && (
                      <div className="mb-6 bg-gray-50/80 p-4 rounded-2xl border border-gray-100">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block mb-2">
                          Key Product Lines:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {brandSubCats.map((sub) => (
                            <button
                              key={sub.slug}
                              onClick={() => navigate(`/${sub.slug}`)}
                              className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white border border-gray-200 hover:border-emerald-500 hover:text-emerald-700 transition-all cursor-pointer shadow-2xs flex items-center gap-1"
                            >
                              <span>{sub.name}</span>
                              <ChevronRight className="w-3 h-3 text-gray-400" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs font-bold text-gray-500">
                      <strong className="text-gray-900">{brandProductsCount}</strong> Verified Items
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onOpenQuote?.(`${brand.name} Division Catalog & CoA`)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-50 hover:bg-emerald-100 text-emerald-900 transition-colors cursor-pointer border border-emerald-200/80"
                      >
                        <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-3.5 h-3.5 object-contain" />
                        <span>Request CoA &amp; Spec</span>
                      </button>
                      <button
                        onClick={() => navigate(`/${brand.id}`)}
                        className="px-5 py-2 rounded-xl text-xs font-bold text-white shadow-xs transition-all cursor-pointer flex items-center gap-1.5 hover:opacity-90"
                        style={{ backgroundColor: brand.accent }}
                      >
                        <span>Explore {brand.name}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technical Collaboration CTA Banner */}
        <div className="rounded-3xl bg-emerald-950 text-white p-8 sm:p-12 relative overflow-hidden border border-emerald-900 shadow-md">
          <div className="max-w-2xl relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">Looking for Customized Active Biomarkers or Blends?</h3>
            <p className="text-emerald-100/90 text-sm leading-relaxed mb-6">
              Our engineering and phyto-chemistry team collaborates directly with food, nutraceutical, and cosmetic brands to formulate custom solvent-free specifications and tailored particle sizes.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => onOpenQuote?.('Custom Formulation & Bioactive Blend Inquiry')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
              >
                <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-4 h-4 object-contain" />
                <span>Request Custom Quote</span>
              </button>
              <button
                onClick={() => navigate('/#catalog')}
                className="px-6 py-3 rounded-full bg-emerald-900/80 hover:bg-emerald-900 border border-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>Browse Homepage Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
