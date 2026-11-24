import React from 'react'
import { PartyPopper, Phone, Sparkles, ArrowRight, HeartHandshake } from 'lucide-react'
import { HOTEL_INFO } from '../data/hotelData'
import type { EnquiryType } from '../types'

interface BanquetProps {
  onOpenEnquiry: (type?: EnquiryType) => void
}

export const Banquet: React.FC<BanquetProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="banquet" className="py-20 sm:py-28 bg-[#faf8f5] text-[#1e293b] relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c5a869]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a869]/15 border border-[#c5a869]/30 text-xs font-bold uppercase tracking-widest text-[#9e7f3c]">
            <PartyPopper className="w-3.5 h-3.5 text-[#c5a869]" />
            Celebrations & Functions
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#0b1426]">
            {HOTEL_INFO.banquet.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            {HOTEL_INFO.banquet.description}
          </p>
        </div>

        {/* Hero Event Hall Showcase */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#c5a869]/30 mb-12 group">
          <div className="h-[360px] sm:h-[460px] lg:h-[500px] w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=80"
              alt="Hotel Surya Pride Grand Banquet Hall in Nanded"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-[#070d18] via-[#0b1426]/60 to-transparent" />

          {/* Hall Overlay Info */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c5a869]/30 backdrop-blur-md text-[#f5e4ba] text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                Vazirabad, Nanded
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Memorable Gatherings in the City Center
              </h3>
              <p className="text-sm text-slate-300 max-w-xl">
                A graceful venue equipped for family functions, festive gatherings, receptions, and formal events with in-house dining support.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenEnquiry('banquet')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#c5a869] to-[#9e7f3c] hover:from-[#d5ba7b] hover:to-[#c5a869] text-[#0b1426] font-bold text-xs sm:text-sm tracking-wider uppercase shadow-xl transition-all active:scale-95 flex items-center gap-2"
              >
                <span>Plan Your Event</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${HOTEL_INFO.contacts.primaryRaw}`}
                className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/25 font-bold text-xs sm:text-sm tracking-wider uppercase backdrop-blur-md flex items-center gap-2 transition-all active:scale-95"
              >
                <Phone className="w-4 h-4 text-[#c5a869]" />
                <span>Call Venue Desk</span>
              </a>
            </div>
          </div>
        </div>

        {/* Event Hall Transparency Notice Card */}
        <div className="p-6 rounded-2xl bg-white border border-[#c5a869]/30 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-[#0b1426] text-[#f5e4ba] shrink-0 mt-0.5">
                <HeartHandshake className="w-5 h-5 text-[#c5a869]" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-lg font-bold text-[#0b1426]">
                  Personalized Banquet Consultation
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
                  {HOTEL_INFO.banquet.disclaimer}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`tel:${HOTEL_INFO.contacts.primaryRaw}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0b1426] text-[#f5e4ba] hover:bg-[#16233b] text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#c5a869]" />
                <span>Contact Desk</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
