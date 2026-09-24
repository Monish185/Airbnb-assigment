"use client";

import { useState, useEffect } from "react";

export function useScrollPosition(threshold: number = 550): {
  isPastThreshold: boolean;
  scrollY: number;
} {
  const [scrollY, setScrollY] = useState(0);
  const [isPastThreshold, setIsPastThreshold] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsPastThreshold(currentScrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return { isPastThreshold, scrollY };
}
