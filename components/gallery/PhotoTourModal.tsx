"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CloseIcon, ShareIcon, HeartIcon } from "@/components/icons/Icons";
import { RoomCategory, PhotoItem } from "@/data/listing";

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
  const [currentActiveCat, setCurrentActiveCat] = useState(activeCategoryId);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus trap & escape key handler
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

  if (!isOpen) return null;

  // Flatten all photos for global indexing
  let runningIndex = 0;
  const categoriesWithIndex = categories.map((cat) => {
    const startIndex = runningIndex;
    runningIndex += cat.photos.length;
    return { ...cat, startIndex };
  });

  const scrollToCategory = (catId: string) => {
    setCurrentActiveCat(catId);
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
      {/* Sticky Header */}
      <div className="sticky top-0 z-30 bg-white border-b border-[#EBEBEB] px-6 lg:px-10 py-3 flex flex-col">
        {/* Top Action Row */}
        <div className="flex items-center justify-between pb-3">
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close photo tour"
            className="p-2.5 hover:bg-[#F7F7F7] rounded-full transition-colors -ml-2 text-[#222222] focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            <CloseIcon size={16} />
          </button>

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

        {/* Category Thumbnail Navigation Carousel */}
        <div
          className="flex items-center gap-4 overflow-x-auto no-scrollbar py-2 border-t border-[#F0F0F0]"
          role="tablist"
          aria-label="Room categories"
        >
          {categoriesWithIndex.map((cat) => {
            const isActive = currentActiveCat === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => scrollToCategory(cat.id)}
                className="flex flex-col items-start text-left group focus:outline-none flex-shrink-0 cursor-pointer"
              >
                <div
                  className={`w-[120px] h-[75px] rounded-[8px] overflow-hidden bg-gray-100 mb-1.5 border-2 transition-all ${
                    isActive ? "border-black" : "border-transparent"
                  }`}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={cat.thumbnail}
                      alt=""
                      fill
                      sizes="120px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <span
                  className={`text-xs transition-colors ${
                    isActive
                      ? "font-bold text-[#222222]"
                      : "font-medium text-[#717171] group-hover:text-[#222222]"
                  }`}
                >
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Scrollable Content */}
      <div className="flex-1 max-w-[1120px] w-full mx-auto px-6 py-10 space-y-16">
        <h2 className="text-[26px] font-bold text-[#222222]">Photo tour</h2>

        {categoriesWithIndex.map((cat) => (
          <section
            key={cat.id}
            id={`room-section-${cat.id}`}
            aria-labelledby={`heading-${cat.id}`}
            className="space-y-4 pt-4 scroll-mt-36"
          >
            <div>
              <h3
                id={`heading-${cat.id}`}
                className="text-[22px] font-semibold text-[#222222]"
              >
                {cat.name}
              </h3>
              {cat.subtitle && (
                <p className="text-sm text-[#717171] mt-1">{cat.subtitle}</p>
              )}
            </div>

            {/* Photo Grid per Room */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cat.photos.map((photo, pIdx) => {
                const globalIndex = cat.startIndex + pIdx;
                // If it's single photo or first of odd set, make it full-width
                const isFullWidth = cat.photos.length === 1 || (cat.photos.length % 2 !== 0 && pIdx === 0);

                return (
                  <div
                    key={photo.id}
                    onClick={() => onSelectPhoto(globalIndex)}
                    className={`relative rounded-[12px] overflow-hidden bg-gray-100 cursor-pointer group ${
                      isFullWidth ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 1120px) 100vw, 1120px"
                      className="object-cover group-hover:scale-[1.01] transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
