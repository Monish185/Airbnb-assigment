import React from "react";
import { ChevronRightIcon } from "../icons/Icons";

interface ThingsToKnowSectionProps {
  cancellationPolicy: string;
  houseRules: string[];
  safetyAndProperty: string[];
}

export const ThingsToKnowSection: React.FC<ThingsToKnowSectionProps> = ({
  cancellationPolicy,
  houseRules,
  safetyAndProperty,
}) => {
  return (
    <section aria-labelledby="things-to-know-heading" className="py-8 border-b border-[#DDDDDD]">
      <h2 id="things-to-know-heading" className="text-[22px] leading-[26px] font-semibold text-[#222222] mb-6">
        Things to know
      </h2>

      <div className="grid grid-cols-3 gap-8">
        {/* Column 1: Cancellation Policy */}
        <div>
          <h3 className="text-base font-semibold text-[#222222] mb-3">
            Cancellation policy
          </h3>
          <p className="text-sm text-[#717171] leading-relaxed mb-4">
            {cancellationPolicy}
          </p>
          <button
            type="button"
            className="flex items-center gap-1 text-sm font-semibold underline text-[#222222] hover:opacity-80 focus:outline-none"
          >
            <span>Learn more</span>
            <ChevronRightIcon size={12} />
          </button>
        </div>

        {/* Column 2: House Rules */}
        <div>
          <h3 className="text-base font-semibold text-[#222222] mb-3">
            House rules
          </h3>
          <ul className="text-sm text-[#717171] space-y-2 mb-4">
            {houseRules.map((rule, idx) => (
              <li key={idx}>{rule}</li>
            ))}
          </ul>
          <button
            type="button"
            className="flex items-center gap-1 text-sm font-semibold underline text-[#222222] hover:opacity-80 focus:outline-none"
          >
            <span>Learn more</span>
            <ChevronRightIcon size={12} />
          </button>
        </div>

        {/* Column 3: Safety & Property */}
        <div>
          <h3 className="text-base font-semibold text-[#222222] mb-3">
            Safety &amp; property
          </h3>
          <ul className="text-sm text-[#717171] space-y-2 mb-4">
            {safetyAndProperty.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <button
            type="button"
            className="flex items-center gap-1 text-sm font-semibold underline text-[#222222] hover:opacity-80 focus:outline-none"
          >
            <span>Learn more</span>
            <ChevronRightIcon size={12} />
          </button>
        </div>
      </div>
    </section>
  );
};
