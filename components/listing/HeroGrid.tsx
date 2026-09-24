"use client";

import React from "react";
import Image from "next/image";
import { PhotoItem } from "../../data/listing";
import { GridDotsIcon } from "../icons/Icons";

interface HeroGridProps {
  photos: PhotoItem[];
  onShowAllPhotos: () => void;
  onPhotoClick: (index: number) => void;
}

export const HeroGrid: React.FC<HeroGridProps> = ({
  photos,
  onShowAllPhotos,
  onPhotoClick,
}) => {
  return (
    <section
      id="hero-photos-section"
      aria-label="Property photos"
      className="relative rounded-[12px] overflow-hidden grid grid-cols-4 grid-rows-2 gap-2 h-[440px]"
    >
      {/* 1. Main Large Photo (Col 1-2, Row 1-2) */}
      <div
        className="col-span-2 row-span-2 relative overflow-hidden cursor-pointer group bg-gray-100"
        onClick={() => onPhotoClick(0)}
      >
        <Image
          src={photos[0].src}
          alt={photos[0].alt}
          fill
          priority
          sizes="(max-width: 1120px) 50vw, 560px"
          className="object-cover w-full h-full group-hover:brightness-90 transition-all duration-300"
        />
      </div>

      {/* 2. Top Middle (Col 3, Row 1) */}
      <div
        className="relative overflow-hidden cursor-pointer group bg-gray-100"
        onClick={() => onPhotoClick(1)}
      >
        <Image
          src={photos[1].src}
          alt={photos[1].alt}
          fill
          sizes="(max-width: 1120px) 25vw, 280px"
          className="object-cover w-full h-full group-hover:brightness-90 transition-all duration-300"
        />
      </div>

      {/* 3. Top Right (Col 4, Row 1) */}
      <div
        className="relative overflow-hidden cursor-pointer group bg-gray-100"
        onClick={() => onPhotoClick(3)}
      >
        <Image
          src={photos[3].src}
          alt={photos[3].alt}
          fill
          sizes="(max-width: 1120px) 25vw, 280px"
          className="object-cover w-full h-full group-hover:brightness-90 transition-all duration-300"
        />
      </div>

      {/* 4. Bottom Middle (Col 3, Row 2) */}
      <div
        className="relative overflow-hidden cursor-pointer group bg-gray-100"
        onClick={() => onPhotoClick(2)}
      >
        <Image
          src={photos[2].src}
          alt={photos[2].alt}
          fill
          sizes="(max-width: 1120px) 25vw, 280px"
          className="object-cover w-full h-full group-hover:brightness-90 transition-all duration-300"
        />
      </div>

      {/* 5. Bottom Right (Col 4, Row 2) */}
      <div
        className="relative overflow-hidden cursor-pointer group bg-gray-100"
        onClick={() => onPhotoClick(4)}
      >
        <Image
          src={photos[4].src}
          alt={photos[4].alt}
          fill
          sizes="(max-width: 1120px) 25vw, 280px"
          className="object-cover w-full h-full group-hover:brightness-90 transition-all duration-300"
        />
      </div>

      {/* "Show all photos" Button */}
      <button
        type="button"
        onClick={onShowAllPhotos}
        className="absolute bottom-5 right-5 z-10 flex items-center gap-2 bg-white text-[#222222] border border-[#222222] rounded-[8px] py-1.5 px-3.5 text-sm font-semibold shadow-[0_1px_2px_rgba(0,0,0,0.08)] hover:bg-[#F7F7F7] active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-black"
        aria-label="Show all photos"
      >
        <GridDotsIcon size={14} />
        <span>Show all photos</span>
      </button>
    </section>
  );
};
