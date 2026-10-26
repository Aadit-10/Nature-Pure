import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SubBrandsSection from './components/SubBrandsSection';
import ProductCatalog from './components/ProductCatalog';
import SolutionsSection from './components/SolutionsSection';
import TechExplainer from './components/TechExplainer';
import InfrastructureSection from './components/InfrastructureSection';
import LeadershipSection from './components/LeadershipSection';
import HeritageTimeline from './components/HeritageTimeline';
import CertificationsSection from './components/CertificationsSection';
import Footer from './components/Footer';
import InquiryModal from './components/InquiryModal';

// Dedicated Standalone Pages
import BrandPage from './pages/BrandPage';
import SubCategoryPage from './pages/SubCategoryPage';
import BrandsHubPage from './pages/BrandsHubPage';
import AboutUsPage from './pages/AboutUsPage';
import OurStoryPage from './pages/OurStoryPage';
import InfrastructurePage from './pages/InfrastructurePage';
import MissionVisionPage from './pages/MissionVisionPage';
import LeadershipPage from './pages/LeadershipPage';
import QualityPage from './pages/QualityPage';
import SolutionsPage from './pages/SolutionsPage';
import BulkExtractionPage from './pages/BulkExtractionPage';
import ContractManufacturingPage from './pages/ContractManufacturingPage';
import RDPage from './pages/RDPage';
import TechnologyPage from './pages/TechnologyPage';
import InnovationLabPage from './pages/InnovationLabPage';
import ContactPage from './pages/ContactPage';

