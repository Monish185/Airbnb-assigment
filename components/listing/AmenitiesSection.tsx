import React from "react";
import { AmenityIcons } from "../icons/Icons";

interface Amenity {
  name: string;
  category: string;
  icon: string;
}

interface AmenitiesSectionProps {
  amenities: Amenity[];
  onShowAllAmenities?: () => void;
}

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({
  amenities,
  onShowAllAmenities,
}) => {
  return (
    <section id="amenities-section" aria-labelledby="amenities-heading" className="py-8 border-b border-[#DDDDDD]">
      <h2 id="amenities-heading" className="text-[22px] leading-[26px] font-semibold text-[#222222] mb-6">
        What this place offers
      </h2>

      <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-8">
        {amenities.map((item, idx) => {
          const Icon = AmenityIcons[item.icon] || AmenityIcons["kitchen"];
          return (
            <div key={idx} className="flex items-center gap-4 text-[#222222]">
              <div className="flex-shrink-0">
                <Icon size={24} />
              </div>
              <span className="text-base text-[#222222] font-normal">{item.name}</span>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        onClick={onShowAllAmenities}
        className="border border-[#222222] text-[#222222] font-semibold text-base py-3 px-6 rounded-[8px] hover:bg-[#F7F7F7] active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-black"
      >
        Show all 50 amenities
      </button>
    </section>
  );
};
