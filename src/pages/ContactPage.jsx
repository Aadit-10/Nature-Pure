import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ArrowLeft, MapPin, Phone, Mail, Clock, ExternalLink, ShieldCheck, Sparkles, MessageCircle, FileText, FlaskConical, Globe } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export default function ContactPage() {
  const { navigate } = useNavigation();

  const handleTopicInquiry = (topic) => {
    openWhatsApp(`Hi Nature Pure Extracts! I am inquiring regarding: ${topic}. Please connect me with your technical commercial team.`);
  };

  return (
    <div className="pt-28 pb-24 bg-[#fafbfc] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8 font-medium">
          <button onClick={() => navigate('/')} className="hover:text-emerald-700 flex items-center gap-1 cursor-pointer">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <span>/</span>
          <span className="text-gray-900 font-bold">Contact Us</span>
        </nav>

        {/* Header Banner */}
        <div className="rounded-3xl bg-white border border-gray-200/90 p-8 sm:p-12 shadow-xs mb-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              We Would Love to Hear From You
            </h1>
            <p className="mt-4 text-base sm:text-lg text-emerald-800 font-medium leading-relaxed">
              Reach out directly to our botanical extraction specialists for sample requests, technical CoAs, custom formulations, or commercial volume partnerships.
            </p>
          </div>

          {/* Quick Contact Bar */}
          <div className="mt-8 pt-8 border-t border-gray-100 flex flex-wrap items-center gap-4">
            <button
              onClick={() => openWhatsApp('Hi Nature Pure Extracts! I would like to make a commercial inquiry regarding your botanical extracts.')}
              className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-4 h-4 object-contain brightness-0 invert" />
              <span>Connect on WhatsApp</span>
            </button>
            <a
              href="tel:+919567889001"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider transition-all border border-emerald-200 shadow-2xs"
            >
              <Phone className="w-4 h-4 text-emerald-700" />
              <span>+91 95678 89001</span>
            </a>
            <a
              href="mailto:info@naturepureextracts.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-gray-50 text-gray-800 font-bold text-xs uppercase tracking-wider transition-all border border-gray-200 shadow-2xs"
            >
              <Mail className="w-4 h-4 text-emerald-700" />
              <span>info@naturepureextracts.com</span>
            </a>
          </div>
        </div>

        {/* 4 Core Contact & Operational Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* 1. Manufacturing Facility */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-gray-200/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5 border border-emerald-100">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-gray-900 mb-2">Registered Facility</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Plot No. 48, Kinfra Industrial Park,<br />
                Thiruvalla - Mallappally Rd, Kunnamthanam,<br />
                Thiruvalla, Kerala 689581, India
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-gray-100">
              <a
                href="https://maps.google.com/maps?q=Nature%20Pure%20Supercritical%20Extracts%20Pvt.%20Ltd.%2C%20Plot%20No.%2048%2C%20Kinfra%20Industrial%20Park%2C%20Thiruvalla%20-%20Mallappally%20Rd%2C%20Kunnamthanam%2C%20Thiruvalla%2C%20Kerala%20689581"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900"
              >
                <span>View Google Map</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 2. Direct Telecommunications */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-gray-200/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5 border border-emerald-100">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-gray-900 mb-2">Direct Telecommunications</h3>
              <div className="space-y-2 text-xs sm:text-sm text-gray-600">
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-400 block">Phone Desk</span>
                  <a href="tel:+919567889001" className="hover:text-emerald-700 font-semibold text-gray-900">
                    +91 95678 89001
                  </a>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-400 block">Commercial Email</span>
                  <a href="mailto:info@naturepureextracts.com" className="hover:text-emerald-700 font-semibold text-gray-900 break-all">
                    info@naturepureextracts.com
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-5 pt-4 border-t border-gray-100">
              <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Response within 24 hours
              </span>
            </div>
          </div>

          {/* 3. Business Hours */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-gray-200/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5 border border-emerald-100">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-gray-900 mb-2">Operational Hours</h3>
              <div className="space-y-2 text-xs sm:text-sm text-gray-600">
                <p>
                  <strong className="text-gray-900 block font-semibold">Monday &ndash; Friday</strong>
                  9:00 AM &ndash; 5:00 PM IST
                </p>
                <p className="text-xs text-gray-400">
                  Closed on Saturdays, Sundays, and Indian public holidays.
                </p>
              </div>
            </div>
            <div className="mt-5 pt-4 border-t border-gray-100">
              <span className="text-[11px] font-semibold text-gray-500">
                IST (UTC +05:30)
              </span>
            </div>
          </div>

          {/* 4. Instant WhatsApp Commercial Desk */}
          <div className="p-6 sm:p-7 rounded-3xl bg-emerald-950 text-white border border-emerald-900 shadow-md flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-5 border border-white/20">
                <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-6 h-6 object-contain brightness-0 invert" />
              </div>
              <h3 className="font-bold text-base text-white mb-2">Direct WhatsApp Desk</h3>
              <p className="text-xs text-emerald-200/90 leading-relaxed">
                Connect directly with our technical commercial team for real-time stock availability, sample requisitions, and price quotations.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-emerald-800/80">
              <button
                onClick={() => openWhatsApp('Hi Nature Pure Extracts! I would like to inquire about commercial availability.')}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-xs cursor-pointer"
              >
                <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-3.5 h-3.5 object-contain brightness-0 invert" />
                <span>Message on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dedicated Commercial Direct Actions */}
        <div className="rounded-3xl bg-white border border-gray-200/90 p-8 sm:p-10 shadow-xs mb-12">
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Direct Inquiries by Department
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Select your specific requirement below to begin a direct conversation with the relevant technical specialist.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              onClick={() => handleTopicInquiry('Sample Requisitions & CoAs')}
              className="p-5 rounded-2xl bg-gray-50 hover:bg-emerald-50/70 border border-gray-200 hover:border-emerald-300 text-left transition-all group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-white text-emerald-700 flex items-center justify-center mb-3 shadow-2xs group-hover:scale-105 transition-transform border border-gray-100">
                <FlaskConical className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-gray-900 group-hover:text-emerald-800 transition-colors">
                Samples &amp; CoAs
              </h4>
              <p className="text-xs text-gray-500 mt-1">
                Request laboratory validation samples &amp; analytical certificates.
              </p>
              <span className="text-[11px] font-bold text-emerald-700 mt-3 inline-flex items-center gap-1">
                Inquire on WhatsApp &rarr;
              </span>
            </button>

            <button
              onClick={() => handleTopicInquiry('Bulk SCFE Extraction & Tolling')}
              className="p-5 rounded-2xl bg-gray-50 hover:bg-emerald-50/70 border border-gray-200 hover:border-emerald-300 text-left transition-all group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-white text-emerald-700 flex items-center justify-center mb-3 shadow-2xs group-hover:scale-105 transition-transform border border-gray-100">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-gray-900 group-hover:text-emerald-800 transition-colors">
                Bulk SCFE &amp; Tolling
              </h4>
              <p className="text-xs text-gray-500 mt-1">
                Contract manufacturing, supercritical tolling &amp; multi-ton extraction.
              </p>
              <span className="text-[11px] font-bold text-emerald-700 mt-3 inline-flex items-center gap-1">
                Inquire on WhatsApp &rarr;
              </span>
            </button>

            <button
              onClick={() => handleTopicInquiry('Regulatory Compliance & Certifications')}
              className="p-5 rounded-2xl bg-gray-50 hover:bg-emerald-50/70 border border-gray-200 hover:border-emerald-300 text-left transition-all group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-white text-emerald-700 flex items-center justify-center mb-3 shadow-2xs group-hover:scale-105 transition-transform border border-gray-100">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-gray-900 group-hover:text-emerald-800 transition-colors">
                Regulatory &amp; Audits
              </h4>
              <p className="text-xs text-gray-500 mt-1">
                USDA Organic, GMP, ISO, HALAL, KOSHER &amp; FSSAI compliance dossiers.
              </p>
              <span className="text-[11px] font-bold text-emerald-700 mt-3 inline-flex items-center gap-1">
                Inquire on WhatsApp &rarr;
              </span>
            </button>

            <button
              onClick={() => handleTopicInquiry('International Export & Logistics')}
              className="p-5 rounded-2xl bg-gray-50 hover:bg-emerald-50/70 border border-gray-200 hover:border-emerald-300 text-left transition-all group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-white text-emerald-700 flex items-center justify-center mb-3 shadow-2xs group-hover:scale-105 transition-transform border border-gray-100">
                <Globe className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-gray-900 group-hover:text-emerald-800 transition-colors">
                Global Export Supply
              </h4>
              <p className="text-xs text-gray-500 mt-1">
                International logistics, customs clearance, and global air/ocean freight.
              </p>
              <span className="text-[11px] font-bold text-emerald-700 mt-3 inline-flex items-center gap-1">
                Inquire on WhatsApp &rarr;
              </span>
            </button>
          </div>
        </div>

        {/* Dedicated Interactive Location Map */}
        <div className="rounded-3xl bg-white border border-gray-200/90 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Nature Pure Supercritical Extracts Pvt. Ltd.
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Plot No. 48, Kinfra Industrial Park, Thiruvalla - Mallappally Rd, Kunnamthanam, Thiruvalla, Kerala 689581
              </p>
            </div>
            <a
              href="https://maps.google.com/maps?q=Nature%20Pure%20Supercritical%20Extracts%20Pvt.%20Ltd.%2C%20Plot%20No.%2048%2C%20Kinfra%20Industrial%20Park%2C%20Thiruvalla%20-%20Mallappally%20Rd%2C%20Kunnamthanam%2C%20Thiruvalla%2C%20Kerala%20689581"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap self-start sm:self-center"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-gray-200 shadow-inner">
            <iframe
              src="https://maps.google.com/maps?q=Nature%20Pure%20Supercritical%20Extracts%20Pvt.%20Ltd.%2C%20Plot%20No.%2048%2C%20Kinfra%20Industrial%20Park%2C%20Thiruvalla%20-%20Mallappally%20Rd%2C%20Kunnamthanam%2C%20Thiruvalla%2C%20Kerala%20689581&t=m&z=15&output=embed&iwloc=near"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nature Pure Location Map"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
