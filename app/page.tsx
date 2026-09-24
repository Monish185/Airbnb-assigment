"use client";

import React, { useRef, useState, useEffect } from "react";
import { LISTING_DATA } from "@/data/listing";
import { useGallery } from "@/hooks/useGallery";

import { Navbar } from "@/components/layout/Navbar";
import { StickyHeader } from "@/components/layout/StickyHeader";
import { Footer } from "@/components/layout/Footer";

import { TitleSection } from "@/components/listing/TitleSection";
import { HeroGrid } from "@/components/listing/HeroGrid";
import { OverviewSection } from "@/components/listing/OverviewSection";
import { HighlightsSection } from "@/components/listing/HighlightsSection";
import { DescriptionSection } from "@/components/listing/DescriptionSection";
import { SleepingArrangements } from "@/components/listing/SleepingArrangements";
import { AmenitiesSection } from "@/components/listing/AmenitiesSection";
import { CalendarSection } from "@/components/listing/CalendarSection";
import { BookingCard } from "@/components/listing/BookingCard";
import { ReviewsSection } from "@/components/listing/ReviewsSection";
import { LocationSection } from "@/components/listing/LocationSection";
import { HostSection } from "@/components/listing/HostSection";
import { ThingsToKnowSection } from "@/components/listing/ThingsToKnowSection";
import { NearbyStaysSection } from "@/components/listing/NearbyStaysSection";

import { PhotoTourModal } from "@/components/gallery/PhotoTourModal";
import { LightboxModal } from "@/components/gallery/LightboxModal";
import { AmenitiesModal } from "@/components/listing/AmenitiesModal";

