"use client";

import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "../icons/Icons";

interface CalDate {
  year: number;
  month: number; // 10 for Oct, 11 for Nov
  day: number;
}

interface CalendarSectionProps {
  onDatesChange?: (range: {
    checkInDate: string;
    checkoutDate: string;
    nights: number;
  }) => void;
}

const monthShort = [
  "",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const toTimestamp = (d: CalDate) =>
  new Date(d.year, d.month - 1, d.day).getTime();

const formatDate = (d: CalDate) =>
  `${d.day} ${monthShort[d.month]} ${d.year}`;

export const CalendarSection: React.FC<CalendarSectionProps> = ({
  onDatesChange,
}) => {
  const [startDate, setStartDate] = useState<CalDate | null>({
    year: 2026,
    month: 10,
    day: 18,
  });
  const [endDate, setEndDate] = useState<CalDate | null>({
    year: 2026,
    month: 10,
    day: 23,
  });
  const [hoverDate, setHoverDate] = useState<CalDate | null>(null);

  const octDays = Array.from({ length: 31 }, (_, i) => i + 1);
  const novDays = Array.from({ length: 30 }, (_, i) => i + 1);

  // October 2026 starts on Thursday (index 4)
  const octStartPadding = 4;
  // November 2026 starts on Sunday (index 0)
  const novStartPadding = 0;

  const handleDateClick = (clicked: CalDate) => {
    if (!startDate || (startDate && endDate)) {
      // Start fresh selection
      setStartDate(clicked);
      setEndDate(null);
      if (onDatesChange) {
        onDatesChange({
          checkInDate: `${String(clicked.day).padStart(2, "0")}/${String(
            clicked.month
          ).padStart(2, "0")}/${clicked.year}`,
          checkoutDate: "Add date",
          nights: 0,
        });
      }
    } else if (startDate && !endDate) {
      if (toTimestamp(clicked) > toTimestamp(startDate)) {
        setEndDate(clicked);
        if (onDatesChange) {
          const nights = Math.round(
            (toTimestamp(clicked) - toTimestamp(startDate)) /
              (1000 * 60 * 60 * 24)
          );
          onDatesChange({
            checkInDate: `${String(startDate.day).padStart(2, "0")}/${String(
              startDate.month
            ).padStart(2, "0")}/${startDate.year}`,
            checkoutDate: `${String(clicked.day).padStart(2, "0")}/${String(
              clicked.month
            ).padStart(2, "0")}/${clicked.year}`,
            nights,
          });
        }
      } else {
        // Clicked date is earlier or same -> restart start date
        setStartDate(clicked);
        setEndDate(null);
        if (onDatesChange) {
          onDatesChange({
            checkInDate: `${String(clicked.day).padStart(2, "0")}/${String(
              clicked.month
            ).padStart(2, "0")}/${clicked.year}`,
            checkoutDate: "Add date",
            nights: 0,
          });
        }
      }
    }
  };

  const handleClear = () => {
    setStartDate(null);
    setEndDate(null);
    setHoverDate(null);
    if (onDatesChange) {
      onDatesChange({
        checkInDate: "Add date",
        checkoutDate: "Add date",
        nights: 0,
      });
    }
  };

  const effectiveEnd =
    endDate || (startDate && hoverDate && toTimestamp(hoverDate) > toTimestamp(startDate) ? hoverDate : null);

  const getNightsCount = () => {
    if (!startDate || !endDate) return 0;
    return Math.round(
      (toTimestamp(endDate) - toTimestamp(startDate)) / (1000 * 60 * 60 * 24)
    );
  };

  const getTitle = () => {
    if (startDate && endDate) {
      return `${getNightsCount()} nights in Candolim`;
    }
    if (startDate) {
      return "Select checkout date";
    }
    return "Select check-in date";
  };

  const getSubtitle = () => {
    if (startDate && endDate) {
      return `${formatDate(startDate)} - ${formatDate(endDate)}`;
    }
    if (startDate) {
      return "Minimum stay: 2 nights";
    }
    return "Add your travel dates for exact pricing";
  };

  const renderMonthDays = (
    days: number[],
    startPadding: number,
    monthNum: number,
    yearNum: number
  ) => {
    return (
      <div className="grid grid-cols-7 gap-y-0 text-center">
        {Array.from({ length: startPadding }).map((_, i) => (
          <div key={`pad-${monthNum}-${i}`} className="w-[44px] sm:w-[48px] h-[44px] sm:h-[48px]" />
        ))}
        {days.map((day) => {
          const current: CalDate = { year: yearNum, month: monthNum, day };
          const currentTime = toTimestamp(current);

          const isStart = startDate && toTimestamp(startDate) === currentTime;
          const isEnd = endDate && toTimestamp(endDate) === currentTime;
          const isEffectiveEnd =
            effectiveEnd && toTimestamp(effectiveEnd) === currentTime;

          const isInRange =
            startDate &&
            effectiveEnd &&
            currentTime > toTimestamp(startDate) &&
            currentTime < toTimestamp(effectiveEnd);

          const hasRangeAfterStart =
            isStart &&
            effectiveEnd &&
            toTimestamp(effectiveEnd) > toTimestamp(startDate);

          const hasRangeBeforeEnd =
            (isEnd || (isEffectiveEnd && !endDate)) &&
            startDate &&
            toTimestamp(effectiveEnd!) > toTimestamp(startDate);

          return (
            <div
              key={`day-${monthNum}-${day}`}
              className="w-[44px] sm:w-[48px] h-[44px] sm:h-[48px] flex items-center justify-center relative select-none"
            >
              {/* Range background connectors */}
              {hasRangeAfterStart && (
                <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[#F7F7F7] z-0" />
              )}
              {hasRangeBeforeEnd && (
                <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-[#F7F7F7] z-0" />
              )}
              {isInRange && (
                <div className="absolute inset-0 bg-[#F7F7F7] z-0" />
              )}

              {/* Day Button */}
              <button
                type="button"
                onClick={() => handleDateClick(current)}
                onMouseEnter={() => setHoverDate(current)}
                onMouseLeave={() => setHoverDate(null)}
                aria-label={`${day} ${monthShort[monthNum]} ${yearNum}`}
                className={`w-[44px] sm:w-[48px] h-[44px] sm:h-[48px] rounded-full flex items-center justify-center text-[14px] font-semibold transition-all relative z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-black ${
                  isStart || isEnd
                    ? "bg-[#222222] text-white shadow-sm"
                    : isEffectiveEnd && !endDate
                    ? "border-2 border-[#222222] text-[#222222]"
                    : isInRange
                    ? "text-[#222222] hover:bg-gray-200"
                    : "text-[#222222] hover:border hover:border-[#222222]"
                }`}
              >
                {day}
              </button>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section
      id="calendar-section"
      aria-labelledby="calendar-heading"
      className="py-8 border-b border-[#DDDDDD]"
    >
      {/* Title & Clear Dates */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2
            id="calendar-heading"
            className="text-[22px] leading-[26px] font-semibold text-[#222222]"
          >
            {getTitle()}
          </h2>
          <p className="text-[14px] text-[#6A6A6A] mt-1">
            {getSubtitle()}
          </p>
        </div>
        <button
          type="button"
          onClick={handleClear}
          className="text-[14px] font-semibold text-[#222222] underline hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded"
        >
          Clear dates
        </button>
      </div>

      {/* Dual Month Calendar */}
      <div className="mt-6">
        <div className="flex flex-col md:flex-row gap-8 justify-between">
          {/* Month 1: October 2026 */}
          <div className="flex-1 max-w-[340px]">
            <div className="flex items-center justify-between font-semibold text-[16px] text-[#222222] mb-4 px-2">
              <button
                type="button"
                aria-label="Previous month"
                className="p-2 hover:bg-[#F7F7F7] rounded-full transition-colors focus:outline-none"
              >
                <ChevronLeftIcon size={16} />
              </button>
              <span>October 2026</span>
              <div className="w-8" aria-hidden="true" />
            </div>
            <div className="grid grid-cols-7 text-center mb-1">
              <div className="h-8 flex items-center justify-center text-[12px] font-semibold text-[#6A6A6A]">S</div>
              <div className="h-8 flex items-center justify-center text-[12px] font-semibold text-[#6A6A6A]">M</div>
              <div className="h-8 flex items-center justify-center text-[12px] font-semibold text-[#6A6A6A]">T</div>
              <div className="h-8 flex items-center justify-center text-[12px] font-semibold text-[#6A6A6A]">W</div>
              <div className="h-8 flex items-center justify-center text-[12px] font-semibold text-[#6A6A6A]">T</div>
              <div className="h-8 flex items-center justify-center text-[12px] font-semibold text-[#6A6A6A]">F</div>
              <div className="h-8 flex items-center justify-center text-[12px] font-semibold text-[#6A6A6A]">S</div>
            </div>
            {renderMonthDays(octDays, octStartPadding, 10, 2026)}
          </div>

          {/* Month 2: November 2026 */}
          <div className="flex-1 max-w-[340px]">
            <div className="flex items-center justify-between font-semibold text-[16px] text-[#222222] mb-4 px-2">
              <div className="w-8" aria-hidden="true" />
              <span>November 2026</span>
              <button
                type="button"
                aria-label="Next month"
                className="p-2 hover:bg-[#F7F7F7] rounded-full transition-colors focus:outline-none"
              >
                <ChevronRightIcon size={16} />
              </button>
            </div>
            <div className="grid grid-cols-7 text-center mb-1">
              <div className="h-8 flex items-center justify-center text-[12px] font-semibold text-[#6A6A6A]">S</div>
              <div className="h-8 flex items-center justify-center text-[12px] font-semibold text-[#6A6A6A]">M</div>
              <div className="h-8 flex items-center justify-center text-[12px] font-semibold text-[#6A6A6A]">T</div>
              <div className="h-8 flex items-center justify-center text-[12px] font-semibold text-[#6A6A6A]">W</div>
              <div className="h-8 flex items-center justify-center text-[12px] font-semibold text-[#6A6A6A]">T</div>
              <div className="h-8 flex items-center justify-center text-[12px] font-semibold text-[#6A6A6A]">F</div>
              <div className="h-8 flex items-center justify-center text-[12px] font-semibold text-[#6A6A6A]">S</div>
            </div>
            {renderMonthDays(novDays, novStartPadding, 11, 2026)}
          </div>
        </div>
      </div>
    </section>
  );
};
