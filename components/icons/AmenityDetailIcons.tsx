import React from "react";

interface IconProps {
  size?: number;
  className?: string;
}

export const AmenityDetailIcons: Record<string, React.FC<IconProps>> = {
  // --- Bathroom ---
  "Hairdryer": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M7 6h7a4 4 0 0 1 4 4 4 4 0 0 1-4 4H7z" />
      <path d="M7 8H4v4h3" />
      <path d="M11 14v6a1.5 1.5 0 0 1-1.5 1.5h0" />
      <circle cx="14" cy="10" r="1.5" />
    </svg>
  ),

  "Cleaning products": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M14 6V3.5h-4V6" />
      <path d="M10 3.5L7 5.5v2h7" />
      <path d="M8 8.5h8l-1 12H9L8 8.5z" />
      <path d="M8 14h8" />
    </svg>
  ),

  "Shampoo": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M10 2h4" />
      <path d="M12 2v3" />
      <path d="M9 5h6v2H9z" />
      <rect x="7" y="7" width="10" height="14" rx="2" />
      <line x1="10" y1="12" x2="14" y2="12" />
    </svg>
  ),

  "Hot water": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 12h16a1 1 0 0 1 1 1v4a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5v-4a1 1 0 0 1 1-1z" />
      <path d="M6 8c1-1 1-2 0-3" />
      <path d="M12 8c1-1 1-2 0-3" />
      <path d="M18 8c1-1 1-2 0-3" />
    </svg>
  ),

  "Shower gel": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M10 3h4v3h-4z" />
      <rect x="7" y="6" width="10" height="15" rx="2" />
      <circle cx="19" cy="6" r="1" />
      <circle cx="20" cy="10" r="1.5" />
    </svg>
  ),

  // --- Bedroom and laundry ---
  "Washing machine": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <circle cx="12" cy="13" r="5" />
      <path d="M10 13a2 2 0 0 1 2-2" />
      <circle cx="7" cy="6.5" r="1" fill="currentColor" />
      <circle cx="10" cy="6.5" r="1" fill="currentColor" />
    </svg>
  ),

  "Essentials (Towels, bed sheets, soap, toilet paper)": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
      <path d="M4 13a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
      <path d="M4 19a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
    </svg>
  ),

  "Hangers": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 4a2 2 0 0 1 2 2c0 1.5-1.5 2-2 3" />
      <path d="M2.5 17.5L12 9l9.5 8.5a1.5 1.5 0 0 1-.9 2.5H3.4a1.5 1.5 0 0 1-.9-2.5z" />
    </svg>
  ),

  "Bed linen": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H8.5L4 11.5V15z" />
      <path d="M4 11.5h4.5V7" />
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    </svg>
  ),

  "Iron": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 18h16a2 2 0 0 0 2-2c0-4-3-7-7-7H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1z" />
      <path d="M4 9V6h10" />
    </svg>
  ),

  "Clothes storage": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <line x1="12" y1="3" x2="12" y2="21" />
      <circle cx="9.5" cy="12" r="0.75" fill="currentColor" />
      <circle cx="14.5" cy="12" r="0.75" fill="currentColor" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  ),

  "Room-darkening blinds": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="12" rx="1" />
      <line x1="2" y1="3" x2="22" y2="3" />
      <line x1="12" y1="15" x2="12" y2="20" />
      <circle cx="12" cy="21" r="1" />
    </svg>
  ),

  "Cot": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <line x1="7" y1="6" x2="7" y2="14" />
      <line x1="11" y1="6" x2="11" y2="14" />
      <line x1="15" y1="6" x2="15" y2="14" />
      <line x1="5" y1="18" x2="5" y2="21" />
      <line x1="19" y1="18" x2="19" y2="21" />
    </svg>
  ),

  // --- Entertainment ---
  "Smart TV with standard cable/satellite": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="5" width="20" height="13" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="18" x2="12" y2="21" />
    </svg>
  ),

  "Books and reading material": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5z" />
      <path d="M6 2v16a2 2 0 0 0 2 2h12" />
    </svg>
  ),

  // --- Heating and cooling ---
  "Air conditioning": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="5" width="20" height="9" rx="2" />
      <line x1="6" y1="18" x2="6" y2="20" />
      <line x1="12" y1="18" x2="12" y2="20" />
      <line x1="18" y1="18" x2="18" y2="20" />
      <line x1="5" y1="11" x2="19" y2="11" />
    </svg>
  ),

  "Ceiling fan": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 9V3c2.5 0 4 1.5 4 3s-1.5 3-4 3z" />
      <path d="M14.5 13.5l5.2 3c1.2 2.2.7 4.2-.6 5-1.4.7-3.2 0-4.6-2z" />
      <path d="M9.5 13.5l-5.2 3c-1.2 2.2-.7 4.2.6 5 1.4.7 3.2 0 4.6-2z" />
    </svg>
  ),

  // --- Home safety ---
  "Exterior security cameras on property": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 10h11l4-3v8l-4-3H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z" />
      <circle cx="8" cy="12" r="2" />
      <path d="M3 15v4" />
    </svg>
  ),

  "First aid kit": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="6" width="18" height="15" rx="2" />
      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <line x1="12" y1="10" x2="12" y2="16" />
      <line x1="9" y1="13" x2="15" y2="13" />
    </svg>
  ),

  "Smoke alarm": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
    </svg>
  ),

  "Carbon monoxide alarm": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M9 11a2.5 2.5 0 0 1 5 0v2a2.5 2.5 0 0 1-5 0z" />
    </svg>
  ),

  // --- Internet and office ---
  "Fast wifi – 50 Mbps": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M2 8.5c6-5.5 14-5.5 20 0" />
      <path d="M5 12.5c4-3.5 10-3.5 14 0" />
      <path d="M8.5 16.5c2-1.5 5-1.5 7 0" />
      <circle cx="12" cy="20" r="1" fill="currentColor" />
    </svg>
  ),

  "Dedicated workspace": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="14" width="18" height="2" />
      <line x1="5" y1="16" x2="5" y2="21" />
      <line x1="19" y1="16" x2="19" y2="21" />
      <rect x="7" y="6" width="10" height="7" rx="1" />
    </svg>
  ),

  // --- Kitchen and dining ---
  "Kitchen (Space where guests can cook their own meals)": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 7h18v14H3z" />
      <circle cx="8" cy="12" r="2" />
      <circle cx="16" cy="12" r="2" />
      <line x1="3" y1="17" x2="21" y2="17" />
    </svg>
  ),

  "Fridge & Freezer": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="5" y1="10" x2="19" y2="10" />
      <line x1="8" y1="6" x2="8" y2="8" />
      <line x1="8" y1="14" x2="8" y2="17" />
    </svg>
  ),

  "Microwave": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="4" width="20" height="15" rx="2" />
      <rect x="4" y="7" width="11" height="9" rx="1" />
      <circle cx="18" cy="9" r="1" fill="currentColor" />
      <circle cx="18" cy="13" r="1" fill="currentColor" />
    </svg>
  ),

  "Cooking basics (Pots and pans, oil, salt and pepper)": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 11h12a3 3 0 0 1 3 3v2H1v-2a3 3 0 0 1 3-3z" />
      <line x1="19" y1="13" x2="23" y2="13" />
      <path d="M10 5v3" />
    </svg>
  ),

  "Dishes and silverware": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="12" r="4" />
      <line x1="2" y1="4" x2="2" y2="20" />
      <line x1="22" y1="4" x2="22" y2="20" />
    </svg>
  ),

  "Kettle": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 19h14a1 1 0 0 0 1-1l-2-9H6L4 18a1 1 0 0 0 1 1z" />
      <path d="M9 9V5a3 3 0 0 1 6 0v4" />
      <path d="M18 12h3" />
    </svg>
  ),

  "Toaster": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="9" width="18" height="11" rx="2" />
      <path d="M7 9V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" />
      <line x1="19" y1="13" x2="22" y2="13" />
    </svg>
  ),

  "Blender": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M8 3h8l-1.5 12h-5L8 3z" />
      <rect x="7" y="15" width="10" height="6" rx="2" />
      <circle cx="12" cy="18" r="1" fill="currentColor" />
    </svg>
  ),

  "Dining table": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="8" width="18" height="3" rx="1" />
      <line x1="6" y1="11" x2="6" y2="20" />
      <line x1="18" y1="11" x2="18" y2="20" />
      <line x1="2" y1="14" x2="22" y2="14" />
    </svg>
  ),

  // --- Location features ---
  "Candolim beach access (Public or shared)": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 4a7 7 0 0 1 7 7H5a7 7 0 0 1 7-7z" />
      <line x1="12" y1="11" x2="12" y2="21" />
      <path d="M2 20c2-1 4-1 6 0s4 1 6 0 4-1 6 0" />
    </svg>
  ),

  "Private entrance": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
      <circle cx="14" cy="12" r="1" fill="currentColor" />
      <line x1="3" y1="20" x2="21" y2="20" />
    </svg>
  ),

  "Resort access": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <rect x="9" y="13" width="6" height="8" />
    </svg>
  ),

  // --- Outdoor ---
  "Private jacuzzi / hot tub": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 11h18v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-6z" />
      <path d="M6 7c1-1 1-2 0-3" />
      <path d="M12 7c1-1 1-2 0-3" />
      <path d="M18 7c1-1 1-2 0-3" />
    </svg>
  ),

  "Shared outdoor pool (open year-round)": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M2 17c3-1.5 5-1.5 8 0s5 1.5 8 0 3-1.5 4-1" />
      <path d="M2 21c3-1.5 5-1.5 8 0s5 1.5 8 0 3-1.5 4-1" />
      <path d="M15 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-3 7l3-3 3 3-2 3" />
    </svg>
  ),

  "Shared patio or balcony": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 20h18" />
      <path d="M4 14h16" />
      <line x1="6" y1="14" x2="6" y2="20" />
      <line x1="12" y1="14" x2="12" y2="20" />
      <line x1="18" y1="14" x2="18" y2="20" />
      <path d="M4 6h16v8H4z" />
    </svg>
  ),

  // --- Parking and facilities ---
  "Free parking on premises": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M9 16V8h4a3 3 0 0 1 0 6H9" />
    </svg>
  ),

  "Shared gym on premises": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M6 5v14M18 5v14M2 9v6M22 9v6M6 12h12" />
    </svg>
  ),

  "Lift / Elevator in building": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 10l2-2 2 2M8 14l2 2 2-2" />
      <line x1="14" y1="8" x2="14" y2="16" />
    </svg>
  ),

  // --- Services ---
  "Pets allowed": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="7.5" cy="7.5" r="2" />
      <circle cx="16.5" cy="7.5" r="2" />
      <circle cx="4.5" cy="12.5" r="1.5" />
      <circle cx="19.5" cy="12.5" r="1.5" />
      <path d="M12 11c-3.5 0-6 2.5-6 6 0 2.5 2.5 4 6 4s6-1.5 6-4c0-3.5-2.5-6-6-6z" />
    </svg>
  ),

  "Self check-in with building staff": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="7" r="4" />
      <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
      <path d="M16 11l2 2 4-4" />
    </svg>
  ),

  "Long-term stays allowed (28+ days)": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <text x="12" y="17" textAnchor="middle" fontSize="6" fontWeight="bold" fill="currentColor">28+</text>
    </svg>
  ),

  "Cleaning available during stay": ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 3l1.5 3.5L17 8l-3.5 1.5L12 13l-1.5-3.5L7 8l3.5-1.5z" />
      <path d="M5 16l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" />
      <path d="M19 16l.8 1.5 1.5.8-1.5.8-.8 1.5-.8-1.5-1.5-.8 1.5-.8z" />
    </svg>
  ),
};
