import React, { useState, useEffect, useMemo } from 'react';
import { productsList } from '../data/catalog';
import { Search, Filter, Sparkles, Droplet, ArrowRight, CheckCircle2, FileText, ChevronDown } from 'lucide-react';

export default function ProductCatalog({ selectedSubBrand, onOpenQuote, initialSearch = '' }) {
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeSubBrand, setActiveSubBrand] = useState(selectedSubBrand || 'all');
  const [visibleCount, setVisibleCount] = useState(9);

  useEffect(() => {
    if (selectedSubBrand) {
      setActiveSubBrand(selectedSubBrand);
      setVisibleCount(9);
    }
  }, [selectedSubBrand]);

  useEffect(() => {
    setVisibleCount(9);
  }, [searchQuery, activeCategory, activeSubBrand]);

  const categories = [
    'All',
    'Essential Oils',
    'Oleoresins',
    'Nutraceuticals',
    'Freeze-Dried',
    'Natural Colors',
    'Food Additives',
    'Cosmetics'
  ];

  const subBrandTabs = [
    { id: 'all', label: 'All Curated Brands' },
    { id: 'natures-purest', label: "Nature's Purest" },
    { id: 'natures-extracts', label: "Nature's Extracts (Conventional)" },
    { id: 'natures-alchemy', label: "Nature's Alchemy (Additives)" },
    { id: 'nature-harvest', label: "Nature's Harvest" },
  ];

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return productsList.filter((item) => {
      // SubBrand match
      const matchesBrand = activeSubBrand === 'all' || item.subBrand === activeSubBrand;
      // Category match
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      // Search match
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        (item.botanical && item.botanical.toLowerCase().includes(q)) ||
        (item.keyActives && item.keyActives.toLowerCase().includes(q)) ||
        (item.subCategory && item.subCategory.toLowerCase().includes(q));

      return matchesBrand && matchesCategory && matchesSearch;
    });
  }, [activeSubBrand, activeCategory, searchQuery]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <section id="catalog" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Interactive Botanical Catalog
            </h2>
            <p className="mt-2 text-base text-gray-600 max-w-2xl">
              Featuring 220+ authentic botanical extracts, pure supercritical oils, freeze-dried fruits, and natural pigment solutions.
            </p>
          </div>

          {/* Live Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search plant, botanical active, spice..."
              className="w-full pl-10 pr-4 py-3 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Brand Division Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {subBrandTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSubBrand(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeSubBrand === tab.id
                  ? 'bg-emerald-800 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-gray-100 scrollbar-none">
          <Filter className="w-3.5 h-3.5 text-gray-400 mr-1 flex-shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-emerald-50/70 text-emerald-900 hover:bg-emerald-100'
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="text-xs text-gray-400 ml-auto whitespace-nowrap pl-4 font-medium">
            Showing <strong className="text-gray-900">{visibleProducts.length}</strong> of <strong className="text-gray-900">{filteredProducts.length}</strong> verified products
          </span>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
            <Droplet className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-gray-800">No matching botanical extracts found</h3>
            <p className="text-sm text-gray-500 mt-1 max-w-md mx-auto">
              Try adjusting your search terms or clearing the filters. We also formulate custom bespoke extracts upon request.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
                setActiveSubBrand('all');
              }}
              className="mt-5 px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-700 text-white hover:bg-emerald-800 cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {visibleProducts.map((product) => (
              <div
                key={`${product.id}-${product.name}`}
                className="group rounded-3xl bg-white border border-gray-200/90 hover:border-emerald-500/60 p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative hover:-translate-y-1"
              >
                <div>
                  {/* Product Image Frame with authentic original image */}
                  <div className="w-full h-56 rounded-2xl bg-white border border-gray-100 overflow-hidden mb-5 relative group-hover:shadow-xs transition-all flex items-center justify-center p-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-emerald-950/85 backdrop-blur-md text-emerald-200 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                      {product.subCategory}
                    </div>
                  </div>

                  {/* Botanical Source */}
                  {product.botanical && product.botanical !== product.name && (
                    <span className="text-xs font-semibold italic text-emerald-700 block mb-1">
                      {product.botanical}
                    </span>
                  )}

                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-800 transition-colors">
                    {product.name}
                  </h3>

                  {/* Active Components / Standardization */}
                  <div className="mt-3 p-3 rounded-xl bg-emerald-50/60 border border-emerald-100/80 text-xs">
                    <div className="flex items-start gap-1.5 mb-1">
                      <strong className="text-emerald-950 whitespace-nowrap">Actives / Specs:</strong>
                      <span className="text-emerald-800 font-medium line-clamp-2">{product.keyActives}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-500">
                      <strong className="text-gray-700">Division:</strong>
                      <span>{product.subCategory}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    CoA &amp; Sample Ready
                  </span>
                  <button
                    onClick={() => onOpenQuote(product.name)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-[#25D366]/15 hover:bg-[#25D366] text-emerald-950 hover:text-white transition-all cursor-pointer border border-[#25D366]/30"
                    title={`Inquire about ${product.name} on WhatsApp`}
                  >
                    <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-3.5 h-3.5 object-contain" />
                    <span>Inquire / CoA</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More Trigger & Dim Status Text */}
        <div className="mt-12 text-center">
          {visibleCount < filteredProducts.length ? (
            <>
              <button
                onClick={() => setVisibleCount((prev) => prev + 9)}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Load More Products</span>
                <ChevronDown className="w-4 h-4" />
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
      </div>
    </section>
  );
}
