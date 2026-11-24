import React from 'react'
import { GlassWater, Sparkles, Phone, ArrowRight, Shield } from 'lucide-react'
import { HOTEL_INFO } from '../data/hotelData'
import type { EnquiryType } from '../types'

interface BarProps {
  onOpenEnquiry: (type?: EnquiryType) => void
}

export const Bar: React.FC<BarProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="bar" className="py-20 sm:py-28 bg-[#070d18] text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c5a869]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a869]/15 border border-[#c5a869]/30 text-xs font-bold uppercase tracking-widest text-[#f5e4ba]">
              <GlassWater className="w-3.5 h-3.5 text-[#c5a869]" />
              Hotel Surya Pride Bar
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              {HOTEL_INFO.bar.heading}
            </h2>

            <p className="font-serif text-lg text-[#dfc17b] italic font-medium">
              {HOTEL_INFO.bar.tagline}
            </p>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              {HOTEL_INFO.bar.description}
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              Enjoy a comfortable seating layout tailored for leisure moments, quiet unwinding, or reconnecting with peers in a pleasant, hospitable environment right here in Vazirabad, Nanded.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#c5a869] shrink-0" />
                <span>Relaxing Ambient Mood Lighting</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 flex items-center gap-2.5">
                <Shield className="w-4 h-4 text-[#c5a869] shrink-0" />
                <span>Respectful & Hospitable Atmosphere</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onOpenEnquiry('bar')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#c5a869] to-[#9e7f3c] text-[#0b1426] font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-[#c5a869]/20 transition-all active:scale-95 flex items-center gap-2"
              >
                <span>Bar Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${HOTEL_INFO.contacts.primaryRaw}`}
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all active:scale-95"
              >
                <Phone className="w-3.5 h-3.5 text-[#c5a869]" />
                <span>Call Desk</span>
              </a>
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                <img
                  src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=800&q=80"
                  alt="Bar Lounge Interior at Hotel Surya Pride"
                  className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 group sm:translate-y-6">
                <img
                  src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80"
                  alt="Bar Counter and Atmosphere at Hotel Surya Pride"
                  className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
