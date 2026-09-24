import React from "react";
import { GlobeIcon } from "../icons/Icons";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F7F7F7] border-t border-[#DDDDDD] pt-12 pb-8">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Link Columns */}
        <div className="grid grid-cols-3 gap-8 pb-12 border-b border-[#DDDDDD] text-sm">
          {/* Column 1 */}
          <div>
            <h3 className="font-semibold text-[#222222] mb-4">Support</h3>
            <ul className="space-y-3 text-[#222222]">
              <li><a href="#" className="hover:underline">Help Centre</a></li>
              <li><a href="#" className="hover:underline">AirCover</a></li>
              <li><a href="#" className="hover:underline">Anti-discrimination</a></li>
              <li><a href="#" className="hover:underline">Disability support</a></li>
              <li><a href="#" className="hover:underline">Cancellation options</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold text-[#222222] mb-4">Hosting</h3>
            <ul className="space-y-3 text-[#222222]">
              <li><a href="#" className="hover:underline">Airbnb your home</a></li>
              <li><a href="#" className="hover:underline">AirCover for Hosts</a></li>
              <li><a href="#" className="hover:underline">Hosting resources</a></li>
              <li><a href="#" className="hover:underline">Community forum</a></li>
              <li><a href="#" className="hover:underline">Hosting responsibly</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-[#222222] mb-4">Airbnb</h3>
            <ul className="space-y-3 text-[#222222]">
              <li><a href="#" className="hover:underline">Newsroom</a></li>
              <li><a href="#" className="hover:underline">New features</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Investors</a></li>
              <li><a href="#" className="hover:underline">Airbnb.org emergency stays</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-6 flex items-center justify-between text-sm text-[#222222]">
          <div className="flex flex-wrap items-center gap-2">
            <span>© 2026 Airbnb, Inc.</span>
            <span>·</span>
            <a href="#" className="hover:underline">Privacy</a>
            <span>·</span>
            <a href="#" className="hover:underline">Terms</a>
            <span>·</span>
            <a href="#" className="hover:underline">Sitemap</a>
            <span>·</span>
            <a href="#" className="hover:underline">Company details</a>
          </div>

          <div className="flex items-center gap-6 font-semibold">
            <button
              type="button"
              className="flex items-center gap-2 hover:underline focus:outline-none"
            >
              <GlobeIcon size={16} />
              <span>English (IN)</span>
            </button>
            <button
              type="button"
              className="flex items-center gap-1 hover:underline focus:outline-none"
            >
              <span>₹ INR</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
