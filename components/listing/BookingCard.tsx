"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@/components/icons/Icons";

interface BookingCardProps {
  pricePerNight: number;
  nights: number;
  cleaningFee: number;
  serviceFee: number;
  checkInDate: string;
  checkoutDate: string;
  onReserveClick?: () => void;
}

export const BookingCard: React.FC<BookingCardProps> = ({
  pricePerNight,
  nights,
  cleaningFee,
  serviceFee,
  checkInDate,
  checkoutDate,
  onReserveClick,
}) => {
  const [guestsCount, setGuestsCount] = useState(1);
  const [showGuestsDropdown, setShowGuestsDropdown] = useState(false);

  const accommodationTotal = pricePerNight * nights;
  const totalBeforeTaxes = accommodationTotal + cleaningFee + serviceFee;

  return (
    <aside
      aria-label="Booking and reservation card"
      className="sticky top-28 bg-white border border-[#DDDDDD] rounded-[12px] p-6 shadow-[0_6px_16px_rgba(0,0,0,0.12)] space-y-6"
    >
      {/* Promo banner */}
      <div className="bg-[#F7F7F7] border border-[#EBEBEB] rounded-[10px] p-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 flex-shrink-0">
            <Image
              src="https://airbnbproj-iota.vercel.app/images/promo_tag.png"
              alt="Promo tag"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <div>
            <div className="text-xs font-semibold text-[#222222]">
              Get 10% off your next stay.
            </div>
            <div className="text-[11px] text-[#717171]">Terms apply</div>
          </div>
        </div>
        <button
          type="button"
          className="text-xs font-semibold underline text-[#222222] hover:opacity-80 focus:outline-none"
        >
          Claim
        </button>
      </div>

      {/* Pricing Header */}
      <div className="flex items-baseline gap-1.5">
        <span className="text-[22px] leading-[26px] font-bold text-[#222222]">
          ₹{accommodationTotal.toLocaleString("en-IN")}
        </span>
        <span className="text-base text-[#717171]">for {nights} nights</span>
      </div>

      {/* Date & Guest Input Box */}
      <div className="border border-[#B0B0B0] rounded-[8px] overflow-hidden text-xs">
        <div className="grid grid-cols-2 border-b border-[#B0B0B0]">
          <div className="p-3 border-r border-[#B0B0B0] focus-within:ring-2 focus-within:ring-black">
            <label className="block text-[10px] font-bold text-[#222222] uppercase tracking-wider">
              CHECK-IN
            </label>
            <span className="text-sm text-[#222222] font-normal">{checkInDate}</span>
          </div>
          <div className="p-3 focus-within:ring-2 focus-within:ring-black">
            <label className="block text-[10px] font-bold text-[#222222] uppercase tracking-wider">
              CHECKOUT
            </label>
            <span className="text-sm text-[#222222] font-normal">{checkoutDate}</span>
          </div>
        </div>

        {/* Guests selector */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowGuestsDropdown(!showGuestsDropdown)}
            className="w-full p-3 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-black"
          >
            <div>
              <span className="block text-[10px] font-bold text-[#222222] uppercase tracking-wider">
                GUESTS
              </span>
              <span className="text-sm text-[#222222] font-normal">
                {guestsCount} {guestsCount === 1 ? "guest" : "guests"}
              </span>
            </div>
            <ChevronDownIcon size={14} className={showGuestsDropdown ? "rotate-180" : ""} />
          </button>

          {showGuestsDropdown && (
            <div className="absolute top-full left-0 right-0 z-20 bg-white border border-[#DDDDDD] rounded-b-[8px] p-4 shadow-lg flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-[#222222]">Adults</div>
                <div className="text-xs text-[#717171]">Age 13+</div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  disabled={guestsCount <= 1}
                  onClick={() => setGuestsCount((g) => Math.max(1, g - 1))}
                  className="w-8 h-8 rounded-full border border-[#B0B0B0] disabled:opacity-30 flex items-center justify-center text-lg"
                >
                  -
                </button>
                <span className="text-sm font-semibold">{guestsCount}</span>
                <button
                  type="button"
                  disabled={guestsCount >= 3}
                  onClick={() => setGuestsCount((g) => Math.min(3, g + 1))}
                  className="w-8 h-8 rounded-full border border-[#B0B0B0] disabled:opacity-30 flex items-center justify-center text-lg"
                >
                  +
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Reserve Button */}
      <div>
        <button
          type="button"
          onClick={onReserveClick}
          className="w-full bg-gradient-to-r from-[#E61E4D] to-[#D70466] text-white font-semibold text-base py-3.5 rounded-[8px] hover:opacity-95 active:scale-[0.98] transition-all focus-visible:ring-2 focus-visible:ring-black"
        >
          Reserve
        </button>
        <p className="text-center text-sm text-[#717171] mt-3">
          You won&apos;t be charged yet
        </p>
      </div>

      {/* Cost Breakdown */}
      <div className="space-y-3 pt-3 text-sm text-[#222222]">
        <div className="flex justify-between items-center">
          <span className="underline">
            ₹{pricePerNight.toLocaleString("en-IN")} x {nights} nights
          </span>
          <span>₹{accommodationTotal.toLocaleString("en-IN")}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="underline">Cleaning fee</span>
          <span>₹{cleaningFee.toLocaleString("en-IN")}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="underline">Airbnb service fee</span>
          <span>₹{serviceFee.toLocaleString("en-IN")}</span>
        </div>

        <div className="border-t border-[#EBEBEB] pt-4 flex justify-between items-center text-base font-bold">
          <span>Total before taxes</span>
          <span>₹{totalBeforeTaxes.toLocaleString("en-IN")}</span>
        </div>
      </div>
    </aside>
  );
};
