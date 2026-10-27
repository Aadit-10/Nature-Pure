import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

export default function MapSection() {
  return (
    <section id="location" className="py-20 sm:py-24 bg-white relative overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Our Facility &amp; Global Headquarters
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Strategically based in the pristine botanical heartland of Kerala, India, at the government-approved Kinfra Industrial Park.
          </p>
        </div>

        {/* Map & Facility Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Location & Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-gray-50/90 rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xs space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 leading-snug">
                  Nature Pure Supercritical Extracts Pvt. Ltd.
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                  Plot No. 48, Kinfra Industrial Park,<br />
                  Thiruvalla - Mallappally Rd, Kunnamthanam,<br />
                  Thiruvalla, Kerala 689581, India
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200/70 space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900 block">Operating Hours</strong>
                    <span className="text-gray-600">Monday &ndash; Friday: 9:00 AM &ndash; 5:00 PM IST</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900 block">Direct Line</strong>
                    <a href="tel:+919567889001" className="text-emerald-800 font-semibold hover:underline">
                      +91 95678 89001
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900 block">Inquiries &amp; CoA Requests</strong>
                    <a href="mailto:info@naturepureextracts.com" className="text-emerald-800 font-semibold hover:underline">
                      info@naturepureextracts.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/maps?q=Nature%20Pure%20Supercritical%20Extracts%20Pvt.%20Ltd.%2C%20Plot%20No.%2048%2C%20Kinfra%20Industrial%20Park%2C%20Thiruvalla%20-%20Mallappally%20Rd%2C%20Kunnamthanam%2C%20Thiruvalla%2C%20Kerala%20689581"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed Iframe */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-gray-200/90 shadow-md bg-gray-100 min-h-[380px] sm:min-h-[440px] relative">
            <iframe
              loading="lazy"
              src="https://maps.google.com/maps?q=Nature%20Pure%20Supercritical%20Extracts%20Pvt.%20Ltd.%2C%20Plot%20No.%2048%2C%20Kinfra%20Industrial%20Park%2C%20Thiruvalla%20-%20Mallappally%20Rd%2C%20Kunnamthanam%2C%20Thiruvalla%2C%20Kerala%20689581&t=m&z=15&output=embed&iwloc=near"
              title="Nature Pure Supercritical Extracts Pvt. Ltd. Location Map"
              aria-label="Nature Pure Supercritical Extracts Pvt. Ltd. Location Map"
              className="w-full h-full min-h-[380px] sm:min-h-[440px] border-0"
              allowFullScreen=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
