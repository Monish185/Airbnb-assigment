import React from "react";
import Image from "next/image";

interface SleepingItem {
  room: string;
  bedDetails: string;
  photo: string;
}

interface SleepingArrangementsProps {
  arrangements: SleepingItem[];
}

export const SleepingArrangements: React.FC<SleepingArrangementsProps> = ({
  arrangements,
}) => {
  return (
    <section aria-labelledby="sleeping-arrangements-heading" className="py-8 border-b border-[#DDDDDD]">
      <h2 id="sleeping-arrangements-heading" className="text-[22px] leading-[26px] font-semibold text-[#222222] mb-6">
        Where you&apos;ll sleep
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {arrangements.map((item, idx) => (
          <div
            key={idx}
            className="border border-[#DDDDDD] rounded-[12px] p-6 flex flex-col justify-between"
          >
            <div className="relative w-full h-[120px] rounded-[8px] overflow-hidden mb-4 bg-gray-100">
              <Image
                src={item.photo}
                alt={item.room}
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-base font-semibold text-[#222222]">
                {item.room}
              </h3>
              <p className="text-sm text-[#717171] mt-1">
                {item.bedDetails}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
