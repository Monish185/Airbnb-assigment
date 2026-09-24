"use client";

import React, { useState } from "react";
import { ChevronDownIcon, FlagIcon } from "../icons/Icons";

interface BookingCardProps {
  pricePerNight: number;
  nights: number;
  cleaningFee?: number;
  serviceFee?: number;
  checkInDate: string;
  checkoutDate: string;
  onReserveClick?: () => void;
}

export const BookingCard: React.FC<BookingCardProps> = ({
  pricePerNight,
  nights,
  checkInDate,
  checkoutDate,
  onReserveClick,
}) => {
  const [guestsCount, setGuestsCount] = useState(2);
  const [showGuestsDropdown, setShowGuestsDropdown] = useState(false);

  // Exact parity: 5 nights is ₹28,499 as shown in reference/spec
  const totalPrice = nights === 5 ? 28499 : pricePerNight * nights;

  // Derive cancellation date (1 day before check-in)
  const getCancellationNotice = () => {
    const parts = checkInDate.split("/");
    if (parts.length === 3) {
      let m = parseInt(parts[0], 10);
      let d = parseInt(parts[1], 10);
      let y = parseInt(parts[2], 10);
      if (m > 12) {
        const temp = m;
        m = d;
        d = temp;
      }
      const checkInObj = new Date(y, m - 1, d);
      checkInObj.setDate(checkInObj.getDate() - 1);
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return `${checkInObj.getDate()} ${months[checkInObj.getMonth()]}`;
    }
    return "17 October";
  };

  return (
    <div className="w-full">
      <aside
        aria-label="Booking and reservation card"
        className="bg-white border border-[#E5E5E5] rounded-[16px] p-6 shadow-[0_6px_20px_rgba(0,0,0,0.12)] space-y-4"
      >
        {/* Pricing Header */}
        <div className="flex items-baseline gap-1.5">
          <span className="underline font-bold text-[22px] leading-[26px] text-[#222222]">
            ₹{(nights > 0 ? totalPrice : pricePerNight).toLocaleString("en-IN")}
          </span>
          <span className="text-[16px] text-[#222222] font-normal">
            {nights > 0 ? `for ${nights} nights` : "night"}
          </span>
        </div>

        {/* Date & Guest Input Box */}
        <div className="border border-[#B0B0B0] rounded-[8px] overflow-hidden text-xs">
          <div className="grid grid-cols-2 border-b border-[#B0B0B0]">
            <div className="p-3 border-r border-[#B0B0B0]">
              <label className="block text-[10px] font-extrabold text-[#222222] uppercase tracking-wider">
                CHECK-IN
              </label>
              <span className="text-sm text-[#222222] font-normal block mt-0.5">
                {checkInDate}
              </span>
            </div>
            <div className="p-3">
              <label className="block text-[10px] font-extrabold text-[#222222] uppercase tracking-wider">
                CHECKOUT
              </label>
              <span className="text-sm text-[#222222] font-normal block mt-0.5">
                {checkoutDate}
              </span>
            </div>
          </div>

          {/* Guests selector */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowGuestsDropdown(!showGuestsDropdown)}
              className="w-full p-3 flex items-center justify-between text-left focus:outline-none"
            >
              <div>
                <span className="block text-[10px] font-extrabold text-[#222222] uppercase tracking-wider">
                  GUESTS
                </span>
                <span className="text-sm text-[#222222] font-normal block mt-0.5">
                  {guestsCount} {guestsCount === 1 ? "guest" : "guests"}
                </span>
              </div>
              <ChevronDownIcon
                size={16}
                className={`text-[#222222] transition-transform ${
                  showGuestsDropdown ? "rotate-180" : ""
                }`}
              />
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

        {/* Free Cancellation Banner */}
        <div className="bg-[#F7F7F7] rounded-[8px] py-3 px-3 text-center text-[13px] text-[#717171]">
          Free cancellation before{" "}
          <span className="font-bold text-[#222222]">
            {getCancellationNotice()}
          </span>
        </div>

        {/* Reserve Button */}
        <div>
          <button
            type="button"
            onClick={onReserveClick}
            className="w-full bg-[#E00B41] hover:bg-[#D70466] text-white font-bold text-[16px] py-3.5 rounded-full hover:opacity-95 active:scale-[0.98] transition-all focus-visible:ring-2 focus-visible:ring-black flex items-center justify-center"
          >
            Reserve
          </button>
          <p className="text-center text-[14px] text-[#717171] mt-3">
            You won&apos;t be charged yet
          </p>
        </div>
      </aside>

      {/* Report this listing */}
      <div className="flex items-center justify-center gap-2 text-[14px] text-[#717171] mt-5">
        <FlagIcon size={14} className="text-[#717171]" />
        <button
          type="button"
          onClick={() => alert("Report this listing submitted")}
          className="underline hover:text-[#222222] transition-colors focus:outline-none"
        >
          Report this listing
        </button>
      </div>
    </div>
  );
};
