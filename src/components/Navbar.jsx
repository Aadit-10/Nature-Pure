import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import { subBrands } from '../data/catalog';
import { subCategoriesData } from '../data/subCategories';
import { useNavigation } from '../context/NavigationContext';

export default function Navbar({ onOpenQuote }) {
  const { currentPath, navigate } = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredBrandId, setHoveredBrandId] = useState('nature-harvest');
  const [mobileExpandedSection, setMobileExpandedSection] = useState(null);
  const [mobileExpandedBrand, setMobileExpandedBrand] = useState(null);
  const dropdownTimeoutRef = useRef(null);

  const isHome = currentPath === '/';
  const cleanPath = currentPath.replace(/^\//, '').replace(/\/$/, '').toLowerCase();

  // Active section matchers
  const isAboutActive = ['about-us', 'about', 'our-story', 'infrastructure', 'mission-vision', 'leadership'].includes(cleanPath);
  const isProductsActive =
    ['brands', 'sub-brands', 'products', 'nature-harvest', 'natures-purest', 'naturesextracts', 'natures-extracts', 'natures-alchemy', 'nature-pure-extracts', 'natural-flavors', 'fragrance', 'flavors'].includes(cleanPath) ||
    subCategoriesData.some((s) => s.slug.toLowerCase() === cleanPath);
  const isQualityActive = ['quality', 'certifications', 'reputation'].includes(cleanPath);
  const isSolutionsActive = ['solutions', 'bulk-extraction', 'contract-manufacturing'].includes(cleanPath);
  const isRdActive = ['rd', 'technology', 'innovation-lab'].includes(cleanPath);
  const isContactActive = ['contact-us', 'contact'].includes(cleanPath);

  // Active subcategory or brand lookup
  const activeSubCategory = subCategoriesData.find((s) => {
    const sSlug = s.slug.toLowerCase();
    if (sSlug === cleanPath) return true;
    if (sSlug === 'natural-flavors-and-fragrance' && ['natural-flavors', 'fragrance', 'flavors', 'flavors-and-fragrance'].includes(cleanPath)) return true;
    return false;
  });
  const activeBrandForCurrentPage = activeSubCategory
    ? activeSubCategory.subBrandId
    : ['nature-harvest', 'natures-purest', 'naturesextracts', 'natures-extracts', 'natures-alchemy'].find((b) => b === cleanPath);

  useEffect(() => {
    if (activeBrandForCurrentPage) {
      const normalized = activeBrandForCurrentPage === 'naturesextracts' ? 'natures-extracts' : activeBrandForCurrentPage;
      setHoveredBrandId(normalized);
    }
  }, [activeBrandForCurrentPage]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (name) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const handleNavClick = (target) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    navigate(target);
  };

  // Determine if header should have dark hero styling or white solid styling
  const isSolidHeader = !isHome || isScrolled;

  const getNavButtonClass = (isActive) => {
    if (isSolidHeader) {
      return isActive
        ? 'text-emerald-800 bg-emerald-50/90 font-bold border border-emerald-300/80 shadow-2xs'
        : 'text-gray-700 hover:text-emerald-700 hover:bg-gray-50';
    } else {
      return isActive
        ? 'text-emerald-300 bg-white/20 font-bold border border-white/30 shadow-2xs'
        : 'text-gray-100 hover:text-emerald-300 hover:bg-white/5';
    }
  };

  const getDropdownItemClass = (pathSlug) => {
    const isCurrent = cleanPath === pathSlug.replace(/^\//, '').toLowerCase();
    return isCurrent
      ? 'w-full text-left px-3 py-2.5 rounded-xl bg-emerald-50 text-emerald-950 font-bold border-l-4 border-emerald-600 transition-colors cursor-pointer flex flex-col shadow-2xs'
      : 'w-full text-left px-3 py-2.5 rounded-xl hover:bg-emerald-50/50 text-gray-700 hover:text-emerald-800 font-medium transition-colors cursor-pointer flex flex-col';
  };

  const getMobileItemClass = (pathSlug) => {
    const isCurrent = cleanPath === pathSlug.replace(/^\//, '').toLowerCase();
    return isCurrent
      ? 'block w-full text-left py-2 px-3 rounded-xl bg-emerald-800 text-white font-bold border border-emerald-900 transition-all shadow-2xs'
      : 'block w-full text-left py-2 px-3 rounded-xl bg-white hover:bg-emerald-50/80 text-gray-700 hover:text-emerald-900 font-semibold border border-gray-200/70 hover:border-emerald-300 transition-all shadow-2xs active:scale-[0.98]';
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isSolidHeader
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-gray-200/80 text-gray-900'
          : 'bg-gradient-to-b from-[#051e17]/95 via-[#06241b]/80 to-transparent py-4 text-white border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo with Arrow Icon */}
          <button
            onClick={() => handleNavClick('/')}
            className={`flex items-center transition-all duration-300 cursor-pointer ${
              isSolidHeader
                ? 'p-0 hover:opacity-90'
                : 'bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-2xl shadow-md hover:bg-white'
            }`}
            title="Nature Pure Extracts - Home"
          >
            <img
              src="/wp-content/uploads/2026/05/ChatGPT_Image_May_5__2026__02_29_16_PM-removebg-preview.png"
              alt="Nature Pure Extracts"
              className="h-9 sm:h-11 w-auto object-contain max-w-[190px] sm:max-w-[230px]"
            />
          </button>

          {/* Desktop Navigation Hierarchy */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* 1. About Us Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => handleNavClick('/about-us')}
                className={`inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${getNavButtonClass(
                  isAboutActive
                )}`}
              >
                <span>About Us</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === 'about' ? 'rotate-180 text-emerald-500' : isAboutActive ? 'text-emerald-600' : isSolidHeader ? 'text-gray-400' : 'text-emerald-200/70'
                }`} />
              </button>

              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 w-64 pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 text-sm text-gray-900">
                    <button
                      onClick={() => handleNavClick('/about-us')}
                      className={getDropdownItemClass('/about-us')}
                    >
                      <span className="font-semibold text-gray-900">About Us Overview</span>
                      <span className="text-xs text-gray-500">Corporate profile &amp; mission</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('/our-story')}
                      className={getDropdownItemClass('/our-story')}
                    >
                      <span className="font-semibold text-gray-900">Our Story</span>
                      <span className="text-xs text-gray-500">50-year legacy of botanical science</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('/infrastructure')}
                      className={getDropdownItemClass('/infrastructure')}
                    >
                      <span className="font-semibold text-gray-900">Infrastructure</span>
                      <span className="text-xs text-gray-500">State-of-the-art SCFE &amp; Lyophilization</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('/mission-vision')}
                      className={getDropdownItemClass('/mission-vision')}
                    >
                      <span className="font-semibold text-gray-900">Mission &amp; Vision</span>
                      <span className="text-xs text-gray-500">Nature. Innovation. Humanity.</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('/leadership')}
                      className={getDropdownItemClass('/leadership')}
                    >
                      <span className="font-semibold text-gray-900">Leadership</span>
                      <span className="text-xs text-gray-500">Chemical engineers &amp; innovators</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Products Mega Dropdown with Hover Subcategories */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => handleNavClick('/brands')}
                className={`inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${getNavButtonClass(
                  isProductsActive
                )}`}
              >
                <span>Products</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === 'products' ? 'rotate-180 text-emerald-500' : isProductsActive ? 'text-emerald-600' : isSolidHeader ? 'text-gray-400' : 'text-emerald-200/70'
                }`} />
              </button>

              {activeDropdown === 'products' && (
                <div className="absolute top-full -left-28 w-[820px] pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 text-sm text-gray-900">
                    <div className="flex items-center justify-between pb-3.5 border-b border-gray-100 mb-4">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Dedicated Product Portfolio</span>
                        <h4 className="text-sm font-extrabold text-gray-900">Hover over any brand to view and visit its subcategories directly</h4>
                      </div>
                      <button
                        onClick={() => handleNavClick('/brands')}
                        className="text-xs font-bold text-emerald-700 hover:text-emerald-800 hover:underline cursor-pointer"
                      >
                        Explore 4 Curated Brands Hub →
                      </button>
                    </div>

                    <div className="grid grid-cols-12 gap-6">
                      {/* Left: 4 Brands List */}
                      <div className="col-span-5 space-y-2 border-r border-gray-100 pr-4">
                        {subBrands.map((b) => {
                          const isThisBrandCurrent = cleanPath === b.id || (activeBrandForCurrentPage && (activeBrandForCurrentPage === b.id || (activeBrandForCurrentPage === 'naturesextracts' && b.id === 'natures-extracts')));
                          return (
                            <div
                              key={b.id}
                              onMouseEnter={() => setHoveredBrandId(b.id)}
                              onClick={() => handleNavClick(`/${b.id}`)}
                              className={`p-3 rounded-2xl transition-all cursor-pointer flex items-center justify-between group ${
                                hoveredBrandId === b.id
                                  ? 'bg-emerald-50 text-emerald-950 shadow-xs'
                                  : isThisBrandCurrent
                                  ? 'bg-emerald-50/70 text-emerald-900 border border-emerald-300'
                                  : 'hover:bg-gray-50 text-gray-800'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white p-0.5 border border-gray-100 shadow-2xs shrink-0 flex items-center justify-center">
                                  <img
                                    src={b.image}
                                    alt={b.name}
                                    className="w-full h-full object-contain rounded-full"
                                  />
                                </div>
                                <div>
                                  <h5 className={`font-bold text-xs sm:text-sm group-hover:text-emerald-800 flex items-center gap-1.5 ${isThisBrandCurrent ? 'text-emerald-800' : 'text-gray-900'}`}>
                                    <span>{b.name}</span>
                                    {isThisBrandCurrent && (
                                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block" />
                                    )}
                                  </h5>
                                  <span className="text-[11px] text-gray-500 block line-clamp-1">
                                    {b.category}
                                  </span>
                                </div>
                              </div>
                              <ChevronRight className={`w-4 h-4 transition-transform ${
                                hoveredBrandId === b.id ? 'text-emerald-700 translate-x-1' : isThisBrandCurrent ? 'text-emerald-600' : 'text-gray-300'
                              }`} />
                            </div>
                          );
                        })}

                        <div className="pt-2">
                          <button
                            onClick={() => handleNavClick('/brands')}
                            className={`w-full text-center py-2 px-3 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                              cleanPath === 'brands' ? 'bg-emerald-100 text-emerald-900 border border-emerald-300' : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                            }`}
                          >
                            View All 4 Brands Hub →
                          </button>
                        </div>
                      </div>

                      {/* Right: Subcategories under hovered brand */}
                      <div className="col-span-7 pl-2">
                        {(() => {
                          const currentBrand = subBrands.find((b) => b.id === hoveredBrandId) || subBrands[0];
                          const currentSubCats = subCategoriesData.filter((s) => s.subBrandId === currentBrand.id);

                          return (
                            <div>
                              <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-100">
                                <span className="text-xs font-extrabold text-gray-900">
                                  {currentBrand.name} Subcategories
                                </span>
                                <button
                                  onClick={() => handleNavClick(`/${currentBrand.id}`)}
                                  className="text-[11px] font-bold text-emerald-700 hover:underline cursor-pointer flex items-center gap-1"
                                >
                                  <span>Explore Brand</span>
                                  <ArrowRight className="w-3 h-3" />
                                </button>
                              </div>

                              <div className="grid grid-cols-1 gap-2 max-h-[320px] overflow-y-auto pr-1">
                                {currentSubCats.map((sub) => {
                                  const isThisSubCurrent =
                                    cleanPath === sub.slug.toLowerCase() ||
                                    (sub.slug === 'food-additives' && (cleanPath === 'food-addictives' || cleanPath === 'food-additive' || cleanPath === 'additives')) ||
                                    (sub.slug === 'natural-flavors-and-fragrance' &&
                                      ['natural-flavors', 'fragrance', 'flavors', 'flavors-and-fragrance'].includes(cleanPath));
                                  return (
                                    <div
                                      key={sub.slug}
                                      onClick={() => handleNavClick(`/${sub.slug}`)}
                                      className={`p-3 rounded-xl transition-all cursor-pointer group flex items-start justify-between ${
                                        isThisSubCurrent
                                          ? 'bg-emerald-100/90 text-emerald-950 font-bold border-l-4 border-emerald-600 shadow-2xs'
                                          : 'hover:bg-emerald-50/70 border border-transparent hover:border-emerald-200/80'
                                      }`}
                                    >
                                      <div>
                                        <div className={`font-bold text-xs flex items-center gap-1.5 ${isThisSubCurrent ? 'text-emerald-950' : 'text-gray-900 group-hover:text-emerald-800'}`}>
                                          <span>{sub.name}</span>
                                          {isThisSubCurrent && (
                                            <span className="text-[10px] px-1.5 py-0.2 bg-emerald-700 text-white rounded-full font-bold">Current</span>
                                          )}
                                          <ArrowRight className="w-3 h-3 text-emerald-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                                        </div>
                                        <p className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">
                                          {sub.tagline}
                                        </p>
                                      </div>
                                      <span className="text-[10px] text-emerald-700 font-medium shrink-0 ml-2">
                                        Visit Page →
                                      </span>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })()}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Quality Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('quality')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => handleNavClick('/quality')}
                className={`inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${getNavButtonClass(
                  isQualityActive
                )}`}
              >
                <span>Quality</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === 'quality' ? 'rotate-180 text-emerald-500' : isQualityActive ? 'text-emerald-600' : isSolidHeader ? 'text-gray-400' : 'text-emerald-200/70'
                }`} />
              </button>

              {activeDropdown === 'quality' && (
                <div className="absolute top-full left-0 w-64 pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 text-sm text-gray-900">
                    <button
                      onClick={() => handleNavClick('/quality')}
                      className={getDropdownItemClass('/quality')}
                    >
                      <span className="font-semibold text-gray-900">Quality Assurance</span>
                      <span className="text-xs text-gray-500">Rigorous GC-MS &amp; HPLC testing</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('/certifications')}
                      className={getDropdownItemClass('/certifications')}
                    >
                      <span className="font-semibold text-gray-900">Certifications</span>
                      <span className="text-xs text-gray-500">100% Organic, Halal, Kosher, FSSAI</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => handleNavClick('/solutions')}
                className={`inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${getNavButtonClass(
                  isSolutionsActive
                )}`}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === 'solutions' ? 'rotate-180 text-emerald-500' : isSolutionsActive ? 'text-emerald-600' : isSolidHeader ? 'text-gray-400' : 'text-emerald-200/70'
                }`} />
              </button>

              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 w-64 pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 text-sm text-gray-900">
                    <button
                      onClick={() => handleNavClick('/solutions')}
                      className={getDropdownItemClass('/solutions')}
                    >
                      <span className="font-semibold text-gray-900">Solutions Overview</span>
                      <span className="text-xs text-gray-500">Industrial capabilities &amp; private label</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('/bulk-extraction')}
                      className={getDropdownItemClass('/bulk-extraction')}
                    >
                      <span className="font-semibold text-gray-900">Bulk Extraction</span>
                      <span className="text-xs text-gray-500">Scalable 150 MT high-pressure SCFE</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('/contract-manufacturing')}
                      className={getDropdownItemClass('/contract-manufacturing')}
                    >
                      <span className="font-semibold text-gray-900">Contract Manufacturing</span>
                      <span className="text-xs text-gray-500">Custom formulation, blending &amp; filling</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 5. R&D Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('rd')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => handleNavClick('/rd')}
                className={`inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${getNavButtonClass(
                  isRdActive
                )}`}
              >
                <span>R&amp;D</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === 'rd' ? 'rotate-180 text-emerald-500' : isRdActive ? 'text-emerald-600' : isSolidHeader ? 'text-gray-400' : 'text-emerald-200/70'
                }`} />
              </button>

              {activeDropdown === 'rd' && (
                <div className="absolute top-full left-0 w-64 pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 text-sm text-gray-900">
                    <button
                      onClick={() => handleNavClick('/rd')}
                      className={getDropdownItemClass('/rd')}
                    >
                      <span className="font-semibold text-gray-900">R&amp;D Hub</span>
                      <span className="text-xs text-gray-500">Innovation through science &amp; technology</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('/technology')}
                      className={getDropdownItemClass('/technology')}
                    >
                      <span className="font-semibold text-gray-900">Technology (SCFE)</span>
                      <span className="text-xs text-gray-500">Supercritical carbon dioxide science</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('/innovation-lab')}
                      className={getDropdownItemClass('/innovation-lab')}
                    >
                      <span className="font-semibold text-gray-900">Innovation &amp; Lab</span>
                      <span className="text-xs text-gray-500">Phytocompound profiling &amp; prototyping</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 6. Contact Us */}
            <button
              onClick={() => handleNavClick('/contact-us')}
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${getNavButtonClass(
                isContactActive
              )}`}
            >
              Contact Us
            </button>
          </nav>

          {/* Action Button: Instant WhatsApp Inquiry */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={() => onOpenQuote('Request Sample, Pricing & CoA')}
              className={`inline-flex items-center gap-2 px-4.5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 cursor-pointer shadow-md ${
                isSolidHeader
                  ? 'text-white bg-gradient-to-r from-emerald-700 to-teal-800 hover:from-emerald-600 hover:to-teal-700'
                  : 'text-emerald-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300'
              }`}
              title="Chat on WhatsApp"
            >
              <img
                src="/whatsapp-icon.png"
                alt="WhatsApp"
                className={`w-4 h-4 object-contain ${isSolidHeader ? 'brightness-0 invert' : ''}`}
              />
              <span>Inquire Now</span>
            </button>
          </div>

          {/* Mobile Menu Toggle - Distinct Tactile Button Format */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`px-3 py-1.5 rounded-xl flex items-center gap-1.5 text-xs font-bold transition-all shadow-xs active:scale-95 cursor-pointer border ${
                isSolidHeader
                  ? 'bg-emerald-800 text-white border-emerald-900 hover:bg-emerald-900'
                  : 'bg-white/95 text-gray-900 border-white/40 hover:bg-white shadow-md'
              }`}
              aria-label={mobileMenuOpen ? 'Close Navigation' : 'Open Navigation'}
            >
              {mobileMenuOpen ? (
                <>
                  <X className={`w-4 h-4 ${isSolidHeader ? 'text-emerald-200' : 'text-emerald-800'}`} />
                  <span>Close</span>
                </>
              ) : (
                <>
                  <Menu className={`w-4 h-4 ${isSolidHeader ? 'text-emerald-200' : 'text-emerald-800'}`} />
                  <span>Menu</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer - Unified Single Button with Dropdown Inside */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white text-gray-900 border-t border-gray-100 px-4 pt-4 pb-8 shadow-xl max-h-[85vh] overflow-y-auto animate-in fade-in duration-200">
          <nav className="space-y-2">
            {/* 1. About Us */}
            <div>
              <button
                onClick={() => setMobileExpandedSection(mobileExpandedSection === 'about' ? null : 'about')}
                className={`w-full py-2.5 px-3.5 rounded-xl text-left text-xs font-bold flex items-center justify-between border transition-all cursor-pointer active:scale-[0.98] shadow-2xs ${
                  isAboutActive
                    ? 'bg-emerald-800 text-white border-emerald-900 shadow-xs'
                    : 'bg-[#f4f7f5] text-gray-800 hover:bg-emerald-100/70 hover:text-emerald-950 border-emerald-900/10'
                }`}
              >
                <span>About Us</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpandedSection === 'about' ? 'rotate-180' : ''} ${isAboutActive ? 'text-white' : 'text-gray-500'}`} />
              </button>

              {mobileExpandedSection === 'about' && (
                <div className="p-2 mt-1 space-y-1.5 bg-gray-50/70 rounded-xl border border-gray-100 text-xs">
                  <button onClick={() => handleNavClick('/about-us')} className={getMobileItemClass('/about-us')}>About Us Overview</button>
                  <button onClick={() => handleNavClick('/our-story')} className={getMobileItemClass('/our-story')}>Our Story</button>
                  <button onClick={() => handleNavClick('/infrastructure')} className={getMobileItemClass('/infrastructure')}>Advanced Infrastructure</button>
                  <button onClick={() => handleNavClick('/mission-vision')} className={getMobileItemClass('/mission-vision')}>Mission &amp; Vision</button>
                  <button onClick={() => handleNavClick('/leadership')} className={getMobileItemClass('/leadership')}>Executive Leadership</button>
                </div>
              )}
            </div>

            {/* 2. Products & Brands */}
            <div>
              <button
                onClick={() => setMobileExpandedSection(mobileExpandedSection === 'products' ? null : 'products')}
                className={`w-full py-2.5 px-3.5 rounded-xl text-left text-xs font-bold flex items-center justify-between border transition-all cursor-pointer active:scale-[0.98] shadow-2xs ${
                  isProductsActive
                    ? 'bg-emerald-800 text-white border-emerald-900 shadow-xs'
                    : 'bg-[#f4f7f5] text-gray-800 hover:bg-emerald-100/70 hover:text-emerald-950 border-emerald-900/10'
                }`}
              >
                <span>Products &amp; Brands</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpandedSection === 'products' ? 'rotate-180' : ''} ${isProductsActive ? 'text-white' : 'text-gray-500'}`} />
              </button>

              {mobileExpandedSection === 'products' && (
                <div className="p-2 mt-1 space-y-2 bg-gray-50/70 rounded-xl border border-gray-100 text-xs">
                  <button
                    onClick={() => handleNavClick('/brands')}
                    className="block w-full text-left py-2 px-3 rounded-xl bg-emerald-800 text-white font-bold transition-all shadow-2xs"
                  >
                    All Brands &amp; 220+ Extracts Hub &rarr;
                  </button>

                  {subBrands.map((b) => {
                    const isBrandActive = cleanPath === b.id;
                    const isBrandOpen = mobileExpandedBrand === b.id;

                    return (
                      <div key={b.id} className="pt-1">
                        <button
                          onClick={() => setMobileExpandedBrand(isBrandOpen ? null : b.id)}
                          className={`w-full text-left text-xs font-bold py-1.5 px-2.5 rounded-lg border transition-all flex items-center justify-between cursor-pointer ${
                            isBrandActive
                              ? 'bg-emerald-100/90 text-emerald-950 border-emerald-400 font-extrabold'
                              : 'bg-white text-gray-800 hover:text-emerald-900 border-gray-200/80 hover:bg-emerald-50/50'
                          }`}
                        >
                          <span>{b.name}</span>
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isBrandOpen ? 'rotate-180 text-emerald-700' : 'text-gray-400'}`} />
                        </button>

                        {isBrandOpen && (
                          <div className="pl-3 pt-1.5 space-y-1 mt-1 border-l-2 border-emerald-400">
                            <button
                              onClick={() => handleNavClick(`/${b.id}`)}
                              className="block w-full text-left py-1.5 px-2.5 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-900 border border-emerald-200/80 hover:bg-emerald-100 transition-colors"
                            >
                              Explore {b.name} Page &rarr;
                            </button>
                            {subCategoriesData
                              .filter((s) => s.subBrandId === b.id)
                              .map((sub) => {
                                const isSubActive =
                                  cleanPath === sub.slug.toLowerCase() ||
                                  (sub.slug === 'food-additives' && (cleanPath === 'food-addictives' || cleanPath === 'food-additive' || cleanPath === 'additives')) ||
                                  (sub.slug === 'natural-flavors-and-fragrance' &&
                                    ['natural-flavors', 'fragrance', 'flavors', 'flavors-and-fragrance'].includes(cleanPath));
                                return (
                                  <button
                                    key={sub.slug}
                                    onClick={() => handleNavClick(`/${sub.slug}`)}
                                    className={`block w-full text-left py-1.5 px-2.5 rounded-lg text-xs font-semibold border transition-all ${
                                      isSubActive
                                        ? 'bg-emerald-800 text-white border-emerald-900 font-bold'
                                        : 'bg-white text-gray-600 hover:text-emerald-900 border-gray-200/60 hover:bg-emerald-50/40'
                                    }`}
                                  >
                                    &bull; {sub.name}
                                  </button>
                                );
                              })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 3. Quality & Assurance */}
            <div>
              <button
                onClick={() => setMobileExpandedSection(mobileExpandedSection === 'quality' ? null : 'quality')}
                className={`w-full py-2.5 px-3.5 rounded-xl text-left text-xs font-bold flex items-center justify-between border transition-all cursor-pointer active:scale-[0.98] shadow-2xs ${
                  isQualityActive
                    ? 'bg-emerald-800 text-white border-emerald-900 shadow-xs'
                    : 'bg-[#f4f7f5] text-gray-800 hover:bg-emerald-100/70 hover:text-emerald-950 border-emerald-900/10'
                }`}
              >
                <span>Quality &amp; Certifications</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpandedSection === 'quality' ? 'rotate-180' : ''} ${isQualityActive ? 'text-white' : 'text-gray-500'}`} />
              </button>

              {mobileExpandedSection === 'quality' && (
                <div className="p-2 mt-1 space-y-1.5 bg-gray-50/70 rounded-xl border border-gray-100 text-xs">
                  <button onClick={() => handleNavClick('/quality')} className={getMobileItemClass('/quality')}>Quality Assurance Overview</button>
                  <button onClick={() => handleNavClick('/certifications')} className={getMobileItemClass('/certifications')}>Global Certifications (Organic, Halal, Kosher)</button>
                </div>
              )}
            </div>

            {/* 4. Solutions */}
            <div>
              <button
                onClick={() => setMobileExpandedSection(mobileExpandedSection === 'solutions' ? null : 'solutions')}
                className={`w-full py-2.5 px-3.5 rounded-xl text-left text-xs font-bold flex items-center justify-between border transition-all cursor-pointer active:scale-[0.98] shadow-2xs ${
                  isSolutionsActive
                    ? 'bg-emerald-800 text-white border-emerald-900 shadow-xs'
                    : 'bg-[#f4f7f5] text-gray-800 hover:bg-emerald-100/70 hover:text-emerald-950 border-emerald-900/10'
                }`}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpandedSection === 'solutions' ? 'rotate-180' : ''} ${isSolutionsActive ? 'text-white' : 'text-gray-500'}`} />
              </button>

              {mobileExpandedSection === 'solutions' && (
                <div className="p-2 mt-1 space-y-1.5 bg-gray-50/70 rounded-xl border border-gray-100 text-xs">
                  <button onClick={() => handleNavClick('/solutions')} className={getMobileItemClass('/solutions')}>Solutions Overview</button>
                  <button onClick={() => handleNavClick('/bulk-extraction')} className={getMobileItemClass('/bulk-extraction')}>Bulk Extraction (150 MT SCFE)</button>
                  <button onClick={() => handleNavClick('/contract-manufacturing')} className={getMobileItemClass('/contract-manufacturing')}>Contract Manufacturing &amp; Tolling</button>
                </div>
              )}
            </div>

            {/* 5. R&D & Technology */}
            <div>
              <button
                onClick={() => setMobileExpandedSection(mobileExpandedSection === 'rd' ? null : 'rd')}
                className={`w-full py-2.5 px-3.5 rounded-xl text-left text-xs font-bold flex items-center justify-between border transition-all cursor-pointer active:scale-[0.98] shadow-2xs ${
                  isRdActive
                    ? 'bg-emerald-800 text-white border-emerald-900 shadow-xs'
                    : 'bg-[#f4f7f5] text-gray-800 hover:bg-emerald-100/70 hover:text-emerald-950 border-emerald-900/10'
                }`}
              >
                <span>R&amp;D &amp; Technology</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpandedSection === 'rd' ? 'rotate-180' : ''} ${isRdActive ? 'text-white' : 'text-gray-500'}`} />
              </button>

              {mobileExpandedSection === 'rd' && (
                <div className="p-2 mt-1 space-y-1.5 bg-gray-50/70 rounded-xl border border-gray-100 text-xs">
                  <button onClick={() => handleNavClick('/rd')} className={getMobileItemClass('/rd')}>R&amp;D Hub</button>
                  <button onClick={() => handleNavClick('/technology')} className={getMobileItemClass('/technology')}>Supercritical CO₂ Extraction Science</button>
                  <button onClick={() => handleNavClick('/innovation-lab')} className={getMobileItemClass('/innovation-lab')}>Innovation &amp; Prototyping Lab</button>
                </div>
              )}
            </div>

            {/* 6. Contact Us */}
            <div>
              <button
                onClick={() => handleNavClick('/contact-us')}
                className={`w-full py-2.5 px-3.5 rounded-xl text-left text-xs font-bold border transition-all cursor-pointer active:scale-[0.98] shadow-2xs ${
                  isContactActive
                    ? 'bg-emerald-800 text-white border-emerald-900 shadow-xs'
                    : 'bg-[#f4f7f5] text-gray-800 hover:bg-emerald-100/70 hover:text-emerald-950 border-emerald-900/10'
                }`}
              >
                Contact Us
              </button>
            </div>
          </nav>

          {/* Calming, Elegant CTA Area */}
          <div className="mt-5 pt-4 border-t border-gray-100 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote('Request Sample, Pricing & CoA');
              }}
              className="w-full py-3 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-center text-xs shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-3.5 h-3.5 object-contain brightness-0 invert" />
              <span>Connect on WhatsApp</span>
            </button>
            <p className="text-center text-[10px] text-gray-400">
              Technical Commercial Support &bull; Kerala, India
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
