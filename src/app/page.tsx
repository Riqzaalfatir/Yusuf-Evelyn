import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Countdown from "@/components/sections/Countdown";
import Gallery from "@/components/sections/Gallery";
import EventOrder from "@/components/sections/EventOrder";
import Dresscode from "@/components/sections/Dresscode";
import WeddingGift from "@/components/sections/WeddingGift";
import Wishes from "@/components/sections/Wishes";
import Thankyou from "@/components/sections/Thankyou";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
    <Header/>
      <Hero />
      <About />
      <Countdown />
      <EventOrder />
      <Gallery />
      <Dresscode />
      <WeddingGift />
      <Wishes />
      <Thankyou/>
      <Footer />
    </>
  );
}
