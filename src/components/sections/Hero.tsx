import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div id="hero">
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "390/844" }}
      >
        <Image
          src="/images/Hero/Pengantin-Hero.svg"
          alt="Jusuf & Evelyn"
          fill
          className="object-cover object-top"
          priority
        />
        <div
          className="absolute top-0 left-0 w-full z-10"
          style={{
            height: "426px",
            background: "linear-gradient(to bottom, #554A38, transparent)",
          }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-start pt-[37.8%] text-center z-10">
          <p className="text-white font-ovo text-[14px] tracking-widest">
            The Wedding of
          </p>
          <h1 className="text-white font-bigCaslon text-[32px]">
            JUSUF & EVELYN
          </h1>
          <p className="text-white font-ovo text-[14px] mt-1">27 JUNE 2026</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
