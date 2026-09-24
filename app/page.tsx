"use client";

import React, { useRef } from "react";
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
    nextPhoto,
    prevPhoto,
  } = useGallery();

  const bookingCardRef = useRef<HTMLDivElement>(null);

  const handleHeroPhotoClick = (heroIndex: number) => {
    // Map hero photos to corresponding global photo index
    openPhotoTour();
  };

  const handleReserveScroll = () => {
    bookingCardRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* 1. Global Navigation Bar */}
      <Navbar />

      {/* 2. Scroll-Linked Sticky Header */}
      <StickyHeader onReserveClick={handleReserveScroll} />

      {/* 3. Main Content Container */}
      <main className="flex-1 max-w-[1120px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title & Action Row */}
        <TitleSection title={LISTING_DATA.title} />

        {/* 5-Photo Hero Grid */}
        <HeroGrid
          photos={LISTING_DATA.heroPhotos}
          onShowAllPhotos={() => openPhotoTour()}
          onPhotoClick={handleHeroPhotoClick}
        />

        {/* Two-Column Layout */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
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
              onShowAllAmenities={() => openPhotoTour("full-kitchen")}
            />

            <CalendarSection />
          </div>

          {/* Right Column (5 cols - Sticky Booking Card) */}
          <div ref={bookingCardRef} className="lg:col-span-5">
            <BookingCard
              pricePerNight={LISTING_DATA.pricing.pricePerNight}
              nights={LISTING_DATA.pricing.nights}
              cleaningFee={LISTING_DATA.pricing.cleaningFee}
              serviceFee={LISTING_DATA.pricing.serviceFee}
              checkInDate={LISTING_DATA.pricing.checkInDate}
              checkoutDate={LISTING_DATA.pricing.checkoutDate}
              onReserveClick={() => alert("Reservation request initiated!")}
            />
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
        onSelectPhoto={(idx) => openLightbox(idx)}
      />

      <LightboxModal
        isOpen={isLightboxOpen}
        photos={allPhotos}
        currentIndex={activePhotoIndex}
        onClose={closeLightbox}
        onNext={nextPhoto}
        onPrev={prevPhoto}
      />
    </div>
  );
}
