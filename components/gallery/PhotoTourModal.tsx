"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ShareIcon, HeartIcon } from "../icons/Icons";
import { RoomCategory } from "../../data/listing";

interface PhotoTourModalProps {
  isOpen: boolean;
  categories: RoomCategory[];
  activeCategoryId: string;
  onClose: () => void;
  onSelectPhoto: (globalIndex: number) => void;
}

export const PhotoTourModal: React.FC<PhotoTourModalProps> = ({
  isOpen,
  categories,
  activeCategoryId,
  onClose,
  onSelectPhoto,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus trap & keyboard handler
  useEffect(() => {
    if (!isOpen) return;

    // Focus close button on open
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 100);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Scroll to active category if specified when opened
  useEffect(() => {
    if (isOpen && activeCategoryId) {
      setTimeout(() => {
        const targetEl = document.getElementById(`room-section-${activeCategoryId}`);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [isOpen, activeCategoryId]);

  if (!isOpen) return null;

  // Flatten all photos for global indexing
  let runningIndex = 0;
  const categoriesWithIndex = categories.map((cat) => {
    const startIndex = runningIndex;
    runningIndex += cat.photos.length;
    return { ...cat, startIndex };
  });

  const scrollToCategory = (catId: string) => {
    const targetEl = document.getElementById(`room-section-${catId}`);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour modal"
      className="fixed inset-0 z-50 bg-white overflow-y-auto flex flex-col"
    >
      {/* 1. Sticky Top Bar: Close, Title, Share, Save */}
      <div className="sticky top-0 z-40 bg-white px-6 md:px-10 h-16 md:h-20 flex items-center justify-between shrink-0">
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close photo tour"
          className="p-2.5 hover:bg-[#F7F7F7] rounded-full transition-colors -ml-2 text-[#222222] focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
        >
          <ChevronLeftIcon size={20} />
        </button>

        <h2 className="text-[16px] font-semibold text-[#222222]">Photo tour</h2>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Share listing"
            className="p-2.5 hover:bg-[#F7F7F7] rounded-full transition-colors text-[#222222] focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            <ShareIcon size={16} />
          </button>
          <button
            type="button"
            aria-label="Save listing"
            className="p-2.5 hover:bg-[#F7F7F7] rounded-full transition-colors text-[#222222] focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            <HeartIcon size={16} />
          </button>
        </div>
      </div>

      {/* 2. Main Scrollable Container */}
      <div className="max-w-[976px] mx-auto w-full px-4 sm:px-6 md:px-0 pt-2 pb-28 flex-1">
        {/* Category Thumbnails Responsive Grid */}
        <div
          id="photo-tour-thumbnails"
          role="tablist"
          aria-label="Room categories"
          className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-x-3 gap-y-4 mb-16"
        >
          {categoriesWithIndex.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-label={cat.name}
              onClick={() => scrollToCategory(cat.id)}
              className="flex flex-col items-start text-left group focus:outline-none w-full cursor-pointer"
            >
              <div className="w-full h-[105px] rounded-[8px] overflow-hidden bg-gray-100 mb-1.5 relative">
                <Image
                  src={cat.thumbnail}
                  alt=""
                  fill
                  sizes="120px"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-[12px] text-[#222222] font-normal leading-[16px] group-hover:underline">
                {cat.name}
              </span>
            </button>
          ))}
        </div>

        {/* Room Sections: 2-Column Layout */}
        <div className="space-y-20">
          {categoriesWithIndex.map((cat) => (
            <section
              key={cat.id}
              id={`room-section-${cat.id}`}
              aria-labelledby={`heading-${cat.id}`}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-[60px] items-start scroll-mt-24"
            >
              {/* Left Column: Sticky Title & Subtitle */}
              <div className="w-full lg:sticky lg:top-28 space-y-2">
                <h3
                  id={`heading-${cat.id}`}
                  className="text-[26px] md:text-[32px] leading-tight font-semibold text-[#222222]"
                >
                  {cat.name}
                </h3>
                {cat.subtitle && (
                  <p className="text-[14px] md:text-[15px] leading-[22px] text-[#6A6A6A] font-normal">
                    {cat.subtitle}
                  </p>
                )}
              </div>

              {/* Right Column: Photos Grid */}
              <div className="w-full space-y-3">
                {/* First Photo Full-Width */}
                {cat.photos.length > 0 && (
                  <div
                    onClick={() => onSelectPhoto(cat.startIndex)}
                    className="w-full aspect-[4/3] rounded-[12px] overflow-hidden bg-gray-100 cursor-pointer group relative"
                  >
                    <Image
                      src={cat.photos[0].src}
                      alt={cat.photos[0].alt}
                      fill
                      sizes="(max-width: 976px) 100vw, 600px"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors pointer-events-none" />
                  </div>
                )}

                {/* Remaining Photos in 2-Column Grid */}
                {cat.photos.length > 1 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {cat.photos.slice(1).map((photo, pIdx) => (
                      <div
                        key={photo.id}
                        onClick={() => onSelectPhoto(cat.startIndex + 1 + pIdx)}
                        className="aspect-[4/3] rounded-[12px] overflow-hidden bg-gray-100 cursor-pointer group relative"
                      >
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          sizes="(max-width: 976px) 50vw, 300px"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors pointer-events-none" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};
