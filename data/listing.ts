import { ALL_AMENITIES, AmenityGroup, AmenityDetail } from "./allAmenities";
export { ALL_AMENITIES };
export type { AmenityGroup, AmenityDetail };

export interface PhotoItem {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

export interface RoomCategory {
  id: string;
  name: string;
  subtitle: string;
  thumbnail: string;
  photos: PhotoItem[];
}

export interface ReviewItem {
  id: string;
  author: string;
  avatar: string;
  durationOnAirbnb: string;
  date: string;
  comment: string;
}

export interface CoHost {
  name: string;
  avatar: string;
}

export interface NearbyStay {
  id: string;
  title: string;
  rating: number;
  pricePerNight: number;
  image: string;
}

export interface ListingData {
  id: string;
  title: string;
  propertyType: string;
  location: string;
  guestsCount: number;
  bedroomsCount: number;
  bedsCount: number;
  bathroomsCount: number;
  rating: number;
  reviewsCount: number;
  isGuestFavourite: boolean;
  heroPhotos: PhotoItem[];
  host: {
    name: string;
    avatar: string;
    yearsHosting: number;
    reviewsCount: number;
    rating: number;
    school: string;
    generation: string;
    responseRate: string;
    responseTime: string;
    coHosts: CoHost[];
  };
  highlights: {
    title: string;
    description: string;
    icon: string;
  }[];
  description: {
    translationNotice: string;
    body: string;
  };
  sleepingArrangements: {
    room: string;
    bedDetails: string;
    photo: string;
  }[];
  amenities: {
    name: string;
    category: string;
    icon: string;
  }[];
  allAmenities: AmenityGroup[];
  pricing: {
    pricePerNight: number;
    nights: number;
    cleaningFee: number;
    serviceFee: number;
    currencySymbol: string;
    checkInDate: string;
    checkoutDate: string;
  };
  ratingsBreakdown: {
    cleanliness: number;
    accuracy: number;
    checkIn: number;
    communication: number;
    location: number;
    value: number;
  };
  reviewTags: { label: string; count: number }[];
  reviews: ReviewItem[];
  neighborhood: {
    title: string;
    locationName: string;
    description: string;
    coordinates: { lat: number; lng: number };
  };
  thingsToKnow: {
    cancellationPolicy: string;
    houseRules: string[];
    safetyAndProperty: string[];
  };
  nearbyStays: NearbyStay[];
  photoCategories: RoomCategory[];
}

export const LISTING_DATA: ListingData = {
  id: "mirashya-ug10",
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  propertyType: "Entire serviced apartment in Candolim, India",
  location: "Candolim, Goa, India",
  guestsCount: 3,
  bedroomsCount: 1,
  bedsCount: 1,
  bathroomsCount: 1,
  rating: 4.95,
  reviewsCount: 19,
  isGuestFavourite: true,
  heroPhotos: [
    {
      id: "hero-1",
      src: "https://airbnbproj-iota.vercel.app/images/photos/photo_07.jpg",
      alt: "Living room with jacuzzi view",
    },
    {
      id: "hero-2",
      src: "https://airbnbproj-iota.vercel.app/images/photos/photo_04.jpg",
      alt: "Seating area",
    },
    {
      id: "hero-3",
      src: "https://airbnbproj-iota.vercel.app/images/photos/photo_05.jpg",
      alt: "Private jacuzzi tub",
    },
    {
      id: "hero-4",
      src: "https://airbnbproj-iota.vercel.app/images/photos/photo_13.jpg",
      alt: "Master bedroom",
    },
    {
      id: "hero-5",
      src: "https://airbnbproj-iota.vercel.app/images/photos/photo_29.jpg",
      alt: "Building exterior Amor de Goa",
    },
  ],
  host: {
    name: "Mirashya Homes",
    avatar: "https://airbnbproj-iota.vercel.app/images/avatars/host_mirashya.jpeg",
    yearsHosting: 2,
    reviewsCount: 1463,
    rating: 4.68,
    school: "NICMAR GOA",
    generation: "Born in the 80s",
    responseRate: "100%",
    responseTime: "Responds within an hour",
    coHosts: [
      { name: "Sharath", avatar: "https://airbnbproj-iota.vercel.app/images/avatars/sharath.jpeg" },
      { name: "Aman Dev Pahwa", avatar: "https://airbnbproj-iota.vercel.app/images/avatars/aman.jpeg" },
      { name: "Maria Karen Priyanka", avatar: "https://airbnbproj-iota.vercel.app/images/avatars/maria.jpeg" },
      { name: "Simran", avatar: "https://airbnbproj-iota.vercel.app/images/avatars/simran.jpeg" },
      { name: "Pallavi", avatar: "https://airbnbproj-iota.vercel.app/images/avatars/pallavi.jpeg" },
      { name: "Sanyukta", avatar: "https://airbnbproj-iota.vercel.app/images/avatars/sanyukta.jpeg" },
    ],
  },
  highlights: [
    {
      title: "Outdoor entertainment",
      description: "The pool and alfresco dining are great for summer trips.",
      icon: "pool",
    },
    {
      title: "Designed for staying cool",
      description: "Beat the heat with the A/C and ceiling fan.",
      icon: "ac",
    },
    {
      title: "Self check-in",
      description: "You can check in with the building staff.",
      icon: "key",
    },
  ],
  description: {
    translationNotice: "Some info has been automatically translated. Show original",
    body: "🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it’s ideal for couples, small families, or friends looking to experience the best of North Goa.",
  },
  sleepingArrangements: [
    {
      room: "Bedroom",
      bedDetails: "1 double bed",
      photo: "https://airbnbproj-iota.vercel.app/images/photos/photo_13.jpg",
    },
    {
      room: "Living room",
      bedDetails: "1 sofa",
      photo: "https://airbnbproj-iota.vercel.app/images/photos/photo_01.jpg",
    },
  ],
  amenities: [
    { name: "Kitchen", category: "Basics", icon: "kitchen" },
    { name: "Wifi", category: "Internet", icon: "wifi" },
    { name: "Dedicated workspace", category: "Work", icon: "workspace" },
    { name: "Free parking on premises", category: "Parking", icon: "parking" },
    { name: "Pool", category: "Facilities", icon: "pool" },
    { name: "Hot tub", category: "Facilities", icon: "hottub" },
    { name: "Pets allowed", category: "Rules", icon: "pets" },
    { name: "Exterior security cameras on property", category: "Safety", icon: "camera" },
    { name: "Carbon monoxide alarm", category: "Safety", icon: "alarm" },
    { name: "Smoke alarm", category: "Safety", icon: "alarm" },
  ],
  allAmenities: ALL_AMENITIES,
  pricing: {
    pricePerNight: 5700,
    nights: 5,
    cleaningFee: 1200,
    serviceFee: 3150,
    currencySymbol: "₹",
    checkInDate: "18/10/2026",
    checkoutDate: "23/10/2026",
  },
  ratingsBreakdown: {
    cleanliness: 5.0,
    accuracy: 5.0,
    checkIn: 5.0,
    communication: 5.0,
    location: 4.8,
    value: 4.8,
  },
  reviewTags: [
    { label: "Comfort", count: 6 },
    { label: "Accuracy", count: 5 },
    { label: "Hot tub", count: 5 },
    { label: "Condition", count: 4 },
    { label: "Hospitality", count: 8 },
    { label: "Cleanliness", count: 4 },
    { label: "Amenities", count: 2 },
  ],
  reviews: [
    {
      id: "r1",
      author: "Amit",
      avatar: "https://airbnbproj-iota.vercel.app/images/avatars/amit.png",
      durationOnAirbnb: "2 months on Airbnb",
      date: "1 week ago",
      comment: "Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.",
    },
    {
      id: "r2",
      author: "Aheesh",
      avatar: "https://airbnbproj-iota.vercel.app/images/avatars/aheesh.png",
      durationOnAirbnb: "3 years on Airbnb",
      date: "2 weeks ago",
      comment: "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.",
    },
    {
      id: "r3",
      author: "Samiksha",
      avatar: "https://airbnbproj-iota.vercel.app/images/avatars/samiksha.png",
      durationOnAirbnb: "8 months on Airbnb",
      date: "May 2026",
      comment: "the host nitish was really great help",
    },
    {
      id: "r4",
      author: "Vedant",
      avatar: "https://airbnbproj-iota.vercel.app/images/avatars/vedant.png",
      durationOnAirbnb: "4 years on Airbnb",
      date: "May 2026",
      comment: "We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine. The highlight of our stay was definitely the jacuzzi. It was clean, well-kept, and the perfect place to unwind.",
    },
    {
      id: "r5",
      author: "Vaibhav S",
      avatar: "https://airbnbproj-iota.vercel.app/images/avatars/vaibhav.png",
      durationOnAirbnb: "3 years on Airbnb",
      date: "May 2026",
      comment: "Great great experience living out there , can't expect more , will always look for it in the future and will recommend my friends too.",
    },
    {
      id: "r6",
      author: "Mohd",
      avatar: "https://airbnbproj-iota.vercel.app/images/avatars/mohd.jpeg",
      durationOnAirbnb: "5 years on Airbnb",
      date: "May 2026",
      comment: "Great place. Exactly as described in the listing.",
    },
  ],
  neighborhood: {
    title: "Where you’ll be",
    locationName: "Candolim, Goa, India",
    description: "Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.",
    coordinates: { lat: 15.5186, lng: 73.7667 },
  },
  thingsToKnow: {
    cancellationPolicy: "Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.",
    houseRules: [
      "Check-in after 2:00 pm",
      "Checkout before 11:00 am",
      "3 guests maximum",
    ],
    safetyAndProperty: [
      "Carbon monoxide alarm not reported",
      "Smoke alarm not reported",
      "Exterior security cameras on property",
    ],
  },
  nearbyStays: [
    {
      id: "nearby-1",
      title: "Beautiful Studio with a view to die for",
      rating: 4.91,
      pricePerNight: 23600,
      image: "https://airbnbproj-iota.vercel.app/images/nearby/stay1.jpeg",
    },
    {
      id: "nearby-2",
      title: "NAQAB - 1bhk with private pool",
      rating: 4.95,
      pricePerNight: 42218,
      image: "https://airbnbproj-iota.vercel.app/images/nearby/stay2.jpeg",
    },
  ],
  photoCategories: [
    {
      id: "living-room-1",
      name: "Living room 1",
      subtitle: "Sofa · Air conditioning · Ceiling fan · TV",
      thumbnail: "https://airbnbproj-iota.vercel.app/images/photos/photo_01.jpg",
      photos: [
        { id: "p1", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_01.jpg", alt: "Living room 1 photo 1" },
        { id: "p2", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_02.jpg", alt: "Living room 1 photo 2" },
        { id: "p3", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_03.jpg", alt: "Living room 1 photo 3" },
      ],
    },
    {
      id: "living-room-2",
      name: "Living room 2",
      subtitle: "Seating area · Jacuzzi access · Ambient lighting",
      thumbnail: "https://airbnbproj-iota.vercel.app/images/photos/photo_04.jpg",
      photos: [
        { id: "p4", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_04.jpg", alt: "Living room 2 photo 1" },
        { id: "p5", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_05.jpg", alt: "Living room 2 photo 2" },
        { id: "p6", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_06.jpg", alt: "Living room 2 photo 3" },
        { id: "p7", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_07.jpg", alt: "Living room 2 photo 4" },
        { id: "p8", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_08.jpg", alt: "Living room 2 photo 5" },
        { id: "p9", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_09.jpg", alt: "Living room 2 photo 6" },
        { id: "p10", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_10.jpg", alt: "Living room 2 photo 7" },
      ],
    },
    {
      id: "full-kitchen",
      name: "Full kitchen",
      subtitle: "Refrigerator · Microwave · Cooking basics · Stove",
      thumbnail: "https://airbnbproj-iota.vercel.app/images/photos/photo_11.jpg",
      photos: [
        { id: "p11", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_11.jpg", alt: "Full kitchen photo 1" },
        { id: "p12", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_12.jpg", alt: "Full kitchen photo 2" },
      ],
    },
    {
      id: "bedroom",
      name: "Bedroom",
      subtitle: "1 double bed · Air conditioning · Wardrobe · Linens",
      thumbnail: "https://airbnbproj-iota.vercel.app/images/photos/photo_13.jpg",
      photos: [
        { id: "p13", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_13.jpg", alt: "Bedroom photo 1" },
        { id: "p14", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_14.jpg", alt: "Bedroom photo 2" },
        { id: "p15", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_15.jpg", alt: "Bedroom photo 3" },
        { id: "p16", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_16.jpg", alt: "Bedroom photo 4" },
        { id: "p17", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_17.jpg", alt: "Bedroom photo 5" },
        { id: "p18", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_18.jpg", alt: "Bedroom photo 6" },
      ],
    },
    {
      id: "full-bathroom",
      name: "Full bathroom",
      subtitle: "Hot water · Shower · Mirror · Essential toiletries",
      thumbnail: "https://airbnbproj-iota.vercel.app/images/photos/photo_19.jpg",
      photos: [
        { id: "p19", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_19.jpg", alt: "Full bathroom photo 1" },
      ],
    },
    {
      id: "gym",
      name: "Gym",
      subtitle: "Fitness equipment · Weights · Cardio",
      thumbnail: "https://airbnbproj-iota.vercel.app/images/photos/photo_20.jpg",
      photos: [
        { id: "p20", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_20.jpg", alt: "Gym photo 1" },
        { id: "p21", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_21.jpg", alt: "Gym photo 2" },
        { id: "p22", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_22.jpg", alt: "Gym photo 3" },
        { id: "p23", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_23.jpg", alt: "Gym photo 4" },
        { id: "p24", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_24.jpg", alt: "Gym photo 5" },
      ],
    },
    {
      id: "exterior",
      name: "Exterior",
      subtitle: "Building entrance · Balcony views · Landscaping",
      thumbnail: "https://airbnbproj-iota.vercel.app/images/photos/photo_25.jpg",
      photos: [
        { id: "p25", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_25.jpg", alt: "Exterior photo 1" },
        { id: "p26", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_26.jpg", alt: "Exterior photo 2" },
        { id: "p27", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_27.jpg", alt: "Exterior photo 3" },
        { id: "p28", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_28.jpg", alt: "Exterior photo 4" },
        { id: "p29", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_29.jpg", alt: "Exterior photo 5" },
        { id: "p30", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_30.jpg", alt: "Exterior photo 6" },
      ],
    },
    {
      id: "pool",
      name: "Pool",
      subtitle: "Shared outdoor pool · Sun loungers · Tropical garden",
      thumbnail: "https://airbnbproj-iota.vercel.app/images/photos/photo_31.jpg",
      photos: [
        { id: "p31", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_31.jpg", alt: "Pool photo 1" },
        { id: "p32", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_32.jpg", alt: "Pool photo 2" },
        { id: "p33", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_33.jpg", alt: "Pool photo 3" },
      ],
    },
    {
      id: "additional-photos",
      name: "Additional photos",
      subtitle: "Property details · Surrounding amenities · Interior accents",
      thumbnail: "https://airbnbproj-iota.vercel.app/images/photos/photo_34.jpg",
      photos: [
        { id: "p34", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_34.jpg", alt: "Additional photo 1" },
        { id: "p35", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_35.jpg", alt: "Additional photo 2" },
        { id: "p36", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_36.jpg", alt: "Additional photo 3" },
        { id: "p37", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_37.jpg", alt: "Additional photo 4" },
        { id: "p38", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_38.jpg", alt: "Additional photo 5" },
        { id: "p39", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_39.jpg", alt: "Additional photo 6" },
        { id: "p40", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_40.jpg", alt: "Additional photo 7" },
        { id: "p41", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_41.jpg", alt: "Additional photo 8" },
        { id: "p42", src: "https://airbnbproj-iota.vercel.app/images/photos/photo_42.jpg", alt: "Additional photo 9" },
      ],
    },
  ],
};
