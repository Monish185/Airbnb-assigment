"use client";

import React, { useState } from "react";
import { ShareIcon, HeartIcon } from "../icons/Icons";

interface TitleSectionProps {
  title: string;
  onShareClick?: () => void;
}

export const TitleSection: React.FC<TitleSectionProps> = ({
  title,
  onShareClick,
}) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href).catch(() => {});
    }
    if (onShareClick) {
      onShareClick();
    }
  };

  return (
    <div className="pt-6 pb-4">
      <div className="flex items-start justify-between gap-4">
        {/* Main H1 */}
        <h1 className="text-[26px] leading-[30px] font-semibold text-[#222222]">
          {title}
        </h1>

        {/* Share & Save Actions */}
        <div className="flex items-center gap-2 relative flex-shrink-0">
          <button
            type="button"
            onClick={handleShare}
            className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-[#F7F7F7] text-sm font-semibold text-[#222222] transition-colors focus-visible:ring-2 focus-visible:ring-black underline"
            aria-label="Share this listing"
          >
            <ShareIcon size={16} />
            <span>Share</span>
          </button>

          <button
            type="button"
            onClick={() => setIsSaved(!isSaved)}
            className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-[#F7F7F7] text-sm font-semibold text-[#222222] transition-colors focus-visible:ring-2 focus-visible:ring-black underline"
            aria-label={isSaved ? "Saved to wishlist" : "Save this listing"}
          >
            <HeartIcon size={16} filled={isSaved} />
            <span>{isSaved ? "Saved" : "Save"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
