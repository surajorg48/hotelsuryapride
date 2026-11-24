import React, { useState } from 'react'
import { Phone, Sparkles, BedDouble, Utensils, GlassWater, PartyPopper, ArrowRight, Calendar, UserCheck } from 'lucide-react'
import { HOTEL_INFO } from '../data/hotelData'
import type { EnquiryType } from '../types'

interface HeroProps {
  onOpenEnquiry: (type?: EnquiryType) => void
}

const defaultTodayDate = '2026-08-23'

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  const [selectedType, setSelectedType] = useState<EnquiryType>('room')
  const [guestCount, setGuestCount] = useState('2 Guests')

  const handleQuickEnquire = (e: React.FormEvent) => {
    e.preventDefault()
    onOpenEnquiry(selectedType)
  }

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.querySelector(id)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="home" className="relative min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-[#070d18] text-white">
      {/* Background Imagery with Multi-Layered Cinematic Dark & Gold Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85"
          alt="Hotel Surya Pride Grand Exterior in Nanded"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
        />
        {/* Layer 1: Deep Navy Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070d18] via-[#0b1426]/85 to-[#070d18]/70" />
        {/* Layer 2: Subtle Gold Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_#070d18_100%)] opacity-80" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-12 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          {/* Location & Prestige Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a869]/15 border border-[#c5a869]/40 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#dfc17b]" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#f5e4ba]">
              Surya Heights • Opposite Collector Office, Vazirabad, Nanded
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-2">
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              Experience Comfort.{' '}
              <span className="text-gold-gradient block mt-1">Discover Elegance.</span>
            </h1>
          </div>

          {/* Subheading */}
          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
            {HOTEL_INFO.subheading}
          </p>

          {/* Key Facility Highlights Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 pt-2">
            <a
              href="#rooms"
              onClick={(e) => scrollToSection(e, '#rooms')}
              className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl bg-white/5 hover:bg-[#c5a869]/15 border border-white/10 hover:border-[#c5a869]/40 transition-all text-xs sm:text-sm group"
            >
              <BedDouble className="w-4 h-4 text-[#c5a869] group-hover:scale-110 transition-transform" />
              <span className="font-medium text-slate-200 group-hover:text-[#f5e4ba]">Furnished Rooms</span>
            </a>
            <a
              href="#restaurant"
              onClick={(e) => scrollToSection(e, '#restaurant')}
              className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl bg-white/5 hover:bg-[#c5a869]/15 border border-white/10 hover:border-[#c5a869]/40 transition-all text-xs sm:text-sm group"
            >
              <Utensils className="w-4 h-4 text-[#c5a869] group-hover:scale-110 transition-transform" />
              <span className="font-medium text-slate-200 group-hover:text-[#f5e4ba]">Family Dining</span>
            </a>
            <a
              href="#bar"
              onClick={(e) => scrollToSection(e, '#bar')}
              className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl bg-white/5 hover:bg-[#c5a869]/15 border border-white/10 hover:border-[#c5a869]/40 transition-all text-xs sm:text-sm group"
            >
              <GlassWater className="w-4 h-4 text-[#c5a869] group-hover:scale-110 transition-transform" />
              <span className="font-medium text-slate-200 group-hover:text-[#f5e4ba]">Bar & Lounge</span>
            </a>
            <a
              href="#banquet"
              onClick={(e) => scrollToSection(e, '#banquet')}
              className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl bg-white/5 hover:bg-[#c5a869]/15 border border-white/10 hover:border-[#c5a869]/40 transition-all text-xs sm:text-sm group"
            >
              <PartyPopper className="w-4 h-4 text-[#c5a869] group-hover:scale-110 transition-transform" />
              <span className="font-medium text-slate-200 group-hover:text-[#f5e4ba]">Banquet Hall</span>
            </a>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4">
            <button
              onClick={() => onOpenEnquiry('room')}
              className="px-6 sm:px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#c5a869] via-[#dfc17b] to-[#b39046] hover:from-[#d5ba7b] hover:to-[#c5a869] text-[#0b1426] font-bold text-sm sm:text-base tracking-wide shadow-xl hover:shadow-[#c5a869]/20 transition-all transform active:scale-95 flex items-center gap-2"
            >
              <span>Room Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#about"
              onClick={(e) => scrollToSection(e, '#about')}
              className="px-6 sm:px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm sm:text-base backdrop-blur-md transition-all active:scale-95"
            >
              Explore Our Facilities
            </a>

            <a
              href={`tel:${HOTEL_INFO.contacts.primaryRaw}`}
              className="px-5 sm:px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-900 text-[#f5e4ba] border border-[#c5a869]/40 font-semibold text-sm sm:text-base flex items-center gap-2 transition-all active:scale-95"
            >
              <Phone className="w-4 h-4 text-[#c5a869]" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>

      {/* Docked Fast-Enquiry / Availability Bar */}
      <div className="relative z-10 w-full bg-[#0b1426]/90 border-t border-[#c5a869]/30 backdrop-blur-lg py-5 px-4 sm:px-6 lg:px-8 shadow-2xl">
        <div className="max-w-7xl mx-auto">
          <form onSubmit={handleQuickEnquire} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-end">
            <div>
              <label className="block text-xs font-semibold text-[#f5e4ba] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#c5a869]" />
                Enquiry Category
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value as EnquiryType)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#070d18] border border-white/20 text-white text-sm focus:outline-none focus:border-[#c5a869]"
              >
                <option value="room">Furnished Rooms Stay</option>
                <option value="restaurant">Family Restaurant Dining</option>
                <option value="banquet">Banquet Hall Function</option>
                <option value="bar">Bar & Lounge Visit</option>
                <option value="general">General Hotel Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#f5e4ba] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#c5a869]" />
                Preferred Date
              </label>
              <input
                type="date"
                defaultValue={defaultTodayDate}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#070d18] border border-white/20 text-white text-sm focus:outline-none focus:border-[#c5a869]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#f5e4ba] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-[#c5a869]" />
                Guests / Group Size
              </label>
              <select
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#070d18] border border-white/20 text-white text-sm focus:outline-none focus:border-[#c5a869]"
              >
                <option value="1 Guest">1 Guest</option>
                <option value="2 Guests">2 Guests (Couple / Pair)</option>
                <option value="Family (3-5 Guests)">Family (3–5 Guests)</option>
                <option value="Small Group (6-15 Guests)">Small Group (6–15 Guests)</option>
                <option value="Banquet Event (20+ Guests)">Banquet Gathering (20+ Guests)</option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-[#c5a869] to-[#9e7f3c] hover:from-[#d5ba7b] hover:to-[#c5a869] text-[#0b1426] font-bold text-sm tracking-wide shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Check & Inquire</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
