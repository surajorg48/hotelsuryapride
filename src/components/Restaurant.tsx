import React from 'react'
import { Utensils, Phone, MessageSquare, Sparkles, ChefHat, Flame, Award, ArrowRight } from 'lucide-react'
import { HOTEL_INFO } from '../data/hotelData'
import type { EnquiryType } from '../types'

interface RestaurantProps {
  onOpenEnquiry: (type?: EnquiryType) => void
}

export const Restaurant: React.FC<RestaurantProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="restaurant" className="py-20 sm:py-28 bg-[#faf8f5] text-[#1e293b] relative overflow-hidden">
      {/* Decorative Warm Background Blurs */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#c5a869]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a869]/15 border border-[#c5a869]/30 text-xs font-bold uppercase tracking-widest text-[#9e7f3c]">
            <Utensils className="w-3.5 h-3.5 text-[#c5a869]" />
            Family Restaurant
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#0b1426]">
            {HOTEL_INFO.restaurant.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            {HOTEL_INFO.restaurant.description}
          </p>
        </div>

        {/* Feature Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Atmosphere Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#c5a869]/30 group">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
                alt="Hotel Surya Pride Family Restaurant Ambiance"
                className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1426]/85 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a869]/30 backdrop-blur-md text-[#f5e4ba] text-xs font-semibold">
                  <ChefHat className="w-3.5 h-3.5" />
                  <span>Warm Family Atmosphere</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Cherish Every Meal Together
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Comfortable seating, prompt service, and dishes prepared with freshly ground spices.
                </p>
              </div>
            </div>
          </div>

          {/* Indicative Cost & Dining Experience Info */}
          <div className="lg:col-span-6 space-y-6">
            {/* Cost For Two Highlight Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0b1426] to-[#16233b] text-white border border-[#c5a869]/40 shadow-xl relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-[#c5a869]/10 rounded-full blur-2xl" />
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#c5a869]">
                    Indicative Dining Estimate
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-[#f5e4ba]">
                      ₹800
                    </span>
                    <span className="text-sm text-slate-300 font-medium">for two people</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-[#c5a869]/20 text-[#f5e4ba]">
                  <Award className="w-6 h-6 text-[#c5a869]" />
                </div>
              </div>
              <p className="text-xs text-slate-300/90 mt-3 pt-3 border-t border-white/10 leading-relaxed italic">
                * {HOTEL_INFO.restaurant.costDisclaimer}
              </p>
            </div>

            {/* Quick Dining CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <button
                onClick={() => onOpenEnquiry('restaurant')}
                className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-[#c5a869] to-[#9e7f3c] hover:from-[#d5ba7b] hover:to-[#c5a869] text-[#0b1426] font-bold text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Dining / Table Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${HOTEL_INFO.contacts.whatsapp}?text=Hello%20Hotel%20Surya%20Pride,%20I%20would%20like%20to%20know%20more%20about%20the%20Restaurant%20Menu%20and%20reserve%20a%20table.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-5 rounded-xl bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 font-semibold text-sm shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-500">
              <Phone className="w-4 h-4 text-[#c5a869]" />
              <span>For immediate table reservations or takeaway inquiries: </span>
              <a href={`tel:${HOTEL_INFO.contacts.primaryRaw}`} className="font-bold text-[#0b1426] hover:underline">
                {HOTEL_INFO.contacts.primary}
              </a>
            </div>
          </div>
        </div>

        {/* 3 Cuisines Detailed Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* North Indian */}
          <div className="rounded-2xl bg-white border border-[#c5a869]/25 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=700&q=80"
                  alt="North Indian Cuisine at Hotel Surya Pride Nanded"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0b1426]/90 text-[#f5e4ba] text-xs font-semibold border border-[#c5a869]/40">
                  Rich Gravies & Tandoor
                </span>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#c5a869]" />
                  <span className="text-xs uppercase font-bold tracking-widest text-[#c5a869]">Cuisine 01</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0b1426]">
                  North Indian
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Creamy butter curries, velvety dal makhani, paneer creations, succulent tandoor kebabs, and oven-fresh garlic and butter naans.
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => onOpenEnquiry('restaurant')}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-[#c5a869]/20 text-[#0b1426] font-semibold text-xs transition-colors"
              >
                Inquire For Dining
              </button>
            </div>
          </div>

          {/* Dum Biryani */}
          <div className="rounded-2xl bg-white border border-[#c5a869]/40 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative">
            <div>
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80"
                  alt="Authentic Dum Biryani at Hotel Surya Pride Nanded"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0b1426]/90 text-[#f5e4ba] text-xs font-semibold border border-[#c5a869]/40">
                  Signature Specialty
                </span>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#c5a869]" />
                  <span className="text-xs uppercase font-bold tracking-widest text-[#c5a869]">Cuisine 02</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0b1426]">
                  Aromatic Biryani
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Slow-cooked dum biryani prepared with long-grain aged basmati rice, hand-pounded whole spices, caramelized onions, and fragrant saffron.
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => onOpenEnquiry('restaurant')}
                className="w-full py-2.5 px-4 rounded-xl bg-[#0b1426] hover:bg-[#c5a869] text-[#f5e4ba] hover:text-[#0b1426] font-semibold text-xs transition-all duration-200"
              >
                Inquire For Dining
              </button>
            </div>
          </div>

          {/* Chinese */}
          <div className="rounded-2xl bg-white border border-[#c5a869]/25 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=700&q=80"
                  alt="Chinese cuisine and wok specialties at Hotel Surya Pride"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0b1426]/90 text-[#f5e4ba] text-xs font-semibold border border-[#c5a869]/40">
                  Wok-Tossed Flavors
                </span>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#c5a869]" />
                  <span className="text-xs uppercase font-bold tracking-widest text-[#c5a869]">Cuisine 03</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0b1426]">
                  Chinese Specialties
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Sizzling chili garlic noodles, crispy Manchurian, Hakka specialties, and aromatic fried rice prepared fast and fresh over high-heat woks.
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => onOpenEnquiry('restaurant')}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-[#c5a869]/20 text-[#0b1426] font-semibold text-xs transition-colors"
              >
                Inquire For Dining
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
