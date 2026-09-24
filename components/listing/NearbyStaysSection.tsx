import React from "react";
import Image from "next/image";
import { StarIcon, HeartIcon } from "../icons/Icons";
import { NearbyStay } from "../../data/listing";

interface NearbyStaysSectionProps {
  stays: NearbyStay[];
}

export const NearbyStaysSection: React.FC<NearbyStaysSectionProps> = ({ stays }) => {
  return (
    <section aria-labelledby="nearby-stays-heading" className="py-10 border-b border-[#DDDDDD]">
      <div className="flex items-center justify-between mb-6">
        <h2 id="nearby-stays-heading" className="text-[22px] leading-[26px] font-semibold text-[#222222]">
          More stays nearby
        </h2>
        <span className="text-sm text-[#717171]">1 / 2</span>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {stays.map((stay) => (
          <div key={stay.id} className="group cursor-pointer">
            <div className="relative aspect-[4/3] rounded-[12px] overflow-hidden bg-gray-100 mb-3">
              <Image
                src={stay.image}
                alt={stay.title}
                fill
                sizes="(max-width: 1120px) 50vw, 550px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button
                type="button"
                aria-label={`Save ${stay.title}`}
                className="absolute top-3 right-3 text-white p-2 rounded-full hover:scale-110 active:scale-95 transition-transform focus:outline-none"
              >
                <HeartIcon size={20} className="stroke-white fill-black/30" />
              </button>
            </div>

            <div className="flex items-baseline justify-between text-sm">
              <h3 className="font-semibold text-[#222222] truncate max-w-[80%]">
                {stay.title}
              </h3>
              <div className="flex items-center gap-1 font-semibold text-[#222222]">
                <StarIcon size={11} />
                <span>{stay.rating.toFixed(2)}</span>
              </div>
            </div>

            <div className="text-sm mt-1">
              <span className="font-semibold text-[#222222]">
                ₹{stay.pricePerNight.toLocaleString("en-IN")}
              </span>{" "}
              <span className="text-[#717171]">night</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