import { useNavigation } from './context/NavigationContext';
import { subCategoriesData } from './data/subCategories';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const { currentPath, navigate } = useNavigation();
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [prefilledProduct, setPrefilledProduct] = useState('');
  const [catalogSubBrand, setCatalogSubBrand] = useState('all');

  const handleOpenQuote = (productName = '') => {
    setPrefilledProduct(productName);
    setIsQuoteOpen(true);
  };

  const handleExploreCatalog = () => {
    navigate('/products');
  };

  const handleExploreTech = () => {
    navigate('/technology');
  };

  // Determine current route
  const cleanPath = currentPath.replace(/^\//, '').replace(/\/$/, '').toLowerCase();

  // Check if it's one of the 4 Brand pages
  const brandMap = {
    'nature-harvest': 'nature-harvest',
    'natures-purest': 'natures-purest',
    'naturesextracts': 'natures-extracts',
    'natures-extracts': 'natures-extracts',
    'nature-pure-extracts': 'natures-purest',
    'natures-alchemy': 'natures-alchemy'
  };

  const activeBrandId = brandMap[cleanPath];

  // Check if it's one of the subcategories (with alias support)
  const activeSubCategory = subCategoriesData.find((s) => {
    const sSlug = s.slug.toLowerCase();
    if (sSlug === cleanPath) return true;
    if (sSlug === 'natural-flavors-and-fragrance' && (cleanPath === 'natural-flavors' || cleanPath === 'fragrance' || cleanPath === 'flavors' || cleanPath === 'flavors-and-fragrance')) {
      return true;
    }
    return false;
  });

  // Render Page Content based on Route
  const renderContent = () => {
    // 1. Dedicated Brand Page
    if (activeBrandId) {
      return <BrandPage brandId={activeBrandId} onOpenQuote={handleOpenQuote} />;
    }

    // 2. Dedicated SubCategory Page
    if (activeSubCategory) {
      return <SubCategoryPage slug={activeSubCategory.slug} onOpenQuote={handleOpenQuote} />;
    }

    // 2.5 Dedicated All Brands & Products Hub (Canonical route: /brands; legacy aliases supported)
    if (cleanPath === 'brands' || cleanPath === 'all-brands' || cleanPath === 'products' || cleanPath === 'catalog' || cleanPath === 'sub-brands') {
      return <BrandsHubPage onOpenQuote={handleOpenQuote} />;
    }

    // 3. Dedicated About Us & Heritage Pages
    if (cleanPath === 'about-us' || cleanPath === 'about') {
      return <AboutUsPage onOpenQuote={handleOpenQuote} />;
    }
    if (cleanPath === 'our-story' || cleanPath === 'story' || cleanPath === 'heritage') {
      return <OurStoryPage onOpenQuote={handleOpenQuote} />;
    }
    if (cleanPath === 'infrastructure' || cleanPath === 'facilities') {
      return <InfrastructurePage onOpenQuote={handleOpenQuote} />;
    }
    if (cleanPath === 'mission-vision' || cleanPath === 'mission' || cleanPath === 'vision') {
      return <MissionVisionPage onOpenQuote={handleOpenQuote} />;
    }
    if (cleanPath === 'leadership' || cleanPath === 'management') {
      return <LeadershipPage onOpenQuote={handleOpenQuote} />;
    }

    // 4. Quality & Certifications Pages
    if (cleanPath === 'quality' || cleanPath === 'certifications' || cleanPath === 'reputation') {
      return <QualityPage onOpenQuote={handleOpenQuote} />;
    }

    // 5. Solutions & Industrial Services Pages
    if (cleanPath === 'solutions' || cleanPath === 'services') {
      return <SolutionsPage onOpenQuote={handleOpenQuote} />;
    }
    if (cleanPath === 'bulk-extraction' || cleanPath === 'bulk') {
      return <BulkExtractionPage onOpenQuote={handleOpenQuote} />;
    }
    if (cleanPath === 'contract-manufacturing' || cleanPath === 'contract' || cleanPath === 'manufacturing') {
      return <ContractManufacturingPage onOpenQuote={handleOpenQuote} />;
    }

    // 6. R&D, Technology & Innovation Lab Pages
    if (cleanPath === 'rd' || cleanPath === 'r-and-d' || cleanPath === 'research-and-development') {
      return <RDPage onOpenQuote={handleOpenQuote} />;
    }
    if (cleanPath === 'technology' || cleanPath === 'scfe') {
      return <TechnologyPage onOpenQuote={handleOpenQuote} />;
    }
    if (cleanPath === 'innovation-lab' || cleanPath === 'innovation' || cleanPath === 'lab') {
      return <InnovationLabPage onOpenQuote={handleOpenQuote} />;
    }

    // 7. Contact Us Page
    if (cleanPath === 'contact-us' || cleanPath === 'contact') {
      return <ContactPage onOpenQuote={handleOpenQuote} />;
    }

    // 8. Default: Complete Homepage
    return (
      <>
        {/* Hero Section */}
        <Hero
          onOpenQuote={handleOpenQuote}
          onExploreCatalog={handleExploreCatalog}
          onExploreTech={handleExploreTech}
        />

        {/* Curated Brands Showcase (with compact collapsible dropdown and always-visible explore button) */}
        <SubBrandsSection />

        {/* Complete Interactive Product Catalog (default 9 items + Load More) */}
        <ProductCatalog
          selectedSubBrand={catalogSubBrand}
          onOpenQuote={handleOpenQuote}
        />

        {/* Industrial Solutions: Bulk Extraction, Contract Manufacturing & Lab */}
        <SolutionsSection onOpenQuote={handleOpenQuote} />

        {/* Supercritical CO2 Science & Technology Benchmark */}
        <TechExplainer />

        {/* Manufacturing Infrastructure & Analytical Lab */}
        <InfrastructureSection />

        {/* Executive Leadership & Stewardship */}
        <LeadershipSection />

        {/* 50-Year Heritage Milestones Timeline */}
        <HeritageTimeline />

        {/* Global Certifications & Frequently Asked Questions */}
        <CertificationsSection />
      </>
    );
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] text-[#1f2937] flex flex-col selection:bg-emerald-200 selection:text-emerald-950">
      {/* Top Navbar */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Main Content Router with Smooth Page Transition */}
      <main className="flex-grow">
        <div key={cleanPath} className="page-transition">
          {renderContent()}
        </div>
      </main>

      {/* Corporate Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Commercial Inquiry & Technical Sample Modal */}
      <InquiryModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        prefilledProduct={prefilledProduct}
      />

      {/* Floating WhatsApp Action Pill */}
      <aside aria-label="Floating WhatsApp" className="fixed bottom-6 right-6 z-40 group">
        <a
          href="https://wa.me/919567889001?text=Hi%20Nature%20Pure!%20I%20would%20like%20to%20inquire%20about%20your%20extracts."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
        >
          <MessageSquare className="w-5 h-5 fill-white/20" />
          <span className="text-xs font-bold tracking-wide">Inquire on WhatsApp</span>
        </a>
      </aside>
    </div>
  );
}
