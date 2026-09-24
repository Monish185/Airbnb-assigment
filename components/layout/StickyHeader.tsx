"use client";

import React, { useState, useEffect } from "react";
import { StarIcon } from "../icons/Icons";

interface StickyHeaderProps {
  onReserveClick?: () => void;
}

export const StickyHeader: React.FC<StickyHeaderProps> = ({ onReserveClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("photos");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 550);

      // Section spy
      const amenitiesEl = document.getElementById("amenities-section");
      const reviewsEl = document.getElementById("reviews-section");
      const locationEl = document.getElementById("location-section");

      if (locationEl && scrollY >= locationEl.offsetTop - 150) {
        setActiveTab("location");
      } else if (reviewsEl && scrollY >= reviewsEl.offsetTop - 150) {
        setActiveTab("reviews");
      } else if (amenitiesEl && scrollY >= amenitiesEl.offsetTop - 150) {
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

  return (
    <div className="fixed top-0 left-0 right-0 z-30 bg-white border-b border-[#DDDDDD] transition-all duration-200">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Navigation Anchors */}
        <nav className="flex items-center gap-6 h-full" aria-label="Listing navigation tabs">
          <button
            type="button"
            onClick={() => scrollTo("hero-photos-section")}
            className={`h-full flex items-center text-sm font-semibold border-b-2 transition-colors ${
              activeTab === "photos"
                ? "border-black text-[#222222]"
                : "border-transparent text-[#717171] hover:text-[#222222]"
            }`}
          >
            Photos
          </button>
          <button
            type="button"
            onClick={() => scrollTo("amenities-section")}
            className={`h-full flex items-center text-sm font-semibold border-b-2 transition-colors ${
              activeTab === "amenities"
                ? "border-black text-[#222222]"
                : "border-transparent text-[#717171] hover:text-[#222222]"
            }`}
          >
            Amenities
          </button>
          <button
            type="button"
            onClick={() => scrollTo("reviews-section")}
            className={`h-full flex items-center text-sm font-semibold border-b-2 transition-colors ${
              activeTab === "reviews"
                ? "border-black text-[#222222]"
                : "border-transparent text-[#717171] hover:text-[#222222]"
            }`}
          >
            Reviews
          </button>
          <button
            type="button"
            onClick={() => scrollTo("location-section")}
            className={`h-full flex items-center text-sm font-semibold border-b-2 transition-colors ${
              activeTab === "location"
                ? "border-black text-[#222222]"
                : "border-transparent text-[#717171] hover:text-[#222222]"
            }`}
          >
            Location
          </button>
        </nav>

        {/* Right Info & Reserve Button */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="flex items-center gap-1.5 justify-end">
              <span className="text-base font-semibold text-[#222222]">₹28,500</span>
              <span className="text-sm text-[#717171]">for 5 nights</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-[#222222] font-semibold justify-end">
              <StarIcon size={10} />
              <span>4.95</span>
              <span className="text-[#717171] font-normal">(19)</span>
            </div>
          </div>
          <button
            type="button"
            onClick={onReserveClick}
            className="bg-gradient-to-r from-[#E61E4D] to-[#D70466] text-white font-semibold text-sm px-6 py-3 rounded-lg hover:opacity-95 active:scale-95 transition-all shadow-sm"
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
};
