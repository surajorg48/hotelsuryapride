export type EnquiryType = 'room' | 'restaurant' | 'banquet' | 'bar' | 'general'

export interface EnquiryFormData {
  fullName: string
  phoneNumber: string
  email?: string
  enquiryType: EnquiryType
  date?: string
  guests?: string
  message: string
}

export interface GalleryItem {
  id: string
  title: string
  category: 'exterior' | 'rooms' | 'restaurant' | 'food' | 'bar' | 'banquet'
  imageUrl: string
  altText: string
  caption: string
}

export interface FacilityItem {
  title: string
  subtitle: string
  description: string
  iconName: string
  href: string
  image: string
}

