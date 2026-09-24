import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

export const AirbnbLogo: React.FC<IconProps> = ({ size = 32, className = "text-[#FF385C]" }) => (
  <svg
    viewBox="0 0 320.1 99.9"
    width={102}
    height={size}
    className={className}
    fill="currentColor"
    aria-label="Airbnb homepage"
    role="img"
  >
    <path d="M168.7,25.1c0,3.6-2.9,6.5-6.5,6.5s-6.5-2.9-6.5-6.5s2.8-6.5,6.5-6.5C165.9,18.7,168.7,21.6,168.7,25.1z M141.9,38.2c0,0.6,0,1.6,0,1.6s-3.1-4-9.7-4c-10.9,0-19.4,8.3-19.4,19.8c0,11.4,8.4,19.8,19.4,19.8c6.7,0,9.7-4.1,9.7-4.1v1.7 c0,0.8,0.6,1.4,1.4,1.4h8.1V36.8c0,0-7.4,0-8.1,0C142.5,36.8,141.9,37.5,141.9,38.2z M141.9,62.3c-1.5,2.2-4.5,4.1-8.1,4.1 c-6.4,0-11.3-4-11.3-10.8s4.9-10.8,11.3-10.8c3.5,0,6.7,2,8.1,4.1V62.3z M157.4,36.8h9.6v37.6h-9.6V36.8z M300.8,35.8 c-6.6,0-9.7,4-9.7,4V18.7h-9.6v55.7c0,0,7.4,0,8.1,0c0.8,0,1.4-0.7,1.4-1.4v-1.7l0,0c0,0,3.1,4.1,9.7,4.1c10.9,0,19.4-8.4,19.4-19.8 C320.1,44.2,311.6,35.8,300.8,35.8z M299.2,66.3c-3.7,0-6.6-1.9-8.1-4.1V48.8c1.5-2,4.7-4.1,8.1-4.1c6.4,0,11.3,4,11.3,10.8 S305.6,66.3,299.2,66.3z M276.5,52.1v22.4h-9.6V53.2c0-6.2-2-8.7-7.4-8.7c-2.9,0-5.9,1.5-7.8,3.7v26.2h-9.6V36.8h7.6 c0.8,0,1.4,0.7,1.4,1.4v1.6c2.8-2.9,6.5-4,10.2-4c4.2,0,7.7,1.2,10.5,3.6C275.2,42.2,276.5,45.8,276.5,52.1z M218.8,35.8 c-6.6,0-9.7,4-9.7,4V18.7h-9.6v55.7c0,0,7.4,0,8.1,0c0.8,0,1.4-0.7,1.4-1.4v-1.7l0,0c0,0,3.1,4.1,9.7,4.1c10.9,0,19.4-8.4,19.4-19.8 C238.2,44.2,229.7,35.8,218.8,35.8z M217.2,66.3c-3.7,0-6.6-1.9-8.1-4.1V48.8c1.5-2,4.7-4.1,8.1-4.1c6.4,0,11.3,4,11.3,10.8 S223.6,66.3,217.2,66.3z M191.2,35.8c2.9,0,4.4,0.5,4.4,0.5v8.9c0,0-8-2.7-13,3v26.3h-9.6V36.8c0,0,7.4,0,8.1,0 c0.8,0,1.4,0.7,1.4,1.4v1.6C184.3,37.7,188.2,35.8,191.2,35.8z M91.5,71c-0.5-1.2-1-2.5-1.5-3.6c-0.8-1.8-1.6-3.5-2.3-5.1l-0.1-0.1 c-6.9-15-14.3-30.2-22.1-45.2l-0.3-0.6c-0.8-1.5-1.6-3.1-2.4-4.7c-1-1.8-2-3.7-3.6-5.5C56,2.2,51.4,0,46.5,0c-5,0-9.5,2.2-12.8,6 c-1.5,1.8-2.6,3.7-3.6,5.5c-0.8,1.6-1.6,3.2-2.4,4.7l-0.3,0.6C19.7,31.8,12.2,47,5.3,62l-0.1,0.2c-0.7,1.6-1.5,3.3-2.3,5.1 c-0.5,1.1-1,2.3-1.5,3.6c-1.3,3.7-1.7,7.2-1.2,10.8c1.1,7.5,6.1,13.8,13,16.6c2.6,1.1,5.3,1.6,8.1,1.6c0.8,0,1.8-0.1,2.6-0.2 c3.3-0.4,6.7-1.5,10-3.4c4.1-2.3,8-5.6,12.4-10.4c4.4,4.8,8.4,8.1,12.4,10.4c3.3,1.9,6.7,3,10,3.4c0.8,0.1,1.8,0.2,2.6,0.2 c2.8,0,5.6-0.5,8.1-1.6c7-2.8,11.9-9.2,13-16.6C93.2,78.2,92.8,74.7,91.5,71z M46.4,76.2c-5.4-6.8-8.9-13.2-10.1-18.6 c-0.5-2.3-0.6-4.3-0.3-6.1c0.2-1.6,0.8-3,1.6-4.2c1.9-2.7,5.1-4.4,8.8-4.4c3.7,0,7,1.6,8.8,4.4c0.8,1.2,1.4,2.6,1.6,4.2 c0.3,1.8,0.2,3.9-0.3,6.1C55.3,62.9,51.8,69.3,46.4,76.2z M86.3,80.9c-0.7,5.2-4.2,9.7-9.1,11.7c-2.4,1-5,1.3-7.6,1 c-2.5-0.3-5-1.1-7.6-2.6c-3.6-2-7.2-5.1-11.4-9.7c6.6-8.1,10.6-15.5,12.1-22.1c0.7-3.1,0.8-5.9,0.5-8.5c-0.4-2.5-1.3-4.8-2.7-6.8 c-3.1-4.5-8.3-7.1-14.1-7.1s-11,2.7-14.1,7.1c-1.4,2-2.3,4.3-2.7,6.8c-0.4,2.6-0.3,5.5,0.5,8.5c1.5,6.6,5.6,14.1,12.1,22.2 c-4.1,4.6-7.8,7.7-11.4,9.7c-2.6,1.5-5.1,2.3-7.6,2.6c-2.7,0.3-5.3-0.1-7.6-1c-4.9-2-8.4-6.5-9.1-11.7c-0.3-2.5-0.1-5,0.9-7.8 c0.3-1,0.8-2,1.3-3.2c0.7-1.6,1.5-3.3,2.3-5l0.1-0.2c6.9-14.9,14.3-30.1,22-44.9l0.3-0.6c0.8-1.5,1.6-3.1,2.4-4.6 c0.8-1.6,1.7-3.1,2.8-4.4c2.1-2.4,4.9-3.7,8-3.7c3.1,0,5.9,1.3,8,3.7c1.1,1.3,2,2.8,2.8,4.4c0.8,1.5,1.6,3.1,2.4,4.6l0.3,0.6 C67.7,34.8,75.1,50,82,64.9L82,65c0.8,1.6,1.5,3.4,2.3,5c0.5,1.2,1,2.2,1.3,3.2C86.4,75.8,86.7,78.3,86.3,80.9z" />
  </svg>
);

