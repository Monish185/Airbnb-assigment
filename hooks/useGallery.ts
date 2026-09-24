"use client";

import { useState, useEffect, useCallback } from "react";
import { LISTING_DATA, PhotoItem } from "@/data/listing";

export interface GalleryState {
  isPhotoTourOpen: boolean;
  isLightboxOpen: boolean;
  activePhotoIndex: number;
  activeCategoryId: string;
  allPhotos: PhotoItem[];
  openPhotoTour: (categoryId?: string) => void;
  closePhotoTour: () => void;
  openLightbox: (photoIndex: number, fromTour?: boolean) => void;
  closeLightbox: () => void;
  openGalleryFromLightbox: () => void;
  nextPhoto: () => void;
  prevPhoto: () => void;
  setActiveCategoryId: (id: string) => void;
}

export function useGallery(): GalleryState {
  // Collect all photos flat for sequential lightbox navigation
  const allPhotos = LISTING_DATA.photoCategories.flatMap((cat) => cat.photos);

  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [activeCategoryId, setActiveCategoryId] = useState(
    LISTING_DATA.photoCategories[0].id
  );

  // Manage body scroll lock
  useEffect(() => {
    if (isPhotoTourOpen || isLightboxOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isPhotoTourOpen, isLightboxOpen]);

  const openPhotoTour = useCallback((categoryId?: string) => {
    if (categoryId) {
      setActiveCategoryId(categoryId);
    }
    setIsPhotoTourOpen(true);
  }, []);

  const closePhotoTour = useCallback(() => {
    setIsPhotoTourOpen(false);
  }, []);

  const openLightbox = useCallback((photoIndex: number, fromTour = false) => {
    setActivePhotoIndex(photoIndex);
    if (!fromTour) {
      // If opened from hero grid, we don't open the photo tour underneath
      setIsPhotoTourOpen(false);
    }
    setIsLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
  }, []);

  const openGalleryFromLightbox = useCallback(() => {
    setIsLightboxOpen(false);
    setIsPhotoTourOpen(true);
  }, []);

  const nextPhoto = useCallback(() => {
    setActivePhotoIndex((prev) => Math.min(prev + 1, allPhotos.length - 1));
  }, [allPhotos.length]);

  const prevPhoto = useCallback(() => {
    setActivePhotoIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        nextPhoto();
      } else if (e.key === "ArrowLeft") {
        prevPhoto();
      } else if (e.key === "Escape") {
        closeLightbox();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, nextPhoto, prevPhoto, closeLightbox]);

  return {
    isPhotoTourOpen,
    isLightboxOpen,
    activePhotoIndex,
    activeCategoryId,
    allPhotos,
    openPhotoTour,
    closePhotoTour,
    openLightbox,
    closeLightbox,
    openGalleryFromLightbox,
    nextPhoto,
    prevPhoto,
    setActiveCategoryId,
  };
}
