"use client";

import React from "react";
import Image from "next/image";
import {
  AirbnbLogo,
  SearchIcon,
  GlobeIcon,
  MenuIcon,
  UserCircleIcon,
} from "../icons/Icons";

export const Navbar: React.FC = () => {
  return (
    <header className="relative w-full bg-white border-b border-[#EBEBEB]">
      <div className="max-w-[1760px] mx-auto px-6 md:px-10 lg:px-20 h-20 flex items-center justify-between relative">
        {/* Left: Brand Logo */}
        <div className="flex items-center shrink-0">
          <a
            href="/"
            className="inline-flex items-center text-[#FF385C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-lg"
            aria-label="Airbnb homepage"
          >
            <AirbnbLogo size={32} />
          </a>
        </div>

        {/* Center: Search pill */}
        <div
          id="desktop-search-pill"
          className="hidden sm:flex md:absolute md:left-1/2 md:-translate-x-1/2 items-center w-[404px] h-[48px] border border-[#DDDDDD] rounded-full pl-3 pr-2 shadow-[0_1px_2px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.18)] transition-all cursor-pointer select-none justify-between z-10"
        >
          <div className="flex items-center gap-2 pr-2">
            <Image
              src="/images/search_house.png"
              alt=""
              width={30}
              height={30}
              className="w-[30px] h-[30px] object-contain shrink-0"
              priority
            />
            <span className="text-[14px] font-semibold text-[#222222]">
              Anywhere
            </span>
          </div>
          <span className="h-6 w-[1px] bg-[#DDDDDD] shrink-0" aria-hidden="true" />
          <div className="flex items-center px-3">
            <span className="text-[14px] font-semibold text-[#222222]">
              Anytime
            </span>
          </div>
          <span className="h-6 w-[1px] bg-[#DDDDDD] shrink-0" aria-hidden="true" />
          <div className="flex items-center pl-2 gap-3">
            <span className="text-[14px] text-[#717171]">Add guests</span>
            <div className="bg-[#FF385C] text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 hover:bg-[#E61E4D] transition-colors">
              <SearchIcon size={12} className="text-white" />
            </div>
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
