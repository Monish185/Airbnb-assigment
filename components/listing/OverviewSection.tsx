import React from "react";
import Image from "next/image";
import { StarIcon, LaurelLeft, LaurelRight } from "../icons/Icons";

interface OverviewSectionProps {
  propertyType: string;
  guestsCount: number;
  bedroomsCount: number;
  bedsCount: number;
  bathroomsCount: number;
  rating: number;
  reviewsCount: number;
  isGuestFavourite: boolean;
  host: {
    name: string;
    avatar: string;
    yearsHosting: number;
  };
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({
  propertyType,
  guestsCount,
  bedroomsCount,
  bedsCount,
  bathroomsCount,
  rating,
  reviewsCount,
  isGuestFavourite,
  host,
}) => {
  return (
    <section aria-labelledby="property-overview-heading" className="py-6 border-b border-[#DDDDDD]">
      {/* Title & Fact Line */}
      <h2 id="property-overview-heading" className="text-[22px] leading-[26px] font-semibold text-[#222222]">
        {propertyType}
      </h2>
      <p className="text-base text-[#717171] mt-1">
        {guestsCount} guests · {bedroomsCount} bedroom · {bedsCount} bed · {bathroomsCount} bathroom
      </p>

      {/* Guest Favourite Card */}
      {isGuestFavourite && (
        <div className="mt-6 border border-[#DDDDDD] rounded-[12px] p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LaurelLeft size={36} className="text-[#222222]" />
            <div className="text-center">
              <span className="block text-base font-semibold leading-tight text-[#222222]">Guest</span>
              <span className="block text-base font-semibold leading-tight text-[#222222]">favourite</span>
            </div>
            <LaurelRight size={36} className="text-[#222222]" />
            <span className="text-base text-[#222222] font-medium ml-2">
              One of the most loved homes on Airbnb, according to guests
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-lg font-bold text-[#222222]">{rating.toFixed(2)}</div>
              <div className="flex justify-center text-xs mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} size={10} />
                ))}
              </div>
            </div>
            <div className="w-[1px] h-10 bg-[#DDDDDD]" aria-hidden="true" />
            <div className="text-center">
              <div className="text-lg font-bold text-[#222222]">{reviewsCount}</div>
              <div className="text-xs text-[#717171] underline cursor-pointer">Reviews</div>
            </div>
          </div>
        </div>
      )}

      {/* Host Row */}
      <div className="flex items-center gap-4 mt-6">
        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
          <Image
            src={host.avatar}
            alt={host.name}
            fill
            sizes="40px"
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="text-base font-semibold text-[#222222]">
            Hosted by {host.name}
          </h3>
          <p className="text-sm text-[#717171]">
            {host.yearsHosting} years hosting
          </p>
        </div>
      </div>
    </section>
  );
};
