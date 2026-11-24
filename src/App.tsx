import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Rooms } from './components/Rooms'
import { Restaurant } from './components/Restaurant'
import { Bar } from './components/Bar'
import { Banquet } from './components/Banquet'
import { Gallery } from './components/Gallery'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { FloatingContact } from './components/FloatingContact'
import { EnquiryModal } from './components/EnquiryModal'
import type { EnquiryType } from './types'

export function App() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false)
  const [modalEnquiryType, setModalEnquiryType] = useState<EnquiryType>('general')

  const handleOpenEnquiry = (type: EnquiryType = 'general') => {
    setModalEnquiryType(type)
    setIsEnquiryModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1e293b] selection:bg-[#c5a869]/30 selection:text-[#0b1426]">
      {/* Sticky Header with Grand Opening Banner */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* Main Sections */}
      <main>
        {/* Full-width Impressive Hero */}
        <Hero onOpenEnquiry={handleOpenEnquiry} />

        {/* About Section */}
        <About />

        {/* Accommodation / Furnished Rooms */}
        <Rooms onOpenEnquiry={handleOpenEnquiry} />

        {/* Multi-Cuisine Family Restaurant */}
        <Restaurant onOpenEnquiry={handleOpenEnquiry} />

        {/* Sophisticated Bar & Lounge */}
        <Bar onOpenEnquiry={handleOpenEnquiry} />

        {/* Banquet Hall For Celebrations & Functions */}
        <Banquet onOpenEnquiry={handleOpenEnquiry} />

        {/* Curated Interactive Gallery with Lightbox */}
        <Gallery />

        {/* Location & Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingContact />

      {/* Reusable Universal Enquiry Modal */}
      <EnquiryModal
        key={modalEnquiryType}
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        initialType={modalEnquiryType}
      />
    </div>
  )
}

export default App
