"use client";
import { useState, useEffect } from "react";
import { usePreloader } from "@/hooks/usePreloader";
import LoadingScreen from "@/components/ui/LoadingScreen";
import Opening from "@/components/popup/Opening";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Countdown from "@/components/sections/Countdown";
import Gallery from "@/components/sections/Gallery";
import EventOrder from "@/components/sections/EventOrder";
import Dresscode from "@/components/sections/DresscodeRsvp";
import WeddingGift from "@/components/sections/WeddingGift";
import Wishes from "@/components/sections/Wishes";
import Thankyou from "@/components/sections/Thankyou";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const [start, setStart] = useState<boolean>(false);
  const [showLoading, setShowLoading] = useState<boolean>(true);
  const { progress } = usePreloader();

  useEffect(() => {
  if (!start) {
    document.body.classList.add("overflow-hidden");
    document.documentElement.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
    document.documentElement.classList.remove("overflow-hidden");
  }
}, [start]);

  return (
    <>
      <main className="block">
        <Header />
        <Hero start={start} />
        <About />
        <Countdown />
        <EventOrder />
        <Gallery />
        <Dresscode />
        <WeddingGift />
        <Wishes />
        <Thankyou />
        <Footer />
      </main>

      <LoadingScreen
        progress={progress}
        onDone={() => setShowLoading(false)}
      />
{progress === 100 && !showLoading && !start && (
  <Opening setStart={setStart} namaTamu="Sela" />
)}
    </>
  );
}