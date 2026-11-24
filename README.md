# Hotel Surya Pride – Official Website

A modern, responsive, luxury hospitality website for **Hotel Surya Pride**, located at Surya Heights, opposite Collector Office, Station Road, Vazirabad, Nanded, Maharashtra, India.

Designed with a high-end luxury hospitality aesthetic (Deep Navy, Champagne Gold, Warm Ivory, and elegant typography), tailored to create a strong first impression and drive direct room bookings, restaurant visits, banquet enquiries, and bar visits.

---

## 🏨 1. Business Information

- **Hotel Name:** Hotel Surya Pride
- **Address:** Surya Heights, House No. 3-1-34, Opposite Collector Office, Station Road, Vazirabad, Nanded, Maharashtra, India – 431601
- **Contact & WhatsApp Number:** `+91 96076 66882` / `+91 96076 66880`
- **Grand Opening:** 23 August 2026, Sunday, at 10:00 AM
- **Google Maps Location:** [https://maps.app.goo.gl/mQykyhLFZoyXtqD7A](https://maps.app.goo.gl/mQykyhLFZoyXtqD7A)
- **Key Facilities:**
  - Fully furnished & comfortable rooms
  - Multi-cuisine family restaurant (North Indian, Dum Biryani, Chinese)
  - Indicative restaurant cost: ~₹800 for two people (indicative listing price; actual menu prices may vary)
  - Sophisticated bar & lounge
  - Grand banquet hall for celebrations and functions

---

## 🛠 2. Technology Stack & Architecture

- **Core Framework:** React 19 + TypeScript
- **Bundler & Tooling:** Vite 8 (instant HMR & ultra-fast builds)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`) with custom luxury color tokens & gradients
- **Icons:** Lucide React (`lucide-react`)
- **Typography:** Google Fonts (`Cormorant Garamond` serif for editorial luxury display headings + `Plus Jakarta Sans` for clean, readable body typography)
- **Code Quality:** Oxlint (zero linting errors/warnings) + TypeScript Strict Type-Checking

---

## 🌟 3. Key Website Features & Sections

1. **Sticky Header & Grand Opening Banner:**
   - Real-time countdown / grand opening announcement for 23 August 2026 at 10:00 AM.
   - SP Monogram crest logo.
   - Smooth-scrolling anchor navigation to all sections.
   - Instant Click-to-Call and WhatsApp pills.
   - Mobile-responsive navigation drawer.

2. **Cinematic Hero Section:**
   - Full viewport height (`min-h-[100dvh]`) to prevent iOS address-bar jumping.
   - Headline: *"Experience Comfort. Discover Elegance."*
   - Subheading: *"Welcome to Hotel Surya Pride, where comfortable stays, delightful dining, and memorable celebrations come together."*
   - Direct CTA buttons: Room Enquiry, Explore Facilities, and Click-to-Call.
   - Fast-inquiry availability strip docked at the base of the hero.

3. **About Section:**
   - Split layout with hotel visual composition and gold framing.
   - Exact verified narrative highlighting the hotel's location opposite the Collector Office in Vazirabad, Nanded.
   - 4-pillar overview: Furnished Rooms, Family Restaurant, Bar & Lounge, Banquet Hall.

4. **Accommodation / Furnished Rooms:**
   - Highlights furnished and comfortable living for solo, corporate, and family travelers.
   - Room inquiry triggers and transparent disclaimer indicating that exact tariff packages and custom stay options are finalized directly at the desk.

5. **Family Restaurant ("A Delightful Dining Experience"):**
   - Showcases the 3 signature cuisines: North Indian gravies & tandoor, authentic aromatic Dum Biryani, and wok-tossed Chinese favorites.
   - Highlights the indicative listing price of ₹800 for two people (with disclaimer: *"Prices may vary"*).
   - WhatsApp digital menu request integration.

6. **Bar Section ("Unwind and Relax"):**
   - Sophisticated interior imagery with ambient warm lighting.
   - Tasteful, professional messaging without unverified claims.

7. **Banquet Hall ("Celebrate Your Special Moments"):**
   - Positions the banquet hall for milestone celebrations, family functions, engagements, receptions, and corporate meetings in central Vazirabad.
   - Event inquiry trigger and venue desk contact button.

8. **Interactive Filterable Photo Gallery:**
   - Category filtering: All Photos, Hotel Exterior, Rooms, Restaurant, Food & Cuisine, Bar, Banquet Hall.
   - Lightbox modal with next/previous controls, keyboard support, and image zoom preview.
   - Transparent disclaimer noting that curated hospitality photography will be updated with actual on-site captures upon grand opening.

9. **Location & Functional Contact Experience:**
   - Complete physical address opposite the Collector Office on Station Road.
   - Embedded interactive Google Map matching the verified location.
   - Direct click-to-call buttons for `+91 96076 66882` and `+91 96076 66880`.
   - WhatsApp direct chat link with pre-filled message generator.
   - Validated enquiry form with local persistence (`localStorage`) to guarantee zero silent inquiry loss.
   - Clear disclaimer that submissions do not constitute automatic guaranteed booking.

10. **Floating Quick-Action Actions:**
    - Floating pulsating WhatsApp button and Click-to-call button for mobile and desktop visitors.

11. **SEO & Structured Data (JSON-LD):**
    - `Hotel` and `Restaurant` schema markup for Google Rich Snippets in Nanded.
    - OpenGraph and Twitter card metadata for sharing.
    - `sitemap.xml` and `robots.txt` ready for search engine indexing.

---

## 🚀 4. Setup and Local Development Instructions

### Prerequisites
- Node.js version 18 or higher (Node 20+ recommended)
- npm version 9 or higher

### Steps to Run Locally

1. **Open terminal in the project directory:**
   ```bash
   cd "f:\suraj projects\hotelsurya pride website"
   ```

2. **Install dependencies (if not already installed):**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Linting check:**
   ```bash
   npm run lint
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```
   The production-ready static assets will be generated in the `dist/` directory.

6. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

---

## 📋 5. Hotel Owner Asset Checklist (To Provide Before Launch)

When actual property assets become available, replace the placeholders with:

1. **Official Vector Logo:** Vector SVG or high-res PNG of the official Hotel Surya Pride logo (if available).
2. **Actual Property Photographs:**
   - Hotel building exterior and entrance facade at Surya Heights.
   - Real room photography (Standard, Deluxe, Executive, and Suite options).
   - Restaurant interior seating and food presentation photos.
   - Real bar counter and lounge seating photos.
   - Banquet hall floor layouts and stage setups.
3. **Confirmed Room Tariffs & Check-in Policies:** Room categories, fixed seasonal tariffs, check-in/check-out timings, and tax structure.
4. **Final Restaurant Menu & Pricing:** Complete dish menu with confirmed pricing.
5. **Banquet Hall Capacity & Packages:** Exact seating capacity (floating/theater/round table) and catering packages.
6. **Social Media Accounts:** Official Instagram, Facebook, and YouTube links (if created).
