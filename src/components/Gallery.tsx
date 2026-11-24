import React, { useState } from 'react'
import { Sparkles, X, ChevronLeft, ChevronRight, Eye, Info } from 'lucide-react'
import { GALLERY_ITEMS } from '../data/hotelData'
import type { GalleryItem } from '../types'

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'exterior', label: 'Hotel Exterior' },
    { id: 'rooms', label: 'Rooms' },
    { id: 'restaurant', label: 'Restaurant' },
    { id: 'food', label: 'Food & Cuisine' },
    { id: 'bar', label: 'Bar' },
    { id: 'banquet', label: 'Banquet Hall' },
  ]

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory)

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!selectedImage) return
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage.id)
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length
    setSelectedImage(filteredItems[prevIndex])
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!selectedImage) return
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage.id)
    const nextIndex = (currentIndex + 1) % filteredItems.length
    setSelectedImage(filteredItems[nextIndex])
  }

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#0b1426] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a869]/15 border border-[#c5a869]/30 text-xs font-bold uppercase tracking-widest text-[#f5e4ba]">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a869]" />
            Visual Experience
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Hotel Surya Pride Gallery
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Take a visual tour across our furnished rooms, vibrant dining spaces, relaxing bar lounge, and grand celebration banquet hall.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#c5a869] to-[#9e7f3c] text-[#0b1426] shadow-lg shadow-[#c5a869]/20'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden bg-[#070d18] border border-white/10 hover:border-[#c5a869]/50 shadow-xl cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-64 sm:h-72 w-full overflow-hidden relative">
                <img
                  src={item.imageUrl}
                  alt={item.altText}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070d18] via-transparent to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                {/* Hover Eye Badge */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                  <div className="p-3 rounded-full bg-[#c5a869] text-[#0b1426] shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#c5a869] block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#f5e4ba] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Disclaimer Note */}
        <div className="mt-12 p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-xs text-slate-400 max-w-2xl mx-auto text-center sm:text-left">
          <Info className="w-4 h-4 text-[#c5a869] shrink-0" />
          <span>
            Curated hospitality visual showcase. Actual hotel photographic captures will be refreshed upon the grand opening and ongoing property updates.
          </span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-[#c5a869] hover:text-[#0b1426] text-white transition-all"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-[#c5a869] hover:text-[#0b1426] text-white transition-all"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.imageUrl}
              alt={selectedImage.altText}
              className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain shadow-2xl border border-white/10"
            />
            <div className="mt-4 text-center space-y-1">
              <span className="text-xs uppercase font-bold tracking-widest text-[#c5a869]">
                {selectedImage.category}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                {selectedImage.title}
              </h3>
              <p className="text-sm text-slate-300">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
