import type { GalleryItem } from '../types'

export const HOTEL_INFO = {
  name: 'Hotel Surya Pride',
  tagline: 'Experience Comfort. Discover Elegance.',
  subheading:
    'Welcome to Hotel Surya Pride, where comfortable stays, delightful dining, and memorable celebrations come together.',
  address: {
    line1: 'Surya Heights, House No. 3-1-34',
    line2: 'Opposite Collector Office, Station Road',
    area: 'Vazirabad',
    city: 'Nanded',
    state: 'Maharashtra',
    country: 'India',
    pincode: '431601',
    full: 'Surya Heights, House No. 3-1-34, Opposite Collector Office, Station Road, Vazirabad, Nanded, Maharashtra, India',
  },
  contacts: {
    primary: '+91 96076 66882',
    primaryRaw: '+919607666882',
    secondary: '+91 96076 66880',
    secondaryRaw: '+919607666880',
    whatsapp: '919607666882',
  },
  openingDate: '23 August 2026, Sunday, at 10:00 AM',
  googleMapsUrl: 'https://maps.app.goo.gl/mQykyhLFZoyXtqD7A',
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.498425796245!2d77.31281137599661!3d19.155899982065847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d7f6c6511b8b%3A0x6b45d0f622e92c6c!2sSurya%20Heights!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  restaurant: {
    heading: 'A Delightful Dining Experience',
    description:
      'Indulge in a memorable culinary journey at our warm and welcoming family restaurant. Designed for family gatherings, friendly meetups, and hearty meals in the heart of Nanded.',
    costForTwo: '₹800 for two people',
    costDisclaimer: 'Indicative listing price; actual menu item prices may vary.',
    cuisines: [
      {
        name: 'North Indian',
        description: 'Rich slow-cooked curries, tandoori specialties, and freshly baked artisanal naans and rotis.',
        highlight: 'Signature Gravies & Tandoor',
      },
      {
        name: 'Biryani Specialties',
        description: 'Long-grain aged basmati rice infused with fragrant whole spices, saffron, and tender marinated cuts.',
        highlight: 'Traditional Dum Flavors',
      },
      {
        name: 'Chinese Delicacies',
        description: 'Flavorsome wok-tossed noodles, crispy fried starters, Manchurian specialties, and savory fried rice.',
        highlight: 'Wok-Tossed Delights',
      },
    ],
  },
  rooms: {
    heading: 'Furnished & Comfortable Accommodation',
    description:
      'Step into thoughtfully designed rooms crafted to provide restful peace and modern comfort after a long journey or busy day in Nanded.',
    disclaimer:
      'Room categories, tariff packages, and detailed amenities are finalized directly with our front desk. Please contact us for current reservations and custom stay options.',
  },
  bar: {
    heading: 'Unwind and Relax',
    tagline: 'Sophisticated Atmosphere & Refreshing Moments',
    description:
      'After an eventful day in Nanded or a celebratory gathering, step into our bar lounge designed for relaxed conversations, tasteful ambiance, and soothing music.',
  },
  banquet: {
    heading: 'Celebrate Your Special Moments',
    tagline: 'A Majestic Venue for Everlasting Memories',
    description:
      'From family celebrations, milestone birthdays, and engagement gatherings to corporate conferences and banquets, our venue offers an elevated setting in Vazirabad.',
    disclaimer:
      'Please speak directly with our events team for custom banquet seating, catering selections, decor coordination, and function dates.',
  },
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'ext-1',
    title: 'Grand Exterior & Entrance',
    category: 'exterior',
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    altText: 'Hotel Surya Pride exterior façade and architectural view in Nanded',
    caption: 'Modern hospitality destination at Surya Heights, Station Road.',
  },
  {
    id: 'ext-2',
    title: 'Welcoming Grand Lobby',
    category: 'exterior',
    imageUrl: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
    altText: 'Warm, elegant reception and foyer lounge',
    caption: 'Warm reception and dedicated guest assistance.',
  },
  {
    id: 'room-1',
    title: 'Comfortable Furnished Room',
    category: 'rooms',
    imageUrl: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
    altText: 'Spacious air-conditioned hotel room with plush bedding',
    caption: 'Clean, peaceful ambiance for solo and family travelers.',
  },
  {
    id: 'room-2',
    title: 'Premium Executive Stay',
    category: 'rooms',
    imageUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    altText: 'Well-appointed comfortable bedroom with modern furnishings',
    caption: 'Elegantly furnished interiors with ambient lighting.',
  },
  {
    id: 'room-3',
    title: 'Spacious Suite Setting',
    category: 'rooms',
    imageUrl: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
    altText: 'Quiet and comfortable hotel suite arrangement',
    caption: 'Thoughtful amenities for business and leisure guests.',
  },
  {
    id: 'rest-1',
    title: 'Family Restaurant Dining Area',
    category: 'restaurant',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    altText: 'Atmospheric dining hall with warm lighting and comfortable seating',
    caption: 'Welcoming dining ambiance for families and groups.',
  },
  {
    id: 'food-1',
    title: 'Aromatic Dum Biryani',
    category: 'food',
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80',
    altText: 'Authentic Indian Biryani served with fresh spices and herbs',
    caption: 'Royal, slow-cooked basmati biryani with delicate aromas.',
  },
  {
    id: 'food-2',
    title: 'Rich North Indian Specialties',
    category: 'food',
    imageUrl: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80',
    altText: 'North Indian paneer butter masala, rich curries and fresh naan',
    caption: 'Hearty gravies, tandoori bread, and authentic North Indian dishes.',
  },
  {
    id: 'food-3',
    title: 'Crispy & Wok-Tossed Chinese',
    category: 'food',
    imageUrl: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=1200&q=80',
    altText: 'Wok tossed noodles and Chinese sizzlers',
    caption: 'Freshly prepared Chinese starters and fried rice.',
  },
  {
    id: 'bar-1',
    title: 'Sophisticated Bar Lounge',
    category: 'bar',
    imageUrl: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1200&q=80',
    altText: 'Intimate ambient bar lounge with polished wooden finish',
    caption: 'A serene setting to unwind, converse, and relax.',
  },
  {
    id: 'bar-2',
    title: 'Bar Counter Atmosphere',
    category: 'bar',
    imageUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80',
    altText: 'Warmly lit bar counter with premium seating',
    caption: 'Cozy and tasteful evening ambiance.',
  },
  {
    id: 'banquet-1',
    title: 'Celebration Banquet Hall',
    category: 'banquet',
    imageUrl: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80',
    altText: 'Decorated banquet hall prepared for family celebration and event',
    caption: 'Spacious hall for weddings, receptions, and birthday milestones.',
  },
  {
    id: 'banquet-2',
    title: 'Corporate & Event Setting',
    category: 'banquet',
    imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    altText: 'Elegant banquet seating arrangement for formal functions',
    caption: 'Versatile configurations for social and professional gatherings.',
  },
]
