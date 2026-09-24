"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon } from "@/components/icons/Icons";
import { PhotoItem } from "@/data/listing";

interface LightboxModalProps {
  isOpen: boolean;
  photos: PhotoItem[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  photos,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Focus close button
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
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || photos.length === 0) return null;

  const currentPhoto = photos[currentIndex] || photos[0];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === photos.length - 1;

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-label="Single photo viewer"
      className="fixed inset-0 z-[60] bg-black flex flex-col justify-between select-none"
    >
      {/* Top Header Bar */}
      <div className="h-20 px-8 flex items-center justify-between z-10 text-white">
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          aria-label="Close lightbox"
          className="flex items-center gap-2 p-3 rounded-full hover:bg-white/10 active:scale-95 transition-all text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <CloseIcon size={16} />
          <span className="text-sm font-semibold">Close</span>
        </button>

        {/* Counter */}
        <div
          aria-live="polite"
          className="text-sm font-medium tracking-wider text-white"
        >
          {currentIndex + 1} / {photos.length}
        </div>

        <div className="w-20" aria-hidden="true" />
      </div>

      {/* Main Image Stage */}
      <div className="flex-1 relative flex items-center justify-between px-6 lg:px-16 overflow-hidden">
        {/* Previous Button */}
        <button
          type="button"
          disabled={isFirst}
          onClick={onPrev}
          aria-label="Previous photo"
          className={`w-12 h-12 rounded-full border border-white/40 bg-black/40 text-white flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
            isFirst
              ? "opacity-30 cursor-not-allowed"
              : "hover:bg-white hover:text-black hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
          }`}
        >
          <ChevronLeftIcon size={18} />
        </button>

        {/* Central Active Photo */}
        <div className="relative w-full max-w-[1000px] h-[75vh] flex items-center justify-center">
          <Image
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            fill
            priority
            sizes="1000px"
            className="object-contain"
          />
        </div>

        {/* Next Button */}
        <button
          type="button"
          disabled={isLast}
          onClick={onNext}
          aria-label="Next photo"
          className={`w-12 h-12 rounded-full border border-white/40 bg-black/40 text-white flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
            isLast
              ? "opacity-30 cursor-not-allowed"
              : "hover:bg-white hover:text-black hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
          }`}
        >
          <ChevronRightIcon size={18} />
        </button>
      </div>

      {/* Bottom Caption Bar */}
      <div className="h-16 px-8 flex items-center justify-center text-sm text-gray-300">
        <p className="truncate max-w-xl text-center">{currentPhoto.alt}</p>
      </div>
    </div>
  );
};
