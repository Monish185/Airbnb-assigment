"use client";

import React from "react";
import {
  AirbnbLogo,
  SearchIcon,
  GlobeIcon,
  MenuIcon,
  UserCircleIcon,
} from "@/components/icons/Icons";

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#EBEBEB]">
      <div className="max-w-[1760px] mx-auto px-10 h-20 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <div className="flex-1 flex items-center">
          <a
            href="#"
            className="inline-flex items-center text-[#FF385C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-lg"
            aria-label="Airbnb homepage"
          >
            <AirbnbLogo size={32} />
          </a>
        </div>

        {/* Center: Search pill */}
        <div className="flex items-center">
          <div className="flex items-center border border-[#DDDDDD] rounded-full py-2 px-4 shadow-[0_1px_2px_rgba(0,0,0,0.08)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.18)] transition-shadow duration-200 cursor-pointer">
            <button
              type="button"
              className="text-sm font-semibold px-2 text-[#222222] focus:outline-none"
            >
              Anywhere
            </button>
            <span className="h-6 w-[1px] bg-[#DDDDDD]" aria-hidden="true" />
            <button
              type="button"
              className="text-sm font-semibold px-3 text-[#222222] focus:outline-none"
            >
              Anytime
            </button>
            <span className="h-6 w-[1px] bg-[#DDDDDD]" aria-hidden="true" />
            <button
              type="button"
              className="text-sm font-normal px-2 text-[#717171] focus:outline-none"
            >
              Add guests
            </button>
            <button
              type="button"
              aria-label="Search"
              className="ml-2 w-8 h-8 rounded-full bg-[#FF385C] text-white flex items-center justify-center hover:bg-[#E61E4D] transition-colors"
            >
              <SearchIcon size={12} className="text-white" />
            </button>
          </div>
        </div>

        {/* Right: User Menu */}
        <div className="flex-1 flex items-center justify-end gap-1">
          <button
            type="button"
            className="text-sm font-semibold text-[#222222] py-2.5 px-3 rounded-full hover:bg-[#F7F7F7] transition-colors focus-visible:ring-2 focus-visible:ring-black"
          >
            Become a host
          </button>
          <button
            type="button"
            aria-label="Choose language and currency"
            className="p-2.5 rounded-full hover:bg-[#F7F7F7] transition-colors text-[#222222] focus-visible:ring-2 focus-visible:ring-black"
          >
            <GlobeIcon size={16} />
          </button>
          <button
            type="button"
            aria-label="Main navigation menu"
            className="flex items-center gap-3 border border-[#DDDDDD] rounded-full py-1.5 px-3.5 hover:shadow-[0_2px_4px_rgba(0,0,0,0.18)] transition-shadow duration-200 ml-1 focus-visible:ring-2 focus-visible:ring-black"
          >
            <MenuIcon size={16} className="text-[#222222]" />
            <UserCircleIcon size={30} />
          </button>
        </div>
      </div>
    </header>
  );
};