export const ShareIcon: React.FC<IconProps> = ({ size = 16, className = "" }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" className={className} aria-hidden="true">
    <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9M16 3v18M8 11l8-8 8 8" />
  </svg>
);

export const FlagIcon: React.FC<IconProps> = ({ size = 14, className = "" }) => (
  <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor" className={className} aria-hidden="true">
    <path d="M1 1h2v14H1V1zm3 1h10l-2 4 2 4H4V2z" />
  </svg>
);

export const HeartIcon: React.FC<IconProps & { filled?: boolean }> = ({ size = 16, className = "", filled = false }) => (
  <svg
    viewBox="0 0 32 32"
    width={size}
    height={size}
    fill={filled ? "#FF385C" : "none"}
    stroke={filled ? "#FF385C" : "currentColor"}
    strokeWidth="2.5"
    className={className}
    aria-hidden="true"
  >
    <path d="M16 28 C16 28 3 20.5 3 11.5 C3 7 6.5 3.5 11 3.5 C13.5 3.5 15.5 5 16 6.5 C16.5 5 18.5 3.5 21 3.5 C25.5 3.5 29 7 29 11.5 C29 20.5 16 28 16 28 Z" />
  </svg>
);

export const GridDotsIcon: React.FC<IconProps> = ({ size = 16, className = "" }) => (
  <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor" className={className} aria-hidden="true">
    <circle cx="2" cy="2" r="1.5" />
    <circle cx="8" cy="2" r="1.5" />
    <circle cx="14" cy="2" r="1.5" />
    <circle cx="2" cy="8" r="1.5" />
    <circle cx="8" cy="8" r="1.5" />
    <circle cx="14" cy="8" r="1.5" />
    <circle cx="2" cy="14" r="1.5" />
    <circle cx="8" cy="14" r="1.5" />
    <circle cx="14" cy="14" r="1.5" />
  </svg>
);

