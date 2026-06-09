"use client";
import { useEffect, useState } from "react";

const IMAGES_TO_PRELOAD = [
  // OPENING
  "/images/Opening/Pantai-Mobile.webp",
  "/images/Opening/Pantai-Dekstop.webp",
  "/images/Opening/Aset-Bawah.webp",
  "/images/Opening/Aset-Atas.webp",

  // HERO
  "/images/Hero/Pengantin.webp",

  // POPUP PESAN
  "/images/Popup/TandaCeklisBg.svg", 
  "/images/Popup/TandaSeru.svg", 
  "/images/Popup/TandaTanya.svg", 
];

export function usePreloader() {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const total = IMAGES_TO_PRELOAD.length;

    if (total === 0) {
      Promise.resolve().then(() => {
        setProgress(100);
        setLoaded(true);
      });
      return;
    }

    let count = 0;

    IMAGES_TO_PRELOAD.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      img.onload = img.onerror = () => {
        count++;
        setProgress(Math.round((count / total) * 100));
        if (count === total) setLoaded(true);
      };
    });
  }, []);

  return { loaded, progress };
}