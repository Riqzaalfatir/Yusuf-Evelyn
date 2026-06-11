"use client";
import { useEffect, useState } from "react";

// Dipakai di mobile DAN desktop
const IMAGES_COMMON = [
  // OPENING
  "/images/Opening/Aset-Bawah.webp",
  "/images/Opening/Aset-Atas.webp",

  // HERO
  "/images/Hero/Logo-JE.webp",
  

  // ABOUT
  "/images/About/Pengantin-LakiLaki.webp",
  "/images/About/Pengantin-Perempuan.webp",

   // RUMPUT GIFT
  "/images/About/seawed.gif",

  // EVENT ORDER
  "/images/EventOrder/fish.gif",

  // POPUP PESAN
  "/images/Popup/TandaCeklisBg.svg",
  "/images/Popup/TandaSeru.svg",
  "/images/Popup/TandaTanya.svg",
];

// Hanya mobile
const IMAGES_MOBILE = [
  "/images/Opening/Pantai-Mobile.webp",
  "/images/Hero/Pengantin.webp",
  "/images/About/Bg-Marmer.svg",
];

// Hanya desktop
const IMAGES_DESKTOP = [
  "/images/Opening/Pantai-Dekstop.webp",
  "/images/Hero/dekstop/Bg-Hero.webp",
  "/images/About/dekstop/Bg-Marmer.svg",
];

export function usePreloader() {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 1024;

    const images = [
      ...IMAGES_COMMON,
      ...(isMobile ? IMAGES_MOBILE : IMAGES_DESKTOP),
    ];

    const total = images.length;

    if (total === 0) {
      Promise.resolve().then(() => {
        setProgress(100);
        setLoaded(true);
      });
      return;
    }

    let count = 0;

    images.forEach((src) => {
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
