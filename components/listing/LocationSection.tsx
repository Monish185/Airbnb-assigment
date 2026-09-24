"use client";

import React from "react";
import Image from "next/image";
import { ChevronRightIcon } from "@/components/icons/Icons";

interface LocationSectionProps {
  locationName: string;
  description: string;
}

export const LocationSection: React.FC<LocationSectionProps> = ({
  locationName,
  description,
}) => {
  return (
    <section id="location-section" aria-labelledby="location-heading" className="py-8 border-b border-[#DDDDDD]">
      <h2 id="location-heading" className="text-[22px] leading-[26px] font-semibold text-[#222222] mb-1">
        Where you’ll be
      </h2>
      <p className="text-base text-[#222222] mb-6">{locationName}</p>

      {/* Styled Interactive Map Container */}
      <div className="relative w-full h-[480px] rounded-[16px] overflow-hidden border border-[#DDDDDD] bg-[#E5E3DF] mb-6">
        {/* OpenStreetMap Map Background Tiles */}
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-2">
          <div className="relative w-full h-full">
            <Image
              src="https://c.tile.openstreetmap.org/14/11549/7476.png"
              alt="Map area"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-full">
            <Image
              src="https://a.tile.openstreetmap.org/14/11550/7476.png"
              alt="Map area"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-full">
            <Image
              src="https://b.tile.openstreetmap.org/14/11551/7476.png"
              alt="Map area"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-full">
            <Image
              src="https://a.tile.openstreetmap.org/14/11549/7477.png"
              alt="Map area"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-full">
            <Image
              src="https://b.tile.openstreetmap.org/14/11550/7477.png"
              alt="Map area"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-full">
            <Image
              src="https://c.tile.openstreetmap.org/14/11551/7477.png"
              alt="Map area"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Airbnb Location Pin */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative flex items-center justify-center">
            {/* Outer halo */}
            <div className="w-24 h-24 rounded-full bg-[#FF385C]/20 animate-pulse flex items-center justify-center">
              {/* Inner pin circle */}
              <div className="w-12 h-12 rounded-full bg-[#FF385C] shadow-lg flex items-center justify-center text-white border-2 border-white">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Map Attribution */}
        <div className="absolute bottom-2 right-2 bg-white/80 text-[11px] px-2 py-0.5 rounded text-[#717171]">
          Leaflet | © OpenStreetMap contributors
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-base text-[#222222] font-medium">
          Exact location will be provided after booking.
        </p>

        <div>
          <h3 className="text-base font-semibold text-[#222222] mb-1">
            Neighbourhood highlights
          </h3>
          <p className="text-base text-[#717171] leading-6">
            {description}
          </p>
          <button
            type="button"
            className="mt-2 flex items-center gap-1 font-semibold text-base text-[#222222] underline hover:opacity-80 focus:outline-none"
          >
            <span>Show more</span>
            <ChevronRightIcon size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};
