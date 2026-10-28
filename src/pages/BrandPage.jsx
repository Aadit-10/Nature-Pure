import React, { useState, useMemo, useEffect } from 'react';
import { subBrands, productsList } from '../data/catalog';
import { subCategoriesData } from '../data/subCategories';
import { useNavigation } from '../context/NavigationContext';
import { ArrowLeft, ArrowRight, CheckCircle2, FileText, Search, Sparkles, Droplet, Filter, Layers } from 'lucide-react';

export default function BrandPage({ brandId, onOpenQuote }) {
  const { navigate } = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSubCat, setActiveSubCat] = useState('all');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(9);

  const brand = subBrands.find((b) => b.id === brandId) || subBrands[0];

  // Subcategories belonging to this brand
  const subCats = useMemo(() => {
    return subCategoriesData.filter((s) => s.subBrandId === brand.id);
  }, [brand.id]);

  // All products for this brand
  const allBrandProducts = useMemo(() => {
    return productsList.filter((p) => p.subBrand === brand.id);
  }, [brand.id]);

  // Distinct subcategory names for tabs directly from actual products
  const productSubCats = useMemo(() => {
    const set = new Set();
    allBrandProducts.forEach((p) => {
      if (p.subCategory) set.add(p.subCategory);
    });
    return Array.from(set);
  }, [allBrandProducts]);

  // Distinct categories / forms for secondary filter
  const productCategories = useMemo(() => {
    const set = new Set();
    allBrandProducts.forEach((p) => {
      if (p.category) set.add(p.category);
    });
    return ['all', ...Array.from(set)];
  }, [allBrandProducts]);

  // Reset pagination when filter or search changes
  useEffect(() => {
    setVisibleCount(9);
  }, [activeSubCat, activeCategoryFilter, searchQuery]);

  // Filtered products list
  const filteredProducts = useMemo(() => {
    return allBrandProducts.filter((p) => {
      // Subcategory match
      const matchSubCat =
        activeSubCat === 'all' ||
        p.subCategory.toLowerCase() === activeSubCat.toLowerCase() ||
        p.subCategory.toLowerCase().includes(activeSubCat.toLowerCase()) ||
        activeSubCat.toLowerCase().includes(p.subCategory.toLowerCase());

      // Category match
      const matchCat =
        activeCategoryFilter === 'all' ||
        p.category.toLowerCase() === activeCategoryFilter.toLowerCase();

      // Search match
      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        (p.botanical && p.botanical.toLowerCase().includes(q)) ||
        (p.keyActives && p.keyActives.toLowerCase().includes(q));

      return matchSubCat && matchCat && matchQuery;
    });
  }, [allBrandProducts, activeSubCat, activeCategoryFilter, searchQuery]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 9);
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
            onClick={() => navigate('/#sub-brands')}
            className="hover:text-emerald-700 cursor-pointer"
          >
            Curated Brands
          </button>
          <span>/</span>
          <span className="text-gray-900 font-bold">{brand.name}</span>
        </nav>

        {/* Brand Hero Card */}
        <div className="rounded-3xl bg-white border border-gray-200/90 p-8 sm:p-12 shadow-sm mb-12 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 right-0 h-2"
            style={{ backgroundColor: brand.accent }}
          />

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Circular Official Brand Emblem */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full p-2 bg-white border border-gray-100 shadow-md shrink-0 flex items-center justify-center">
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-full object-contain rounded-full"
              />
            </div>

            {/* Brand Title & Description */}
            <div className="text-center md:text-left flex-grow">
              <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
                {brand.name}
              </h1>
              <p className="text-sm sm:text-base font-semibold text-emerald-700 mt-2">
                {brand.tagline}
              </p>
              <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed max-w-3xl">
                {brand.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3">
                <button
                  onClick={() => onOpenQuote?.(`${brand.name} Division Dossier & Samples`)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all cursor-pointer"
                  style={{ backgroundColor: brand.accent }}
                >
                  <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-4 h-4 object-contain brightness-0 invert" />
                  <span>Request {brand.name} Dossier</span>
                </button>
                <button
                  onClick={() => navigate('/')}
                  className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all cursor-pointer"
                >
                  Back to All Brands
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Subcategories Breakdown Cards */}
        {subCats.length > 0 && (
          <div className="mb-14">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Product Lines</span>
                <h2 className="text-2xl font-bold text-gray-900">Dedicated Lines under {brand.name}</h2>
              </div>
              <span className="text-xs text-gray-500">{subCats.length} specialized divisions</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subCats.map((sub) => (
                <div
                  key={sub.slug}
                  onClick={() => navigate(`/${sub.slug}`)}
                  className="group rounded-2xl bg-white border border-gray-200/90 p-6 hover:shadow-lg hover:border-emerald-500/60 transition-all cursor-pointer flex flex-col justify-between hover:-translate-y-0.5"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                        Product Line
                      </span>
                      <span className="text-xs font-bold text-emerald-700 flex items-center gap-1 group-hover:underline">
                        <span>View Page</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-800 transition-colors">
                      {sub.name}
                    </h3>
                    <p className="text-xs font-medium text-emerald-600 mt-1">
                      {sub.tagline}
                    </p>
                    <p className="text-xs text-gray-500 mt-2.5 leading-relaxed line-clamp-3">
                      {sub.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-emerald-700">
                    <span>
                      {allBrandProducts.filter(
                        (p) =>
                          p.subCategory.toLowerCase() === sub.name.toLowerCase() ||
                          p.subCategory.toLowerCase().includes(sub.name.toLowerCase())
                      ).length}{' '}
                      Products
                    </span>
                    <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Explore Line</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Products Section with Interactive Tabs */}
        <div id="brand-products" className="scroll-mt-28 mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-gray-200">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                {brand.name} Products
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Use the product line tabs below to switch between pure supercritical oils, oleoresins, total extracts, and botanicals.
              </p>
            </div>

            {/* Live Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search botanical, plant, or active..."
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

          {/* Product Line Tabs Bar (Exactly like homepage distinctions) */}
          <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none">
            {/* All Products Tab */}
            <button
              onClick={() => setActiveSubCat('all')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                activeSubCat === 'all'
                  ? 'bg-emerald-800 text-white shadow-md'
                  : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span>All {brand.name} Products</span>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                  activeSubCat === 'all'
                    ? 'bg-emerald-900 text-emerald-200'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {allBrandProducts.length}
              </span>
            </button>

            {/* Individual Subcategory Tabs */}
            {productSubCats.map((subName) => {
              const count = allBrandProducts.filter(
                (p) => p.subCategory.toLowerCase() === subName.toLowerCase()
              ).length;

              return (
                <button
                  key={subName}
                  onClick={() => setActiveSubCat(subName)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                    activeSubCat.toLowerCase() === subName.toLowerCase()
                      ? 'bg-emerald-800 text-white shadow-md'
                      : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span>{subName}</span>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                      activeSubCat.toLowerCase() === subName.toLowerCase()
                        ? 'bg-emerald-900 text-emerald-200'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Secondary Category / Form Filter Pills (if multiple categories exist) */}
          {productCategories.length > 2 && (
            <div className="flex items-center gap-2 overflow-x-auto py-3 border-t border-gray-100 text-xs scrollbar-none">
              <Filter className="w-3.5 h-3.5 text-gray-400 mr-1 shrink-0" />
              {productCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategoryFilter(cat)}
                  className={`px-3 py-1 rounded-full font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    activeCategoryFilter === cat
                      ? 'bg-emerald-600 text-white shadow-2xs'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat === 'all' ? 'All Forms' : cat}
                </button>
              ))}
            </div>
          )}

          {/* Counter Bar */}
          <div className="mt-2 mb-6 flex items-center justify-between text-xs text-gray-500 font-medium">
            <span>
              Showing <strong className="text-gray-900">{visibleProducts.length}</strong> of{' '}
              <strong className="text-gray-900">{filteredProducts.length}</strong> products
            </span>
            {(activeSubCat !== 'all' || activeCategoryFilter !== 'all' || searchQuery) && (
              <button
                onClick={() => {
                  setActiveSubCat('all');
                  setActiveCategoryFilter('all');
                  setSearchQuery('');
                }}
                className="text-emerald-700 hover:underline font-bold cursor-pointer"
              >
                Reset All Filters
              </button>
            )}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-gray-200">
            <Droplet className="w-10 h-10 text-gray-300 mx-auto mb-2" />
            <h4 className="text-base font-bold text-gray-800">No products match your filter or search query</h4>
            <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
              Try selecting a different product line tab or clearing the search terms.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveSubCat('all');
                setActiveCategoryFilter('all');
              }}
              className="mt-4 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold hover:bg-emerald-200 transition-colors"
            >
              Clear Filter &amp; Show All
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleProducts.map((product) => (
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
                        {product.subCategory}
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
              ))}
            </div>

            {/* Load More Pagination & Dim Status Text */}
            <div className="mt-12 text-center">
              {visibleCount < filteredProducts.length ? (
                <>
                  <button
                    onClick={handleLoadMore}
                    className="px-8 py-3.5 rounded-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-0.5"
                  >
                    Load More Products
                  </button>
                  <p className="text-xs text-gray-400 mt-2.5 font-medium">
                    {visibleProducts.length} of {filteredProducts.length} shown
                  </p>
                </>
              ) : (
                filteredProducts.length > 9 && (
                  <p className="text-xs text-gray-400 font-medium">
                    All {filteredProducts.length} of {filteredProducts.length} shown
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
