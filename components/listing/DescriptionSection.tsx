"use client";

import React, { useState } from "react";
import { ChevronRightIcon } from "@/components/icons/Icons";

interface DescriptionSectionProps {
  translationNotice: string;
  body: string;
}

export const DescriptionSection: React.FC<DescriptionSectionProps> = ({
  translationNotice,
  body,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section aria-labelledby="listing-description-heading" className="py-8 border-b border-[#DDDDDD]">
      <h2 id="listing-description-heading" className="sr-only">
        Description
      </h2>

      {/* Translation Notice */}
      <div className="bg-[#F7F7F7] rounded-[12px] p-4 mb-6 flex items-center justify-between text-sm">
        <span className="text-[#222222]">{translationNotice}</span>
        <button
          type="button"
          className="font-semibold underline text-[#222222] hover:opacity-80 focus:outline-none"
        >
          Show original
        </button>
      </div>

      {/* Description Content */}
      <div className="relative">
        <p
          className={`text-base text-[#222222] leading-6 ${
            !isExpanded ? "line-clamp-4" : ""
          }`}
        >
          {body}
        </p>
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 flex items-center gap-1 font-semibold text-base text-[#222222] underline hover:opacity-80 focus:outline-none"
        >
          <span>{isExpanded ? "Show less" : "Show more"}</span>
          <ChevronRightIcon size={14} className={isExpanded ? "-rotate-90" : ""} />
        </button>
      </div>
    </section>
  );
};
