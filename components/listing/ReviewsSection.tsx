import React from "react";
import Image from "next/image";
import { StarIcon, LaurelLeft, LaurelRight } from "@/components/icons/Icons";
import { ReviewItem } from "@/data/listing";

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

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  rating,
  reviewsCount,
  ratingsBreakdown,
  reviewTags,
  reviews,
  onShowAllReviews,
}) => {
  const categories = [
    { label: "Cleanliness", score: ratingsBreakdown.cleanliness },
    { label: "Accuracy", score: ratingsBreakdown.accuracy },
    { label: "Check-in", score: ratingsBreakdown.checkIn },
    { label: "Communication", score: ratingsBreakdown.communication },
    { label: "Location", score: ratingsBreakdown.location },
    { label: "Value", score: ratingsBreakdown.value },
  ];

  return (
    <section id="reviews-section" aria-labelledby="reviews-heading" className="py-10 border-b border-[#DDDDDD]">
      {/* Big Rating Banner */}
      <div className="flex items-center justify-center gap-6 mb-8">
        <LaurelLeft size={60} className="text-[#222222]" />
        <div className="text-center">
          <div className="text-[96px] leading-[96px] font-bold text-[#222222] tracking-tighter">
            {rating.toFixed(2)}
          </div>
          <div className="text-xl font-bold text-[#222222] mt-1">
            Guest favourite
          </div>
          <p className="text-base text-[#717171] max-w-sm mt-1">
            This home is a guest favourite based on ratings, reviews and reliability
          </p>
        </div>
        <LaurelRight size={60} className="text-[#222222]" />
      </div>

      {/* Ratings Breakdown Grid */}
      <div className="grid grid-cols-6 gap-4 border-y border-[#DDDDDD] py-6 mb-8">
        {categories.map((cat, idx) => (
          <div key={idx} className="border-r last:border-r-0 border-[#DDDDDD] px-4 first:pl-0">
            <div className="text-sm font-semibold text-[#222222]">{cat.label}</div>
            <div className="text-base font-bold text-[#222222] mt-1">
              {cat.score.toFixed(1)}
            </div>
          </div>
        ))}
      </div>

      {/* Review Filter Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {reviewTags.map((tag, idx) => (
          <button
            key={idx}
            type="button"
            className="border border-[#DDDDDD] rounded-full py-2 px-4 text-sm font-medium text-[#222222] hover:border-black transition-colors"
          >
            {tag.label} ({tag.count})
          </button>
        ))}
      </div>

      {/* 2-Column Review Cards Grid */}
      <div className="grid grid-cols-2 gap-y-10 gap-x-20 mb-8">
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
                <h3 className="text-base font-semibold text-[#222222] leading-tight">
                  {r.author}
                </h3>
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
