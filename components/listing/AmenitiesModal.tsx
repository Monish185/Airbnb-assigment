"use client";

import React, { useEffect, useRef } from "react";
import { CloseIcon, CheckIcon, MinusIcon } from "../icons/Icons";
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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 md:p-6 backdrop-blur-[1px] animate-fade-in"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="amenities-modal-title"
        className="bg-white rounded-[12px] max-w-3xl w-full max-h-[85vh] overflow-y-auto p-8 relative shadow-2xl animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeBtnRef}
          type="button"
          aria-label="Close modal"
          onClick={onClose}
          className="sticky top-0 float-left -mt-2 -ml-2 p-2 hover:bg-[#F7F7F7] rounded-full transition-colors bg-white z-10 text-[#222222] focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
        >
          <CloseIcon size={20} />
        </button>

        <div className="clear-both pt-4">
          <h2
            id="amenities-modal-title"
            className="text-[22px] font-semibold text-[#222222] mb-8"
          >
            What this place offers
          </h2>

          <div className="space-y-8 divide-y divide-[#EBEBEB]">
            {amenitiesGroups.map((group, idx) => (
              <div key={group.category} className={idx > 0 ? "pt-6" : ""}>
                <h3 className="font-semibold text-[18px] text-[#222222] mb-4">
                  {group.category}
                </h3>
                <div className="space-y-4">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between py-1"
                    >
                      <div className="flex items-center gap-4">
                        {item.available !== false ? (
                          <>
                            <CheckIcon
                              size={20}
                              className="text-[#222222] flex-shrink-0"
                            />
                            <span className="text-[16px] text-[#222222]">
                              {item.name}
                            </span>
                          </>
                        ) : (
                          <>
                            <MinusIcon
                              size={20}
                              className="text-[#6A6A6A] flex-shrink-0"
                            />
                            <span className="text-[16px] line-through text-[#6A6A6A]">
                              {item.name}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
