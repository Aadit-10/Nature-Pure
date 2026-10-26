import React from 'react';
import { MapPin, Phone, Mail, MessageSquare, ArrowUp } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export default function Footer({ onOpenQuote }) {
  const { navigate } = useNavigation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0a2016] text-white pt-20 pb-12 border-t border-emerald-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-emerald-900/40">
          {/* Col 1: Brand & Identity with official logo */}
          <div className="lg:col-span-2">
            <div className="mb-5 inline-block bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-2xl shadow-sm">
              <img
                src="/wp-content/uploads/2026/05/ChatGPT_Image_May_5__2026__02_29_16_PM-removebg-preview.png"
                alt="Nature Pure Extracts"
                className="h-10 w-auto object-contain"
              />
            </div>

            <p className="text-xs text-gray-300 leading-relaxed max-w-sm mb-6">
              A global pioneer in high-pressure Supercritical CO₂ extraction, botanical oleoresins, freeze-dried nutrition, and specialty ingredients. Pure, sustainable, and solvent-free since 1973.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/naturepureextracts/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-emerald-700/50 flex items-center justify-center text-gray-300 hover:text-white transition-colors border border-white/10"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a
                href="https://www.linkedin.com/company/nature-pure-supercritical-extracts/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-emerald-700/50 flex items-center justify-center text-gray-300 hover:text-white transition-colors border border-white/10"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
              </a>
              <a
                href="https://wa.me/919567889001"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-emerald-700/50 flex items-center justify-center text-gray-300 hover:text-white transition-colors border border-white/10"
                aria-label="WhatsApp"
                title="Chat with Nature Pure on WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.276-.1-.477-.15-.678.15-.2.301-.778.98-.954 1.18-.175.201-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.784-1.675-2.085-.175-.3-.019-.462.132-.612.136-.135.301-.351.452-.527.15-.176.201-.301.301-.502.101-.2.05-.376-.025-.526-.075-.15-.678-1.635-.929-2.239-.245-.589-.493-.509-.678-.519l-.577-.01c-.201 0-.527.075-.803.376s-1.054 1.03-1.054 2.511 1.079 2.912 1.23 3.113c.15.2 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.635.722.23 1.38.197 1.9-.12.58-.354 1.782-.728 2.033-1.432.251-.704.251-1.307.176-1.432-.075-.125-.276-.201-.577-.351zm-5.46 7.618c-2.004 0-3.966-.539-5.688-1.562l-.408-.242-4.223 1.107 1.127-4.116-.266-.423c-1.124-1.789-1.718-3.861-1.718-5.986 0-6.177 5.027-11.204 11.205-11.204 2.993 0 5.807 1.166 7.923 3.282 2.116 2.116 3.282 4.93 3.282 7.924 0 6.178-5.027 11.204-11.205 11.204zm9.588-19.196c-2.56-2.56-5.966-3.97-9.588-3.97-7.467 0-13.543 6.076-13.543 13.543 0 2.387.624 4.717 1.809 6.77l-1.923 7.022 7.185-1.884c1.979 1.079 4.212 1.648 6.472 1.648 7.468 0 13.544-6.076 13.544-13.543 0-3.621-1.41-7.027-3.97-9.587z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: The 4 Dedicated Brand Pages */}
          <div>
            <h4 className="text-xs font-bold text-amber-300 uppercase tracking-widest mb-4">
              Curated Brands
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <button onClick={() => navigate('/nature-harvest')} className="hover:text-emerald-400 transition-colors text-left cursor-pointer">
                  Nature's Harvest (LyoPure)
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/natures-purest')} className="hover:text-emerald-400 transition-colors text-left cursor-pointer">
                  Nature's Purest (SCFE)
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/naturesextracts')} className="hover:text-emerald-400 transition-colors text-left cursor-pointer">
                  Nature's Extracts (Bioactives)
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/natures-alchemy')} className="hover:text-emerald-400 transition-colors text-left cursor-pointer">
                  Nature's Alchemy (Colors)
                </button>
              </li>
              <li className="pt-1">
                <button onClick={() => navigate('/brands')} className="text-amber-300 hover:text-white font-semibold transition-colors text-left cursor-pointer">
                  View All Brands Hub →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold text-amber-300 uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li><button onClick={() => navigate('/about-us')} className="hover:text-emerald-400 transition-colors text-left cursor-pointer">About Nature Pure</button></li>
              <li><button onClick={() => navigate('/technology')} className="hover:text-emerald-400 transition-colors text-left cursor-pointer">Supercritical CO₂ Science</button></li>
              <li><button onClick={() => navigate('/solutions')} className="hover:text-emerald-400 transition-colors text-left cursor-pointer">Bulk Extraction &amp; Lab</button></li>
              <li><button onClick={() => navigate('/infrastructure')} className="hover:text-emerald-400 transition-colors text-left cursor-pointer">Infrastructure</button></li>
              <li><button onClick={() => navigate('/quality')} className="hover:text-emerald-400 transition-colors text-left cursor-pointer">Certifications &amp; Quality</button></li>
              <li><button onClick={() => navigate('/our-story')} className="hover:text-emerald-400 transition-colors text-left cursor-pointer">50-Year Heritage</button></li>
              <li><button onClick={() => navigate('/contact-us')} className="hover:text-emerald-400 transition-colors text-left cursor-pointer">Contact Us</button></li>
            </ul>
          </div>

          {/* Col 4: Facility & Contact Info */}
          <div>
            <h4 className="text-xs font-bold text-amber-300 uppercase tracking-widest mb-4">
              Global Facility
            </h4>
            <div className="space-y-3 text-xs text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  Plot No. 48, Kinfra Industrial Park, Kunnamthanam, Thiruvalla, Kerala 689581, India
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+919567889001" className="hover:text-emerald-300">
                  +91 95678 89001
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:info@naturepureextracts.com" className="hover:text-emerald-300">
                  info@naturepureextracts.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Nature Pure Supercritical Extracts Pvt. Ltd. All rights reserved.</p>
            <span className="hidden sm:inline text-gray-600">|</span>
            <p>
              Designed &amp; Developed by{' '}
              <a
                href="https://www.asiaaddigital.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400/90 hover:text-amber-300 hover:underline transition-colors font-medium"
              >
                Asiaad Digital
              </a>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-emerald-400 font-medium">Solvent-Free SCFE Technology</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-emerald-800/80 text-gray-300 hover:text-white transition-colors border border-white/10"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