export const StarIcon: React.FC<IconProps> = ({ size = 14, className = "text-[#222222]" }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="currentColor" className={className} aria-hidden="true">
    <path d="M15.094 1.579l-4.124 8.885-9.76 1.274a1 1 0 0 0-.56 1.734l7.15 6.78-1.815 9.68a1 1 0 0 0 1.468 1.066L16 26.295l8.547 4.703a1 1 0 0 0 1.468-1.066l-1.815-9.68 7.15-6.78a1 1 0 0 0-.56-1.734l-9.76-1.274-4.124-8.885a1 1 0 0 0-1.812 0z" />
  </svg>
);

export const LaurelLeft: React.FC<IconProps> = ({ size = 48, className = "text-[#222222]" }) => (
  <svg viewBox="0 0 24 48" width={size * 0.5} height={size} fill="currentColor" className={className} aria-hidden="true">
    <path d="M21 44c-3.5-3.2-6.5-7.5-8.5-12.5C10.5 26.5 9.5 20.8 9.5 15c0-4 .5-8 1.5-11.8.3-1.1-.8-2-1.8-1.5C5 3.5 2 8.5 2 15c0 7.2 2 14.5 5.8 20.8 3.5 5.8 8.5 10.5 14.2 13.5.9.5 1.8-.4 1.2-1.3l-2.2-4z" />
    <path d="M12.5 10c-2.2-.5-4.2 1-4.7 3.2s1 4.2 3.2 4.7 4.2-1 4.7-3.2-1-4.2-3.2-4.7z" />
    <path d="M15 19.5c-2.2-.5-4.2 1-4.7 3.2s1 4.2 3.2 4.7 4.2-1 4.7-3.2-1-4.2-3.2-4.7z" />
    <path d="M18 29.5c-2.2-.5-4.2 1-4.7 3.2s1 4.2 3.2 4.7 4.2-1 4.7-3.2-1-4.2-3.2-4.7z" />
    <path d="M10 2.5C8 .5 5 1 4 3s1 4.5 3 5.5 5 0 6-2-1-3-3-4z" />
  </svg>
);

export const LaurelRight: React.FC<IconProps> = ({ size = 48, className = "text-[#222222]" }) => (
  <svg viewBox="0 0 24 48" width={size * 0.5} height={size} fill="currentColor" className={className} aria-hidden="true">
    <path d="M3 44c3.5-3.2 6.5-7.5 8.5-12.5C13.5 26.5 14.5 20.8 14.5 15c0-4-.5-8-1.5-11.8-.3-1.1.8-2 1.8-1.5 4.2 1.8 7.2 6.8 7.2 13.3 0 7.2-2 14.5-5.8 20.8-3.5 5.8-8.5 10.5-14.2 13.5-.9.5-1.8-.4-1.2-1.3l2.2-4z" />
    <path d="M11.5 10c2.2-.5 4.2 1 4.7 3.2s-1 4.2-3.2 4.7-4.2-1-4.7-3.2 1-4.2 3.2-4.7z" />
    <path d="M9 19.5c2.2-.5 4.2 1 4.7 3.2s-1 4.2-3.2 4.7-4.2-1-4.7-3.2 1-4.2 3.2-4.7z" />
    <path d="M6 29.5c2.2-.5 4.2 1 4.7 3.2s-1 4.2-3.2 4.7-4.2-1-4.7-3.2 1-4.2 3.2-4.7z" />
    <path d="M14 2.5C16 .5 19 1 20 3s-1 4.5-3 5.5-5 0-6-2 1-3 3-4z" />
  </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = ({ size = 16, className = "" }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" className={className} aria-hidden="true">
    <path d="m28 12-11.293 11.293a1 1 0 0 1-1.414 0L4 12" />
  </svg>
);

export const ChevronRightIcon: React.FC<IconProps> = ({ size = 16, className = "" }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" className={className} aria-hidden="true">
    <path d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28" />
  </svg>
);

export const ChevronLeftIcon: React.FC<IconProps> = ({ size = 16, className = "" }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" className={className} aria-hidden="true">
    <path d="m20 28-11.3-11.3a1 1 0 0 1 0-1.4L20 4" />
  </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ size = 16, className = "" }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" className={className} aria-hidden="true">
    <path d="m6 6 20 20M26 6 6 26" />
  </svg>
);

