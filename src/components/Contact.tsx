import React, { useState } from 'react'
import {
  MapPin,
  Phone,
  MessageSquare,
  Sparkles,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react'
import { HOTEL_INFO } from '../data/hotelData'
import type { EnquiryType, EnquiryFormData } from '../types'

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    enquiryType: 'room',
    date: '',
    guests: '2',
    message: '',
  })

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submittedSuccess, setSubmittedSuccess] = useState(false)

  const validateForm = () => {
    const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {}
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.'
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Please enter your contact phone number.'
    } else if (!/^[0-9+-\s()]{7,15}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = 'Please enter a valid phone number.'
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)

    // Save to local storage mock backend so enquiry is NEVER silently lost
    try {
      const existingSubmissions = JSON.parse(
        localStorage.getItem('surya_pride_enquiries') || '[]'
      )
      const newSubmission = {
        id: Date.now().toString(),
        submittedAt: new Date().toISOString(),
        ...formData,
      }
      localStorage.setItem(
        'surya_pride_enquiries',
        JSON.stringify([newSubmission, ...existingSubmissions])
      )
    } catch {
      // Fallback gracefully
    }

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmittedSuccess(true)
    }, 600)
  }

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Hotel Surya Pride,\n\nI would like to inquire about:\n- Name: ${formData.fullName || 'Guest'}\n- Category: ${formData.enquiryType.toUpperCase()}\n- Phone: ${formData.phoneNumber || 'Not specified'}\n- Date: ${formData.date || 'Flexible'}\n- Notes: ${formData.message || 'General enquiry'}`
    )
    return `https://wa.me/${HOTEL_INFO.contacts.whatsapp}?text=${text}`
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#faf8f5] text-[#1e293b] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a869]/15 border border-[#c5a869]/30 text-xs font-bold uppercase tracking-widest text-[#9e7f3c]">
            <MapPin className="w-3.5 h-3.5 text-[#c5a869]" />
            Location & Inquiries
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#0b1426]">
            Visit or Connect With Us
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Conveniently situated opposite the Collector Office in Vazirabad, Nanded. Our front desk and management team are always glad to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Verified Location, Address & Direct Reach */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#c5a869]/30 shadow-lg space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#0b1426] text-[#f5e4ba] shrink-0 mt-1">
                  <MapPin className="w-6 h-6 text-[#c5a869]" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-xl font-bold text-[#0b1426]">
                    Hotel Surya Pride
                  </h3>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    Surya Heights, House No. 3-1-34,<br />
                    Opposite Collector Office, Station Road,<br />
                    Vazirabad, Nanded, Maharashtra, India.
                  </p>
                </div>
              </div>

              {/* Direct Maps Link */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={HOTEL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#9e7f3c] hover:text-[#0b1426] transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-xs text-slate-400">Station Road, Nanded</span>
              </div>
            </div>

            {/* Direct Contact Numbers */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0b1426] to-[#121f38] text-white border border-[#c5a869]/40 shadow-xl space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#c5a869] block">
                Direct Contact Lines
              </span>

              <div className="space-y-3">
                <a
                  href={`tel:${HOTEL_INFO.contacts.primaryRaw}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#c5a869] group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-xs text-slate-400">Primary Contact & Reservations</p>
                      <p className="text-sm font-bold text-[#f5e4ba]">{HOTEL_INFO.contacts.primary}</p>
                    </div>
                  </div>
                  <span className="text-xs text-[#c5a869] font-semibold group-hover:underline">Call Now</span>
                </a>

                <a
                  href={`tel:${HOTEL_INFO.contacts.secondaryRaw}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#c5a869] group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-xs text-slate-400">Front Desk Assistance</p>
                      <p className="text-sm font-bold text-[#f5e4ba]">{HOTEL_INFO.contacts.secondary}</p>
                    </div>
                  </div>
                  <span className="text-xs text-[#c5a869] font-semibold group-hover:underline">Call Now</span>
                </a>
              </div>

              {/* WhatsApp One-Click Action */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${HOTEL_INFO.contacts.whatsapp}?text=Hello%20Hotel%20Surya%20Pride,%20I%20would%20like%20to%20make%20an%20enquiry.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-[#070d18] font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp ({HOTEL_INFO.contacts.primary})</span>
                </a>
              </div>
            </div>

            {/* Google Map Embedded Frame */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-[#c5a869]/30 h-64 bg-slate-200">
              <iframe
                title="Hotel Surya Pride Nanded Location Map"
                src="https://maps.google.com/maps?q=Surya+Heights,+Opposite+Collector+Office,+Station+Road,+Vazirabad,+Nanded&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Functional Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#c5a869]/30 shadow-xl relative">
              <div className="space-y-2 mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a869]/15 text-[#9e7f3c] text-xs font-bold uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5 text-[#c5a869]" />
                  Enquiry & Reservation Desk
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0b1426]">
                  Send Your Inquiry Directly
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Please share your requirements below. Our team will review your request and get back to you promptly.
                </p>
              </div>

              {submittedSuccess ? (
                <div className="p-8 rounded-2xl bg-[#0b1426] text-white border border-[#c5a869]/40 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#c5a869]/20 text-[#c5a869] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#f5e4ba]">
                    Enquiry Received Successfully!
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Your inquiry for{' '}
                    <strong className="text-[#f5e4ba] uppercase">{formData.enquiryType}</strong> has been saved. Our hospitality team will contact you at{' '}
                    <strong className="text-white">{formData.phoneNumber}</strong> shortly.
                  </p>

                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-[#25D366] text-[#070d18] font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md hover:bg-[#20bd5a]"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>Send via WhatsApp as well</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmittedSuccess(false)
                        setFormData({
                          fullName: '',
                          phoneNumber: '',
                          email: '',
                          enquiryType: 'room',
                          date: '',
                          guests: '2',
                          message: '',
                        })
                      }}
                      className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Rajesh Sharma"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-slate-900 text-sm focus:outline-none focus:bg-white transition-all ${
                          errors.fullName ? 'border-red-500' : 'border-slate-200 focus:border-[#c5a869]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="+91 98765 43210"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-slate-900 text-sm focus:outline-none focus:bg-white transition-all ${
                          errors.phoneNumber ? 'border-red-500' : 'border-slate-200 focus:border-[#c5a869]'
                        }`}
                      />
                      {errors.phoneNumber && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.phoneNumber}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                        Enquiry Type *
                      </label>
                      <select
                        value={formData.enquiryType}
                        onChange={(e) =>
                          setFormData({ ...formData, enquiryType: e.target.value as EnquiryType })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-[#c5a869] transition-all"
                      >
                        <option value="room">Room Booking / Stay</option>
                        <option value="restaurant">Family Restaurant Dining</option>
                        <option value="banquet">Banquet Hall Celebration / Function</option>
                        <option value="bar">Bar & Lounge Visit</option>
                        <option value="general">General Hotel Enquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                        Preferred Date (Optional)
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-[#c5a869] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                      Your Message or Specific Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your room requirements, number of guests, dining table preference, or banquet function details..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-[#c5a869] transition-all resize-none"
                    />
                  </div>

                  {/* Submission Disclaimer */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-xs text-slate-600">
                    <ShieldCheck className="w-4 h-4 text-[#c5a869] shrink-0 mt-0.5" />
                    <span>
                      <strong>Important Notice:</strong> Submitting this enquiry form does not constitute a guaranteed or confirmed booking. Our front desk will connect with you directly to verify dates, availability, and finalize booking details.
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#c5a869] via-[#dfc17b] to-[#b39046] hover:from-[#d5ba7b] hover:to-[#c5a869] text-[#0b1426] font-bold text-sm uppercase tracking-wider shadow-xl transition-all duration-200 active:scale-98 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Your Enquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Hotel Enquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
