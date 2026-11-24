import React from 'react'
import { MapPin, Phone, MessageSquare, Calendar, ArrowUp } from 'lucide-react'
import { HOTEL_INFO } from '../data/hotelData'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })
    }
  }

  return (
    <footer className="bg-[#070d18] text-white border-t border-[#c5a869]/25 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#c5a869] to-[#8f7131] p-0.5 flex items-center justify-center shadow-lg">
                <div className="w-full h-full bg-[#0b1426] rounded-[7px] flex items-center justify-center">
                  <span className="font-serif font-bold text-lg text-[#f5e4ba]">SP</span>
                </div>
              </div>
              <div>
                <span className="block font-serif text-xl font-bold tracking-tight text-[#f5e4ba]">
                  HOTEL SURYA PRIDE
                </span>
                <span className="block text-[10px] tracking-[0.2em] font-medium text-[#c5a869] uppercase">
                  Nanded • Maharashtra
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Hotel Surya Pride brings together comfort, hospitality, and exceptional dining in one destination at Surya Heights, opposite Collector Office, Station Road, Vazirabad, Nanded.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#f5e4ba]">
              <Calendar className="w-4 h-4 text-[#c5a869]" />
              <span>Grand Opening: {HOTEL_INFO.openingDate}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-base font-bold text-[#f5e4ba] tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="hover:text-[#c5a869] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-[#c5a869] transition-colors">
                  About the Hotel
                </a>
              </li>
              <li>
                <a href="#rooms" onClick={(e) => handleLinkClick(e, '#rooms')} className="hover:text-[#c5a869] transition-colors">
                  Accommodation
                </a>
              </li>
              <li>
                <a href="#restaurant" onClick={(e) => handleLinkClick(e, '#restaurant')} className="hover:text-[#c5a869] transition-colors">
                  Family Restaurant
                </a>
              </li>
              <li>
                <a href="#bar" onClick={(e) => handleLinkClick(e, '#bar')} className="hover:text-[#c5a869] transition-colors">
                  Bar & Lounge
                </a>
              </li>
              <li>
                <a href="#banquet" onClick={(e) => handleLinkClick(e, '#banquet')} className="hover:text-[#c5a869] transition-colors">
                  Banquet Hall
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleLinkClick(e, '#gallery')} className="hover:text-[#c5a869] transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="hover:text-[#c5a869] transition-colors">
                  Location & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Hotel Facilities */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-[#f5e4ba] tracking-wide">
              Property Facilities
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a869]" />
                Fully Furnished & Comfortable Rooms
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a869]" />
                Multi-Cuisine Family Restaurant
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a869]" />
                North Indian, Dum Biryani & Chinese
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a869]" />
                Sophisticated Bar & Lounge
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a869]" />
                Banquet Hall for Celebrations & Functions
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a869]" />
                Central Location Opposite Collector Office
              </li>
            </ul>
          </div>

          {/* Verified Contact & Address */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-[#f5e4ba] tracking-wide">
              Hotel Surya Pride
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c5a869] shrink-0 mt-0.5" />
                <span>
                  Surya Heights, House No. 3-1-34,
                  Opposite Collector Office, Station Road,
                  Vazirabad, Nanded, Maharashtra, India.
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#c5a869] shrink-0" />
                <a href={`tel:${HOTEL_INFO.contacts.primaryRaw}`} className="hover:text-[#f5e4ba] transition-colors">
                  {HOTEL_INFO.contacts.primary}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#c5a869] shrink-0" />
                <a href={`tel:${HOTEL_INFO.contacts.secondaryRaw}`} className="hover:text-[#f5e4ba] transition-colors">
                  {HOTEL_INFO.contacts.secondary}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={`https://wa.me/${HOTEL_INFO.contacts.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:underline"
                >
                  WhatsApp: +91 96076 66882
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Hotel Surya Pride. All Rights Reserved. Located at Surya Heights, Nanded, Maharashtra.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-[#f5e4ba] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}

