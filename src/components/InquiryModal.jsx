import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Phone, Mail, FileText } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function InquiryModal({ isOpen, onClose, prefilledProduct = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: prefilledProduct,
    volume: 'Pilot Sample (100g - 1kg)',
    industry: 'Nutraceuticals',
    message: ''
  });
  const [requestSample, setRequestSample] = useState(true);
  const [requestCoA, setRequestCoA] = useState(true);
  const [requestPricing, setRequestPricing] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledProduct) {
      setFormData((prev) => ({ ...prev, product: prefilledProduct }));
    }
  }, [prefilledProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after 4s
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 4000);
    }, 600);
  };

  const getCustomWhatsAppMessage = () => {
    const requests = [
      requestSample && '100g Pilot Sample',
      requestCoA && 'CoA / Tech Specs',
      requestPricing && 'Price Quotation'
    ].filter(Boolean).join(', ');

    const prod = formData.product ? formData.product : 'botanical extracts';
    return `Hi Nature Pure Extracts! I would like to inquire regarding ${prod}. Requested: ${requests || 'Technical & Commercial info'}. Volume: ${formData.volume}. Name: ${formData.name || 'Valued Partner'}, Company: ${formData.company || 'N/A'}.`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-gray-100 overflow-hidden relative animate-in zoom-in-95 duration-200">
        {/* Top Header */}
        <div className="bg-gradient-to-r from-emerald-900 to-teal-900 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-300 mb-1">
            <FileText className="w-4 h-4" />
            <span>Commercial &amp; Technical Desk</span>
          </div>
          <h3 className="text-2xl font-bold">Request Sample, CoA &amp; Quote</h3>
          <p className="text-xs text-emerald-100/80 mt-1">
            Our R&amp;D and supply chain teams respond within 24 business hours.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-10 animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">Inquiry Received Successfully!</h4>
              <p className="text-sm text-gray-600 mt-2 max-w-md mx-auto">
                Thank you, <strong>{formData.name || 'valued partner'}</strong>. Our technical extraction specialists will review your request for <strong>{formData.product || 'botanical extracts'}</strong> and transmit full specification sheets and sample logistics.
              </p>
              <div className="mt-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-100 text-xs text-emerald-800">
                Need instant technical confirmation? Message our executive desk directly on WhatsApp at <strong>+91 95678 89001</strong>.
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. John Doe"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Corporate Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Company / Organization *</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Company Name"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Product of Interest</label>
                  <input
                    type="text"
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    placeholder="e.g. Cardamom Oil SCFE, Curcumin"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Requirement Volume</label>
                  <select
                    value={formData.volume}
                    onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white"
                  >
                    <option>Pilot Sample (100g - 1kg)</option>
                    <option>Small Batch (5kg - 25kg)</option>
                    <option>Commercial Batch (100kg - 500kg)</option>
                    <option>Bulk Container (1 Ton+)</option>
                    <option>Custom Formulation / Toll Extraction</option>
                  </select>
                </div>
              </div>

              {/* Deliverable Checkboxes */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">Deliverables Requested</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 bg-gray-50/80 p-3 rounded-xl border border-gray-200">
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-gray-800">
                    <input
                      type="checkbox"
                      checked={requestSample}
                      onChange={(e) => setRequestSample(e.target.checked)}
                      className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 border-gray-300 cursor-pointer accent-emerald-600"
                    />
                    <span>Request 100g Sample</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-gray-800">
                    <input
                      type="checkbox"
                      checked={requestCoA}
                      onChange={(e) => setRequestCoA(e.target.checked)}
                      className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 border-gray-300 cursor-pointer accent-emerald-600"
                    />
                    <span>CoA / Technical Specs</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-gray-800">
                    <input
                      type="checkbox"
                      checked={requestPricing}
                      onChange={(e) => setRequestPricing(e.target.checked)}
                      className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 border-gray-300 cursor-pointer accent-emerald-600"
                    />
                    <span>Price Quotation</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Technical Requirements / Notes</label>
                <textarea
                  rows="2"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Specify target active concentration, application medium (liquid/powder/oil), or target pharmacopeia..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:w-auto flex-1 py-3 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-700 to-teal-700 hover:from-emerald-600 hover:to-teal-600 text-white shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry</span>
                </button>
                <a
                  href={getWhatsAppUrl(getCustomWhatsAppMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-3 rounded-xl border border-emerald-300 text-emerald-800 bg-emerald-50 hover:bg-emerald-100 text-xs font-bold flex items-center justify-center gap-2 whitespace-nowrap transition-colors"
                  title="Direct WhatsApp Inquiry"
                >
                  <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-4 h-4 object-contain" />
                  <span>Prefer WhatsApp? Chat Directly</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
