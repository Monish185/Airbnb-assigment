"use client";

import React, { useEffect, useRef } from "react";
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon, GridDotsIcon } from "../icons/Icons";
import { PhotoItem, RoomCategory } from "../../data/listing";

interface LightboxModalProps {
  isOpen: boolean;
  photos: PhotoItem[];
  currentIndex: number;
  categories?: RoomCategory[];
  onClose: () => void;
  onViewGallery?: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  photos,
  currentIndex,
  categories,
  onClose,
  onViewGallery,
  onNext,
  onPrev,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Focus close button on mount
    setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 100);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        onNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        onPrev();
      } else if (e.key === "Tab" && modalRef.current) {
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
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || photos.length === 0) return null;

  const currentPhoto = photos[currentIndex] || photos[0];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === photos.length - 1;

  // Determine room category name for current photo
  let currentRoomName = "Photo";
  if (categories && categories.length > 0) {
    let running = 0;
    for (const cat of categories) {
      if (currentIndex >= running && currentIndex < running + cat.photos.length) {
        currentRoomName = cat.name;
        break;
      }
      running += cat.photos.length;
    }
  }

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-label="Single photo viewer"
      className="fixed inset-0 z-[60] bg-white flex flex-col select-none"
    >
      {/* Top Header Bar */}
      <div className="h-16 px-6 border-b border-[#EBEBEB] flex items-center justify-between shrink-0 bg-white z-10">
        {/* Left: View photo tour gallery (3x3 grid dots) */}
        <button
          type="button"
          onClick={onViewGallery || onClose}
          aria-label="View photo tour gallery"
          className="p-2.5 hover:bg-[#F7F7F7] rounded-full transition-colors flex items-center justify-center text-[#222222] focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
        >
          <GridDotsIcon size={16} />
        </button>

        {/* Center: Current Room Category */}
        <h2 className="text-[16px] font-semibold text-[#222222]">
          {currentRoomName}
        </h2>

        {/* Right: Counter + Close */}
        <div className="flex items-center gap-6">
          <span
            aria-live="polite"
            className="text-[14px] font-normal text-[#222222]"
          >
            {currentIndex + 1} of {photos.length}
          </span>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Close photo viewer"
            className="p-2 hover:bg-[#F7F7F7] rounded-full transition-colors text-[#222222] focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            <CloseIcon size={16} />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div className="flex-1 relative flex items-center justify-center p-2 sm:p-6 md:px-20 overflow-hidden bg-white">
        {/* Previous Button */}
        <button
          type="button"
          disabled={isFirst}
          onClick={onPrev}
          aria-label="Previous photo"
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#DDDDDD] bg-white/95 hover:bg-white shadow-md flex items-center justify-center text-[#222222] hover:scale-105 active:scale-95 transition-all disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
        >
          <ChevronLeftIcon size={20} />
        </button>

        {/* Centered Image */}
        <div className="w-full h-full flex items-center justify-center select-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            className="max-w-full max-h-[calc(100vh-100px)] object-contain select-none"
          />
        </div>

        {/* Next Button */}
        <button
          type="button"
          disabled={isLast}
          onClick={onNext}
          aria-label="Next photo"
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#DDDDDD] bg-white/95 hover:bg-white shadow-md flex items-center justify-center text-[#222222] hover:scale-105 active:scale-95 transition-all disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
        >
          <ChevronRightIcon size={20} />
        </button>
      </div>
    </div>
  );
};
