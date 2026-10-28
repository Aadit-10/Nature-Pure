import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OwnerSection from './components/OwnerSection';
import ManagementSection from './components/ManagementSection';
import AboutUsSection from './components/AboutUsSection';
import SubBrandsSection from './components/SubBrandsSection';
import ProductCatalog from './components/ProductCatalog';
import SolutionsSection from './components/SolutionsSection';
import MapSection from './components/MapSection';
import InfrastructureSection from './components/InfrastructureSection';
import HeritageTimeline from './components/HeritageTimeline';
import PeopleWhoKnowUsBetter from './components/PeopleWhoKnowUsBetter';
import CertificationsSection from './components/CertificationsSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import { openWhatsApp, getWhatsAppUrl } from './utils/whatsapp';
import { MessageCircle } from 'lucide-react';

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

export default function App() {
  const { currentPath, navigate } = useNavigation();

  const handleOpenQuote = (productOrSubject = '') => {
    let message = '';
    const subject = typeof productOrSubject === 'object' && productOrSubject !== null
      ? (productOrSubject.name || productOrSubject.title || '')
      : (productOrSubject || '');

    if (!subject) {
      message =
        'Hi Nature Pure Extracts! I would like to request product samples, pricing details, and Certificates of Analysis (CoA).';
    } else if (
      subject.toLowerCase().includes('inquiry') ||
      subject.toLowerCase().includes('request') ||
      subject.toLowerCase().includes('consultation') ||
      subject.toLowerCase().includes('division') ||
      subject.toLowerCase().includes('dossier') ||
      subject.toLowerCase().includes('idea') ||
      subject.toLowerCase().includes('service') ||
      subject.toLowerCase().includes('solution')
    ) {
      message = `Hi Nature Pure Extracts! I would like to inquire regarding ${subject}. Could you provide technical specifications and commercial details?`;
    } else {
      message = `Hi Nature Pure Extracts! I am interested in ${subject}. Could you share sample availability, CoA, and pricing parameters?`;
    }
    openWhatsApp(message);
  };

  const handleExploreCatalog = () => {
    navigate('/brands');
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
    if (sSlug === 'food-additives' && (cleanPath === 'food-addictives' || cleanPath === 'food-additive' || cleanPath === 'additives')) {
      return true;
    }
    if (sSlug === 'lypopure' && cleanPath === 'lyopure') {
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
        {/* 1. Hero Section */}
        <Hero
          onOpenQuote={handleOpenQuote}
          onExploreCatalog={handleExploreCatalog}
          onExploreTech={handleExploreTech}
        />

        {/* 2. About the Owners (Mr. N. T. Kuruvilla & Founding Heritage) */}
        <OwnerSection />

        {/* 3. About the Management (Executive Leadership, Technology & Direction) */}
        <ManagementSection />

        {/* 4. About Us: Nature Pure Extracts Profile, Facility & Metrics */}
        <AboutUsSection />

        {/* 5. Our Journey (Horizontal sideways interactive timeline - 1973 to Present) */}
        <HeritageTimeline />

        {/* 6. Our Curated Brands Showcase */}
        <SubBrandsSection onOpenQuote={handleOpenQuote} />

        {/* 7. Global Certifications & Quality Assurance (Authentic Seals + FAQ) */}
        <CertificationsSection />

        {/* 8. Industrial Solutions: Bulk Extraction, Contract Manufacturing & Lab */}
        <SolutionsSection onOpenQuote={handleOpenQuote} />

        {/* 9. Manufacturing Infrastructure & Analytical Lab */}
        <InfrastructureSection />

        {/* 10. People Who Know Us Better: Valued Partner & Client Logos */}
        <PeopleWhoKnowUsBetter />

        {/* 11. Dedicated Facility Map Section */}
        <MapSection />

        {/* 12. Frequently Asked Questions (At the Bottom) */}
        <FaqSection />
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

      {/* Floating WhatsApp Action Button (Symbol only) */}
      <aside aria-label="Floating WhatsApp" className="fixed bottom-6 right-6 z-40 group">
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all p-3.5 border-2 border-white/80"
          title="Chat on WhatsApp"
        >
          <img
            src="/whatsapp-icon.png"
            alt="WhatsApp"
            className="w-full h-full object-contain brightness-0 invert"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const fallback = e.currentTarget.nextElementSibling;
              if (fallback) fallback.classList.remove('hidden');
            }}
          />
          <MessageCircle className="w-7 h-7 text-white hidden" />
        </a>
      </aside>
    </div>
  );
}