export const SearchIcon: React.FC<IconProps> = ({ size = 16, className = "" }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="3" className={className} aria-hidden="true">
    <path d="M14 24a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM21.5 21.5 29 29" />
  </svg>
);

export const GlobeIcon: React.FC<IconProps> = ({ size = 16, className = "" }) => (
  <svg viewBox="0 0 16 16" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
    <circle cx="8" cy="8" r="7" />
    <path d="M1 8h14M8 1c2.5 2.5 3.5 5 3.5 7s-1 4.5-3.5 7c-2.5-2.5-3.5-5-3.5-7s1-4.5 3.5-7z" />
  </svg>
);

export const MenuIcon: React.FC<IconProps> = ({ size = 16, className = "" }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="3" className={className} aria-hidden="true">
    <path d="M4 8h24M4 16h24M4 24h24" />
  </svg>
);

export const UserCircleIcon: React.FC<IconProps> = ({ size = 30, className = "text-[#717171]" }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="currentColor" className={className} aria-hidden="true">
    <path d="M16 2a14 14 0 1 0 0 28 14 14 0 0 0 0-28zm0 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 21.2a11.18 11.18 0 0 1-7.8-3.26c.07-2.6 5.2-4.04 7.8-4.04s7.73 1.44 7.8 4.04A11.18 11.18 0 0 1 16 28.2z" />
  </svg>
);

export const CheckIcon: React.FC<IconProps> = ({ size = 20, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const MinusIcon: React.FC<IconProps> = ({ size = 20, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export const AmenityIcons: Record<string, React.FC<IconProps>> = {
  kitchen: ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M4 6h24v20H4zM4 14h24M16 6v20M9 10h2M21 10h2" />
    </svg>
  ),
  wifi: ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M3 10c7.2-6 18.8-6 26 0M6 14.5c5.5-4.5 14.5-4.5 20 0M10 19c3.3-3 8.7-3 12 0M16 24.5a1.5 1.5 0 1 0 0 .01" />
    </svg>
  ),
  workspace: ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M4 22h24M6 22v6M26 22v6M8 8h16v14H8zM12 14h8" />
    </svg>
  ),
  parking: ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="13" />
      <path d="M12 9h6a4 4 0 0 1 0 8h-6v6" />
    </svg>
  ),
  pool: ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M3 21c3 2 6 2 9 0s6-2 9 0 6 2 9 0M3 26c3 2 6 2 9 0s6-2 9 0 6 2 9 0M18 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-4 4l3-3 4 4-2 3" />
    </svg>
  ),
  hottub: ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M4 14h24v10a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V14zM8 6c0 3 2 3 2 5M16 6c0 3 2 3 2 5M24 6c0 3 2 3 2 5" />
    </svg>
  ),
  pets: ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <circle cx="10" cy="9" r="3" />
      <circle cx="22" cy="9" r="3" />
      <circle cx="6" cy="16" r="2.5" />
      <circle cx="26" cy="16" r="2.5" />
      <path d="M16 16c-4 0-7 3-7 7 0 3 3 5 7 5s7-2 7-5c0-4-3-7-7-7z" />
    </svg>
  ),
  camera: ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M5 10h5l2-3h8l2 3h5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2z" />
      <circle cx="16" cy="18" r="5" />
    </svg>
  ),
  alarm: ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M16 4a12 12 0 1 0 12 12A12 12 0 0 0 16 4zm0 6v6l4 2M5 3l4 3M27 3l-4 3" />
    </svg>
  ),
  ac: ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <rect x="4" y="8" width="24" height="12" rx="2" />
      <path d="M8 24c2-2 4 0 6-2M18 24c2-2 4 0 6-2" />
    </svg>
  ),
  key: ({ size = 24, className = "" }) => (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <circle cx="12" cy="16" r="6" />
      <path d="M18 16h10v4h-3v3h-3v-7" />
    </svg>
  ),
};
