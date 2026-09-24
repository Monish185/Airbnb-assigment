"use client";

import React, { useState, useEffect } from "react";

interface StickyHeaderProps {
  pricePerNight?: number;
  nights?: number;
  rating?: number;
  reviewsCount?: number;
  onReserveClick?: () => void;
}

export const StickyHeader: React.FC<StickyHeaderProps> = ({
  pricePerNight = 5700,
  nights = 5,
  rating = 4.95,
  reviewsCount = 19,
  onReserveClick,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("photos");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 500);

      // Section spy
      const locationEl = document.getElementById("location-section");
      const reviewsEl = document.getElementById("reviews-section");
      const amenitiesEl = document.getElementById("amenities-section");

      if (locationEl && scrollY >= locationEl.offsetTop - 120) {
        setActiveTab("location");
      } else if (reviewsEl && scrollY >= reviewsEl.offsetTop - 120) {
        setActiveTab("reviews");
      } else if (amenitiesEl && scrollY >= amenitiesEl.offsetTop - 120) {
        setActiveTab("amenities");
      } else {
        setActiveTab("photos");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const totalPrice = nights === 5 ? 28499 : pricePerNight * nights;

  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-[#EBEBEB] shadow-[0_2px_4px_rgba(0,0,0,0.04)] transition-all duration-200">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Navigation Anchors */}
        <nav className="flex items-center gap-6 h-full" aria-label="Listing navigation tabs">
          <button
            type="button"
            onClick={() => scrollTo("hero-photos-section")}
            className={`h-full flex items-center text-[14px] font-semibold border-b-[2px] transition-colors focus:outline-none ${
              activeTab === "photos"
                ? "border-[#222222] text-[#222222]"
                : "border-transparent text-[#717171] hover:text-[#222222]"
            }`}
          >
            Photos
          </button>
          <button
            type="button"
            onClick={() => scrollTo("amenities-section")}
            className={`h-full flex items-center text-[14px] font-semibold border-b-[2px] transition-colors focus:outline-none ${
              activeTab === "amenities"
                ? "border-[#222222] text-[#222222]"
                : "border-transparent text-[#717171] hover:text-[#222222]"
            }`}
          >
            Amenities
          </button>
          <button
            type="button"
            onClick={() => scrollTo("reviews-section")}
            className={`h-full flex items-center text-[14px] font-semibold border-b-[2px] transition-colors focus:outline-none ${
              activeTab === "reviews"
                ? "border-[#222222] text-[#222222]"
                : "border-transparent text-[#717171] hover:text-[#222222]"
            }`}
          >
            Reviews
          </button>
          <button
            type="button"
            onClick={() => scrollTo("location-section")}
            className={`h-full flex items-center text-[14px] font-semibold border-b-[2px] transition-colors focus:outline-none ${
              activeTab === "location"
                ? "border-[#222222] text-[#222222]"
                : "border-transparent text-[#717171] hover:text-[#222222]"
            }`}
          >
            Location
          </button>
        </nav>

        {/* Right Info & Reserve Button */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="flex items-baseline gap-1 justify-end">
              <span className="text-[14px] font-bold text-[#222222]">
                ₹{(nights > 0 ? totalPrice : pricePerNight).toLocaleString("en-IN")}
              </span>
              <span className="text-[14px] text-[#717171] font-normal">
                {nights > 0 ? `for ${nights} nights` : "night"}
              </span>
            </div>
            <div className="flex items-center gap-1 text-[12px] text-[#222222] font-semibold justify-end mt-0.5">
              <span>★</span>
              <span>{rating.toFixed(2)}</span>
              <span className="text-[#717171] font-normal">·</span>
              <button
                type="button"
                onClick={() => scrollTo("reviews-section")}
                className="text-[#717171] font-normal underline hover:text-[#222222] focus:outline-none"
              >
                {reviewsCount} reviews
              </button>
            </div>
          </div>
          <button
            type="button"
            onClick={onReserveClick}
            className="bg-[#E00B41] hover:bg-[#D70466] text-white font-bold text-[14px] px-6 py-2.5 rounded-full hover:opacity-95 active:scale-[0.98] transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-black"
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
};