export default function ListingPage() {
  const {
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
    isAmenitiesModalOpen,
    openAmenitiesModal,
    closeAmenitiesModal,
    nextPhoto,
    prevPhoto,
  } = useGallery();

  const bookingCardRef = useRef<HTMLDivElement>(null);
  const [bookingDates, setBookingDates] = useState({
    checkInDate: LISTING_DATA.pricing.checkInDate,
    checkoutDate: LISTING_DATA.pricing.checkoutDate,
    nights: LISTING_DATA.pricing.nights,
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showToast = (message: string, duration = 2000) => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    setToastMessage(message);
    toastTimeoutRef.current = setTimeout(() => {
      setToastMessage(null);
    }, duration);
  };

  const handleReserveClick = () => {
    showToast("You won't be charged yet");
  };

  const handleShareClick = () => {
    showToast("Share options");
  };

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

  const handleHeroPhotoClick = (heroIndex: number) => {
    // Open lightbox directly on hero photo click
    openLightbox(heroIndex, false);
  };

  const handleReserveScroll = () => {
    bookingCardRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    handleReserveClick();
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* 1. Global Navigation Bar */}
      <Navbar />

      {/* 2. Scroll-Linked Sticky Header */}
      <StickyHeader
        pricePerNight={LISTING_DATA.pricing.pricePerNight}
        nights={bookingDates.nights}
        rating={LISTING_DATA.rating}
        reviewsCount={LISTING_DATA.reviewsCount}
        onReserveClick={handleReserveScroll}
      />

      {/* 3. Main Content Container */}
      <main className="flex-1 max-w-[1120px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title & Action Row */}
        <TitleSection
          title={LISTING_DATA.title}
          onShareClick={handleShareClick}
        />

        {/* 5-Photo Hero Grid */}
        <HeroGrid
          photos={LISTING_DATA.heroPhotos}
          onShowAllPhotos={() => openPhotoTour()}
          onPhotoClick={handleHeroPhotoClick}
        />

        {/* Two-Column Layout */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7">
            <OverviewSection
              propertyType={LISTING_DATA.propertyType}
              guestsCount={LISTING_DATA.guestsCount}
              bedroomsCount={LISTING_DATA.bedroomsCount}
              bedsCount={LISTING_DATA.bedsCount}
              bathroomsCount={LISTING_DATA.bathroomsCount}
              rating={LISTING_DATA.rating}
              reviewsCount={LISTING_DATA.reviewsCount}
              isGuestFavourite={LISTING_DATA.isGuestFavourite}
              host={LISTING_DATA.host}
            />

            <HighlightsSection highlights={LISTING_DATA.highlights} />

            <DescriptionSection
              translationNotice={LISTING_DATA.description.translationNotice}
              body={LISTING_DATA.description.body}
            />

            <SleepingArrangements arrangements={LISTING_DATA.sleepingArrangements} />

            <AmenitiesSection
              amenities={LISTING_DATA.amenities}
              onShowAllAmenities={openAmenitiesModal}
            />

            <CalendarSection onDatesChange={setBookingDates} />
          </div>

          {/* Right Column (5 cols - Sticky Booking Card) */}
          <div ref={bookingCardRef} className="lg:col-span-5 relative">
            <div className="sticky top-28 self-start w-full max-w-[370px] ml-auto">
              <BookingCard
                pricePerNight={LISTING_DATA.pricing.pricePerNight}
                nights={bookingDates.nights}
                cleaningFee={LISTING_DATA.pricing.cleaningFee}
                serviceFee={LISTING_DATA.pricing.serviceFee}
                checkInDate={bookingDates.checkInDate}
                checkoutDate={bookingDates.checkoutDate}
                onReserveClick={handleReserveClick}
              />
            </div>
          </div>
        </div>

        {/* Full-Width Reviews Section */}
        <ReviewsSection
          rating={LISTING_DATA.rating}
          reviewsCount={LISTING_DATA.reviewsCount}
          isGuestFavourite={LISTING_DATA.isGuestFavourite}
          ratingsBreakdown={LISTING_DATA.ratingsBreakdown}
          reviewTags={LISTING_DATA.reviewTags}
          reviews={LISTING_DATA.reviews}
          onShowAllReviews={() => openPhotoTour()}
        />

        {/* Location & Map Section */}
        <LocationSection
          locationName={LISTING_DATA.neighborhood.locationName}
          description={LISTING_DATA.neighborhood.description}
        />

        {/* Meet Your Host Section */}
        <HostSection host={LISTING_DATA.host} />

        {/* Things To Know Section */}
        <ThingsToKnowSection
          cancellationPolicy={LISTING_DATA.thingsToKnow.cancellationPolicy}
          houseRules={LISTING_DATA.thingsToKnow.houseRules}
          safetyAndProperty={LISTING_DATA.thingsToKnow.safetyAndProperty}
        />

        {/* Nearby Stays Carousel */}
        <NearbyStaysSection stays={LISTING_DATA.nearbyStays} />
      </main>

      {/* 4. Global Footer */}
      <Footer />

      {/* 5. Modals & Overlays */}
      <PhotoTourModal
        isOpen={isPhotoTourOpen}
        categories={LISTING_DATA.photoCategories}
        activeCategoryId={activeCategoryId}
        onClose={closePhotoTour}
        onSelectPhoto={(idx) => openLightbox(idx, true)}
        onShareClick={handleShareClick}
      />

      <LightboxModal
        isOpen={isLightboxOpen}
        photos={allPhotos}
        currentIndex={activePhotoIndex}
        categories={LISTING_DATA.photoCategories}
        onClose={closeLightbox}
        onViewGallery={openGalleryFromLightbox}
        onNext={nextPhoto}
        onPrev={prevPhoto}
      />

      {/* 6. Amenities Full Dialog Modal */}
      <AmenitiesModal
        isOpen={isAmenitiesModalOpen}
        amenitiesGroups={LISTING_DATA.allAmenities}
        onClose={closeAmenitiesModal}
      />

      {/* 7. Bottom Notification Toast */}
      <div
        role="status"
        aria-live="polite"
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[70] pointer-events-none transition-all duration-300 ease-out ${
          toastMessage
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-3 scale-95"
        }`}
      >
        <div className="bg-[#222222] text-white text-[14px] font-normal px-4 py-2.5 rounded-[8px] shadow-[0_4px_16px_rgba(0,0,0,0.25)] whitespace-nowrap">
          {toastMessage}
        </div>
      </div>
    </div>
  );
}
