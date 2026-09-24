import React from "react";
import Image from "next/image";
import { StarIcon, LaurelLeft, LaurelRight } from "../icons/Icons";
import { ReviewItem } from "../../data/listing";

interface ReviewsSectionProps {
  rating: number;
  reviewsCount: number;
  isGuestFavourite: boolean;
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
  onShowAllReviews?: () => void;
}

// Category Icons
const SprayBottleIcon = ({ size = 24 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 6V3.5h-4V6" />
    <path d="M10 3.5L7 5.5v2h7" />
    <path d="M8 8.5h8l-1 12H9L8 8.5z" />
    <circle cx="19" cy="6" r="0.75" fill="currentColor" />
    <circle cx="21" cy="9" r="0.75" fill="currentColor" />
    <circle cx="18" cy="11" r="0.75" fill="currentColor" />
  </svg>
);

const CircleCheckIcon = ({ size = 24 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const KeyIcon = ({ size = 24 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" />
    <path d="m21 2-9.6 9.6" />
    <circle cx="7.5" cy="15.5" r="5.5" />
  </svg>
);

const SpeechBubbleIcon = ({ size = 24 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const FoldedMapIcon = ({ size = 24 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
    <line x1="9" y1="3" x2="9" y2="18" />
    <line x1="15" y1="6" x2="15" y2="21" />
  </svg>
);

const PriceTagIcon = ({ size = 24 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
    <circle cx="7.5" cy="7.5" r=".75" fill="currentColor" />
  </svg>
);

// Tag Pill Icons
const ComfortTagIcon = () => (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#008A05]">
    <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
    <path d="M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" />
    <path d="M5 18v2M19 18v2" />
  </svg>
);

const AccuracyTagIcon = () => (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#008A05]">
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const HotTubTagIcon = () => (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#A84900]">
    <path d="M4 12h16v4a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-4z" />
    <path d="M7 8c.5-1 1.5-1 2 0M12 8c.5-1 1.5-1 2 0M17 8c.5-1 1.5-1 2 0" />
  </svg>
);

const ConditionTagIcon = () => (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E61E4D]">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const HospitalityTagIcon = () => (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#C13584]">
    <polyline points="20 12 20 22 4 22 4 12" />
    <rect x="2" y="7" width="20" height="5" />
    <line x1="12" y1="22" x2="12" y2="7" />
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
  </svg>
);

const CleanlinessTagIcon = () => (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#008489]">
    <path d="M14 6V3.5h-4V6" />
    <path d="M10 3.5L7 5.5v2h7" />
    <path d="M8 8.5h8l-1 12H9L8 8.5z" />
  </svg>
);

const AmenitiesTagIcon = () => (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#717171]">
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <line x1="12" y1="11" x2="12" y2="15" />
  </svg>
);

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  rating,
  reviewsCount,
  ratingsBreakdown,
  reviewTags,
  reviews,
  onShowAllReviews,
}) => {
  return (
    <section id="reviews-section" aria-labelledby="reviews-heading" className="py-10 border-b border-[#DDDDDD]">
      {/* Top Right: Report this listing */}
      <div className="flex justify-end mb-4">
        <button
          type="button"
          className="flex items-center gap-1.5 text-[14px] text-[#222222] underline font-semibold hover:opacity-80 transition-opacity"
        >
          <svg viewBox="0 0 16 16" width={14} height={14} fill="currentColor" aria-hidden="true">
            <path d="M1 1h2v14H1V1zm3 1h10l-2 4 2 4H4V2z" />
          </svg>
          Report this listing
        </button>
      </div>

      {/* Big Rating Banner */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-4">
          <LaurelLeft size={72} className="text-[#222222]" />
          <div className="text-6xl md:text-7xl font-bold tracking-tighter text-[#222222]">
            {rating.toFixed(2)}
          </div>
          <LaurelRight size={72} className="text-[#222222]" />
        </div>
        <h3 className="text-[22px] font-semibold text-[#222222] mt-3">
          Guest favourite
        </h3>
        <p className="text-[16px] text-[#6A6A6A] mt-1 max-w-md mx-auto">
          This home is a guest favourite based on ratings, reviews and reliability
        </p>
        <button
          type="button"
          className="text-[14px] font-semibold text-[#222222] underline mt-2 hover:opacity-80 transition-opacity"
        >
          How reviews work
        </button>
      </div>

      {/* 7-Column Ratings Breakdown Grid */}
      <div
        id="ratings-categories-grid"
        className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 py-8 border-y border-[#EBEBEB] my-8"
      >
        {/* 1. Overall rating */}
        <div className="pr-4 border-r border-[#DDDDDD]">
          <div className="text-[12px] font-semibold text-[#222222] mb-3">
            Overall rating
          </div>
          <div className="space-y-1.5">
            {[
              { star: 5, pct: "95%" },
              { star: 4, pct: "5%" },
              { star: 3, pct: "0%" },
              { star: 2, pct: "0%" },
              { star: 1, pct: "0%" },
            ].map(({ star, pct }) => (
              <div key={star} className="flex items-center gap-2 text-[12px] font-semibold text-[#222222]">
                <span className="w-2 text-right">{star}</span>
                <div className="flex-1 h-1.5 bg-[#DDDDDD] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#222222] rounded-full"
                    style={{ width: pct }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Cleanliness */}
        <div className="flex flex-col justify-between px-3 border-r border-[#DDDDDD]">
          <div>
            <div className="text-[14px] font-semibold text-[#222222]">Cleanliness</div>
            <div className="text-[18px] font-bold text-[#222222] mt-1">
              {ratingsBreakdown.cleanliness.toFixed(1)}
            </div>
          </div>
          <div className="w-6 h-6 text-[#222222] mt-4 flex items-center justify-center">
            <SprayBottleIcon size={24} />
          </div>
        </div>

        {/* 3. Accuracy */}
        <div className="flex flex-col justify-between px-3 border-r border-[#DDDDDD]">
          <div>
            <div className="text-[14px] font-semibold text-[#222222]">Accuracy</div>
            <div className="text-[18px] font-bold text-[#222222] mt-1">
              {ratingsBreakdown.accuracy.toFixed(1)}
            </div>
          </div>
          <div className="w-6 h-6 text-[#222222] mt-4 flex items-center justify-center">
            <CircleCheckIcon size={24} />
          </div>
        </div>

        {/* 4. Check-in */}
        <div className="flex flex-col justify-between px-3 border-r border-[#DDDDDD]">
          <div>
            <div className="text-[14px] font-semibold text-[#222222]">Check-in</div>
            <div className="text-[18px] font-bold text-[#222222] mt-1">
              {ratingsBreakdown.checkIn.toFixed(1)}
            </div>
          </div>
          <div className="w-6 h-6 text-[#222222] mt-4 flex items-center justify-center">
            <KeyIcon size={24} />
          </div>
        </div>

        {/* 5. Communication */}
        <div className="flex flex-col justify-between px-3 border-r border-[#DDDDDD]">
          <div>
            <div className="text-[14px] font-semibold text-[#222222]">Communication</div>
            <div className="text-[18px] font-bold text-[#222222] mt-1">
              {ratingsBreakdown.communication.toFixed(1)}
            </div>
          </div>
          <div className="w-6 h-6 text-[#222222] mt-4 flex items-center justify-center">
            <SpeechBubbleIcon size={24} />
          </div>
        </div>

        {/* 6. Location */}
        <div className="flex flex-col justify-between px-3 border-r border-[#DDDDDD]">
          <div>
            <div className="text-[14px] font-semibold text-[#222222]">Location</div>
            <div className="text-[18px] font-bold text-[#222222] mt-1">
              {ratingsBreakdown.location.toFixed(1)}
            </div>
          </div>
          <div className="w-6 h-6 text-[#222222] mt-4 flex items-center justify-center">
            <FoldedMapIcon size={24} />
          </div>
        </div>

        {/* 7. Value */}
        <div className="flex flex-col justify-between px-3">
          <div>
            <div className="text-[14px] font-semibold text-[#222222]">Value</div>
            <div className="text-[18px] font-bold text-[#222222] mt-1">
              {ratingsBreakdown.value.toFixed(1)}
            </div>
          </div>
          <div className="w-6 h-6 text-[#222222] mt-4 flex items-center justify-center">
            <PriceTagIcon size={24} />
          </div>
        </div>
      </div>

      {/* Review Filter Tags Row */}
      <div className="flex items-center gap-2 overflow-x-auto py-6 no-scrollbar mb-8">
        {reviewTags.map((tag) => {
          const renderTagIcon = () => {
            switch (tag.label) {
              case "Comfort":
                return <ComfortTagIcon />;
              case "Accuracy":
                return <AccuracyTagIcon />;
              case "Hot tub":
                return <HotTubTagIcon />;
              case "Condition":
                return <ConditionTagIcon />;
              case "Hospitality":
                return <HospitalityTagIcon />;
              case "Cleanliness":
                return <CleanlinessTagIcon />;
              case "Amenities":
                return <AmenitiesTagIcon />;
              default:
                return null;
            }
          };

          return (
            <button
              key={tag.label}
              type="button"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-[14px] font-semibold whitespace-nowrap transition-all border bg-white hover:bg-[#F7F7F7] text-[#222222] border-[#DDDDDD]"
            >
              {renderTagIcon()}
              <span>{tag.label} {tag.count}</span>
            </button>
          );
        })}
      </div>

      {/* 2-Column Review Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-20 mb-8">
        {reviews.map((r) => (
          <div key={r.id} className="space-y-3">
            {/* Reviewer Header */}
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                <Image
                  src={r.avatar}
                  alt={r.author}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-base font-semibold text-[#222222] leading-tight">
                  {r.author}
                </h4>
                <p className="text-xs text-[#717171]">
                  {r.durationOnAirbnb}
                </p>
              </div>
            </div>

            {/* Star & Date */}
            <div className="flex items-center gap-2 text-xs text-[#222222] font-semibold">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} size={10} />
                ))}
              </div>
              <span className="text-[#717171]">·</span>
              <span className="font-normal text-[#222222]">{r.date}</span>
            </div>

            {/* Review Text */}
            <p className="text-base text-[#222222] leading-6">
              {r.comment}
            </p>
          </div>
        ))}
      </div>

      {/* "Show all reviews" Button */}
      <button
        type="button"
        onClick={onShowAllReviews}
        className="border border-[#222222] text-[#222222] font-semibold text-base py-3 px-6 rounded-[8px] hover:bg-[#F7F7F7] active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-black"
      >
        Show all {reviewsCount} reviews
      </button>
    </section>
  );
};
