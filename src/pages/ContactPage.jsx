import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ArrowLeft, MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';

export default function ContactPage() {
  const { navigate } = useNavigation();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    industry: 'Nutraceuticals',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
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
        <div className="rounded-3xl bg-white border border-gray-200/90 p-8 sm:p-14 shadow-xs mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200/80">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Direct Commercial &amp; Technical Support</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight max-w-4xl">
            We Would Love to Hear From You
          </h1>
          <p className="mt-4 text-base sm:text-lg text-emerald-800 font-medium max-w-3xl">
            Reach out to our botanical extraction specialists for sample requests, technical specifications, custom formulations, or commercial volume partnerships.
          </p>
        </div>

        {/* Contact Layout: Info cards on Left, Interactive Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Manufacturing Facility & Office */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-gray-900 mb-1">Manufacturing Facility &amp; Registered Office</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Plot No. 48, Kinfra Industrial Park,<br />
                    Thiruvalla - Mallappally Rd, Kunnamthanam,<br />
                    Thiruvalla, Kerala 689581, India
                  </p>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-gray-900 mb-1">Business Hours</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Monday &ndash; Friday: 9:00 AM &ndash; 5:00 PM IST<br />
                    <span className="text-xs text-gray-400">Closed on Saturdays, Sundays, and public holidays</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Phone & Email */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-gray-900 mb-1">Direct Telecommunications</h3>
                  <p className="text-sm text-gray-600">
                    <a href="tel:+919567889001" className="hover:text-emerald-700 font-medium">
                      +91 95678 89001
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    <a href="mailto:info@naturepureextracts.com" className="hover:text-emerald-700 font-medium">
                      info@naturepureextracts.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-6 rounded-2xl bg-emerald-950 text-white border border-emerald-900 shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <h4 className="font-bold text-sm text-amber-300">Need Immediate Assistance?</h4>
              </div>
              <p className="text-xs text-emerald-200/90 leading-relaxed mb-4">
                Connect directly with our technical sales managers on WhatsApp for rapid quotation turnarounds and availability.
              </p>
              <a
                href="https://wa.me/919567889001?text=Hi%20Nature%20Pure!%20I%20would%20like%20to%20inquire%20about%20your%20extracts."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded-full font-bold text-xs transition-all shadow-md"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Inquiry & Technical Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-gray-200/90 p-8 sm:p-12 shadow-xs">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Inquiry Successfully Received!</h3>
                  <p className="text-gray-600 text-sm max-w-md mx-auto mb-6">
                    Thank you for reaching out to Nature Pure Extracts. Our technical sales team will review your requirements and respond within 1 business day.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs cursor-pointer transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-gray-100 pb-4 mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Send an Official Commercial Inquiry</h2>
                    <p className="text-xs text-gray-500 mt-1">
                      Fill out the form below and specify your target botanical extract or formulation requirements.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="e.g. John"
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="e.g. Doe"
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">Work Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">Contact Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 / International"
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">Company / Organization *</label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Name"
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">Industry Segment</label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50/50"
                      >
                        <option value="Nutraceuticals">Nutraceuticals &amp; Supplements</option>
                        <option value="Food & Beverage">Food &amp; Beverage</option>
                        <option value="Cosmetics & Personal Care">Cosmetics &amp; Personal Care</option>
                        <option value="Pharmaceuticals">Pharmaceuticals</option>
                        <option value="Bulk Extraction">Bulk Supercritical Extraction</option>
                        <option value="Contract Manufacturing">Contract Manufacturing</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Message / Technical Specifications *</label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please specify botanical interest (e.g. Cardamom, Turmeric, Ginger), required volume, target active marker percentage, or delivery timelines..."
                      className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50/50"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
