"use client";

import React, { useEffect, useRef, useState } from "react";
import { CloseIcon, CheckIcon, MinusIcon } from "../icons/Icons";
import { AmenityDetailIcons } from "../icons/AmenityDetailIcons";
import { AmenityGroup } from "../../data/listing";

interface AmenitiesModalProps {
  isOpen: boolean;
  amenitiesGroups: AmenityGroup[];
  onClose: () => void;
}

export const AmenitiesModal: React.FC<AmenitiesModalProps> = ({
  isOpen,
  amenitiesGroups,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
      // Focus close button on mount
      const timer = setTimeout(() => {
        closeBtnRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 200);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
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
  }, [isOpen]);

  if (!isOpen && !isClosing) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 md:p-6 backdrop-blur-[1px] ${
        isClosing ? "animate-modal-backdrop-out" : "animate-modal-backdrop-in"
      }`}
      onClick={handleClose}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="amenities-modal-title"
        className={`bg-white rounded-[12px] max-w-[780px] w-full max-h-[85vh] overflow-y-auto p-6 md:p-8 relative shadow-2xl ${
          isClosing ? "animate-modal-panel-out" : "animate-modal-panel-in"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Close Button */}
        <div className="sticky top-0 bg-white pt-1 pb-3 -mt-2 -mx-2 px-2 z-10 flex items-center">
          <button
            ref={closeBtnRef}
            type="button"
            aria-label="Close"
            onClick={handleClose}
            className="p-2 -ml-1 hover:bg-[#F7F7F7] rounded-full transition-colors text-[#222222] focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            <CloseIcon size={16} />
          </button>
        </div>

        {/* Modal Title */}
        <h2
          id="amenities-modal-title"
          className="text-[22px] md:text-[24px] font-semibold text-[#222222] mb-8"
        >
          What this place offers
        </h2>

        {/* Categories and Amenities List */}
        <div className="space-y-8">
          {amenitiesGroups.map((group) => (
            <div key={group.category} className="space-y-0">
              <h3 className="font-semibold text-[18px] text-[#222222] mb-2">
                {group.category}
              </h3>
              <div>
                {group.items.map((item) => {
                  const IconComp =
                    AmenityDetailIcons[item.name] ||
                    AmenityDetailIcons[item.name.replace(/&amp;/g, "&")];
                  const isAvailable = item.available !== false;

                  return (
                    <div
                      key={item.name}
                      className="flex items-center gap-4 py-5 border-b border-[#EBEBEB]"
                    >
                      <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 text-[#222222]">
                        {!isAvailable ? (
                          <MinusIcon size={20} className="text-[#717171]" />
                        ) : IconComp ? (
                          <IconComp size={24} className="text-[#222222]" />
                        ) : (
                          <CheckIcon size={20} className="text-[#222222]" />
                        )}
                      </div>
                      <span
                        className={`text-[16px] leading-6 ${
                          !isAvailable
                            ? "line-through text-[#717171]"
                            : "text-[#222222]"
                        }`}
                      >
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

