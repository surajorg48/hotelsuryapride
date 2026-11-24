import React from 'react'
import { Phone, MessageSquare } from 'lucide-react'
import { HOTEL_INFO } from '../data/hotelData'

export const FloatingContact: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* WhatsApp Button with Glow Pulse */}
      <a
        href={`https://wa.me/${HOTEL_INFO.contacts.whatsapp}?text=Hello%20Hotel%20Surya%20Pride,%20I%20would%20like%20to%20make%20an%20enquiry.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Message"
        className="group flex items-center gap-2 p-3.5 sm:px-4 sm:py-3 rounded-full bg-[#25D366] text-[#070d18] font-bold text-xs uppercase tracking-wider shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 relative"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping duration-1000 -z-10" />
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline">WhatsApp Enquiry</span>
      </a>

      {/* Call Button */}
      <a
        href={`tel:${HOTEL_INFO.contacts.primaryRaw}`}
        aria-label="Call Hotel Surya Pride"
        className="flex items-center gap-2 p-3.5 sm:px-4 sm:py-3 rounded-full bg-[#0b1426] text-[#f5e4ba] border border-[#c5a869]/50 font-bold text-xs uppercase tracking-wider shadow-2xl hover:bg-[#16233b] hover:scale-105 active:scale-95 transition-all duration-300"
      >
        <Phone className="w-5 h-5 text-[#c5a869]" />
        <span className="hidden sm:inline">Call Us</span>
      </a>
    </div>
  )
}

