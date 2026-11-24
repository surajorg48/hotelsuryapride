import React, { useState, useEffect } from 'react'
import { Phone, MessageSquare, Menu, X, Calendar, MapPin, ChevronRight } from 'lucide-react'
import { HOTEL_INFO } from '../data/hotelData'

interface NavbarProps {
  onOpenEnquiry: (type?: 'room' | 'restaurant' | 'banquet' | 'bar' | 'general') => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Rooms', href: '#rooms' },
    { label: 'Restaurant', href: '#restaurant' },
    { label: 'Bar', href: '#bar' },
    { label: 'Banquet', href: '#banquet' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location & Contact', href: '#contact' },
  ]

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
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
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#070d18] border-b border-[#c5a869]/20 text-xs text-[#f5e4ba] py-2 px-4 transition-all">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider uppercase bg-[#c5a869]/20 text-[#f5e4ba] border border-[#c5a869]/40">
              Grand Opening
            </span>
            <span className="flex items-center gap-1.5 font-medium text-[#f5e4ba]/90 text-[11px] sm:text-xs">
              <Calendar className="w-3.5 h-3.5 text-[#c5a869]" />
              {HOTEL_INFO.openingDate}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs text-[#f5e4ba]/80">
            <span className="hidden md:inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#c5a869]" />
              Opposite Collector Office, Station Road, Vazirabad, Nanded
            </span>
            <a
              href={`tel:${HOTEL_INFO.contacts.primaryRaw}`}
              className="flex items-center gap-1 text-[#f5e4ba] hover:text-white transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a869]" />
              {HOTEL_INFO.contacts.primary}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0b1426]/95 backdrop-blur-md shadow-xl py-3 border-b border-[#c5a869]/20'
            : 'bg-[#0b1426] py-4 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Branding */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 group text-left"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-[#c5a869] to-[#8f7131] p-0.5 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#0b1426] rounded-[7px] flex items-center justify-center">
                <span className="font-serif font-bold text-lg sm:text-xl text-[#f5e4ba] tracking-wider">
                  SP
                </span>
              </div>
            </div>
            <div>
              <span className="block font-serif text-lg sm:text-2xl font-bold tracking-tight text-[#f5e4ba] group-hover:text-white transition-colors">
                HOTEL SURYA PRIDE
              </span>
              <span className="block text-[10px] tracking-[0.2em] font-medium text-[#c5a869] uppercase">
                Vazirabad • Nanded
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-1.5 text-xs xl:text-sm font-medium text-slate-200 hover:text-[#f5e4ba] hover:bg-white/5 rounded-md transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${HOTEL_INFO.contacts.whatsapp}?text=Hello%20Hotel%20Surya%20Pride,%20I%20would%20like%20to%20make%20an%20enquiry.`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Hotel Surya Pride"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/30 text-xs font-semibold transition-all duration-200"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenEnquiry('general')}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#c5a869] via-[#dfc17b] to-[#b39046] hover:from-[#d5ba7b] hover:to-[#c5a869] text-[#0b1426] font-semibold text-xs tracking-wide shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
            >
              Enquire Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#070d18] border-b border-[#c5a869]/20 px-4 pt-4 pb-6 space-y-3 animate-in slide-in-from-top duration-300">
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${HOTEL_INFO.contacts.primaryRaw}`}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#c5a869]/15 text-[#f5e4ba] border border-[#c5a869]/30 text-xs font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-[#c5a869]" />
                <span>Call Now</span>
              </a>
              <a
                href={`https://wa.me/${HOTEL_INFO.contacts.whatsapp}?text=Hello%20Hotel%20Surya%20Pride,%20I%20would%20like%20to%20make%20an%20enquiry.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30 text-xs font-semibold"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>

            <nav className="flex flex-col space-y-1 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-slate-200 hover:text-[#f5e4ba] hover:bg-white/5 rounded-lg transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
            </nav>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false)
                onOpenEnquiry('general')
              }}
              className="w-full mt-3 py-3 rounded-lg bg-gradient-to-r from-[#c5a869] to-[#9e7f3c] text-[#0b1426] font-bold text-sm tracking-wide shadow-md"
            >
              Make an Enquiry
            </button>
          </div>
        )}
      </header>
    </>
  )
}

