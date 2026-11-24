import React from 'react'
import { Phone, Info, Check, Sparkles } from 'lucide-react'
import { HOTEL_INFO } from '../data/hotelData'
import type { EnquiryType } from '../types'

interface RoomsProps {
  onOpenEnquiry: (type?: EnquiryType) => void
}

export const Rooms: React.FC<RoomsProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="rooms" className="py-20 sm:py-28 bg-[#0b1426] text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#c5a869]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a869]/15 border border-[#c5a869]/30 text-xs font-bold uppercase tracking-widest text-[#f5e4ba]">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a869]" />
            Accommodation & Stays
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
            {HOTEL_INFO.rooms.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            {HOTEL_INFO.rooms.description}
          </p>
        </div>

        {/* Accommodation Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Card 1 */}
          <div className="group rounded-2xl bg-[#070d18] border border-white/10 hover:border-[#c5a869]/50 overflow-hidden shadow-2xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"
                  alt="Comfortable furnished room at Hotel Surya Pride"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070d18] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0b1426]/90 backdrop-blur-md border border-[#c5a869]/40 text-[#f5e4ba] text-xs font-semibold">
                  Furnished Accommodation
                </span>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#f5e4ba] transition-colors">
                  Comfort Room
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Carefully furnished for travelers seeking restful tranquility, quiet ambiance, and essential comfort in the heart of Nanded.
                </p>

                <div className="pt-2 border-t border-white/5 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#c5a869]" /> Fully furnished interior
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#c5a869]" /> Clean & sanitized bedding
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#c5a869]" /> Attached modern washroom
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => onOpenEnquiry('room')}
                className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-[#c5a869] text-white hover:text-[#0b1426] border border-white/20 hover:border-[#c5a869] font-bold text-xs tracking-wider uppercase transition-all duration-200"
              >
                Inquire For This Room
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group rounded-2xl bg-[#070d18] border border-[#c5a869]/40 hover:border-[#c5a869] overflow-hidden shadow-2xl transition-all duration-300 flex flex-col justify-between relative">
            <div className="absolute -top-3 right-6 z-20">
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#c5a869] to-[#9e7f3c] text-[#0b1426] text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                Popular Choice
              </span>
            </div>

            <div>
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
                  alt="Executive furnished room at Hotel Surya Pride"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070d18] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0b1426]/90 backdrop-blur-md border border-[#c5a869]/40 text-[#f5e4ba] text-xs font-semibold">
                  Executive Furnished
                </span>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#f5e4ba] transition-colors">
                  Executive Room
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Tailored for corporate guests, executives, and families desiring generous space, refined aesthetic, and relaxing hospitality.
                </p>

                <div className="pt-2 border-t border-white/5 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#c5a869]" /> Premium furnishings & decor
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#c5a869]" /> Work desk & reading illumination
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#c5a869]" /> Prompt room service available
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => onOpenEnquiry('room')}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#c5a869] to-[#9e7f3c] text-[#0b1426] font-bold text-xs tracking-wider uppercase shadow-lg transition-all duration-200"
              >
                Inquire For This Room
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group rounded-2xl bg-[#070d18] border border-white/10 hover:border-[#c5a869]/50 overflow-hidden shadow-2xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80"
                  alt="Family accommodation at Hotel Surya Pride"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070d18] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0b1426]/90 backdrop-blur-md border border-[#c5a869]/40 text-[#f5e4ba] text-xs font-semibold">
                  Family Accommodation
                </span>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#f5e4ba] transition-colors">
                  Family Suite Stay
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Ample layout accommodating families traveling together with children or elders, offering quiet privacy and complete convenience.
                </p>

                <div className="pt-2 border-t border-white/5 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#c5a869]" /> Spacious multi-guest layout
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#c5a869]" /> Clean, well-maintained linens
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#c5a869]" /> Close to dining & reception
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => onOpenEnquiry('room')}
                className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-[#c5a869] text-white hover:text-[#0b1426] border border-white/20 hover:border-[#c5a869] font-bold text-xs tracking-wider uppercase transition-all duration-200"
              >
                Inquire For This Room
              </button>
            </div>
          </div>
        </div>

        {/* Mandatory Transparency Box (Do not invent rates/amenities disclaimer) */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#121f38]/60 border border-[#c5a869]/30 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#c5a869]/20 text-[#f5e4ba] shrink-0 mt-0.5">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#f5e4ba] uppercase tracking-wider">
                Direct Reservation & Tariff Transparency
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl">
                {HOTEL_INFO.rooms.disclaimer}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto shrink-0">
            <button
              onClick={() => onOpenEnquiry('room')}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#c5a869] to-[#9e7f3c] text-[#0b1426] font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
            >
              Room Enquiry
            </button>
            <a
              href={`tel:${HOTEL_INFO.contacts.primaryRaw}`}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a869]" />
              <span>Call to Book</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
