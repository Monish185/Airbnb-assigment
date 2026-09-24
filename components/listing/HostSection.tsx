import React from "react";
import Image from "next/image";
import { StarIcon } from "../icons/Icons";
import { CoHost } from "../../data/listing";

interface HostSectionProps {
  host: {
    name: string;
    avatar: string;
    yearsHosting: number;
    reviewsCount: number;
    rating: number;
    school: string;
    generation: string;
    responseRate: string;
    responseTime: string;
    coHosts: CoHost[];
  };
}

export const HostSection: React.FC<HostSectionProps> = ({ host }) => {
  return (
    <section aria-labelledby="meet-host-heading" className="py-8 border-b border-[#DDDDDD]">
      <h2 id="meet-host-heading" className="text-[22px] leading-[26px] font-semibold text-[#222222] mb-6">
        Meet your host
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Host Profile Card */}
        <div className="bg-[#F0EFE9]/40 border border-[#DDDDDD] rounded-[24px] p-8 shadow-sm flex flex-col items-center text-center">
          <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 bg-gray-100 shadow-md">
            <Image
              src={host.avatar}
              alt={host.name}
              fill
              sizes="96px"
              className="object-cover"
            />
          </div>
          <h3 className="text-[28px] leading-8 font-bold text-[#222222]">
            {host.name}
          </h3>
          <p className="text-sm font-semibold text-[#717171] mt-1">Host</p>

          <div className="grid grid-cols-3 gap-6 w-full border-t border-[#DDDDDD] pt-6 mt-6">
            <div>
              <div className="text-xl font-bold text-[#222222]">{host.reviewsCount.toLocaleString()}</div>
              <div className="text-[11px] text-[#717171] uppercase tracking-wider mt-1">Reviews</div>
            </div>
            <div>
              <div className="text-xl font-bold text-[#222222] flex items-center justify-center gap-1">
                <span>{host.rating}</span>
                <StarIcon size={12} />
              </div>
              <div className="text-[11px] text-[#717171] uppercase tracking-wider mt-1">Rating</div>
            </div>
            <div>
              <div className="text-xl font-bold text-[#222222]">{host.yearsHosting}</div>
              <div className="text-[11px] text-[#717171] uppercase tracking-wider mt-1">Years hosting</div>
            </div>
          </div>
        </div>

        {/* Host Details & Co-hosts */}
        <div className="space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="text-base text-[#222222] space-y-2">
              <div className="flex items-center gap-3">
                <span className="font-medium">{host.generation}</span>
              </div>
              <div className="flex items-center gap-3">
                <span>Where I went to school: <strong className="font-semibold">{host.school}</strong></span>
              </div>
            </div>

            {/* Co-hosts */}
            <div className="pt-2">
              <h4 className="text-base font-semibold text-[#222222] mb-3">
                Co-Hosts
              </h4>
              <div className="flex flex-wrap gap-4">
                {host.coHosts.map((ch, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-100">
                      <Image
                        src={ch.avatar}
                        alt={ch.name}
                        fill
                        sizes="32px"
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm text-[#222222]">{ch.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Host Stats */}
            <div className="pt-2 text-sm text-[#222222] space-y-1">
              <p className="font-medium">Response rate: {host.responseRate}</p>
              <p className="text-[#717171]">Responds {host.responseTime.toLowerCase()}</p>
            </div>
          </div>

          <div>
            <button
              type="button"
              className="bg-[#222222] text-white font-semibold text-base py-3 px-6 rounded-[8px] hover:bg-black active:scale-95 transition-all mb-4 focus-visible:ring-2 focus-visible:ring-black"
            >
              Message host
            </button>

            <p className="text-xs text-[#717171] leading-relaxed border-t border-[#EBEBEB] pt-4">
              To help protect your payment, always use Airbnb to send money and communicate with hosts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
