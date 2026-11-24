import React from 'react'
import { MapPin, Sparkles, BedDouble, Utensils, GlassWater, PartyPopper, CheckCircle2 } from 'lucide-react'

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#faf8f5] text-[#1e293b] relative overflow-hidden">
      {/* Decorative Gold Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a869]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0b1426]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition with Gold Framing & Floating Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Luxury Border Frame */}
              <div className="absolute -inset-3 rounded-2xl border border-[#c5a869]/40 transform -rotate-1 hidden sm:block" />
              
              {/* Main Image */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl bg-[#0b1426]">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80"
                  alt="Hotel Surya Pride Hospitality Experience in Nanded"
                  className="w-full h-[420px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070d18]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs uppercase tracking-widest text-[#f5e4ba] font-semibold">Surya Heights</p>
                  <p className="font-serif text-lg font-bold">A Benchmark of Comfort in Nanded</p>
                </div>
              </div>

              {/* Floating Address Badge */}
              <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-[#0b1426] text-white p-4 rounded-xl border border-[#c5a869]/40 shadow-xl max-w-[260px]">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#c5a869]/20 text-[#f5e4ba]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[#c5a869] font-bold">Prime Location</p>
                    <p className="text-xs text-slate-300 font-medium mt-0.5 leading-snug">
                      Opposite Collector Office, Station Road, Vazirabad
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a869]/15 border border-[#c5a869]/30 text-xs font-bold uppercase tracking-widest text-[#9e7f3c]">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a869]" />
              About Hotel Surya Pride
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b1426] tracking-tight leading-tight">
              Hospitality, Comfort & Exceptional Dining Under One Roof
            </h2>

            {/* Exact Required Copy */}
            <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
              Hotel Surya Pride brings together comfort, hospitality, and exceptional dining in one destination. Located at Surya Heights, Vazirabad, Nanded, the hotel offers furnished accommodation, a family restaurant, a bar, and a banquet hall for special occasions.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Whether you are arriving in Nanded for government business near the Collector Office, seeking a relaxed family dinner, hosting an intimate family milestone in our banquet hall, or looking for an evening unwind, our dedicated team is committed to making every visit pleasant and memorable.
            </p>

            {/* 4 Pillars Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white border border-[#c5a869]/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#0b1426] text-[#f5e4ba]">
                    <BedDouble className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#0b1426]">Furnished Rooms</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Air-conditioned, restful accommodation</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#c5a869]/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#0b1426] text-[#f5e4ba]">
                    <Utensils className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#0b1426]">Family Restaurant</h3>
                    <p className="text-xs text-slate-500 mt-0.5">North Indian, Dum Biryani & Chinese</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#c5a869]/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#0b1426] text-[#f5e4ba]">
                    <GlassWater className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#0b1426]">Bar & Lounge</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Refined atmosphere to unwind</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#c5a869]/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#0b1426] text-[#f5e4ba]">
                    <PartyPopper className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#0b1426]">Banquet Hall</h3>
                    <p className="text-xs text-slate-500 mt-0.5">For celebrations, gatherings & events</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Advantages */}
            <div className="pt-2 flex flex-wrap gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-700 font-medium">
              <span className="flex items-center gap-1.5 text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#c5a869]" /> Opposite Collector Office
              </span>
              <span className="flex items-center gap-1.5 text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#c5a869]" /> Station Road Connectivity
              </span>
              <span className="flex items-center gap-1.5 text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#c5a869]" /> Heart of Vazirabad
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
