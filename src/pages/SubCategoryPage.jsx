import React, { useState, useMemo, useEffect } from 'react';
import { subCategoriesData } from '../data/subCategories';
import { subBrands, productsList } from '../data/catalog';
import { useNavigation } from '../context/NavigationContext';
import { ArrowLeft, ArrowRight, CheckCircle2, FileText, Search, Sparkles, Droplet, Layers } from 'lucide-react';

export default function SubCategoryPage({ slug, onOpenQuote }) {
  const { navigate } = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(9);
  const [activeSectionFilter, setActiveSectionFilter] = useState('all'); // 'all' | 'flavors' | 'fragrance'

  const subCategory =
    subCategoriesData.find((s) => s.slug === slug || (s.slug === 'food-additives' && (slug === 'food-addictives' || slug === 'food-additive'))) ||
    subCategoriesData[0];
  const parentBrand = subBrands.find((b) => b.id === subCategory.subBrandId) || subBrands[0];
  const isDualSectionPage = subCategory.slug === 'natural-flavors-and-fragrance';
  const isFoodAdditives =
    subCategory.slug === 'food-additives' ||
    subCategory.slug === 'food-addictives' ||
    subCategory.name.toLowerCase().includes('additive');

  // Reset pagination & section filter when slug or search changes
  useEffect(() => {
    setVisibleCount(9);
  }, [slug, searchQuery]);

  // Products belonging to this subcategory
  const products = useMemo(() => {
    return productsList.filter((p) => {
      const subCatName = subCategory.name.toLowerCase();
      const pSub = p.subCategory ? p.subCategory.toLowerCase() : '';
      const matchSub =
        pSub === subCatName ||
        pSub.includes(subCatName) ||
        subCatName.includes(pSub) ||
        (isDualSectionPage && (pSub.includes('flavor') || pSub.includes('fragrance'))) ||
        (isFoodAdditives && (pSub === 'food additives' || pSub === 'food addictives'));

      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        (p.botanical && p.botanical.toLowerCase().includes(q)) ||
        (p.keyActives && p.keyActives.toLowerCase().includes(q));

      return matchSub && matchQuery;
    });
  }, [subCategory, searchQuery, isDualSectionPage]);

  // Dual Section Subsets (Flavors & Fragrance)
  const flavorsProducts = useMemo(() => {
    if (!isDualSectionPage) return [];
    return products.filter((p) => p.sectionCategory === "Nature's Flavors" || (!p.sectionCategory && p.subCategory.toLowerCase().includes('flavor')));
  }, [isDualSectionPage, products]);

  const fragranceProducts = useMemo(() => {
    if (!isDualSectionPage) return [];
    return products.filter((p) => p.sectionCategory === "Nature's Fragrance" || (!p.sectionCategory && p.subCategory.toLowerCase().includes('fragrance')));
  }, [isDualSectionPage, products]);

  const visibleProducts = products.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 9);
  };

  // Render a reusable product card
  const renderProductCard = (product, badgeLabel) => {
    if (isFoodAdditives) {
      return (
        <div
          key={`${product.id}-${product.name}`}
          className="group rounded-2xl bg-white border border-gray-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
        >
          <div>
            {/* Authentic Product Slide Graphic shown prominent & uncropped like previous website */}
            <div className="w-full aspect-[1264/841] bg-gray-50 border-b border-gray-100 overflow-hidden relative flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            <div className="p-4 sm:p-5">
              <h4 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-amber-800 transition-colors">
                {product.name}
              </h4>
              <p className="text-xs text-gray-500 mt-1 font-medium">
                {product.botanical || product.keyActives}
              </p>
            </div>
          </div>

          <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-3 flex items-center justify-between gap-2 border-t border-gray-100/70">
            <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>FCC / Food Grade</span>
            </span>
            <button
              onClick={() => onOpenQuote?.(product.name)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#25D366]/15 hover:bg-[#25D366] text-emerald-950 hover:text-white transition-all cursor-pointer border border-[#25D366]/30"
              title={`Inquire about ${product.name} on WhatsApp`}
            >
              <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-3.5 h-3.5 object-contain" />
              <span>Inquire / CoA</span>
            </button>
          </div>
        </div>
      );
    }

    return (
      <div
        key={`${product.id}-${product.name}`}
      className="group rounded-2xl bg-white border border-gray-200/90 p-5 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
    >
      <div>
        {/* Authentic Product Image */}
        <div className="w-full h-48 rounded-xl bg-slate-50 border border-gray-100 overflow-hidden mb-4 relative flex items-center justify-center p-3">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute top-2.5 left-2.5 bg-emerald-950/85 text-emerald-200 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider backdrop-blur-xs">
            {badgeLabel || product.sectionCategory || subCategory.name}
          </div>
        </div>

        {product.botanical && product.botanical !== product.name && (
          <span className="text-[11px] font-semibold italic text-emerald-700 block mb-0.5">
            {product.botanical}
          </span>
        )}

        <h4 className="text-base font-bold text-gray-900 group-hover:text-emerald-800 transition-colors">
          {product.name}
        </h4>

        <div className="mt-2.5 p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-100/80 text-[11px]">
          <span className="text-gray-500 block">Active Components:</span>
          <span className="font-semibold text-emerald-900 line-clamp-2">
            {product.keyActives}
          </span>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
        <span className="text-[10px] font-semibold text-emerald-700 flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
          CoA Ready
        </span>
        <button
          onClick={() => onOpenQuote?.(product.name)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-[#25D366]/15 hover:bg-[#25D366] text-emerald-950 hover:text-white transition-all cursor-pointer border border-[#25D366]/30"
          title={`Inquire about ${product.name} on WhatsApp`}
        >
          <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-3.5 h-3.5 object-contain" />
          <span>Inquire / CoA</span>
        </button>
      </div>
    </div>
  );
};

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
          <button
            onClick={() => navigate(`/${parentBrand.id}`)}
            className="hover:text-emerald-700 cursor-pointer"
          >
            {parentBrand.name}
          </button>
          <span>/</span>
          <span className="text-gray-900 font-bold">{subCategory.name}</span>
        </nav>

        {/* Subcategory Hero Banner */}
        <div className="rounded-3xl bg-white border border-gray-200/90 p-8 sm:p-12 shadow-sm mb-12 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 right-0 h-2"
            style={{ backgroundColor: subCategory.accent }}
          />

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
            {/* Parent Brand Emblem */}
            <div
              onClick={() => navigate(`/${parentBrand.id}`)}
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-full p-2 bg-white border border-gray-100 shadow-md shrink-0 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
              title={`View ${parentBrand.name}`}
            >
              <img
                src={parentBrand.image}
                alt={parentBrand.name}
                className="w-full h-full object-contain rounded-full"
              />
            </div>

            {/* Subcategory Heading */}
            <div className="text-center md:text-left flex-grow">
              <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
                {subCategory.name}
              </h1>
              <p className="text-sm sm:text-base font-semibold text-emerald-700 mt-2">
                {subCategory.tagline}
              </p>
              <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed max-w-3xl">
                {subCategory.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3">
                <button
                  onClick={() => onOpenQuote?.(`${subCategory.name} Technical CoA & Samples`)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all cursor-pointer"
                  style={{ backgroundColor: subCategory.accent }}
                >
                  <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-4 h-4 object-contain brightness-0 invert" />
                  <span>Request Technical CoA &amp; Samples</span>
                </button>
                <button
                  onClick={() => navigate(`/${parentBrand.id}`)}
                  className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all cursor-pointer"
                >
                  Explore All {parentBrand.name} Products
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Subcategory Verified Products Header & Search */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-gray-200">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                {subCategory.name} Products
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Authentic extracts and ingredients photographed directly from our manufacturing batches.
              </p>
            </div>

            {/* Live Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search in ${subCategory.name}...`}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Dual Section Filter Tabs (Nature's Flavors & Nature's Fragrance) */}
          {isDualSectionPage && (
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-gray-500 mr-1 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-emerald-600" />
                <span>Categories:</span>
              </span>
              <button
                onClick={() => setActiveSectionFilter('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeSectionFilter === 'all'
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                All Sections ({products.length})
              </button>
              <button
                onClick={() => setActiveSectionFilter('flavors')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeSectionFilter === 'flavors'
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                Nature's Flavors ({flavorsProducts.length})
              </button>
              <button
                onClick={() => setActiveSectionFilter('fragrance')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeSectionFilter === 'fragrance'
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                Nature's Fragrance ({fragranceProducts.length})
              </button>
            </div>
          )}

          {/* Counter Bar for single section mode */}
          {!isDualSectionPage && (
            <div className="mt-4 mb-6 flex items-center justify-between text-xs text-gray-500 font-medium">
              <span>
                Showing <strong className="text-gray-900">{visibleProducts.length}</strong> of{' '}
                <strong className="text-gray-900">{products.length}</strong> products
              </span>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-emerald-700 hover:underline font-bold cursor-pointer"
                >
                  Clear Search
                </button>
              )}
            </div>
          )}
        </div>

        {/* Empty Search Result */}
        {products.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-gray-200">
            <Droplet className="w-10 h-10 text-gray-300 mx-auto mb-2" />
            <h4 className="text-base font-bold text-gray-800">No products found matching your search</h4>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-3 text-xs font-bold text-emerald-700 underline cursor-pointer"
            >
              Clear search query
            </button>
          </div>
        ) : isDualSectionPage ? (
          /* ========================================================================= */
          /* DUAL SECTION MODE: Nature's Flavors Section + Nature's Fragrance Section  */
          /* ========================================================================= */
          <div className="space-y-16">
            {/* 1. Nature's Flavors Section */}
            {(activeSectionFilter === 'all' || activeSectionFilter === 'flavors') && (
              <section id="natures-flavors-section" className="scroll-mt-28">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-6 border-b-2 border-emerald-600/30">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                      Nature's Flavors
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-3xl">
                      Authentic, high-potency spice and botanical flavor concentrates formulated for beverage, bakery, confectionery, dairy, and culinary seasonings.
                    </p>
                  </div>
                  <span className="shrink-0 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold self-start sm:self-center">
                    {flavorsProducts.length} Flavors
                  </span>
                </div>

                {flavorsProducts.length === 0 ? (
                  <p className="text-xs text-gray-500 italic py-6">No flavor products match your current search.</p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {flavorsProducts.map((p) => renderProductCard(p, "Nature's Flavors"))}
                  </div>
                )}
              </section>
            )}

            {/* 2. Nature's Fragrance Section */}
            {(activeSectionFilter === 'all' || activeSectionFilter === 'fragrance') && (
              <section id="natures-fragrance-section" className="scroll-mt-28">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-6 border-b-2 border-sky-600/30">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                      Nature's Fragrance
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-3xl">
                      Pure botanical aromatic distillates, essential oils, and terpene fractions formulated for fine perfumery, candles, wellness, and personal care applications.
                    </p>
                  </div>
                  <span className="shrink-0 px-3 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-bold self-start sm:self-center">
                    {fragranceProducts.length} Fragrances
                  </span>
                </div>

                {fragranceProducts.length === 0 ? (
                  <p className="text-xs text-gray-500 italic py-6">No fragrance products match your current search.</p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {fragranceProducts.map((p) => renderProductCard(p, "Nature's Fragrance"))}
                  </div>
                )}
              </section>
            )}
          </div>
        ) : (
          /* ========================================================================= */
          /* STANDARD SUB-CATEGORY GRID (with Load More & Dim Counter)                 */
          /* ========================================================================= */
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleProducts.map((product) => renderProductCard(product))}
            </div>

            {/* Load More Pagination & Dim Status Text */}
            <div className="mt-12 text-center">
              {visibleCount < products.length ? (
                <>
                  <button
                    onClick={handleLoadMore}
                    className="px-8 py-3.5 rounded-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-0.5"
                  >
                    Load More Products
                  </button>
                  <p className="text-xs text-gray-400 mt-2.5 font-medium">
                    {visibleProducts.length} of {products.length} shown
                  </p>
                </>
              ) : (
                products.length > 9 && (
                  <p className="text-xs text-gray-400 font-medium">
                    All {products.length} of {products.length} shown
                  </p>
                )
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
