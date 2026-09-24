"use client";

import React, { useState } from "react";

export const CalendarSection: React.FC = () => {
  const [selectedRange, setSelectedRange] = useState({ start: 18, end: 23 });

  const octDays = Array.from({ length: 31 }, (_, i) => i + 1);
  const novDays = Array.from({ length: 30 }, (_, i) => i + 1);

  // October 2026 starts on Thursday (index 4: S0 M1 T2 W3 T4 F5 S6)
  const octStartPadding = 4;
  // November 2026 starts on Sunday (index 0)
  const novStartPadding = 0;

  return (
    <section aria-labelledby="calendar-heading" className="py-8 border-b border-[#DDDDDD]">
      <h2 id="calendar-heading" className="text-[22px] leading-[26px] font-semibold text-[#222222]">
        5 nights in Candolim
      </h2>
      <div className="flex items-center justify-between text-sm text-[#717171] mt-1 mb-6">
        <span>18 Oct 2026 - 23 Oct 2026</span>
        <button
          type="button"
          onClick={() => setSelectedRange({ start: 0, end: 0 })}
          className="underline font-semibold text-[#222222] hover:opacity-80 focus:outline-none"
        >
          Clear dates
        </button>
      </div>

      {/* Dual Month Calendar */}
      <div className="grid grid-cols-2 gap-8 max-w-[650px]">
        {/* Month 1: October 2026 */}
        <div>
          <h3 className="text-base font-semibold text-center text-[#222222] mb-4">
            October 2026
          </h3>
          <div className="grid grid-cols-7 text-center text-xs font-semibold text-[#717171] mb-2">
            <span>S</span>
            <span>M</span>
            <span>T</span>
            <span>W</span>
            <span>T</span>
            <span>F</span>
            <span>S</span>
          </div>
          <div className="grid grid-cols-7 gap-y-1 text-center text-sm">
            {Array.from({ length: octStartPadding }).map((_, i) => (
              <div key={`oct-pad-${i}`} className="h-10" />
            ))}
            {octDays.map((day) => {
              const isSelected =
                day >= selectedRange.start && day <= selectedRange.end;
              const isStart = day === selectedRange.start;
              const isEnd = day === selectedRange.end;

              return (
                <div
                  key={`oct-${day}`}
                  className={`h-10 flex items-center justify-center font-medium ${
                    isSelected
                      ? "bg-[#F7F7F7] text-[#222222]"
                      : "text-[#222222] hover:bg-gray-100 rounded-full"
                  } ${isStart ? "rounded-l-full bg-black text-white" : ""} ${
                    isEnd ? "rounded-r-full bg-black text-white" : ""
                  }`}
                >
                  <button
                    type="button"
                    className="w-full h-full flex items-center justify-center focus:outline-none"
                  >
                    {day}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Month 2: November 2026 */}
        <div>
          <h3 className="text-base font-semibold text-center text-[#222222] mb-4">
            November 2026
          </h3>
          <div className="grid grid-cols-7 text-center text-xs font-semibold text-[#717171] mb-2">
            <span>S</span>
            <span>M</span>
            <span>T</span>
            <span>W</span>
            <span>T</span>
            <span>F</span>
            <span>S</span>
          </div>
          <div className="grid grid-cols-7 gap-y-1 text-center text-sm">
            {Array.from({ length: novStartPadding }).map((_, i) => (
              <div key={`nov-pad-${i}`} className="h-10" />
            ))}
            {novDays.map((day) => (
              <div
                key={`nov-${day}`}
                className="h-10 flex items-center justify-center font-medium text-[#222222] hover:bg-gray-100 rounded-full"
              >
                <button
                  type="button"
                  className="w-full h-full flex items-center justify-center focus:outline-none"
                >
                  {day}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
