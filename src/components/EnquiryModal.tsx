import React, { useState } from 'react'
import { X, CheckCircle2, MessageSquare, Sparkles, ShieldCheck } from 'lucide-react'
import { HOTEL_INFO } from '../data/hotelData'
import type { EnquiryType, EnquiryFormData } from '../types'

interface EnquiryModalProps {
  isOpen: boolean
  onClose: () => void
  initialType?: EnquiryType
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialType = 'general',
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    enquiryType: initialType,
    date: '',
    guests: '2',
    message: '',
  })

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const validate = () => {
    const errs: Partial<Record<keyof EnquiryFormData, string>> = {}
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required.'
    if (!formData.phoneNumber.trim()) errs.phoneNumber = 'Phone number is required.'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    try {
      const stored = JSON.parse(localStorage.getItem('surya_pride_enquiries') || '[]')
      localStorage.setItem(
        'surya_pride_enquiries',
        JSON.stringify([{ id: Date.now().toString(), ...formData, at: new Date().toISOString() }, ...stored])
      )
    } catch {}

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 500)
  }

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Hotel Surya Pride,\n\nI want to make an enquiry regarding: ${formData.enquiryType.toUpperCase()}\n- Name: ${formData.fullName || 'Guest'}\n- Phone: ${formData.phoneNumber || 'Not provided'}\n- Date: ${formData.date || 'Flexible'}\n- Details: ${formData.message || 'General enquiry'}`
    )
    window.open(`https://wa.me/${HOTEL_INFO.contacts.whatsapp}?text=${text}`, '_blank')
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#0b1426] border border-[#c5a869]/40 text-white shadow-2xl p-6 sm:p-8 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#c5a869]/20 text-[#c5a869] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#f5e4ba]">
              Thank You!
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm mx-auto">
              Your inquiry has been received. Our team at Hotel Surya Pride will get in touch with you shortly.
            </p>
            <div className="pt-4 flex flex-col gap-2.5">
              <button
                onClick={handleWhatsAppDirect}
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-[#070d18] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Continue on WhatsApp</span>
              </button>
              <button
                onClick={() => {
                  setSubmitted(false)
                  onClose()
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#c5a869]/20 text-[#f5e4ba] text-[10px] font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-[#c5a869]" />
                Hotel Surya Pride Desk
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                Make an Enquiry
              </h3>
              <p className="text-xs text-slate-400">
                Opposite Collector Office, Station Road, Vazirabad, Nanded
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#f5e4ba] uppercase tracking-wider mb-1">
                  Enquiry Type
                </label>
                <select
                  value={formData.enquiryType}
                  onChange={(e) =>
                    setFormData({ ...formData, enquiryType: e.target.value as EnquiryType })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#070d18] border border-white/20 text-white text-sm focus:outline-none focus:border-[#c5a869]"
                >
                  <option value="room">Furnished Rooms Stay</option>
                  <option value="restaurant">Family Restaurant Dining</option>
                  <option value="banquet">Banquet Hall Celebration</option>
                  <option value="bar">Bar & Lounge</option>
                  <option value="general">General Hotel Inquiry</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#f5e4ba] uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Full name"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#070d18] border text-white text-sm focus:outline-none ${
                      errors.fullName ? 'border-red-500' : 'border-white/20 focus:border-[#c5a869]'
                    }`}
                  />
                  {errors.fullName && <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#f5e4ba] uppercase tracking-wider mb-1">
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    placeholder="+91 96076 66882"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#070d18] border text-white text-sm focus:outline-none ${
                      errors.phoneNumber ? 'border-red-500' : 'border-white/20 focus:border-[#c5a869]'
                    }`}
                  />
                  {errors.phoneNumber && <p className="text-[11px] text-red-400 mt-1">{errors.phoneNumber}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#f5e4ba] uppercase tracking-wider mb-1">
                  Message / Details
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share any special preferences, number of guests, or dates..."
                  className="w-full px-3.5 py-2 rounded-xl bg-[#070d18] border border-white/20 text-white text-sm focus:outline-none focus:border-[#c5a869] resize-none"
                />
              </div>

              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[11px] text-slate-400 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#c5a869] shrink-0 mt-0.5" />
                <span>
                  Enquiry submissions do not confirm reservations automatically. Our team will verify and confirm.
                </span>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#c5a869] to-[#9e7f3c] text-[#0b1426] font-bold text-xs uppercase tracking-wider shadow-lg hover:from-[#d5ba7b] transition-all"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="py-3 px-4 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
