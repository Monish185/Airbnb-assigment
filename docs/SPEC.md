# Reference Specification (docs/SPEC.md)

**Target Reference:** [https://airbnbproj-iota.vercel.app/](https://airbnbproj-iota.vercel.app/)  
**Baseline Desktop Viewport:** 1440x900 (Secondary: 1920x1080)  
**Methodology:** Clean-room browser reconnaissance, automated geometry and computed style extraction without source copying.

---

## 1. Global Design Tokens & Typography

### Typography System
- **Font Stack:**
  - Primary: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif` (matching Airbnb Cereal rendering).
  - Web font fallback: `Inter` or `Plus Jakarta Sans`.
- **Type Hierarchy:**
  - **Listing Title (H1):** `font-size: 26px; line-height: 30px; font-weight: 600; color: #222222;`
  - **Section Headings (H2):** `font-size: 22px; line-height: 26px; font-weight: 600; color: #222222;`
  - **Subheadings / Host Title (H3):** `font-size: 16px; line-height: 20px; font-weight: 600; color: #222222;`
  - **Highlight Titles (H4):** `font-size: 16px; line-height: 20px; font-weight: 600; color: #222222;`
  - **Body Text:** `font-size: 16px; line-height: 24px; font-weight: 400; color: #222222;`
  - **Secondary / Subtitle Text:** `font-size: 14px; line-height: 18px; font-weight: 400; color: #717171;`
  - **Small / Caption Text:** `font-size: 12px; line-height: 16px; font-weight: 400; color: #717171;`
  - **Pricing Headline:** `font-size: 22px; line-height: 26px; font-weight: 600; color: #222222;`

### Color Palette
- **Primary Text:** `#222222` (`rgb(34, 34, 34)`)
- **Secondary / Muted Text:** `#717171` (`rgb(113, 113, 113)`)
- **Brand Primary Accent:** `#FF385C` (Logo & primary highlights)
- **Gradient Button:** Linear gradient from `#E61E4D` to `#D70466`
- **Border / Divider:** `#DDDDDD` (`rgb(221, 221, 221)`) and `#EBEBEB` (`rgb(235, 235, 235)`)
- **Background Neutral:** `#F7F7F7` (`rgb(247, 247, 247)`) for button hovers and category thumbnails
- **Card Background:** `#FFFFFF` (`rgb(255, 255, 255)`)
- **Star Rating Gold / Black:** `#222222` with solid black fill stars
- **Overlay Backdrop:** `rgba(0, 0, 0, 0.5)` for dialogs, `rgba(0, 0, 0, 0.9)` for Lightbox

### Geometry & Spacing
- **Max Content Container Width:** `1120px` (or `max-w-6xl` centered: `max-width: 1120px; margin: 0 auto; padding: 0 40px;`)
- **Standard Section Padding:** `padding-top: 32px; padding-bottom: 32px; border-bottom: 1px solid #DDDDDD;`
- **Border Radii:**
  - Card & Hero Grid outer corners: `12px`
  - Buttons (pill/rounded): `8px` for action cards, `full` (9999px) for pill buttons and avatar circles
  - Category thumbnail cards: `8px`

---

## 2. Page Structure & Section Breakdown (Top to Bottom)

### 2.1 Navigation Bar & Top Header
- **Layout:** Sticky/fixed or top static bar, `height: 80px; border-bottom: 1px solid #EBEBEB; padding: 0 40px;`
- **Left:** Airbnb brand logo SVG (`#FF385C`, `height: 32px; width: 102px`)
- **Center:** Search pill widget ("Anywhere | Anytime | Add guests" with search icon circle)
- **Right:** "Become a host" text button, Globe icon button ("Choose language and currency"), User profile menu dropdown pill (hamburger icon + user avatar).

### 2.2 Sticky Sub-Header (Appears on Scroll)
- **Behavior:** Emerges when scrolling past the hero photo grid.
- **Content:**
  - Left: Navigation anchors ("Photos", "Amenities", "Reviews", "Location").
  - Right: Quick price summary (`₹28,500 for 5 nights`, rating `4.95 (19)`) and "Reserve" action button (`#E61E4D`).

### 2.3 Title & Action Row
- **Title (H1):** `Romantic Jacuzzi 1BHK Candolim | Mirashya UG10`
- **Actions (Right aligned):**
  - "Share" button: Share icon (box with upward arrow) + "Share" text, underline on hover, background `#F7F7F7` on hover.
  - "Save" button: Heart icon + "Save" text, fills/animates on click.

### 2.4 Hero 5-Photo Grid
- **Container:** `display: grid; grid-template-columns: 2fr 1fr 1fr; grid-template-rows: 1fr 1fr; gap: 8px; height: 440px; border-radius: 12px; overflow: hidden; position: relative;`
- **Images:**
  1. Main large image (spans 2 rows on left): `photo_07.jpg` (Living room with jacuzzi view), rounded top-left and bottom-left.
  2. Top middle: `photo_04.jpg` (Seating area).
  3. Bottom middle: `photo_05.jpg` (Private jacuzzi tub).
  4. Top right: `photo_13.jpg` (Master bedroom), rounded top-right.
  5. Bottom right: `photo_29.jpg` (Building exterior Amor de Goa), rounded bottom-right.
- **Hover effect:** Individual photos dim slightly (`brightness: 0.9` or `opacity: 0.95`) on hover with smooth `300ms ease` transition.
- **"Show all photos" Button:**
  - Position: `position: absolute; bottom: 20px; right: 20px;`
  - Style: White background, `border: 1px solid #222222; border-radius: 8px; padding: 7px 15px; font-size: 14px; font-weight: 600; box-shadow: 0 1px 2px rgba(0,0,0,0.08);`
  - Icon: 3x3 grid dots SVG.
  - Hover: Background `#F7F7F7`.

### 2.5 Two-Column Main Content Layout
- **Container:** `display: grid; grid-template-columns: 7fr 4fr; gap: 80px; align-items: start; margin-top: 32px;`
- **Left Column (approx 650px):**
  1. **Property Overview & Host Summary:**
     - `Entire serviced apartment in Candolim, India` (H2, 22px)
     - `3 guests · 1 bedroom · 1 bed · 1 bathroom` (16px, `#717171`)
  2. **Guest Favourite Badge Card:**
     - Left: Laurel leaves icon with "Guest favourite" badge.
     - Center text: "One of the most loved homes on Airbnb, according to guests".
     - Right: Overall rating `4.95` with star icon + `19 Reviews`.
  3. **Host Card Row:**
     - Avatar: `images/avatars/host_mirashya.jpeg` (40x40 circle).
     - Text: `Hosted by Mirashya Homes` (H3, 16px font-semibold), `2 years hosting` (14px `#717171`).
  4. **Key Property Highlights (with inline SVG icons):**
     - Outdoor entertainment: "The pool and alfresco dining are great for summer trips."
     - Designed for staying cool: "Beat the heat with the A/C and ceiling fan."
     - Self check-in: "You can check in with the building staff."
  5. **Description Block:**
     - Translation notice: "Some info has been automatically translated. Show original".
     - Text content: "🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it’s ideal for couples, small families, or friends looking to experience the best of North Goa."
     - "Show more" button with right arrow icon.
  6. **Where You'll Sleep:**
     - Heading: `Where you'll sleep` (H2, 22px)
     - Cards (2 items side-by-side):
       - Card 1: `Bedroom` (1 double bed) with preview thumbnail `photo_13.jpg`.
       - Card 2: `Living room` (1 sofa) with preview thumbnail `photo_01.jpg`.
  7. **Amenities Section ("What this place offers"):**
     - Heading: `What this place offers` (H2, 22px)
     - 2-column grid of 10 primary amenities with SVG icons:
       - Kitchen
       - Wifi
       - Dedicated workspace
       - Free parking on premises
       - Pool
       - Hot tub
       - Pets allowed
       - Exterior security cameras on property
       - Carbon monoxide alarm
       - Smoke alarm
     - Button: "Show all 50 amenities" (`border: 1px solid #222222; border-radius: 8px; padding: 13px 23px; font-weight: 600;`).
  8. **Calendar & Date Selection:**
     - Heading: `5 nights in Candolim` (H2, 22px)
     - Subtitle: `18 Oct 2026 - 23 Oct 2026` + `Clear dates` link button.
     - Dual-month desktop calendar view (October 2026 & November 2026) with selectable dates and range styling.

- **Right Column (Sticky Booking Widget):**
  - **Container:** `position: sticky; top: 120px; border: 1px solid #DDDDDD; border-radius: 12px; padding: 24px; box-shadow: 0 6px 16px rgba(0,0,0,0.12); background: #FFFFFF;`
  - **Promo Banner:** Promo tag icon + `Get 10% off your next stay. Terms apply Claim`.
  - **Price Header:** `₹28,500` (22px bold) + `for 5 nights` (16px `#717171`).
  - **Date & Guest Selector Box:**
    - Top split: `CHECK-IN: 18/10/2026` | `CHECKOUT: 23/10/2026` (bordered grid box).
    - Bottom: `GUESTS: 1 guest` (with chevron dropdown indicator).
  - **Reserve Button:**
    - Full width, `background: linear-gradient(to right, #E61E4D, #D70466); color: #FFFFFF; font-weight: 600; font-size: 16px; padding: 14px; border-radius: 8px;`
    - Subtitle: "You won't be charged yet" (centered, 14px `#717171`, margin-top 12px).
  - **Cost Breakdown Table:**
    - `₹5,700 x 5 nights` : `₹28,500`
    - `Cleaning fee` : `₹1,200`
    - `Airbnb service fee` : `₹3,150`
    - Divider line: `border-top: 1px solid #EBEBEB; margin: 16px 0;`
    - `Total before taxes` : `₹32,850` (bold, 16px).

---

### 2.6 Full-Width Reviews Section
- **Heading Block:** Rating badge `4.95 ★` + `Guest favourite` title + summary "This home is a guest favourite based on ratings, reviews and reliability".
- **Category Rating Metrics (Two Columns):**
  - Cleanliness: `5.0` (bar indicator 100%)
  - Accuracy: `5.0` (bar indicator 100%)
  - Check-in: `5.0` (bar indicator 100%)
  - Communication: `5.0` (bar indicator 100%)
  - Location: `4.8` (bar indicator 96%)
  - Value: `4.8` (bar indicator 96%)
- **Feature Filter Tags:** `Comfort 6`, `Accuracy 5`, `Hot tub 5`, `Condition 4`, `Hospitality 4`.
- **Review Cards Grid:** 2 columns, 6 featured reviews:
  1. Amit: `images/avatars/amit.png` (38x38), "2 months on Airbnb · 1 week ago", "Very helpful and responsive team. Safe and peaceful stay. loved everything about the property."
  2. Aheesh: `images/avatars/aheesh.png`, "3 years on Airbnb · 2 weeks ago", "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay..."
  3. Samiksha: `images/avatars/samiksha.png`, "8 months on Airbnb · May 2026", "the host nitish was really great help"
  4. Vedant: `images/avatars/vedant.png`, "4 years on Airbnb · May 2026", "We had an amazing stay at this property in Goa! The entire home was spotless..."
  5. Vaibhav S: `images/avatars/vaibhav.png`, "3 years on Airbnb · May 2026", "Great great experience living out there..."
  6. Mohd: `images/avatars/mohd.jpeg`, "5 years on Airbnb · May 2026", "Great place. Exactly as described in the listing."
- **Action:** "Show all 19 reviews" button.

---

### 2.7 Location & Candolim Map Section
- **Heading:** `Where you’ll be` (H2, 22px), `Candolim, Goa, India` (16px).
- **Map View:** High-resolution OpenStreetMap/Leaflet container with Airbnb circle pin at Candolim coordinates (`15.5186° N, 73.7667° E`).
- **Footer Note:** "Exact location will be provided after booking."
- **Neighbourhood highlights:** "Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions."

---

### 2.8 Host Profile Deep-Dive
- **Heading:** `Meet your host` (H2, 22px).
- **Profile Card:**
  - Left Badge Card: Mirashya Homes, Host, `1,463 Reviews`, `4.68★ Rating`, `2 Years hosting`.
  - Facts list: `Born in the 80s`, `Where I went to school: NICMAR GOA`.
  - Co-Hosts Row: Sharath, Aman Dev Pahwa, Maria Karen Priyanka, Simran, Pallavi, Sanyukta, Shruti, Amisha (circular avatars).
  - Response metrics: `Response rate: 100%`, `Responds within an hour`.
  - Button: "Message host".
  - Airbnb protection disclaimer: "To help protect your payment, always use Airbnb to send money and communicate with hosts."

---

### 2.9 Things to Know (House Rules & Policies)
- **Heading:** `Things to know` (H2, 22px).
- **3 Columns:**
  1. **Cancellation policy:** "Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund." + Learn more.
  2. **House rules:** "Check-in after 2:00 pm", "Checkout before 11:00 am", "3 guests maximum" + Learn more.
  3. **Safety & property:** "Carbon monoxide alarm not reported", "Smoke alarm not reported", "Exterior security cameras on property" + Learn more.

---

### 2.10 Nearby Stays Carousel
- **Cards:**
  - "Beautiful Studio with a view to die for" - 4.91★, `₹23,600 night`, photo `images/nearby/stay1.jpeg`.
  - "NAQAB - 1bhk with private pool" - 4.95★, `₹42,218 night`, photo `images/nearby/stay2.jpeg`.

---

### 2.11 Footer
- **Columns:**
  - Support: Help Centre, AirCover, Anti-discrimination, Disability support, Cancellation options.
  - Hosting: Airbnb your home, AirCover for Hosts, Hosting resources, Community forum, Hosting responsibly.
  - Airbnb: Newsroom, New features, Careers, Investors, Airbnb.org emergency stays.
- **Bottom Bar:**
  - Left: `© 2026 Airbnb, Inc. · Privacy · Terms · Sitemap · Company details`
  - Right: `English (IN) · ₹ INR` + Social icons.

---

## 3. Photo Tour Modal Specification

- **Trigger:** Clicking "Show all photos" or clicking any image in the Hero 5-Photo Grid.
- **Dialog Attributes:** `role="dialog"`, `aria-modal="true"`, `aria-label="Photo tour modal"`, background `#FFFFFF`, fixed full-screen (`fixed inset-0 z-50`).
- **Sticky Top Bar:**
  - Left: Close button (X icon, `aria-label="Close photo tour"`, hover bg `#F7F7F7`, rounded-full).
  - Center/Right: Share button, Save button.
  - Category Carousel Row: Horizontal scrolling list of category buttons:
    1. Living room 1 (`photo_01.jpg` thumbnail)
    2. Living room 2 (`photo_04.jpg` thumbnail)
    3. Full kitchen (`photo_11.jpg` thumbnail)
    4. Bedroom (`photo_13.jpg` thumbnail)
    5. Full bathroom (`photo_19.jpg` thumbnail)
    6. Gym (`photo_20.jpg` thumbnail)
    7. Exterior (`photo_25.jpg` thumbnail)
    8. Pool (`photo_31.jpg` thumbnail)
    9. Additional photos (`photo_34.jpg` thumbnail)
  - Active Indicator: Category button is underlined with `#222222` when active. Clicking a category smoothly scrolls the main modal container to the corresponding room section.
- **Main Content Layout:**
  - Centered container (`max-w-[1120px] mx-auto px-6 py-8`).
  - Room Sections: Each room has an H3 title, subtitle with amenities (e.g., `Sofa · Air conditioning · Ceiling fan · TV`), and a responsive photo grid (alternating between 1 full-width image and 2-column image pairs).
  - Hover on images: `scale-[1.01]` or `brightness-90` with smooth `300ms` transition.
  - Clicking any image in the room grid triggers the **Lightbox**.

---

## 4. Lightbox Specification

- **Trigger:** Clicking any photo within the Photo Tour modal or hero grid.
- **Backdrop:** Full-screen pure black `#000000` or `rgba(0,0,0,0.95)`, `fixed inset-0 z-[60]`.
- **Header Controls:**
  - Close button: White X icon (`aria-label="Close lightbox"`, hover bg `rgba(255,255,255,0.1)`).
  - Photo Counter: `X / 42` (centered, white text, 14px font-medium, `aria-live="polite"`).
- **Navigation Controls:**
  - Previous photo arrow button: Left circular button (`aria-label="Previous photo"`), disabled with `opacity: 0.3` at photo 1.
  - Next photo arrow button: Right circular button (`aria-label="Next photo"`), disabled at photo 42.
  - Keyboard Navigation:
    - `ArrowLeft`: Navigate to previous photo.
    - `ArrowRight`: Navigate to next photo.
    - `Escape`: Close Lightbox and return focus to the Photo Tour modal.
- **Image Transition:** Smooth opacity/crossfade transition (`250ms ease-in-out`).

---

## 5. Assets Dictionary

### Property Photos (Total 42 Photos)
- Base URL: `https://airbnbproj-iota.vercel.app/images/photos/`
- Files: `photo_01.jpg` through `photo_42.jpg`

### Avatars & Icons
- Host Avatar: `https://airbnbproj-iota.vercel.app/images/avatars/host_mirashya.jpeg`
- Reviewer Avatars: `amit.png`, `aheesh.png`, `samiksha.png`, `vedant.png`, `vaibhav.png`, `mohd.jpeg`
- Co-host Avatars: `sharath.jpeg`, `aman.jpeg`, `maria.jpeg`, `simran.jpeg`, `pallavi.jpeg`, `sanyukta.jpeg`
- Nearby Stays: `https://airbnbproj-iota.vercel.app/images/nearby/stay1.jpeg`, `stay2.jpeg`
- Badges: `promo_tag.png`, `search_house.png`
