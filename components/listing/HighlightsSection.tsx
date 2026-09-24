import React from "react";
import { AmenityIcons } from "../icons/Icons";

interface HighlightItem {
  title: string;
  description: string;
  icon: string;
}

interface HighlightsSectionProps {
  highlights: HighlightItem[];
}

export const HighlightsSection: React.FC<HighlightsSectionProps> = ({
  highlights,
}) => {
  return (
    <section aria-label="Key highlights" className="py-6 border-b border-[#DDDDDD] space-y-6">
      {highlights.map((item, idx) => {
        const IconComponent = AmenityIcons[item.icon] || AmenityIcons["pool"];
        return (
          <div key={idx} className="flex items-start gap-6">
            <div className="text-[#222222] mt-0.5 flex-shrink-0">
              <IconComponent size={24} />
            </div>
            <div>
              <h4 className="text-base font-semibold text-[#222222] leading-5">
                {item.title}
              </h4>
              <p className="text-sm text-[#717171] leading-5 mt-0.5">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};
